<template>
  <div>
    <CharacterCards :items="filteredItems" />
    <div v-if="data" class="bottom-wrapper">
      <div
        v-if="!allItemsLoaded"
        class="loading"
      >
        <b-btn variant="success" :disabled="$fetchState.pending" @click="$fetch">more characters, we must find...</b-btn>
      </div>
      <div v-if="allItemsLoaded" class="complete">
        mmmmh, nothing more, i sense
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: null,
    }
  },
  async fetch() {
    if (this.data && this.data.next) {
      const data = await this.$axios.$get(this.data.next)

      this.data.next = data.next
      this.data.results = [...this.data.results, ...data.results]
    } else {
      this.data  = await this.$axios.$get(`https://swapi.dev/api/people`)
    }
  },
  computed: {
    filter() {
      return this.$store.state.filter
    },
    filteredItems() {
      if (!this.data) return []

      if (this.filter) {
        if (this.filter === 'age') {
          return this.data.results.filter(
            (o) => parseInt(o.birth_year) >= 20 && parseInt(o.birth_year) <= 40
          )
        }
        return this.data.results.filter((o) => o.gender === this.filter)
      }
      return this.data.results
    },
    allItemsLoaded() {
      if (this.data && this.data.results.length === this.data.count) {
        return true
      }
      return false
    },
  },
}
</script>

<style lang="scss" scoped>
.bottom-wrapper {
  min-height: 50px;
  padding: 20px 0;

  .loading,
  .complete {
    font-family: 'Starwars';
    text-align: center;
    color: #fff;
    font-size: 20px;

    &.complete {
      color: greenyellow;
    }
  }
}
</style>
