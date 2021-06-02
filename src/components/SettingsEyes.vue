<template>
  <div class="eyes">
    <Slider>
      <li class="eyes__eyes" v-for="eyesName in eyes" :key="eyesName">
        <svg class="eyes__selected" viewBox="0 0 65 65">
          <g :visibility="currentEyes === eyesName ? 'visible' : 'hidden'">
            <ellipse fill="#49dbc6" cx="32" cy="32" rx="30" ry="30" />
            <rect
              x="36"
              y="35"
              width="20"
              height="6"
              rx="0"
              ry="0"
              fill="#fff"
              transform="rotate(40, 26 10)"
            />
            <rect
              x="0"
              y="34"
              width="32"
              height="6"
              rx="0"
              ry="0"
              fill="#fff"
              transform="rotate(-50, 26 10)"
            />
          </g>
        </svg>
        <button
          type="button"
          :class="[
            'eyes__btn',
            { 'eyes__btn--selected': currentEyes === eyesName }
          ]"
          @click="changeCurrentEyes(eyesName)"
        >
          <svg
            class="eyes__svg"
            :fill="currentEyesColor"
            :stroke="currentEyesColor"
          >
            <use :href="eyesPath(eyesName)" />
          </svg>
        </button>
      </li>
    </Slider>
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
import Slider from './Slider.vue';

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
    },
    eyesPath(eyes: string): string {
      return require('@/assets/eyes.svg') + '#' + eyes;
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';
.eyes {
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  // justify-items: center;
  // @include size(100%, auto);
  &__eyes {
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  &__btn {
    @include flex();
    flex-direction: column;
    position: relative;
    &:hover {
      cursor: pointer;
    }
    &:hover,
    &--selected {
      &::after {
        content: '';
        position: absolute;
        width: 105%;
        background-color: transparent;
        height: 35%;
        border: rem(3px) solid var(--secondary-100);
        border-radius: 10px;
      }
    }
  }

  &__svg {
    position: relative;
    width: rem(100px);
    &:hover {
      cursor: pointer;
    }
  }
  &__selected {
    @include size(rem(26px));
    position: absolute;
    top: 20%;
    right: rem(-10px);
    z-index: 1;
  }
}
</style>
