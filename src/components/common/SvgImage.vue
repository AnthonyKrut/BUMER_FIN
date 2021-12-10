<template>
  <component :is="`icon-${name}`" fill="currentColor" />
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
import IconLetter from '../icons/IconLetter.vue'
import IconPhone from '../icons/IconPhone.vue'
import IconTrash from '../icons/IconTrash'
import IconCall from '../icons/IconCall.vue'
import IconUa from '../icons/IconUa.vue'
import IconRu from '../icons/IconRu.vue'
import IconAngle from '../icons/IconAngle.vue'


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
    IconLetter,
    IconPhone,
    IconTrash,
    IconCall,
    IconUa,
    IconRu,
    IconAngle,
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
