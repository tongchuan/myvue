import * as Actions from '@/store/actions'
import * as Mutations from '@/store/mutations'

export const state = {
  dataList: [],
  dataItem: null
}
export const getters = {
  getItem: (state) => {
    return state.dataItem
  },
  getList: (state) => {
    return state.dataList
  },
  dataLength: (state) => {
    return state.dataList.length
  }
}
export const mutations = {
  [Mutations.PRODUCTS_LIST_ADD]: (state, payload) => {
    state.dataList.push(payload)
  }
}
export const actions = {
  [Actions.PRODUCTS_LIST_ADD]: (context, payload) => {
    setTimeout(() => {
      context.commit(Mutations.PRODUCTS_LIST_ADD, Object.assign({num: 10}, payload))
    }, 3000)
  }
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
