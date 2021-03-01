<template>
  <div>
    <div class="job-page">
      <JobCompany :job="job" :companyUrl="companyUrl"/>
      <JobDescription :job="job" :companyUrl="companyUrl" :publishTime="publishTime" />
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
</template>

<script>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
import JobCompany from '../components/JobCompany.vue'
import JobDescription from '../components/JobDescription.vue'
import JobApply from '../components/JobApply.vue'
export default {
  components: { JobCompany, JobDescription, JobApply },
  name: 'JobDetail',
  setup () {
    const { jobs } = inject('jobsData')
    const route = useRoute()
    const job = Array.from(jobs.value).find(job => job.id === route.params.id)
    const publishTime = route.params.publishTime

    const companyUrl = computed(() => {
      const urlSplitted = job.company_url ? job.company_url.split('/') : []

      //  An url always start by https://... So length must be > 2
      //  A RegExp would've been better
      if (urlSplitted.length < 2) return job.url
      else return job.company_url
    })

    return {
      job,
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
  }
  a{ text-decoration: none;}

  h4 {
    padding: 1rem 0;
    line-height: 1.5;
    font-size: 1.3rem;
  }
}

@media only screen and (max-width: 620px) {
  footer > div div{
    max-width: 60%;
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
</style>
