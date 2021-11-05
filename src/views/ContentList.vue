<template>
  <div>
    <h2 class="fw-light mb-4"> {{ contentType.title }} <sup class="fs-6 fw-lighter text-muted">#{{ contentType.alias }}</sup></h2>
    <div class="list-group">

      <SlickList :useDragHandle="true" axis="y" lockAxis="y" v-model:list="contentType.attributes">
        <SlickItem v-for="(attribute, i) in []"
                   v-bind:key="attribute.alias" :index="i">

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
      <button class="btn btn-primary mt-3">Добавить</button>
    </div>

    <form>

      <div class="mb-3" v-for="(attribute, index) in contentType.attributes" v-bind:key="attribute.alias">

        <component
            :key="index"
            :is="getType(attribute.type)"
            :value="data[attribute.alias]"
            @input="updateData(attribute.alias, $event)"
            v-bind="attribute"
            :data="data"
        >
        </component>
      </div>

    </form>


  </div>


</template>
<script>

import {useStore} from "vuex";
import {computed} from "vue";
import {HandleDirective, SlickItem, SlickList} from 'vue-slicksort';
import StringType from "@/components/dynamicRenderer/StringType";
import TextType from "@/components/dynamicRenderer/TextType";
import NumberType from "@/components/dynamicRenderer/NumberType";



const attributeTypes = {
  string: StringType,
  text: TextType,
  number: NumberType
};

export default {
  name: 'ContentList',
  components: {
    SlickList,
    SlickItem,
  },
  directives: {
    HandleDirective
  },
  props: {
    contentTypeAlias: String,
    contentId: String
  },
  data() {
    return {
      data: {},
    }
  },
  setup(props) {
    const store = useStore()
    store.dispatch('fetchContentTypes')
    return {
      contentTypes: computed(() => store.state.contentTypes || []),
      contentType: computed(() => store.state.contentTypes.find(t => t.alias === props.contentTypeAlias) || {
        title: '',
        alias: props.id,
        attributes: []
      }),
    }
  },
  methods: {
    getType(typeKey) {
      return attributeTypes[typeKey] || StringType
    },
    updateData(e) {
      console.log('updateData', e)
    },
  }
}
</script>
<style scoped>

</style>
