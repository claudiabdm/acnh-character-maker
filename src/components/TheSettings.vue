<template>
  <section class="settings">
    <nav class="settings__buttons" aria-label="Settings options">
      <router-link
        v-for="icon in icons"
        :to="{ path: icon, query: { ...$route.query } }"
        :key="icon"
        :aria-label="icon === 'nose-mouth' ? icon.replace('-', ' / ') : icon"
        class="settings__link"
      >
        <svg viewBow="0 0 1 1" class="settings__btn-svg">
          <use :href="iconPath(icon)" />
        </svg>
      </router-link>
    </nav>
    <div class="settings__options">
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  data() {
    return {
      icons: ['skin', 'hair', 'eyes', 'nose-mouth', 'blush', 'background']
    };
  },
  methods: {
    iconPath(icon: string): string {
      return require('@/assets/icons.svg') + '#' + icon;
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';

.settings {
  @include size(100%, 100%);
  background-color: var(--primary-100);
  overflow: hidden;

  &__buttons {
    @include size(100%, auto);
    @include flex(center, center);
    flex-wrap: wrap;
    padding: $padding-s + 10px;
  }

  &__link {
    @include size(rem(70px), rem(70px));
    @include flex(center, center);
    position: relative;
    border-radius: 50%;
    background-color: var(--tertiary-200);
    color: var(--base);
    font-size: 1rem;
    margin: 0;
    margin-left: -10px;
    padding: 0;
    &::before {
      content: '';
      @include size(0, 0);
      opacity: 0;
      position: absolute;
      border-radius: rem(20px);
      transform: translate3d(0, -100%, 0);
      transition: transform 0.25s;
      z-index: 1;
    }
    &--active {
      transition: all 0.5s;
      .settings__btn-svg {
        color: var(--base);
      }
      &::before {
        @include size(max-content, auto);
        @include flex(center, center);
        content: '   ' attr(aria-label) '   ';
        background-color: var(--tertiary-100);
        color: var(--tertiary-200);
        padding: 5px 0;
        text-transform: capitalize;
        transform: translate3d(0, -120%, 0);
        opacity: 1;
        white-space: pre;
      }
    }
  }

  &__btn-svg {
    width: 50%;
    color: var(--tertiary-100);
    transition: color 0.15s;
  }
}
</style>
