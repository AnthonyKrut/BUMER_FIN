<template>
  <div class="catalog-filters">
    <div class="catalog-filters__body">
      <div class="catalog-filters__filter-wrapper">
        <Multiselect
          v-model="selectedFilters.sortBy"
          class="catalog-filters__filter"
          :options="sortByList"
          label="label"
          track-by="label"
          :placeholder="$t('product.sort_by')"
          :show-labels="false"
          @input="onFiltersChanged"
        >
          <template slot="singleLabel">
            {{ $t('product.sort_by') }}
          </template>
        </Multiselect>
      </div>

      <div class="catalog-filters__filter-wrapper">
        <Multiselect
          v-model="selectedFilters.sizes"
          class="catalog-filters__filter"
          multiple
          :options="sizesList"
          :placeholder="$t('product.sizes')"
          :searchable="false"
          :show-labels="false"
          @input="onFiltersChanged"
        >
          <template slot="selection" slot-scope="{ values, isOpen }">
            <span v-if="values.length || isOpen" class="multiselect__single">
              {{ $t('product.sizes') }}
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
          label="name_ru"
          multiple
          :options="colorsList"
          :placeholder="$t('product.colors')"
          :searchable="false"
          :show-labels="false"
          track-by="id"
          @input="onFiltersChanged"
        >
          <template slot="selection" slot-scope="{ values, isOpen }">
            <span v-if="values.length || isOpen" class="multiselect__single">
              {{ $t('product.colors') }}
            </span>
          </template>
          <template slot="option" slot-scope="{option}">
            <div
              class="catalog-filters__custom-option"
              :class="{'catalog-filters__custom-option--active': isActiveColor(option)}"
            >
              <div class="catalog-filters__custom-option-color" :style="`background:${option.hex};`">
                <div v-if="isActiveColor(option)" class="catalog-filters__custom-option-check">
                  <SvgImage name="check1" />
                </div>
              </div>
              <div class="catalog-filters__custom-option-label">
                {{ option[`name_${$i18n.locale}`] }}
              </div>
            </div>
          </template>
        </Multiselect>
      </div>

      <div class="catalog-filters__filter-wrapper">
        <Multiselect
          v-model="selectedFilters.seasons"
          class="catalog-filters__filter"
          :options="seasonsList"
          :placeholder="$t('product.seasons')"
          :searchable="false"
          :show-labels="false"
          multiple
          track-by="id"
          :label="`name_${$i18n.locale}`"
          @input="onFiltersChanged"
        >
          <template slot="selection" slot-scope="{ values, isOpen }">
            <span v-if="values.length || isOpen" class="multiselect__single">
              {{ $t('product.seasons') }}
            </span>
          </template>
        </Multiselect>
      </div>
    </div>

    <div v-if="isAnyFilterSelected" class="catalog-filters__selected">
      <div v-if="selectedFilters.sortBy" class="catalog-filters__selected-group">
        {{ $t('product.sort_by') }}:
        <div class="catalog-filters__selected-item">
          {{ selectedFilters.sortBy && selectedFilters.sortBy.label }}
          <div class="catalog-filters__selected-item-close" @click="removeSorting()">
            &times;
          </div>
        </div>
      </div>

      <div v-if="selectedFilters.sizes.length" class="catalog-filters__selected-group">
        {{ $t('product.sizes') }}:
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
        {{ $t('product.colors') }}:
        <div
          v-for="color in selectedFilters.colors"
          :key="color.id"
          class="catalog-filters__selected-item"
        >
          {{ color[`name_${$i18n.locale}`] }}
          <div class="catalog-filters__selected-item-close" @click="removeSelectedFilter(color, 'colors')">
            &times;
          </div>
        </div>
      </div>

      <div v-if="selectedFilters.seasons.length" class="catalog-filters__selected-group">
        {{ $t('product.seasons') }}:
        <div
            v-for="season in selectedFilters.seasons"
            :key="season.id"
            class="catalog-filters__selected-item"
        >
          {{ season[`name_${$i18n.locale}`] }}
          <div class="catalog-filters__selected-item-close" @click="removeSelectedFilter(season, 'seasons')">
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
import {mapActions, mapState} from 'vuex'

export default {
  name: 'CatalogFilters',
  components: {
    Multiselect,
    SvgImage,
  },
  data() {
    return {
      sortByList: [
        {
          key: 'Created',
          label: this.$t('product.novelty'),
          desc: false,
        },
        {
          key: 'Price',
          label: this.$t('product.price_asc'),
          desc: false,
        },
        {
          key: 'Price',
          label: this.$t('product.price_desc'),
          desc: true,
        },
      ],
      sizesList: [
        40,
        41,
        42,
        43,
        44,
        45,
      ],
      selectedFilters: {
        sortBy: null,
        desc: true,
        sizes: [],
        colors: [],
        seasons: [],
      },
    }
  },
  computed: {
    ...mapState('colors', {colorsList: 'colors'}),
    ...mapState('seasons', {seasonsList: 'seasons'}),
    isAnyFilterSelected() {
      return !!(this.selectedFilters.sortBy
        || this.selectedFilters.sizes.length
        || this.selectedFilters.colors.length
        || this.selectedFilters.seasons.length)
    },
  },
  created() {
    this.fetchColors()
    this.fetchSeasons()
  },
  methods: {
    ...mapActions('colors', ['fetchColors']),
    ...mapActions('seasons', ['fetchSeasons']),
    removeSorting() {
      this.selectedFilters.sortBy = null
      this.selectedFilters.desc = true
      this.onFiltersChanged()
    },
    removeSelectedFilter(val, type) {
      this.selectedFilters[type] = this.selectedFilters[type].filter(item => item !== val)
      this.onFiltersChanged()
    },
    isActiveColor(val) {
      return this.selectedFilters.colors.some(item => item === val)
    },
    isActiveSize(val) {
      return this.selectedFilters.sizes.some(item => item === val)
    },
    onFiltersChanged() {
      this.$emit('filters-changed', {
        sortBy: this.selectedFilters.sortBy ? this.selectedFilters.sortBy.key : 'Created',
        desc: this.selectedFilters.sortBy ? this.selectedFilters.sortBy.desc : true,
        sizes: this.selectedFilters.sizes.length ? this.selectedFilters.sizes : null,
        colors: this.selectedFilters.colors.length ? this.selectedFilters.colors.map(i => i.id) : null,
        seasons: this.selectedFilters.seasons.length ? this.selectedFilters.seasons.map(i => i.id) : null,
      })
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.catalog-filters {
  margin-bottom: 30px;

  @media screen and (max-width: 767px) {
    margin-bottom: 15px;;
  }
}

.catalog-filters__body {
  display: flex;
  align-items: flex-start;

  @media screen and (max-width: 767px) {
    flex-direction: column;
  }
}

.catalog-filters__filter-wrapper {
  margin-right: 50px;

  &:last-of-type {
    margin-right: 0;
  }
}

.multiselect--active {
  z-index: 3;
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
  gap: 8px;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }
}

.catalog-filters__selected-group {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
}

.catalog-filters__selected-item {
  padding: 0 4px 0 10px;
  background: #f1f1f1;
  display: inline-flex;
  align-items: center;
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

  .catalog-filters__body {
    .catalog-filters__filter-wrapper {
      &:nth-child(1) {
        .multiselect__input {
          max-width: 128px !important;
        }
      }
      &:nth-child(4) {
        .multiselect__input {
          max-width: 82px !important;
        }
      }
    }
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

  .catalog-filters__body {
    .catalog-filters__filter-wrapper {
      &:nth-child(1) {
        .multiselect__placeholder {
          width: 128px;
        }
      }
      &:nth-child(4) {
        .multiselect__placeholder {
          width: 82px;
        }
      }
    }
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
    right: 0;

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
