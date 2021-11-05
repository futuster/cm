<template>
  <div class="container">
    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="fw-light">Контент</h2>
      </div>

      <div class="col-2">
        <div class="list-group list-group-flush">
          <router-link active-class="active" class="list-group-item list-group-item-action" v-for="contentType in contentTypes"
                       v-bind:key="contentType.alias"
                       :to="{ name: 'contentList', params: { contentTypeAlias: contentType.alias }}">
            {{ contentType.title }}
          </router-link>
        </div>
      </div>
      <div class="col-10">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>

import {useStore} from "vuex";
import {computed} from "vue";

export default {
  name: 'Content',
  props: {
    contentTypeAlias: String,
    contentId: String
  },
  setup() {
    const store = useStore()
    store.dispatch('fetchContentTypes')
    return {
      contentTypes: computed(() => store.state.contentTypes || [])
    }
  }
}
</script>
<style scoped>

</style>
