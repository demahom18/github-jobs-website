<template>
  <div class="job-page">
    <div class="job--company round">
      <img v-if="job.company_logo" :src="job.company_logo" :alt="job.company_logo + '\'s logo' ">
      <span v-else>No image</span>
      <h2>{{ job.company }}</h2>
      <span class="btn">Company site</span>
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
      </div>
      <div v-html="job.description">
      </div>
    </div>
  </div>
</template>

<script>
import { inject } from 'vue'
import { useRoute } from 'vue-router'
export default {
  name: 'JobDetail',
  setup () {
    const jobs = inject('jobs')
    const route = useRoute()

    const job = Array.from(jobs.value).find(job => job.id === route.params.id)
    const publishTime = route.params.publishTime
    console.log(publishTime)

    return {
      job,
      publishTime
    }
  }
}
</script>

<style lang="scss">
@use '../assets/scss/styles' as style;

.job-page {
  width: min(80vw, 800px);
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
  }
  &__title { line-height: 1 !important; }

  &--company {
    @include style.mix-flexBox(
      $align: center
    );
    margin-top: 2rem;
    background: white;
    min-height: 140px;

    img { width: 140px;}
  }

  &--infos {
    margin-bottom: 3rem;
    p span { padding: 0 5px;}
    .point {
      font-size: 2rem;
      transform: translate(0, -5px);
    }
    .location {font-weight: 700;}

    > * {
      padding: 5px 0;
    }
  }
}

</style>
