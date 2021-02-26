<template>
  <div class="job-page">
    <div class="job--company round">
      <img v-if="job.company_logo" :src="job.company_logo" :alt="job.company_logo + '\'s logo' ">
      <span v-else>No image</span>
      <div>
        <h2>{{ job.company }}</h2>
        <!--TODO: REFORMAT the url <p>{{ job.company_url }}</p> -->
      </div>
      <a :href="companyUrl" target="blank">
        <span class="btn btn--gray round">Company site</span>
      </a>
    </div>
    <div class="job--description round">
      <div class="job--infos">
        <p class="flex text--gray-dark">
          <span>{{ publishTime }}</span>
          <span class="point">.</span>
          <span>{{ job.type }}</span>
        </p>
        <h2 class="text--dark job__title">{{ job.title }}</h2>
        <p class="text--violet location">{{ job.location }}</p>
        <a :href="companyUrl" ><span class="btn btn--violet round">Apply now</span></a>
      </div>
      <div v-html="job.description">
      </div>
    </div>
  </div>
</template>

<script>
import { computed, inject } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'JobDetail',
  setup () {
    const jobs = inject('jobs')
    const route = useRoute()

    const job = Array.from(jobs.value).find(job => job.id === route.params.id)
    const publishTime = route.params.publishTime

    const companyUrl = computed(() => {
      const urlSplitted = job.company_url ? job.company_url.split('/') : []

      //  A url always start by https://... So length must be > 2
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
.job {
  &--description {
    background: white;
    padding: 4rem;
    margin-top: 2rem;
    color: style.$var-gray-dark;

    p, li { line-height: 1.8rem}
    ul, li {padding-left: 1em }

    strong, h2, h3, h4{
      line-height: 5rem;
      color: black;
    }
    .job__title { line-height: 1 !important; }
  }

  &--company {
    @include style.mix-flexBox(
      $align: center
    );
    margin-top: 2rem;
    width:100%;
    background: white;
    min-height: 140px;
    position: relative;

    img { width: 140px; height: auto }

    .btn {
      position: absolute;
      right: 2.5rem ;
      top:50%;
      transform: translateY(-50%)
    }

    h2 { padding-left: 12px;}
  }

  &--infos {
    margin-bottom: 3rem;
    position: relative;
    p span { padding: 0 5px;}
    .point {
      font-size: 2rem;
      transform: translate(0, -5px);
    }
    .location {font-weight: 700;}

    > *:not(.btn) {
      padding: 5px 0;
    }

    .btn {
      position: absolute;
      top:40px;
      right: 40px;
    }
  }
}

</style>
