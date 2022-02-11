<template>
  <login v-if="false" />
  <registration v-if="false" />
  <my-notes v-if="true" />
</template>

<script>
import Login from "./pages/Login.vue";
import Registration from "./pages/Registration.vue";
import MyNotes from "./pages/MyNotes.vue";

export default {
  name: "App",
  components: {
    Login,
    Registration,
    MyNotes,
  },
};
</script>
