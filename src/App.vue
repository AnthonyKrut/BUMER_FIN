<template>
  <div class="application">
    <TheHeader />
    <TransitionWrapper>
      <router-view />
    </TransitionWrapper>
    <TheFooter />
    <MobileMenu />
  </div>
</template>

<script>
import TheHeader from './components/common/TheHeader.vue'
import TheFooter from './components/common/TheFooter.vue'
import MobileMenu from '@/components/common/MobileMenu'
import {mapActions} from 'vuex'
import TransitionWrapper from '@/components/common/TransitionWrapper'

export default {
  components: {
    TransitionWrapper,
    MobileMenu,
    TheFooter,
    TheHeader,
  },
  metaInfo() {
    return {
      title: `${this.$route.meta[`title_${this.$i18n.locale}`]} | Bumer`,
    }
  },
  created() {
    this.getLanguageList()
    this.fetchCategories()
  },
  methods: {
    ...mapActions('locales', [
      'getLanguageList',
    ]),
    ...mapActions('categories', [
      'fetchCategories',
    ]),
  },
}
</script>
