<template>
    <div>
    <nav
      class="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 "
    >
      <div
        class="container px-4 mx-auto flex flex-wrap items-center justify-between"
      >
        <div
          class="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start"
        >
          <!-- <a
            class="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
            href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
            >Tailwind Starter Kit</a> -->
            <button
            class="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            v-on:click="toggleNavbar()"
          >
            <i class="text-white fas fa-bars"></i>
          </button>
        </div>
        <div
          class="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
          v-bind:class="{'hidden': !showMenu, 'block': showMenu}"
        >
          <ul class="flex flex-col lg:flex-row list-none mr-auto">
            <!-- <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/profile"
                ><i
                  class="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"
                ></i>
                Docs</a
              >
            </li> -->
          </ul>
          <ul class="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://www.linkedin.com/in/francisco-grillo-518a2125a/" target="_blank"
                ><i
                  class="lg:text-gray-300 text-gray-500 fab fa-linkedin text-lg leading-lg "
                ></i
                ><span class="lg:hidden inline-block ml-2">Linkedin</span></a
              >
            </li>
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://wa.me/543548417898" target="_blank"
                ><i
                  class="lg:text-gray-300 text-gray-500 fab fa-whatsapp text-lg leading-lg "
                ></i
                ><span class=" inline-block ml-2">AR</span></a
              >
            </li>
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://wa.me/393792971089" target="_blank"
                ><i
                  class="lg:text-gray-300 text-gray-500 fab fa-whatsapp text-lg leading-lg "
                ></i
                ><span class=" inline-block ml-2">IT</span></a
              >
            </li>
            <li class="flex items-center">
              <a
                class="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                href="https://github.com/franlgr" target="_blank"
                ><i
                  class="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "
                ></i
                ><span class="lg:hidden inline-block ml-2">GitHub</span></a
              >
            </li>
            <!-- <li class="flex items-center">
              <button
                class="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                type="button"
                style="transition: all 0.15s ease 0s;"
              >
                <i class="fas fa-arrow-alt-circle-down"></i> Download
              </button>
            </li> -->
          </ul>
        </div>
      </div>
    </nav>
</div>
  </template>
  <script>
  export default {
    data() {
      return {
        showMenu: false
      }
    },
    methods: {
      toggleNavbar: function(){
        this.showMenu = !this.showMenu;
      }
    }
  }
  </script>
  