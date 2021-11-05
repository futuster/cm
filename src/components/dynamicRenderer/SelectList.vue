<template>
  <div class="container">
    <label>{{ title }}</label>
    <select :value="value" @change="$emit('input', $event)">
      <option :value="option" v-for="(option, index) in options" :key="index">{{
        option
      }}</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectList",
  props: ["title", "value", "options"],
  emits: ["input"],
};
</script>

<style scoped>

</style>
