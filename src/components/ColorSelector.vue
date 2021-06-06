<template>
  <div class="colors">
    <div class="colors__color-wrapper" v-for="color in colors" :key="color">
      <svg
        @click="changeColor(color)"
        :class="[
          'colors__color',
          { 'colors__color--selected': currentColor === color }
        ]"
        viewBox="0 0 85 85"
        xmlns="http://www.w3.org/2000/svg"
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
          'colors__color-selected',
          {
            'colors__color-selected--active': currentColor === color
          }
        ]"
        viewBox="0 0 65 65"
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['colorChanged'],
  props: {
    colors: {
      type: Array,
      default: () => ['#fff']
    },
    selectedColor: {
      type: String,
      default: '#fff'
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
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';

.colors {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: auto;
  align-items: center;
  justify-items: center;
  @media screen and (min-width: 1024px) {
    padding: 0 50px;
  }
  &__color-wrapper {
    position: relative;
  }
  &__color {
    width: rem(85px);
    max-width: rem(85px);
    &:hover {
      cursor: pointer;
    }
    &:hover,
    &--selected {
      path {
        stroke: var(--secondary-100);
        stroke-width: 20;
      }
      .colors__color-selected {
        opacity: 1;
      }
    }
  }
  &__color-selected {
    @include size(0);
    position: absolute;
    transform: translate3d(-26px, 0, 0);
    z-index: 2;
    opacity: 0;
    transition: width 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      height 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &--active {
      @include size(rem(26px));
      opacity: 1;
    }
  }
}
</style>
