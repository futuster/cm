<template>
  <div>
    <label
      ><span>{{ title }}:</span>{{ value }}</label
    >
  </div>
</template>

<script>
export default {
  name: "TextDisplay",
  props: ["label", "value"],
};
</script>

<style scoped>

</style>
