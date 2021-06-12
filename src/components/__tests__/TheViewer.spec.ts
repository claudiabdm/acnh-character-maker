/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, VueWrapper } from '@vue/test-utils';
import TheViewer from '../TheViewer.vue';

describe('The Viewer', () => {
  let wrapper: VueWrapper<any>;
  window.scrollTo = function(): void {};
  beforeEach(() => {
    wrapper = shallowMount(TheViewer, {
      global: {
        mocks: {
          window
        },
        stubs: ['the-character']
      }
    });
  });
  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should change download text when downloadSVGasPNG is called', () => {
    wrapper.vm.downloadSVGAsPNG();
    expect(wrapper.vm.downloadText).toBe('Loading...');
  });

  it('should create an anchor tag with src value equals to canvas dataurl', () => {
    const canvas = document.createElement('canvas');
    wrapper.vm.downloadCanvas(canvas);
    expect(wrapper.find('canvas')).toBeTruthy();
  });
});
