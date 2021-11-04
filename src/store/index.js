import {createStore} from 'vuex'
import {ContentTypeProvider} from "@/provider/contentTypeProvider";

export default createStore({
    state: {
        contentTypes: []
    },
    mutations: {
        updateAttribute(state, {attribute, contentType}) {
            const type = state.contentTypes.find(ct => ct.alias === contentType.alias)
            type.attributes = type.attributes.map(attr => {
                if (attr.alias === attribute.alias) {
                    return attribute
                }
                return attr
            })
            const types = state.contentTypes.map(ct => {
                if (ct.alias === contentType.alias) {
                    return type
                }
                return ct
            })
            console.log('set', types)
            const contentTypeProvider = new ContentTypeProvider()

            contentTypeProvider.save(JSON.parse(JSON.stringify(types)))
            state.contentTypes = types
        },
        async setContentTypes(state, types) {
            state.contentTypes = types
        }
    },
    actions: {
        updateAttribute({commit}, payload) {
            commit('updateAttribute', payload)
        },
        async fetchContentTypes({commit}) {
            console.log('fetch')
            const contentTypeProvider = new ContentTypeProvider()

            const contentTypes = await contentTypeProvider.list()


            commit('setContentTypes', contentTypes.map(contentType => {

                contentType.attributes = contentType.attributes.map(attr => {

                    if (attr.type === 'collection') {

                        attr.reference = contentTypes.find(ct => ct.alias === attr.reference.alias) || attr.reference
                    }

                    return attr
                })

                return contentType
            }))
        }
    }
})
