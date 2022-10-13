export const state = () => ({
  filter: null
})

export const mutations = {
  setFilter(state, filter) {
    state.filter = filter
  },
}
