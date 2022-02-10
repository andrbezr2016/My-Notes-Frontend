<template>
  <div class="min-h-screen text-gray-800 font-semibold bg-white">
    <!-- Navigation starts -->
    <nav class="h-20 bg-gray-800 text-white shadow flex">
      <div class="px-4 flex w-full">
        <div
          class="text-2xl w-full flex items-center justify-start font-serif font-bold"
        >
          My Notes
        </div>
        <div class="w-full flex items-center justify-end">
          <div
            class="cursor-pointer flex items-center"
            @click="popupHandler('user-edit')"
          >
            <img
              class="rounded-full h-12 w-12 object-cover"
              src="../assets/icon.png"
              alt="avatar"
            />
            <p class="mx-3">Username</p>
          </div>
        </div>
      </div>
    </nav>
    <!-- Navigation ends -->
    <!-- Main starts -->
    <div class="grid lg:grid-cols-5 md:grid-cols-3 gap-2">
      <!-- Left starts -->
      <div class="px-4 bg-gray-100">
        <div class="flex-col my-8">
          <div
            class="cursor-pointer leading-none hover:underline hover:text-yellow-400 focus:outline-none my-2"
          >
            All Notes
          </div>
          <hr class="bg-gray-400 my-4" />
          <div class="leading-none focus:outline-none my-2">Categories</div>
          <div class="overflow-y-scroll my-2">
            <ul class="max-h-60">
              <li
                class="flex cursor-pointer pr-2 py-2 leading-none hover:underline hover:text-yellow-400 my-2"
              >
                <div class="w-3/4 flex items-center justify-start">
                  Category 1
                </div>
                <div class="w-1/4 flex items-center justify-end">
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-edit')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
                    viewBox="0 0 490.305 490.305"
                  >
                    <path
                      d="M472.469,81.443l-63.6-63.6c-13.1-16.4-53.2-30.2-83.4,0l-290.9,289.9l0,0c-4.4,4.4-6.5,10.1-6.2,15.6l-27.1,141.8 c-4.2,16.2,11.9,26.6,22.9,25l147-29.2c4.2,0,7.3-2.1,10.4-5.2l290.9-289.8C495.469,142.943,495.469,104.443,472.469,81.443z M354.669,46.043c6.3-7.3,18.8-7.3,26.1,0l17.3,17l-289.7,289.7l-30.1-30.4L354.669,46.043z M61.769,364.043l64.4,64.4l-80.1,15.8 L61.769,364.043z M444.369,135.643l-276.8,276.8l-30.1-30.4l290-290l16.8,16.5C453.469,118.343,449.169,130.743,444.369,135.643z"
                    />
                  </svg>
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-delete')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
                    viewBox="0 0 348.333 348.334"
                  >
                    <path
                      d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                    />
                  </svg>
                </div>
              </li>
              <li
                class="flex cursor-pointer pr-2 py-2 leading-none hover:underline hover:text-yellow-400 my-2"
              >
                <div class="w-3/4 flex items-center justify-start">
                  Category 2
                </div>
                <div class="w-1/4 flex items-center justify-end">
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-edit')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
                    viewBox="0 0 490.305 490.305"
                  >
                    <path
                      d="M472.469,81.443l-63.6-63.6c-13.1-16.4-53.2-30.2-83.4,0l-290.9,289.9l0,0c-4.4,4.4-6.5,10.1-6.2,15.6l-27.1,141.8 c-4.2,16.2,11.9,26.6,22.9,25l147-29.2c4.2,0,7.3-2.1,10.4-5.2l290.9-289.8C495.469,142.943,495.469,104.443,472.469,81.443z M354.669,46.043c6.3-7.3,18.8-7.3,26.1,0l17.3,17l-289.7,289.7l-30.1-30.4L354.669,46.043z M61.769,364.043l64.4,64.4l-80.1,15.8 L61.769,364.043z M444.369,135.643l-276.8,276.8l-30.1-30.4l290-290l16.8,16.5C453.469,118.343,449.169,130.743,444.369,135.643z"
                    />
                  </svg>
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-delete')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
                    viewBox="0 0 348.333 348.334"
                  >
                    <path
                      d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                    />
                  </svg>
                </div>
              </li>
              <li
                class="flex cursor-pointer pr-2 py-2 leading-none hover:underline hover:text-yellow-400 my-2"
              >
                <div class="w-3/4 flex items-center justify-start">
                  Category 3
                </div>
                <div class="w-1/4 flex items-center justify-end">
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-edit')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
                    viewBox="0 0 490.305 490.305"
                  >
                    <path
                      d="M472.469,81.443l-63.6-63.6c-13.1-16.4-53.2-30.2-83.4,0l-290.9,289.9l0,0c-4.4,4.4-6.5,10.1-6.2,15.6l-27.1,141.8 c-4.2,16.2,11.9,26.6,22.9,25l147-29.2c4.2,0,7.3-2.1,10.4-5.2l290.9-289.8C495.469,142.943,495.469,104.443,472.469,81.443z M354.669,46.043c6.3-7.3,18.8-7.3,26.1,0l17.3,17l-289.7,289.7l-30.1-30.4L354.669,46.043z M61.769,364.043l64.4,64.4l-80.1,15.8 L61.769,364.043z M444.369,135.643l-276.8,276.8l-30.1-30.4l290-290l16.8,16.5C453.469,118.343,449.169,130.743,444.369,135.643z"
                    />
                  </svg>
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-delete')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
                    viewBox="0 0 348.333 348.334"
                  >
                    <path
                      d="M336.559,68.611L231.016,174.165l105.543,105.549c15.699,15.705,15.699,41.145,0,56.85 c-7.844,7.844-18.128,11.769-28.407,11.769c-10.296,0-20.581-3.919-28.419-11.769L174.167,231.003L68.609,336.563 c-7.843,7.844-18.128,11.769-28.416,11.769c-10.285,0-20.563-3.919-28.413-11.769c-15.699-15.698-15.699-41.139,0-56.85 l105.54-105.549L11.774,68.611c-15.699-15.699-15.699-41.145,0-56.844c15.696-15.687,41.127-15.687,56.829,0l105.563,105.554 L279.721,11.767c15.705-15.687,41.139-15.687,56.832,0C352.258,27.466,352.258,52.912,336.559,68.611z"
                    />
                  </svg>
                </div>
              </li>
              <li
                class="flex cursor-pointer pr-2 py-2 leading-none hover:underline hover:text-yellow-400 my-2"
              >
                <div class="w-3/4 flex items-center justify-start">
                  Category 4
                </div>
                <div class="w-1/4 flex items-center justify-end">
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-edit')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
                    viewBox="0 0 490.305 490.305"
                  >
                    <path
                      d="M472.469,81.443l-63.6-63.6c-13.1-16.4-53.2-30.2-83.4,0l-290.9,289.9l0,0c-4.4,4.4-6.5,10.1-6.2,15.6l-27.1,141.8 c-4.2,16.2,11.9,26.6,22.9,25l147-29.2c4.2,0,7.3-2.1,10.4-5.2l290.9-289.8C495.469,142.943,495.469,104.443,472.469,81.443z M354.669,46.043c6.3-7.3,18.8-7.3,26.1,0l17.3,17l-289.7,289.7l-30.1-30.4L354.669,46.043z M61.769,364.043l64.4,64.4l-80.1,15.8 L61.769,364.043z M444.369,135.643l-276.8,276.8l-30.1-30.4l290-290l16.8,16.5C453.469,118.343,449.169,130.743,444.369,135.643z"
                    />
                  </svg>
                  <svg
                    class="mx-1"
                    @click="popupHandler('category-delete')"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="14"
                    fill="#4b5563"
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
            class="cursor-pointer leading-none hover:underline hover:text-yellow-400 focus:outline-none my-2"
            @click="popupHandler('category-add')"
          >
            Add Category
          </div>
          <hr class="bg-gray-400 my-4" />
          <div
            class="cursor-pointer leading-none hover:underline hover:text-yellow-400 focus:outline-none my-2"
          >
            Trash
          </div>
        </div>
      </div>
      <!-- Left ends -->
      <!-- Middle starts -->
      <div class="px-4">
        <div class="flex-col">
          <div class="flex w-full my-4">
            <input
              class="flex items-center justify-start w-full border-2 border-gray-100 focus:border-gray-400 focus:outline-none leading-none rounded text-sm bg-gray-100 px-3 py-3"
              aria-label="Search"
              type="search"
              placeholder="Search"
            />
            <span class="flex items-center justify-end px-3 text-gray-600">
              <div class="flex items-center relative">
                <svg
                  class="cursor-pointer w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 231 231"
                  fill="currentColor"
                >
                  <g>
                    <path
                      d="m198.021,82.5c0-45.563-36.853-82.5-82.417-82.5s-82.625,36.937-82.625,82.5c0,39.734 28.375,72.9 65.375,80.738v67.762h33v-67.564c38-7.452 66.667-40.848 66.667-80.936zm-82.334,49.5c-27.294,0-49.5-22.206-49.5-49.5s22.206-49.5 49.5-49.5 49.5,22.206 49.5,49.5-22.206,49.5-49.5,49.5z"
                    />
                  </g>
                </svg>
                <svg
                  class="cursor-pointer w-6"
                  @click="popupHandler('note-sort')"
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
                  class="absolute top-8 right-0 bg-white rounded shadow px-4 py-2 mt-2 hidden"
                  id="note-sort"
                >
                  <li
                    class="text-sm font-bold w-full whitespace-nowrap py-2 px-2"
                  >
                    Sort By:
                  </li>
                  <li
                    class="cursor-pointer text-sm w-full whitespace-nowrap hover:text-yellow-400 py-2 px-2"
                  >
                    Name
                  </li>
                  <li
                    class="cursor-pointer text-sm w-full whitespace-nowrap hover:text-yellow-400 py-2 px-2"
                  >
                    Creation Date
                  </li>
                  <li
                    class="cursor-pointer text-sm w-full whitespace-nowrap hover:text-yellow-400 py-2 px-2"
                  >
                    Modification Date
                  </li>
                </ul>
              </div>
            </span>
          </div>
          <div class="overflow-y-scroll h-80 my-4">
            <ul class="flex-col text-sm">
              <li
                class="flex cursor-pointer px-3 py-2 m-2 rounded hover:bg-gray-400 hover:text-white bg-gray-100"
              >
                <div class="w-3/4 flex items-center justify-start">Note 1</div>
                <div class="w-1/4 flex items-center justify-end">
                  <input type="checkbox" />
                </div>
              </li>
              <li
                class="flex cursor-pointer px-3 py-2 m-2 rounded hover:bg-gray-400 hover:text-white bg-gray-100"
              >
                <div class="w-3/4 flex items-center justify-start">Note 2</div>
                <div class="w-1/4 flex items-center justify-end">
                  <input type="checkbox" />
                </div>
              </li>
              <li
                class="flex cursor-pointer px-3 py-2 m-2 rounded hover:bg-gray-400 hover:text-white bg-gray-100"
              >
                <div class="w-3/4 flex items-center justify-start">Note 3</div>
                <div class="w-1/4 flex items-center justify-end">
                  <input type="checkbox" />
                </div>
              </li>
              <li
                class="flex cursor-pointer px-3 py-2 m-2 rounded hover:bg-gray-400 hover:text-white bg-gray-100"
              >
                <div class="w-3/4 flex items-center justify-start">Note 4</div>
                <div class="w-1/4 flex items-center justify-end">
                  <input type="checkbox" />
                </div>
              </li>
            </ul>
          </div>
          <div class="my-4">
            <button
              aria-label="Add"
              class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-yellow-500 hover:bg-yellow-400 py-3 mb-2"
            >
              Add
            </button>
            <button
              aria-label="Delete"
              class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-gray-500 hover:bg-gray-400 py-3 mb-2"
              @click="popupHandler('note-delete')"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
      <!-- Middle ends -->
      <!-- Right starts -->
      <div class="px-4 lg:col-span-3 md:col-span-1">
        <div class="flex-col">
          <div class="flex w-full my-4">
            <input
              class="flex items-center justify-start w-full border-2 border-gray-100 focus:border-gray-400 focus:outline-none leading-none rounded text-sm bg-gray-100 px-3 py-3"
              aria-label="Enter title"
              type="text"
              placeholder="Title"
            />
            <span
              class="flex items-center justify-end px-3 text-gray-600 relative"
            >
              <svg
                class="cursor-pointer w-6"
                @click="popupHandler('note-category-edit')"
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
                class="absolute top-12 right-0 bg-white rounded shadow px-4 py-2 mt-2 hidden"
                id="note-category-edit"
              >
                <li
                  class="cursor-pointer text-sm w-full whitespace-nowrap hover:text-yellow-400 py-2 px-2"
                >
                  Change Category
                </li>
              </ul>
            </span>
          </div>
          <div class="h-80 my-4">
            <textarea
              aria-label="Enter content"
              type="text"
              placeholder="Content"
              class="border-2 border-gray-100 focus:border-gray-400 focus:outline-none leading-none rounded w-full h-full text-sm bg-gray-100 px-3 py-3 resize-none"
            ></textarea>
          </div>
          <div class="my-4">
            <button
              aria-label="Save"
              class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-yellow-500 hover:bg-yellow-400 py-3"
            >
              Save
            </button>
          </div>
        </div>
      </div>
      <!-- Right ends -->
    </div>
    <!-- Main ends -->

    <!-- Edit User starts -->
    <div
      class="min-h-screen bg-gray-700 w-full py-16 px-4 bg-opacity-90 top-0 fixed hidden"
      id="user-edit"
    >
      <div
        class="flex-col bg-white shadow rounded lg:w-1/3 md:w-1/2 w-full px-10 pt-2 pb-10 m-auto"
      >
        <div class="flex text-xl">
          <p class="leading-none py-4 w-full flex items-center justify-start">
            Profile information
          </p>
          <p
            class="leading-none cursor-pointer hover:text-yellow-400 w-full flex items-center justify-end"
            @click="popupHandler('user-edit')"
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
          <label class="text-sm leading-none"> Username </label>
          <div class="text-sm flex items-center justify-center">
            <input
              disabled
              aria-label="Enter username"
              type="text"
              class="bg-gray-200 border-2 rounded focus:outline-none text-xs leading-none w-full px-3 py-3 mt-2"
            />
            <span
              class="cursor-pointer px-2 flex items-center leading-none hover:text-yellow-400 mt-2"
              >Edit</span
            >
          </div>
        </div>
        <div class="mt-2 w-full">
          <label class="text-sm leading-none"> Email </label>
          <input
            disabled
            aria-label="Enter email adress"
            type="email"
            class="bg-gray-200 border-2 rounded focus:outline-none text-xs leading-none w-full px-3 py-3 mt-2"
          />
        </div>
        <div class="mt-2 w-full">
          <label class="text-sm leading-none"> Password </label>
          <div class="text-sm relative flex items-center justify-center">
            <input
              disabled
              aria-label="Enter password"
              type="password"
              class="bg-gray-200 border-2 rounded focus:outline-none text-xs leading-none w-full px-3 py-3 mt-2"
            />
            <span
              class="cursor-pointer px-2 flex items-center leading-none hover:text-yellow-400 mt-2"
              >Edit</span
            >
            <div class="absolute right-0 mt-2 mr-12 cursor-pointer">
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
            aria-label="Upload picture"
            class="leading-none text-white focus:outline-none font-semibold bg-yellow-500 border-2 rounded hover:bg-yellow-400 py-4 w-full mt-2"
          >
            Upload profile picture
          </button>
          <button
            aria-label="Logout"
            class="leading-none text-white focus:outline-none font-semibold bg-gray-500 border-2 rounded hover:bg-gray-400 py-4 w-full mt-2"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
    <!-- Edit User ends -->
    <!-- Add Category starts -->
    <div
      class="min-h-screen bg-gray-700 w-full py-16 px-4 bg-opacity-90 top-0 fixed hidden"
      id="category-add"
    >
      <div class="container mx-auto">
        <div
          class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md"
        >
          <div class="flex pb-3 items-center">
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
            <p class="text-gray-800 pl-2">Add Category</p>
          </div>
          <p class="text-sm text-gray-800">Enter category title:</p>
          <input
            aria-label="Enter title"
            type="text"
            class="bg-gray-200 border-2 rounded focus:outline-none text-xs leading-none w-full px-3 py-3 my-3"
          />
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-yellow-500 hover:bg-yellow-400 py-3 mt-2"
            @click="popupHandler('category-add')"
          >
            Ok
          </button>
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-gray-500 hover:bg-gray-400 py-3 mt-2"
            @click="popupHandler('category-add')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <!-- Add Category ends -->
    <!-- Edit Category starts -->
    <div
      class="min-h-screen bg-gray-700 w-full py-16 px-4 bg-opacity-90 top-0 fixed hidden"
      id="category-edit"
    >
      <div class="container mx-auto">
        <div
          class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md"
        >
          <div class="flex pb-3 items-center">
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
            <p class="text-gray-800 pl-2">Edit Category</p>
          </div>
          <p class="text-sm text-gray-800">Enter category title:</p>
          <input
            aria-label="Enter title"
            type="text"
            class="bg-gray-200 border-2 rounded focus:outline-none text-xs leading-none w-full px-3 py-3 my-3"
          />
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-yellow-500 hover:bg-yellow-400 py-3 mt-2"
            @click="popupHandler('category-edit')"
          >
            Ok
          </button>
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-gray-500 hover:bg-gray-400 py-3 mt-2"
            @click="popupHandler('category-edit')"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
    <!-- Edit Category ends -->
    <!-- Delete Category starts -->
    <div
      class="min-h-screen bg-gray-700 w-full py-16 px-4 bg-opacity-90 top-0 fixed hidden"
      id="category-delete"
    >
      <div class="container mx-auto">
        <div
          class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md"
        >
          <div class="flex pb-3 items-center">
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
            <p class="text-gray-800 pl-2">Delete Category?</p>
          </div>
          <p class="text-sm text-gray-800 pb-3">
            Do you want to delete the category?
          </p>
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-yellow-500 hover:bg-yellow-400 py-3 mt-2"
            @click="popupHandler('category-delete')"
          >
            Yes
          </button>
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-gray-500 hover:bg-gray-400 py-3 mt-2"
            @click="popupHandler('category-delete')"
          >
            No
          </button>
        </div>
      </div>
    </div>
    <!-- Delete Category ends -->
    <!-- Delete Note starts -->
    <div
      class="min-h-screen bg-gray-700 w-full py-16 px-4 bg-opacity-90 top-0 fixed hidden"
      id="note-delete"
    >
      <div class="container mx-auto">
        <div
          class="w-11/12 mx-auto mb-4 my-6 md:w-5/12 shadow sm:px-10 sm:py-6 py-4 px-4 bg-white rounded-md"
        >
          <div class="flex pb-3 items-center">
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
            <p class="text-gray-800 pl-2">Delete Selected Notes?</p>
          </div>
          <p class="text-sm text-gray-800 pb-3">
            Do you want to delete selected notes?
          </p>
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-yellow-500 hover:bg-yellow-400 py-3 mt-2"
            @click="popupHandler('note-delete')"
          >
            Yes
          </button>
          <button
            class="border-2 focus:outline-none font-semibold leading-none rounded w-full text-white bg-gray-500 hover:bg-gray-400 py-3 mt-2"
            @click="popupHandler('note-delete')"
          >
            No
          </button>
        </div>
      </div>
    </div>
    <!-- Delete Note ends -->
  </div>
</template>

<script>
export default {
  name: "MyNotes",
  methods: {
    popupHandler(id) {
      let single = document.getElementById(id);
      single.classList.toggle("hidden");
    },
  },
};
</script>
