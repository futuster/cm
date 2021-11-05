<template>
  <div>
    <h3 class="fw-light mb-4"> {{ contentType.title }} <sup class="fs-6 fw-lighter text-muted">#{{ contentType.alias }}</sup></h3>
    <div class="list-group">

      <SlickList :useDragHandle="true" axis="y" lockAxis="y" v-model:list="contentType.attributes">
        <SlickItem v-for="(attribute, i) in contentType.attributes"
                   v-bind:key="attribute.alias" :index="i" class="list-item-wrapper">

          <router-link :to="{ name: 'attributeEdit', params: {id: id, attributeId: attribute.alias } }"
                       class="list-group-item list-group-item-action d-flex gap-2" aria-current="true">

            <span v-handle-directive class="handle mt-1 flex-shrink-0 "></span>
            <div class="d-flex flex-wrap flex-grow-1 justify-content-between">
              <h6 class="mb-0 ">{{ attribute.title }}</h6>
              <small class="text-muted ">#{{ attribute.alias }}</small>
              <div class="w-100">
                <small class="fw-light">{{ attribute.help }}</small>
                <div class="mb-1 d-block">
                  <template class="col-md-4" v-if="attribute.type === 'reference'">
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
              </div>
            </div>



          </router-link>
        </SlickItem>
      </SlickList>
    </div>
    <div class="mb-5">
    <button class="btn btn-primary mt-3" @click="modalOpen = true">Добавить</button>
    </div>
  </div>

  <teleport to="body">
    <div v-if="modalOpen" class="modal">

      <div class="body">
        <form @submit="save">
          <div class="mb-3">
            <label class="form-label">Название</label>
            <input type="text" v-model="attr.title" class="form-control form-control-sm">
          </div>
          <div class="mb-3">
            <label class="form-label">Идентификатор</label>
            <input :disabled="attributeId" type="text" v-model="attr.alias" class="form-control form-control-sm">
          </div>
          <div class="mb-3">
            <label class="form-label">Описание</label>
            <textarea type="text" v-model="attr.help" class="form-control form-control-sm"></textarea>
          </div>
          <div class="mb-3">
            <label class="form-label">Тип поля</label>
            <select v-model="attr.type" class="form-select form-select-sm">
              <option v-for="option in ['string', 'text', 'number', 'reference', 'asset', 'image']" v-bind:key="option" :value="option">
                {{ option }}
              </option>
            </select>
          </div>
          <div v-if="attr.type === 'reference'">
            <label class="form-label">Тип контента</label>
            <select v-model="attr.reference" class="form-select form-select-sm">
              <option v-for="ct in contentTypes" v-bind:key="ct.alias" :value="ct.alias">
                {{ ct.title }}
              </option>
            </select>

            <span v-if="!attr.reference">
            <h6 class="badge bg-danger">ОШИБКА!</h6><br> Тип контента `<span class="text-warning">{{ attr.reference }}</span>` не найден
          </span>
          </div>

          <div class="mb-4"></div>

          <button type="reset" @click="close" class="btn btn-outline-secondary ">
            Отмена
          </button>
          <button type="submit" class="btn btn-outline-primary mx-3">
            Сохранить
          </button>
        </form>
      </div>
    </div>
  </teleport>

</template>

<script>
import {useStore} from 'vuex'
import {computed} from 'vue'
import {HandleDirective, SlickItem, SlickList} from 'vue-slicksort';

export default {
  name: 'ContentType',
  components: {
    SlickList,
    SlickItem,
  },
  directives: {
    HandleDirective
  },
  props: {
    id: String,
    attributeId: String
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
      attr: {},
    }
  },

  methods: {
    close() {
      this.modalOpen = false;
      this.$router.push({name: 'contentTypeEdit', params: {id: this.id}})
      this.attr = {}
    },

    save(e) {
      e.preventDefault()

      this.$store.dispatch('updateAttribute', {attribute: this.attr, contentType: this.contentType})

      this.close()
    }
  },
  watch: {
    attributeId() {
      if (!this.attributeId) {
        return
      }
      this.modalOpen = true
      this.attr = Object.assign({}, this.contentTypes.find(t => t.alias === this.id).attributes.find(attr => attr.alias === this.attributeId))
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
  padding-bottom: 70px;
}

.modal .body {
  background-color: white;
  min-width: 400px;
  width: 60%;
  min-height: 450px;
  height: 80%;
  padding: 1rem 2rem;
  border-radius: 5px;
  box-shadow: 0 10px 50px rgba(0, 0, 0, .3);
}

.handle {
  display: block;
  width: 18px;
  height: 18px;
  background-image: url('data:image/svg+xml;charset=utf-8,<svg xmlns= "http://www.w3.org/2000/svg" width= "50" height= "50" viewBox= "0 0 50 50" ><path d= "M0 7.5v5h50v-5H0zm0 15v5h50v-5H0zm0 15v5h50v-5H0z" color= "%23000" /></svg>');
  background-size: contain;
  background-repeat: no-repeat;
  opacity: .25;
  margin-right: 20px;
  cursor: grab;
}

.badge {
  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: middle;
  box-sizing: border-box;
  min-width: 0;
  display: inline-block;
  line-height: 16px;
  font-size: 12px;
  font-weight: 400;
  padding: 2px 8px;
  border-radius: 4px;
  background-color: rgb(240, 242, 247) !important;
  color: rgb(98, 110, 153) !important;
  overflow: hidden;
  max-width: 290px;
  margin-top: 4px;
  margin-right: 4px;
}

.list-group-item-action {

  border-radius: 5px;
  border-color: rgb(240, 242, 247);
  box-shadow: 0 2px 6px rgba(0,0,0,.1);
  padding: .8rem 1rem;
}

.list-item-wrapper {
  padding-bottom: 5px;
}
</style>
