<template>
  <div>
    <h2 class="fw-light mb-4"> {{ contentType.title }} <sup class="fs-6 fw-lighter text-muted">#{{ contentType.alias }}</sup></h2>
    <div class="list-group">
      <router-link :to="{ name: 'attributeEdit', params: {id: id, attribute: attribute.alias } }"
                   class="list-group-item list-group-item-action " aria-current="true" v-for="attribute in contentType.attributes"
                   v-bind:key="attribute.alias">
        <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-0">{{ attribute.title }}</h5>
          <small class="text-muted">#{{ attribute.alias }}</small>
        </div>

        <small class="fw-light">{{ attribute.help }}</small>
        <div class="mb-1">

          <template class="col-md-4" v-if="attribute.type === 'collection'">
            <span class="badge bg-secondary">{{ attribute.reference }}</span>
            <template v-if="!attribute.reference">
              <div class="badge fs-6 bg-danger">ОШИБКА!</div>
              <br> Тип контента `<span class="text-warning">{{ attribute.reference }}</span>` не найден
            </template>
          </template>
          <template v-else>
            <span class="badge bg-secondary">{{ attribute.type }}</span>
          </template>

        </div>
      </router-link>
    </div>

    <div class="mb-2">
      <h6 class="fw-normal"></h6>


    </div>
  </div>
  <teleport to="body">
    <div v-if="modalOpen" class="modal">

      <div class="body">

        <div class="">
          <label class="form-label">Название</label>
          <input type="text" v-model="attr.title" class="form-control form-control-sm">
        </div>
        <div class="">
          <label class="form-label">Идентификатор</label>
          <input type="text" disabled :value="attr.alias" class="form-control form-control-sm">
        </div>
        <div class="">
          <label class="form-label">Описание</label>
          <input type="text" v-model="attr.help" class="form-control form-control-sm">
        </div>
        <div class="">
          <label class="form-label">Тип поля</label>
          <select v-model="attr.type" class="form-select form-select-sm">
            <option v-for="option in ['text', 'number', 'collection', 'asset', 'image']" v-bind:key="option" :value="option">
              {{ option }}
            </option>
          </select>
        </div>
        <div v-if="attr.type === 'collection'">
          <label class="form-label">Тип контента</label>
          <select  v-model="attr.reference" class="form-select form-select-sm">
            <option v-for="ct in contentTypes" v-bind:key="ct.alias" :value="ct.alias">
              {{ ct.title }}
            </option>
          </select>

          <span v-if="!attr.reference">
            <h6 class="badge bg-danger">ОШИБКА!</h6><br> Тип контента `<span class="text-warning">{{ attr.reference }}</span>` не найден
          </span>
        </div>

        <div class="mb-4"></div>

        <button @click="close" class="btn btn-outline-secondary">
          Отмена
        </button>
        <button @click="save" class="btn btn-outline-primary">
          Сохранить
        </button>
      </div>
    </div>
  </teleport>

</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'


export default {
  name: 'ContentType',
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
    }
  },
  data() {
    return {
      modalOpen: false,
      attr: {}
    }
  },
  methods: {
    close() {
      this.modalOpen = false;
      this.$router.push({name: 'contentTypeEdit', params: {id: this.id}})
      this.attr = {}
    },
    save(){

      this.$store.dispatch('updateAttribute', {attribute: this.attr, contentType: this.contentType})
      this.close()
    }
  },
  watch: {
    attribute() {
      if (!this.attribute) {
        return
      }
      this.modalOpen = true
      this.attr = Object.assign({}, this.contentTypes.find(t => t.alias === this.id).attributes.find(attr => attr.alias === this.attribute))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.modal {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, .5);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

}

.modal .body {
  background-color: white;
  min-width: 400px;
  width: 60%;
  min-height: 450px;
  height: 80%;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 50px rgba(0,0,0,.3);
}
</style>
