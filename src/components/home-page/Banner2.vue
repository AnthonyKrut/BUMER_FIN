<template>
  <div class="banner-2">
    <div class="banner-2__title">
      <span
        class="banner-2__title-text"
        data-aos="fade-left"
        data-aos-duration="1000"
      >
        {{ $t('homepage.banner_2_text') }}
      </span>
      <span
        class="banner-2__title-discount"
        data-aos="fade-left"
        data-aos-delay="150"
        data-aos-duration="1000"
      >-30%</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner2',
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";
@import "../../assets/scss/mixins";

.banner-2 {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.85em; // 580px;
  font-size: adaptive_fz(120px, 24px);
  font-weight: 700;
  margin-top: 100px;
  margin-bottom: 80px;
  color: $contrast_color;
  background: url("../../assets/img/img-baner02.jpg") center/cover no-repeat;
  @media screen and (min-width: 1440px) {
    font-size: 120px;
  }
}

.banner-2__title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 65%;
  min-width: 250px;
}

.banner-2__title-text {
  font-size: adaptive_fz(40px, 17px);
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 40px;
  }
}
</style>
