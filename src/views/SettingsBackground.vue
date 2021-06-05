<template>
  <ColorSelector
    :colors="colors"
    :selectedColor="backgroundColor"
    @colorChanged="changeBackgroundColor"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import ColorSelector from '../components/ColorSelector.vue';

export default defineComponent({
  components: { ColorSelector },
  setup() {
    useMeta({
      title: 'Background'
    });
  },
  data() {
    return {
      colors: [
        '#5a5a5a',
        '#ffd686',
        '#5f0932',
        '#fed0de',
        '#c8defe',
        '#d7fbeb',
        '#4a2a63',
        '#ffbe73',
        '#5f9073',
        '#2c2b5c',
        '#8d0c0c',
        '#ffffff'
      ]
    };
  },
  computed: {
    backgroundColor(): string {
      return `#${this.$route.query.background}`;
    }
  },
  methods: {
    changeBackgroundColor(background: string): void {
      this.$router.replace({
        query: { ...this.$route.query, background }
      });
    }
  }
});
</script>
