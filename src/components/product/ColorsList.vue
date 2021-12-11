<template>
  <div class="colors-list">
    <div class="colors-list__label">
      Цвет:
    </div>

    <div class="colors-list__list">
      <div
        v-for="color in colors"
        :key="color.color_code"
        class="colors-list__color"
        :class="{'colors-list__color--active': color.is_active}"
        :style="{backgroundColor: color.color_code}"
      >
        <div v-if="color.is_active" class="colors-list__color-check">
          <SvgImage name="check1" />
        </div>
      </div>
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
  data() {
    return {
      colors: [
        {
          color_code: '#ff0000',
          is_active: true,
        },
        {
          color_code: '#477d22',
          is_active: false,
        },
        {
          color_code: '#ad9c2b',
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
  margin-bottom: 5.5em;
  font-size: adaptive_fz(12px, 9px);
  font-weight: 400;

  @media screen and (max-width: 767px) {
    display: flex;
    align-items: center;
    margin-bottom: 0;
  }
}

.colors-list__label {
  margin-bottom: 1em;
  color: $text_color_dark;

  @media screen and (max-width: 767px) {
    padding-left: 0.15em;
    width: 50%;
  }
}

.colors-list__list {
  display: flex;

  @media screen and (max-width: 767px) {
    width: 50%;
    padding-left: 1.15em;
  }
}

.colors-list__color {
  width: 20px;
  height: 20px;
  margin-right: 12px;
  position: relative;
  color: #000;
  cursor: pointer;

  @media screen and (max-width: 370px) {
    width: 20px;
    height: 20px;
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

  &:not(:last-child) {
    margin-right: 10px;
  }

  &.colors-list__color--active {
    cursor: default;

    &:before {
      border: 1px solid #000000;
    }
  }

  &:hover {
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
