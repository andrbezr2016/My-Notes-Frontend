<template>
  <div
    @click="close"
    class="outline-none fixed top-0 h-full w-full overflow-y-auto bg-gray-700 bg-opacity-90"
  >
    <div @click.stop class="container mx-auto mt-40">
      <div
        class="mx-auto my-6 mb-4 w-11/12 rounded-md bg-white py-4 px-4 shadow sm:px-10 sm:py-6 md:w-5/12"
      >
        <div class="flex items-center pb-3">
          <div class="-ml-1 text-gray-600">
            <svg
              class="mx-1"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              fill="currentColor"
              viewBox="0 0 330 330"
            >
              <path
                d="M240,121.076V90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15 v45H45H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15v185c0,8.284,6.716,15,15,15h60h37.596c19.246,24.347,49.031,40,82.404,40 c57.897,0,105-47.103,105-105C330,172.195,290.817,128.377,240,121.076z M90,30h90v30h-15h-60H90V30z M105,260H60V90h15h30h60h30 h15v31.076c-50.817,7.301-90,51.119-90,103.924c0,12.268,2.122,24.047,6.006,35H105z M225,300c-41.355,0-75-33.645-75-75 s33.645-75,75-75s75,33.645,75,75S266.355,300,225,300z"
              />
              <path
                d="M256.819,193.181c-5.857-5.857-15.355-5.857-21.213,0L225,203.787l-10.606-10.606c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.857-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394L225,246.213l10.606,10.606c2.929,2.929,6.768,4.394,10.606,4.394 s7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213L246.213,225l10.606-10.606 C262.678,208.536,262.678,199.038,256.819,193.181z"
              />
            </svg>
          </div>
          <p class="pl-2 text-xl text-gray-800">{{ header }}</p>
        </div>
        <p class="pb-3 text-gray-800">{{ message }}</p>
        <button
          class="focus:outline-none mt-2 w-full rounded border-2 bg-yellow-500 py-3 font-semibold leading-none text-white transition-colors hover:bg-yellow-400"
          @click="ok"
        >
          Yes
        </button>
        <button
          class="focus:outline-none mt-2 w-full rounded border-2 bg-gray-500 py-3 font-semibold leading-none text-white transition-colors hover:bg-gray-400"
          @click="close"
        >
          No
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DeleteModal",

  props: {
    header: { type: String, required: false, default: "" },
    message: { type: String, required: false, default: "" },
  },

  emits: { ok: null, close: null },

  methods: {
    ok() {
      this.$emit("ok");
    },

    close() {
      this.$emit("close");
    },
  },
};
</script>
