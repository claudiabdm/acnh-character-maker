<template>
  <div class="hairs">
    <Slider>
      <li
        class="hairs__hair"
        v-for="hair in hairs"
        :key="hair"
        @click="changeCurrentHair(hair)"
      >
        <button type="button" class="hairs__btn">
          <svg
            class="hairs__svg"
            :fill="currentHairColor"
            :stroke="currentHair === hair ? '#49dbc6' : 'transparent'"
            stroke-width="5"
          >
            <use :href="hairPath(hair)" />
          </svg>
        </button>
        <svg class="hairs__selected" viewBox="0 0 65 65">
          <g :visibility="currentHair === hair ? 'visible' : 'hidden'">
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
    </Slider>
    <ColorSelector
      :colors="colors"
      :selectedColor="currentHairColor"
      :flexLayout="true"
      colorWidth="100%"
      @skinColorChanged="changeCurrentHairColor"
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
      colors: [
        '#403c33',
        '#5c3b36',
        '#834042',
        '#c55139',
        '#f3cd53',
        '#d1c888',
        '#948f90',
        '#cfc9bc'
      ],
      hairs: [
        'smooth',
        'uptop',
        'bob',
        'straightup',
        'diva',
        'princess',
        'eggshell',
        'leafy',
        'kindergarten',
        'chipper',
        'shaggy',
        'twinbraids',
        'chill',
        'fairy',
        'nomessbun',
        'somemessbun',
        'undercut',
        'brock',
        'dino'
      ].sort((a, b) => Number(a) - Number(b))
    };
  },
  computed: {
    currentHair(): string {
      return `${this.$route.query.hair}`;
    },
    currentHairColor(): string {
      return `#${this.$route.query.hairColor}`;
    }
  },
  methods: {
    changeCurrentHair(hair: string): void {
      if (hair) {
        this.$router.replace({
          query: { ...this.$route.query, hair }
        });
      }
    },
    changeCurrentHairColor(hairColor: string): void {
      if (hairColor) {
        this.$router.replace({
          query: { ...this.$route.query, hairColor }
        });
      }
    },
    hairPath(hair: string): string {
      return require('@/assets/hairs.svg') + '#' + hair;
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';
.hairs {
  // display: grid;
  // grid-template-columns: repeat(4, 1fr);
  // grid-template-rows: repeat(2, 1fr);
  // justify-items: center;
  // @include size(100%, auto);
  &__hair {
    position: relative;
    &:hover {
      cursor: pointer;
    }
  }

  &__svg {
    width: rem(100px);
    &:hover {
      cursor: pointer;
      stroke: var(--secondary-100);
    }
  }
  &__selected {
    @include size(rem(26px));
    position: absolute;
    top: 20%;
    right: 0;
  }
}
</style>
