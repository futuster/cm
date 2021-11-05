<template>
  <div>
    <label class="form-label">{{ title }}</label>
    <textarea :value="value" @input="$emit('input', $event)" class="form-control form-control-sm"></textarea>
    <div class="form-text" v-if="help">{{help}}</div>
  </div>
</template>

<script>
export default {
  name: "StringType",
  props: ["title", "help", "value"],
  emits: ["input"],
};
</script>

<style scoped>

</style>
