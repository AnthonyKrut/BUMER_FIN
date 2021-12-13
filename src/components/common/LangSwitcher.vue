<template>
  <div class="lang-switcher">
    <div class="lang-switcher__wrapper" @click="toggleLangPopover">
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
}

.lang-switcher__img {
  width: 17px;
  margin-right: 6px;
  vertical-align: middle;
  stroke: none;
}

.lang-switcher__angle {
  width: 6px;
  vertical-align: middle;
  fill: none;
  stroke: #F3F3F3;
  &.rotated {
    transform: rotate(180deg);
  }
}
</style>
