<template>
  <section class="viewer">
    <div class="viewer__avatar">
      <the-character></the-character>
    </div>
    <button class="btn" type="button" @click="downloadSVGAsPNG">
      {{ downloadText }}
    </button>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheCharacter from '@/components/TheCharacter.vue';

export default defineComponent({
  components: { TheCharacter },
  data() {
    return {
      downloadText: 'Download Image'
    };
  },
  methods: {
    downloadSVGAsPNG() {
      this.downloadText = 'Loading...';
      const svg = document.getElementsByClassName(
        'viewer__avatar'
      )[0] as HTMLElement;
      if (svg == null) return;
      import('html2canvas').then(module => {
        const html2canvas = module.default;
        html2canvas(svg, {
          foreignObjectRendering: false,
          allowTaint: true,
          useCORS: true
        }).then(canvas => {
          document.body.appendChild(canvas);
          const dataURL = canvas.toDataURL('image/png');
          const a = document.createElement('a');
          const myEvt = new MouseEvent('click');
          a.download = 'ac-avatar.png';
          a.href = dataURL;
          a.dispatchEvent(myEvt);
          this.downloadText = 'Download Image';
        });
      });
    }
  }
});
</script>

<style lang="scss" scoped>
@import '@/styles/global/_variables.scss';
@import '@/styles/mixins/_mixins.scss';

.viewer {
  @include flex(center, center, column);
  margin: 10vw;
}
</style>
