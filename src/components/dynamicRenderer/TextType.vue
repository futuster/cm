<template>
  <div>
    <label class="form-label">{{ title }}</label>
    <textarea :value="value" @input="$emit('input', $event)" class="form-control form-control-sm"></textarea>
  </div>
</template>

<script>
export default {
  name: "StringType",
  props: ["title", "value"],
  emits: ["input"],
};
</script>

<style scoped>

</style>
