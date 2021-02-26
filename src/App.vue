<template>
  <Header/>
  <router-view/>
</template>
<script>
import { ref, provide } from 'vue'
import Header from './components/Header.vue'
export default {
  components: { Header },
  setup () {
    const jobs = ref()
    fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
      .then((res) => res.json())
      .then((data) => {
        jobs.value = data
      })

    provide('jobs', jobs)
    return { jobs }
  }
}
</script>
<style lang="scss">

</style>
