<template>
  <div class="min-h-screen bg-gray-700 w-full py-16 px-4">
    <div class="flex flex-col items-center justify-center">
      <div class="flex-col text-6xl text-white font-serif font-bold">
        My Notes
      </div>

      <div
        class="bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full px-10 pt-2 pb-10 mt-16"
      >
        <div class="grid grid-cols-2">
          <p
            class="text-xl font-semibold leading-none underline text-gray-800 py-4"
          >
            Login
          </p>
          <p
            aria-label="Sign up here"
            class="text-xl font-semibold leading-none text-gray-400 hover:text-gray-800 cursor-pointer py-4"
          >
            Registration
          </p>
        </div>
        <div class="w-full py-2">
          <hr class="w-full bg-gray-400" />
        </div>
        <div>
          <label class="text-sm font-semibold leading-none text-gray-800">
            Email
          </label>
          <input
            aria-label="Enter email adress"
            type="email"
            class="bg-gray-200 border-2 rounded focus:outline-none text-xs font-semibold leading-none text-gray-800 py-3 w-full px-3 mt-2"
          />
        </div>
        <div class="mt-2 w-full">
          <label class="text-sm font-semibold leading-none text-gray-800">
            Password
          </label>
          <div class="relative flex items-center justify-center">
            <input
              aria-label="Enter password"
              type="password"
              class="bg-gray-200 border-2 rounded focus:outline-none text-xs font-semibold leading-none text-gray-800 py-3 w-full px-3 mt-2"
            />
            <div class="absolute right-0 mt-2 mr-3 cursor-pointer">
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
        <div class="mt-8">
          <button
            aria-label="Login"
            class="text-xl font-semibold leading-none text-white focus:outline-none bg-yellow-500 border-2 rounded hover:bg-yellow-400 py-4 w-full"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
};
</script>
