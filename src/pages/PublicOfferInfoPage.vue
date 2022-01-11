<template>
  <section class="public-offer">
    <div class="container">
      <h1>
        {{ $t('common.public_offer') }}
      </h1>
      <div class="redactor-content">
        <article>
          <ol class="public-offer__sections-list">
            <li>
              <h4>{{ $t('publicoffer.subtitle_1') }}</h4>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_1_1') }}</li>
                <li>{{ $t('publicoffer.text_1_2') }}</li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_2') }}</h4>
              <ol class="public-offer__articles-list">
                <li>
                  {{ $t('publicoffer.text_2_1') }}
                  <ul class="public-offer__bullets-list">
                    <li>{{ $t('publicoffer.text_2_2') }}</li>
                    <li>{{ $t('publicoffer.text_2_3') }}</li>
                    <li>{{ $t('publicoffer.text_2_4') }}</li>
                    <li>{{ $t('publicoffer.text_2_5') }}</li>
                    <li>{{ $t('publicoffer.text_2_6') }}</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_3') }}</h4>
              <ol class="public-offer__articles-list">
                <li>
                  {{ $t('publicoffer.text_3_1') }} <br><br>
                  {{ $t('publicoffer.text_3_2') }}
                  <ul class="public-offer__bullets-list">
                    <li>{{ $t('publicoffer.text_3_3') }}</li>
                    <li>{{ $t('publicoffer.text_3_4') }}</li>
                    <li>{{ $t('publicoffer.text_3_5') }}</li>
                    <li>{{ $t('publicoffer.text_3_6') }}</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_4') }}</h4>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_4_1') }}</li>
                <li>{{ $t('publicoffer.text_4_2') }}</li>
                <li>{{ $t('publicoffer.text_4_3') }}</li>
                <li>{{ $t('publicoffer.text_4_4') }}</li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_5') }}</h4>
              <div>{{ $t('publicoffer.text_5_1') }}</div>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_5_2') }}</li>
                <li>{{ $t('publicoffer.text_5_3') }}</li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_6') }}</h4>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_6_1') }}</li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_7') }}</h4>
              <ol class="public-offer__articles-list">
                <li>
                  {{ $t('publicoffer.text_7_1') }}
                  <ul class="public-offer__bullets-list">
                    <li>{{ $t('publicoffer.text_7_2') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('publicoffer.text_7_3') }}
                  <ul class="public-offer__bullets-list">
                    <li>{{ $t('publicoffer.text_7_4') }}</li>
                  </ul>
                </li>
                <li>
                  {{ $t('publicoffer.text_7_5') }}
                  <ul class="public-offer__bullets-list">
                    <li>{{ $t('publicoffer.text_7_6') }}</li>
                    <li>{{ $t('publicoffer.text_7_7') }}</li>
                    <li>{{ $t('publicoffer.text_7_8') }}</li>
                  </ul>
                </li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_8') }}</h4>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_8_1') }}</li>
                <li>
                  {{ $t('publicoffer.text_8_2') }}
                  <ul class="public-offer__bullets-list">
                    <li>{{ $t('publicoffer.text_8_3') }}</li>
                    <li>{{ $t('publicoffer.text_8_4') }}</li>
                    <li>{{ $t('publicoffer.text_8_5') }}</li>
                    <li>{{ $t('publicoffer.text_8_6') }}</li>
                    <li>{{ $t('publicoffer.text_8_7') }}</li>
                    <li>{{ $t('publicoffer.text_8_8') }}</li>
                  </ul>
                </li>
                <li>{{ $t('publicoffer.text_8_9') }}</li>
                <li>{{ $t('publicoffer.text_8_10') }}</li>
                <li>{{ $t('publicoffer.text_8_11') }}</li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_9') }}</h4>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_9_1') }}</li>
                <li>{{ $t('publicoffer.text_9_2') }}</li>
                <li>{{ $t('publicoffer.text_9_3') }}</li>
                <li>{{ $t('publicoffer.text_9_4') }}</li>
                <li>{{ $t('publicoffer.text_9_5') }}</li>
                <li>{{ $t('publicoffer.text_9_6') }}</li>
                <li>{{ $t('publicoffer.text_9_7') }}</li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_10') }}</h4>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_10_1') }}</li>
                <li>{{ $t('publicoffer.text_10_2') }}</li>
                <li>{{ $t('publicoffer.text_10_3') }}</li>
              </ol>
            </li>
            <li>
              <h4>{{ $t('publicoffer.subtitle_11') }}</h4>
              <ol class="public-offer__articles-list">
                <li>{{ $t('publicoffer.text_11_1') }}</li>
                <li>{{ $t('publicoffer.text_11_2') }}</li>
                <li>{{ $t('publicoffer.text_11_3') }}</li>
              </ol>
              <p>{{ $t('publicoffer.text_11_4') }}</p>
            </li>
          </ol>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PublicOfferInfoPage',
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/functions";
@import "../assets/scss/variables";

.redactor-content {
  justify-content: center;
}

.public-offer__sections-list {
  counter-reset: section; 
  list-style-type: none;

  >* {
    counter-increment: section; 
  }

  * {
    margin-bottom: 1.5em;
    font-size: adaptive_fz(12px, 10px);
    line-height: 1.5em;
    color: $text_color_dark;
  }
}

.public-offer__articles-list {
  counter-reset: article;
  list-style-type: none;

  >*::before {
    counter-increment: article;
    content: counter(section) '.' counter(article) '. ';
  }
}

.public-offer__bullets-list {
  margin-top: 1.5em;
  list-style-type: disc;
  list-style-position: inside;
}
</style>
