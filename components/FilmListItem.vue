<template>
  <span v-if="!$fetchState.pending" class="film">Episode {{ film.episode_id }} - {{ film.title }}</span>
  <span v-else class="loading">fetching data...</span>
</template>

<script>
export default {
  props: {
    endpoint: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      film: {},
    }
  },
  async fetch() {
    this.film = await this.$axios.$get(this.endpoint)
  },
}
</script>

<style lang="scss" scoped>
.film {
    color: #333;
    font-size: 14px;
}
.loading {
    color: #999;
}
</style>