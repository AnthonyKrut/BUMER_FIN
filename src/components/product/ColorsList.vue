<template>
  <div class="colors-list">
    <div class="colors-list__label">
      {{ $t('product.color') }}:
    </div>

    <div class="colors-list__list">
      <div
        class="colors-list__color colors-list__color--active"
        :style="{backgroundColor: product.color.hex}"
      >
        <div class="colors-list__color-check">
          <SvgImage name="check1" />
        </div>
      </div>
      <div
        v-for="color in colors"
        :key="color.color_code"
        class="colors-list__color"
        :style="{backgroundColor: color.hex}"
      />
    </div>
  </div>
</template>

<script>
import SvgImage from '@/components/common/SvgImage'

export default {
  name: 'ColorsList',
  components: {
    SvgImage,
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      colors: [
        {
          hex: '#dcdcdc',
          is_active: true,
        },
        {
          hex: '#cdcdcd',
          is_active: false,
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.colors-list {
  margin-bottom: 3em;
  font-size: adaptive_fz(12px, 10px);
  font-weight: 400;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    margin-bottom: 1em;
  }
}

.colors-list__label {
  margin-bottom: 1em;
  padding-left: 2px;
  color: $text_color_dark;

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
}

.colors-list__list {
  display: flex;
  padding-left: 5px;

  @media screen and (max-width: 767px) {
    padding-left: 1.15em;
  }
}

.colors-list__color {
  width: 20px;
  height: 20px;
  position: relative;
  color: #000;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 10px;
  }

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

  &:hover {
    &:before {
      border: 1px solid #000000;
    }
  }

  &.colors-list__color--active {
    cursor: default;

    &:before {
      border: 1px solid #000000;
    }
  }
}

.colors-list__color-check {
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

</style>
