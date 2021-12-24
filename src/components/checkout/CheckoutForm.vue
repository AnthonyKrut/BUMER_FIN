<template>
  <div class="form checkout-form">
    <div class="form__fieldset-heading form__fieldset-heading--required form__fieldset-heading--mb">
      {{ $t('checkout.recipient_information') }}:
    </div>

    <div class="form__fieldset">
      <FormGroup :field="$v.form.first_name">
        <label class="form__label form__label--required">{{ $t('checkout.name') }}:</label>
        <input v-model.trim="$v.form.first_name.$model" class="form__input">
        <FormGroupError v-if="!$v.form.first_name.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.last_name">
        <label class="form__label form__label--required">{{ $t('checkout.last_name') }}:</label>
        <input v-model.trim="$v.form.last_name.$model" class="form__input">
        <FormGroupError v-if="!$v.form.last_name.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.phone">
        <label class="form__label form__label--required">{{ $t('checkout.phone') }}:</label>
        <TheMask
          v-model.lazy="$v.form.phone.$model"
          class="form__input"
          mask="+38 (0##) ### ## ##"
          masked
          @blur.native="$v.form.phone.$touch"
          @input="$v.form.phone.$reset"
        />
        <FormGroupError v-if="!$v.form.phone.required" type="required" />
        <FormGroupError v-if="!$v.form.phone.phoneMask" type="phone" />
      </FormGroup>

      <FormGroup :field="$v.form.email">
        <label class="form__label form__label--required">Email:</label>
        <input v-model.trim.lazy="$v.form.email.$model" class="form__input">
        <FormGroupError v-if="!$v.form.email.required" type="required" />
        <FormGroupError v-if="!$v.form.email.email" type="email" />
      </FormGroup>
    </div>

    <div class="form__fieldset-heading form__fieldset-heading--required">
      {{ $t('checkout.payment_method') }}:
    </div>

    <div class="form__fieldset">
      <FormGroup :field="$v.form.payment">
        <Multiselect
          v-model="$v.form.payment.$model"
          class="form__select"
          label="label"
          :options="paymentVariants"
          :placeholder="$t('checkout.check_payment_method')"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.payment.required" type="required" />
      </FormGroup>
    </div>

    <div class="form__fieldset-heading form__fieldset-heading--required">
      {{ $t('checkout.shipping_method') }}:
    </div>

    <div class="form__fieldset">
      <FormGroup :field="$v.form.shippingCompany" small-spacing>
        <Multiselect
          v-model="$v.form.shippingCompany.$model"
          class="form__select"
          label="label"
          :options="shippingCompanies"
          :placeholder="$t('checkout.check_shipping_method')"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.shippingCompany.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.shippingType" small-spacing>
        <Multiselect
          v-model="$v.form.shippingType.$model"
          class="form__select"
          label="label"
          :options="paymentVariants"
          :placeholder="$t('checkout.in_post_office')"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.shippingType.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.city" small-spacing>
        <Multiselect
          v-model="$v.form.city.$model"
          class="form__select"
          label="label"
          :options="paymentVariants"
          :placeholder="$t('checkout.select_city')"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.city.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.postOffice" small-spacing>
        <Multiselect
          v-model="$v.form.postOffice.$model"
          class="form__select"
          label="label"
          :options="paymentVariants"
          :placeholder="$t('checkout.select_post_office')"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.postOffice.required" type="required" />
      </FormGroup>
    </div>
  </div>
</template>

<script>
import {email, helpers, required} from 'vuelidate/lib/validators'
import FormGroupError from '@/components/forms/FormGroupError'
import FormGroup from '@/components/forms/FormGroup'
import {TheMask} from 'vue-the-mask'
import Multiselect from 'vue-multiselect'

const phoneMask = helpers.regex('phone', /^\+38 \(0\d\d\) \d\d\d \d\d \d\d$/)

export default {
  name: 'CheckoutForm',
  components: {
    FormGroup,
    FormGroupError,
    TheMask,
    Multiselect,
  },
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        phone: '+38 (0',
        email: '',
        payment: null,
        shippingCompany: null,
        shippingType: null,
        city: null,
        postOffice: null,
      },
      loading: false,
      paymentVariants: [
        {
          id: 'cash',
          label: this.$t('checkout.cash'),
        },
        {
          id: 'card',
          label: this.$t('checkout.card'),
        },
      ],
      shippingCompanies: [
        {
          id: 'np',
          label: this.$t('checkout.novaya_poshta'),
        },
        {
          id: 'up',
          label: this.$t('checkout.ukr_poshta'),
        },
        {
          id: 'justin',
          label: 'Justin',
        },
      ],
    }
  },
  validations: {
    form: {
      first_name: {required},
      last_name: {required},
      phone: {required, phoneMask},
      email: {required, email},
      payment: {required},
      shippingCompany: {required},
      shippingType: {required},
      city: {required},
      postOffice: {required},
    },
  },
  methods: {
    submit() {
      this.$v.$touch()
      this.loading = true
      if (!this.$v.$invalid) {
        // do your submit logic here
      }
      this.loading = false
    },
  },
}
</script>

<style lang="scss" scoped>

.checkout-form {
  margin-bottom: 55px;

  @media screen and (max-width: 991px) {
    margin-bottom: 0;
  }
}

.form__fieldset {
  margin-bottom: 50px;

  @media screen and (max-width: 991px) {
    margin-bottom: 20px;
  }
}

.form__fieldset-heading {
  font-weight: bold;
  font-size: 14px;
  margin-bottom: 10px;

  &.form__fieldset-heading--required {
    &:after {
      content: '*';
      color: #ff0000;
      margin-left: 3px;
    }
  }

  &.form__fieldset-heading--mb {
    margin-bottom: 20px;
  }
}

</style>
