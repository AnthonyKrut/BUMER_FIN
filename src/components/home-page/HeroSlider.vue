<template>
  <div>
    <VueAgile>
      <div class="slide">
        <h3>slide 1</h3>
      </div>

      <div class="slide">
        <h3>slide n</h3>
      </div>
    </VueAgile>
    <div class="slider">
      <div
        v-for="slide in slides"
        :key="slide.text"
        class="slider__item"
        :style="`background-image: url(${slide.image})`"
      >
        <div class="item__content">
          <SvgImage name="logo" />
          <div class="item__moto">
            {{ slide.text }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SvgImage from '../common/SvgImage.vue'
// import { VueAgile } from 'vue-agile'

export default {
  name: 'HeroSlider',
  components: {
    SvgImage,
  },
  data() {
    return {
      swiperOption: {
        // align: "center",
        // circular: true,
        // panelsPerView: 1
      },
      slides: [
        {
          image: '/img/hero-slider/img-slider01.jpg',
          text: 'УДОБСТВО. ЛЕГКОСТЬ. ПРАКТИЧНОСТЬ.',
        },
        {
          image: '/img/hero-slider/img-slider02.jpg',
          text: 'УДОБСТВО. ЛЕГКОСТЬ. ПРАКТИЧНОСТЬ.',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";
@import "../../assets/scss/mixins";

.slider {
  @include slider_fix;
  position: relative;
  justify-content: space-evenly;
  margin-bottom: adaptive_fz(60px, 20px);
}

.slick-arrow {
  position: absolute;
  top: calc(50% - 0.5 * Min(52.5px, Max(30px, 0.75 * 5vw)));
  z-index: 5;
  display: block;
  width: 5vw;
  min-width: 40px;
  max-width: 70px;
  height: calc(0.75 * 5vw);
  min-height: 30px;
  max-height: 52.5px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 0;
  cursor: pointer;

  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
  }

  &.slick-prev {
    left: 3vw;

    &::before {
      background: url('../../assets/img/svg/arr-left.svg') center/ 66% no-repeat;
    }
  }

  &.slick-next {
    right: 3vw;

    &::before {
      background: url('../../assets/img/svg/arr-right.svg') center/ 66% no-repeat;
    }
  }
}

.slick-track {
  display: flex;
}

.slider__item {
  height: calc(100vh - 161px);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'PT Sans Caption', sans-serif;
  font-size: adaptive_fz(30px, 10px);
  font-weight: 700;
  color: $contrast_color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.slider__item-logo {
  margin-bottom: 3.25em;
  display: block;
  width: 19.25em;
}

.slick-dots {
  position: absolute;
  bottom: 7px;
  left: calc(50% - 0.5 * 29px);
  display: flex;
  font-size: 0;

  li {
    &:not(:last-child) {
      margin-right: 15px;
    }

    button {
      width: 7px;
      height: 7px;
      border: none;
      border-radius: 50%;
      background-color: $contrast_color;
    }

    &.slick-active button {
      background-color: $grey_color_dark;
    }
  }
}

</style>
