<template>
  <ul class="colors">
    <li class="colors__color-wrapper" v-for="color in colors" :key="color">
      <svg
        @click="changeColor(color)"
        :class="[
          'colors__color',
          { 'colors__color--tick': currentColor === color }
        ]"
        viewBox="0 0 85 85"
        xmlns="http://www.w3.org/2000/svg"
        :data-test="`color-${color}`"
      >
        <path
          transform="matrix(.15743 0 0 .15743 0 0)"
          stroke="transparent"
          stroke-width="1.0488"
          :fill="color"
          d="m267.66 57.85a218.13 146.53 0 0 0-218.13 146.53 218.13 146.53 0 0 0 4.9668 31.086 218.13 146.53 0 0 0-28.277 72.152 218.13 146.53 0 0 0 218.13 146.53 218.13 146.53 0 0 0 218.13-146.53 218.13 146.53 0 0 0-4.9668-31.086 218.13 146.53 0 0 0 28.277-72.152 218.13 146.53 0 0 0-218.13-146.53z"
        />
      </svg>
      <svg
        :class="[
          'colors__color-tick',
          {
            'colors__color-tick--active': currentColor === color
          }
        ]"
        viewBox="0 0 65 65"
        :data-test="`color-tick-${color}`"
      >
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
      </svg>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['colorChanged'],
  props: {
    colors: {
      type: Array<string>,
      required: true
    },
    selectedColor: {
      type: String,
      required: true
    }
  },
  computed: {
    currentColor(): string {
      return this.selectedColor;
    }
  },
  methods: {
    changeColor(color: string) {
      this.$emit('colorChanged', color.slice(1));
    }
  }
});
</script>

<style lang="scss" scoped>
@use '@/styles/config.scss' as *;

.colors {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: 1024px) {
    padding: 0 rem(50px);
  }
  &__color-wrapper {
    position: relative;
  }
  &__color {
    width: rem(60px);
    max-width: rem(60px);
    &:hover {
      cursor: pointer;
    }
    &:hover,
    &--selected {
      path {
        stroke: var(--secondary-100);
        stroke-width: 20;
      }
      .colors__color-tick {
        opacity: 1;
      }
    }
    @media screen and (min-width: 1024px) {
      width: rem(100px);
      max-width: rem(100px);
    }
  }
  &__color-tick {
    @include size(0);
    position: absolute;
    transform: translate3d(rem(-26px), 0, 0);
    z-index: 2;
    opacity: 0;
    transition: width 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      height 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &--active {
      @include size(rem(26px));
      opacity: 1;
      @media screen and (min-width: 768px) {
        @include size(rem(30px));
      }
    }
  }
}
</style>
