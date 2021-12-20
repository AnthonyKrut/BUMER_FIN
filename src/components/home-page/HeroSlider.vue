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
}

.swiper__button {
  position: absolute;
  top: calc(50% - 0.5 * 30px);
  z-index: 5;
  display: block;
  width: 40px;
  height: 30px;
  border: none;
  background-color: rgba(255, 255, 255, 0.3);
  font-size: 0;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: none;
  }

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
  height: calc(100vh - ((2.5 * adaptive_fz(11px, 8px)) + (4 * adaptive_fz(14px, 9px) + 0.225 * Max(120px, 8.5vw))));
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding-bottom: calc(0.5 *(100vh - ((2.5 * adaptive_fz(11px, 8px)) + (4 * adaptive_fz(14px, 9px) + 0.225 * Max(120px, 8.5vw)))));
  font-family: 'PT Sans Caption', sans-serif;
  font-size: adaptive_fz(15px, 10px);
  font-weight: 700;
  color: $contrast_color;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.swiper__item-text {
  text-align: center;
  text-transform: uppercase;
}

.swiper__item-logo {
  margin-bottom: 2.5em;
  display: block;
  width: 19.25em;
}

.swiper__pagination {
  position: absolute;
  bottom: 10px;
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
