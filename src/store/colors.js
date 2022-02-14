import axios from 'axios'

export default {
    state: () => ({
        colors: [],
    }),

    getters: {
        transformColorItemForView(state, getters, rootState, rootGetters) {
            const getLanguageCodeById = rootGetters['locales/getLanguageCodeById']

            return (item) => {
                item.description.forEach(i => {
                    item[`name_${getLanguageCodeById(i.languageId)}`] = i.name
                    return i

                })
                return item
            }
        },
    },

    mutations: {
        setColors(state, data) {
            state.colors = data
        },
    },

    actions: {
        async fetchColors({commit, getters}) {
            const {data} = await axios.get('/Color/GetAll')

            const transformedData = data.map(item => getters.transformColorItemForView(item))
            commit('setColors', transformedData)
        },

        async fetchColor({getters}, id) {
            const {data} = await axios.get('/Color/GetById', {params: {id}})
            return getters.transformColorItemForView(data)
        },
    },
    namespaced: true,
}
