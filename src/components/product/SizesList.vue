<template>
  <div class="sizes-list">
    <div
      v-for="size in product.size"
      :key="size.value"
      class="sizes-list__item"
      :class="{'sizes-list__item--not-available': size.quantity === 0, 'sizes-list__item--active': size.is_active}"
      @click="selectSize(size)"
    >
      {{ size.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizesList',
  props: {
    product: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    selectSize(size) {
      if (size.quantity === 0) return

      this.product.size.map(item => {
        item.is_active = !!(item.id === size.id)
        return item
      })
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.sizes-list {
  display: flex;
  margin: 2.5em 0 0.5em;
  font-size: adaptive_fz(20px, 13px);
  font-weight: 300;
}

.sizes-list__item {
  line-height: 1em;
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  margin-left: 6px;
  border: 1px solid #000000;

  &:hover {
    background: #eeeeee;
  }

  &.sizes-list__item--active {
    background: #000;
    color: #FFFFFF;
  }

  &.sizes-list__item--not-available {
    color: $text_color_light;
    cursor: not-allowed;
    border: 1px solid $text_color_light;
    background:
      linear-gradient(to top right,
        rgba(200,200,200,0) 0%,
        rgba(200,200,200,0) calc(50% - 0.8px),
        rgba(200,200,200,1) 50%,
        rgba(200,200,200,0) calc(50% + 0.8px),
        rgba(200,200,200,0) 100%);
  }
}
</style>
