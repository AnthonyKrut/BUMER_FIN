<template>
  <loader
    name="circular"
    object="#ee1c25"
    color1="#cccccc"
    color2="#000000"
    bg="#ffffff"
    objectbg="#999793"
    opacity="80"
    :disable-scrolling="false"
    :size="2"
    :speed="1.3"
    class="loader"
  />
</template>

<script>
export default {
  name: 'ThePreloader',
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
