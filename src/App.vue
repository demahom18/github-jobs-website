<template>
  <Header />
  <div>
    <router-view/>
  </div>
</template>
<script>
import { provide, ref } from 'vue'

import Header from './components/Header.vue'
// import getUserTheme from './composables/getUserTheme'
export default {
  components: { Header },
  setup () {
    const currentTheme = ref(window.localStorage.getItem('theme-color'))

    provide('theme', currentTheme)
    return {
      currentTheme
    }
  }
}
</script>
