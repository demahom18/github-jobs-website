<template>
  <div class="job-list">
     <JobCard
      v-for="job in jobs"
      :key="job.id"
      :job="job"
    />
  </div>
</template>

<script>
import { inject } from 'vue'
import JobCard from './JobCard.vue'
export default {
  components: { JobCard },
  setup () {
    const jobs = inject('jobs')

    return { jobs }
  }

}
</script>

<style lang="scss">
@use '../assets/scss/styles.scss' as style;
.job-list {
  margin: 50px auto;
  @include style.mix-flexBox(
    $gap: 60px 30px,
    $wrap: wrap,
    $justify:center,
    $align: center,
    $basis:350px
  )
}

</style>
