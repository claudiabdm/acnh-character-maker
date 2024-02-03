<template>
  <section class="privacy">
    <h2 class="privacy__title">Privacy</h2>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useMeta } from 'vue-meta';

export default defineComponent({
  name: 'Privacy',
  setup() {
    useMeta({
      title: 'Privacy'
    });
  },
});
</script>

<style lang="scss">
@use '@/styles/config.scss' as *;

.privacy {
  height: 100%;
  width: 100%;
  padding: 20px;
  text-align: center;

  &__title {
    font-size: $text-xl;
  }
}
</style>