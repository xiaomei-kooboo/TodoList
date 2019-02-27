// import request from '@/service'
import { State } from './interface'
import { Commit } from 'vuex'

interface GetTodayWeatherParam {
    city: string
}

const state: State = {
    count: 0,
    test: []
}
const getters = {
    count: (state: State) => state.count,
    // message: (state: State) => state.message
}
const mutations = {
  INCREMENT (state: State, num: number) {
    state.count += num
  }
}
const actions = {
  //   async getTodayWeather (context: { commit: Commit }, params: GetTodayWeatherParam) {
  //       return request.get('/api/weatherApi', { params: params })
  // }
}

export default {
  state,
  getters,
  mutations,
  actions
}
