<template>
  <div
    class="banner-1"
    data-aos="complex-animation"
    data-aos-offset="200"
  >
    <div class="banner-1__pic">
      <img alt="banner-1" class="banner-1__img" src="../../assets/img/IMG_6258.jpeg">
    </div>
    <div class="banner-1__about">
      <h3 class="banner-1__about-title">
        {{ $t('homepage.banner_1_text') }}
      </h3>
      <div class="banner-1__about-sku">
        2022
      </div>

<!--      <div class="banner-1__about-price">-->
<!--        2999.99 <span class="banner-1__about-price-currency">ГРН</span>-->
<!--      </div>-->

      <img
        alt="sneaker"
        class="banner-1__about-img"
        src="../../assets/img/IMG_6309.png"
      >

<!--      <router-link class="banner-1__about-link" to="/">-->
<!--        <img alt="arrow pointer" class="banner-1__about-link-img" src="../../assets/img/svg/arr-right-black.svg">-->
<!--      </router-link>-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Banner1',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";
@import "../../assets/scss/mixins";

.banner-1 {
  display: flex;
  font-size: adaptive_fz(20px, 12px);
  font-weight: 700;
  margin: 4.5em 0 3.5em;

  @media screen and (max-width: 767px) {
    margin: 1.5em 0;
  }
}

.banner-1__pic {
  width: 35%;

  @media screen and (max-width: 500px) {
    display: none;
  }
}

.banner-1__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.banner-1__about {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 65%;
  padding: 4.5vw 5vw 0 5vw;
  background-color: #f5f5f5;;

  @media screen and (max-width: 500px) {
    width: auto;
  }
}

.banner-1__about-link {
  position: absolute;
  right: 5vw;
  bottom: 3.5vw;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5vw;
  //min-width: 40px;
  height: calc(0.75 * 5vw);
  //min-height: 30px;
}

.banner-1__about-link-img {
  width: 66%;
  height: 66%;
}

.banner-1__about-img {
  position: relative;
  top: -6.5vw;
  left: calc(50% - 0.45 * 75%);
  width: 75%;

  @media screen and (max-width: 500px) {
    top: -40px;
  }
}

.banner-1__about-title {
  text-transform: uppercase;
  font-size: adaptive_fz(30px, 12px);
  text-align: center;
  margin-top: 40px;
}

.banner-1__about-sku {
  font-size: adaptive_fz(202px, 25px);
  text-transform: uppercase;
  text-align: center;
  line-height: 0.9;
  font-weight: bold;
  @media screen and (min-width: 1440px) {
    font-size: 202px;
  }

  @media screen and (max-width: 500px) {
    font-size: 80px;
  }
}

.banner-1__about-price {
  font-size: adaptive_fz(35px, 17px);
}

.banner-1__about-price-currency {
  font-size: adaptive_fz(18px, 10px);
}

[data-aos="complex-animation"] {

  .banner-1__about-sku {
    transition: transform 2s ease-out, opacity 0.3s;

    @media screen and (min-width: 768px) {
      transform: translateX(-40px);
      opacity: 0;
    }
  }

  .banner-1__about-img {
    transition: transform 2s ease-out, opacity 0.3s;

    @media screen and (min-width: 768px) {
      transform: translateX(40px);
      opacity: 0;
    }
  }

  &.aos-animate {
    .banner-1__about-sku {
      transform: translateX(0);
      opacity: 1;
    }

    .banner-1__about-img {
      transform: translateX(0);
      opacity: 1;
    }
  }
}
</style>
