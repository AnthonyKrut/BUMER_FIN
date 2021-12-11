<template>
  <div class="product-images">
    <div class="product-images__secondary-imgs-wrapper">
      <img
        v-for="pic in product.items[0].pics"
        :key="pic"
        :src="pic"
        class="product-images__secondary-img"
        alt=""
      >
    </div>

    <div class="product-images__main-img-wrapper">
      <img
        :src="product.items[0].pics[0]"
        class="product-images__main-img"
        alt=""
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductImages',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.product-images {
  display: flex;
}

.product-images__secondary-imgs-wrapper {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    flex-direction: row;
  }
}

.product-images__secondary-img {
  width: 80%;
  object-fit: contain;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    width: 33%;
    height: calc(1.36 * 0.33 * (100vw - 5px));
  }

  &:hover {
    box-shadow: 0 0 0 2px $text_color;
  }
}

.product-images__main-img-wrapper {
  width: 75%;
  height: calc(0.57 * 90vw);
  max-height: calc(0.57 * 1180px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    width: 100%;
    height: calc(1.36 * (100vw - 5px));
  }
}

.product-images__main-img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}
</style>
