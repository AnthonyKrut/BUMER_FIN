<template>
  <div class="story-one">
    <div class="story-one__pic">
      <img
        alt="boot image"
        class="story-one__pic-img"
        src="../../assets/img/img-main01.png"
      >
    </div>
    <div class="story-one__text">
      <p class="story-one__text-plain">
        {{ $t('homepage.story_1_text_1') }}
      </p>
      <p class="story-one__text-strong">
        {{ $t('homepage.story_1_text_2') }}
      </p>
      <p class="story-one__text-plain">
        {{ $t('homepage.story_1_text_3') }}
      </p>
      <p class="story-one__text-plain">
        {{ $t('homepage.story_1_text_4') }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story1',
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.story-one {
  display: flex;
  margin-bottom: 4em;
  font-family: "Roboto", sans-serif;
  font-size: adaptive_fz(46px, 15px);
  font-weight: 700;
  margin-top: 160px;
  @media screen and (min-width: 1440px) {
    font-size: 46px;
  }
  @media screen and (max-width: 575px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 2em;
  }
}

.story-one__pic {
  display: flex;
  align-items: center;
  width: 40%;
  @media screen and (max-width: 575px) {
    width: 60%;
  }
}

.story-one__pic-img {
  position: relative;
  left: 10%;
  top: 10%;
  z-index: 2;
  width: 100%;
  display: block;
  @media screen and (max-width: 575px) {
    left: 0%;
    top: 0%;
  }
}

.story-one__text {
  width: 60%;
  padding-right: 0.5em;
  line-height: 1em;
  color: $text_color_light;
  @media screen and (max-width: 575px) {
    width: 75%;
    text-transform: uppercase;
    line-height: normal;
  }
}

.story-one__text-strong {
  color: $main_color;
  @media screen and (max-width: 575px) {
    margin-bottom: 1.5em;
  }
}

.story-one__text-plain {
  @media screen and (max-width: 575px) {
    margin-bottom: 1.5em;
  }
}
</style>
