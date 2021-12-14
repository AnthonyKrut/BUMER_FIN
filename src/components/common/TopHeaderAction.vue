<template>
  <div class="top-header-action">
    <SvgImage class="top-header-action__img" name="delivery" />
    <div class="top-header-action__text">
      {{ $t('common.shipping_action') }}
    </div>
  </div>
</template>

<script>
import SvgImage from '@/components/common/SvgImage'

export default {
  name: 'TopHeaderAction',
  components: {
    SvgImage,
  },
}
</script>

<style lang="scss" scoped>

.top-header-action {
  font-weight: 700;
  display: flex;
  align-items: center;
}

.top-header-action__img {
  width: 1.5em;
  margin-right: 0.75em;
  vertical-align: middle;
  stroke: none;
}

.top-header-action__text {
  text-transform: uppercase;
}

</style>
