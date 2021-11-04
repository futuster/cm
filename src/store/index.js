import {createStore} from 'vuex'
import {ContentTypeProvider} from "@/provider/contentTypeProvider";
import {AttributeType, ContentType} from "@/model/content/contentType";

export default createStore({
    state: {
        contentTypes: []
    },
    mutations: {
        setContentTypes(state, types) {
            const contentTypes = types.map(type => Object.assign(new ContentType(), type)).map(type => {
                type.attributes = type.attributes.map(attr => Object.assign(new AttributeType(), attr))
                return type
            })
            state.contentTypes = contentTypes
        }
    },
    actions: {
        async fetchContentTypes({commit}) {
            console.log('fetch')
            const contentTypeProvider = new ContentTypeProvider()

            const contentTypes = await contentTypeProvider.list()


            commit('setContentTypes', contentTypes.map(contentType => {

                contentType.attributes = contentType.attributes.map(attr => {

                    if (attr.type === 'collection') {

                        attr.reference = contentTypes.find(ct => ct.alias === attr.reference) || attr.reference
                    }

                    return attr
                })

                return contentType
            }))
        }
    }
})
