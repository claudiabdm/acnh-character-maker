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
        <a class="viewer__credit-link"
          href="https://www.figma.com/community/file/834210307944210537/Animal-Crossing-Character-Maker">
          Ace S Chen
        </a>
      </p>
    </section>
    <button class="viewer__btn" type="button" @click="downloadSVGAsPNG">
      {{ downloadText }}
    </button>
    <google-ad />
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheCharacter from '@/components/TheCharacter.vue';
import GoogleAd from '@/components/GoogleAd.vue';

export default defineComponent({
  components: { TheCharacter, GoogleAd },
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
          this.downloadCanvas(canvas);
          this.downloadText = 'Download Image';
        });
      });
    },
    downloadCanvas(canvas: HTMLCanvasElement) {
      document.body.appendChild(canvas);
      const dataURL = canvas.toDataURL('image/png');
      const a = document.createElement('a');
      const myEvt = new MouseEvent('click');
      a.download = 'ac-avatar.png';
      a.href = dataURL;
      a.dispatchEvent(myEvt);
    }
  }
});
</script>

<style lang="scss" scoped>
@use '@/styles/config.scss' as *;

.viewer {
  @include flex(center, center, column);
  @include size(100%, 100%);
  position: relative;
  padding: 20px;

  &__credit {
    font-size: $text-xs;
    padding: 10px;
  }

  &__credit-link {
    color: inherit;
  }


  &__btn {
    width: 100%;
    max-width: max-content;
    height: 45px;
    padding: 10px 20px;
    margin: 10px;
    border: none;
    border-radius: rem(10px);
    color: var(--base);
    background-color: var(--secondary-100);
    font-size: $text-lg;
    letter-spacing: rem(1.5px);
    transition: $transition-bgc;

    &:hover {
      cursor: pointer;
      background-color: var(--secondary-200);
    }
  }

}
</style>
