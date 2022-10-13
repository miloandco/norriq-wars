<template>
  <b-card bg-variant="dark" text-variant="white" class="text-center card">
    <b-card-header class="header">{{ item.name.toLowerCase() }}</b-card-header>
    <b-card-text>
      <b-list-group>
        <b-list-group-item
          variant="dark"
          class="d-flex justify-content-between align-items-center"
        >
          Gender
          <b-badge variant="primary" pill>{{ item.gender }}</b-badge>
        </b-list-group-item>
        <b-list-group-item
          variant="dark"
          class="d-flex justify-content-between align-items-center"
        >
         Birth year
          <b-badge variant="primary" pill>{{ item.birth_year }}</b-badge>
        </b-list-group-item>
        <b-list-group-item
          variant="dark"
          class="d-flex justify-content-between align-items-center"
        >
          Height
          <b-badge variant="primary" pill>{{ item.height }}</b-badge>
        </b-list-group-item>
        <b-list-group-item
          variant="dark"
          class="d-flex justify-content-between align-items-center"
        >
          Mass
          <b-badge variant="primary" pill>{{ item.mass }}</b-badge>
        </b-list-group-item>
        <b-list-group-item
          variant="dark"
          class="d-flex justify-content-between align-items-center"
        >
          Episodes appeared in
          <div>
            <span
              v-if="!showFilms"
              class="show-movies-btn"
              @click="showFilms = true"
              >Show</span
            >
            <b-badge variant="primary" pill>{{ item.films.length }}</b-badge>
          </div>
        </b-list-group-item>

        <template v-if="showFilms">
          <b-list-group-item v-for="(film, index) in item.films" :key="index" class="d-flex align-items-center">
            <FilmListItem :endpoint="film" />
          </b-list-group-item>
        </template>
      </b-list-group>
    </b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      showFilms: false,
    }
  },
}
</script>

<style lang="scss" scoped>
.card {
  opacity: 0.85;
  transition: opacity 300ms ease-in-out;

  .header {
    font-family: 'StarWars Hollow';
    font-size: 20px;
  }

  &:hover {
    opacity: 0.95;
    .header {
      font-family: 'Starwars';
    }
  }

  .show-movies-btn {
    transition: all 300ms ease-in-out;
    opacity: 0.7;
    cursor: pointer;
    display: inline-block;
    margin-right: 10px;
    font-size: 13px;
    text-decoration: underline;

    &:hover {
      opacity: 1;
    }
  }
}
</style>
