<template>
  <div class="footer-soc-menu">
    <a
      v-for="item in items"
      :key="item.icon"
      class="footer-soc-menu__item"
      :href="item.link"
    >
      <SvgImage class="footer-soc-menu__item-icon" :name="item.icon" />
      <span class="footer-soc-menu__item-label">
        {{ item.label }}
      </span>
    </a>
  </div>
</template>

<script>
import SvgImage from '@/components/common/SvgImage'

export default {
  name: 'FooterSocMenu',
  components: {
    SvgImage,
  },
  data() {
    return {
      items: [
        {
          link: '',
          icon: 'telegram',
          label: 'Telegram',
        },
        {
          link: 'https://www.instagram.com/bumer_style/',
          icon: 'instagram',
          label: 'Instagram',
        },
        {
          link: '',
          icon: 'facebook',
          label: 'Facebook',
        },
      ],
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.footer-soc-menu {
  display: flex;
}

.footer-soc-menu__item {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: adaptive_fz(9px, 8px);
  color: $contrast_color;
  text-decoration: none;

  &:not(:last-child) {
    margin-right: 10px;

    @media screen and (max-width: 767px) {
      margin-right: 25px;
    }
  }

  &:hover {
    color: $attention_color;

    .footer-soc-menu__item-icon {
      fill: $attention_color;
    }
  }
}

.footer-soc-menu__item-label {
  @media screen and (max-width: 767px) {
    display: none;
  }
}

.footer-soc-menu__item-icon {
  width: 20px;
  height: 20px;
  margin-bottom: 3.5px;
  fill: $contrast_color;
  stroke: none;

  @media screen and (max-width: 767px) {
    margin-bottom: 0;
  }
}
</style>
