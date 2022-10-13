<template>
  <b-card-group columns class="cards">
    <CharacterCard v-for="(item, index) in items" :key="index" :item="item" />
  </b-card-group>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      required: true,
    },
  },
}
</script>


