<template>
  <header class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__free-delivery">
          <SvgImage name="delivery" />
          <span>БЕСПЛАТНАЯ ДОСТАВКА ОТ 3999 ГРН</span>
        </div>
        <nav class="header__nav nav">
          <router-link class="nav__item" to="/">
            ОПЛАТА
          </router-link>
          <router-link class="nav__item" to="/">
            ДОСТАВКА
          </router-link>
          <router-link class="nav__item" to="/">
            НАШИ МАГАЗИНЫ
          </router-link>
        </nav>
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

        <div class="header__shop shop">
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
        <div class="header__btns">
          <form
            action="https://www.google.com/search"
            class="header__search"
            method="get"
            target="blank"
          >
            <input name="q" placeholder="Поиск" type="search">
            <div class="search-btn">
              <SvgImage name="search" />
            </div>
          </form>
          <div class="header__cart" @click="toggleCartPopover">
            <SvgImage name="cart" /> <span v-if="cart.length">({{cart.length}})</span>
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

export default {
  name: 'TheHeader',
  components: {
    CartPopover,
    SvgImage,
  },
  computed: {
    ...mapState('cart', [
      'cart'
    ])
  },
  methods: {
    ...mapMutations('common', [
      'toggleCartPopover'
    ])
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
  &__top {
    font-size: adaptive_fz(11px, 8px);
    color: $contrast_color;
    background: $main_color;
    .container {
      display: flex;
      justify-content: space-between;
      padding-top: 0.75em;
      padding-bottom: 0.75em;
    }
    .header__free-delivery {
      display: flex;
      align-items: center;
      font-weight: 700;
      svg {
        height: 1.5em;
        width: 1.5em;
        margin-right: 0.75em;
      }
      // span {}
    }
    .nav {
      display: flex;
      align-items: center;
      font-weight: 400;
      &__item {
        color: $contrast_color;
        text-decoration: none;
        &:not(:last-child) {
          margin-right: 2.5vw;
        }
        &:hover {
          color: $attention_color;
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    &__top {
      .container {
        justify-content: center;
      }
      .nav {
        display: none;
      }
    }
    &__bottom {
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
      .header__shop {
        display: none;
      }
      .header__btns {
        min-width: unset;
        position: relative;
        .header__search {
          border-bottom: 1px solid transparent;
          input[type="search"] {
            position: absolute;
            z-index: -1;
            bottom: 0;
            left: 0;
            display: block;
            width: 100%;
            border-top: 1px solid rgba(0, 0, 0, 0.1);
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);
            transition: z-index 0.5s, bottom 0.5s ;
            &.active {
              z-index: 1;
              bottom: -25px;
            }
          }
        }
      }
    }
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
  .header__shop {
    display: flex;
    justify-content: space-between;
    width: 35%;
    .shop__category {
      color: $main_color;
      text-decoration: none;
      &:last-child {
        color: $attention_color;
      }
      &:hover {
        color: $attention_color;
      }
    }
  }
  .header__btns {
    display: flex;
    justify-content: space-between;
    width: 20%;
    min-width: 215px;
    position: relative;
    .header__search {
      display: flex;
      border-bottom: 1px solid rgba(0, 0, 0, 0.1);
      input[type="search"] {
        height: 25px;
        padding: 7px 10px;
        border: none;
        outline: none;
        background-color: $contrast_color;
        font-size: 11px;
        font-weight: 500;
        color: $grey_color_light;
      }
      .search-btn {
        width: 25px;
        height: 25px;
        cursor: pointer;
        display: flex;
        align-items: center;
        img {
          // width: 85%;
          // height: 85%;
          width: 21px;
          height: 21px;
        }
      }
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
