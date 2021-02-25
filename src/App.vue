<template>
  <router-view/>
</template>
<script>
import { onMounted, ref, provide } from 'vue'
export default {
  setup () {
    const jobs = ref()
    onMounted(() => {
      fetch('https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json')
        .then((res) => res.json())
        .then((data) => {
          jobs.value = data
        })
    })

    provide('jobs', jobs)
    return { jobs }
  }
}
</script>
<style lang="scss">

</style>
