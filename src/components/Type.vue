<template>
  <div class="container">

    <div class="row">
      <div class="col-12 mb-4">
        <h2 class="fw-light">Моделирование</h2>
      </div>

      <div v-if="contentTypes.length === 0 && isFresh">

        <figure class="text-center my-5 py-5">
          <blockquote class="blockquote">
            <p>Свято место пусто не бывает.</p>
          </blockquote>
          <figcaption class="blockquote-footer">
            <cite>Устойчивое сочетание</cite>
          </figcaption>
        </figure>

      </div>
      <button class="btn btn-lg btn-outline-primary" v-if="contentTypes.length === 0 && isFresh" @click="seed()">Загрузить демо</button>

      <div class="col-2 d-sm-none d-md-block">
        <div class="list-group list-group-flush">
          <router-link active-class="active" class="list-group-item list-group-item-action" v-for="contentType in contentTypes"
                       v-bind:key="contentType.alias"
                       :to="{ name: 'contentTypeEdit', params: { id: contentType.alias }}">
            {{ contentType.title }}
          </router-link>
          <hr v-if="contentTypes.length > 0 && isFresh" />
          <button class=" btn btn-outline-danger" @click="removeAll" v-if="contentTypes.length > 0 && isFresh">Удалить всё</button>
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
import {seed} from '@/stubs'
import {ContentTypeProvider} from "@/provider/contentTypeProvider";

export default {
  name: 'Type',
  setup() {
    const store = useStore()
    store.dispatch('fetchContentTypes')

    return {
      contentTypes: computed(() => store.state.contentTypes || []),
      isFresh: computed(() => store.state.isFresh),
    }
  },
  methods: {
    seed,
    async removeAll() {
      if (confirm('Are you sure?')) {
        const contentTypeProvider = new ContentTypeProvider()
        await contentTypeProvider.save([])
        document.location.reload()
      }

    }
  }
}
</script>

<style scoped>
.list-group-flush {
  border-color: transparent;
}

.list-group-item-action {
  border-color: transparent;
  border-radius: 5px;
}

.active {
  color: rgb(102, 99, 253);
  background-color: rgb(242, 241, 255);
  border-color: transparent;
}
</style>
