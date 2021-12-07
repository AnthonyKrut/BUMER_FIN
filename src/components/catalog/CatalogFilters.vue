<template>
  <div class="catalog-filters">
    <div class="catalog-filters__body">
      <div class="catalog-filters__filter-wrapper">
        <Multiselect
          v-model="selectedFilters.sortBy"
          class="catalog-filters__filter"
          :options="filters.sortBy"
          placeholder="Сортировать по"
          :show-labels="false"
        >
          <template slot="singleLabel">
            Сортировать по
          </template>
        </Multiselect>
      </div>

      <div class="catalog-filters__filter-wrapper">
        <Multiselect
          v-model="selectedFilters.sizes"
          class="catalog-filters__filter"
          multiple
          :options="filters.sizes"
          placeholder="Размеры"
          :searchable="false"
          :show-labels="false"
        >
          <template slot="selection" slot-scope="{ values, isOpen }">
            <span v-if="values.length || isOpen" class="multiselect__single">
              Размеры
            </span>
          </template>
          <template slot="option" slot-scope="{option}">
            <div class="catalog-filters__custom-option">
              <div class="catalog-filters__custom-option-checkbox">
                <SvgImage v-if="isActiveSize(option)" name="check1" />
              </div>
              <div class="catalog-filters__custom-option-label">
                {{ option }}
              </div>
            </div>
          </template>
        </Multiselect>
      </div>

      <div class="catalog-filters__filter-wrapper">
        <Multiselect
          v-model="selectedFilters.colors"
          class="catalog-filters__filter"
          label="color_name"
          multiple
          :options="filters.colors"
          placeholder="Цвета"
          :searchable="false"
          :show-labels="false"
          track-by="color_code"
        >
          <template slot="selection" slot-scope="{ values, isOpen }">
            <span v-if="values.length || isOpen" class="multiselect__single">
              Цвета
            </span>
          </template>
          <template slot="option" slot-scope="{option}">
            <div
              class="catalog-filters__custom-option"
              :class="{'catalog-filters__custom-option--active': isActiveColor(option)}"
            >
              <div class="catalog-filters__custom-option-color" :style="`background:${option.color_code};`">
                <div v-if="isActiveColor(option)" class="catalog-filters__custom-option-check">
                  <SvgImage name="check1" />
                </div>
              </div>
              <div class="catalog-filters__custom-option-label">
                {{ option.color_name }}
              </div>
            </div>
          </template>
        </Multiselect>
      </div>

      <div class="catalog-filters__filter-wrapper">
        <Multiselect
          v-model="selectedFilters.category"
          class="catalog-filters__filter"
          :options="filters.category"
          placeholder="Вид обуви"
          :show-labels="false"
        >
          <template slot="singleLabel">
            Вид обуви
          </template>
        </Multiselect>
      </div>
    </div>

    <div class="catalog-filters__selected">
      <div v-if="selectedFilters.sortBy" class="catalog-filters__selected-group">
        Сортировать по:
        <div class="catalog-filters__selected-item">
          {{ selectedFilters.sortBy }}
          <div class="catalog-filters__selected-item-close" @click="selectedFilters.sortBy = null">
            &times;
          </div>
        </div>
      </div>

      <div v-if="selectedFilters.sizes.length" class="catalog-filters__selected-group">
        Размеры:
        <div
          v-for="size in selectedFilters.sizes"
          :key="size"
          class="catalog-filters__selected-item"
        >
          {{ size }}
          <div class="catalog-filters__selected-item-close" @click="removeSelectedFilter(size, 'sizes')">
            &times;
          </div>
        </div>
      </div>

      <div v-if="selectedFilters.colors.length" class="catalog-filters__selected-group">
        Цвета:
        <div
          v-for="color in selectedFilters.colors"
          :key="color.color_code"
          class="catalog-filters__selected-item"
        >
          {{ color.color_name }}
          <div class="catalog-filters__selected-item-close" @click="removeSelectedFilter(color, 'colors')">
            &times;
          </div>
        </div>
      </div>

      <div v-if="selectedFilters.category" class="catalog-filters__selected-group">
        Вид обуви:
        <div class="catalog-filters__selected-item">
          {{ selectedFilters.category }}
          <div class="catalog-filters__selected-item-close" @click="selectedFilters.category = null">
            &times;
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
import SvgImage from '@/components/common/SvgImage'

export default {
  name: 'CatalogFilters',
  components: {
    Multiselect,
    SvgImage,
  },
  data() {
    return {
      filters: {
        sortBy: [
          'Возрастанию цены',
          'Убыванию цены',
          'Новинкам',
        ],
        sizes: [
          34,
          35,
          36,
          37,
          38,
          39,
          40,
          41,
          42,
          43,
          44,
          45,
          46,
        ],
        colors: [
          {
            color_name: 'Зеленый',
            color_code: '#5c6b5c',
          },
          {
            color_name: 'Синий',
            color_code: '#3e5474',
          },
          {
            color_name: 'Терракотовый',
            color_code: '#f5973f',
          },
          {
            color_name: 'Коричневый',
            color_code: '#573a20',
          },
          {
            color_name: 'Серый',
            color_code: '#6d7073',
          },
          {
            color_name: 'Черный',
            color_code: '#000000',
          },
        ],
        category: [
          'Кроссовки',
          'Ботинки',
          'Туфли',
        ],
      },
      selectedFilters: {
        sortBy: null,
        sizes: [],
        colors: [],
        category: null,
      },
    }
  },
  methods: {
    removeSelectedFilter(val, type) {
      this.selectedFilters[type] = this.selectedFilters[type].filter(item => item !== val)
    },
    isActiveColor(val) {
      return this.selectedFilters.colors.some(item => item === val)
    },
    isActiveSize(val) {
      return this.selectedFilters.sizes.some(item => item === val)
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.catalog-filters {
  margin-bottom: 30px;
}

.catalog-filters__body {
  display: flex;
  align-items: flex-start;
}

.catalog-filters__filter-wrapper {
  margin-right: 50px;

  &:last-of-type {
    margin-right: 0;
  }
}

.catalog-filters__filter {
  flex-grow: 1;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
}

.catalog-filters__selected {
  font-size: 12px;
  color: #aaaaaa;
  min-height: 20px;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
}

.catalog-filters__selected-group {
  margin-bottom: 8px;
  margin-right: 20px;
}

.catalog-filters__selected-item {
  display: inline-block;
  padding: 0 4px 0 10px;
  background: #f1f1f1;
  display: inline-flex;
  align-items: center;
  margin-left: 8px;
}

.catalog-filters__selected-item-close {
  margin-left: 8px;
  cursor: pointer;
  font-size: 14px;
  position: relative;
  padding: 4px;

  &:hover {
    color: #000
  }
}

.catalog-filters__custom-option {
  display: flex;
  align-items: center;

  &.catalog-filters__custom-option--active {
    .catalog-filters__custom-option-color {
      &:before {
        border: 1px solid #000000;
      }
    }
  }
}

.catalog-filters__custom-option-color {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  position: relative;
  color: #000;

  &:before {
    content: " ";
    position: absolute;
    z-index: 2;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border: 1px solid #c4c4c4;
  }
}

.catalog-filters__custom-option-check {
  position: absolute;
  bottom: -3px;
  right: -3px;
  background: #000;
  height: 10px;
  width: 10px;
  display: flex;
  align-items: center;
  color: #FFFFFF;
  padding: 1px;
}

.catalog-filters__custom-option-label {
  color: #000;
  position: relative;
  top: 1px;
}

.catalog-filters__custom-option-checkbox {
  color: #000000;
  height: 17px;
  width: 17px;
  border: 1px solid #c4c4c4;
  margin-right: 10px;
  padding: 1px;
}

::v-deep {
  .multiselect__input {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    font-size: 14px;
    color: #000;
  }

  .multiselect__tags {
    padding-left: 0;
    border: none;
  }

  .multiselect__placeholder {
    color: #000;
    text-transform: uppercase;
    font-size: 14px;
  }

  .multiselect__option {
    font-size: 12px;
    padding: 14px 16px;
  }

  .multiselect__option--highlight {
    background: #fafafa;
    color: #000;
  }

  .multiselect__option--selected {
    color: #000000;
  }

  .multiselect__single {
    padding: 0;
    font-size: 14px;
    color: #000;
  }

  .multiselect__content-wrapper {
    border: none;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.23);
    border-radius: 0px;
    min-width: 180px;
  }

  .multiselect {
    &.multiselect--active {
      .multiselect__select {
        top: -2px;
      }
    }
  }

  .multiselect__select {
    padding-left: 0;

    &:before {
      content: "";
      border: solid black;
      border-width: 0 1px 1px 0;
      display: inline-block;
      padding: 4px;
      transform: rotate(45deg);
      top: 7%;
      margin: 0;
    }
  }
}

</style>
