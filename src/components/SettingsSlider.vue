<template>
  <div :class="['slider', { 'slider--row': isRow }]">
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
      <ul :class="['slider__elem-list', { 'slider__elem-list--row': isRow }]">
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
            <template>
              <svg
                viewBox="0 0 1 1"
                class="slider__elem-svg"
                :fill="currentElemColor"
                :stroke="currentElemColor"
              >
                <use :href="elemPath(elem)" />
              </svg>
            </template>
          </button>
          <svg
            :class="[
              'slider__elem-selected',
              {
                'slider__elem-selected--active': currentElem === elem
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
      offset: 50,
      isRow: false
    };
  },
  mounted() {
    this.$nextTick();
    this.sliderScrollEl = this.$refs.sliderScroll as Element;
    this.setButtonVisibility(({
      target: this.sliderScrollEl
    } as unknown) as Event);
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
      this.isRow = false;
      if (el.scrollWidth - el.clientWidth <= 1) {
        this.isPrevVisible = false;
        this.isNextVisible = false;
        this.isRow = true;
      } else if (el.scrollLeft < this.offset) {
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
      return require('@/assets/settings-sprite.svg') + '#' + elem;
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

  &--row {
    padding-left: $padding-s;
    padding-right: $padding-s;
  }

  &__scroll {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-x: auto;
    scrollbar-width: none;
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

  &__elem {
    position: relative;
  }

  &__btn-svg {
    color: var(--accent-200);
  }

  &__elem-list {
    display: grid;
    grid-auto-flow: column;
    grid-template-rows: repeat(2, 1fr);
    justify-items: center;
    align-items: center;
    column-gap: 5%;
    &--row {
      @include flex(center, space-evenly, row);
      flex-wrap: nowrap;

      .slider__elem {
        height: auto;
        margin: 5px;
      }
    }
  }

  &__elem {
    @include size(rem(145px / 1.5), rem(160px / 1.5));
    position: relative;
    @media screen and (min-width: 1024px) {
      @include size(rem(145px), rem(160px));
    }
  }

  &__elem-btn {
    @include flex(center, center);
    position: relative;
    padding: 10px;
    align-items: center;
    justify-content: center;
    &::before {
      @include size(100%, 100%);
      content: '';
      position: absolute;
      display: block;
      border-radius: 30%;
      border: rem(3px) solid transparent;
      background-color: #fff;
      opacity: 0.5;
      z-index: 1;
    }

    &--selected {
      &::before {
        border: rem(3px) solid var(--secondary-100);
      }
    }
  }

  &__elem-img {
    @include size(100%, 100%);
    z-index: 2;
    &:hover {
      cursor: pointer;
    }
  }

  &__elem-svg {
    width: 100%;
    transition: $transition-color;
    z-index: 2;
    &:hover {
      cursor: pointer;
    }
  }

  &__elem-selected {
    @include size(0);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    transition: width 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275),
      height 0.15s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    &--active {
      @include size(rem(26px));
      opacity: 1;
    }
  }

  .slider__elem-btn:hover::before {
    border-color: var(--secondary-100);
  }
}
</style>
