<template>
  <div v-if="isCallPopoverVisible" class="call-popover">
    <div class="call-popover__number">
      <SvgImage class="call-popover__number-img" name="call" />
      <span class="call-popover__number-text">063 373 39 88</span>
    </div>
    <div class="call-popover__number">
      <SvgImage class="call-popover__number-img" name="call" />
      <span class="call-popover__number-text">093 220 03 77</span>
    </div>
    <div class="call-popover__message">
      Либо оставьте свой телефон для обратного звонка
    </div>
    <input
      v-model="userPhoneNumber" 
      class="call-popover__input" 
      type="text"
    >
    <Btn
      class="call-popover__button"
      full-width
      @click="sendCallRequest"
    >
      ПЕРЕЗВОНИТЬ МНЕ
    </Btn>
  </div>
</template>

<script>
import SvgImage from './SvgImage.vue'
import Btn from '@/components/common/Btn'
import {mapActions, mapMutations, mapState} from 'vuex'

export default {
  name: 'CallPopover',
  components: {SvgImage, Btn},
  data() {
    return {}
  },
  computed: {
    ...mapState('call', [
      'isCallPopoverVisible',
      'userPhoneNumber',
    ]),
  },
  methods: {
    ...mapMutations('call', [
      'closeCallPopover',
    ]),
    ...mapActions('call', [
      'sendCallRequest',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.call-popover {
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  width: 250px;
  padding: 30px;
  background-color: $contrast_color;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  text-align: center;
}

.call-popover__number {
  font-size: 10px;
  font-weight: 600;
  line-height: 2em;
  color: $main_color;
}

.call-popover__number-img {
  width: 1.2em;
  height: 1.2em;
  margin-right: 1em;
  vertical-align: middle;
  stroke: none;
}

//.call-popover__number-text {}

.call-popover__message {
  margin: 22px 0 5px;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  color: $text_color_dark;
}

.call-popover__input {
  width: 100%;
  height: 26px;
  padding: 10px;
  margin-bottom: 15px;
  border: none;
  outline: none;
  background-color: #F3F3F3;
  appearance: none; // from here on
  border-radius: 0; // fixing rounded corners and shadow in Safari
  background-image: linear-gradient(transparent, transparent); //
}

//.call-popover__button {}

</style>
