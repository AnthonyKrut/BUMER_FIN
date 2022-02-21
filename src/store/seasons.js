import axios from 'axios'

export default {
    state: () => ({
        seasons: [
            {
                key: 'winter',
                name_ru: 'Зима',
                name_ua: 'Зима',
            },
            {
                key: 'spring',
                name_ru: 'Весна',
                name_ua: 'Весна',
            },
            {
                key: 'summer',
                name_ru: 'Лето',
                name_ua: 'Літо',
            },
            {
                key: 'autumn',
                name_ru: 'Осень',
                name_ua: 'Осінь',
            },
        ],
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
