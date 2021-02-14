<template>
  <main>
    <div class="character">
      <the-character></the-character>
    </div>
    <div class="settings"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheCharacter from './components/TheCharacter.vue';
export default defineComponent({
  name: 'App',
  components: { TheCharacter }
});
</script>

<style lang="scss">
@import '~@/assets/styles/styles.scss';
#app {
  @include absolute(0, 0, 0, 0);
  @include size(100%, 100%);
  background-image: url('~@/assets/newhorizons_wallpaper_CharEditor.png');
}
</style>
