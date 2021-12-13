<template>
  <div class="header-call">
    <div class="header-call__wrapper" @click="toggleCallPopover">
      <SvgImage class="header-call__img" name="call" />
      <span class="header-call__text">{{ $t('common.ask_callback') }}</span>
    </div>

    <CallPopover />
  </div>
</template>

<script>
import CallPopover from '@/components/common/CallPopover'
import SvgImage from './SvgImage.vue'
import {mapMutations} from 'vuex'

export default {
  name: 'HeaderCall',
  components: {
    CallPopover,
    SvgImage,
  },
  methods: {
    ...mapMutations('call', [
      'toggleCallPopover',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.header-call {
  position: relative;
  margin-right: 34px;
  font-weight: 400;
}

.header-call__wrapper {
  cursor: pointer;

  &:hover {
    color: #aaaaaa;
  }
}

.header-call__img {
  width: 0.9em;
  margin-right: 1em;
  vertical-align: middle;
  stroke: none;
  position: relative;
  top: -1px;
}
</style>
