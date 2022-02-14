<template>
  <div class="product-images">
    <div class="product-images__secondary-imgs-wrapper">
      <img
        v-for="image in allImages"
        :key="image.largeCropImageUri"
        alt="product image small"
        class="product-images__secondary-img"
        :class="{'product-images__secondary-img--active': image.id === mainImageId}"
        :src="image.smallCropImageUri"
        @click="mainImageId = image.id"
      >
    </div>

    <div class="product-images__main-img-wrapper">
      <img
        alt="product image big"
        class="product-images__main-img"
        :src="mainImage && mainImage.largeCropImageUri"
        @click="showMultiple"
      >
    </div>

    <vue-easy-lightbox
      :imgs="allImages"
      :index="lightboxIndex"
      scroll-disabled
      :visible="isLightboxVisible"
      @hide="hideLightbox"
    />
  </div>
</template>

<script>
import VueEasyLightbox from 'vue-easy-lightbox'

export default {
  name: 'ProductImages',
  components: {
    VueEasyLightbox,
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
      lightboxIndex: 0,
    }
  },
  computed: {
    mainImage() {
      return this.allImages.find(i => i.id === this.mainImageId) || '/img/no-image.svg'
    },
    allImages() {
      return this.product?.images?.map(i=> {
        i.src = i.largeCropImageUri
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
    },
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
  width: 20%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  z-index: 2;

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
    width: 20%;
    margin-top: -10%;
  }

  &:hover {
    opacity: 0.9;
  }

  &.product-images__secondary-img--active {
    border-color: #dedede;
  }
}

.product-images__main-img-wrapper {
  width: 80%;
  padding: 0;
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
  width: calc(100% + 55px);
  object-fit: contain;
  margin-right: -15px;
  margin-left: -40px;

  @media screen and (max-width: 767px) {
    width: calc(100% + 40px);
    margin-right: -20px;
    margin-left: -20px;
  }
}

::v-deep .vel-img {
  max-width: 90vw !important;
  max-height: 90vh !important;
}
</style>
