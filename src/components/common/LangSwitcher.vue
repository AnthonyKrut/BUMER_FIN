<template>
  <div class="lang-switcher">
    <div 
      class="lang-switcher__wrapper"
      :class="{'lang-switcher__wrapper--click-disabled': isLangPopoverVisible}" 
      @click="toggleLangPopover"
    >
      <SvgImage v-if="locale==='ua'" class="lang-switcher__img" name="ua" />
      <SvgImage v-if="locale==='ru'" class="lang-switcher__img" name="ru" />
      <SvgImage
        class="lang-switcher__angle"
        :class="{'lang-switcher__angle--rotated': isLangPopoverVisible}"
        name="angle"
      />
    </div>

    <LangPopover />
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex'
import SvgImage from './SvgImage.vue'
import LangPopover from '@/components/common/LangPopover'

export default {
  name: 'LangSwitcher',
  components: {
    LangPopover,
    SvgImage,
  },
  computed: {
    ...mapState('lang', [
      'isLangPopoverVisible',
    ]),
    locale() {
      return this.$i18n.locale
    },
  },
  methods: {
    ...mapMutations('lang', [
      'toggleLangPopover',
    ]),
  },
}
</script>

<style lang="scss" scoped>

.lang-switcher {
  position: relative;
  display: flex;
  align-items: center;
}

.lang-switcher__wrapper {
  cursor: pointer;
  display: flex;
  align-items: center;
  padding-top: 8px;
  padding-bottom: 8px;

  &:hover {
    opacity: 0.7;
  }

  &.lang-switcher__wrapper--click-disabled {
    pointer-events: none;
  }
}

.lang-switcher__img {
  width: 17px;
  margin-right: 6px;
  stroke: none;
}

.lang-switcher__angle {
  width: 6px;
  fill: none;
  stroke: #F3F3F3;

  &.lang-switcher__angle--rotated {
    transform: rotate(180deg);
  }
}
</style>
