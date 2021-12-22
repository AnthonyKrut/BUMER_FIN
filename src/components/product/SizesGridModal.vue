<template>
  <sweet-modal
    ref="modal"
    class="sizes-modal"
    :title="$t('product.size_grid')"
  >
    <div class="sizes-modal__body">
      <table class="sizes-modal__table">
        <thead>
          <tr>
            <th>EUR</th>
            <th>UK</th>
            <th>{{ $t('product.foot_length') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td />
            <td />
            <td>.</td>
          </tr>
          <tr>
            <td>39</td>
            <td>5</td>
            <td>25,3</td>
          </tr>
          <tr>
            <td>40</td>
            <td>6</td>
            <td>25,8</td>
          </tr>
          <tr>
            <td>41</td>
            <td>7</td>
            <td>26,4</td>
          </tr>
          <tr>
            <td>42</td>
            <td>8</td>
            <td>27</td>
          </tr>
          <tr>
            <td>43</td>
            <td>9</td>
            <td>27,6</td>
          </tr>
          <tr>
            <td>44</td>
            <td>10</td>
            <td>28,3</td>
          </tr>
          <tr>
            <td>45</td>
            <td>11</td>
            <td>28,9</td>
          </tr>
          <tr>
            <td>46</td>
            <td>12</td>
            <td>29,6</td>
          </tr>
          <tr>
            <td>47</td>
            <td>13</td>
            <td>30,3</td>
          </tr>
        </tbody>
      </table>
      <div class="sizes-modal__text">
        {{ $t('product.sizes_grid_description') }}
      </div>
    </div>
  </sweet-modal>
</template>

<script>
import { SweetModal } from 'sweet-modal-vue'

export default {
  name: 'SizesGridModal',
  components: {
    SweetModal,
  },
  methods: {
    openModal() {
      this.$refs.modal.open()
    },
    closeModal() {
      this.$refs.modal.close()
    },
  },
}
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

::v-deep .sweet-modal {
  max-width: 520px;
}

.sizes-modal__body {
  margin: 0 auto;
  
  @media screen and (max-width: 767px) {
    width: 75vw;
  }
}

.sizes-modal__table {
  width: 100%;
  margin-bottom: 2em;
  border-spacing: 0;

  tbody tr:first-child {
    visibility: hidden;
  }

  tr {
    line-height: 2em;
    text-transform: uppercase;
    text-align: center;

    &:last-of-type {
      td {
        border-bottom: none;
      }
    }
  }

  th,
  td {
    border-bottom: 1px solid #e0e0e0;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    padding-top: 3px;
    padding-bottom: 3px;
  }

  th:last-child,
  td:last-child {
    width: 50%;
  }
}

.sizes-modal__text {
  font-size: adaptive_fz(11px, 8px);
  line-height: 1.3em;
  color: $text_color_dark;
  text-align: center;
  font-size: 11px;
}

</style>
