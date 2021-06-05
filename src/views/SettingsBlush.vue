<template>
  <div>
    <Slider
      elemType="blushes"
      :elemList="blushes"
      :currentElem="currentBlush"
      currentElemColor="none"
      @elemSelected="changeCurrentBlush"
      class="blushes-mouth__blushes"
    ></Slider>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';
import Slider from '../components/SettingsSlider.vue';

export default defineComponent({
  components: { Slider },
  setup() {
    useMeta({
      title: 'Blush'
    });
  },
  data() {
    return {
      blushes: ['soft-coral', 'soft-pink', 'solid-coral', 'solid-pink'].sort(
        (a, b) => Number(a) - Number(b)
      )
    };
  },
  computed: {
    currentBlush(): string {
      return `${this.$route.query.blush}`;
    }
  },
  methods: {
    changeCurrentBlush(blush: string): void {
      if (blush) {
        this.$router.replace({
          query: { ...this.$route.query, blush }
        });
      }
    }
  }
});
</script>
