<template>
  <nav class="z-10 h-auto w-full bg-gray-800 text-white shadow">
    <div class="flex w-full flex-wrap justify-between">
      <div class="flex items-center p-4 font-serif text-2xl font-bold">
        My Notes
      </div>
      <div class="flex items-center p-4">
        <div class="flex cursor-pointer items-center">
          <div
            class="flex items-center hover:text-yellow-400"
            @click="visibleUserEdit"
          >
            <img
              class="h-12 w-12 rounded-full object-cover"
              :src="
                user.icon === null
                  ? require('@/assets/icon.png')
                  : 'data:image/jpeg;base64,' + user.icon
              "
              alt="avatar"
            />
            <p class="mx-3">{{ user.username }}</p>
          </div>
          <svg
            class="hover:text-yellow-400"
            @click="logout"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 96.943 96.943"
            fill="currentColor"
          >
            <path
              d="M61.168,83.92H11.364V13.025H61.17c1.104,0,2-0.896,2-2V3.66c0-1.104-0.896-2-2-2H2c-1.104,0-2,0.896-2,2v89.623 c0,1.104,0.896,2,2,2h59.168c1.105,0,2-0.896,2-2V85.92C63.168,84.814,62.274,83.92,61.168,83.92z"
            />
            <path
              d="M96.355,47.058l-26.922-26.92c-0.75-0.751-2.078-0.75-2.828,0l-6.387,6.388c-0.781,0.781-0.781,2.047,0,2.828 l12.16,12.162H19.737c-1.104,0-2,0.896-2,2v9.912c0,1.104,0.896,2,2,2h52.644L60.221,67.59c-0.781,0.781-0.781,2.047,0,2.828 l6.387,6.389c0.375,0.375,0.885,0.586,1.414,0.586c0.531,0,1.039-0.211,1.414-0.586l26.922-26.92 c0.375-0.375,0.586-0.885,0.586-1.414C96.943,47.941,96.73,47.433,96.355,47.058z"
            />
          </svg>
        </div>
      </div>
    </div>
  </nav>

  <edit-user-modal
    class="z-20"
    v-show="isVisibleUserEdit"
    @update="updateUser"
    @close="visibleUserEdit"
    :currentUser="user"
  />
</template>

<script>
import EditUserModal from "../modals/EditUserModal.vue";
import { logout, getCurrentUser } from "../api/api.js";

export default {
  name: "HeaderPanel",

  components: {
    EditUserModal,
  },

  data() {
    return {
      // User
      user: {
        id: null,
        username: "",
        email: "",
        icon: null,
        createdAt: null,
        modifiedAt: null,
      },

      // Popup Visibility
      isVisibleUserEdit: false,
    };
  },

  emits: { showErrors: null },

  mounted() {
    this.getUser();
  },

  methods: {
    logout() {
      logout(
        () => this.$router.push("/login"),
        (e) => {
          console.log(e);
        }
      );
    },

    getUser() {
      getCurrentUser(
        (data) => {
          this.user = data;
        },
        (e) => {
          this.$emit("showErrors", e);
        }
      );
    },

    updateUser(updatedUser) {
      this.user = updatedUser;
    },

    visibleUserEdit() {
      this.isVisibleUserEdit = !this.isVisibleUserEdit;
    },
  },
};
</script>
