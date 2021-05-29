<template>
  <div class="slider">
    <button
      v-show="isPrevVisible"
      class="slider__btn slider__btn--prev"
      type="button"
      @mousedown="onPrev()"
      @mouseleave="stopInterval"
      @mouseup="stopInterval"
      @touchstart="onPrev()"
      @touchend="stopInterval"
      @touchcancel="stopInterval"
    >
      <svg
        class="slider__btn-svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M15 19l-7-7 7-7"
        ></path>
      </svg>
    </button>
    <div class="slider__scroll" ref="sliderScroll">
      <ul class="slider__slides">
        <slot></slot>
      </ul>
    </div>
    <button
      v-show="isNextVisible"
      class="slider__btn slider__btn--next"
      type="button"
      @mousedown="onNext()"
      @mouseleave="stopInterval"
      @mouseup="stopInterval"
      @touchstart="onNext()"
      @touchend="stopInterval"
      @touchcancel="stopInterval"
    >
      <svg
        class="slider__btn-svg"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="1"
          d="M9 5l7 7-7 7"
        ></path>
      </svg>
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      sliderScrollEl: this.$refs.sliderScroll as Element,
      interval: 0,
      position: 0,
      isPrevVisible: false,
      isNextVisible: true,
      offset: 100
    };
  },
  mounted() {
    this.$nextTick();
    this.sliderScrollEl = this.$refs.sliderScroll as Element;
    this.sliderScrollEl.addEventListener('scroll', this.setButtonVisibility);
  },
  methods: {
    onNext(): void {
      if (!this.interval) {
        this.interval = setInterval(() => {
          const scrollPosition =
            this.sliderScrollEl.scrollLeft + this.sliderScrollEl.clientWidth;
          if (scrollPosition < this.sliderScrollEl.scrollWidth) {
            this.sliderScrollEl.scrollBy({
              left: this.offset,
              behavior: 'smooth'
            });
          }
        });
      }
    },
    onPrev() {
      if (!this.interval) {
        this.interval = setInterval(() => {
          const scrollPosition =
            this.sliderScrollEl.scrollLeft + this.sliderScrollEl.clientWidth;
          if (scrollPosition > 0) {
            this.sliderScrollEl.scrollBy({
              left: -this.offset,
              behavior: 'smooth'
            });
          }
        });
      }
    },
    stopInterval(): void {
      clearInterval(this.interval);
      this.interval = 0;
    },
    setButtonVisibility(e: Event): void {
      const el = e.target as Element;
      if (el.scrollLeft < this.offset) {
        this.isPrevVisible = false;
        this.isNextVisible = true;
      } else if (
        el.scrollWidth <
        el.scrollLeft + el.clientWidth + this.offset
      ) {
        this.isPrevVisible = true;
        this.isNextVisible = false;
      } else {
        this.isPrevVisible = true;
        this.isNextVisible = true;
      }
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';
.slider {
  position: relative;
  padding: 0 50px;

  &__scroll {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    scrollbar-width: none;
  }

  &__slides {
    width: rem(2000px);
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    column-gap: rem(100px);
  }

  &__slide {
    &--hidden {
      display: none;
    }
  }

  &__btn {
    @include size(rem(50px), rem(50px));
    position: absolute;
    top: calc(50% - 25px);
    &:hover {
      cursor: pointer;
    }
    &--next {
      right: 0;
    }
    &--prev {
      left: 0;
    }
  }

  &__btn-svg {
    color: var(--accent-200);
  }
}
</style>
