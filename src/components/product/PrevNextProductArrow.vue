<template>
  <div class="prev-next-product-arrow" :class="{'prev-next-product-arrow--prev': type === 'prev', 'prev-next-product-arrow--next': type === 'next'}" />
</template>

<script>
export default {
  name: 'PrevNextProductArrow',
  props: {
    type: {
      type: String,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>

.prev-next-product-arrow {
  position: absolute;
  top: calc(50% - 0.5 * Min(52.5px, Max(30px, 0.75 * 5vw)));
  width: 5vw;
  min-width: 40px;
  max-width: 70px;
  height: calc(0.75 * 5vw);
  min-height: 30px;
  max-height: 52.5px;
  cursor: pointer;

  @media screen and (max-width: 767px) {
    top: 100%;
  }

  &:hover {
    opacity: 0.5;
  }

  &.prev-next-product-arrow--prev {
    background: url('../../assets/img/svg/arr-left-black.svg') 100% center/ 66% no-repeat;
    left: calc(-1 * Max(40px, 5vw));

    @media screen and (max-width: 767px) {
      left: 0;
      background-position: 0% center;
    }
  }

  &.prev-next-product-arrow--next {
    background: url('../../assets/img/svg/arr-right-black.svg') 0% center/ 66% no-repeat;
    right: calc(-1 * Max(40px, 5vw));

    @media screen and (max-width: 767px) {
      right: 0;
      background-position: 100% center;
    }
  }
}

</style>
