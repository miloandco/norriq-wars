<template>
  <div>
    <FullScreenBgImage />
    <TheHeader />
    <b-container>
        <div class="content-wrapper">
        <Nuxt />
        </div>
    </b-container>
  </div>
</template>

<style lang="scss" scoped>
.content-wrapper {
    padding-top: 5vh;
}
</style>