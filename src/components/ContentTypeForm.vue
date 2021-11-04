<template>
  <div>
    <form>

      <div class="form-floating mb-2">
        <input type="text" class="form-control" :value="contentType.title" placeholder="">
        <label>Название</label>
      </div>
      <div class="form-floating mb-2">
        <input type="text" class="form-control" :value="contentType.alias" placeholder="">
        <label>Идентификатор</label>
      </div>

      <h4 v-if="contentType.attributes.length > 0">Свойства</h4>
      <div v-for="attribute in contentType.attributes" v-bind:key="attribute.alias">
        <div class="row">
          <div class="col-md-4">
            <label class="form-label">Название</label>
            <input type="text" :value="attribute.title" class="form-control form-control-sm">
          </div>
          <div class="col-md-4">
            <label class="form-label">Тип поля</label>
            <select v-model="attribute.type" class="form-select form-select-sm">
              <option v-for="option in ['text', 'number', 'collection', 'asset', 'image']" v-bind:key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div class="col-md-4" v-if="attribute.type === 'collection'">
            <label class="form-label">Тип контента</label>
            <select v-bind:disabled="!attribute.reference.alias" v-model="attribute.reference" class="form-select form-select-sm">
              <option v-for="ct in contentTypes" v-bind:key="ct.alias" :value="ct">
                {{ ct.title }}
              </option>
            </select>

            <span v-if="!attribute.reference.alias">
                    <h6 class="badge bg-danger">ОШИБКА!</h6><br> Тип контента `<span class="text-warning">{{ attribute.reference }}</span>` не найден
                  </span>
          </div>
        </div>


      </div>
    </form>
  </div>
</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'


export default {
  name: 'ContentTypeForm',
  props: {
    id: String
  },
  setup(props) {
    const store = useStore()
    store.dispatch('fetchContentTypes')

    return {
      contentTypes: computed(() => store.state.contentTypes),
      contentType: computed(() => store.state.contentTypes.find(t => t.alias === props.id) || {title: '', alias: props.id, attributes: []})
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
