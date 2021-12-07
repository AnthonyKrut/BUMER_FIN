<template>
  <component :is="`icon-${name}`" fill="currentColor" stroke="currentColor" />
</template>

<script>
import IconLogo from '../icons/IconLogo.vue'
import IconDelivery from '../icons/IconDelivery.vue'
import IconSearch from '../icons/IconSearch.vue'
import IconCart from '../icons/IconCart.vue'
import IconTelegram from '../icons/IconTelegram.vue'
import IconInstagram from '../icons/IconInstagram.vue'
import IconFacebook from '../icons/IconFacebook.vue'
import IconBoot from '../icons/IconBoot.vue'
import IconQuotes from '../icons/IconQuotes.vue'
import IconCheck1 from '../icons/IconCheck1'

export default {
  name: 'IconBase',
  components: {
    IconLogo,
    IconDelivery,
    IconSearch,
    IconCart,
    IconTelegram,
    IconInstagram,
    IconFacebook,
    IconBoot,
    IconQuotes,
    IconCheck1,
  },
  props: {
    name: {
      type: String,
      required: true,
    },
  },
}
</script>

<style scoped>

</style>
