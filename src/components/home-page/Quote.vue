<template>
  <div class="quote">
    <div class="quote__text">
      <p class="quote__text-paragraph">
        В мире моды для нас нет границ и ограничений!
      </p>
      <p class="quote__text-paragraph">
        BUMER следует самым актуальным модным трендам — в наших коллекциях
        классические узоры сочетаются с оригинальными, ультрасовременными
        решениями.
      </p>
    </div>
    <div class="quote__author">
      <div class="quote__logo">
        <img
          class="quote__logo-img"
          alt="bumer logo"
          src="../../assets/img/svg/logo-black.svg"
        />
      </div>
      <div class="quote__date">EST. 1999</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Quote',
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
  color: $grey_color_dark;
}

.quote__text-paragraph {
  &:first-child::before {
    display: block;
    width: 3.5em;
    height: 3.5em;
    margin: 0 auto 1.75em;
    content: "";
    background: url("../../assets/img/svg/quotes.svg") center/contain no-repeat;
  }
}

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

.quote__logo-img {
  width: 100%;
  height: 100%;
  display: block;
}

.quote__date {
  text-transform: uppercase;
}
</style>
