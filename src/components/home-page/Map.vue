<template>
  <div class="map">
    <div class="map__numbers">
      <span class="map__digit">10+</span>
      <span class="map__text">магазинов по Украине</span>
    </div>
    <div class="map__pic">
      <img
        alt="map of bumer stores"
        class="map__pic-img"
        src="../../assets/img/map.svg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'Map',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.map {
  position: relative;
  margin-bottom: 1em;
  font-size: adaptive_fz(70px, 20px);
  font-weight: 600;
  @media screen and (min-width: 1440px) {
    font-size: 70px;
  }
}

.map__numbers {
  position: absolute;
  top: calc(0% - 0.33 * (2 * 3vw + 1.15 * adaptive_fz(70px, 20px)));
  left: 3vw;
  display: flex;
  align-items: center;
  width: 40%;
  padding: Min(3vw, 60px) Min(4vw, 60px);
  color: $contrast_color;
  background-color: $main_color;
  @media screen and (max-width: 575px) {
    display: none;
  }
}

.map__digit {
  margin-right: 4vw;
}

.map__text {
  font-size: adaptive_fz(14px, 8px);
  font-weight: 400;
  color: $grey_color;
  @media screen and (min-width: 1440px) {
    font-size: 14px;
  }
}

.map__pic {
  @media screen and (max-width: 575px) {
    height: 13em;
    background: url("../../assets/img/map.svg") 70% 40%/275% no-repeat;
  }
}

.map__pic-img {
  display: block;
  width: 100%;
  @media screen and (max-width: 575px) {
    display: none;
  }
}
</style>
