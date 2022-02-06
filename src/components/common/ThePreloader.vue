<template>
  <TransitionWrapper>
    <loader
      :disable-scrolling="false"
      :size="2"
      :speed="1.3"
      bg="#ffffff"
      class="loader"
      color1="#cccccc"
      color2="#000000"
      name="circular"
      object="#ee1c25"
      objectbg="#999793"
      opacity="80"
    />
  </TransitionWrapper>
</template>

<script>
import TransitionWrapper from '@/components/common/TransitionWrapper'
export default {
  name: 'ThePreloader',
  components: {TransitionWrapper},
}
</script>

<style lang="scss" scoped>

.loader {
  position: absolute;
  min-height: 150px;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
}

::v-deep {
  #overlay-circular {
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
  }

  .loader-circular {
    width: 100px;
    height: 100px;
    margin: -50px 0 0 -50px;
  }
}


</style>
