<template>
  <Header/>
  <router-view/>
</template>
<script>
import { provide } from 'vue'
import Header from './components/Header.vue'
import getJobs from './composables/getJobs'
export default {
  components: { Header },
  setup () {
    const { jobs, loadData, error, onLoading } = getJobs()
    loadData()

    provide('jobsData', { jobs, error, onLoading })
  }
}
</script>
