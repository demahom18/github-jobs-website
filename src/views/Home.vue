<template>
  <div class="home">
    <FilterRegion />
    <JobList v-if="!onLoading"/>
    <Loading v-else/>
  </div>
</template>

<script>
import { inject } from 'vue'
import FilterRegion from '../components/FilterRegion.vue'
import JobList from '../components/JobList.vue'
import Loading from '../components/Loading.vue'

export default {
  name: 'Home',
  components: {
    JobList,
    FilterRegion,
    Loading
  },
  setup () {
    const onLoading = inject('onLoading')
    return { onLoading }
  }

}
</script>
