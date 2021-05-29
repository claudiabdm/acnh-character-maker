<template>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App'
});
</script>

<style lang="scss">
@import '@/styles/styles.scss';
#app {
  @include size(100%, 100%);
  background-image: url('~@/assets/newhorizons_wallpaper_CharEditor.png');
  font-family: $font-primary;
  overflow: hidden;
}
.main {
  @include flex(center, space-between, column);
  @include size(100%, 100%);
  @media screen and (min-width: 1024px) {
    @include size(100%, 100vh);
    flex-direction: row;
  }
}
</style>
