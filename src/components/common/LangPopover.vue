<template>
  <div 
    v-show="isLangPopoverVisible" 
    class="lang-popover"
    tabindex="0"
    @focusout="closeLangPopover"
  >
    <div class="lang-popover__nation" @click="selectLanguage('ua')">
      <SvgImage class="lang-popover__img" name="ua" />
      <span class="lang-popover__label">Українська</span>
    </div>
    <div class="lang-popover__nation" @click="selectLanguage('ru')">
      <SvgImage class="lang-popover__img" name="ru" />
      <span class="lang-popover__label">Русский</span>
    </div>
  </div>
</template>

<script>
import SvgImage from './SvgImage.vue'
import {mapMutations, mapState} from 'vuex'
import {setLocale} from '@/utils/Locale'

export default {
  name: 'LangPopover',
  components: {SvgImage},
  data() {
    return {}
  },
  computed: {
    ...mapState('lang', [
      'isLangPopoverVisible',
    ]),
  },
  updated() {
    if (this.isLangPopoverVisible)
    this.$el.focus()
  },
  methods: {
    ...mapMutations('lang', [
      'selectLanguage',
      'closeLangPopover',
      'openLangPopover',
    ]),
    selectLanguage(lang) {
      this.$i18n.locale = lang
      setLocale(lang)
      this.closeLangPopover()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.lang-popover {
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  width: 110px;
  padding: 10px 0;
  background-color: $contrast_color;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  font-size: 10px;
}

.lang-popover__nation {
  padding: 0 10px;
  line-height: 2.5em;
  cursor: pointer;

  &:hover {
    background-color: #F3F3F3;
  }
}

.lang-popover__img {
  width: 17px;
  margin-right: 11px;
  vertical-align: middle;
  stroke: none;
}

.lang-popover__label {
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  color: $text_color_dark;
}

</style>