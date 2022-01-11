<template>
  <section class="privacy-policy">
    <div class="container">
      <h1>
        {{ $t('common.privacy_policy') }}
      </h1>
      <div class="redactor-content">
        <article>
          <h4>
            {{ $t('privacy.subtitle_1') }}
          </h4>
          <p>
            {{ $t('privacy.text_1_1') }}
            <a class="privacy-policy__link" :href="eu_url">{{ $t('privacy.text_1_link') }}</a>
            {{ $t('privacy.text_1_2') }}
          </p>
          <h4>
            {{ $t('privacy.subtitle_2') }}
          </h4>
          <p>
            {{ $t('privacy.text_2') }}
          </p>
          <h4>
            {{ $t('privacy.subtitle_3') }}
          </h4>
          <p>
            {{ $t('privacy.text_3') }}
          </p>
          <h4>
            {{ $t('privacy.subtitle_4') }}
          </h4>
          <p>
            {{ $t('privacy.text_4') }}
          </p>
          <h4>
            {{ $t('privacy.subtitle_5') }}
          </h4>
          <p>
            {{ $t('privacy.text_5_1') }}
            <a class="privacy-policy__link" :href="wiki_url">{{ $t('privacy.text_5_link') }}</a>
            {{ $t('privacy.text_5_2') }}
          </p>
          <h4>
            {{ $t('privacy.subtitle_6') }}
          </h4>
          <p>
            {{ $t('privacy.text_6') }}
          </p>
          <h4>
            {{ $t('privacy.subtitle_7') }}
          </h4>
          <p>
            {{ $t('privacy.text_7') }}
          </p>
          <h4>
            {{ $t('privacy.subtitle_8') }}
          </h4>
          <p>
            {{ $t('privacy.text_8') }}
          </p>
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PrivacyPolicyInfoPage',
  data() {
    return {
      eu_url:'https://ec.europa.eu/info/law/law-topic/data-protection_en',
      wiki_url_ru: 'https://ru.wikipedia.org/wiki/Cookie',
      wiki_url_ua: 'https://uk.wikipedia.org/wiki/Куки', 
    }
  },
  computed: {
    wiki_url() {
      let url = ''
      if (this.$i18n.locale === 'ru') {
          url = this.wiki_url_ru
        } else if (this.$i18n.locale === 'ua') {
         url = this.wiki_url_ua
        }
      return url
    },
  },
}
</script>

<style lang="scss" scoped>

.redactor-content {
  justify-content: center;
}

.privacy-policy__link {
  color: #2048bf;
  text-decoration: none;

  &:hover {
    color: #2048bf;
    text-decoration: underline;
  }
}
</style>
