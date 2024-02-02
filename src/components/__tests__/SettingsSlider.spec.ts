/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, VueWrapper } from '@vue/test-utils';
import SettingsSlider from '../SettingsSlider.vue';
import { vi } from 'vitest';

describe('The Settings Slider', () => {
  const elemList: string[] = [
    'zzzlashes',
    'eyes-oval',
    'ovaltoplash',
    'ovalbottomlash',
    'eyes-circle',
    'circletoplash',
    'circlebottomlash',
    'smilinglash',
    'smiling',
    'zzz',
    'lookatme'
  ];
  const elemType = 'eyes';
  const currentElem = 'eyes-oval';
  const currentElemColor = '#000';

  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(SettingsSlider, {
      props: { elemList, elemType, currentElem, currentElemColor }
    });
  });
  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have an element for each item in element list prop', () => {
    expect(wrapper.findAll('.slider__elem')).toHaveLength(elemList.length);
  });
  it('should have all svg for each item in element list with current color', () => {
    const svgs = wrapper.findAll('.slider__elem-svg');
    expect(svgs).toHaveLength(elemList.length);
    for (const svg of svgs) {
      expect(svg.attributes().fill).toBe(currentElemColor);
    }
  });

  it('should call setInterval when calling onNext and an changeScrollPosition', () => {
    const setIntervalSpy = vi.spyOn(window, 'setInterval');
    setIntervalSpy.mockClear();
    wrapper.vm.onNext();
    expect(setIntervalSpy).toHaveBeenCalledTimes(1);
  });

  it('should not call setInterval when calling onNext', () => {
    wrapper.setData({ interval: 1 });
    const setIntervalSpy = vi.spyOn(window, 'setInterval');
    setIntervalSpy.mockClear();
    wrapper.vm.onNext();
    expect(setIntervalSpy).toHaveBeenCalledTimes(0);
  });

  it('should call setInterval calling onPrev', () => {
    const setIntervalSpy = vi.spyOn(window, 'setInterval');
    setIntervalSpy.mockClear();
    wrapper.vm.onPrev();
    expect(setIntervalSpy).toHaveBeenCalledTimes(1);
  });

  it('should not call setInterval when calling onPrev', () => {
    wrapper.setData({ interval: 1 });
    const setIntervalSpy = vi.spyOn(window, 'setInterval');
    setIntervalSpy.mockClear();
    wrapper.vm.onPrev();
    expect(setIntervalSpy).toHaveBeenCalledTimes(0);
  });

  it('should change scrollLeft position when calling changeScrollPosition', () => {
    const offset = 50;
    const sliderScrollEl = {
      scrollLeft: 0,
      clientWidth: 100,
      scrollWidth: 300,
      scrollBy: function({
        left,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        behavior
      }: {
        left: number;
        behavior: string;
      }): void {
        this.scrollLeft = left;
      }
    };
    wrapper.vm.changeScrollPosition(sliderScrollEl, offset);
    expect(sliderScrollEl.scrollLeft).toEqual(50);
  });

  it('should not change scrollLeft position when calling changeScrollPosition', () => {
    const offset = 50;
    const sliderScrollEl = {
      scrollLeft: 0,
      clientWidth: 300,
      scrollWidth: 300,
      scrollBy: function({
        left,
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        behavior
      }: {
        left: number;
        behavior: string;
      }): void {
        this.scrollLeft = left;
      }
    };
    wrapper.vm.changeScrollPosition(sliderScrollEl, offset);
    expect(sliderScrollEl.scrollLeft).toEqual(0);
  });

  it('should stop interval', () => {
    wrapper.vm.interval = setInterval(() => {}, 20);
    wrapper.vm.stopInterval();
    expect(wrapper.vm.interval).toEqual(0);
  });

  it('should hide prev and next button and set isRow to true', () => {
    const e = {
      target: {
        clientWidth: 100,
        scrollWidth: 100
      }
    };
    wrapper.vm.setButtonVisibility(e);
    expect(wrapper.vm.isPrevVisible).toBe(false);
    expect(wrapper.vm.isNextVisible).toBe(false);
    expect(wrapper.vm.isRow).toBe(true);
  });

  it('should hide prev and show next button and set isRow to false', () => {
    const e = {
      target: {
        scrollLeft: 0,
        clientWidth: 100,
        scrollWidth: 300
      }
    };
    wrapper.vm.setButtonVisibility(e);
    expect(wrapper.vm.isPrevVisible).toBe(false);
    expect(wrapper.vm.isNextVisible).toBe(true);
    expect(wrapper.vm.isRow).toBe(false);
  });

  it('should show prev and hide next button and set isRow to false', () => {
    const e = {
      target: {
        scrollLeft: 250,
        clientWidth: 100,
        scrollWidth: 300
      }
    };
    wrapper.vm.setButtonVisibility(e);
    expect(wrapper.vm.isPrevVisible).toBe(true);
    expect(wrapper.vm.isNextVisible).toBe(false);
    expect(wrapper.vm.isRow).toBe(false);
  });

  it('should show prev and next button and set isRow to false', () => {
    const e = {
      target: {
        scrollLeft: 60,
        clientWidth: 100,
        scrollWidth: 300
      }
    };
    wrapper.vm.setButtonVisibility(e);
    expect(wrapper.vm.isPrevVisible).toBe(true);
    expect(wrapper.vm.isNextVisible).toBe(true);
    expect(wrapper.vm.isRow).toBe(false);
  });

  it('should show prev and next button and set isRow to false', () => {
    const e = {
      target: {
        scrollLeft: 60,
        clientWidth: 100,
        scrollWidth: 300
      }
    };
    wrapper.vm.setButtonVisibility(e);
    expect(wrapper.vm.isPrevVisible).toBe(true);
    expect(wrapper.vm.isNextVisible).toBe(true);
    expect(wrapper.vm.isRow).toBe(false);
  });

  it('should return a path to svg symbol', () => {
    const path = wrapper.vm.elemPath('eyes-oval');
    expect(path).toBe('/settings-sprite.svg#eyes-oval');
  });

  it('should emit elem clicked', async () => {
    await wrapper.find('[data-test="select-elem-eyes-oval"]').trigger('click');
    const elemEmitted: string[][] = wrapper.emitted('elemSelected') ?? [['']];
    expect(elemEmitted[0][0]).toEqual('eyes-oval');
  });
});
