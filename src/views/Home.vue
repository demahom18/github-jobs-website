<template>
  <div class="home">
    <FilterRegion @filter="handleFilter" />
    <JobList
      :jobs="jobs"
      :error="error"
      :onLoading="onLoading"
    />
  </div>
</template>

<script>
import filterJobs from '../composables/filterJobs'
import FilterRegion from '../components/FilterRegion.vue'
import JobList from '../components/JobList.vue'
import { computed } from 'vue'

export default {
  name: 'Home',
  components: {
    JobList,
    FilterRegion
  },
  setup () {
    const { jobs, onLoading, error } = filterJobs('', '', '')

    const jobsToShow = computed({
      get: () => jobs.value,
      set: newVal => newVal
    })

    const handleFilter = (res) => {
      const { jobs } = filterJobs(res.text, res.loc, res.ft)
      jobsToShow.value = jobs
      return { jobsToShow }
    }

    return {
      jobs: jobsToShow,
      error,
      onLoading,
      handleFilter
    }
  }
}
</script>
