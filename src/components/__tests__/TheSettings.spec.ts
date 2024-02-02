/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { flushPromises, shallowMount, VueWrapper } from "@vue/test-utils";
import TheSettings from "../TheSettings.vue";
import { createRouter, createWebHistory } from "vue-router";

describe("The Settings", () => {
  const $route = {
    query: {
      skin: "f0a06f",
      hair: "princess",
      hairColor: "fff",
      eyes: "eyes-oval",
      eyesColor: "fff",
      nose: "nose-oval",
      mouth: "mouth-cat",
      blush: "solid-coral",
      backgroundColor: "000",
      clothes: "tee-2",
    } as { [key: string]: string },
  };

  let wrapper: VueWrapper<any>;

  beforeEach(() => {
    wrapper = shallowMount(TheSettings, {
      global: {
        mocks: {
          $route,
        },
        stubs: ["router-link", "router-view"],
      },
    });
  });
  it("should match the snapshot", () => {
    expect(wrapper.element).toMatchSnapshot();
  });

  it("should change selected tab if it was not selected when route changed", async () => {
    const router = createRouter({
      history: createWebHistory(),
      routes: [
        {
          path: "/",
          component: TheSettings,
          children: [
            {
              path: "/skin",
              name: "skin",
              component: {
                template: "skin",
              },
            },
            {
              path: "/eyes",
              name: "eyes",
              component: {
                template: "eyes",
              },
            },
          ],
        },
      ],
    });
    const wrapperRouter = shallowMount(TheSettings, {
      global: { plugins: [router] },
    });
    router.push("/skin");
    await router.isReady();
    expect(wrapperRouter.vm.selectedTab).toBe("skin");

    router.push("/eyes");
    await router.isReady();
    await flushPromises();
    expect(wrapperRouter.vm.selectedTab).toBe("eyes");
  });

  it("should return path to svg icon", () => {
    const path = wrapper.vm.iconPath("skin");
    expect(path).toBe("/icons.svg#skin");
  });

  it("should change selected tab", () => {
    wrapper.vm.onSelectTab("eyes");
    expect(wrapper.vm.selectedTab).toBe("eyes");
  });
});
