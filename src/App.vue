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
    fetch('https://cors.bridged.cc/https://jobs.github.com/positions.json')
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
