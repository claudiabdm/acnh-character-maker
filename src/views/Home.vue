<template>
  <TheViewer />
  <TheSettings />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheViewer from '@/components/TheViewer.vue';
import TheSettings from '@/components/TheSettings.vue';

export default defineComponent({
  name: 'Home',
  components: { TheViewer, TheSettings },
  data() {
    return {
      downloadText: 'Download Image'
    };
  },
  mounted() {
    this.$router.push({
      name: 'skin',
      query: {
        skin: this.$route.query.skin || 'ffe6cf',
        hair: this.$route.query.hair || 'diva',
        hairColor: this.$route.query.hairColor || '5c3b36',
        eyes: this.$route.query.eyes || 'sparkly',
        eyesColor: this.$route.query.eyesColor || '5c3b36'
      }
    });
  }
});
</script>

<style lang="scss">
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';

.btn {
  width: rem(300px);
  margin: 20px;
  padding: 20px;
  border: none;
  border-radius: rem(20px);
  color: var(--base);
  background-color: var(--secondary-100);
  font-family: $font-primary;
  font-size: $text-xl;
  letter-spacing: rem(1.5px);
  transition: $transition-bgc;
  &:hover {
    cursor: pointer;
    background-color: var(--secondary-200);
  }
}

canvas {
  display: none;
}
</style>
