/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { shallowMount, VueWrapper } from '@vue/test-utils';
import TheCharacter from '../TheCharacter.vue';

describe('The Character', () => {
  const $route = {
    query: {
      skin: 'f0a06f',
      hair: 'princess',
      hairColor: 'fff',
      eyes: 'eyes-oval',
      eyesColor: 'fff',
      nose: 'nose-oval',
      mouth: 'mouth-cat',
      blush: 'solid-coral',
      backgroundColor: '000',
      clothes: 'tee-2'
    } as { [key: string]: string }
  };

  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(TheCharacter, {
      global: {
        mocks: {
          $route
        }
      }
    });
  });
  it('should match the snapshot', () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it('should have each element from query params visible', () => {
    let isElemVisible = false;
    const visibleElems = {
      hair: 'princess',
      eyes: 'eyes-oval',
      nose: 'nose-oval',
      mouth: 'mouth-cat',
      blush: 'solid-coral'
    } as { [key: string]: string };
    for (const key in visibleElems) {
      isElemVisible = wrapper.find(`#${visibleElems[key]}`)?.isVisible();
      expect(isElemVisible).toBe(true);
    }
  });

  it('should have fill as skin color query pram value', () => {
    const color = `#${$route.query.skin}`;
    const matchColorHead = wrapper.find('#head').attributes().fill === color;
    const matchColorEar = wrapper.find('#ear').attributes().fill === color;
    const matchColorBody = wrapper.find('#body').attributes().fill === color;
    expect(matchColorHead).toBe(true);
    expect(matchColorEar).toBe(true);
    expect(matchColorBody).toBe(true);
  });

  it('should have background color as query pram value', () => {
    const color = `#${$route.query.background}`;
    const matchColorBgc =
      wrapper.find('.character__background').attributes().fill === color;
    expect(matchColorBgc).toBe(true);
  });

  it('should have fill color as query elem color', () => {
    let matchColor = false;
    const colorElems = {
      hairColor: 'fff',
      eyesColor: 'fff'
    } as { [key: string]: string };

    for (const key in colorElems) {
      const elemId = key.replace('Color', '');
      const color = `#${colorElems[key]}`;
      matchColor = wrapper.find(`#${elemId}`).attributes().fill === color;
      expect(matchColor).toBe(true);
    }
  });

  it('should include clothes query param value in src', () => {
    const clothes = $route.query.clothes;
    const matchClothes = wrapper
      .find('.character__clothes')
      .attributes()
      .src.includes(clothes);
    expect(matchClothes).toBe(true);
  });
});
