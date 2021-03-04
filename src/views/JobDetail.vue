<template>
  <div v-if="error" class="error">
    <h3>{{ error }}</h3>
  </div>
  <div v-else-if="job">
    <div class="job-page">
      <JobCompany
        :job="job"
        :companyUrl="companyUrl"
      />
      <JobDescription
        :job="job"
        :publishTime="publishTime"
        :companyUrl="companyUrl"
      />
      <JobApply>
        <template v-slot>
          <h3>How to apply</h3>
          <div v-html="job.how_to_apply"></div>
        </template>
      </JobApply>
    </div>
    <footer>
      <div>
        <div>
          <h4>{{ job.title }}</h4>
          <p class="text--gray">{{ job.company }}</p>
        </div>
        <a :href="companyUrl" ><button class="btn btn--violet round">Apply now</button></a>
      </div>
    </footer>
  </div>
  <div v-else class="loading">
    <Loading/>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import JobCompany from '../components/JobCompany.vue'
import JobDescription from '../components/JobDescription.vue'
import JobApply from '../components/JobApply.vue'
import findById from '../composables/findById'
import Loading from '../components/Loading.vue'
export default {
  components: { JobCompany, JobDescription, JobApply, Loading },
  name: 'JobDetail',
  setup () {
    const route = useRoute()
    const { job, error, onLoading } = findById(route.params.id.toString())
    const publishTime = route.params.publishTime.toString()
    const companyUrl = route.params.companyUrl.toString()

    return {
      job,
      error,
      onLoading,
      companyUrl,
      publishTime
    }
  }
}
</script>

<style lang="scss">
@use '../assets/scss/styles' as style;

.job-page {
  width: min(90vw, 800px);
    margin: 0 auto;

  a {font-weight: 700;}
}

footer {
  background: white;
  padding: 2rem 0;
  width: 100%;
  > div {
    width: min(85vw, 800px);
    margin: 0 auto;
    @include style.mix-flexBox(
      $justify: space-between,
      $align: center
    );
    div { max-width: 60%;}
  }
  a{ text-decoration: none;}

  h4 {
    padding: 1rem 0;
    line-height: 1.5;
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 450px) {
  footer > div {
    flex-direction: column;
    gap: 1.5rem;
    align-items: unset;

    .btn {
      display: inline-block;
      width: 100%;
      text-align: center;
    }

    div{ max-width: 100%;}
  }
}

body.dark footer { background: style.$var-dark;}
</style>
