import * as Actions from '@/store/actions'
import * as Mutations from '@/store/mutations'
import userDB from '@/store/data/userDb'

export const state = () => ({
  user: null,
  count: 0
})
export const getters = {
  getUserData: (state) => {
    return state.user || {name: '张彤川', age: 18}
  }
}
export const mutations = {
  [Mutations.USER_LOGIN]: (state, payload) => {
    state.user = Object.assign({}, state.user, payload, {age: Math.random()})
  },
  increment: (state, payload) => {
    return state.count + payload.num
  }
}
export const actions = {
  [Actions.USER_LOGIN]: ({commit}) => {
    userDB.getUser({data: 1111}).then((data) => {
      // console.log(data)
      commit(Mutations.USER_LOGIN, data)
    }).catch((error) => {
      console.log(error)
    })
    // setTimeout(() => {
    //   commit(Mutations.USER_LOGIN, {abc: Math.random()})
    // }, 1000)
  },
  increment: (context) => {
    setTimeout(() => {
      context.commit('increment', {num: 10})
    }, 300)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
