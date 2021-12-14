<template>
  <div>
    <TheHeader />
    <router-view />
    <TheFooter />
    <MobileMenu />
  </div>
</template>

<script>
import TheHeader from './components/common/TheHeader.vue'
import TheFooter from './components/common/TheFooter.vue'
import MobileMenu from '@/components/common/MobileMenu'

export default {
  components: {
    MobileMenu,
    TheFooter,
    TheHeader,
  },
}
</script>
