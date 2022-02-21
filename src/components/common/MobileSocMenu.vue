<template>
  <div class="mobile-soc-menu">
    <a class="mobile-soc-menu__item" href="#!">
      <SvgImage name="telegram" />
    </a>
    <a class="mobile-soc-menu__item" href="https://www.instagram.com/bumer_style/">
      <SvgImage name="instagram" />
    </a>
    <a class="mobile-soc-menu__item" href="#!">
      <SvgImage name="facebook" />
    </a>
  </div>
</template>

<script>
import SvgImage from '@/components/common/SvgImage'

export default {
  name: 'MobileSocMenu',
  components: {
    SvgImage,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.mobile-soc-menu {
  display: flex;
  justify-content: center;
}

.mobile-soc-menu__item {
  svg {
    display: block;
    width: 23px;
    height: 23px;
    fill: $contrast_color;
  }
  &:not(:last-child) {
    margin-right: 45px;
  }
  &:hover svg {
    fill: $attention_color;
  }
}
</style>
