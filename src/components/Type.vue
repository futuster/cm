<script>
import {ContentTypeProvider} from '@/provider/contentTypeProvider'
//import {AttributeType} from "@/model/content/contentType";
import {seed} from '@/stubs'

seed()
export default {
  name: 'Type',
  data() {
    return {
      contentTypes: []
    }
  },
  // this.contentTypes = await contentTypeProvider.list()
  async created() {

    const contentTypeProvider = new ContentTypeProvider()

    const contentTypes = await contentTypeProvider.list()

    this.contentTypes = contentTypes.map(contentType => {

      contentType.attributes = contentType.attributes.map(attr => {

        if (attr.type === 'collection') {

          attr.reference = contentTypes.find(ct => ct.alias === attr.reference) || attr.reference
        }

        return attr
      })

      return contentType
    })


  }
}
</script>

<template>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item d-flex justify-content-between align-items-start" v-for="contentType in contentTypes"
          v-bind:key="contentType.alias">

        <div class="ms-2 me-auto">
          <div class="fw-bold">{{ contentType.title }}</div>
          <div v-for="attribute in contentType.attributes" v-bind:key="attribute.alias">

            {{ attribute.title }}
            <span class="badge bg-secondary">{{ attribute.type }}</span>

            <template v-if="attribute.type === 'collection'">
              <span class="text-muted" v-if="attribute.reference.alias">
              {{ attribute.reference.alias }}
              </span>
              <span class="badge bg-danger" v-else>
                ОШИБКА ТИП КОНТЕНТА НЕ НАЙДЕН
              </span>
            </template>


          </div>
        </div>
        <span class="badge bg-light text-dark rounded-pill">{{ contentType.alias }}</span>
      </li>
    </ul>


  </div>
</template>

<style>

</style>
