<template>
  <div
    class="story-one"
    data-aos="complex-animation"
    data-aos-anchor-placement="top-bottom"
    data-aos-duration="1"
    data-aos-offset="100"
  >
    <div class="story-one__pic">
      <img
        alt="boot image"
        class="story-one__pic-img"
        src="../../assets/img/img-main01.png"
      >
    </div>
    <div class="story-one__text">
      <div class="story-one__text-item story-one__text-plain">
        {{ $t('homepage.story_1_text_1') }}
      </div>
      <div class="story-one__text-item story-one__text-strong">
        {{ $t('homepage.story_1_text_2') }}
      </div>
      <div class="story-one__text-item story-one__text-plain">
        {{ $t('homepage.story_1_text_3') }}
      </div>
      <div class="story-one__text-item story-one__text-plain">
        {{ $t('homepage.story_1_text_4') }}
      </div>
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
  align-items: center;
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
  left: 5%;
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

[data-aos="complex-animation"] {

  .story-one__text-item {
    transition: 0.4s ease-out;

    @media screen and (min-width: 768px) {
      opacity: 0;
      transform: translateX(300px);
    }

    &:nth-child(1) {
      transition-delay: 0ms;
    }

    &:nth-child(2) {
      transition-delay: 1000ms;
    }

    &:nth-child(3) {
      transition-delay: 2000ms;
    }

    &:nth-child(4) {
      transition-delay: 3000ms;
    }
  }

  .story-one__pic-img {
    transition: 3s 1s ease-out;
    opacity: 0;

    @media screen and (min-width: 768px) {
      transform: translateY(250px);
    }
  }

  &.aos-animate {
    .story-one__text-item {
      transform: translateX(0);
      opacity: 1;
    }

    .story-one__pic-img {
      transform: translateY(60px);
      opacity: 1;
    }
  }
}
</style>
