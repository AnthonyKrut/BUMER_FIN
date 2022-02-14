import axios from 'axios'

export default {
    state: () => ({
        seasons: [],
    }),

    getters: {
        transformSeasonItemForView(state, getters, rootState, rootGetters) {
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
        setSeasons(state, data) {
            state.seasons = data
        },
    },

    actions: {
        async fetchSeasons({commit, getters}) {
            const {data} = await axios.get('/Season/GetAll')

            const transformedData = data.map(item => getters.transformSeasonItemForView(item))
            commit('setSeasons', transformedData)
        },

        async fetchSeason({getters}, id) {
            const {data} = await axios.get('/Season/GetById', {params: {id}})
            return getters.transformSeasonItemForView(data)
        },
    },
    namespaced: true,
}
