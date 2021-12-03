<template>
  <section class="start-page">
    <HeroSlider />

    <div class="container">
      <Banner1 />

      <div class="parallax-container">
        <div class="popular-products">
          <h3 class="popular-products__title">ПОПУЛЯРНЫЕ ТОВАРЫ</h3>
          <div class="popular-products__line line line_fisrt">
            <router-link
              class="line__product product"
              :to="{ name: 'Product' }"
            >
              <div class="product__label">SALE</div>
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item01-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </router-link>
            <router-link
              class="line__product product"
              :to="{ name: 'Product' }"
            >
              <div class="product__label">TOP</div>
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item02-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </router-link>
            <router-link
              class="line__product product"
              :to="{ name: 'Product' }"
            >
              <div class="product__label" />
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item03-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </router-link>
            <router-link
              class="line__product product"
              :to="{ name: 'Product' }"
            >
              <div class="product__label">NEW</div>
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item01-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </router-link>
          </div>

          <Banner2 />

          <div class="popular-products__line line line_second">
            <div class="line__product product">
              <div class="product__label">SALE</div>
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item01-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label">TOP</div>
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item02-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label" />
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item03-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </div>
            <div class="line__product product">
              <div class="product__label">NEW</div>
              <div class="product__pic">
                <img
                  alt="product picture"
                  src="../../public/img/stock-items/item01-01.png"
                />
              </div>
              <div class="product__specs">
                <div class="product__article">QN380</div>
                <div class="product__price">2250 <span>грн</span></div>
              </div>
            </div>
          </div>
        </div>

        <div class="parallax-container">
          <div class="story-one">
            <div class="story-one__pic">
              <img alt="boot image" src="../assets/img/img-main01.png" />
            </div>
            <div class="story-one__text">
              <p>
                Мы объединяем классические модели с модными вырезами и
                высококачественными материалами.
              </p>
              <p>Мировые тренды в оригинальном и удобном варианте.</p>
              <p>Бесплатный возврат и обмен до 30 дней.</p>
              <p>Новые модели каждый день. Специальное предложение.</p>
            </div>
          </div>

          <div class="parallax-container">
            <div class="parallax-wrapper">
              <Story2 />
            </div>

            <div class="parallax-container">
              <div class="map">
                <div class="map__numbers">
                  <span>10+</span>
                  <span>магазинов по Украине</span>
                </div>
                <div class="map__pic">
                  <img alt="map of bumer stores" src="../assets/img/map.svg" />
                </div>
              </div>

              <div class="quote">
                <div class="quote__text">
                  <p>В мире моды для нас нет границ и ограничений!</p>
                  <p>
                    BUMER следует самым актуальным модным трендам — в наших
                    коллекциях классические узоры сочетаются с оригинальными,
                    ультрасовременными решениями.
                  </p>
                </div>
                <div class="quote__author author">
                  <div class="author__logo">
                    <img
                      alt="bumer logo"
                      src="../assets/img/svg/logo-black.svg"
                    />
                  </div>
                  <div class="author__date">EST. 1999</div>
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
import HeroSlider from '../components/home-page/HeroSlider.vue';
import Banner1 from '@/components/home-page/Banner1';
import Banner2 from '@/components/home-page/Banner2';
import Story2 from '@/components/home-page/Story2';


export default {
  name: 'HomePage',
  components: {
    Story2,
    Banner2,
    Banner1,
    HeroSlider,
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";
@import "../assets/scss/mixins";

.start-page {
  position: relative;
  z-index: 1;

  .container {
    background: $contrast_color; // !dont touch!
  }

  .popular-products {
    @include popular-products;
  }

  .story-one {
    display: flex;
    margin-bottom: 4em;
    font-family: "Roboto", sans-serif;
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
        background: url("../assets/img/map.svg") 70% 40%/275% no-repeat;
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
        content: "";
        background: url("../assets/img/svg/quotes.svg") center/contain no-repeat;
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
