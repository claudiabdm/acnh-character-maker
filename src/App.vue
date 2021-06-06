<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | AC: Character Maker` : 'AC: Character Maker'
    }}</template>
  </metainfo>
  <main class="main">
    <router-view></router-view>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

export default defineComponent({
  name: 'App',
  setup() {
    const description =
      'Create your animal crossing character! Built with Vue 3 by Claudia Benito (@claudiabdm). Character design by Ace S Chen.';
    const title = 'AC: Character Maker';
    const image =
      'https://res.cloudinary.com/claudiabdm/image/upload/v1622931480/animal-crossing/logo-preview.png';
    const site = 'https://animal-crossing-character-maker.netlify.app/';
    const creator = '@claudiabdm';

    useMeta({
      description: {
        content: description
      },
      twitter: {
        title,
        description,
        image,
        site,
        creator
      },
      og: {
        title,
        description,
        image,
        site
      },
      'mobile-web-app-capable': {
        title
      },
      'apple-mobile-web-app-title': {
        title
      },
      htmlAttrs: {
        lang: 'en'
      }
    });
  }
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
