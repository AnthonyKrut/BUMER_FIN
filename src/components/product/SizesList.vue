<template>
  <div class="sizes-list">
    <div
      v-for="size in sizes"
      :key="size.value"
      class="sizes-list__item"
      :class="{'sizes-list__item--not-available': !size.is_available, 'sizes-list__item--active': size.is_active}"
      @click="selectSize(size.value)"
    >
      {{ size.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'SizesList',
  data() {
    return {
      sizes: [
        {
          value: 40,
          is_available: true,
          is_active: false,
        },
        {
          value: 41,
          is_available: true,
          is_active: false,
        },
        {
          value: 42,
          is_available: false,
          is_active: false,
        },
        {
          value: 43,
          is_available: false,
          is_active: false,
        },
        {
          value: 44,
          is_available: true,
          is_active: true,
        },
        {
          value: 45,
          is_available: true,
          is_active: false,
        },
        {
          value: 46,
          is_available: true,
          is_active: false,
        },
      ],
    }
  },
  methods: {
    selectSize(size_value) {
      this.sizes.forEach(size => {
        if (size.value === size_value && size.is_available) {
          size.is_active = true
        } else if (size.value === size_value) {
          this.$el.dispatchEvent(new CustomEvent('show-not-available', { bubbles: true }))
        } else {
          size.is_active = false
        }
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
  justify-content: center;
  margin: 2.5em 0 1em;
  font-size: adaptive_fz(20px, 13px);
  font-weight: 300;
}

.sizes-list__item {
  width: 2em;
  height: 2em;
  line-height: 1.2;
  cursor: pointer;
  border: 1px solid transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 6px;
  margin-left: 6px;

  &.sizes-list__item--active {
    border: 1px solid $text_color_light;
  }

  &.sizes-list__item--not-available {
    text-decoration: line-through;
    color: $text_color_light;
  }
}
</style>
