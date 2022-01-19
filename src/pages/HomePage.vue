<template>
  <section class="start-page">
    <HeroSlider />

    <div class="container">
      <Banner1 />
      <Catalog :heading="$t('homepage.popular_goods')" :products="[1,2,3,4]" />
    </div>

    <div class="container container--mobile">
      <Banner2 />
    </div>

    <div class="container">
      <Catalog :products="[1,2,3,4]" />
      <Story1 />
      <Story2 />
    </div>

    <div class="container container--overflow-visible container--mobile ">
      <MapStores />
    </div>

    <div class="container">
      <HomePageQuote />
    </div>

    <ThePreloader v-show="isLoading" />
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
import Catalog from '@/components/catalog/Catalog'
import AOS from 'aos';
import 'aos/dist/aos.css'
import ThePreloader from '@/components/common/ThePreloader'

export default {
  name: 'HomePage',
  components: {
    Catalog,
    HomePageQuote,
    MapStores,
    Story2,
    Story1,
    Banner2,
    Banner1,
    HeroSlider,
    ThePreloader,
  },
  data() {
    return {
      isLoading: true,
    }
  },
  async created() {
    // await this.fetchAllProducts();
    setTimeout(()=> { 
      this.isLoading = false
    }, 1500);
  },
  mounted() {
    AOS.init({
      once: true,
    })
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";
@import "../assets/scss/mixins";

.container {
  background: $contrast_color;
  overflow-x: hidden;
}

.container--overflow-visible {
  overflow-x: visible;
}

.container--mobile {

  @media screen and (max-width: 767px) {
    padding: 0;
  }
}

</style>
