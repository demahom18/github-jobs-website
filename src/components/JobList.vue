<template>
  <div class="job-list" v-if="jobs">
     <JobCard
      v-for="job in jobs"
      :key="job.id"
      :job="job"
    />
  </div>
  <div class="loading" v-else-if="onLoading">
    <Loading />
  </div>

  <div v-else-if="error" class="error">
    <h3>{{ error }}</h3>
  </div>
</template>

<script>
import { inject } from 'vue'
import JobCard from './JobCard.vue'
import Loading from './Loading.vue'
export default {
  components: { JobCard, Loading },
  setup () {
    const { jobs, error, onLoading } = inject('jobsData')
    return { jobs, error, onLoading }
  }

}
</script>

<style lang="scss">
@use '../assets/scss/styles.scss' as style;
.job-list, .error, .loading {
  margin: 50px auto;
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
