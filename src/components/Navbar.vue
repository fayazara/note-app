<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <button
            @click="open = !open"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="open ? 'hidden' : 'inline-flex'"
                class="lines"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                :class="open ? 'inline-flex' : 'hidden'"
                class="crosses"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0">
            <img
              class="block lg:hidden h-8 w-auto"
              src="@/assets/images/note.svg"
              alt=""
            />
            <img
              class="hidden lg:block h-8 w-auto"
              src="@/assets/images/note.svg"
              alt=""
            />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex">
              <router-link
                :to="{ name: 'Home' }"
                exact-active-class="bg-gray-900"
                class="px-3 py-2 rounded-md  font-medium leading-5 text-white focus:outline-none focus:text-white hover:text-white hover:bg-gray-700"
                >Home</router-link
              >
              <router-link
                :to="{ name: 'Notes' }"
                exact-active-class="bg-gray-900"
                class="ml-4 px-3 py-2 rounded-md  font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white"
                >Notes</router-link
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <!-- User Profile section -->
          <div class="ml-3 relative user-profile" v-if="loggedIn">
            <div>
              <button
                @click="open2 = !open2"
                class="flex  border-2 border-transparent rounded-full focus:outline-none focus:border-white"
              >
                <img
                  class="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            <div
              v-if="open2"
              class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg"
            >
              <div class="py-1 rounded-md bg-white shadow-xs">
                <a
                  href="#"
                  class="block px-4 py-2  leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >Your Profile</a
                >
                <a
                  href="#"
                  class="block px-4 py-2  leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >Settings</a
                >
                <a
                  href="#"
                  class="block px-4 py-2  leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
                  >Sign out</a
                >
              </div>
            </div>
          </div>
          <div v-else>
            <router-link
              :to="{ name: 'Login' }"
              exact-active-class="bg-gray-900"
              class="ml-4 px-3 py-2 rounded-md  font-medium leading-5 text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white"
              >Login</router-link
            >
          </div>
        </div>
      </div>
    </div>
    <div :class="open ? 'block' : 'hidden'" class="sm:hidden work">
      <div class="px-2 pt-2 pb-3">
        <router-link
          :to="{ name: 'Home' }"
          exact-active-class="bg-gray-900"
          @click.native="open = false"
          class="block px-3 py-2 rounded-md text-base font-medium text-white focus:outline-none focus:text-white hover:text-white hover:bg-gray-700"
          >Home</router-link
        >
        <router-link
          :to="{ name: 'Notes' }"
          exact-active-class="bg-gray-900"
          @click.native="open = false"
          class="mt-1 block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-gray-700 focus:outline-none focus:text-white"
          >Notes</router-link
        >
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      open: false,
      open2: false
    };
  },
  computed: {
    loggedIn() {
      return this.$store.state.loggedIn;
    }
  }
};
</script>

<style></style>
