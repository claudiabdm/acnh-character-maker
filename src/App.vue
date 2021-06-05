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
html {
  background-color: var(--primary-100);
}
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.15s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
