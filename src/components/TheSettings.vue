<template>
  <section class="settings">
    <nav class="settings__buttons" aria-label="Settings options">
      <button :class="[
        'settings__link-wrapper',
        { 'settings__link-wrapper--active': selectedTab === icon }
      ]" v-for="icon in icons" :key="icon" :aria-label="icon === 'nose-mouth' ? icon.replace('-', ' / ') : icon"
        @click="onSelectTab(icon)">
        <router-link class="settings__link" :to="{ path: icon, query: { ...$route.query } }"
          :aria-label="`Go to ${icon} tab`">
          <svg viewBow="0 0 1 1" class="settings__link-icon">
            <use :href="iconPath(icon)" />
          </svg>
        </router-link>
      </button>
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
import icons from '/icons.svg?url';

export default defineComponent({
  data() {
    return {
      icons: [
        'skin',
        'hair',
        'eyes',
        'nose-mouth',
        'blush',
        'background',
        'clothes'
      ],
      selectedTab: this.$route.name || 'skin'
    };
  },
  watch: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    $route(to, _from) {
      if (this.selectedTab !== to.name) {
        this.onSelectTab(to.name);
      }
    }
  },
  methods: {
    iconPath(icon: string): string {
      return icons + '#' + icon;
    },
    onSelectTab(icon: string): void {
      this.selectedTab = icon;
    }
  }
});
</script>

<style lang="scss" scoped>
@use '@/styles/config.scss' as *;

.settings {
  @include size(100%, 100%);
  min-height: 100vh;
  background-color: var(--primary-100);
  overflow: hidden;

  &__options {
    @media screen and (min-width: 1024px) {
      height: calc(100% - 135px);
      overflow-y: auto;
    }
  }

  &__buttons {
    @include size(100%, max-content);
    @include flex(center, center);
    flex-wrap: nowrap;
    padding: rem($padding-s + 10px);
  }

  &__link-wrapper {
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
      transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      z-index: 1;
    }

    &--active {
      .settings__link-icon {
        color: var(--base);
      }

      &::before {
        @include size(max-content, auto);
        @include flex(center, center);
        content: '   ' attr(aria-label) '   ';
        background-color: var(--tertiary-100);
        color: var(--tertiary-200);
        padding: rem(5px) 0;
        text-transform: capitalize;
        font-size: $text-xs;
        transform: translate3d(0, -130%, 0);
        opacity: 1;
        white-space: pre;

        @media screen and (min-width: 768px) {
          font-size: 1rem;
        }
      }
    }
  }

  &__link {
    @include flex(center, center);
    @include size(rem(60px), rem(60px));

    @media screen and (min-width: 768px) {
      @include size(rem(70px), rem(70px));
    }
  }

  &__link-icon {
    @include size(50%, 50%);
    color: var(--tertiary-100);
    pointer-events: all;
    transition: color 0.15s;
  }
}
</style>
