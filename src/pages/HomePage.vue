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
      <MapStores />      
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
import MapStores from '@/components/home-page/MapStores';

export default {
  name: 'HomePage',
  components: {
    HomePageQuote,
    MapStores,
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
  
}
</style>
