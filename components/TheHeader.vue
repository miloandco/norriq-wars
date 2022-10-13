<template>
  <div class="header">
    <b-container>
      <div class="header-content">
        <h1 class="text-center">norriq wars</h1>
        <CharacterFilters />
        
      </div>
    </b-container>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.header {
  background: linear-gradient(87deg, #2dce89, #2dcecc) !important;
  opacity: 0.97;

  .header-content {
    display: flex;
    height: 250px;
    justify-content: space-between;
    flex-direction: column;
  }
}
</style>