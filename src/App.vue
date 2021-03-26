<template>
  <main class="main">
    <div class="viewer">
      <div class="viewer__wrapper">
        <the-character></the-character>
      </div>
      <button type="button" @click="downloadSVGAsPNG">Download image</button>
    </div>
    <div class="settings"></div>
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TheCharacter from './components/TheCharacter.vue';
import html2canvas from 'html2canvas';
export default defineComponent({
	name: 'App',
	components: { TheCharacter },
	methods: {
		downloadSVGAsPNG() {
			const svg = document.getElementsByClassName("viewer__wrapper")[0] as HTMLElement;
			if (svg == null) return;
			html2canvas(svg, { foreignObjectRendering: false }).then(canvas => {
				document.body.appendChild(canvas)
				const dataURL = canvas.toDataURL('image/png');
				const a = document.createElement('a');
				const my_evt = new MouseEvent('click');
				a.download = 'jiji.png';
				a.href = dataURL;
				a.dispatchEvent(my_evt);
			})
		}
	}
});
</script>

<style lang="scss">
@import "~@/assets/styles/styles.scss";
#app {
	@include absolute(0, 0, 0, 0);
	@include size(100%, 100%);
	background-image: url("~@/assets/newhorizons_wallpaper_CharEditor.png");
}
.main {
	@include flex(center, space-between, column);
	@include size(100%, 100%);
	@media screen and (min-width: 1024px) {
		flex-direction: row;
	}
}
.viewer {
	@include flex(center, center, column);
	// @include size(rem(300px), rem(300px));
	margin: 10vw;
	&__wrapper {
		border: 20px solid #fff;
		border-radius: 20px;
	}
}

.settings {
	@include size(100%, 100%);
	background-color: #eceed6;
}

canvas {
	display: none;
}
</style>
