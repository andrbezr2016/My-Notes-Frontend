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
              viewBox="0 0 490.305 490.305"
            >
              <path
                d="M472.469,81.443l-63.6-63.6c-13.1-16.4-53.2-30.2-83.4,0l-290.9,289.9l0,0c-4.4,4.4-6.5,10.1-6.2,15.6l-27.1,141.8 c-4.2,16.2,11.9,26.6,22.9,25l147-29.2c4.2,0,7.3-2.1,10.4-5.2l290.9-289.8C495.469,142.943,495.469,104.443,472.469,81.443z M354.669,46.043c6.3-7.3,18.8-7.3,26.1,0l17.3,17l-289.7,289.7l-30.1-30.4L354.669,46.043z M61.769,364.043l64.4,64.4l-80.1,15.8 L61.769,364.043z M444.369,135.643l-276.8,276.8l-30.1-30.4l290-290l16.8,16.5C453.469,118.343,449.169,130.743,444.369,135.643z"
              />
            </svg>
          </div>
          <p class="pl-2 text-xl text-gray-800">{{ header }}</p>
        </div>
        <p class="text-gray-800">{{ message }}</p>
        <input
          type="text"
          v-model="editedText"
          class="focus:outline-none my-3 w-full rounded border-2 bg-gray-200 px-2 py-2 text-sm leading-none"
        />
        <button
          class="focus:outline-none mt-2 w-full rounded border-2 bg-yellow-500 py-3 font-semibold leading-none text-white hover:bg-yellow-400"
          @click="ok"
        >
          Ok
        </button>
        <button
          class="focus:outline-none mt-2 w-full rounded border-2 bg-gray-500 py-3 font-semibold leading-none text-white hover:bg-gray-400"
          @click="close"
        >
          Cancel
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EditModal",

  data() {
    return {
      editedText: "",
    };
  },

  props: {
    header: { type: String, required: false, default: "" },
    message: { type: String, required: false, default: "" },
    edited: { type: String, required: false, default: "" },
  },

  emits: { ok: null, close: null },

  methods: {
    ok() {
      this.$emit("ok", this.editedText);
      this.editedText = this.edited;
    },

    close() {
      this.$emit("close");
      this.editedText = this.edited;
    },
  },

  watch: {
    edited() {
      this.editedText = this.edited;
    },
  },
};
</script>
