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
    const onLoading = ref()

    const fetchData = () => {
      onLoading.value = true
      fetch('https://cors.bridged.cc/https://jobs.github.com/positions.json')
        .then((res) => res.json())
        .then((data) => {
          jobs.value = data
          onLoading.value = false
        })
        .catch(err => console.warn('Can\'t fetch data', err))
    }
    fetchData()

    provide('jobs', jobs)
    provide('onLoading', onLoading)
    return { jobs }
  }
}
</script>
<style lang="scss">

</style>
