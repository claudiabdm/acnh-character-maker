<template>
  <TheViewer />
  <TheSettings />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheViewer from '@/components/TheViewer.vue';
import TheSettings from '@/components/TheSettings.vue';
import { useMeta } from 'vue-meta';

export default defineComponent({
  name: 'Home',
  components: { TheViewer, TheSettings },
  setup() {
    useMeta({
      title: 'Home'
    });
  },
  data() {
    return {
      downloadText: 'Download Image'
    };
  },
  mounted() {
    this.$router.push({
      query: {
        skin: this.$route.query.skinColor || 'ffe6cf',
        hair: this.$route.query.hair || 'diva',
        hairColor: this.$route.query.hairColor || '5c3b36',
        eyes: this.$route.query.eyes || 'sparkly',
        eyesColor: this.$route.query.eyesColor || '5c3b36',
        nose: this.$route.query.nose || 'triangle',
        mouth: this.$route.query.mouth || 'laugh',
        blush: this.$route.query.blush || 'solid-pink',
        background: this.$route.query.background || '5a5a5a',
        clothes: this.$route.query.clothes || 'tee-6'
      }
    });
  }
});
</script>

<style lang="scss">
@use '@/styles/config.scss' as *;

canvas {
  display: none;
}
</style>
