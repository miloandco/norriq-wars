<template>
  <div class="bg"></div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.bg {
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background-image: url('~/assets/images/wallpaper.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position:center center;
}
</style>