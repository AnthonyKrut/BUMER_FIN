<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top-wrapper">
          <div class="header__free-delivery">
            <SvgImage class="header__free-delivery-img" name="delivery" />
            <span class="header__free-delivery-text">БЕСПЛАТНАЯ ДОСТАВКА ОТ 3999 ГРН</span>
          </div>
          <div class="header__call-lang">
            <div class="header__call">
              <div 
                class="header__call-wrapper" 
                :class="{'click-disabled': isCallPopoverVisible}" 
                @click="openCallPopover"
              >
                <SvgImage class="header__call-img" name="call" />
                <span class="header__call-text">Заказать звонок</span>
              </div>
              <CallPopover />
            </div>
            <div class="header__lang">
              <div 
                class="header__lang-wrapper" 
                :class="{'click-disabled': isLangPopoverVisible}" 
                @click="openLangPopover"
              >
                <SvgImage v-if="language==='ua'" class="header__lang-img" name="ua" />
                <SvgImage v-if="language==='ru'" class="header__lang-img" name="ru" />
                <SvgImage class="header__lang-angle" :class="{rotated: isLangPopoverVisible}" name="angle" />
              </div>
              <LangPopover />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="header__bottom">
      <div class="container">
        <div class="header__burger burger">
          <div class="burger__close-btn" />
          <div class="burger__logo">
            <SvgImage name="logo" />
          </div>
          <div class="burger__shop shop">
            <router-link class="shop__category" :to="{name: 'Catalog'}">
              КРОССОВКИ
            </router-link>
            <router-link class="shop__category" :to="{name: 'Catalog'}">
              БОТИНКИ
            </router-link>
            <router-link class="shop__category" :to="{name: 'Catalog'}">
              ТУФЛИ
            </router-link>
            <router-link class="shop__category" :to="{name: 'Catalog'}">
              SALE
            </router-link>
          </div>
          <nav class="burger__nav nav">
            <router-link class="nav__item" to="/">
              Оплата и доставка
            </router-link>
            <router-link class="nav__item" to="/">
              Новости
            </router-link>
            <router-link class="nav__item" to="/">
              Сотрудничество
            </router-link>
          </nav>
          <div class="burger__social social">
            <a class="social__item" href="#!">
              <SvgImage name="telegram" />
            </a>
            <a class="social__item" href="#!">
              <SvgImage name="instagram" />
            </a>
            <a class="social__item" href="#!">
              <SvgImage name="facebook" />
            </a>
          </div>
        </div>
        <router-link class="header__logo" :to="{name: 'Home'}">
          <div class="header__burger-img" />
          <SvgImage name="logo" />
        </router-link>

        <MainNav />

        <div class="header__btns">
          <HeaderSearchForm />
          <div class="header__cart" @click="toggleCartPopover">
            <SvgImage name="cart" /> <span v-if="cart.length">({{ cart.length }})</span>
          </div>
          <CartPopover />
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
import CallPopover from '@/components/common/CallPopover'
import LangPopover from '@/components/common/LangPopover'

export default {
  name: 'TheHeader',
  components: {
    HeaderSearchForm,
    MainNav,
    CartPopover,
    SvgImage,
    CallPopover,
    LangPopover,
  },
  computed: {
    ...mapState('cart', [
      'cart',
    ]),
    ...mapState('lang', [
      'language',
      'isLangPopoverVisible',
    ]),
    ...mapState('call', [
      'isCallPopoverVisible',
    ]),
  },
  methods: {
    ...mapMutations('common', [
      'toggleCartPopover',
    ]),
    ...mapMutations('lang', [
      'openLangPopover',
    ]),
    ...mapMutations('call', [
      'openCallPopover',
    ]),
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
  z-index: 100;
  width: 100vw;
}

.header__top {
  font-size: adaptive_fz(11px, 8px);
  line-height: 2.5em;
  color: $contrast_color;
  background: $main_color;
}

.header__top-wrapper {
  display: flex;
  justify-content: space-between;
  // @media screen and (max-width: 575px) {
  //   justify-content: center;
  // }
}

.header__free-delivery {
  font-weight: 700;
}

.header__free-delivery-img {
  width: 1.5em;
  margin-right: 0.75em;
  vertical-align: middle;
  stroke: none;
}

//.header__free-delivery-text {}

.header__call-lang {
  display: flex;
}

.header__call {
  position: relative;
  margin-right: 34px;
  font-weight: 400;
}

.header__call-wrapper {
  cursor: pointer;
  &.click-disabled {
    pointer-events: none;
  }
}

.header__call-img {
  width: 0.9em;
  margin-right: 1em;
  vertical-align: middle;
  stroke: none;
}

//.header__call-text {}

.header__lang {
  position: relative;
}

.header__lang-wrapper {
  cursor: pointer;
  &.click-disabled {
    pointer-events: none;
  }
}

.header__lang-img {
  width: 17px;
  margin-right: 6px;
  vertical-align: middle;
  stroke: none;
}

.header__lang-angle {
  width: 6px;
  vertical-align: middle;
  fill: none;
  stroke: #F3F3F3;
  &.rotated {
    transform: rotate(180deg);
  }
}

.header__bottom {
  font-size: adaptive_fz(14px, 9px);
  font-weight: 700;
  background-color: $foreground;
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 2em;
    padding-bottom: 2em;
  }
  .header__burger-img {
    display: none;
  }
  .burger {
    position: fixed;
    top:0;
    left: -100vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100vw;
    height: 100vh;
    padding: 4em 0;
    background: $main_color;
    font-size: 15px;
    font-weight: 300;
    transition: left 0.5s;
    &__close-btn {
      position: absolute;
      top: calc(2em - 0.2em);
      right: calc(2em - 0.2em);
      width: 25px;
      height: 25px;
      background: url('../../assets/img/svg/cross-burg.svg') center/contain no-repeat;
      cursor: pointer;
    }
    &__logo {
      color: $attention_color;
      width: 30%;
      margin: 0 auto;
    }
    &__shop {
      display: flex;
      flex-direction: column;
      .shop__category {
        position: relative;
        padding: 0 2em 0 3em;
        border-bottom: 1px solid #252525;
        line-height: 2em;
        color: $contrast_color;
        text-decoration: none;
        &:last-child {
          color: $attention_color;
        }
        &:hover {
          color: $attention_color;
        }
        &::after {
          content: '';
          width: 1.2em;
          height: 0.75em;
          background: url('../../assets/img/svg/tick-burg.svg') center/contain no-repeat;
          position: absolute;
          top: calc(50% - 0.5 * 0.75em);
          right: 2em;
        }
      }
    }
    &__nav {
      display: flex;
      flex-direction: column;
      align-items: center;
      .nav__item {
        color: $contrast_color;
        text-decoration: none;
        &:not(:last-child) {
          margin-bottom: 2em;
        }
        &:hover {
          color: $attention_color;
        }
        &.nav__item--active {
          color: $attention_color;
        }
      }
    }
    &__social {
      display: flex;
      justify-content: center;
      .social__item {
        svg {
          display: block;
          width: 20px;
          height: 20px;
          fill: $contrast_color;
        }
        &:not(:last-child) {
          margin-right: 45px;
        }
        &:hover svg {
          fill: $attention_color;
        }
      }
    }
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
  .header__btns {
    display: flex;
    justify-content: space-between;
    width: 20%;
    min-width: 215px;
    position: relative;
  }
  @media screen and (max-width: 767px) {
    .container {
      padding: 2em calc(5% + 2.5px);
    }
    .header__burger-img {
      display: block;
      width: 20px;
      height: 18px;
      border-top: 2px solid $main_color;
      border-bottom: 2px solid $main_color;
      margin-right: 25px;
      cursor: pointer;
      &::after {
        content: '';
        display: block;
        width: 20px;
        height: 2px;
        background: $main_color;
        margin-top: 6px;
      }
    }
    .burger {
      &.active {
        left: 0;
      }
    }
    .header__btns {
      min-width: unset;
      position: relative;
    }
  }
}

.header__cart {
  cursor: pointer;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    color: $attention_color
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
}

</style>
