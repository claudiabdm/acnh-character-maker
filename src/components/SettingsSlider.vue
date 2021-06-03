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
      <ul class="slider__elem-list">
        <li
          class="slider__elem"
          v-for="elem in elemList"
          :key="elem"
          @click="changeCurrentElem(elem)"
        >
          <button
            type="button"
            :class="[
              'slider__elem-btn',
              { 'slider__elem-btn--selected': currentElem === elem }
            ]"
          >
            <svg
              class="slider__elem-svg"
              :fill="currentElemColor"
              :stroke="currentElemColor"
            >
              <use :href="elemPath(elem)" />
            </svg>
          </button>
          <svg class="slider__elem-selected" viewBox="0 0 65 65">
            <g :visibility="currentElem === elem ? 'visible' : 'hidden'">
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
        </li>
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
  props: {
    elemList: {
      type: Array,
      default: () => [''] as string[]
    },
    elemType: {
      type: String as () => 'hairs' | 'eyes',
      default: ''
    },
    currentElem: {
      type: String,
      default: ''
    },
    currentElemColor: {
      type: String,
      default: ''
    }
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
    },
    elemPath(elem: string): string {
      return require(`@/assets/${this.elemType}.svg`) + '#' + elem;
    },
    changeCurrentElem(elem: string) {
      this.$emit('elemSelected', elem);
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';
.slider {
  position: relative;
  padding: 10px 50px;

  &__scroll {
    display: flex;
    flex-direction: column;
    overflow-x: auto;
    scrollbar-width: none;
  }

  &__elem-list {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 10%;
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

  &__elem {
    position: relative;
  }

  &__elem-btn {
    @include flex(center, center);
    position: relative;
    padding: 5px;
    align-items: center;
    justify-content: center;

    &::before {
      @include size(100%, 90%);
      content: '';
      position: absolute;
      display: block;
      border-radius: 30%;
      border: rem(3px) solid transparent;
      padding: 20px;
      background-color: #fff;
      opacity: 0.5;
      z-index: 1;
      pointer-events: all;
    }

    &--selected {
      &::before {
        border: rem(3px) solid var(--secondary-100);
      }
    }
  }

  &__elem-svg {
    width: 12vh;
    transition: color 0.25s ease, fill 0.25s ease, stroke 0.25s ease;
    &:hover {
      cursor: pointer;
    }
    z-index: 2;
  }
  &__elem-selected {
    @include size(rem(26px));
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
  }

  .slider__elem-btn:hover::before {
    border-color: var(--secondary-100);
  }
}
</style>