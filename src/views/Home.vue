<template>
  <div class="home">
    <JobList />
  </div>
</template>

<script>
import JobList from '../components/JobList.vue'

export default {
  name: 'Home',
  components: {
    JobList
  }
}
</script>
