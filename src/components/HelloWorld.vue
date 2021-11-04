<template>
  <div>
    <h1>Hello</h1>
    <p>{{ id }}</p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    id: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
