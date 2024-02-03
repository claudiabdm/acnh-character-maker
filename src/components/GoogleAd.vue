<template>
    <!-- horizontal -->
    <ins class="adsbygoogle" style="display:block" data-ad-client="ca-pub-2962766474584063" data-ad-slot="6405689266"
        data-ad-format="horizontal" data-full-width-responsive="true"></ins>
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
    @include size(100%, 80px);
    display: block;
    position: absolute;
    top: 0;
}
</style>