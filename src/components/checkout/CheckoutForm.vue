<template>
  <div class="form checkout-form">
    <div class="form__fieldset-heading form__fieldset-heading--required form__fieldset-heading--mb">
      {{ $t('checkout.recipient_information') }}:
    </div>

    <div class="form__fieldset">
      <FormGroup :field="$v.form.firstName">
        <label class="form__label form__label--required">{{ $t('checkout.name') }}:</label>
        <input v-model.trim="$v.form.firstName.$model" class="form__input">
        <FormGroupError v-if="!$v.form.firstName.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.lastName">
        <label class="form__label form__label--required">{{ $t('checkout.last_name') }}:</label>
        <input v-model.trim="$v.form.lastName.$model" class="form__input">
        <FormGroupError v-if="!$v.form.lastName.required" type="required" />
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
      <FormGroup :field="$v.form.paymentMethod">
        <Multiselect
          v-model="$v.form.paymentMethod.$model"
          class="form__select"
          label="label"
          :options="paymentVariants"
          :placeholder="$t('checkout.check_payment_method')"
          :preselect-first="true"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.paymentMethod.required" type="required" />
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
          :preselect-first="true"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.shippingCompany.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.deliveryMethod" small-spacing>
        <Multiselect
          v-model="$v.form.deliveryMethod.$model"
          class="form__select"
          label="label"
          :options="deliveryVariants"
          :placeholder="$t('checkout.check_shipping_type')"
          :preselect-first="true"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.deliveryMethod.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.city" small-spacing>
        <Multiselect
          v-model="$v.form.city.$model"
          v-debounce:300ms="searchCities"
          class="form__select"
          :clear-on-select="true"
          :close-on-select="true"
          :internal-search="false"
          :label="`name_${$i18n.locale}`"
          :loading="cityLoading"
          :options="cityList"
          :placeholder="$t('checkout.select_city')"
          :searchable="true"
          :show-labels="false"
          :show-no-results="false"
          track-by="id"
          @input="searchPostOffices"
        >
          <span slot="noOptions">{{ $t('checkout.city_list_empty') }}</span>
        </Multiselect>

        <FormGroupError v-if="!$v.form.city.required" type="required" />
      </FormGroup>

      <FormGroup :field="$v.form.postOffice" small-spacing>
        <Multiselect
          v-model="$v.form.postOffice.$model"
          class="form__select"
          :disabled="!$v.form.city.$model"
          :label="`name_${$i18n.locale}`"
          :loading="postOfficesLoading"
          :options="postOfficesList"
          :placeholder="$t('checkout.select_post_office')"
          :show-labels="false"
          track-by="id"
        />
        <FormGroupError v-if="!$v.form.postOffice.required" type="required" />
      </FormGroup>
    </div>

    <div class="form__fieldset">
      <FormGroup :field="$v.form.comment">
        <label class="form__label">{{ $t('checkout.comment') }}:</label>
        <textarea v-model.trim.lazy="$v.form.comment.$model" class="form__input" :rows="5" />
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
import {mapActions, mapMutations} from 'vuex'

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
        firstName: '',
        lastName: '',
        phone: '+38 (0',
        email: '',
        paymentMethod: null,
        shippingCompany: null,
        deliveryMethod: null,
        city: null,
        postOffice: null,
        status: 'Created',
        comment: '',
      },
      loading: false,
      cityLoading: false,
      postOfficesList: [],
      postOfficesLoading: false,
      cityList: [],
      paymentVariants: [
        {
          id: 'UponReceipt',
          label: this.$t('checkout.cash'),
        },
        // {
        //   id: 'MoneyTransfer',
        //   label: this.$t('checkout.card'),
        // },
      ],
      deliveryVariants: [
        {
          id: 'postOffice',
          label: this.$t('checkout.in_post_office'),
        },
        // {
        //   id: 'card',
        //   label: this.$t('checkout.card'),
        // },
      ],
      shippingCompanies: [
        {
          id: 'np',
          label: this.$t('checkout.novaya_poshta'),
        },
        // {
        //   id: 'up',
        //   label: this.$t('checkout.ukr_poshta'),
        // },
        // {
        //   id: 'justin',
        //   label: 'Justin',
        // },
      ],
    }
  },
  validations: {
    form: {
      firstName: {required},
      lastName: {required},
      phone: {required, phoneMask},
      email: {required, email},
      paymentMethod: {required},
      shippingCompany: {required},
      deliveryMethod: {required},
      city: {required},
      postOffice: {required},
      comment: {},
    },
  },
  methods: {
    ...mapActions('checkout', [
      'fetchCities',
      'fetchPostOffices',
      'createOrder',
    ]),
    ...mapMutations('cart', [
      'clearCart',
    ]),
    async searchCities(val) {
      if (val.length > 2) {
        this.cityLoading = true
        this.cityList = await this.fetchCities(val)
        this.cityLoading = false
      }
    },
    async searchPostOffices(city) {
      this.postOfficesLoading = true
      this.postOfficesList = await this.fetchPostOffices(city.id)
      this.postOfficesLoading = false
    },
    async submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$emit('set-loader', true)
        await this.createOrder(this.form)
        this.$emit('set-loader', false)
        this.$router.push({name: 'SuccessfullOrder'})
        this.clearCart()
      }
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
