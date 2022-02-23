<template>
  <div class="min-h-screen w-full bg-gray-700 py-16 px-4">
    <div class="flex flex-col items-center justify-center">
      <div
        class="mt-16 w-full rounded bg-white px-10 pt-2 pb-10 shadow md:w-1/2 lg:w-1/3"
      >
        <div class="flex flex-col items-center">
          <h1 class="text-9xl font-bold text-yellow-500">404</h1>
          <h6
            class="mb-2 text-center text-2xl font-bold text-gray-800 md:text-3xl"
          >
            Page not found
          </h6>
          <p class="mb-8 text-center text-gray-600 md:text-lg">
            The page you’re looking for doesn’t exist.
          </p>
          <p
            @click="toRoot"
            class="cursor-pointer px-6 py-2 text-lg font-semibold text-gray-800 hover:text-yellow-400"
          >
            Return
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageNotFound",

  methods: {
    toRoot() {
      this.$router.push("/");
    },
  },
};
</script>
