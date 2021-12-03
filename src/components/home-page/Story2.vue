<template>
  <div class="story-two">
    <div class="col-big">
      <div class="col-big__pic">
        <img
          alt="bicycle riders"
          class="col-big__pic-img"
          src="../../assets/img/img-main02.jpg"
        >
        <img
          alt="leg in sneaker"
          class="col-big__pic-img"
          src="../../assets/img/img-main03.jpg"
        >
      </div>
      <div class="col-big__numbers">
        <div class="col-big__number">
          <div class="col-big__number-digit">
            22+
          </div>
          <div class="col-big__number-text">
            года в индустрии моды
          </div>
        </div>
        <div class="col-big__number">
          <div class="col-big__number-digit">
            3 999+
            <span class="col-big__number-currency">грн</span>
          </div>
          <div class="col-big__number-text">
            Бесплатная доставка
          </div>
        </div>
        <div class="col-big__number">
          <div class="col-big__number-digit">
            10+
          </div>
          <div class="col-big__number-text">
            магазинов по Украине
          </div>
        </div>
      </div>
    </div>
    <div class="col-small">
      <div class="col-small__text">
        <div class="col-small__text-wrapper">
          <span class="col-small__text-strong">BUMER</span> объединяет
          классические формы с оригинальными деталями, вдохновленными подиумной
          модой, а также предлагаем смелые решения от популярных инфлюенсеров.
        </div>
      </div>
      <div class="col-small__pic">
        <img
          alt="leg in sneaker"
          class="col-small__pic-img"
          src="../../assets/img/img-main03.jpg"
        >
        <img
          alt="bicycle riders"
          class="col-small__pic-img"
          src="../../assets/img/img-main02.jpg"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Story2',
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";
@import "../../assets/scss/functions";

.story-two {
  display: flex;
  justify-content: space-between;
  margin-bottom: 6.5em;
  font-size: adaptive_fz(14px, 12px);
  font-weight: 400;
  color: $grey_color_dark;
  @media screen and (max-width: 575px) {
    flex-direction: column-reverse;
    align-items: center;
    margin-bottom: 3em;
  }
}

.col-big {
  width: 58%;
  @media screen and (max-width: 575px) {
    width: 60%;
  }
}

.col-big__pic-img {
  width: 100%;

  &:first-of-type {
    display: block;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }

  &:last-of-type {
    display: none;
    @media screen and (max-width: 575px) {
      display: block;
    }
  }
}

.col-big__numbers {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 30em;
  padding-left: 6.5vw;
  @media screen and (max-width: 575px) {
    height: unset;
    padding: 0;
    text-align: center;
  }
}

.col-big__number {
  @media screen and (max-width: 575px) {
    margin-top: 2.5em;
  }

  &:last-child {
    display: none;
    @media screen and (max-width: 575px) {
      display: block;
    }
  }
}

.col-big__number-digit {
  font-size: adaptive_fz(70px, 20px);
  font-weight: 600;
  color: $main_color;
  text-transform: uppercase;
  @media screen and (min-width: 1440px) {
    font-size: 70px;
  }
}

.col-big__number-currency {
  font-size: 0.5em;
}

.col-small {
  display: flex;
  flex-direction: column;
  width: 32%;
  @media screen and (max-width: 575px) {
    flex-direction: column-reverse;
    width: 90%;
  }
}

.col-small__text {
  flex-grow: 1;
  display: flex;
  align-items: center;
  line-height: 1.7em;
  @media screen and (max-width: 575px) {
    width: 80%;
    margin: 2.5em auto;
  }
}

.col-small__text-strong {
  font-weight: 700;
  color: $main_color;
}

.col-small__pic-img {
  width: 100%;

  &:first-of-type {
    display: block;
    @media screen and (max-width: 575px) {
      display: none;
    }
  }

  &:last-of-type {
    display: none;
    @media screen and (max-width: 575px) {
      display: block;
    }
  }
}
</style>
