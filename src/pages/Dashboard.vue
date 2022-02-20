<template>
  <div
    class="flex h-screen max-h-screen flex-col bg-white font-semibold text-gray-800"
  >
    <!-- Navigation starts -->
    <header-panel></header-panel>
    <!-- Navigation ends -->
    <!-- Main starts -->
    <div class="grid h-full flex-grow gap-2 md:grid-cols-3 lg:grid-cols-5">
      <!-- Left starts -->
      <div class="h-full bg-gray-100 px-4 text-gray-600">
        <div class="my-8 flex flex-col">
          <div
            class="focus:outline-none my-2 cursor-pointer leading-none hover:text-yellow-400 hover:underline"
            @click="selectCategory('all')"
            :class="{
              'text-yellow-400 underline': selectedMode === 'all',
            }"
          >
            All Notes
          </div>
          <hr class="my-4 bg-gray-400" />
          <div class="focus:outline-none my-2 leading-none">Categories</div>
          <div class="my-2 overflow-y-scroll">
            <ul class="max-h-80">
              <li
                v-for="category in categories"
                :key="category.id"
                class="my-2 flex justify-between py-2 pr-2 leading-none"
              >
                <div
                  class="flex cursor-pointer items-center justify-start overflow-hidden hover:text-yellow-400 hover:underline"
                  @click="selectCategory('categories', category)"
                  :class="{
                    'text-yellow-400 underline':
                      selectedCategory.id === category.id,
                  }"
                >
                  {{ category.title }}
                </div>
                <div class="flex items-center justify-end">
                  <svg
                    class="mx-1 cursor-pointer hover:text-yellow-400"
                    @click.stop="
                      (editedCategory = category), visibleCategoryEdit()
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 490.305 490.305"
                  >
                    <path
                      d="M472.469,81.443l-63.6-63.6c-13.1-16.4-53.2-30.2-83.4,0l-290.9,289.9l0,0c-4.4,4.4-6.5,10.1-6.2,15.6l-27.1,141.8 c-4.2,16.2,11.9,26.6,22.9,25l147-29.2c4.2,0,7.3-2.1,10.4-5.2l290.9-289.8C495.469,142.943,495.469,104.443,472.469,81.443z M354.669,46.043c6.3-7.3,18.8-7.3,26.1,0l17.3,17l-289.7,289.7l-30.1-30.4L354.669,46.043z M61.769,364.043l64.4,64.4l-80.1,15.8 L61.769,364.043z M444.369,135.643l-276.8,276.8l-30.1-30.4l290-290l16.8,16.5C453.469,118.343,449.169,130.743,444.369,135.643z"
                    />
                  </svg>
                  <svg
                    class="mx-1 cursor-pointer hover:text-yellow-400"
                    @click.stop="
                      (deletedCategory = category), visibleCategoryDelete()
                    "
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="currentColor"
                    viewBox="0 0 348.333 348.334"
                  >
                    <path
                      d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                    />
                  </svg>
                </div>
              </li>
            </ul>
          </div>
          <div
            class="focus:outline-none my-2 cursor-pointer leading-none hover:text-yellow-400 hover:underline"
            @click="visibleCategoryAdd"
          >
            Add Category
          </div>
          <hr class="my-4 bg-gray-400" />
          <div
            class="focus:outline-none my-2 cursor-pointer leading-none hover:text-yellow-400 hover:underline"
            @click="selectCategory('trash')"
            :class="{
              'text-yellow-400 underline': selectedMode === 'trash',
            }"
          >
            Trash
          </div>
        </div>
      </div>
      <!-- Left ends -->
      <!-- Middle starts -->
      <div class="h-full px-4">
        <div class="flex h-full max-h-full flex-col justify-between">
          <div class="my-4 flex w-full">
            <input
              v-model="filter"
              class="focus:outline-none flex w-full items-center justify-start rounded border-2 border-gray-100 bg-gray-100 px-3 py-3 text-sm leading-none focus:border-gray-400"
              type="search"
              placeholder="Search"
            />
            <span class="flex items-center justify-end px-3 text-gray-600">
              <div class="relative flex items-center">
                <svg
                  class="w-6 cursor-pointer"
                  @click="visibleDropdownSort"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 563.336 563.336"
                  fill="currentColor"
                >
                  <path
                    d="M327.941,396.889h-52.895V11.151C275.047,4.994,270.053,0,263.896,0H91.759c-6.157,0-11.15,4.994-11.15,11.151v385.738 H27.713c-15.392,0-19.051,8.824-8.164,19.712L158.118,555.17c10.887,10.888,28.531,10.888,39.419,0l138.568-138.569 C346.993,405.713,343.34,396.889,327.941,396.889z"
                  />
                  <path
                    d="M488.488,245.021c-0.931-2.319-3.183-3.843-5.68-3.843h-32.602c-2.521,0-4.786,1.548-5.704,3.898L385.029,397.77 c-0.734,1.885-0.49,4.009,0.648,5.673c1.139,1.671,3.029,2.669,5.049,2.669h32.706c2.576,0,4.871-1.609,5.752-4.033l11.139-30.655 h52.54l11.824,30.759c0.905,2.362,3.183,3.923,5.71,3.923h33.537c2.032,0,3.93-1.01,5.067-2.692 c1.139-1.683,1.371-3.818,0.612-5.704L488.488,245.021z M478.378,333.461h-24.119l11.94-32.804L478.378,333.461z"
                  />
                  <path
                    d="M399.19,143.722v27.809c0,3.378,2.742,6.12,6.12,6.12h124.053c3.378,0,6.12-2.742,6.12-6.12v-25.729 c0-3.378-2.742-6.12-6.12-6.12h-74.016l75.539-93.037c0.888-1.089,1.371-2.454,1.371-3.855V18.837c0-3.378-2.741-6.12-6.12-6.12 H414.375c-3.379,0-6.12,2.742-6.12,6.12V44.67c0,3.378,2.741,6.12,6.12,6.12h58.311l-72.13,89.083 C399.675,140.962,399.19,142.321,399.19,143.722z"
                  />
                </svg>
                <ul
                  v-show="isVisibleDropdownSort"
                  class="absolute top-8 right-0 mt-2 rounded bg-white px-4 py-2 shadow"
                >
                  <li
                    class="flex w-full whitespace-nowrap py-2 px-2 text-sm font-bold"
                  >
                    <div class="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 15.86 15.86"
                        fill="currentColor"
                      >
                        <rect x="0" y="12" width="16" height="3" />
                        <rect x="0" y="6" width="8" height="3" />
                        <rect x="0" y="0" width="4" height="3" />
                        <path
                          d="M10.174,5.738l2.639,2.567c0,0,0.177,0.204,0.357,0.021c0.253-0.251,2.574-2.65,2.574-2.65 s0.321-0.319-0.105-0.319c-0.424,0-1.104,0-1.104,0s0-0.185,0-0.469c0-0.873,0-2.571,0-3.222c0,0,0.004-0.153-0.192-0.153 c-0.195,0-2.44,0-2.716,0c-0.278,0-0.228,0.183-0.228,0.183c0,0.667,0,2.312,0,3.217c0,0.315,0,0.52,0,0.52s-0.848,0-1.196,0 C9.851,5.433,10.174,5.738,10.174,5.738z"
                        />
                      </svg>
                    </div>
                    <div class="mx-2 flex items-center">Sort By:</div>
                  </li>
                  <li
                    @click="sortBy('name')"
                    :class="{
                      'text-yellow-400': sortParameter === 'name',
                    }"
                    class="w-full cursor-pointer whitespace-nowrap py-2 px-2 text-sm hover:text-yellow-400"
                  >
                    Name
                  </li>
                  <li
                    @click="sortBy('creationDate')"
                    :class="{
                      'text-yellow-400': sortParameter === 'creationDate',
                    }"
                    class="w-full cursor-pointer whitespace-nowrap py-2 px-2 text-sm hover:text-yellow-400"
                  >
                    Creation Date
                  </li>
                  <li
                    @click="sortBy('modificationDate')"
                    :class="{
                      'text-yellow-400': sortParameter === 'modificationDate',
                    }"
                    class="w-full cursor-pointer whitespace-nowrap py-2 px-2 text-sm hover:text-yellow-400"
                  >
                    Modification Date
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div class="my-4 h-full max-h-full">
            <ul class="flex h-96 flex-col overflow-y-scroll text-sm">
              <li v-for="note in sortedNotes" :key="note.id" class="m-1 flex">
                <div
                  @click="selectNote(note)"
                  :class="{
                    'bg-gray-400 text-white': selectedNote.id === note.id,
                  }"
                  class="flex w-full cursor-pointer items-center justify-start overflow-hidden rounded bg-gray-100 px-3 py-2 hover:bg-gray-400 hover:text-white"
                >
                  {{ note.title }}
                </div>
                <div class="mx-2 flex items-center justify-end">
                  <input
                    v-model="selectedNoteIds"
                    :value="note.id"
                    type="checkbox"
                    class="h-4 w-4"
                  />
                </div>
              </li>
            </ul>
          </div>
          <div class="my-4">
            <button
              @click="addNote"
              v-show="selectedMode !== 'trash'"
              class="focus:outline-none w-full rounded border-2 bg-yellow-500 py-3 font-semibold leading-none text-white transition-colors hover:bg-yellow-400"
            >
              Add
            </button>
            <button
              :disabled="!selectedNoteIds.length"
              @click="restoreNote"
              v-show="selectedMode === 'trash'"
              :class="{
                'cursor-not-allowed': !selectedNoteIds.length,
              }"
              class="focus:outline-none w-full rounded border-2 bg-yellow-500 py-3 font-semibold leading-none text-white transition-colors hover:bg-yellow-400"
            >
              Restore
            </button>
            <button
              :disabled="!selectedNoteIds.length"
              @click="visibleNoteDelete"
              :class="{
                'cursor-not-allowed': !selectedNoteIds.length,
              }"
              class="focus:outline-none w-full rounded border-2 bg-gray-500 py-3 font-semibold leading-none text-white transition-colors hover:bg-gray-400"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <!-- Middle ends -->
      <!-- Right starts -->
      <div class="h-full px-4 md:col-span-1 lg:col-span-3">
        <div class="flex h-full flex-col justify-between">
          <div class="my-4 flex w-full">
            <input
              class="focus:outline-none flex w-full items-center justify-start rounded border-2 border-gray-100 bg-gray-100 px-3 py-3 text-sm leading-none focus:border-gray-400"
              type="text"
              placeholder="Title"
              v-model="currentTitle"
              :disabled="selectedMode === 'trash'"
            />
            <span
              class="relative flex items-center justify-end px-3 text-gray-600"
            >
              <svg
                class="w-6 cursor-pointer"
                @click="visibleDropdownSelect"
                width="26"
                height="26"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="10" cy="15" r="2" fill="currentColor" />
                <circle cx="10" cy="10" r="2" fill="currentColor" />
                <circle cx="10" cy="5" r="2" fill="currentColor" />
              </svg>
              <ul
                v-show="isVisibleDropdownSelect"
                class="absolute top-12 right-0 mt-2 rounded bg-white px-4 py-2 shadow"
              >
                <li
                  class="w-full whitespace-nowrap py-2 px-2 text-sm"
                  :class="{
                    'text-gray-400': currentCategoryTitle === null,
                  }"
                >
                  Category:
                  {{
                    currentCategoryTitle !== null
                      ? currentCategoryTitle
                      : "None"
                  }}
                </li>
                <li
                  class="w-full cursor-pointer whitespace-nowrap py-2 px-2 text-sm hover:text-yellow-400"
                  v-show="selectedMode !== 'trash'"
                  @click="visibleCategorySelect"
                >
                  Change Category
                </li>
              </ul>
            </span>
          </div>
          <div class="my-4 h-full">
            <textarea
              type="text"
              placeholder="Content"
              v-model="currentContent"
              :disabled="selectedMode === 'trash'"
              class="focus:outline-none h-full w-full resize-none rounded border-2 border-gray-100 bg-gray-100 px-3 py-3 text-sm leading-none focus:border-gray-400"
            ></textarea>
          </div>
          <div v-show="selectedMode !== 'trash'" class="my-4">
            <button
              @click="editNote"
              class="focus:outline-none w-full rounded border-2 bg-yellow-500 py-3 font-semibold leading-none text-white transition-colors hover:bg-yellow-400"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <!-- Right ends -->
    </div>
    <!-- Main ends -->

    <edit-modal
      v-show="isVisibleCategoryAdd"
      @ok="addCategory"
      @close="visibleCategoryAdd"
      :header="'Add Category'"
      :message="'Enter the category title:'"
    />
    <delete-modal
      v-show="isVisibleCategoryDelete"
      @ok="deleteCategory"
      @close="visibleCategoryDelete"
      :header="'Delete Category'"
      :message="'Do you want to delete the category?'"
    />
    <edit-modal
      v-show="isVisibleCategoryEdit"
      @ok="editCategory"
      @close="visibleCategoryEdit"
      :header="'Edit Category'"
      :message="'Enter the category title:'"
      :edited="editedCategory.title"
    />
    <select-modal
      v-show="isVisibleCategorySelect"
      @ok="noteCategorySelect"
      @close="visibleCategorySelect"
      :header="'Select Category'"
      :message="'Select a category for the note:'"
      :categories="categories"
    />
    <delete-modal
      v-show="isVisibleNoteDelete"
      @ok="deleteNote"
      @close="visibleNoteDelete"
      :header="'Delete Selected Notes'"
      :message="'Do you want to delete selected notes?'"
    />
    <load-bar v-show="isVisibleLoadBar" />
    <errors-alert
      v-show="isVisibleErrors"
      @close="closeErrors"
      :errors="errors"
    />
  </div>
</template>

<script>
import HeaderPanel from "./HeaderPanel.vue";
import EditModal from "../modals/EditModal.vue";
import DeleteModal from "../modals/DeleteModal.vue";
import SelectModal from "../modals/SelectModal.vue";
import LoadBar from "../modals/LoadBar.vue";
import ErrorsAlert from "../modals/ErrorsAlert.vue";
import {
  getUserCategories,
  addCategory,
  editCategory,
  deleteCategory,
  getUserNotes,
  addNote,
  editNote,
  deleteNote,
  restoreNote,
  getDeletedUserNotes,
} from "../api/api";

export default {
  name: "MyNotes",

  components: {
    HeaderPanel,
    EditModal,
    DeleteModal,
    SelectModal,
    LoadBar,
    ErrorsAlert,
  },

  data() {
    return {
      // Categories
      categories: [],
      selectedMode: "",
      selectedCategory: {
        id: null,
        title: null,
        createdAt: null,
        modifiedAt: null,
      },
      emptyCategory: {
        id: null,
        title: null,
        createdAt: null,
        modifiedAt: null,
      },
      editedCategory: {
        id: null,
        title: null,
        createdAt: null,
        modifiedAt: null,
      },
      deletedCategory: {
        id: null,
        title: null,
        createdAt: null,
        modifiedAt: null,
      },

      // Notes
      notes: [],
      selectedNote: {
        id: null,
        categoryId: null,
        title: null,
        content: null,
        deletedAt: null,
        createdAt: null,
        modifiedAt: null,
      },
      emptyNote: {
        id: null,
        categoryId: null,
        title: null,
        content: null,
        deletedAt: null,
        createdAt: null,
        modifiedAt: null,
      },
      selectedNoteIds: [],

      // Note editing
      currentTitle: "",
      currentContent: "",
      currentCategoryId: null,
      currentCategoryTitle: null,

      // Filtering and sorting
      filter: "",
      sortParameter: "name",
      sortReverse: false,

      // Popup Visibility
      isVisibleDropdownSort: false,
      isVisibleDropdownSelect: false,
      isVisibleCategoryAdd: false,
      isVisibleCategoryDelete: false,
      isVisibleCategoryEdit: false,
      isVisibleCategorySelect: false,
      isVisibleNoteDelete: false,
      isVisibleLoadBar: false,
      isVisibleErrors: false,

      errors: [],
    };
  },

  mounted() {
    this.getCategories();
  },

  computed: {
    sortedNotes() {
      const direction = this.sortReverse === false ? 1 : -1;
      switch (this.sortParameter) {
        case "name":
          return [...this.filteredNotes].sort((a, b) =>
            a.title.toLowerCase() > b.title.toLowerCase()
              ? direction
              : -direction
          );
        case "creationDate":
          return [...this.filteredNotes].sort((a, b) =>
            a.createdAt > b.createdAt ? direction : -direction
          );
        case "modificationDate":
          return [...this.filteredNotes].sort((a, b) =>
            a.modifiedAt > b.modifiedAt ? direction : -direction
          );
        default:
          return this.filteredNotes;
      }
    },

    filteredNotes() {
      return this.notes.filter((note) =>
        note.title.toLowerCase().includes(this.filter.toLowerCase())
      );
    },
  },

  methods: {
    getCategories() {
      getUserCategories(
        (data) => {
          this.categories = data;
        },
        (e) => {
          console.log(e);
        }
      );
    },

    addCategory(title) {
      addCategory(
        { title: title },
        (data) => {
          this.categories.push(data);
        },
        (e) => {
          this.showErrors(e);
        }
      );
      this.visibleCategoryAdd();
    },

    editCategory(title) {
      editCategory(
        this.editedCategory.id,
        { title: title },
        (data) => {
          this.editedCategory.id = data.id;
          this.editedCategory.title = data.title;
          this.editedCategory.createdAt = data.createdAt;
          this.editedCategory.modifiedAt = data.modifiedAt;
        },
        (e) => {
          this.showErrors(e);
        }
      );
      this.visibleCategoryEdit();
    },

    deleteCategory() {
      deleteCategory(
        this.deletedCategory.id,
        (data) => {
          this.categories = this.categories.filter(
            (category) => category.id !== data.id
          );
          if (this.deletedCategory.id === this.selectedCategory.id) {
            this.selectedMode = "";
            this.selectedCategory = this.emptyCategory;
            this.notes = [];
          }
        },
        (e) => {
          this.showErrors(e);
        }
      );
      this.visibleCategoryDelete();
    },

    selectCategory(mode, category) {
      if (mode === "categories") {
        this.selectedMode = category.id;
        this.selectedCategory = category;
        this.getNotes(this.selectedCategory.id);
      } else {
        this.selectedMode = mode;
        this.selectedCategory = this.emptyCategory;
        if (this.selectedMode === "all") {
          this.getNotes(null);
        } else if (this.selectedMode === "trash") {
          this.getDeletedNotes();
        }
      }
    },

    getNotes(categoryId) {
      getUserNotes(
        categoryId,
        (data) => {
          this.notes = data;
        },
        (e) => {
          console.log(e);
        }
      );
    },

    getDeletedNotes() {
      getDeletedUserNotes(
        (data) => {
          this.notes = data;
        },
        (e) => {
          console.log(e);
        }
      );
    },

    addNote() {
      this.selectedNote = this.emptyNote;
    },

    editNote() {
      if (this.selectedNote.id === this.emptyNote.id) {
        addNote(
          {
            categoryId: this.currentCategoryId,
            title: this.currentTitle,
            content: this.currentContent,
          },
          (data) => {
            this.currentTitle = "";
            this.currentContent = "";
            if (
              this.selectedMode !== "" &&
              (this.selectedMode === "all" ||
                this.selectedCategory.id === data.categoryId)
            ) {
              this.notes.push(data);
            }
          },
          (e) => {
            this.showErrors(e);
          }
        );
      } else {
        editNote(
          this.selectedNote.id,
          {
            categoryId: this.currentCategoryId,
            title: this.currentTitle,
            content: this.currentContent,
          },
          (data) => {
            this.selectedNote.id = data.id;
            this.selectedNote.categoryId = data.categoryId;
            this.selectedNote.title = data.title;
            this.selectedNote.content = data.content;
            this.selectedNote.deletedAt = data.deletedAt;
            this.selectedNote.createdAt = data.createdAt;
            this.selectedNote.modifiedAt = data.modifiedAt;
            this.selectedNote = this.emptyNote;
            if (
              this.selectedMode !== "all" &&
              this.selectedCategory.id !== data.categoryId
            ) {
              this.notes = this.notes.filter((note) => note.id !== data.id);
            }
          },
          (e) => {
            this.showErrors(e);
          }
        );
      }
    },

    deleteNote() {
      deleteNote(
        this.selectedNoteIds,
        (data) => {
          this.selectedNote = this.emptyNote;
          this.notes = this.notes.filter((note) => note.id !== data.id);
        },
        (e) => {
          this.showErrors(e);
        }
      );
      this.selectedNoteIds = [];
      this.visibleNoteDelete();
    },

    restoreNote() {
      restoreNote(
        this.selectedNoteIds,
        (data) => {
          this.selectedNote = this.emptyNote;
          this.notes = this.notes.filter((note) => note.id !== data.id);
        },
        (e) => {
          this.showErrors(e);
        }
      );
      this.selectedNoteIds = [];
    },

    selectNote(note) {
      this.selectedNote = note;
    },

    noteCategorySelect(selectedId, selectedTitle) {
      this.currentCategoryId = selectedId;
      this.currentCategoryTitle = selectedTitle;
      this.visibleCategorySelect();
    },

    sortBy(parameter) {
      this.sortReverse =
        this.sortParameter === parameter ? !this.sortReverse : false;
      this.sortParameter = parameter;
    },

    visibleDropdownSort() {
      this.isVisibleDropdownSort = !this.isVisibleDropdownSort;
    },

    visibleDropdownSelect() {
      this.isVisibleDropdownSelect = !this.isVisibleDropdownSelect;
    },

    visibleCategoryAdd() {
      this.isVisibleCategoryAdd = !this.isVisibleCategoryAdd;
    },

    visibleCategoryDelete() {
      this.isVisibleCategoryDelete = !this.isVisibleCategoryDelete;
    },

    visibleCategoryEdit() {
      this.isVisibleCategoryEdit = !this.isVisibleCategoryEdit;
    },

    visibleCategorySelect() {
      this.isVisibleCategorySelect = !this.isVisibleCategorySelect;
    },

    visibleNoteDelete() {
      this.isVisibleNoteDelete = !this.isVisibleNoteDelete;
    },

    closeErrors() {
      this.isVisibleErrors = false;
      this.errors = [];
    },

    showErrors(e) {
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
      this.isVisibleErrors = true;
    },
  },

  watch: {
    selectedMode() {
      if (this.selectedCategory.id === this.emptyCategory.id) {
        this.currentCategoryId = null;
        this.currentCategoryTitle = null;
      } else {
        this.currentCategoryId = this.selectedCategory.id;
        this.currentCategoryTitle = this.selectedCategory.title;
      }
      this.selectedNote = this.emptyNote;
      this.selectedNoteIds = [];
      this.filter = "";
      this.sortParameter = "name";
      this.sortReverse = false;
    },

    selectedNote() {
      if (this.selectedNote.id === this.emptyNote.id) {
        this.currentTitle = "";
        this.currentContent = "";
      } else {
        this.currentTitle = this.selectedNote.title;
        this.currentContent = this.selectedNote.content;
        this.currentCategoryId = this.selectedNote.categoryId;
        const currentCategory = this.categories.find(
          (category) => category.id === this.currentCategoryId
        );
        this.currentCategoryTitle =
          currentCategory !== undefined ? currentCategory.title : null;
      }
    },
  },
};
</script>
