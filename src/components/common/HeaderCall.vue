<template>
  <div class="header-call">
    <div 
      class="header-call__wrapper"
      :class="{'header-call__wrapper--click-disabled': isCallPopoverVisible}"  
      @click="toggleCallPopover"
    >
      <SvgImage class="header-call__img" name="call" />
      <span class="header-call__text">{{ $t('common.ask_callback') }}</span>
    </div>

    <CallPopover />
  </div>
</template>

<script>
import CallPopover from '@/components/common/CallPopover'
import SvgImage from './SvgImage.vue'
import {mapState, mapMutations} from 'vuex'

export default {
  name: 'HeaderCall',
  components: {
    CallPopover,
    SvgImage,
  },
  computed: {
    ...mapState('call', [
      'isCallPopoverVisible',
    ]),
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
  display: flex;
  align-items: center;
  margin-right: 34px;
  font-weight: 400;
}

.header-call__wrapper {
  cursor: pointer;

  &:hover {
    color: #aaaaaa;
  }

  &.header-call__wrapper--click-disabled {
    pointer-events: none;
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

.header-call__text {
  @media screen and (max-width: 767px) {
    display: none;
  }
}
</style>
