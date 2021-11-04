<template>
  <div>

    <h2 class="fw-light mb-4"> <sup class="fs-6 fw-lighter text-muted">#{{ contentType.alias }}</sup></h2>
    <div class="list-group">
      <a href="#" class="list-group-item list-group-item-action " aria-current="true" v-for="attribute in contentType.attributes" v-bind:key="attribute.alias">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-0">{{ attribute.title }}</h5>
          <small class="text-muted">#{{attribute.alias}}</small>
        </div>

        <small class="fw-light">{{attribute.help}}</small>
        <div class="mb-1">

          <template class="col-md-4" v-if="attribute.type === 'collection'">
            <span class="badge bg-secondary">{{ attribute.reference.title }}</span>
            <template v-if="!attribute.reference.alias">
              <div class="badge fs-6 bg-danger">ОШИБКА!</div><br> Тип контента `<span class="text-warning">{{ attribute.reference }}</span>` не найден
            </template>
          </template>
          <template v-else>
            <span class="badge bg-secondary">{{ attribute.type }}</span>
          </template>

        </div>
      </a>
    </div>

    <div class="mb-2" >
      <h6 class="fw-normal"> </h6>


    </div>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'


export default {
  name: 'AttributeType',
  props: {
    id: String,
    attribute: String
  },
  setup(props) {
    const store = useStore()
    store.dispatch('fetchContentTypes')

    return {
      contentTypes: computed(() => store.state.contentTypes),
      contentType: computed(() => store.state.contentTypes.find(t => t.alias === props.id) || {title: '', alias: props.id, attributes: []}),
      attributeType: computed(() => store.state.contentTypes.find(t => t.alias === props.id).attributes.find(attr => attr.alias === props.attribute) )
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
