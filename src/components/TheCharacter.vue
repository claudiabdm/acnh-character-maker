<!-- prettier-ignore-start -->
<template>
  <div class="character">
    <svg
      class="character__svg"
      viewBox="0 0 300 300"
      fill="none"
      width="300"
      height="300"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        class="character__background"
        width="300"
        height="300"
        :fill="backgroundColor"
        ry="10"
      ></rect>
      <g id="character">
        <g id="ears">
          <ellipse
            id="ear"
            cx="65.583"
            cy="140"
            rx="22"
            ry="19"
            :fill="skinColor"
          />
          <ellipse
            id="ear_2"
            cx="234.583"
            cy="140"
            rx="22"
            ry="19"
            :fill="skinColor"
          />
        </g>
        <path
          id="head"
          fill-rule="evenodd"
          clip-rule="evenodd"
          transform="scale(-0.99, 0.99) translate(-302, 0)"
          d="M149.583 38.9999C118.583 38.9999 67.083 50.1999 67.083 121C67.1918 121 67.2995 121 67.406 121C65.5608 132.056 64.9925 143.025 66.2772 152.5C69.4772 176.1 99.9439 194 114.777 200C119.611 202 133.477 206 150.277 206C167.077 206 180.944 202 185.777 200C200.611 194 231.077 176.1 234.277 152.5C235.573 142.946 234.975 131.882 233.083 120.742C232.958 50.1727 181.545 38.9999 150.583 38.9999H149.583Z"
          :fill="skinColor"
        />
        <g id="blush">
          <g v-if="blush === 'solid-pink'" id="solid-pink" opacity="0.7">
            <ellipse
              id="left"
              cx="91.0798"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FFBAA5"
            />
            <ellipse
              id="right"
              cx="211.08"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FFBAA5"
            />
          </g>
          <g
            v-if="blush === 'soft-pink'"
            id="soft-pink"
            opacity="0.7"
            filter="url(#filter0_f)"
          >
            <ellipse
              id="left_2"
              cx="91.0798"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FFBAA5"
            />
            <ellipse
              id="right_2"
              cx="211.08"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FFBAA5"
            />
          </g>
          <g v-if="blush === 'solid-coral'" id="solid-coral" opacity="0.7">
            <ellipse
              id="left_3"
              cx="91.0798"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FF7E36"
            />
            <ellipse
              id="right_3"
              cx="211.08"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FF7E36"
            />
          </g>
          <g
            v-if="blush === 'soft-coral'"
            id="soft-coral"
            opacity="0.7"
            filter="url(#filter1_f)"
          >
            <ellipse
              id="left_4"
              cx="91.0798"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FF7E36"
            />
            <ellipse
              id="right_4"
              cx="211.08"
              cy="156.5"
              rx="12.5"
              ry="10.5"
              fill="#FF7E36"
            />
          </g>
        </g>
        <g id="eyes" :fill="eyesColor" :stroke="eyesColor">
          <g v-if="eyes === 'eyes-cat'" id="eyes-cat">
            <path
              id="vector 5"
              d="M202.429 110.249C208.621 111.867 210.941 114.249 211.429 116.249C211.917 118.249 212.179 121.249 210.429 128.249C208.929 134.249 206.929 142.249 196.929 145.249C186.929 148.249 180.743 146.249 177.243 144.691C173.34 142.954 171.344 140.989 170.832 135.794C170.32 130.599 173.019 119.409 180.743 113.788C188.466 108.166 194.674 108.222 202.429 110.249Z"
              fill="white"
              stroke-width="2"
            />
            <path
              id="vector 6"
              d="M99.7866 110.249C93.5947 111.867 91.2747 114.249 90.7866 116.249C90.2985 118.249 90.0366 121.249 91.7866 128.249C93.2866 134.249 95.2866 142.249 105.287 145.249C115.287 148.249 121.473 146.249 124.973 144.691C128.876 142.954 130.872 140.989 131.384 135.794C131.896 130.599 129.197 119.409 121.473 113.788C113.75 108.166 107.542 108.222 99.7866 110.249Z"
              fill="white"
              stroke-width="2"
            />
            <path
              id="intersect"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M204.839 110.981C204.11 110.724 203.309 110.478 202.429 110.249C201.945 110.122 201.467 110.003 200.995 109.893C200.319 109.798 199.629 109.749 198.929 109.749C190.093 109.749 182.929 117.584 182.929 127.249C182.929 136.73 189.823 144.45 198.428 144.74C207.136 141.421 209.007 133.936 210.429 128.249C212.147 121.378 211.926 118.361 211.456 116.36C209.731 113.989 207.454 112.119 204.839 110.981Z"
            />
            <path
              id="intersect_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M115.376 110.359C108.579 112.378 103.58 119.175 103.58 127.249C103.58 136.914 110.743 144.749 119.58 144.749C123.664 144.749 127.392 143.074 130.219 140.319C130.816 139.141 131.198 137.681 131.384 135.794C131.896 130.599 129.197 119.409 121.473 113.788C119.347 112.241 117.336 111.123 115.376 110.359Z"
            />
          </g>
          <g v-if="eyes === 'kindlash'" id="kindlash">
            <path
              id="ellipse 13"
              d="M174.752 122.397L174.752 122.397L174.754 122.388C177.805 112.952 188.149 107.8 197.894 110.951C207.639 114.101 213.011 124.332 209.961 133.768L209.952 133.794L209.946 133.82C209.208 136.609 207.429 139.786 204.104 142.109C200.787 144.425 195.843 145.955 188.661 145.3C185.339 144.998 181.173 144.169 177.687 143.107C175.944 142.576 174.401 141.995 173.232 141.408C172.647 141.114 172.178 140.83 171.83 140.563C171.472 140.288 171.303 140.077 171.238 139.95C171.168 139.813 171.088 139.527 171.055 139.036C171.023 138.562 171.039 137.973 171.103 137.282C171.229 135.903 171.532 134.213 171.935 132.414C172.739 128.823 173.915 124.905 174.752 122.397Z"
              fill="white"
              stroke-width="2"
            />
            <path
              id="ellipse 14"
              d="M128.605 122.397L128.605 122.397L128.602 122.388C125.552 112.952 115.208 107.8 105.463 110.951C95.7174 114.101 90.3458 124.332 93.396 133.768L93.4043 133.794L93.4112 133.82C94.1492 136.609 95.9278 139.786 99.2533 142.109C102.57 144.425 107.514 145.955 114.696 145.3C118.018 144.998 122.184 144.169 125.67 143.107C127.413 142.576 128.956 141.995 130.125 141.408C130.709 141.114 131.179 140.83 131.526 140.563C131.885 140.288 132.054 140.077 132.119 139.95C132.189 139.813 132.269 139.527 132.302 139.036C132.334 138.562 132.317 137.973 132.254 137.282C132.128 135.903 131.825 134.213 131.422 132.414C130.618 128.823 129.442 124.905 128.605 122.397Z"
              fill="white"
              stroke-width="2"
            />
            <path
              id="intersect_3"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M196.092 109.44C188.376 111.143 182.58 118.385 182.58 127.061C182.58 136.911 190.053 144.914 199.323 145.059C208.892 141.524 211.684 134.44 211.72 129.248C212.305 119.664 205.491 111.294 196.092 109.44Z"
            />
            <path
              id="intersect_4"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M117.273 109.955C122.928 111.762 127.621 116.101 129.554 122.08C131.242 127.139 134.297 137.888 133.009 140.406C132.15 142.086 127.347 143.871 122.229 145.057C113.002 144.859 105.58 136.878 105.58 127.061C105.58 119.082 110.483 112.315 117.273 109.955Z"
            />
            <line
              id="line 1"
              x1="91.9909"
              y1="111.906"
              x2="96.5064"
              y2="115.857"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="line 2"
              x1="87.8046"
              y1="119.293"
              x2="93.6001"
              y2="120.846"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="line 3"
              x1="1"
              y1="-1"
              x2="7"
              y2="-1"
              transform="matrix(-0.752577 0.658505 0.658505 0.752577 212.6 112)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="line 4"
              x1="1"
              y1="-1"
              x2="7"
              y2="-1"
              transform="matrix(-0.965926 0.258819 0.258819 0.965926 216.6 120)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'sideeye'" id="sideeye">
            <path
              id="eye"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M117.58 141C124.76 141 130.58 135.18 130.58 128C130.58 126.99 130.465 126.008 130.247 125.064C126.911 122.066 120.42 118 112.377 118C111.222 118 110.093 118.084 108.996 118.236C106.289 120.619 104.58 124.11 104.58 128C104.58 135.18 110.4 141 117.58 141Z"
            />
            <path
              id="crease"
              d="M91.5798 126C94.3528 123 102.394 117 112.377 117C122.36 117 130.005 123 132.58 126"
              stroke-width="4"
              fill="none"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              id="eye_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M196.58 141C203.76 141 209.58 135.18 209.58 128C209.58 126.99 209.465 126.008 209.247 125.064C205.911 122.066 199.42 118 191.377 118C190.222 118 189.093 118.084 187.996 118.236C185.289 120.619 183.58 124.11 183.58 128C183.58 135.18 189.4 141 196.58 141Z"
            />
            <path
              id="crease_2"
              d="M170.58 126C173.353 123 181.394 117 191.377 117C201.36 117 209.005 123 211.58 126"
              stroke-width="4"
              fill="none"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              id="vector 3"
              d="M91.0798 126C90.0798 125.833 87.9798 124.8 87.5798 122"
              stroke-width="4"
              fill="none"
              stroke="black"
              stroke-linecap="round"
            />
            <path
              id="vector 4"
              d="M211.58 126C212.58 125.833 214.68 124.8 215.08 122"
              stroke-width="4"
              fill="none"
              stroke="black"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'kind'" id="kind">
            <path
              id="ellipse 13_2"
              d="M174.752 122.397L174.752 122.397L174.754 122.388C177.805 112.952 188.149 107.8 197.894 110.951C207.639 114.101 213.011 124.332 209.961 133.768L209.952 133.794L209.946 133.82C209.208 136.609 207.429 139.786 204.104 142.109C200.787 144.425 195.843 145.955 188.661 145.3C185.339 144.998 181.173 144.169 177.687 143.107C175.944 142.576 174.401 141.995 173.232 141.408C172.647 141.114 172.178 140.83 171.83 140.563C171.472 140.288 171.303 140.077 171.238 139.95C171.168 139.813 171.088 139.527 171.055 139.036C171.023 138.562 171.039 137.973 171.103 137.282C171.229 135.903 171.532 134.213 171.935 132.414C172.739 128.823 173.915 124.905 174.752 122.397Z"
              fill="white"
              stroke-width="2"
            />
            <path
              id="ellipse 14_2"
              d="M128.605 122.397L128.605 122.397L128.602 122.388C125.552 112.952 115.208 107.8 105.463 110.951C95.7174 114.101 90.3458 124.332 93.396 133.768L93.4043 133.794L93.4112 133.82C94.1492 136.609 95.9278 139.786 99.2533 142.109C102.57 144.425 107.514 145.955 114.696 145.3C118.018 144.998 122.184 144.169 125.67 143.107C127.413 142.576 128.956 141.995 130.125 141.408C130.709 141.114 131.179 140.83 131.526 140.563C131.885 140.288 132.054 140.077 132.119 139.95C132.189 139.813 132.269 139.527 132.302 139.036C132.334 138.562 132.317 137.973 132.254 137.282C132.128 135.903 131.825 134.213 131.422 132.414C130.618 128.823 129.442 124.905 128.605 122.397Z"
              fill="white"
              stroke-width="2"
            />
            <path
              id="intersect_5"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M196.092 109.44C188.376 111.144 182.58 118.386 182.58 127.061C182.58 136.911 190.053 144.914 199.323 145.059C208.892 141.525 211.684 134.44 211.72 129.248C212.305 119.664 205.491 111.295 196.092 109.44Z"
            />
            <path
              id="intersect_6"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M117.273 109.955C122.928 111.762 127.621 116.101 129.554 122.08C131.242 127.139 134.297 137.888 133.009 140.406C132.15 142.086 127.347 143.871 122.229 145.057C113.002 144.859 105.58 136.878 105.58 127.061C105.58 119.082 110.483 112.315 117.273 109.955Z"
            />
          </g>
          <g v-if="eyes === 'sparkly'" id="sparkly">
            <ellipse
              id="ellipse 4"
              cx="114.08"
              cy="126.5"
              rx="14.5"
              ry="19.5"
            />
            <ellipse
              id="ellipse 7"
              cx="190.08"
              cy="126.5"
              rx="14.5"
              ry="19.5"
            />
            <circle
              id="ellipse 5"
              cx="110.08"
              cy="118.5"
              r="5.5"
              fill="white"
            />
            <circle
              id="ellipse 8"
              cx="186.08"
              cy="118.5"
              r="5.5"
              fill="white"
            />
            <ellipse
              id="ellipse 6"
              cx="120.08"
              cy="134"
              rx="2.5"
              ry="3"
              fill="white"
            />
            <ellipse
              id="ellipse 9"
              cx="196.08"
              cy="134"
              rx="2.5"
              ry="3"
              fill="white"
            />
            <path
              id="vector 1"
              d="M98.5798 110C98.5798 110.667 99.2798 113.2 100.08 114C101.08 115 102.58 115.5 104.08 115"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="vector 2"
              d="M174.58 110C174.58 110.667 175.28 113.2 176.08 114C177.08 115 178.58 115.5 180.08 115"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'dreamy'" id="dreamy">
            <path
              id="lash"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M126.442 113.213C126.586 113.742 126.313 114.299 125.831 114.458L98.4839 123.462L98.4703 123.466C97.2402 123.826 95.325 124.082 93.5712 123.623C92.6839 123.391 91.7981 122.965 91.0723 122.234C90.336 121.492 89.8105 120.482 89.5947 119.179C89.5047 118.636 89.833 118.115 90.3281 118.016C90.8232 117.917 91.2975 118.278 91.3875 118.821C91.5361 119.718 91.8762 120.329 92.3044 120.76C92.7431 121.202 93.3208 121.501 93.9938 121.677C95.3548 122.033 96.9398 121.842 97.9876 121.538L125.307 112.542C125.789 112.383 126.297 112.684 126.442 113.213Z"
            />
            <path
              id="eye_3"
              d="M111.902 147C122.218 147 130.58 137.822 130.58 126.5C130.58 121.642 129.04 117.179 126.468 113.666C126.412 114.029 126.174 114.345 125.831 114.458L98.4839 123.462L98.4703 123.466C97.2402 123.826 95.325 124.082 93.5712 123.623C93.5183 123.609 93.4654 123.594 93.4126 123.579C93.2886 124.533 93.2244 125.508 93.2244 126.5C93.2244 137.822 101.587 147 111.902 147Z"
            />
            <path
              id="shiny"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M98.2301 123.533C97.8163 124.261 97.58 125.103 97.58 126C97.58 128.761 99.8186 131 102.58 131C105.341 131 107.58 128.761 107.58 126C107.58 123.969 106.369 122.221 104.63 121.438L98.4839 123.462L98.4703 123.466C98.3929 123.489 98.3128 123.511 98.2301 123.533Z"
              fill="white"
            />
            <path
              id="eyelid"
              d="M93.7592 121.61C95.7574 112.649 103.122 106 111.902 106C117.286 106 122.138 108.5 125.546 112.5C125.467 112.502 125.387 112.516 125.307 112.542L97.9876 121.538C96.9398 121.842 95.3549 122.033 93.9938 121.677C93.9143 121.656 93.836 121.634 93.7592 121.61Z"
              fill="#FFAFA4"
            />
            <path
              id="lash_2"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M176.718 113.213C176.574 113.742 176.847 114.299 177.329 114.458L204.676 123.462L204.69 123.466C205.92 123.826 207.835 124.082 209.589 123.623C210.476 123.391 211.362 122.965 212.088 122.234C212.824 121.492 213.349 120.482 213.565 119.179C213.655 118.636 213.327 118.115 212.832 118.016C212.337 117.917 211.862 118.278 211.772 118.821C211.624 119.718 211.284 120.329 210.856 120.76C210.417 121.202 209.839 121.501 209.166 121.677C207.805 122.033 206.22 121.842 205.172 121.538L177.853 112.542C177.371 112.383 176.863 112.684 176.718 113.213Z"
            />
            <path
              id="eye_4"
              d="M191.258 147C180.942 147 172.58 137.822 172.58 126.5C172.58 121.642 174.12 117.179 176.692 113.666C176.748 114.029 176.986 114.345 177.329 114.458L204.676 123.462L204.69 123.466C205.92 123.826 207.835 124.082 209.589 123.623C209.642 123.609 209.695 123.594 209.747 123.579C209.871 124.533 209.936 125.508 209.936 126.5C209.936 137.822 201.573 147 191.258 147Z"
            />
            <path
              id="eyelid_2"
              d="M209.401 121.61C207.403 112.649 200.038 106 191.258 106C185.874 106 181.022 108.5 177.614 112.5C177.693 112.502 177.773 112.516 177.853 112.542L205.172 121.538C206.22 121.842 207.805 122.033 209.166 121.677C209.246 121.656 209.324 121.634 209.401 121.61Z"
              fill="#FFAFA4"
            />
            <circle id="ellipse 2" cx="182.58" cy="126" r="5" fill="white" />
          </g>
          <g v-if="eyes === 'sleepy'" id="sleepy">
            <mask
              id="mask1"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="167"
              y="107"
              width="45"
              height="39"
            >
              <ellipse
                id="eye Mask"
                cx="189.58"
                cy="126.5"
                rx="22"
                ry="19.5"
                fill="white"
              />
            </mask>
            <g mask="url(#mask1)">
              <path
                id="eye_5"
                d="M210.58 126.5C210.58 136.607 201.295 145 189.58 145C177.865 145 168.58 136.607 168.58 126.5C168.58 116.393 177.865 108 189.58 108C201.295 108 210.58 116.393 210.58 126.5Z"
                fill="white"
                stroke-width="2"
              />
              <ellipse id="iris" cx="195.08" cy="125" rx="17.5" ry="18" />
              <rect
                id="eyelid_3"
                x="176.184"
                y="97.7249"
                width="45.7598"
                height="19.0733"
                transform="rotate(21.9769 176.184 97.7249)"
                fill="#FFAFA4"
              />
            </g>
            <mask
              id="mask2"
              mask-type="alpha"
              maskUnits="userSpaceOnUse"
              x="91"
              y="107"
              width="45"
              height="39"
            >
              <ellipse
                id="eye Mask_2"
                cx="113.58"
                cy="126.5"
                rx="22"
                ry="19.5"
                fill="white"
              />
            </mask>
            <g mask="url(#mask2)">
              <path
                id="eye_6"
                d="M134.58 126.5C134.58 136.607 125.295 145 113.58 145C101.865 145 92.5798 136.607 92.5798 126.5C92.5798 116.393 101.865 108 113.58 108C125.295 108 134.58 116.393 134.58 126.5Z"
                fill="white"
                stroke-width="2"
              />
              <ellipse id="iris _2" cx="119.08" cy="125" rx="17.5" ry="18" />
              <rect
                id="eyelid_4"
                x="84.5798"
                y="114.851"
                width="45.7598"
                height="19.0733"
                transform="rotate(-21.98 84.5798 114.851)"
                fill="#FFAFA4"
              />
            </g>
          </g>
          <g v-if="eyes === 'lookatmebottomlash'" id="lookatmebottomlash">
            <circle
              id="eye_7"
              r="17"
              transform="matrix(1 0 0 -1 115.58 126)"
              fill="white"
              stroke-width="2"
            />
            <line
              id="eyelash"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0 1 1 0 116.58 143)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_2"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0.5 0.866025 0.866025 -0.5 126.58 137.938)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_3"
              x1="104.446"
              y1="139.304"
              x2="101.946"
              y2="143.634"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_4"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0 1 1 0 187.58 143)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_5"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0.5 0.866025 0.866025 -0.5 197.58 137.938)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_6"
              x1="175.446"
              y1="139.304"
              x2="172.946"
              y2="143.634"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              id="eye_8"
              r="17"
              transform="matrix(1 0 0 -1 186.58 126)"
              fill="white"
              stroke-width="2"
            />
            <circle cx="184.58" cy="125" r="11" />
            <circle cx="117.58" cy="125" r="11" />
          </g>
          <g v-if="eyes === 'lookatmetoplash'" id="lookatmetoplash">
            <circle
              id="eye_9"
              cx="115.58"
              cy="126"
              r="17"
              fill="white"
              stroke-width="2"
            />
            <line
              id="eyelash_7"
              x1="115.58"
              y1="108"
              x2="115.58"
              y2="103"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_8"
              x1="126.214"
              y1="112.696"
              x2="128.714"
              y2="108.366"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_9"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(-0.5 -0.866025 -0.866025 0.5 104.08 114.062)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_10"
              x1="186.58"
              y1="108"
              x2="186.58"
              y2="103"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_11"
              x1="197.214"
              y1="112.696"
              x2="199.714"
              y2="108.366"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_12"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(-0.5 -0.866025 -0.866025 0.5 175.08 114.062)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              id="eye_10"
              cx="186.58"
              cy="126"
              r="17"
              fill="white"
              stroke-width="2"
            />
            <circle cx="184.58" cy="125" r="11" />
            <circle cx="117.58" cy="125" r="11" />
          </g>
          <g v-if="eyes === 'lookatme'" id="lookatme">
            <circle
              id="eye_11"
              cx="115.58"
              cy="126"
              r="17"
              fill="white"
              stroke-width="2"
            />
            <circle cx="117.58" cy="125" r="11" />
            <circle
              id="eye_12"
              cx="186.58"
              cy="126"
              r="17"
              fill="white"
              stroke-width="2"
            />
            <circle cx="184.58" cy="125" r="11" />
          </g>
          <g v-if="eyes === 'zzz'" fill="none" id="zzz">
            <path
              d="M100.29 123.366C102.056 125.889 107.821 130.738 116.757 129.956C125.693 129.174 130.091 123.436 131.172 120.664"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M170.987 120.664C172.288 123.455 177.124 129.232 186.06 130.014C194.996 130.795 200.323 125.908 201.869 123.366"
              stroke-width="4"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'smiling'" fill="none" id="smiling">
            <path
              d="M100.29 129.634C102.056 127.111 107.821 122.262 116.757 123.044C125.693 123.826 130.091 129.564 131.172 132.336"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M170.987 132.336C172.288 129.545 177.124 123.768 186.06 122.986C194.996 122.205 200.323 127.092 201.869 129.634"
              stroke-width="4"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'zzzlashes'" fill="none" id="zzzlashes">
            <path
              d="M100.29 123.366C102.056 125.889 107.821 130.738 116.757 129.956C125.693 129.174 130.091 123.436 131.172 120.664"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M170.987 120.664C172.288 123.455 177.124 129.232 186.06 130.014C194.996 130.795 200.323 125.908 201.869 123.366"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              id="line 5"
              x1="116.08"
              y1="137.5"
              x2="116.08"
              y2="130.5"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 6"
              x1="128.031"
              y1="134.781"
              x2="124.531"
              y2="128.719"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 7"
              x1="103.531"
              y1="136.281"
              x2="107.031"
              y2="130.219"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 8"
              x1="1.5"
              y1="-1.5"
              x2="8.5"
              y2="-1.5"
              transform="matrix(0 -1 -1 0 185.08 139)"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 9"
              x1="1.5"
              y1="-1.5"
              x2="8.5"
              y2="-1.5"
              transform="matrix(0.5 -0.866025 -0.866025 -0.5 172.58 135.33)"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 10"
              x1="1.5"
              y1="-1.5"
              x2="8.5"
              y2="-1.5"
              transform="matrix(-0.5 -0.866025 -0.866025 0.5 198.58 138.33)"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'smilinglash'" fill="none" id="smilinglash">
            <path
              d="M100.29 129.634C102.056 127.111 107.821 122.262 116.757 123.044C125.693 123.826 130.091 129.564 131.172 132.336"
              stroke-width="4"
              stroke-linecap="round"
            />
            <path
              d="M170.987 132.336C172.288 129.545 177.124 123.768 186.06 122.986C194.996 122.205 200.323 127.092 201.869 129.634"
              stroke-width="4"
              stroke-linecap="round"
            />
            <line
              id="line 5_2"
              x1="1.5"
              y1="-1.5"
              x2="8.5"
              y2="-1.5"
              transform="matrix(0 1 1 0 117.58 114)"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 6_2"
              x1="1.5"
              y1="-1.5"
              x2="8.5"
              y2="-1.5"
              transform="matrix(-0.5 0.866025 0.866025 0.5 130.08 117.67)"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 7_2"
              x1="1.5"
              y1="-1.5"
              x2="8.5"
              y2="-1.5"
              transform="matrix(0.5 0.866025 0.866025 -0.5 104.08 114.67)"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 8_2"
              x1="186.58"
              y1="115.5"
              x2="186.58"
              y2="122.5"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 9_2"
              x1="174.629"
              y1="118.219"
              x2="178.129"
              y2="124.281"
              stroke-width="3"
              stroke-linecap="round"
            />
            <line
              id="line 10_2"
              x1="199.129"
              y1="116.719"
              x2="195.629"
              y2="122.781"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'circlebottomlash'" id="circlebottomlash">
            <circle
              id="eye_13"
              r="19.5"
              transform="matrix(1 0 0 -1 189.08 126.5)"
              fill="white"
              stroke-width="2"
            />
            <circle
              id="iris _9"
              r="15"
              transform="matrix(1 0 0 -1 194.58 126)"
            />
            <line
              id="eyelash_13"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0 1 1 0 189.58 146)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_14"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0.5 0.866025 0.866025 -0.5 200.58 142.34)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_15"
              x1="177.946"
              y1="143.706"
              x2="175.446"
              y2="148.036"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              id="eye_14"
              r="19.5"
              transform="matrix(1 0 0 -1 113.08 126.5)"
              fill="white"
              stroke-width="2"
            />
            <circle
              id="iris _10"
              r="15"
              transform="matrix(1 0 0 -1 118.58 126)"
            />
            <line
              id="eyelash_16"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0 1 1 0 113.58 146)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_17"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0.5 0.866025 0.866025 -0.5 124.58 142.34)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_18"
              x1="101.946"
              y1="143.706"
              x2="99.4459"
              y2="148.036"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'circletoplash'" id="circletoplash">
            <circle
              id="eye_15"
              cx="189.08"
              cy="126.5"
              r="19.5"
              fill="white"
              stroke-width="2"
            />
            <circle cx="194.58" cy="126" r="15" />
            <line
              id="eyelash_19"
              x1="188.58"
              y1="106"
              x2="188.58"
              y2="101"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_20"
              x1="200.214"
              y1="109.294"
              x2="202.714"
              y2="104.964"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_21"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(-0.5 -0.866025 -0.866025 0.5 177.58 110.66)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <circle
              id="eye_16"
              cx="113.08"
              cy="126.5"
              r="19.5"
              fill="white"
              stroke-width="2"
            />
            <circle cx="118.58" cy="126" r="15" />
            <line
              id="eyelash_22"
              x1="112.58"
              y1="106"
              x2="112.58"
              y2="101"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_23"
              x1="124.214"
              y1="109.294"
              x2="126.714"
              y2="104.964"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_24"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(-0.5 -0.866025 -0.866025 0.5 101.58 110.66)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'eyes-circle'" id="circle">
            <circle
              id="eye_17"
              cx="189.08"
              cy="126.5"
              r="19.5"
              fill="white"
              stroke-width="2"
            />
            <circle cx="194.58" cy="126" r="15" />
            <circle
              id="eye_18"
              cx="113.08"
              cy="126.5"
              r="19.5"
              fill="white"
              stroke-width="2"
            />
            <circle cx="118.58" cy="126" r="15" />
          </g>
          <g v-if="eyes === 'ovalbottomlash'" id="ovalbottomlash">
            <path
              id="eye_19"
              d="M132.58 126C132.58 113.738 123.744 104 113.08 104C102.415 104 93.5798 113.738 93.5798 126C93.5798 138.262 102.415 148 113.08 148C123.744 148 132.58 138.262 132.58 126Z"
              fill="white"
              stroke-width="2"
            />
            <ellipse
              id="iris _15"
              rx="15"
              ry="17"
              transform="matrix(1 0 0 -1 118.58 126)"
            />
            <line
              id="eyelash_25"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0 1 1 0 113.58 148)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_26"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0.5 0.866025 0.866025 -0.5 124.58 143.938)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_27"
              x1="102.446"
              y1="145.304"
              x2="99.9459"
              y2="149.634"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="eye_20"
              d="M208.58 126C208.58 113.738 199.744 104 189.08 104C178.415 104 169.58 113.738 169.58 126C169.58 138.262 178.415 148 189.08 148C199.744 148 208.58 138.262 208.58 126Z"
              fill="white"
              stroke-width="2"
            />
            <ellipse
              id="iris _16"
              rx="15"
              ry="17"
              transform="matrix(1 0 0 -1 194.58 126)"
            />
            <line
              id="eyelash_28"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0 1 1 0 189.58 148)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_29"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(0.5 0.866025 0.866025 -0.5 200.58 143.938)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_30"
              x1="178.446"
              y1="145.304"
              x2="175.946"
              y2="149.634"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'ovaltoplash'" id="ovaltoplash">
            <path
              id="eye_21"
              d="M132.58 126C132.58 138.262 123.744 148 113.08 148C102.415 148 93.5798 138.262 93.5798 126C93.5798 113.738 102.415 104 113.08 104C123.744 104 132.58 113.738 132.58 126Z"
              fill="white"
              stroke-width="2"
            />
            <ellipse id="iris _17" cx="118.58" cy="125" rx="15" ry="17" />
            <line
              id="eyelash_31"
              x1="112.58"
              y1="103"
              x2="112.58"
              y2="98"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_32"
              x1="124.214"
              y1="106.696"
              x2="126.714"
              y2="102.366"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_33"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(-0.5 -0.866025 -0.866025 0.5 102.08 108.062)"
              stroke-width="2"
              stroke-linecap="round"
            />
            <path
              id="eye_22"
              d="M208.58 126C208.58 138.262 199.744 148 189.08 148C178.415 148 169.58 138.262 169.58 126C169.58 113.738 178.415 104 189.08 104C199.744 104 208.58 113.738 208.58 126Z"
              fill="white"
              stroke-width="2"
            />
            <ellipse id="iris _18" cx="194.58" cy="125" rx="15" ry="17" />
            <line
              id="eyelash_34"
              x1="188.58"
              y1="103"
              x2="188.58"
              y2="98"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_35"
              x1="200.214"
              y1="106.696"
              x2="202.714"
              y2="102.366"
              stroke-width="2"
              stroke-linecap="round"
            />
            <line
              id="eyelash_36"
              x1="1"
              y1="-1"
              x2="6"
              y2="-1"
              transform="matrix(-0.5 -0.866025 -0.866025 0.5 178.08 108.062)"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <g v-if="eyes === 'eyes-oval'" id="eyes-oval">
            <path
              id="eye_23"
              d="M208.58 126C208.58 138.262 199.744 148 189.08 148C178.415 148 169.58 138.262 169.58 126C169.58 113.738 178.415 104 189.08 104C199.744 104 208.58 113.738 208.58 126Z"
              fill="white"
              stroke-width="2"
            />
            <ellipse id="iris _19" cx="194.58" cy="125" rx="15" ry="17" />
            <path
              id="eye_24"
              d="M132.58 126C132.58 138.262 123.744 148 113.08 148C102.415 148 93.5798 138.262 93.5798 126C93.5798 113.738 102.415 104 113.08 104C123.744 104 132.58 113.738 132.58 126Z"
              fill="white"
              stroke-width="2"
            />
            <ellipse id="iris _20" cx="118.58" cy="125" rx="15" ry="17" />
          </g>
        </g>
        <g
          id="hair"
          transform="scale(-1, 1) translate(-300, 0)"
          :fill="hairColor"
        >
          <g v-if="hair === 'smooth'" id="hair / Smooth">
            <path
              id="smooth"
              opacity="0.75"
              d="M233.1 121C233.1 50.2 181.6 39 150.6 39H149.6C118.6 39 67.1 50.2 67.1 121C77.6 121 77.1 121 82.1 98C92.6 98 92.6 98 98.1 79.5C109.933 78.1667 136.8 75.5 149.6 75.5H150.6C163.4 75.5 190.267 78.1667 202.1 79.5C207.6 98 207.6 98 218.1 98C223.1 121 222.6 121 233.1 121Z"
            />
          </g>
          <g v-if="hair === 'uptop'" id="hair / Up Top">
            <g id="up Top">
              <path
                id="smooth_2"
                opacity="0.75"
                d="M233.1 121C233.1 50.2 181.6 39 150.6 39H149.6C118.6 39 67.1 50.2 67.1 121C77.6 121 77.1 121 82.1 98C92.6 98 92.6 98 98.1 79.5C109.933 78.1667 136.8 75.5 149.6 75.5H150.6C163.4 75.5 190.267 78.1667 202.1 79.5C207.6 98 207.6 98 218.1 98C223.1 121 222.6 121 233.1 121Z"
              />
              <path
                id="vector 23"
                d="M236.936 55.221C230.913 61.347 228.738 79.0442 227.399 85C210.166 81.7385 174.193 76.9171 150.1 76.9171C126.007 76.9171 90.0342 81.7385 72.8008 85C71.4623 79.0442 69.9341 60.6354 63.2639 55.221C55.6 49 59.1 47.5 64.2678 42.884C69.5907 38.1294 74.8086 33.9503 79.3261 46.2873C79.828 45.2947 79.8046 43.2436 78.6 39.5C77.0941 34.8204 69.1 32 80.8319 25.8674C93.5383 19.2254 92.0903 23.1934 94.6 30C96.1058 31.7017 97.9983 36.9282 100.408 36.9282C100.24 35.5101 98.9031 31.9934 98.1 29.2707C97.0961 25.8674 91.1 20 100.408 15C111.296 9.15079 109.1 11 116.47 29.2707C116.972 27.7109 117.6 24.5 117.6 21C117.6 15.232 111.355 9.62535 126.007 9.27624C137.6 9 138.053 10 138.053 18.2099C138.053 24.3883 138.723 27.0018 139.559 27.5691C140.061 26.7182 141.489 24.1673 141.1 20.7624C140.1 12 137.362 8 149.096 8C161.645 8 158.6 12.5 158.6 18.21C158.6 20.724 159.47 25.442 160.641 27.5691C161.477 27.0019 162.95 24.3359 162.147 18.21C161.143 10.5525 159.598 7.94407 174.193 9.27625C187.6 10.5 182.1 14 182.6 20.7624C182.833 23.9203 183.228 27.7109 183.73 29.2707C188.75 9.27627 189.6 9.27625 201.298 15.2321C212.683 21.0285 203.104 27.5967 202.1 31C201.297 33.7227 199.96 35.5102 199.792 36.9282C202.202 36.9282 205.094 32.7017 206.6 31C209.11 24.1934 209.136 20.7348 219.368 25.8674C229.6 31 224.606 34.3204 223.1 39C221.895 42.7436 220.372 45.2947 220.874 46.2873C225.391 33.9503 229.909 39.0553 235.932 42.884C241.955 46.7127 244.465 47.5636 236.936 55.221Z"
              />
            </g>
          </g>
          <g v-if="hair === 'bob'" id="hair / Bob">
            <path
              id="bob"
              d="M255.443 112.272C247.1 99.5 233.6 61.6261 220.1 44C212.791 34.4572 200.813 18 148.6 18C97.354 18 86.718 33.6711 79.1 44C66.1 61.6261 50.6 99.5 41.7569 112.272C31.8443 126.59 8.88205 155.899 83.3338 191C78.0158 167.265 71.2475 114.178 86.718 91.713C96.2259 90.2087 116.015 87.2 119.109 87.2C120.882 80.1797 124.427 65.2365 124.427 61.6261C125.878 69.6493 129.068 85.9965 130.229 87.2C131.679 88.7044 145.699 88.2029 148.6 88.2029C151.501 88.2029 165.521 88.7044 166.971 87.2C168.132 85.9965 171.322 69.6493 172.773 61.6261C172.773 65.2365 176.318 80.1797 178.091 87.2C181.185 87.2 200.974 90.2087 210.482 91.713C225.952 114.178 219.184 167.265 213.866 191C288.318 155.899 264.966 126.851 255.443 112.272Z"
            />
          </g>
          <g v-if="hair === 'straightup'" id="hair / Straight-up">
            <path
              id="hair"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M200.6 61.5C200.6 68.3333 199.8 82.6 196.6 85C193.4 87.4 164.6 92 149.6 92C134.6 92 106.629 87.4 103.429 85C100.229 82.6 99.4292 68.3333 99.4292 61.5C91.1584 85.5249 79.9209 128.769 76.6448 172.015C87.7194 184.733 104.529 194.005 114.406 198C119.239 200 133.106 204 149.906 204C166.706 204 180.572 200 185.406 198C195.343 193.981 212.296 184.621 223.367 171.784C220.068 128.615 208.856 85.4821 200.6 61.5ZM215.501 254.432C215.477 254.497 215.453 254.562 215.429 254.626C228.153 254.251 255.7 246.6 264.1 219C274.6 184.5 258.236 63.233 218.1 39C191.6 23 177.6 23 150.1 23C122.6 23 108.6 23 82.1 39C41.9641 63.233 25.4292 184.5 35.9292 219C44.3292 246.6 71.8764 254.251 84.6 254.626C84.5426 254.472 84.4854 254.317 84.4286 254.162L84.6 254.5C94.1 248 118.4 234.5 149.6 234.5C180.692 234.5 205.925 247.907 215.501 254.432Z"
            />
          </g>
          <g v-if="hair === 'diva'" id="hair / Diva">
            <path
              id="diva"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M234.351 56.5C209.151 31.3 167.518 25 149.851 25H148.851C131.184 25 89.5511 31.3 64.3511 56.5C35.6548 85.1963 46.3792 95.6346 51.1618 100.29C51.629 100.744 52.0396 101.144 52.3511 101.5C54.872 104.381 49.6114 107.262 43.6685 110.517C41.3603 111.781 38.9492 113.101 36.8511 114.5C29.3511 119.5 21.8511 132.5 33.3511 141C44.8511 149.5 42.8511 153.5 39.8511 155.5C39.0703 156.021 37.5104 156.372 35.4888 156.827C29.7434 158.12 20.2689 160.253 14.3511 169.5C6.3511 182 19.8511 212 52.3511 219C80.2992 225.02 97.8943 224.384 106.09 224.087C107.425 224.039 108.511 224 109.351 224H148.851H149.851H189.351C190.191 224 191.277 224.039 192.612 224.087C200.808 224.384 218.403 225.02 246.351 219C278.851 212 292.351 182 284.351 169.5C278.433 160.253 268.959 158.12 263.213 156.827C261.192 156.372 259.632 156.021 258.851 155.5C255.851 153.5 253.851 149.5 265.351 141C276.851 132.5 269.351 119.5 261.851 114.5C259.753 113.101 257.342 111.781 255.034 110.517C249.091 107.262 243.83 104.381 246.351 101.5C246.663 101.144 247.073 100.744 247.54 100.29C252.323 95.6346 263.047 85.1963 234.351 56.5ZM81.9738 177.5C86.263 175.088 87.8606 168.97 88.1 165.26C83.1 168.76 81.1 168.76 75.6 161.76C70.1 154.76 64.6 143.76 75.6 136.76C86.6 129.76 86.1 120.26 83.6 115.26C83.0603 114.18 82.474 113.241 81.9216 112.356C79.9151 109.14 78.3555 106.641 81.1 100.76C82.4705 97.8231 85.9874 96.343 89.6097 94.8185C95.2383 92.4496 101.121 89.9738 99.6 81.7599C97.6 70.9599 108.433 61.9265 114.1 58.7599C136.5 44.7599 147.1 52.9265 149.6 58.7598V59C152.1 53.1667 162.7 45 185.1 59C190.767 62.1667 201.6 71.2 199.6 82C198.079 90.2139 203.962 92.6898 209.59 95.0586C213.213 96.5831 216.73 98.0633 218.1 101C220.844 106.881 219.285 109.38 217.278 112.596C216.726 113.481 216.14 114.421 215.6 115.5C213.1 120.5 212.6 130 223.6 137C234.6 144 229.1 155 223.6 162C218.1 169 216.1 169 211.1 165.5C211.343 169.274 212.992 175.537 217.448 177.861C206.879 187.571 193.699 194.645 185.406 198C180.572 200 166.706 204 149.906 204C133.106 204 119.239 200 114.406 198C106.01 194.604 92.6071 187.396 81.9738 177.5Z"
            />
          </g>
          <g v-if="hair === 'princess'" id="hair / Princess">
            <path
              id="princess"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M254.607 125.975C258.612 132.812 261.799 138.253 263.1 141C267.6 150.5 277.1 173 270.1 191.5C266.469 201.096 260.552 205.445 255.696 209.014C251.191 212.326 247.6 214.965 247.6 220.5C247.6 225.248 251.266 230.594 255.147 236.254C260.666 244.302 266.623 252.987 263.1 261.5C258.3 273.1 241.1 280.667 233.1 283C234.1 280.667 235.5 274.1 233.1 266.5C229.6 276.333 218.6 296.2 202.6 297C204.773 288.91 208.049 273.753 208.32 262.516C205.416 264.767 202.232 266.53 199.1 267C200.267 264 201.9 256.7 199.1 251.5C189.433 255.167 166.6 262.6 152.6 263L148.6 251.5L144.6 263C130.6 262.6 107.767 255.167 98.1 251.5C95.3 256.7 96.9333 264 98.1 267C94.9677 266.53 91.7842 264.767 88.8799 262.516C89.1512 273.753 92.4267 288.91 94.6 297C78.6 296.2 67.6 276.333 64.1 266.5C61.7 274.1 63.1 280.667 64.1 283C56.1 280.667 38.9 273.1 34.1 261.5C30.5774 252.987 36.5335 244.302 42.0527 236.254C43.3524 234.359 44.6279 232.499 45.7497 230.685L49.6 220.5C49.6 214.965 46.0092 212.325 41.5036 209.014C40.8776 208.554 40.2338 208.081 39.5797 207.585C35.1603 204.236 30.2626 199.858 27.1 191.5C20.1 173 29.6 150.5 34.1 141C38.6 131.5 51.1 103 64.6 69.5C76.51 39.9456 86.6 22 151.6 22C152.472 22 153.584 21.9591 154.898 21.9108C170.155 21.3495 212.75 19.7826 226.1 69.5C229.971 83.9169 244.761 109.166 254.607 125.975ZM100.035 190.789C99.3953 186.105 97.8419 181.448 94.6 176.5C91.4885 171.751 88.0016 167.967 84.7891 164.481C78.1934 157.324 72.7551 151.423 74.1 141C87.3 126.2 101.6 85.5 107.1 67C110.7 72.2 108.6 85.5 107.1 91.5C117.1 91.5 131.6 79.1667 137.6 73C136.8 78.6 131.6 87.6667 129.1 91.5C163.1 92.7 173.6 68.6667 174.6 56.5C187.1 85 194.6 101 213.1 99C213.1 104.757 215.292 111.748 217.667 119.325C219.831 126.225 222.147 133.613 223.1 141C224.433 151.328 218.884 157.216 212.222 164.285C208.885 167.825 205.27 171.662 202.1 176.5C198.443 182.081 197.009 187.292 196.628 192.589C192.453 194.895 188.573 196.719 185.406 198C180.572 200 166.706 204 149.906 204C133.106 204 119.239 200 114.406 198C110.455 196.402 105.394 193.959 100.035 190.789Z"
            />
          </g>
          <g v-if="hair === 'eggshell'" id="hair / Eggshell">
            <path
              id="eggshell"
              d="M233.1 119C233.1 48.2 181.6 37 150.6 37C119.6 37 67.1 48.2 67.1 119L70.6 122.5C70.9333 118.833 74.4 102.6 79.6 93C84.8 83.4 88.1 81.3333 89.1 81.5L98.1 87.5L109.6 75L124.1 83.5L138.1 72.5L150.1 87.5L162.1 72.5L176.1 83.5L190.6 75L202.1 87.5L211.1 81.5C212.1 81.3333 215.4 83.4 220.6 93C225.8 102.6 229.767 118.333 230.1 122L233.1 119Z"
            />
          </g>
          <g v-if="hair === 'leafy'" id="hair / Leafy">
            <path
              id="leafy"
              d="M233.1 119C233.1 48.2 181.6 37 150.6 37C119.6 37 67.1 48.2 67.1 119C74.7839 119 81.9379 105.333 85.2705 96.3687C84.5381 99.9965 85.4276 104.714 86.1 107C108.1 107 123.267 81.3333 128.1 68.5C131.433 78.3333 143.2 98 163.6 98C164.433 93.5 165.6 83.5 163.6 79.5C174.6 88.6667 200.8 107 217.6 107C218.767 111.333 223.5 119 233.1 119Z"
            />
          </g>
          <g v-if="hair === 'kindergarten'" id="hair / Kindergarten">
            <path
              id="kindergarten"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M108.94 43.8999C111.372 34.8613 121.235 24.5 148.6 24.5C194.1 24.5 219.1 47.5 228.1 58C230.756 61.0985 234.544 66.7224 238.847 73.1114C249.126 88.3729 262.346 108 270.1 108C276.1 108 279.6 107.5 285.1 105C282.933 116.5 274.4 140.5 257.6 144.5C257.006 144.641 256.427 144.775 255.861 144.901C256.343 143.337 256.6 141.694 256.6 140C256.6 129.507 246.75 121 234.6 121C233.99 121 233.385 121.021 232.788 121.064C232.784 121.041 232.78 121.019 232.777 120.997C232.718 120.999 232.659 121 232.6 121C216.2 121 207.767 94.6666 205.6 81.5C204.767 85.5 194 96.3 159.6 95.5C137.631 94.9891 123.874 82.5556 116.061 70.2067C112.316 79.0358 100.135 85.5 87.0999 85.5C86.2666 97.3333 81.0999 121 67.0999 121C67.0855 121 67.071 121 67.0566 121C67.0543 121.013 67.052 121.027 67.0498 121.041C66.5705 121.014 66.0871 121 65.6 121C53.4497 121 43.6 129.507 43.6 140C43.6 141.544 43.8132 143.045 44.2157 144.482C27.4649 140.429 18.9536 116.483 16.7901 105C22.2901 107.5 25.7901 108 31.7901 108C39.0258 108 48.2085 91.9908 56.2075 78.0452L56.2077 78.045C60.3691 70.7898 64.2102 64.0932 67.2901 60.5C71.8785 54.1872 92.5654 33.733 108.94 43.8999Z"
            />
          </g>
          <g v-if="hair === 'chipper'" id="hair / Chipper">
            <path
              id="chipper"
              d="M218.1 104C166.9 100 121.433 76 105.1 64.5C101.433 76.5 89.2402 99.8665 79.1 105.5C65.6 113 67.1 115.5 67.1 120C59.2667 118.667 45.5 108.4 53.1 78C60.7 47.6 85.9333 48.3333 97.6 52.5C97.1 49 102.6 19 148.1 19C218.1 19 248.1 68 248.1 92C248.1 111.2 238.1 118.667 233.1 120C229.9 109.2 221.767 104.833 218.1 104Z"
            />
          </g>
          <g v-if="hair === 'shaggy'" id="hair / Shaggy">
            <g id="shaggy">
              <path
                d="M69.9446 72.4222C70.1613 72.2519 70.3799 72.1101 70.6001 72C70.4224 72.1269 70.2014 72.2708 69.9446 72.4222Z"
              />
              <path
                d="M172.6 92C168.2 89.6 163.1 79.6667 161.1 75C158.6 80.6667 152.6 92 148.6 92C144.6 92 139.1 79.4 139.1 75C137.1 79.6667 132 89.6 127.6 92C124.6 89.5 118.2 83.8 116.6 81C115.1 85.6667 111.6 95.3 109.6 96.5C106.767 95.1667 100.6 91.8 98.6001 89C97.1001 93.3333 93.1001 102.7 89.1001 105.5C87.1001 104.667 82.6001 102.5 80.6001 100.5C80.6001 105.5 80 116.1 77.6001 118.5C75.7667 117.833 71.8 116.2 70.6001 115C69.7667 116.667 67.9001 120.2 67.1001 121C66.1001 122 59.6001 114.5 65.1001 96.5C63.4334 98.1667 59.3 101.7 56.1 102.5C58.1 98.8333 62.2 91 62.6 89C63.0725 86.6376 66.2239 75.3456 69.9446 72.4222C70.2014 72.2708 70.4224 72.1269 70.6001 72C70.3799 72.1101 70.1613 72.2519 69.9446 72.4222C68.5149 73.2649 65.9736 74.3391 63.6 74C66.1 71.1667 71.3 64.9 72.1 62.5C73.1 59.5 82.6001 44.5 89.1001 44.5C87.6 44.3333 84.2 43.4 82.6 41C89.1 40.8333 103 39.8 106.6 37C111.1 33.5 131.1 29.5 139.1 30C139.933 30 142 29.5 143.6 27.5C143.6 28.7 145.267 29.6667 146.1 30C146.1 27.6 148.767 25 150.1 24C152.1 25.2 153.6 28.1666 154.1 29.5C155.3 29.0999 156.267 28 156.6 27.5C158.2 29.5 160.267 30 161.1 30C169.1 29.5 189.1 33.5 193.6 37C197.2 39.8 211.1 40.8333 217.6 41C216 43.4 212.6 44.3333 211.1 44.5C217.6 44.5 227.1 59.5 228.1 62.5C228.9 64.9 234.1 71.1667 236.6 74C234.226 74.3391 231.685 73.2649 230.255 72.4222C230.039 72.2519 229.82 72.1101 229.6 72C229.778 72.1269 229.999 72.2708 230.255 72.4222C233.976 75.3456 237.128 86.6376 237.6 89C238 91 242.1 98.8333 244.1 102.5C240.9 101.7 236.767 98.1667 235.1 96.5C240.6 114.5 234.1 122 233.1 121C232.3 120.2 230.433 116.667 229.6 115C228.4 116.2 224.433 117.833 222.6 118.5C220.2 116.1 219.6 105.5 219.6 100.5C217.6 102.5 213.1 104.667 211.1 105.5C207.1 102.7 203.1 93.3333 201.6 89C199.6 91.8 193.433 95.1667 190.6 96.5C188.6 95.3 185.1 85.6667 183.6 81C182 83.8 175.6 89.5 172.6 92Z"
              />
            </g>
          </g>
          <g v-if="hair === 'twinbraids'" id="hair / Twin Braids">
            <g id="twin Braids">
              <path
                id="vector 29"
                d="M150.1 94.5C205.1 94.5 204.1 93.5 204.1 64C205.267 75.8334 204.1 107 220.6 102L233.1 121.5C233.1 86.5 222.1 32 150.1 32C78.1 32 66.6 86.5 66.6 121.5L79.1 102C95.6 106 94.4333 75.8333 95.6 64C95.6 93.5 95.1 94.5 150.1 94.5Z"
              />
              <path
                id="subtract"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M240.996 158.184C238.972 158.715 236.825 159 234.6 159C233.841 159 233.09 158.967 232.35 158.902C230.071 165.407 225.844 171.387 220.705 176.693C223.256 179.674 226.877 181.502 230.718 181.58C227.469 185.722 226.792 191.781 229.464 197.089C232.523 203.168 238.988 206.307 244.948 205.056C238.838 211.747 241.411 222.808 243.6 228.5C247.933 228.833 256.691 227.78 260.6 225.5C266.6 222 268.1 219.5 271.6 213C267.732 208.272 259.06 200.366 251.619 201.29C255.467 197.158 256.437 190.627 253.582 184.952C251.013 179.848 246.043 176.817 240.987 176.717C243.607 173.45 244.781 168.916 243.798 164.306C243.304 161.993 242.323 159.919 240.996 158.184Z"
              />
              <path
                id="subtract_2"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M78.3323 175.881C73.5522 170.788 69.6375 165.096 67.4718 158.932C66.8547 158.977 66.2305 159 65.6 159C62.8432 159 60.2047 158.562 57.773 157.762C56.131 159.637 54.9168 161.982 54.349 164.644C53.3656 169.255 54.5401 173.788 57.1601 177.055C52.1037 177.155 47.1333 180.187 44.5648 185.291C41.7094 190.965 42.6799 197.496 46.5273 201.628C39.0871 200.704 30.4152 208.61 26.5468 213.338C30.0468 219.838 31.5468 222.338 37.5468 225.838C41.4558 228.119 50.2134 229.172 54.5468 228.838C56.7361 223.146 59.3089 212.085 53.1983 205.395C59.1587 206.645 65.6242 203.506 68.6831 197.428C71.3544 192.119 70.6773 186.061 67.4287 181.919C71.7413 181.831 75.7771 179.537 78.3323 175.881Z"
              />
            </g>
          </g>
          <g v-if="hair === 'chill'" id="hair / Chill">
            <path
              id="chill"
              d="M129.6 11.5C182.4 11.5 199.267 38.1667 201.1 51.5C206.6 49 219.7 45.5 228.1 51.5C238.6 59 253.1 74 259.6 76C259.6 82.5 257.1 90 253.1 91.5C249.1 93 274.1 100 275.1 107.5C273.933 111.667 270.9 120.2 268.1 121C264.6 122 262.6 119 259.6 117C260.933 118.833 263.8 123.3 264.6 126.5C265.6 130.5 258.1 138 253.1 137C251.1 133.8 245.6 128.667 243.1 126.5C239.933 126.5 232.5 125.4 228.1 121C233.7 108.2 221.767 84 215.1 73.5C216.767 76.8333 220 84.2 219.6 87C219.2 89.8 211.1 91.1667 207.1 91.5C203.5 91.5 200.6 71.1667 199.6 61C183.933 72.5 151.6 94.7 147.6 91.5C142.6 87.5 139.6 82.5 139.1 78C138.6 73.5 151.1 72.5 154.6 68.5C143.767 71 120.7 74.5 115.1 68.5C95.6 78 79.8969 103.758 77.6 109.5C71.6 124.5 66.1 134.167 61.1 143.5C57.6 148.5 42.6 135 39.6 133C39.2 130.6 48.7667 117.333 53.6 111C50.1 112.5 50.1 114.5 47.6 115C45.1 115.5 36.1 109.5 33.1 107.5C31.9 98.7 43.9333 84.1667 50.1 78C47.6 78 44.6 72 42.6 64.5C49.6 56 74.6 46.5 72.1 46.5C69.6 46.5 64.1 38.5 63.6 34C63.1 29.5 93.6 11.5 129.6 11.5Z"
            />
          </g>
          <g v-if="hair === 'fairy'" id="hair / Fairy">
            <g id="fairy">
              <path
                id="subtract_3"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M202.826 53.0045C205.141 43.7396 214.956 27 238.1 27C268.1 27 276.1 60 276.1 84.5C276.1 97.7981 269.029 103.731 261.684 109.894C256.677 114.095 251.543 118.404 248.433 125.225C244.654 122.583 239.841 121 234.6 121C233.99 121 233.385 121.021 232.788 121.064L232.777 121L233.1 121C233.1 85.1443 219.891 64.5747 202.826 53.0045ZM221.874 175.457C226.482 170.464 230.247 164.907 232.35 158.902C233.09 158.967 233.841 159 234.6 159C244.398 159 252.7 153.468 255.547 145.824C262.606 151.713 271.118 150.496 276.1 149.5C269.521 164.904 249.751 190.688 221.874 175.457Z"
              />
              <path
                id="subtract_4"
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M99.0696 51.8919C96.2763 42.4639 86.3451 27 64.1 27C34.1 27 26.1 60 26.1 84.5C26.1 97.7981 33.1706 103.731 40.5157 109.894C45.2788 113.891 50.1572 117.984 53.298 124.246C56.8096 122.197 61.043 121 65.6 121C66.0871 121 66.5705 121.014 67.0497 121.041C67.0664 120.941 67.0833 120.841 67.1002 120.742C67.1656 83.8687 81.2333 63.2118 99.0696 51.8919ZM78.7219 176.293C51.6915 189.697 32.5517 164.607 26.1 149.5C30.7282 150.426 38.4028 151.542 45.129 146.973C48.3483 154.017 56.3003 159 65.6 159C66.2304 159 66.8547 158.977 67.4718 158.932C69.6961 165.263 73.7652 171.095 78.7219 176.293Z"
              />
              <path
                id="vector 31"
                d="M234.1 121C196.9 120.6 159.767 91.5 146.6 77C147.1 83.6667 150.2 97.8 158.6 101C148.433 102.167 126.3 100.7 119.1 85.5C112.6 95 93.1 115.4 67.1 121C67.1 77 88.1 33.5 150.1 33.5C208.1 33.5 234.1 68 234.1 121Z"
              />
            </g>
          </g>
          <g v-if="hair === 'nomessbun'" id="hair / No-Mess Bun">
            <path
              id="no-Mess Bun"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M125.995 37.9447C123.832 34.8523 122.6 31.2907 122.6 27.5C122.6 15.6259 134.688 6 149.6 6C164.512 6 176.6 15.6259 176.6 27.5C176.6 31.1485 175.459 34.5847 173.445 37.5946C220.886 47.0133 233.1 86.4877 233.1 121L228.6 120.5C227.513 119.413 225.796 105.652 224.863 97.0025C224.982 102.01 223.364 109.264 222.1 108C220.9 106.8 210.933 103.5 206.1 102C204.573 99.7091 203.337 87.213 203.061 82.7699C202.556 86.5397 199.35 95.4783 197.6 100C194.4 98.8 179.267 97.1667 172.1 96.5C171.3 95.3 168.767 79.3333 167.6 71.5C166.4 73.9 164.1 89.1667 163.1 96.5C162.547 96.5 161.233 96.4321 159.574 96.3463L159.574 96.3462L159.573 96.3462C156.732 96.1993 152.878 96 150.1 96C147.472 96 143.88 96.1784 140.988 96.3221H140.988H140.988C139.038 96.4189 137.405 96.5 136.6 96.5C135.6 89.1667 133.3 73.9 132.1 71.5C130.933 79.3333 128.4 95.3 127.6 96.5C120.433 97.1667 105.3 98.8 102.1 100C100.35 95.4783 97.1441 86.5397 96.6392 82.7699C96.363 87.213 95.1273 99.7091 93.6 102C88.7667 103.5 78.8 106.8 77.6 108C76.3363 109.264 74.7176 102.01 74.8371 97.0025C73.9044 105.652 72.1874 119.413 71.1 120.5L66.6 121C66.6 86.8997 79.6425 47.9551 125.995 37.9447ZM203.1 81.5C203.15 81.7996 203.133 82.2321 203.061 82.7699C202.975 81.3947 202.982 80.7909 203.1 81.5ZM224.863 97.0025C224.766 96.107 224.678 95.2662 224.6 94.5C224.758 95.2088 224.841 96.0664 224.863 97.0025Z"
            />
          </g>
          <g v-if="hair === 'somemessbun'" id="hair / Some-Mess Bun">
            <path
              id="some-Mess Bun"
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M124.616 35.6663C123.316 33.1484 122.6 30.3908 122.6 27.5C122.6 15.6259 134.688 6 149.6 6C164.512 6 176.6 15.6259 176.6 27.5C176.6 30.3054 175.925 32.9853 174.698 35.4424C215.243 45.8759 233.1 82.5451 233.1 121C234.1 121.333 237.1 125.8 241.1 141C244.374 153.44 236.93 164.38 230.698 173.539C227.412 178.368 224.463 182.702 223.6 186.5C221.6 195.3 225.767 204.833 228.1 208.5C229.433 209.167 230.9 210.1 226.1 208.5C220.1 206.5 209.1 200.5 210.1 183C210.64 173.544 214.1 167.592 217.404 161.909C220.214 157.075 222.911 152.435 223.6 146C224.8 134.8 217.1 114.333 213.1 105.5C191.1 105.5 178.6 76.8333 175.1 62.5C175.1 88.5 116.1 102 86.6 105.5C82.6 114.333 74.9 134.8 76.1 146C76.7895 152.435 79.4862 157.075 82.2964 161.909C85.5997 167.592 89.0596 173.544 89.6 183C90.6 200.5 79.6 206.5 73.6 208.5C68.8 210.1 70.2666 209.167 71.6 208.5C73.9333 204.833 78.1 195.3 76.1 186.5C75.2369 182.702 72.2879 178.368 69.0019 173.539C62.77 164.38 55.3262 153.44 58.6 141C62.6 125.8 65.6 121.333 66.6 121C66.6 82.8154 84.5595 46.3916 124.616 35.6663Z"
            />
          </g>
          <g v-if="hair === 'undercut'" id="hair / Undercut">
            <path
              id="smooth_3"
              opacity="0.75"
              d="M233.1 121C233.1 50.2 181.6 39 150.6 39H149.6C118.6 39 67.1 50.2 67.1 121C77.6 121 77.1 121 82.1 98C92.6 98 92.6 98 98.1 79.5C109.933 78.1667 136.8 75.5 149.6 75.5H150.6C163.4 75.5 190.267 78.1667 202.1 79.5C207.6 98 207.6 98 218.1 98C223.1 121 222.6 121 233.1 121Z"
            />
            <path
              id="undercut"
              d="M225.1 79C230.267 76 237.5 65.8 225.1 49C209.974 28.5066 164.373 23.2505 150.1 23.0089C150.453 23.0029 150.786 23 151.1 23H149.1C149.414 23 149.747 23.0029 150.1 23.0089C135.827 23.2505 90.2261 28.5066 75.1 49C62.7 65.8 69.9333 76 75.1 79C78.1 85.6667 85.7 98.9 92.1 98.5C96.6 95.8333 106.3 89.1 109.1 83.5C111.933 86.8333 119.2 94 125.6 96C129.267 93.3333 137 87.1 138.6 83.5C140.767 87.8333 145.9 96.5 149.1 96.5C152.3 96.5 158.767 87.8333 161.6 83.5C163.2 87.1 170.933 93.3333 174.6 96C181 94 188.267 86.8333 191.1 83.5C193.9 89.1 203.6 95.8333 208.1 98.5C214.5 98.9 222.1 85.6667 225.1 79Z"
            />
          </g>
          <g v-if="hair === 'brock'" id="hair / Brock">
            <path
              id="smooth_4"
              opacity="0.75"
              d="M233.1 119C233.1 48.2 181.6 37 150.6 37H149.6C118.6 37 67.1 48.2 67.1 119C77.6 119 77.1 119 82.1 96C92.6 96 92.6 96 98.1 77.5C109.933 76.1667 136.8 73.5 149.6 73.5H150.6C163.4 73.5 190.267 76.1667 202.1 77.5C207.6 96 207.6 96 218.1 96C223.1 119 222.6 119 233.1 119Z"
            />
            <path
              id="brock"
              d="M247.6 62.4935C245.605 82.6286 238.291 98.5541 231.641 104H220.17L218.175 96.4935C212.69 96.4935 207.702 99.5844 202.216 80.1558C186.922 78.9784 155.436 76.6234 151.846 76.6234C135.055 77.2121 100.876 78.7429 98.4824 80.1558C93.9939 92.5195 92.9964 97.3766 82.5233 96.4935L80.5284 104H68.5591C61.9095 98.5541 54.5949 82.6286 52.6 62.4935C56.9223 60.7273 67.4619 57.1948 75.0424 57.1948C75.8737 46.303 79.4312 23.0182 87.0118 17.013C94.1601 17.4545 110.053 19.4857 116.436 24.0779C116.436 21.8701 147.856 2 151.846 2C155.037 2 174.454 16.7186 183.764 24.0779C190.147 19.4857 206.04 17.4545 213.188 17.013C220.769 23.0182 224.326 46.303 225.158 57.1948C232.738 57.1948 243.278 60.7273 247.6 62.4935Z"
            />
          </g>
          <g v-if="hair === 'dino'" id="hair / Dino">
            <path
              id="smooth_5"
              opacity="0.75"
              d="M233.1 120C233.1 49.2 181.6 38 150.6 38H149.6C118.6 38 67.1 49.2 67.1 120C77.6 120 77.1 120 82.1 97C92.6 97 92.6 97 98.1 78.5C109.933 77.1667 136.8 74.5 149.6 74.5H150.6C163.4 74.5 190.267 77.1667 202.1 78.5C207.6 97 207.6 97 218.1 97C223.1 120 222.6 120 233.1 120Z"
            />
            <path
              id="hair"
              d="M203.812 16.1776C217.85 29.8358 225.732 61.9907 226.25 81.5227C208.769 79.549 188.751 75.1062 149.25 75.1062C112.495 75.1062 95.8467 79.2671 73.8543 81.2407C74.3728 61.7087 82.0697 30.7843 96.1072 17.1261C99.585 17.6003 105.733 20.0664 109.906 26.1367C110.775 21.1997 114.875 12.0043 124.739 2.89883C129.798 3.68925 143.717 7.64128 150.546 17.1261C157.375 7.64128 170.292 3.68925 175.35 2.89883C185.214 12.0043 188.716 19.7884 188.716 26.1367C192.89 20.0664 200.335 16.6519 203.812 16.1776Z"
            />
          </g>
        </g>
        <g id="noses">
          <path
            v-if="nose === 'triangle'"
            id="nose-triangle"
            clip-path="url(#clip0)"
            d="M152.583 126L161.243 148.5H143.923L152.583 126Z"
            fill="#FF7E36"
          />
          <ellipse
            v-if="nose === 'nose-oval'"
            id="nose-oval"
            cx="152.583"
            cy="139.5"
            rx="9"
            ry="5.5"
            fill="#FF7E36"
          />
          <rect
            v-if="nose === 'rectangle'"
            id="nose-rectangle"
            x="144.083"
            y="135"
            width="17"
            height="8"
            rx="1"
            fill="#FF7E36"
          />
          <circle
            v-if="nose === 'nose-circle'"
            id="nose-circle"
            cx="152.583"
            cy="139"
            r="7"
            fill="#FF7E36"
          />
        </g>
        <path
          id="body"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M125.936 200.52C115.056 202.609 96.693 211.194 79.083 235C64.1538 255.182 54.4157 267.609 47.1283 276.112C46.4567 276.038 45.7743 276 45.083 276C34.8657 276 26.583 284.283 26.583 294.5C26.583 304.717 34.8657 313 45.083 313C55.3003 313 63.583 304.717 63.583 294.5C63.583 291.965 63.073 289.548 62.15 287.348C76.0007 273.375 96.1034 253.542 108.436 246.5C104.232 260.573 93.7641 318.514 108.436 353.5H144.083L150.333 330.5L157.083 353.5H192.23C206.902 318.514 196.434 260.573 192.23 246.5C203.992 253.216 223.857 272.602 238.171 286.989C237.15 289.285 236.583 291.826 236.583 294.5C236.583 304.717 244.866 313 255.083 313C265.3 313 273.583 304.717 273.583 294.5C273.583 284.283 265.3 276 255.083 276C254.618 276 254.157 276.017 253.701 276.051C245.966 267.008 235.656 254.025 221.583 235C203.324 210.316 184.255 201.997 173.558 200.316C167.076 201.76 158.631 203 149.277 203C140.369 203 132.285 201.875 125.936 200.52Z"
          :fill="skinColor"
        />
        <path
          id="pants"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M199.576 297.17C191.971 297.805 164.625 300 150.083 300C137.092 300 112.131 298.248 101.079 297.422C100.271 316.651 101.718 337.482 108.436 353.5H144.083L150.333 330.5L157.083 353.5H192.231C198.977 337.412 200.408 316.469 199.576 297.17Z"
          fill="#212121"
        />
        <g
          id="neck"
          style="mix-blend-mode: hard-light"
          opacity="0.1"
          filter="url(#filter2_f)"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M181.677 205.12C180.703 210.652 178.229 219.035 177.059 223C176.637 224.429 176.332 226.949 175.978 229.872C175.093 237.173 173.904 246.985 169.833 248.584C164.132 250.822 157.666 252 151.083 252C144.5 252 138.034 250.822 132.333 248.584C126.632 246.346 125.083 233.5 125.083 224C125.083 218.367 123.316 213.428 121.878 209.408C121.339 207.901 120.846 206.523 120.51 205.285C122.855 204.462 125.013 203.89 126.936 203.52C133.285 204.875 141.369 206 150.277 206C159.631 206 168.076 204.76 174.558 203.316C176.637 203.642 179.033 204.22 181.677 205.12Z"
            fill="#700000"
          />
        </g>
        <g id="clothes">
          <!-- <image href="@/assets/cupcake-dress-6.png" width="213" height="163" x="43.58" y="191"></image> -->
        </g>
        <g id="mouth">
          <g v-if="mouth === 'small'" id="small">
            <path
              id="ellipse 19"
              d="M165 158C165 164.075 159.404 169 152.5 169C145.596 169 140 164.075 140 158"
              stroke="#8C501D"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
          <g v-if="mouth === 'surprise'" id="surprise">
            <ellipse
              id="ellipse 28"
              cx="152.5"
              cy="163.5"
              rx="6.5"
              ry="7.5"
              fill="#8C501D"
            />
          </g>
          <g v-if="mouth === 'kissy'" id="kissy">
            <path
              id="vector 37"
              d="M151 160.653C153 158.653 155.5 158.253 157.5 160.653C160 163.653 157 166.653 154 166.153C157.667 167.82 157.784 169.977 157 171.153C156 172.653 153 173.153 151 171.153"
              stroke="#8C501D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g v-if="mouth === 'wide'" id="wide">
            <path
              id="ellipse 19_2"
              d="M172 158C172 164.075 163.493 169 153 169C142.507 169 134 164.075 134 158"
              stroke="#8C501D"
              stroke-width="3"
              stroke-linecap="round"
            />
          </g>
          <g v-if="mouth === 'laugh'" id="laugh">
            <path
              id="ellipse 19_3"
              d="M153 170C163.493 170 172 164.075 172 158C172 158 160 160 153 160C146 160 133.5 158 133.5 158C133.5 164.075 142.507 170 153 170Z"
              fill="white"
              fill-opacity="0.9"
              stroke="#8C501D"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g v-if="mouth === 'droll'" id="droll">
            <path
              id="ellipse 19_4"
              d="M151.34 160.837C155.84 160.837 160.34 159.337 165.34 159.337C173.34 161.837 169.507 167.67 165.34 168.837C166.84 172.837 164.34 176.337 161.84 175.337C159.34 174.337 160.84 170.337 159.34 168.837C158.065 167.562 143.34 170.337 138.84 167.837C134.34 165.337 135.84 159.837 138.84 158.337C141.84 156.837 146.84 160.837 151.34 160.837Z"
              fill="white"
              fill-opacity="0.9"
              stroke="#8C501D"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g v-if="mouth === 'mouth-cat'" id="mouth-cat">
            <path
              id="cat_2"
              d="M127 158C129.333 160.667 135.4 166 141 166C146.6 166 151 162.667 152.5 161C154 162.667 158.4 166 164 166C169.6 166 175.667 160.667 178 158"
              stroke="#8C501D"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <g v-if="mouth === 'bunny'" id="bunny">
            <path
              id="ellipse 20"
              d="M172 160C172 163.314 163.493 166 153 166C142.507 166 134 163.314 134 160"
              stroke="#8C501D"
              stroke-width="3"
              stroke-linecap="round"
            />
            <path
              id="vector 9"
              d="M147 171V166H159V171H147Z"
              fill="white"
              stroke="#8C501D"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </g>
      </g>
      <defs>
        <filter
          id="filter0_f"
          x="61.5798"
          y="136"
          width="179"
          height="41"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter1_f"
          x="61.5798"
          y="136"
          width="179"
          height="41"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur" />
        </filter>
        <filter
          id="filter2_f"
          x="118.51"
          y="201.316"
          width="65.1671"
          height="52.6844"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur" />
        </filter>
        <clipPath id="clip0">
          <rect
            width="33"
            height="33"
            fill="white"
            transform="translate(135.583 123)"
          />
        </clipPath>
      </defs>
    </svg>
    <img
      class="character__clothes"
      :src="`https://res.cloudinary.com/claudiabdm/image/upload/f_auto/animal-crossing/${clothes}.png`"
      width="214"
      height="169"
      :alt="clothes"
    />
  </div>
</template>
<!-- prettier-ignore-end -->

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  computed: {
    skinColor(): string {
      return `#${this.$route.query.skin}`;
    },
    hair(): string {
      return `${this.$route.query.hair}`;
    },
    hairColor(): string {
      return `#${this.$route.query.hairColor}`;
    },
    eyes(): string {
      return `${this.$route.query.eyes}`;
    },
    eyesColor(): string {
      return `#${this.$route.query.eyesColor}`;
    },
    nose(): string {
      return `${this.$route.query.nose}`;
    },
    mouth(): string {
      return `${this.$route.query.mouth}`;
    },
    blush(): string {
      return `${this.$route.query.blush}`;
    },
    backgroundColor(): string {
      return `#${this.$route.query.background}`;
    },
    clothes(): string {
      return `${this.$route.query.clothes}`;
    },
  },
});
</script>
<style lang="scss" scoped>
@use "sass:math";
@use "@/styles/config.scss" as *;

$avatar-size: 200px;

.character {
  position: relative;
  display: flex;
  border: rem(15px) solid #fff;
  border-radius: rem(20px);
  background-color: #fff;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    border-width: rem(20px);
  }

  &__svg {
    @include size(rem($avatar-size), rem($avatar-size));
    #hair,
    #eyes {
      transition: $transition-color;
    }
    @media screen and (min-width: 1024px) {
      @include size(300px, 300px);
    }
  }
  &__clothes {
    position: absolute;
    width: rem(math.div(214px * $avatar-size, 300px));
    height: rem(math.div(163px * $avatar-size, 300px));
    top: rem(math.div(190px * $avatar-size, 300px));
    right: rem(math.div(44px * $avatar-size, 300px));
    z-index: 0;
    @media screen and (min-width: 1024px) {
      width: rem(214px);
      height: rem(163px);
      top: rem(190px);
      right: rem(44px);
      z-index: 0;
    }
  }

  &__background {
    @include size(100%, 100%);
    transition: $transition-color;
  }
}
</style>
