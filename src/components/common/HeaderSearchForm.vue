<template>
  <form 
    class="header-search-form"
    @submit.prevent="requestSearch"
  >
    <input
      v-model="userSearchRequest"
      class="header-search-form__input"
      :class="{'header-search-form__input--active': isSearchFormActive}"
      :placeholder="$t('common.search')"
      required
      type="search"
    >

    <SvgImage 
      class="header-search-form__icon" 
      name="search"
      @click.native="toggleSearchForm"
    />
  </form>
</template>

<script>
import SvgImage from '@/components/common/SvgImage'
import {mapMutations, mapActions, mapState} from 'vuex'

export default {
  name: 'HeaderSearchForm',
  components: {
    SvgImage,
  },
  data() {
    return {
      userSearchRequest: '',
    }
  },
  computed: {
    ...mapState('search', [
      'isSearchFormActive',
    ]),
  },
  methods: {
    requestSearch() {
      if (this.userSearchRequest) {
        this.sendSearchRequest(this.userSearchRequest)
      } else {
        return
      }
    },
    ...mapActions('search', [
      'sendSearchRequest',
    ]),
    ...mapMutations('search', [
      'toggleSearchForm',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.header-search-form {
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  align-items: center;

  @media screen and (max-width: 767px) {
    border-bottom: 1px solid transparent;
  }
}

.header-search-form__input {
  height: 26px;
  padding: 7px 10px;
  border: none;
  outline: none;
  background-color: $contrast_color;
  font-size: 11px;
  font-weight: 500;
  color: $main_color;

  @media screen and (max-width: 767px) {
    position: fixed;
    top: -26px;
    left: 0;
    display: block;
    width: 100%;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    transition: top 0.5s;
  }

  &.header-search-form__input--active {
    @media screen and (max-width: 767px) {
      top: 0;
    }
  }
}

.header-search-form__icon {
  width: 15px;
  height: 15px;
  cursor: pointer;
  overflow: visible;

  &:hover {
    opacity: 0.6;
  }
}
</style>
