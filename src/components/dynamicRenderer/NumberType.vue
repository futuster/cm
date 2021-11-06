<template>
  <div>
    <label class="form-label">{{ title }}</label>
    <input type="number" :value="value" @input="$emit('input', $event)" class="form-control form-control-sm">
    <div class="form-text" v-if="help">{{help}}</div>
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
