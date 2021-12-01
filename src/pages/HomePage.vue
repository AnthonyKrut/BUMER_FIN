<template>
  <section class="start-page">
    <HeroSlider />

    <div class="container">
      <div class="baner-winter">
        <div class="baner-winter__pic pic">
          <img alt="boy in sneakers" src="../assets/img/img-baner01-1.jpg">
        </div>
        <div class="baner-winter__about about">
          <h3 class="about__title">
            ЗИМНЯЯ КОЛЛЕКЦИЯ 2021
          </h3>
          <div class="about__article">
            qn 380
          </div>
          <div class="about__price">
            2999.99 <span>ГРН</span>
          </div>
          <img alt="sneaker" src="../assets/img/img-baner01-2.png">
          <a href="#!"><img alt="arrow pointer" src="../assets/img/svg/arr-right-black.svg"></a>
        </div>
      </div>

      <div class="parallax-container">
        <div class="popular-products">
          <h3 class="popular-products__title">
            ПОПУЛЯРНЫЕ ТОВАРЫ
          </h3>
          <div class="popular-products__line line line_fisrt">
            <router-link class="line__product product" :to="{name: 'Product'}">
              <div class="product__label">
                SALE
              </div>
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item01-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </router-link>
            <router-link class="line__product product" :to="{name: 'Product'}">
              <div class="product__label">
                TOP
              </div>
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item02-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </router-link>
            <router-link class="line__product product" :to="{name: 'Product'}">
              <div class="product__label" />
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item03-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </router-link>
            <router-link class="line__product product" :to="{name: 'Product'}">
              <div class="product__label">
                NEW
              </div>
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item01-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </router-link>
          </div>

          <div class="baner-interseason">
            <div class="baner-interseason__title title">
              <span class="title__text">межсезонная<br>коллекция</span>
              <span class="title__discount">&ndash;30%</span>
            </div>
          </div>

          <div class="popular-products__line line line_second">
            <div class="line__product product">
              <div class="product__label">
                SALE
              </div>
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item01-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label">
                TOP
              </div>
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item02-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label" />
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item03-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label">
                NEW
              </div>
              <div class="product__pic">
                <img alt="product picture" src="../../public/img/stock-items/item01-01.png">
              </div>
              <div class="product__specs">
                <div class="product__article">
                  QN380
                </div>
                <div class="product__price">
                  2250 <span>грн</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-container">
          <div class="story-one">
            <div class="story-one__pic">
              <img alt="boot image" src="../assets/img/img-main01.png">
            </div>
            <div class="story-one__text">
              <p>
                Мы объединяем классические модели с модными вырезами и высококачественными материалами.
              </p>
              <p>Мировые тренды в оригинальном и удобном варианте.</p>
              <p>Бесплатный возврат и обмен до 30 дней.</p>
              <p>Новые модели каждый день. Специальное предложение.</p>
            </div>
          </div>

          <div class="parallax-container">
            <div class="parallax-wrapper">
              <div class="story-two">
                <div class="story-two__col-big col-big">
                  <div class="col-big__pic">
                    <img alt="bicycle riders" src="../assets/img/img-main02.jpg">
                    <img alt="leg in sneaker" src="../assets/img/img-main03.jpg">
                  </div>
                  <div class="col-big__numbers">
                    <div>
                      <div>22+</div>
                      <div>года в индустрии моды</div>
                    </div>
                    <div>
                      <div>3 999+ <span>грн</span></div>
                      <div>Бесплатная доставка</div>
                    </div>
                    <div>
                      <div>10+</div>
                      <div>магазинов по Украине</div>
                    </div>
                  </div>
                </div>
                <div class="story-two__col-small col-small">
                  <div class="col-small__text">
                    <div>
                      <span>BUMER</span> объединяет классические формы с оригинальными деталями,
                      вдохновленными
                      подиумной модой, а также предлагаем смелые решения от популярных инфлюенсеров.
                    </div>
                  </div>
                  <div class="col-small__pic">
                    <img alt="leg in sneaker" src="../assets/img/img-main03.jpg">
                    <img alt="bicycle riders" src="../assets/img/img-main02.jpg">
                  </div>
                </div>
              </div>
            </div>

            <div class="parallax-container">
              <div class="map">
                <div class="map__numbers">
                  <span>10+</span>
                  <span>магазинов по Украине</span>
                </div>
                <div class="map__pic">
                  <img alt="map of bumer stores" src="../assets/img/map.svg">
                </div>
              </div>

              <div class="quote">
                <div class="quote__text">
                  <p>В мире моды для нас нет границ и ограничений!</p>
                  <p>
                    BUMER следует самым актуальным модным трендам — в наших коллекциях классические
                    узоры
                    сочетаются с
                    оригинальными, ультрасовременными решениями.
                  </p>
                </div>
                <div class="quote__author author">
                  <div class="author__logo">
                    <img alt="bumer logo" src="../assets/img/svg/logo-black.svg">
                  </div>
                  <div class="author__date">
                    EST. 1999
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import HeroSlider from '../components/home-page/HeroSlider.vue'

export default {
  name: 'HomePage',
  components: {
    HeroSlider,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";
@import "../assets/scss/mixins";

.start-page {
  position: relative;
  z-index: 1;

  .container {
    position: relative;
    z-index: 20;
    background: $contrast_color; // !dont touch!
    .parallax-wrapper {
      position: sticky;
      top: 0;
      max-height: 100vh; // !dont touch!
      overflow-y: scroll;
      &::-webkit-scrollbar {
        width: 0;
      }
    }
    .parallax-container {
      position: relative;
      background: $contrast_color;
    }
    >.parallax-container {
      z-index: 3;
      >.parallax-container {
        z-index: 4;
        >.parallax-container {
          z-index: 5;
          >.parallax-container {
            z-index: 6;
          }
        }
      }
    }
  }
  .baner-winter {
    display: flex;
    font-size: adaptive_fz(20px, 12px);
    font-weight: 700;
    .pic {
      width: 35%;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .about {
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 65%;
      padding: 3.5vw 5vw; // 50px 70px
      background-color: #f5f5f5;;
      &__title {
        font-size: adaptive_fz(20px, 12px);
      }
      &__article {
        margin-bottom: 2em;
        font-size: adaptive_fz(122px, 25px);
        text-transform: uppercase;
        text-align: center;
      }
      &__price {
        font-size: adaptive_fz(35px, 17px);
        span  {
          font-size: adaptive_fz(18px, 10px);
        }
      }
      >img {
        position: absolute;
        top: 31%;
        left: calc(50% - 0.45 * 45%);
        width: 45%;
      }
      a {
        position: absolute;
        right: 5vw;
        bottom: 3.5vw;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 5vw;
        min-width: 40px;
        height: calc(0.75 * 5vw);
        min-height: 30px;
        img {
          width: 66%;
          height: 66%;
        }
      }
    }
    @media screen and (min-width: 1440px) {
      .about {
        &__article {
          font-size: 122px;
        }
      }
    }
  }
  .popular-products {
    @include popular-products;
  }
  .baner-interseason {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 4.85em; // 580px;
    font-size: adaptive_fz(120px, 24px);
    font-weight: 700;
    color: $contrast_color;
    background: url('../assets/img/img-baner02.jpg') center/cover no-repeat;
    .title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 65%;
      min-width: 250px;
      &__text {
        font-size: adaptive_fz(40px, 17px);
        text-transform: uppercase;
      }
      // &__discount {}
    }
    @media screen and (min-width: 1440px) {
      font-size: 120px;
      .title{
        &__text {
          font-size: 40px;
        }
      }
    }
  }
  .story-one {
    display: flex;
    margin-bottom: 4em;
    font-family: 'Roboto', sans-serif;
    font-size: adaptive_fz(46px, 15px);
    font-weight: 700;
    &__pic {
      display: flex;
      align-items: center;
      width: 40%;
      img {
        position: relative;
        left: 10%;
        top: 10%;
        z-index: 5;
        width: 100%;
        display: block;
      }
    }
    &__text {
      width: 60%;
      padding-right: 0.5em;
      line-height: 1em;
      color: $grey_color_light;
      p:nth-child(2) {
        color: $main_color;
      }
    }
    @media screen and (min-width: 1440px) {
      font-size: 46px;
    }
    @media screen and (max-width: 575px) {
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 2em;
      &__pic {
        width: 60%;
        img {
          left: 0%;
          top: 0%;
        }
      }
      &__text {
        width: 75%;
        text-transform: uppercase;
        p {
          margin-bottom: 1.5em;
          line-height: normal;
        }
      }
    }
  }
  .story-two {
    display: flex;
    justify-content: space-between;
    margin-bottom: 6.5em;
    font-size: adaptive_fz(14px, 12px);
    font-weight: 400;
    color: $grey_color_dark;
    .col-big {
      width: 58%;
      &__pic {
        img {
          width: 100%;
          display: block;
          &:last-of-type {
            display: none;
          }
        }
      }
      &__numbers {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        height: 30em;
        padding-left: 6.5vw;
        >div {
          &:last-child {
            display: none;
          }
          >div:first-child {
            font-size: adaptive_fz(70px, 20px);
            font-weight: 600;
            color: $main_color;
            text-transform: uppercase;
            span {
              font-size: 0.5em;
            }
          }
        }
      }
    }
    .col-small {
      display: flex;
      flex-direction: column;
      width: 32%;
      &__text {
        flex-grow: 1;
        display: flex;
        align-items: center;
        line-height: 1.7em;
        div {
          span {
            font-weight: 700;
            color: $main_color;
          }
        }
      }
      &__pic {
        img {
          width: 100%;
          display: block;
          &:last-of-type {
            display: none;
          }
        }
      }
    }
    @media screen and (min-width: 1440px) {
      .col-big {
        &__numbers {
          >div {
            >div:first-child {
              font-size: 70px;
            }
          }
        }
      }
    }
    @media screen and (max-width: 575px) {
      flex-direction: column-reverse;
      align-items: center;
      margin-bottom: 3em;
      .col-big {
        width: 60%;
        &__pic {
          img:first-of-type {
            display: none;
          }
          img:last-of-type {
            display: block;
          }
        }
        &__numbers {
          height: unset;
          padding: 0;
          text-align: center;
          >div {
            margin-top: 2.5em;
            &:last-child {
              display: block;
            }
          }
        }
      }
      .col-small {
        width: 90%;
        flex-direction: column-reverse;
        &__pic {
          img:first-of-type {
            display: none;
          }
          img:last-of-type {
            display: block;
          }
        }
        &__text {
          width: 80%;
          margin: 2.5em auto;
        }
      }
    }
  }
  .map {
    position: relative;
    margin-bottom: 1em;
    font-size: adaptive_fz(70px, 20px);
    font-weight: 600;
    &__numbers {
      position: absolute;
      top: calc(0% - 0.33 * (2 * 3vw + 1.15 * adaptive_fz(70px, 20px)));
      left: 3vw;
      display: flex;
      align-items: center;
      width: 40%;
      padding: 3vw 4vw;
      color: $contrast_color;
      background-color: $main_color;
      span {
        &:first-child {
          margin-right: 4vw;
        }
        &:last-child {
          font-size: adaptive_fz(14px, 8px);
          font-weight: 400;
          color: $grey_color;
        }
      }
    }
    &__pic {
      img {
        display: block;
        width: 100%;
      }
    }
    @media screen and (min-width: 1440px) {
      font-size: 70px;
    }
    @media screen and (max-width: 575px) {
      &__numbers {
        display: none;
      }
      &__pic {
        height: 13em;
        background: url('../assets/img/map.svg') 70% 40%/275% no-repeat;
        img {
          display: none;
        }
      }
    }
  }
  .quote {
    width: 50%;
    min-width: 300px;
    margin: 0 auto 6em;
    font-size: adaptive_fz(20px, 12px);
    font-weight: 400;
    text-align: center;
    &__text {
      margin-bottom: 3.5em;
      line-height: 1.5em;
      color: $grey_color_dark;
      p:first-child::before {
        display: block;
        width: 2.5em;
        height: 2.5em;
        margin: 0 auto 1.25em;
        content: '';
        background: url('../assets/img/svg/quotes.svg') center/contain no-repeat;
      }
    }
    &__author {
      font-size: adaptive_fz(14px, 9px);
      font-weight: 700;
      color: $main_color;
      .author__logo {
        width: 12.5vw;
        min-width: 150px;
        margin: 0 auto 1em;
        img {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
      .author__date {
        text-transform: uppercase;
      }
    }
    @media screen and (max-width: 991px) {
      width: 75%;
      margin-bottom: 3.5em;
    }
  }
}

</style>
