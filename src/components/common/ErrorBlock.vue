<template>
  <div class="error-block">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'ErrorBlock',
}
</script>

<style lang="scss" scoped>

.error-block {
  color: #ff0000;
  background: #ffeaea;
  border: 1px solid #ffabab;
  padding: 10px 20px;
  margin-bottom: 15px;
  font-size: 12px;
}

</style>
