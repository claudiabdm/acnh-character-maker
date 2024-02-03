<template>
    <!-- horizontal -->
    <ins class="adsbygoogle" data-ad-client="ca-pub-2962766474584063" data-ad-slot="6405689266"
        data-full-width-responsive='false'></ins>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    mounted() {
        // @ts-ignore
        (window.adsbygoogle = window.adsbygoogle || []).push({});
    }
})
</script>
<style lang="scss" scoped>
@use '@/styles/config.scss' as *;

.adsbygoogle {
    @include size(100%, 50px);
    @include flex(center, center);
}
</style>