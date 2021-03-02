<template>
  <div class="home">
    <FilterRegion @filter="handleFilter" />
    <JobList/>
  </div>
</template>

<script>
import FilterRegion from '../components/FilterRegion.vue'
import JobList from '../components/JobList.vue'

export default {
  name: 'Home',
  components: {
    JobList,
    FilterRegion
  },
  setup () {
    const handleFilter = res => {
      console.log(res)
    }

    return { handleFilter }
  }
}
</script>
