<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from './components/common/TheHeader.vue'
import TheFooter from './components/common/TheFooter.vue'

export default {
  components: {
    TheFooter,
    TheHeader,
  },
}
</script>
