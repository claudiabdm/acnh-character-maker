<template>
  <ColorSelector
    :colors="colors"
    :selectedColor="skinColor"
    @colorChanged="changeSkinColor"
  />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColorSelector from './ColorSelector.vue';

export default defineComponent({
  components: { ColorSelector },
  data() {
    return {
      colors: [
        '#ffe6cf',
        '#ffdcbc',
        '#ffd0b2',
        '#ffc892',
        '#fbb985',
        '#f0a06f',
        '#d0784e',
        '#84401a'
      ]
    };
  },
  computed: {
    skinColor(): string {
      return `#${this.$route.query.skin}`;
    }
  },
  methods: {
    changeSkinColor(skin: string): void {
      this.$router.replace({
        query: { ...this.$route.query, skin }
      });
    }
  }
});
</script>
