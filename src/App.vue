<template>
  <Header @switched="switchTheme"/>
  <div>
    <router-view/>
  </div>
</template>
<script>
import { provide, ref } from 'vue'

import Header from './components/Header.vue'
export default {
  components: { Header },
  setup () {
    const currentTheme = ref(localStorage.getItem('theme-color'))

    const switchTheme = clicked => {
      if (clicked === false) {
        document.body.classList.remove('dark')
        localStorage.setItem('theme-color', 'light')
        currentTheme.value = localStorage.getItem('theme-color')
      } else {
        document.body.classList.add('dark')
        localStorage.setItem('theme-color', 'dark')
        currentTheme.value = localStorage.getItem('theme-color')
      }
    }
    provide('theme', currentTheme)
    return {
      currentTheme,
      switchTheme
    }
  }
}
</script>
