<script setup lang="ts">
const {name, type} = defineProps<{
  name: string,
  type: string,
}>()
</script>

<template>
  <div
      class="flex flex-col justify-center items-center gap-y-4 bg-indigo-600 p-6 rounded-lg shadow-lg shadow-indigo-300  md:gap-y-6">
    <!--          Workout type logo -->
    <div class="flex justify-center items-center bg-white rounded-full w-24 h-24 ring ring-4 ring-indigo-400">
      <svg v-if="type ==='Strength'" class="w-16 h-16 text-indigo-600" width="24px" height="24px" viewBox="0 0 24 24"
           fill="none"
           xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.4 7H4.6C4.26863 7 4 7.26863 4 7.6V16.4C4 16.7314 4.26863 17 4.6 17H7.4C7.73137 17 8 16.7314 8 16.4V7.6C8 7.26863 7.73137 7 7.4 7Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M19.4 7H16.6C16.2686 7 16 7.26863 16 7.6V16.4C16 16.7314 16.2686 17 16.6 17H19.4C19.7314 17 20 16.7314 20 16.4V7.6C20 7.26863 19.7314 7 19.4 7Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M1 14.4V9.6C1 9.26863 1.26863 9 1.6 9H3.4C3.73137 9 4 9.26863 4 9.6V14.4C4 14.7314 3.73137 15 3.4 15H1.6C1.26863 15 1 14.7314 1 14.4Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path
            d="M23 14.4V9.6C23 9.26863 22.7314 9 22.4 9H20.6C20.2686 9 20 9.26863 20 9.6V14.4C20 14.7314 20.2686 15 20.6 15H22.4C22.7314 15 23 14.7314 23 14.4Z"
            stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M8 12H16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
              stroke-linejoin="round"/>
      </svg>


      <svg v-if="type === 'Cardio'" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
           version="1.1" width="256"
           height="256" viewBox="0 0 256 256" xml:space="preserve">

<defs>
</defs>
        <g style="stroke: none; stroke-width: 0; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: none; fill-rule: nonzero; opacity: 1;"
           transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
	<path
      d="M 82.73 85.896 H 56.693 c -6.108 0 -11.892 -2.336 -16.286 -6.579 L 4.769 44.908 C 1.717 41.961 0.024 38.003 0 33.762 c -0.023 -4.241 1.625 -8.218 4.643 -11.198 L 20.134 7.269 c 4.255 -4.201 10.974 -4.256 15.296 -0.12 c 0.407 0.389 0.631 0.932 0.617 1.496 c -0.102 4.007 1.246 7.277 3.896 9.458 c 3.563 2.931 9.203 3.81 15.468 2.41 c 1.6 -0.356 3.245 0.028 4.522 1.053 c 1.288 1.032 2.026 2.57 2.026 4.219 v 19.671 c 0 3.866 3.145 7.011 7.011 7.011 h 2.821 C 81.832 52.466 90 60.634 90 70.673 v 7.954 C 90 82.636 86.739 85.896 82.73 85.896 z M 27.844 8.089 c -1.767 0 -3.533 0.676 -4.899 2.025 L 7.454 25.411 C 5.209 27.627 3.982 30.585 4 33.74 c 0.018 3.155 1.277 6.099 3.547 8.29 L 43.186 76.44 c 3.645 3.519 8.441 5.456 13.508 5.456 H 82.73 c 1.803 0 3.27 -1.467 3.27 -3.27 v -7.954 c 0 -7.834 -6.373 -14.207 -14.207 -14.207 h -2.821 c -6.071 0 -11.011 -4.939 -11.011 -11.011 V 25.783 c 0 -0.429 -0.192 -0.829 -0.527 -1.098 c -0.192 -0.154 -0.596 -0.391 -1.15 -0.27 c -7.476 1.669 -14.36 0.493 -18.88 -3.225 c -3.412 -2.807 -5.253 -6.831 -5.356 -11.681 C 30.8 8.563 29.321 8.089 27.844 8.089 z"
      style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
      transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 88 72.673 H 57.118 c -3.696 0 -7.198 -1.412 -9.861 -3.977 L 3.581 26.633 c -0.796 -0.766 -0.819 -2.032 -0.053 -2.828 c 0.767 -0.796 2.032 -0.82 2.828 -0.053 l 43.677 42.063 c 1.913 1.843 4.43 2.857 7.086 2.857 H 88 c 1.104 0 2 0.896 2 2 S 89.104 72.673 88 72.673 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 58.57 48.791 c -3.442 0.001 -6.57 -2.173 -7.707 -5.588 l -1.426 -4.281 c -0.739 -2.219 -0.489 -4.652 0.686 -6.675 c 1.174 -2.022 3.162 -3.446 5.455 -3.905 l 3.99 -0.799 c 1.08 -0.221 2.137 0.485 2.354 1.568 c 0.217 1.083 -0.485 2.137 -1.568 2.354 l -3.99 0.799 c -1.187 0.238 -2.174 0.945 -2.781 1.991 s -0.731 2.255 -0.35 3.403 l 1.426 4.281 c 0.688 2.063 2.802 3.24 4.917 2.732 c 1.072 -0.256 2.154 0.405 2.411 1.479 s -0.405 2.153 -1.479 2.411 C 59.857 48.717 59.208 48.791 58.57 48.791 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 29.214 20.127 c -4.326 0 -8.857 -1.648 -13.692 -4.96 c -0.911 -0.624 -1.144 -1.869 -0.52 -2.78 c 0.625 -0.91 1.869 -1.144 2.78 -0.52 c 6.555 4.491 12.059 5.399 17.321 2.859 c 0.995 -0.481 2.19 -0.063 2.67 0.932 c 0.48 0.995 0.063 2.19 -0.932 2.67 C 34.361 19.527 31.825 20.127 29.214 20.127 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 21.484 43.098 c -0.202 0 -0.408 -0.031 -0.61 -0.096 c -1.052 -0.337 -1.632 -1.462 -1.295 -2.515 c 2.429 -7.586 -0.093 -14.84 -7.709 -22.177 c -0.795 -0.766 -0.819 -2.032 -0.053 -2.828 s 2.032 -0.818 2.828 -0.053 c 8.701 8.382 11.643 17.223 8.744 26.278 C 23.116 42.557 22.33 43.098 21.484 43.098 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 27.37 48.765 c -0.708 0 -1.395 -0.377 -1.758 -1.043 c -0.529 -0.97 -0.171 -2.185 0.798 -2.713 c 6.179 -3.369 11.251 -4.839 18.09 -5.245 c 1.097 -0.07 2.049 0.775 2.115 1.878 s -0.775 2.05 -1.877 2.115 c -6.197 0.368 -10.799 1.704 -16.413 4.764 C 28.021 48.687 27.693 48.765 27.37 48.765 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 33.774 54.933 c -0.709 0 -1.395 -0.377 -1.758 -1.043 c -0.528 -0.97 -0.17 -2.185 0.799 -2.713 c 6.174 -3.365 11.244 -4.834 18.082 -5.241 c 1.106 -0.072 2.05 0.775 2.115 1.877 c 0.066 1.104 -0.774 2.05 -1.877 2.115 c -6.197 0.369 -10.796 1.703 -16.406 4.76 C 34.425 54.854 34.098 54.933 33.774 54.933 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 40.167 61.051 c -0.71 0 -1.397 -0.379 -1.76 -1.047 c -0.527 -0.971 -0.167 -2.185 0.804 -2.711 c 6.054 -3.284 11.262 -4.786 17.979 -5.184 c 1.082 -0.089 2.049 0.774 2.114 1.878 c 0.065 1.103 -0.775 2.049 -1.878 2.114 c -6.165 0.366 -10.737 1.686 -16.308 4.707 C 40.815 60.974 40.489 61.051 40.167 61.051 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 39.103 85.896 H 2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 37.103 c 1.104 0 2 0.896 2 2 S 40.207 85.896 39.103 85.896 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 24 72.215 H 2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 22 c 1.104 0 2 0.896 2 2 S 25.104 72.215 24 72.215 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
          <path
              d="M 9.916 58.533 H 2 c -1.104 0 -2 -0.896 -2 -2 s 0.896 -2 2 -2 h 7.916 c 1.104 0 2 0.896 2 2 S 11.021 58.533 9.916 58.533 z"
              style="stroke: none; stroke-width: 1; stroke-dasharray: none; stroke-linecap: butt; stroke-linejoin: miter; stroke-miterlimit: 10; fill: rgb(0,0,0); fill-rule: nonzero; opacity: 1;"
              transform=" matrix(1 0 0 1 0 0) " stroke-linecap="round"/>
</g>
</svg>
    </div>
    <!--          Tag -->
    <div>
            <span
                class="transition-all duration-300 ease-out inline-block text-gray-50 bg-indigo-400 px-4 py-1 rounded-full text-sm tracking-wide hover:bg-opacity-90">
              {{ type }}
            </span>
    </div>
    <h3 class="mt-2 md:mt-0 text-gray-100 text-lg font-semibold sm:text-xl">{{ name }}</h3>
  </div>
</template>
