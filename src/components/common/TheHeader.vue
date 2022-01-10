<template>
  <header class="header" :class="{'header--scrolled': isScrolled}">
    <div class="header__top">
      <div class="container">
        <div class="header__top-wrapper">
          <TopHeaderAction />
          <TopHeaderNav />

          <div class="header__call-lang">
            <HeaderCall />
            <LangSwitcher />
          </div>
        </div>
      </div>
    </div>

    <div class="header__bottom">
      <div class="container">
        <div class="header__bottom-inner">
          <div class="header__bottom-left">
            <div class="header__burger" @click="openMobileMenu" />
            <router-link class="header__logo" :to="{name: 'Home'}">
              <SvgImage name="logo" />
            </router-link>
          </div>

          <MainNav />

          <div class="header__bottom-right">
            <HeaderSearchForm />

            <div 
              class="header__cart-button"
              :class="{'header__cart-button--click-disabled': isCartPopoverVisible}" 
              @click="toggleCartPopover"
            >
              <SvgImage name="cart" />
              <span v-if="cart.length">({{ cart.length }})</span>
            </div>

            <CartPopover />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import SvgImage from './SvgImage.vue'
import CartPopover from '@/components/common/CartPopover'
import {mapMutations, mapState} from 'vuex'
import MainNav from '@/components/common/MainNav'
import HeaderSearchForm from '@/components/common/HeaderSearchForm'
import LangSwitcher from '@/components/common/LangSwitcher'
import HeaderCall from '@/components/common/HeaderCall'
import TopHeaderNav from '@/components/common/TopHeaderNav'
import TopHeaderAction from '@/components/common/TopHeaderAction'

export default {
  name: 'TheHeader',
  components: {
    TopHeaderAction,
    TopHeaderNav,
    HeaderCall,
    LangSwitcher,
    HeaderSearchForm,
    MainNav,
    CartPopover,
    SvgImage,
  },
  data() {
    return {
      isScrolled: false,
    }
  },
  mounted() {
    window.addEventListener('scroll', this.onPageScroll);
  },
  beforeDestroy() {
    window.addEventListener('scroll', null);
  },
  computed: {
    ...mapState('common', [
      'isCartPopoverVisible',
    ]),
    ...mapState('cart', [
      'cart',
    ]),
  },
  methods: {
    ...mapMutations('common', [
      'toggleCartPopover',
      'openMobileMenu',
    ]),
    onPageScroll() {
      this.isScrolled = window.scrollY > 30
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.header {
  position: sticky;
  top: 0;
  left: 0;
  z-index: 4;
  width: 100vw;

  &.header--scrolled {
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
  }
}

.header__top {
  font-size: adaptive_fz(11px, 8px);
  line-height: 2em;
  color: $contrast_color;
  background: $main_color;
}

.header__top-wrapper {
  display: flex;
  justify-content: space-between;
}

.header__call-lang {
  display: flex;
}

.header__bottom {
  font-size: adaptive_fz(14px, 9px);
  font-weight: 700;
  background-color: $foreground;
}

.header__logo {
  display: flex;
  align-items: center;
  color: $attention_color;

  svg {
    display: block;
    width: 8.5vw;
    min-width: 120px;
  }
}

.header__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2em;
  padding-bottom: 2em;
}

.header__bottom-left {
  display: flex;
  align-items: center;
}

.header__bottom-right {
  display: flex;
  justify-content: space-between;
  width: 20%;
  min-width: 215px;
  position: relative;

  @media screen and (max-width: 767px) {
    min-width: 75px;
    position: relative;
  }
}

.header__burger {
  display: none;
  width: 20px;
  height: 18px;
  border-top: 2px solid $main_color;
  border-bottom: 2px solid $main_color;
  margin-right: 25px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    display: block;
  }

  &::after {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: $main_color;
    margin-top: 6px;
  }
}

.header__cart-button {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.6;
  }

  span {
    margin-left: 5px;
    font-size: 11px;
    font-weight: 500;
  }

  svg {
    width: 22px;
    height: 22px;
    stroke: $main_color
  }

  &.header__cart-button--click-disabled {
    pointer-events: none;
  }
}

</style>
