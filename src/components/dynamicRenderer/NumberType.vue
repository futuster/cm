<template>
  <div class="container">
    <label>{{ title }}</label>
    <input :value="value" @input="$emit('input', $event)" />
  </div>
</template>

<script>
export default {
  name: "NumberType",
  props: ["title", "value"],
  emits: ["input"],
};
</script>

<style scoped>

</style>
