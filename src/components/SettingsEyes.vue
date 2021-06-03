<template>
  <div class="eyes">
    <Slider
      elemType="eyes"
      :elemList="eyes"
      :currentElem="currentEyes"
      :currentElemColor="currentEyesColor"
      @elemSelected="changeCurrentEyes"
    ></Slider>
    <ColorSelector
      :colors="colors"
      :selectedColor="currentEyesColor"
      colorWidth="100%"
      @skinColorChanged="changeCurrentEyesColor"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ColorSelector from './ColorSelector.vue';
import Slider from './SettingsSlider.vue';

export default defineComponent({
  components: { ColorSelector, Slider },
  data() {
    return {
      colors: ['#4e4848', '#8c501d', '#275976', '#3a5c3e', '#bab4b4'],
      eyes: [
        'zzzlashes',
        'oval',
        'ovaltoplash',
        'ovalbottomlash',
        'circle',
        'circletoplash',
        'circlebottomlash',
        'smilinglash',
        'smiling',
        'zzz',
        'lookatme',
        'lookatmetoplash',
        'lookatmebottomlash',
        'sleepy',
        'dreamy',
        'sparkly',
        'kind',
        'sideeye',
        'kindlash',
        'cat'
      ].sort((a, b) => Number(a) - Number(b))
    };
  },
  computed: {
    currentEyes(): string {
      return `${this.$route.query.eyes}`;
    },
    currentEyesColor(): string {
      return `#${this.$route.query.eyesColor}`;
    }
  },
  methods: {
    changeCurrentEyes(eyes: string): void {
      if (eyes) {
        this.$router.replace({
          query: { ...this.$route.query, eyes }
        });
      }
    },
    changeCurrentEyesColor(eyesColor: string): void {
      if (eyesColor) {
        this.$router.replace({
          query: { ...this.$route.query, eyesColor }
        });
      }
    }
  }
});
</script>
