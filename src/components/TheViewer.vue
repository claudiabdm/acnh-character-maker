<template>
  <section class="viewer">
    <section class="viewer__credit">
      <p>
        Developed with ♥️ by
        <a class="viewer__credit-link" href="https://github.com/claudiabdm">
          Claudia Benito
        </a>
      </p>
    </section>
    <div class="viewer__avatar">
      <the-character></the-character>
    </div>
    <section class="viewer__credit">
      <p>
        Character design by
        <a
          class="viewer__credit-link"
          href="https://www.figma.com/community/file/834210307944210537/Animal-Crossing-Character-Maker"
        >
          Ace S Chen
        </a>
      </p>
    </section>
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
      window.scrollTo({
        top: 0
      });
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
          useCORS: true,
          scale: svg.clientWidth < 300 ? 3 : 1
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
  margin: rem(20px);
  @media screen and (min-width: 1024px) {
    margin: 10vw;
  }
  &__credit {
    color: var(--accent-200);
    font-size: rem(12px);
    margin: rem(10px);
  }
  &__credit-link {
    color: var(--accent-200);
  }
}
</style>
