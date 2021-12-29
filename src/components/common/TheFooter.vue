<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__logo">
        <SvgImage class="footer__logo-image" name="logo" />
        <div class="footer__copy">
          <span class="footer__copy-text">
            BUMER 2021
          </span>
          <span class="footer__copy-text">
            &copy; All rights reserved
          </span>
        </div>
      </div>

      <FooterNav class="footer__nav footer__nav--first" :items="navColumn1" />
      <FooterNav class="footer__nav footer__nav--second" :items="navColumn2" />

      <div class="footer__right">
        <div class="footer__right-heading">
          {{ $t('common.footer_soc_heading') }}
        </div>
        <FooterSocMenu />
      </div>
    </div>
  </footer>
</template>

<script>
import SvgImage from './SvgImage.vue'
import FooterNav from '@/components/common/FooterNav'
import FooterSocMenu from '@/components/common/FooterSocMenu'

export default {
  name: 'TheFooter',
  components: {
    FooterSocMenu,
    FooterNav,
    SvgImage,
  },
  computed: {
    navColumn1() {
      return [
        {
          to: 'PaymentInfoPage',
          label: 'КРОССОВКИ',
        },
        {
          to: 'PaymentInfoPage',
          label: 'БОТИНКИ',
        },
        {
          to: 'PaymentInfoPage',
          label: 'ТУФЛИ',
        },
      ]
    },
    navColumn2() {
      return [
        {
          to: 'PaymentInfoPage',
          label: this.$i18n.t('common.payment'),
        },
        {
          to: 'ShipmentInfoPage',
          label: this.$i18n.t('common.shipping'),
        },
        {
          to: 'CooperationInfoPage',
          label: this.$i18n.t('common.cooperation'),
        },
      ]
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.footer {
  padding: 2.5em 0;
  font-size: adaptive_fz(12px, 8px);
  font-weight: 300;
  color: $contrast_color;
  background: $main_color;

  @media screen and (max-width: 767px) {
    padding: 2em 0 0;
  }
}

.container {
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0;
  }
}

.footer__logo {
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 8.5vw;
  min-width: 120px;
  color: $attention_color;

  @media screen and (max-width: 767px) {
    order: 4;
    flex-direction: row;
    justify-content: center;
    width: 100%;
    background: rgba(196, 196, 196, 0.2);
  }
}

.footer__logo-image {
  width: 100%;
  margin-bottom: 1em;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.footer__copy {
  color: #FFFFFF;
}

.footer__copy-text {
  line-height: 2.5em;

  &:first-of-type {
    display: none;

    @media screen and (max-width: 767px) {
      display: inline;
    }
  }
}

.footer__nav {
  &.footer__nav--first {
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
}

.footer__right {
  @media screen and (max-width: 767px) {
    margin: 2em 0;
  }
}

.footer__right-heading {
  margin-bottom: 2em;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

</style>
