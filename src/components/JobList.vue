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
  margin: 150px auto;
  padding: 0 24px;
  max-width: 1600px;
  @include style.mix-flexBox(
    $gap: 60px 30px,
    $wrap: wrap,
    $justify:center,
    $align: center,
    $basis:350px
  )
}
@media only screen and (max-width: 850px) and (min-width: 700px) {
 .job-list > * { flex-basis: 330px;}
}
</style>
