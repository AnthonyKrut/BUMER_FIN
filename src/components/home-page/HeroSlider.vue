<template>
  <Swiper
    ref="swiper"
    class="swiper"
    :options="swiperOption"
  >
    <SwiperSlide
      v-for="(slide, index) in slides"
      :key="index"
      class="swiper__item"
      :style="`background-image: url(${slide.image})`"
    >
      <div class="swiper__item-content">
        <SvgImage class="swiper__item-logo" name="logo" />
        <div v-if="locale === 'ru'" class="swiper__item-text">
          {{ slide.text_ru }}
        </div>
        <div v-if="locale === 'ua'" class="swiper__item-text">
          {{ slide.text_ua }}
        </div>
      </div>
    </SwiperSlide>

    <div slot="pagination" class="swiper__pagination" />
    <div slot="button-prev" class="swiper__button swiper__button--prev" />
    <div slot="button-next" class="swiper__button swiper__button--next" />
  </Swiper>
</template>

<script>
import SvgImage from '../common/SvgImage.vue'
import {Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'

export default {
  name: 'HeroSlider',
  components: {
    SvgImage,
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 30,
        effect: 'fade',
        loop: true,
        autoplay: {
          delay: 4500,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper__pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper__button--next',
          prevEl: '.swiper__button--prev',
        },
      },
      slides: [
        {
          image: '/img/hero-slider/img-slider01.jpg',
          text_ru: 'Удобство. Легкость. Практичность.',
          text_ua: 'Зручність. Легкість. Практичність',
        },
        {
          image: '/img/hero-slider/img-slider02.jpg',
          text_ru: 'Удобство. Легкость. Практичность.',
          text_ua: 'Зручність. Легкість. Практичність',
        },
      ],
    }
  },
  computed: {
    locale() {
      return this.$i18n.locale
    },
  },
  watch: {
    '$i18n.locale'() {
      this.$refs.swiper.updateSwiper()
      // this.$refs.swiper.initSwiper()
      console.log('locale change', this.$refs.swiper)
    },
  },
  mounted() {
    console.log(this.$i18n)
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";
@import "../../assets/scss/mixins";

.swiper {
  @include slider_fix;
  position: relative;
  justify-content: space-evenly;
  margin-bottom: adaptive_fz(60px, 20px);

  @media (min-width: 700px) {
    //
  }
}

.swiper__button {
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

  &.swiper__button--prev {
    left: 3vw;

    &::before {
      background: url('../../assets/img/svg/arr-left.svg') center/ 66% no-repeat;
    }
  }

  &.swiper__button--next {
    right: 3vw;

    &::before {
      background: url('../../assets/img/svg/arr-right.svg') center/ 66% no-repeat;
    }
  }
}

.swiper__item {
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

.swiper__item-text {
  text-align: center;
}

.swiper__item-logo {
  margin-bottom: 3.25em;
  display: block;
  width: 19.25em;
}

.swiper__pagination {
  position: absolute;
  bottom: 7px;
  left: calc(50% - 0.5 * 29px);
  display: flex;
  font-size: 0;
  z-index: 2;

  ::v-deep .swiper-pagination-bullet {
    margin-right: 8px;
    margin-left: 8px;
    width: 7px;
    height: 7px;
    border: none;
    border-radius: 50%;
    background-color: $contrast_color;
  }
}

</style>
