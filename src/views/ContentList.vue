<template>
  <div>
    <h2 class="fw-light mb-4">{{ contentType.title }} <sup class="fs-6 fw-lighter text-muted">#{{ contentType.alias }}</sup></h2>
    <div class="list-group">

      <SlickList :useDragHandle="true" axis="y" lockAxis="y" v-model:list="contentList">
        <SlickItem v-for="(content, i) in contentList"
                   v-bind:key="content.id" :index="i">

          <router-link :to="{ name: 'contentEdit', params: {contentId: content.id, contentTypeAlias: content.type } }"
                       class="list-group-item list-group-item-action d-flex gap-2" aria-current="true">

            <span v-handle-directive class="handle mt-1 flex-shrink-0 "></span>
            <div class="d-flex flex-wrap flex-grow-1 justify-content-between">
              <h6 class="mb-0 ">{{ content.title }}{{ content.attributes.find(a => a.type === 'title')?.value }}</h6>
              <small class="text-muted ">#{{ content.type }}</small>

            </div>


          </router-link>
        </SlickItem>
      </SlickList>
    </div>
    <div class="mb-5">
      <button class="btn btn-primary mt-3">Добавить</button>
    </div>

    <form @submit="save">

      <div class="mb-3" v-for="(attribute, index) in contentType.attributes" v-bind:key="attribute.alias">

        <component
            :key="index"
            :is="getType(attribute.type)"
            :value="data.attributes.find(a => a.type === attribute.alias)?.value"
            @input="updateData(attribute.alias, $event)"
            v-bind="attribute"
            :data="data"
        >
        </component>
      </div>

      <div class="mb-3">
        <button class="btn btn-primary">Сохранить</button>
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
import {ContentProvider} from "@/provider/contentProvider";
import {AttributeValue} from "@/model/content/contentType";


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
      data: {
        attributes: [],
        type: this.contentTypeAlias
      },
      contentList: [
        {
          id: 1,
          title: 'pewpew',
          type: 'article',
          attributes: []
        }
      ]
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
  watch: {
    async contentId(value) {
      console.log('watch', value)
      if (value) {

        const contentProvider = new ContentProvider()
        const list = await contentProvider.all(this.contentTypeAlias)
        this.data = list.find(c => c.id === value)
      }
    }
  },
  async mounted() {
    const contentProvider = new ContentProvider()
    this.contentList = await contentProvider.all(this.contentTypeAlias)
  },
  methods: {
    getType(typeKey) {
      return attributeTypes[typeKey] || StringType
    },
    updateData(type, event) {
      let attribute = this.data.attributes.find(a => a.type === type)

      const data = this.data;

      if (!attribute) {
        attribute = new AttributeValue()
        attribute.value = event.target.value
        attribute.type = type
        data.attributes.push(attribute)
      } else {
        data.attributes = this.data.attributes.map(a => a.type === type ? {value: event.target.value, type} : a)

      }

      this.data = data;
    },
    save(e) {
      e.preventDefault()
      const contentProvider = new ContentProvider()
      console.log('save', contentProvider.create(this.data))
      // contentProvider.save(this.contentTypeAlias, this.data)
    }
  }
}
</script>
<style scoped>

</style>
