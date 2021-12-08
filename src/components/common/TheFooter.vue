<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo">
        <SvgImage class="footer__logo-img" name="logo" />
        <div class="footer__copy">
          <span>BUMER 2021</span>
          <span>&copy; All rights reserved</span>
        </div>
      </div>
      <div class="footer__shop shop">
        <router-link class="shop__category" to="/">
          КРОССОВКИ
        </router-link>
        <router-link class="shop__category" to="/">
          БОТИНКИ
        </router-link>
        <router-link class="shop__category" to="/">
          ТУФЛИ
        </router-link>
      </div>
      <nav class="footer__nav nav">
        <router-link class="nav__item" :to="{name: 'PaymentInfoPage'}">
          ОПЛАТА
        </router-link>
        <router-link class="nav__item" :to="{name: 'ShipmentInfoPage'}">
          ДОСТАВКА
        </router-link>
        <router-link class="nav__item" :to="{name: 'Error404Page'}">
          НОВОСТИ
        </router-link>
        <router-link class="nav__item" :to="{name: 'CooperationInfoPage'}">
          СОТРУДНИЧЕСТВО
        </router-link>
      </nav>
      <div class="footer__social social">
        <div class="social__title">
          Узнать больше про BUMER
        </div>
        <div class="social__items">
          <a class="social__item" href="#!">
            <SvgImage name="telegram" />
            <span>Telegram</span>
          </a>
          <a class="social__item" href="#!">
            <SvgImage name="instagram" />
            <span>Instagram</span>
          </a>
          <a class="social__item" href="#!">
            <SvgImage name="facebook" />
            <span>Facebook</span>
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import SvgImage from './SvgImage.vue'

export default {
  name: 'TheFooter',
  components: {
    SvgImage,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.footer {
  padding: 2.5em 0 5em;
  font-size: adaptive_fz(12px, 8px);
  font-weight: 300;
  color: $contrast_color;
  background: $main_color;
  .container {
    display: flex;
    justify-content: space-around;
  }
  &__logo {
    display: flex;
    flex-direction: column;
    align-self: center;
    width: 8.5vw;
    min-width: 120px;
    color: $attention_color;
    svg {
      margin-bottom: 1.5em;
    }
    span:first-of-type {
      display: none;
    }
  }
  &__copy {
    color: #FFFFFF;
  }
  &__shop {
    display: flex;
    flex-direction: column;
    .shop__category {
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
  &__nav {
    display: flex;
    flex-direction: column;
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
    .social__title {
      margin-bottom: 2.5em;// 30px;
    }
    .social__items {
      display: flex;
      .social__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: adaptive_fz(9px, 8px);
        color: $contrast_color;
        text-decoration: none;
        &:not(:last-child) {
          margin-right: 10px;
        }
        svg {
          width: 20px;
          height: 20px;
          margin-bottom: 10px;
          fill: $contrast_color;
          stroke: none;
        }
        &:hover {
          color: $attention_color;
          svg {
            fill: $attention_color;
          }
        }
      }
    }
  }
  @media screen and (max-width: 767px) {
    padding: 2em 0 0;
    .container {
      flex-direction: column;
      align-items: center;
      width: 100%;
    }
    &__logo {
      order: 4;
      flex-direction: row;
      justify-content: center;
      width: 100%;
      background: rgba(196, 196, 196, 0.2);
      .footer__logo-img {
        display: none;
      }
      span {
        line-height: 2.5em;
        text-align: center;
        &:first-of-type {
          display: inline;
        }
      }
    }
    &__shop {
      display: none;
    }
    &__nav  {
      align-items: center;
      .nav__item:not(:last-child) {
        margin-bottom: 1.25em;
      }
    }
    &__social {
      margin: 2em 0;
      .social__title {
        display: none;
      }
      .social__items {
        .social__item {
          &:not(:last-child) {
            margin-right: 20px;
          }
          svg {
            margin-bottom: 0;
          }
          span {
            display: none;
          }
        }
      }
    }
  }
}

</style>
