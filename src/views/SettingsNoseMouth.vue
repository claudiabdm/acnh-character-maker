<template>
  <div>
    <Slider
      elemType="noses"
      :elemList="noses"
      :currentElem="currentNose"
      currentElemColor="#ff7e36"
      @elemSelected="changeCurrentNose"
    ></Slider>
    <Slider
      elemType="mouths"
      :elemList="mouths1"
      :currentElem="currentMouth"
      currentElemColor="none"
      @elemSelected="changeCurrentMouth"
    ></Slider>
    <Slider
      elemType="mouths"
      :elemList="mouths2"
      :currentElem="currentMouth"
      currentElemColor="none"
      @elemSelected="changeCurrentMouth"
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
      title: 'NoseMouth'
    });
  },
  data() {
    return {
      noses: ['nose-circle', 'nose-oval', 'rectangle', 'triangle'].sort(
        (a, b) => Number(a) - Number(b)
      ),
      mouths1: ['laugh', 'small', 'surprise', 'wide'].sort(
        (a, b) => Number(a) - Number(b)
      ),
      mouths2: ['bunny', 'mouth-cat', 'droll', 'kissy'].sort(
        (a, b) => Number(a) - Number(b)
      )
    };
  },
  computed: {
    currentNose(): string {
      return `${this.$route.query.nose}`;
    },
    currentMouth(): string {
      return `${this.$route.query.mouth}`;
    }
  },
  methods: {
    changeCurrentNose(nose: string): void {
      if (nose) {
        this.$router.replace({
          query: { ...this.$route.query, nose }
        });
      }
    },
    changeCurrentMouth(mouth: string): void {
      if (mouth) {
        this.$router.replace({
          query: { ...this.$route.query, mouth }
        });
      }
    }
  }
});
</script>
