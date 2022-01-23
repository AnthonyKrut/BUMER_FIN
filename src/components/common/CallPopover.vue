<template>
  <div
    v-if="isCallPopoverVisible"
    v-focus
    class="call-popover"
    tabindex="0"
    @focusout="close($event)"
  >
    <div class="call-popover__number">
      <SvgImage class="call-popover__number-img" name="call" />
      <span class="call-popover__number-text">063 373 39 88</span>
    </div>
    <div class="call-popover__number">
      <SvgImage class="call-popover__number-img" name="call" />
      <span class="call-popover__number-text">093 220 03 77</span>
    </div>
    <div class="call-popover__message">
      {{ $t('common.call_popover_message') }}
    </div>
    <FormGroup :field="$v.form.phone">
      <TheMask
        v-model.lazy="$v.form.phone.$model"
        class="call-popover__input"
        mask="+38 (0##) ### ## ##"
        masked
        @blur.native="$v.form.phone.$touch"
        @focusout="close($event)"
        @input="$v.form.phone.$reset"
      />
      <FormGroupError v-if="!$v.form.phone.required" type="required" />
      <FormGroupError v-if="!$v.form.phone.phoneMask" type="phone" />
    </FormGroup>
    <Btn
      class="call-popover__button"
      full-width
      @click.native="requestCallBack"
    >
      {{ $t('common.call_popover_button') }}
    </Btn>
  </div>
</template>

<script>
import SvgImage from './SvgImage.vue'
import Btn from '@/components/common/Btn'
import {mapMutations, mapActions, mapState} from 'vuex'
import {helpers, required} from 'vuelidate/lib/validators'
import FormGroupError from '@/components/forms/FormGroupError'
import FormGroup from '@/components/forms/FormGroup'
import {TheMask} from 'vue-the-mask'

const phoneMask = helpers.regex('phone', /^\+38 \(0\d\d\) \d\d\d \d\d \d\d$/)

export default {
  name: 'CallPopover',
  components: {
    SvgImage,
    Btn,
    FormGroup,
    FormGroupError,
    TheMask,
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus()
      },
    },
  },
  data() {
    return {
      form: {
        phone: '+38 (0',
      },
    }
  },
  validations: {
    form: {
      phone: {required, phoneMask},
    },
  },
  computed: {
    ...mapState('call', [
      'isCallPopoverVisible',
    ]),
  },
  methods: {
    close(event) {
      if (this.$el === event.relatedTarget 
        || this.$el.contains(event.relatedTarget)) {
        return
      } else {
        this.closeCallPopover()
      }
    },
    requestCallBack() {
      if (!this.$v.$invalid) {
        this.orderCallBack(this.form.phone)
      } else {
        return
      }
    },
    ...mapActions('call', [
      'orderCallBack',
    ]),
    ...mapMutations('call', [
      'closeCallPopover',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.call-popover {
  position: absolute;
  z-index: 10;
  top: 100%;
  right: 0;
  width: 250px;
  padding: 30px;
  background-color: $contrast_color;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  outline: none;
  line-height: normal;
  text-align: center;
}

.call-popover__number {
  font-size: 10px;
  font-weight: 600;
  line-height: 2em;
  color: $main_color;
}

.call-popover__number-img {
  width: 1.2em;
  height: 1.2em;
  margin-right: 1em;
  vertical-align: middle;
  stroke: none;
}

//.call-popover__number-text {}

.call-popover__message {
  margin: 22px 0 5px;
  font-size: 10px;
  font-weight: 400;
  line-height: 15px;
  color: $text_color_dark;
}

.call-popover__input {
  width: 100%;
  height: 26px;
  padding: 10px;
  border: none;
  outline: none;
  background-color: #F3F3F3;
  appearance: none; // from here on
  border-radius: 0; // fixing rounded corners and shadow in Safari
  background-image: linear-gradient(transparent, transparent); //
}

.call-popover__button {
  padding: 10px;
}

</style>
