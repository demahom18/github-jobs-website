<template>
  <div class="home">
    <FilterRegion />
    <JobList />
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
  }
}
</script>
