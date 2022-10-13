<template>
  <div class="filters">
    <div class="filter-item" @click="toggleFilter('male')">
      <div class="lightsaber">
        <label for="male-characters"></label>
        <input
          id="male-characters"
          :checked="filter === 'male'"
          type="checkbox"
        />
        <div class="switch"></div>
        <div class="plasma yoda"></div>
      </div>
      <div class="filter-label">Male characters</div>
    </div>
    <div class="filter-item" @click="toggleFilter('female')">
      <div class="lightsaber">
        <label for="female-characters"></label>
        <input
          id="female-characters"
          :checked="filter === 'female'"
          type="checkbox"
        />
        <div class="switch"></div>
        <div class="plasma yoda"></div>
      </div>
      <div class="filter-label">Female characters</div>
    </div>
    <div class="filter-item" @click="toggleFilter('age')">
      <div class="lightsaber">
        <label for="bby-20-40"></label>
        <input id="bby-20-40" :checked="filter === 'age'" type="checkbox" />
        <div class="switch"></div>
        <div class="plasma yoda"></div>
      </div>
      <div class="filter-label">20-40 BBY</div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      filter: null,
    }
  },
  watch: {
    filter: {
      deep: true,
      handler(filter) {
        this.setFilter(filter)
      },
    },
  },
  methods: {
    ...mapMutations({
      setFilter: 'setFilter',
    }),
    toggleFilter(filter) {
      if (this.filter === filter) {
        this.filter = null
      } else {
        this.filter = filter
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.filters {
  display: flex;
  background-color: #000;
  border-radius: 5px 5px 0 0;
  justify-content: center;
}

.filter-item {
  width: auto;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
  //border: 1px solid rgba(255, 255, 255, 0.3);
  padding: 7px;
  border-radius: 3px;
  margin: 0 10px;
  cursor: pointer;
}
.filter-label {
  color: #fff;
  font-family: 'Starwars';
  margin-left: 10px;
  font-size: 13px;
}

.lightsaber {
  position: relative;

  label {
    pointer-events: none;
    z-index: 88;
    text-indent: -9999px;
    width: 15px;
    height: 50px;
    border-bottom: solid 4px grey;
    border-top: solid 5px grey;
    border-radius: 5px;
    background: rgb(226, 226, 226);
    background: linear-gradient(
      to right,
      rgba(226, 226, 226, 1) 0%,
      rgba(219, 219, 219, 1) 50%,
      rgba(209, 209, 209, 1) 51%,
      rgba(254, 254, 254, 1) 100%
    );
  }

  .switch {
    background: #b94a37;
    width: 5px;
    height: 10px;
    display: block;
    position: absolute;
    bottom: 25px;
    left: 13px;
    transition: left 200ms;
    border-radius: 10px;
  }

  input[type='checkbox'] {
    position: absolute;
    bottom: 0;
    left: 0;
    opacity: 0;
    z-index: 77;
  }

  .plasma {
    transition: height 300ms;
    border-radius: 12px 12px 0 0;
    position: absolute;
    bottom: 55px;
    left: 2px;
    width: 10px;
    display: block;
    filter: blur(1px);
    height: 0;
  }

  input[type='checkbox']:checked ~ div.plasma {
    height: 150px;
  }

  input[type='checkbox']:hover ~ div.switch {
    background: #c09853;
    left: 12px;
  }

  input[type='checkbox']:checked ~ div.switch {
    background: #468847;
  }
}

.yoda {
  background: linear-gradient(
    to right,
    rgb(135, 220, 90) 0%,
    rgb(254, 254, 254) 30%,
    rgb(254, 254, 254) 50%,
    rgb(254, 254, 254) 70%,
    rgb(135, 220, 90) 100%
  );
  animation-name: yoda;
  animation-duration: 2s;
  animation-iteration-count: infinite;
}
</style>
