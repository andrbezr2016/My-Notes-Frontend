<template>
  <div
    class="flex h-screen max-h-screen flex-col bg-white font-semibold text-gray-800"
  >
    <!-- Navigation starts -->
    <header-panel @showErrors="parseErrors"></header-panel>
    <!-- Navigation ends -->
    <!-- Main starts -->
    <div class="grid h-full flex-grow gap-2 md:grid-cols-3 lg:grid-cols-5">
      <!-- Left starts -->
      <div class="h-full bg-gray-100 px-4 text-gray-600">
        <div class="my-8 flex flex-col">
          <div
            class="focus:outline-none my-2 flex cursor-pointer leading-none hover:text-yellow-400 hover:underline"
            @click="selectCategory('all')"
            :class="{
              'text-yellow-400 underline': selectedMode === 'all',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 512 512"
              class="mr-2 flex items-center justify-start"
            >
              <path
                d="M106.667,170.667h106.667c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333H106.667 c-11.782,0-21.333,9.551-21.333,21.333C85.333,161.115,94.885,170.667,106.667,170.667z"
              />
              <path
                d="M234.667,341.333c11.782,0,21.333-9.551,21.333-21.333s-9.551-21.333-21.333-21.333h-128 c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333H234.667z"
              />
              <path
                d="M106.667,256h64c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333h-64 c-11.782,0-21.333,9.551-21.333,21.333C85.333,246.449,94.885,256,106.667,256z"
              />
              <path
                d="M277.333,170.667H320c11.782,0,21.333-9.551,21.333-21.333c0-11.782-9.551-21.333-21.333-21.333h-42.667 C265.551,128,256,137.551,256,149.333C256,161.115,265.551,170.667,277.333,170.667z"
              />
              <path
                d="M320,298.667h-21.333c-11.782,0-21.333,9.551-21.333,21.333s9.551,21.333,21.333,21.333H320 c11.782,0,21.333-9.551,21.333-21.333S331.782,298.667,320,298.667z"
              />
              <path
                d="M213.333,234.667c0,11.782,9.551,21.333,21.333,21.333H320c11.782,0,21.333-9.551,21.333-21.333 c0-11.782-9.551-21.333-21.333-21.333h-85.333C222.885,213.333,213.333,222.885,213.333,234.667z"
              />
              <path
                d="M490.667,128h-64V64c0-11.782-9.551-21.333-21.333-21.333H234.667V21.333C234.667,9.551,225.115,0,213.333,0 C201.551,0,192,9.551,192,21.333v21.333H21.333C9.551,42.667,0,52.218,0,64v341.333c0,11.782,9.551,21.333,21.333,21.333h64v64 c0,11.782,9.551,21.333,21.333,21.333h384c11.782,0,21.333-9.551,21.333-21.333V149.333C512,137.551,502.449,128,490.667,128z M42.667,85.333H192c0,11.782,9.551,21.333,21.333,21.333c11.782,0,21.333-9.551,21.333-21.333H384v64V384H106.667h-64V85.333z M469.333,469.333H128v-42.667h277.333c11.782,0,21.333-9.551,21.333-21.333V170.667h42.667V469.333z"
              />
            </svg>
            <div class="flex items-center justify-end">All Notes</div>
          </div>
          <hr class="my-4 bg-gray-400" />
          <div class="focus:outline-none my-2 flex leading-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 35.668 35.668"
              class="mr-2 flex items-center justify-start"
            >
              <path
                d="M33.168,5.667H2.5c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5h30.668c1.381,0,2.5,1.119,2.5,2.5 S34.549,5.667,33.168,5.667z M18.667,10.501c0-1.381-1.119-2.5-2.5-2.5H2.5c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h13.667 C17.548,13.001,18.667,11.882,18.667,10.501z M35.668,17.833c0-1.381-1.119-2.5-2.5-2.5H2.5c-1.381,0-2.5,1.119-2.5,2.5 s1.119,2.5,2.5,2.5h30.668C34.549,20.333,35.668,19.214,35.668,17.833z M18.667,25.167c0-1.381-1.119-2.5-2.5-2.5H2.5 c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h13.667C17.548,27.667,18.667,26.548,18.667,25.167z M35.668,32.501 c0-1.381-1.119-2.5-2.5-2.5H2.5c-1.381,0-2.5,1.119-2.5,2.5s1.119,2.5,2.5,2.5h30.668C34.549,35.001,35.668,33.882,35.668,32.501z"
              />
            </svg>
            <div class="flex items-center justify-end">Categories</div>
          </div>
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
            class="focus:outline-none my-2 flex cursor-pointer leading-none hover:text-yellow-400 hover:underline"
            @click="visibleCategoryAdd"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 60.364 60.364"
              class="mr-2 flex items-center justify-start"
            >
              <path
                d="M54.454,23.18l-18.609-0.002L35.844,5.91C35.845,2.646,33.198,0,29.934,0c-3.263,0-5.909,2.646-5.909,5.91v17.269 L5.91,23.178C2.646,23.179,0,25.825,0,29.088c0.002,3.264,2.646,5.909,5.91,5.909h18.115v19.457c0,3.267,2.646,5.91,5.91,5.91 c3.264,0,5.909-2.646,5.91-5.908V34.997h18.611c3.262,0,5.908-2.645,5.908-5.907C60.367,25.824,57.718,23.178,54.454,23.18z"
              />
            </svg>
            <div class="flex items-center justify-end">Add Category</div>
          </div>
          <hr class="my-4 bg-gray-400" />
          <div
            class="focus:outline-none my-2 flex cursor-pointer leading-none hover:text-yellow-400 hover:underline"
            @click="selectCategory('trash')"
            :class="{
              'text-yellow-400 underline': selectedMode === 'trash',
            }"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              fill="currentColor"
              viewBox="0 0 330 330"
              class="mr-2 flex items-center justify-start"
            >
              <path
                d="M240,121.076V90h15c8.284,0,15-6.716,15-15s-6.716-15-15-15h-30h-15V15c0-8.284-6.716-15-15-15H75c-8.284,0-15,6.716-15,15 v45H45H15C6.716,60,0,66.716,0,75s6.716,15,15,15h15v185c0,8.284,6.716,15,15,15h60h37.596c19.246,24.347,49.031,40,82.404,40 c57.897,0,105-47.103,105-105C330,172.195,290.817,128.377,240,121.076z M90,30h90v30h-15h-60H90V30z M105,260H60V90h15h30h60h30 h15v31.076c-50.817,7.301-90,51.119-90,103.924c0,12.268,2.122,24.047,6.006,35H105z M225,300c-41.355,0-75-33.645-75-75 s33.645-75,75-75s75,33.645,75,75S266.355,300,225,300z"
              />
              <path
                d="M256.819,193.181c-5.857-5.857-15.355-5.857-21.213,0L225,203.787l-10.606-10.606c-5.857-5.857-15.355-5.857-21.213,0 c-5.858,5.857-5.858,15.355,0,21.213L203.787,225l-10.606,10.606c-5.858,5.857-5.858,15.355,0,21.213 c2.929,2.929,6.768,4.394,10.606,4.394s7.678-1.465,10.606-4.394L225,246.213l10.606,10.606c2.929,2.929,6.768,4.394,10.606,4.394 s7.678-1.465,10.606-4.394c5.858-5.857,5.858-15.355,0-21.213L246.213,225l10.606-10.606 C262.678,208.536,262.678,199.038,256.819,193.181z"
              />
            </svg>
            <div class="flex items-center justify-end">Trash</div>
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
              <li
                v-for="note in sortedNotes"
                :key="note.id"
                class="m-1 flex text-xs text-gray-400"
              >
                <div
                  @click="selectNote(note)"
                  :class="{
                    'bg-gray-400 text-white': selectedNote.id === note.id,
                  }"
                  class="flex w-full cursor-pointer flex-col items-start justify-start overflow-hidden rounded bg-gray-100 px-3 py-2 hover:bg-gray-400 hover:text-white"
                >
                  <label class="text-sm text-gray-800">{{ note.title }}</label>
                  <p>
                    Created at:
                    {{ formatDate(note.createdAt) }}
                  </p>
                  <p>
                    Modified at:
                    {{ formatDate(note.modifiedAt) }}
                  </p>
                  <p v-if="selectedMode === 'trash'">
                    Deleted at:
                    {{ formatDate(note.deletedAt) }}
                  </p>
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
            <div v-show="selectedMode === 'trash'" class="p-2 text-gray-400">
              Storage time: 7 days
            </div>
            <button
              :disabled="selectedNote.id === emptyNote.id"
              @click="newNote"
              v-show="selectedMode !== 'trash'"
              :class="{
                'cursor-not-allowed': selectedNote.id === emptyNote.id,
              }"
              class="focus:outline-none w-full rounded border-2 bg-yellow-500 py-3 font-semibold leading-none text-white transition-colors hover:bg-yellow-400"
            >
              New
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
      isVisibleErrors: false,

      //Errors
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
            new Date(a.createdAt) > new Date(b.createdAt)
              ? direction
              : -direction
          );
        case "modificationDate":
          return [...this.filteredNotes].sort((a, b) =>
            new Date(a.modifiedAt) > new Date(b.modifiedAt)
              ? direction
              : -direction
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
          this.parseErrors(e);
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
          this.parseErrors(e);
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
          this.parseErrors(e);
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
          this.parseErrors(e);
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
          this.parseErrors(e);
        }
      );
    },

    getDeletedNotes() {
      getDeletedUserNotes(
        (data) => {
          this.notes = data;
        },
        (e) => {
          this.parseErrors(e);
        }
      );
    },

    newNote() {
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
            this.parseErrors(e);
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
            this.parseErrors(e);
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
          this.parseErrors(e);
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
          this.parseErrors(e);
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

    formatDate(value) {
      const date = new Date(value);
      let dd = date.getDate();
      if (dd < 10) dd = "0" + dd;

      let mm = date.getMonth() + 1;
      if (mm < 10) mm = "0" + mm;

      let yy = date.getFullYear() % 100;
      if (yy < 10) yy = "0" + yy;

      let hours = date.getHours();
      if (hours < 10) hours = "0" + hours;

      let minutes = date.getMinutes();
      if (minutes < 10) minutes = "0" + minutes;
      return dd + "." + mm + "." + yy + " " + hours + ":" + minutes;
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

    parseErrors(e) {
      this.errors = [];
      if (e.response) {
        if (e.response.data.length) {
          e.response.data.forEach((error) =>
            this.errors.push(error.field.toUpperCase() + ": " + error.message)
          );
        } else {
          this.errors = [e.response.data.message];
        }
      } else if (e.request) {
        this.errors = [e.message];
      } else {
        this.errors = [e.message];
      }
      this.isVisibleErrors = true;
      setTimeout(() => {
        this.isVisibleErrors = false;
      }, 5000);
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
