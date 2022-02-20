<template>
  <div
    class="outline-none fixed top-0 h-full w-full overflow-y-auto bg-gray-700 bg-opacity-90"
  >
    <div
      class="mx-auto rounded bg-white px-10 pt-2 pb-10 shadow md:mt-20 md:w-1/2 lg:mt-40 lg:w-1/3"
    >
      <div class="flex text-xl">
        <p class="flex w-full items-center justify-start py-4 leading-none">
          Profile information
        </p>
        <p
          class="flex w-full cursor-pointer items-center justify-end leading-none hover:text-yellow-400"
          @click="close"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            stroke-width="2"
            stroke="currentColor"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </p>
      </div>
      <div class="w-full py-2">
        <hr class="w-full bg-gray-400" />
      </div>
      <div class="mt-2 w-full">
        <label class="text-sm font-semibold leading-none text-gray-800">
          Username
        </label>
        <input
          v-model="editedUser.username"
          type="text"
          class="focus:outline-none mt-2 w-full rounded border-2 bg-gray-200 py-3 px-3 text-sm font-semibold leading-none text-gray-800"
        />
      </div>
      <div class="mt-2 w-full">
        <label class="text-sm font-semibold leading-none text-gray-800">
          Email
        </label>
        <input
          disabled
          :value="currentUser.email"
          type="email"
          class="focus:outline-none mt-2 w-full rounded border-2 bg-gray-200 py-3 px-3 text-sm font-semibold leading-none text-gray-800"
        />
      </div>
      <div class="mt-2 w-full">
        <label class="text-sm font-semibold leading-none text-gray-800">
          Password
        </label>
        <div class="relative flex items-center justify-center">
          <input
            v-model="editedUser.password"
            :type="passwordVisible ? 'text' : 'password'"
            class="focus:outline-none mt-2 w-full rounded border-2 bg-gray-200 py-3 pl-3 pr-9 text-sm font-semibold leading-none text-gray-800"
          />
          <div
            @click="showPassword"
            class="absolute right-0 mt-2 mr-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#4b5563"
            >
              <path
                d="M15.1643 12.0519C15.1643 13.7979 13.7483 15.2139 12.0023 15.2139C10.2563 15.2139 8.84033 13.7979 8.84033 12.0519C8.84033 10.3049 10.2563 8.88989 12.0023 8.88989C13.7483 8.88989 15.1643 10.3049 15.1643 12.0519Z"
              />
              <path
                d="M2.75024 12.052C2.75024 15.332 6.89224 19.354 12.0022 19.354C17.1112 19.354 21.2542 15.335 21.2542 12.052C21.2542 8.769 17.1112 4.75 12.0022 4.75C6.89224 4.75 2.75024 8.772 2.75024 12.052Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <div
        v-show="errors.length"
        class="mt-8 w-full overflow-hidden rounded bg-red-400 font-semibold text-white"
      >
        <ul>
          <li v-for="(error, index) in errors" :key="index" class="p-2">
            {{ error }}
          </li>
        </ul>
      </div>
      <div
        v-show="isUpdated"
        class="mt-8 w-full rounded bg-green-400 font-semibold text-white"
      >
        <p class="p-2">Updated</p>
      </div>
      <div class="mt-8">
        <label
          :class="{ 'bg-gray-200': icon !== null }"
          class="focus:outline-none flex h-32 w-full flex-col rounded border-4 border-dashed hover:border-gray-400 hover:bg-gray-200"
        >
          <div class="flex flex-col items-center justify-center pt-7">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-12 w-12 text-gray-400"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
              />
            </svg>
            <p class="pt-1 text-sm tracking-wider text-gray-400">
              {{ icon !== null ? icon.name : "Select Profile Icon" }}
            </p>
          </div>
          <input
            type="file"
            accept="image/jpeg"
            ref="icon"
            @change="upload"
            class="opacity-0"
          />
        </label>
        <button
          @click="save"
          class="focus:outline-none mt-2 w-full rounded border-2 bg-yellow-500 py-4 font-semibold leading-none text-white hover:bg-yellow-400"
        >
          Save
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { editCurrentUser } from "../api/api.js";

export default {
  name: "EditUserModal",

  data() {
    return {
      passwordVisible: false,

      editedUser: { username: this.currentUser.username, password: null },
      icon: null,

      updatedUser: this.currentUser,
      isUpdated: false,

      errors: [],
    };
  },

  props: { currentUser: { type: Object, required: true } },

  emits: { update: null, close: null },

  methods: {
    close() {
      this.$emit("close");
      this.editedUser.username = this.currentUser.username;
      this.editedUser.password = null;
      this.icon = null;
      this.isUpdated = false;
      this.errors = [];
    },

    showPassword() {
      this.passwordVisible = !this.passwordVisible;
    },

    save() {
      if (this.editedUser.password === "") {
        this.editedUser.password = null;
      }
      if (
        this.editedUser.username === this.currentUser.username &&
        this.editedUser.password === null &&
        this.icon === null
      ) {
        this.isUpdated = false;
        this.errors = [];
        return;
      }
      editCurrentUser(
        this.editedUser,
        this.icon,
        (data) => {
          this.updatedUser = data;
          this.$emit("update", this.updatedUser);
          this.isUpdated = true;
          this.errors = [];
        },
        (e) => {
          this.isUpdated = false;
          this.parseErrors(e);
        }
      );
    },

    upload() {
      this.icon = this.$refs.icon.files[0];
      this.$refs.icon.value = null;
    },

    parseErrors(e) {
      if (e.response) {
        for (let i = 0; i < e.response.data.length; i++) {
          e.response.data[i] =
            e.response.data[i].field.toUpperCase() +
            ": " +
            e.response.data[i].message;
        }
        this.errors = e.response.data;
      } else if (e.request) {
        this.errors = e.response.data;
      } else {
        this.errors = ["Unknown Error"];
      }
    },
  },

  watch: {
    currentUser() {
      this.editedUser.username = this.currentUser.username;
      this.editedUser.password = null;
      this.icon = null;
    },
  },
};
</script>
