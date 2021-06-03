<template>
  <section class="settings">
    <div class="settings__buttons">
      <router-link
        v-for="icon in icons"
        :to="{ path: icon, query: { ...$route.query } }"
        :key="icon"
        type="button"
        class="btn settings__btn"
      >
        <svg class="settings__btn-svg">
          <use :href="iconPath(icon)" />
        </svg>
      </router-link>
    </div>
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
      icons: ['skin', 'hair', 'eyes']
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
    padding: $padding-s;
  }

  &__btn {
    @include size(rem(70px), rem(70px));
    @include flex(center, center);
    border-radius: 50%;
    background-color: var(--tertiary-100);
    color: var(--base);
    font-size: 1rem;
    margin: 0;
    margin-left: -10px;
    padding: 0;
    &:hover {
      background-color: var(--tertiary-100);
    }
  }

  &__btn-svg {
    width: 50%;
  }
}
</style>
