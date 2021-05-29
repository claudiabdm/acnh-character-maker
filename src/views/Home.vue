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
    if (this.$route.query) {
      this.$router.push({
        name: 'skin',
        query: {
          skin: 'ffe6cf',
          hair: 'diva',
          hairColor: '5c3b36',
          eyes: 'sparkly',
          eyesColor: '5c3b36'
        }
      });
    }
  }
});
</script>

<style lang="scss">
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';

.viewer {
  @include flex(center, center, column);
  margin: 10vw;
}

.settings {
  @include size(100%, 100%);
  padding: $padding-s;
  background-color: var(--primary-100);
  @media screen and (min-width: $break-tablet) {
    padding: $padding 0;
  }
}

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
