<template>
  <div class="hairs">
    <Slider
      :elemList="hairs"
      :currentElem="currentHair"
      :currentElemColor="currentHairColor"
      @elemSelected="changeCurrentHair"
      elemType="hairs"
    />
    <ColorSelector
      class="hairs__colors"
      :colors="colors"
      :selectedColor="currentHairColor"
      @colorChanged="changeCurrentHairColor"
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
      title: 'Hair'
    });
  },
  data() {
    return {
      colors: [
        '#403c33',
        '#5c3b36',
        '#834042',
        '#c55139',
        '#f3cd53',
        '#d1c888',
        '#948f90',
        '#cfc9bc'
      ],
      hairs: [
        'smooth',
        'uptop',
        'bob',
        'straightup',
        'diva',
        'princess',
        'eggshell',
        'leafy',
        'kindergarten',
        'chipper',
        'shaggy',
        'twinbraids',
        'chill',
        'fairy',
        'nomessbun',
        'somemessbun',
        'undercut',
        'brock',
        'dino'
      ].sort((a, b) => Number(a) - Number(b))
    };
  },
  computed: {
    currentHair(): string {
      return `${this.$route.query.hair}`;
    },
    currentHairColor(): string {
      return `#${this.$route.query.hairColor}`;
    }
  },
  methods: {
    changeCurrentHair(hair: string): void {
      if (hair) {
        this.$router.replace({
          query: { ...this.$route.query, hair }
        });
      }
    },
    changeCurrentHairColor(hairColor: string): void {
      if (hairColor) {
        this.$router.replace({
          query: { ...this.$route.query, hairColor }
        });
      }
    }
  }
});
</script>
