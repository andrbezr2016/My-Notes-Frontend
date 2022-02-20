<template>
  <div class="min-h-screen w-full bg-gray-700 py-16 px-4">
    <div class="flex flex-col items-center justify-center">
      <div class="font-serif text-6xl font-bold text-white">My Notes</div>

      <div
        class="mt-16 w-full rounded bg-white px-10 pt-2 pb-10 shadow md:w-1/2 lg:w-1/3"
      >
        <div class="flex flex-wrap justify-evenly">
          <p
            class="cursor-pointer py-4 text-xl font-semibold leading-none text-gray-400 hover:text-gray-800"
            @click="toLogin"
          >
            Login
          </p>
          <p
            class="py-4 text-xl font-semibold leading-none text-gray-800 underline"
          >
            Registration
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
            v-model="registrationRequest.username"
            type="text"
            class="focus:outline-none mt-2 w-full rounded border-2 bg-gray-200 py-3 px-3 text-sm font-semibold leading-none text-gray-800"
          />
        </div>
        <div class="mt-2 w-full">
          <label class="text-sm font-semibold leading-none text-gray-800">
            Email
          </label>
          <input
            v-model="registrationRequest.email"
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
              v-model="registrationRequest.password"
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
        <div class="mt-8">
          <button
            class="focus:outline-none w-full rounded border-2 bg-yellow-500 py-4 text-xl font-semibold leading-none text-white hover:bg-yellow-400"
            @click="register()"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registration } from "../api/api.js";

export default {
  name: "Registration",

  data() {
    return {
      passwordVisible: false,

      registrationRequest: {
        username: "",
        email: "",
        password: "",
      },

      errors: [],
    };
  },

  methods: {
    register() {
      registration(
        this.registrationRequest,
        () => this.$router.push("/login"),
        (e) => this.parseErrors(e)
      );
    },

    showPassword() {
      this.passwordVisible = !this.passwordVisible;
    },

    toLogin() {
      this.$router.push("/login");
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
};
</script>
