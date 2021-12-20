<template>
  <div class="map-stores">
    <div class="map-stores__numbers">
      <span class="map-stores__digit">10+</span>
      <span class="map-stores__text">{{ $t('homepage.map_stores_text') }}</span>
    </div>
    <div class="map-stores__pic">
      <img
        alt="map of bumer stores"
        class="map-stores__pic-img"
        src="../../assets/img/map.svg"
      >
      <img
        alt="map of bumer stores"
        class="map-stores__pic-img"
        src="../../assets/img/map-mobile.svg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'MapStores',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.map-stores {
  position: relative;
  margin-bottom: 1.35em;
  font-size: adaptive_fz(70px, 40px);
  font-weight: 600;

  @media screen and (min-width: 1440px) {
    font-size: 70px;
  }
}

.map-stores__numbers {
  position: absolute;
  top: calc(0% - 0.33 * 2.15em);
  left: 3vw;
  display: flex;
  align-items: center;
  width: 40%;
  padding: 0.5em;
  color: $contrast_color;
  background-color: $main_color;

  @media screen and (max-width: 767px) {
    display: none;
  }
}

.map-stores__digit {
  margin-right: 0.5em;
}

.map-stores__text {
  font-size: adaptive_fz(14px, 12px);
  font-weight: 400;
  color: $text_color;

  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
}

//.map-stores__pic {}

.map-stores__pic-img {
  display: block;
  width: 100%;

  &:first-child {
  @media screen and (max-width: 767px) { 
      display: none;
    }
  }
  
  &:last-child {
    @media screen and (min-width: 768px) {
      display: none;
    }
  }
}

</style>
