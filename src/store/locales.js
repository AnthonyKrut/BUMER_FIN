import axios from 'axios'

export default {
    state: () => ({
        languageList: JSON.parse(localStorage.getItem('languageList')),
    }),
    mutations: {
        setLanguageList(state, list) {
            localStorage.setItem('languageList', JSON.stringify(list))
            state.languageList = list
        },
    },
    getters: {
        getLanguageIdByCode: state => {
            if (!state.languageList) return null
            return code => {
                return state.languageList.find(item => item.name === code)?.id
            }
        },

        getLanguageCodeById: state => {
            if (!state.languageList) return null
            return id => {
                return state.languageList.find(item => item.id === id)?.name
            }
        },

        getFieldByLocale: (state, getters) => {
            return (arr, field, code) => {
                const langId = getters.getLanguageIdByCode(code)
                return arr.find(i => i.languageId === langId)?.[field] ?? ''
            }
        },
    },
    actions: {
        async getLanguageList({commit}) {
            try {
                const {data} = await axios.get('/Language/GetAll')
                await commit('setLanguageList', data)
            } catch (e) {
                console.log(e)
            }
        },
    },
    namespaced: true,
}
