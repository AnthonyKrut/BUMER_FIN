<template>
  <transition mode="out-in" name="fade">
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'TransitionWrapper',
}
</script>

<style lang="scss">

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
