<template>
  <div class="quote">
    <div class="quote__text">
      <div class="quote__quotes">
        <SvgImage class="quote__svg-quotes" name="quotes" />
      </div>
      <div class="quote__text-paragraph">
        В мире моды для нас нет границ и ограничений!
      </div>
      <div class="quote__text-paragraph">
        BUMER следует самым актуальным модным трендам — в наших коллекциях
        классические узоры сочетаются с оригинальными, ультрасовременными
        решениями.
      </div>
    </div>
    <div class="quote__author">
      <div class="quote__logo">
        <SvgImage name="logo" />
      </div>
      <div class="quote__date">
        EST. 1999
      </div>
    </div>
  </div>
</template>

<script>

import SvgImage from '../common/SvgImage.vue'

export default {
  name: 'HomePageQuote',
  components: {
    SvgImage,
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.quote {
  width: 50%;
  min-width: 300px;
  margin: 0 auto 10em;
  font-size: adaptive_fz(14px, 12px);
  font-weight: 400;
  text-align: center;
  @media screen and (max-width: 991px) {
    width: 75%;
    margin-bottom: 2.5em;
  }
}

.quote__text {
  margin-bottom: 5em;
  line-height: 1.85em;
  color: $text_color_dark;
}

.quote__quotes {
  width: 3.5em;
  height: 3.5em;
  margin: 0 auto 1.75em;
  color: #C0C0C0;
}

.quote__svg-quotes {
  width: 100%;
  height: 100%;
  stroke: none;  
}

// .quote__text-paragraph {}

.quote__author {
  font-size: adaptive_fz(14px, 9px);
  font-weight: 700;
  color: $main_color;
}

.quote__logo {
  width: 12.5vw;
  min-width: 150px;
  margin: 0 auto 1em;
}

.quote__date {
  text-transform: uppercase;
}
</style>
