<template>
  <div class="colors">
    <svg
      v-for="color in colors"
      :key="color"
      @click="changeColor(color)"
      :width="colorWidth"
      :height="colorWidth"
      :class="[
        'colors__color',
        { 'colors__color--selected': currentColor === color }
      ]"
      viewBox="0 0 135.47 135.47"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        transform="matrix(.15743 0 0 .15743 24.446 11.864)"
        stroke="transparent"
        stroke-width="1.0488"
        :fill="color"
        d="m267.66 57.85a218.13 146.53 0 0 0-218.13 146.53 218.13 146.53 0 0 0 4.9668 31.086 218.13 146.53 0 0 0-28.277 72.152 218.13 146.53 0 0 0 218.13 146.53 218.13 146.53 0 0 0 218.13-146.53 218.13 146.53 0 0 0-4.9668-31.086 218.13 146.53 0 0 0 28.277-72.152 218.13 146.53 0 0 0-218.13-146.53z"
      />
      <g
        transform="rotate(5, 90 25)"
        :visibility="currentColor === color ? 'visible' : 'hidden'"
      >
        <ellipse fill="#49dbc6" cx="90" cy="25" rx="10" ry="10" />
        <rect
          x="84"
          y="28"
          width="6"
          height="2"
          rx="0"
          ry="0"
          fill="#fff"
          transform="rotate(40, 88 30)"
        />
        <rect
          x="88"
          y="30"
          width="12"
          height="2"
          rx="0"
          ry="0"
          fill="#fff"
          transform="rotate(-50, 88 30)"
        />
      </g>
    </svg>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  emits: ['skinColorChanged'],
  props: {
    colors: {
      type: Array,
      default: () => ['#fff']
    },
    selectedColor: {
      type: String,
      default: '#fff'
    },
    colorWidth: {
      type: String,
      default: '100%'
    },
    flexLayout: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    currentColor(): string {
      return this.selectedColor;
    }
  },
  methods: {
    changeColor(color: string) {
      this.$emit('skinColorChanged', color.slice(1));
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
  grid-template-rows: repeat(2, minmax(rem(100px), 12vh));
  align-items: center;
  @media screen and (min-width: 1024px) {
    padding: 50px;
  }

  &__color {
    &:hover {
      cursor: pointer;
    }
    &:hover,
    &--selected {
      path {
        stroke: var(--secondary-100);
        stroke-width: 20;
      }
    }
  }
}
</style>
