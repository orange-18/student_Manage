import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        levelTwo: '',
        levelThree: ''
    },
    mutations: {
        SET_LEVELTWO(state,res){
            state.levelTwo = res
            console.log(res,'000001')
        },
        SET_LEVELTHREE(state,res){
            state.levelThree = res
        }
    },
    actions: {
        setLevelTwo({commit},res){
            commit('SET_LEVELTWO',res)
        },
        setLevelThree({commit},res){
            commit('SET_LEVELTHREE',res)
        },
    }
})

export default store