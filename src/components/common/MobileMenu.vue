<template>
  <div v-if="isMobileMenuVisible" class="mobile-menu">
    <div class="mobile-menu__close-btn" @click="closeMobileMenu" />
    <div class="mobile-menu__logo-wrapper">
      <SvgImage name="logo" />
    </div>

    <MobileMainNav />
    <MobileSecondaryNav />
    <MobileSocMenu />
  </div>
</template>

<script>
import MobileMainNav from '@/components/common/MobileMainNav'
import MobileSecondaryNav from '@/components/common/MobileSecondaryNav'
import SvgImage from '@/components/common/SvgImage'
import MobileSocMenu from '@/components/common/MobileSocMenu'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'MobileMenu',
  components: {
    MobileSocMenu,
    MobileSecondaryNav,
    MobileMainNav,
    SvgImage,
  },
  computed: {
    ...mapState('common', [
      'isMobileMenuVisible',
    ]),
  },
  methods: {
    ...mapMutations('common', [
      'closeMobileMenu',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
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
  z-index: 4;

  @media screen and (min-width: 767px) {
    display: none !important;
  }
}

.mobile-menu__close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
  background: url('../../assets/img/svg/cross-burg.svg') center/contain no-repeat;
  cursor: pointer;
}

.mobile-menu__logo-wrapper {
  color: $attention_color;
  width: 30%;
  margin: 0 auto;
  text-align: center;
}
</style>
