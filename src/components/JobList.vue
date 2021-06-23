<template>
  <div v-if="jobs && jobs.length === 0" class="error">
    <h3>No Jobs found !</h3>
    <p>
        Unfortunately Github announced on <a href="https://github.blog/changelog/2021-04-19-deprecation-notice-github-jobs-site/">this post</a>
        the deprecation of the <a href="https://jobs.github.com/">Github jobs website</a> and therefore there's no jobs published on the API
    </p>
  </div>
  <div class="job-list" v-if="jobs && jobs.length > 0">
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
import JobCard from './JobCard.vue'
import Loading from './Loading.vue'
export default {
  components: { JobCard, Loading },
  props: {
    jobs: {
      required: true,
      default: null
    },
    error: {
      type: String,
      default: null
    },
    onLoading: {
      type: Boolean,
      default: false
    }
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

.error {
    flex-direction: column;
    > * {
        flex-basis: 0;
        max-width: 500px;
        line-height: 1.5;
    }

}

@media only screen and (max-width: 850px) and (min-width: 700px) {
 .job-list > *:not(.error) { flex-basis: 330px;}
}
</style>
