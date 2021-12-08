<template>
  <section class="error-404page">
    <div class="container">
      <div class="error-target">
        <div class="error-target__number">
          404
        </div>
        <div class="error-target__circle">
          <div class="error-target__oops">
            Oops
          </div>
        </div>
      </div>
      <div class="error-message">
        Что-то пошло не так...
      </div>
      <Btn class="error-btn" to="Home">
        <span>вернуться на главную</span>
      </Btn>
    </div>
  </section>
</template>

<script>
import Btn from '../components/common/Btn.vue'

export default {
  name: 'Error404Page',
  components: {
    Btn,
  },
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables";
@import "../assets/scss/functions";

.error-404page {
  min-height: 75vh;
  text-align: center;
}

.error-target {
  position: relative;
}

.error-target__number {
  font-size: adaptive_fz(300px, 100px);
  font-weight: 700;
  color: $main_color;
}

.error-target__circle{
  position: absolute;
  top: calc(50% - 0.5 * 0.9 * adaptive_fz(300px, 100px));
  left: calc(50% - 0.5 * 0.9 * adaptive_fz(300px, 100px));
  width: calc(0.9 * adaptive_fz(300px, 100px));
  height: calc(0.9 * adaptive_fz(300px, 100px));
  border-radius: 50%;
  background: $contrast_color;
  display: flex;
  justify-content: center;
  align-items: center;
}

.error-target__oops {
  width: calc(0.5 * adaptive_fz(300px, 100px));
  height: calc(0.5 * adaptive_fz(300px, 100px));
  border-radius: 50%;
  background: $attention_color;
  font-size: adaptive_fz(25px, 14px);
  font-weight: 700;
  line-height: calc(0.5 * adaptive_fz(300px, 100px));
  color: $contrast_color;
}

.error-message {
  margin-bottom: 3em;
  font-size: adaptive_fz(16px, 10px);
  font-weight: 400;
  color: $text_color_dark;
}

//.error-btn {}

</style>
