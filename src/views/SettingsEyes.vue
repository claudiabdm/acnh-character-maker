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
      @colorChanged="changeCurrentEyesColor"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import ColorSelector from '../components/ColorSelector.vue';
import Slider from '../components/SettingsSlider.vue';

export default defineComponent({
  components: { ColorSelector, Slider },
  setup() {
    useMeta({
      title: 'Eyes'
    });
  },
  data() {
    return {
      colors: [
        '#4e4848',
        '#5c3b36',
        '#8c501d',
        '#275976',
        '#3a5c3e',
        '#bab4b4'
      ],
      eyes: [
        'zzzlashes',
        'eyes-oval',
        'ovaltoplash',
        'ovalbottomlash',
        'eyes-circle',
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
        'eyes-cat'
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
