<template>
  <section class="start-page">
    <HeroSlider />

    <div class="container">
      <Banner1 />

      <div class="popular-products">
        <h3 class="popular-products__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
        <div class="popular-products__line line line_fisrt">
          <router-link class="line__product product" :to="{ name: 'Product' }">
            <div class="product__label">SALE</div>
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item01-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </router-link>
          <router-link class="line__product product" :to="{ name: 'Product' }">
            <div class="product__label">TOP</div>
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item02-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </router-link>
          <router-link class="line__product product" :to="{ name: 'Product' }">
            <div class="product__label" />
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item03-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </router-link>
          <router-link class="line__product product" :to="{ name: 'Product' }">
            <div class="product__label">NEW</div>
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item01-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </router-link>
        </div>

        <Banner2 />

        <div class="popular-products__line line line_second">
          <div class="line__product product">
            <div class="product__label">SALE</div>
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item01-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </div>
          <div class="line__product product">
            <div class="product__label">TOP</div>
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item02-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </div>
          <div class="line__product product">
            <div class="product__label" />
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item03-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </div>
          <div class="line__product product">
            <div class="product__label">NEW</div>
            <div class="product__pic">
              <img
                alt="product picture"
                src="../../public/img/stock-items/item01-01.png"
              />
            </div>
            <div class="product__specs">
              <div class="product__article">QN380</div>
              <div class="product__price">2250 <span>грн</span></div>
            </div>
          </div>
        </div>
      </div>

      <Story1 />

      <Story2 />

      <div class="map">
        <div class="map__numbers">
          <span>10+</span>
          <span>магазинов по Украине</span>
        </div>
        <div class="map__pic">
          <img alt="map of bumer stores" src="../assets/img/map.svg" />
        </div>
      </div>
      <HomePageQuote />
    </div>
  </section>
</template>

<script>
import HeroSlider from '../components/home-page/HeroSlider.vue';
import Banner1 from '@/components/home-page/Banner1';
import Banner2 from '@/components/home-page/Banner2';
import Story2 from '@/components/home-page/Story2';
import Story1 from '@/components/home-page/Story1';
import HomePageQuote from '@/components/home-page/HomePageQuote';

export default {
  name: 'HomePage',
  components: {
    HomePageQuote,
    Story2,
    Story1,
    Banner2,
    Banner1,
    HeroSlider,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";
@import "../assets/scss/mixins";

.start-page {
  position: relative;
  z-index: 1;

  .container {
    background: $contrast_color; // !dont touch!
  }

  .popular-products {
    @include popular-products;
  }

  .map {
    position: relative;
    margin-bottom: 1em;
    font-size: adaptive_fz(70px, 20px);
    font-weight: 600;
    &__numbers {
      position: absolute;
      top: calc(0% - 0.33 * (2 * 3vw + 1.15 * adaptive_fz(70px, 20px)));
      left: 3vw;
      display: flex;
      align-items: center;
      width: 40%;
      padding: 3vw 4vw;
      color: $contrast_color;
      background-color: $main_color;
      span {
        &:first-child {
          margin-right: 4vw;
        }
        &:last-child {
          font-size: adaptive_fz(14px, 8px);
          font-weight: 400;
          color: $grey_color;
        }
      }
    }
    &__pic {
      img {
        display: block;
        width: 100%;
      }
    }
    @media screen and (min-width: 1440px) {
      font-size: 70px;
    }
    @media screen and (max-width: 575px) {
      &__numbers {
        display: none;
      }
      &__pic {
        height: 13em;
        background: url("../assets/img/map.svg") 70% 40%/275% no-repeat;
        img {
          display: none;
        }
      }
    }
  }
}
</style>
