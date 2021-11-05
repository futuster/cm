import {createStore} from 'vuex'
import {ContentTypeProvider} from "@/provider/contentTypeProvider";

export default createStore({
    state: {
        contentTypes: [],
        isFresh: false,
    },
    mutations: {
        updateAttribute(state, {attribute, contentType}) {
            const type = state.contentTypes.find(ct => ct.alias === contentType.alias)
            let attributeWasFinded = false
            type.attributes = type.attributes.map(attr => {
                if (attr.alias === attribute.alias) {
                    attributeWasFinded = true
                    return attribute
                }
                return attr
            })
            if(!attributeWasFinded){
                type.attributes.push(attribute)
            }

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
            this.commit('setIsFresh', true)
        },
        setIsFresh(state, value){
            state.isFresh = !!value
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

            commit('setContentTypes', contentTypes)
        }
    }
})
