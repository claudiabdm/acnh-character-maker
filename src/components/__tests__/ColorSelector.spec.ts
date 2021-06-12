/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, VueWrapper } from '@vue/test-utils';
import ColorSelector from '../ColorSelector.vue';

describe('The Color Selector', () => {
  const colors: string[] = ['#fff', '#000'];
  const selectedColor = '#fff';
  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(ColorSelector, {
      props: { colors, selectedColor }
    });
  });
  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have a color for each color every color in props', () => {
    expect(wrapper.findAll('.colors__color')).toHaveLength(2);
  });

  it('should change currentColor when selectedColor prop changes', async () => {
    await wrapper.setProps({
      selectedColor: '#000'
    });
    expect(wrapper.vm.currentColor).toEqual('#000');
  });

  it('should emit color when clicking color', async () => {
    await wrapper.find('[data-test="color-#000"]').trigger('click');
    const colorEmitted: string[][] = wrapper.emitted('colorChanged') ?? [['']];
    expect(colorEmitted[0][0]).toEqual('000');
  });

  it('should have tick is color selected', async () => {
    await wrapper.setProps({
      selectedColor: '#000'
    });
    const selected = wrapper
      .find('[data-test="color-tick-#000"]')
      .classes('colors__color-tick--active');
    const notSelected = wrapper
      .find('[data-test="color-tick-#fff"]')
      .classes('colors__color-tick--active');
    expect(selected).toBe(true);
    expect(notSelected).toBe(false);
  });
});
