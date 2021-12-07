<template>
  <div class="header-search-form">
    <input
      class="header-search-form__input"
      name="q"
      placeholder="Поиск"
      type="search"
    >

    <SvgImage class="header-search-form__icon" name="search" />
  </div>
</template>

<script>
import SvgImage from '@/components/common/SvgImage'

export default {
  name: 'HeaderSearchForm',
  components: {
    SvgImage,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.header-search-form {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 767px) {
    border-bottom: 1px solid transparent;
  }
}

.header-search-form__input {
  height: 25px;
  padding: 7px 10px;
  border: none;
  outline: none;
  background-color: $contrast_color;
  font-size: 11px;
  font-weight: 500;
  color: $grey_color_light;

  @media screen and (max-width: 767px) {
    position: absolute;
    z-index: -1;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: z-index 0.5s, bottom 0.5s;
  }

  &.active {
    @media screen and (max-width: 767px) {
      z-index: 1;
      bottom: -25px;
    }
  }
}

.header-search-form__icon {
  width: 15px;
  height: 15px;
  cursor: pointer;
  overflow: visible;
}
</style>
