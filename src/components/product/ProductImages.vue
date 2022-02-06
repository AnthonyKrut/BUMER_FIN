<template>
  <div class="product-images">
    <div class="product-images__secondary-imgs-wrapper">
      <img
        v-for="image in allImages"
        :key="image.src"
        alt="product image small"
        class="product-images__secondary-img"
        :class="{'product-images__secondary-img--active': image.id === mainImageId}"
        :src="image.src"
        @click="mainImageId = image.id"
      >
    </div>

    <div class="product-images__main-img-wrapper">
      <img
        alt="product image big"
        class="product-images__main-img"
        :src="mainImage && mainImage.src"
        @click="showMultiple"
      >
    </div>

    <vue-easy-lightbox
      scrollDisabled
      escDisabled
      moveDisabled
      :visible="isLightboxVisible"
      :imgs="allImages"
      :index="lightboxIndex"
      @hide="hideLightbox"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  name: 'ProductImages',
  components: {
    VueEasyLightbox
  },
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      mainImageId: null,
      isLightboxVisible: false,
      lightboxIndex: 0
    }
  },
  computed: {
    mainImage() {
      return this.allImages.find(i => i.id === this.mainImageId)
    },
    allImages() {
      return this.product?.images?.map(i=> {
        i.src = i.imageUri
        return i
      }) || []
    },
  },
  mounted() {
    this.mainImageId = this.product?.images?.[0]?.id || null
  },
  methods: {
    showMultiple() {
      this.lightboxIndex = this.allImages.findIndex(i => i.id === this.mainImage.id)
      this.showLightbox()
    },
    showLightbox() {
      this.isLightboxVisible = true
    },
    hideLightbox() {
      this.isLightboxVisible = false
    }
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.product-images {
  display: flex;
  width: 66%;

  @media screen and (max-width: 767px) {
    flex-direction: column;
    width: 100%;
  }
}

.product-images__secondary-imgs-wrapper {
  width: 25%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 767px) {
    order: 2;
    width: 100%;
    flex-direction: row;
  }
}

.product-images__secondary-img {
  width: 90%;
  object-fit: contain;
  cursor: pointer;
  border: 3px solid transparent;

  @media screen and (max-width: 767px) {
    width: 33%;
  }

  &:hover {
    opacity: 0.9;
  }

  &.product-images__secondary-img--active {
    border-color: #dedede;
  }
}

.product-images__main-img-wrapper {
  width: 75%;
  padding: 0 5%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: zoom-in;

  @media screen and (max-width: 767px) {
    width: 100%;
    padding: 0;
  }
}

.product-images__main-img {
  width: 100%;
  object-fit: contain;
}
</style>
