<template>
  <div class="clothes">
    <div
      v-for="elem in [
        ...tees,
        ...cropTops,
        ...longSleeves,
        ...sleeveless,
        ...puffySleeves,
        ...cupcakeDresses,
        ...sweaters
      ]"
      :key="elem"
      :class="['clothes__elem']"
    >
      <button
        :class="[
          'clothes__elem-img',
          { 'clothes__elem-img--selected': currentClothes === elem }
        ]"
        :aria-label="`Select ${elem}`"
        type="button"
        @click="changeCurrentClothes(elem)"
      >
        <img
          :src="
            `https://res.cloudinary.com/claudiabdm/image/upload/v1622909938/animal-crossing/${elem}.png`
          "
          width="230"
          height="169"
        />
      </button>
      <svg
        :class="[
          'clothes__elem-selected',
          {
            'clothes__elem-selected--active': currentClothes === elem
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
// import Slider from '../components/SettingsSlider.vue';

export default defineComponent({
  // components: { Slider },
  data() {
    return {
      clothes: [],
      tees: [
        'tee-2',
        'tee-3',
        'tee-4',
        'tee-5',
        'tee-6',
        'tee-7',
        'tee-8',
        'tee-9',
        'tee-10'
      ],
      cropTops: [
        'crop-top-2',
        'crop-top-3',
        'crop-top-4',
        'crop-top-5',
        'crop-top-6',
        'crop-top-7',
        'crop-top-8',
        'crop-top-9',
        'crop-top-10'
      ],
      longSleeves: [
        'long-sleeve-2',
        'long-sleeve-3',
        'long-sleeve-4',
        'long-sleeve-5',
        'long-sleeve-6',
        'long-sleeve-7',
        'long-sleeve-8',
        'long-sleeve-9',
        'long-sleeve-10'
      ],
      sleeveless: [
        'sleeveless-2',
        'sleeveless-3',
        'sleeveless-4',
        'sleeveless-5',
        'sleeveless-6',
        'sleeveless-7',
        'sleeveless-8',
        'sleeveless-9',
        'sleeveless-10'
      ],
      puffySleeves: [
        'puffy-sleeve-2',
        'puffy-sleeve-3',
        'puffy-sleeve-4',
        'puffy-sleeve-5',
        'puffy-sleeve-6',
        'puffy-sleeve-7',
        'puffy-sleeve-8',
        'puffy-sleeve-9',
        'puffy-sleeve-10'
      ],
      cupcakeDresses: [
        'cupcake-dress-2',
        'cupcake-dress-3',
        'cupcake-dress-4',
        'cupcake-dress-5',
        'cupcake-dress-6',
        'cupcake-dress-7'
      ],
      sweaters: [
        'a-color',
        'bomber-jacket',
        'pullover',
        'after-school-jacket',
        'dreamy',
        'retro-carpet',
        'argyle',
        'hoodie-tee',
        'blooming-day',
        'private-school'
      ]
    };
  },
  computed: {
    currentClothes(): string {
      return `${this.$route.query.clothes}`;
    }
  },
  methods: {
    changeCurrentClothes(clothes: string): void {
      if (clothes) {
        this.$router.replace({
          query: { ...this.$route.query, clothes }
        });
      }
    }
  }
});
</script>
<style lang="scss" scoped>
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';
.clothes {
  @include size(100%, 100%);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(10%, 20%));
  gap: rem(10px);
  justify-items: center;
  align-items: center;
  justify-content: center;
  padding: 0 $padding-s;
  @media screen and (min-width: 1024px) {
    overflow-y: auto;
  }
  &__elem {
    position: relative;
  }

  &__elem-img {
    @include flex(center, center);
    position: relative;

    &:hover {
      cursor: pointer;
    }

    &::before {
      @include size(100%, 100%);
      content: '';
      position: absolute;
      border-radius: 30%;
      border: rem(3px) solid transparent;
      background-color: #fff;
      opacity: 0.5;
      z-index: 1;
    }

    img {
      @include size(100%, auto);
      z-index: 2;
    }

    &--selected {
      &::before {
        border: rem(3px) solid var(--secondary-100);
      }
    }
  }

  &__elem-selected {
    @include size(0);
    position: absolute;
    top: 0;
    right: 0;
    z-index: 2;
    opacity: 0;
    transition: opacity 0.25s, width 0.15s ease-in-out, height 0.15s ease-in-out;
    &--active {
      @include size(rem(26px));
      opacity: 1;
    }
  }
  .clothes__elem-img:hover::before {
    border-color: var(--secondary-100);
  }
}
</style>
