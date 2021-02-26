<template>
  <div>
    <div class="job-page">
      <div class="job--company round">
        <img class="round" v-if="job.company_logo" :src="job.company_logo" :alt="job.company_logo + '\'s logo' ">
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
          <p class="flex text--gray">
            <span>{{ publishTime }}</span>
            <span class="point">.</span>
            <span>{{ job.type }}</span>
          </p>
          <h2 class="text--dark job__title">{{ job.title }}</h2>
          <p class="text--violet location">{{ job.location }}</p>
          <a :href="companyUrl" ><span class="btn btn--violet round">Apply now</span></a>
        </div>
        <div v-html="job.description"></div>
      </div>
      <div class="text--dark round job--description job__apply">
        <h3>How to apply</h3>
        <div v-html="job.how_to_apply"></div>
      </div>
    </div>
    <footer>
      <div>
        <div>
          <h4>{{ job.title }}</h4>
          <p class="text--gray">{{ job.company }}</p>
        </div>
        <a :href="companyUrl" ><span class="btn btn--violet round">Apply now</span></a>
      </div>
    </footer>
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

    console.log(job)
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
.job {
  &--description {
    background: white;
    padding: 4rem;
    color: style.$var-gray-dark;

    p, li { line-height: 1.8rem}
    ul, li {padding-left: 1em }

    strong,h1, h2, h3, h4{
      margin: 2rem 0;
      color: black;
      font-size: 1.3rem;
    }
    .job__title {
      line-height: 1.5 !important;
      margin: 0;
      max-width: 65%;
    }
  }

  &--company {
    @include style.mix-flexBox(
      $align: center
    );
    transform:translateY(-40%);
    width:100%;
    background: white;
    height: 140px;
    position: relative;

    img { max-width: 140px; max-height:100% }

    .btn {
      position: absolute;
      right: 2.5rem ;
      top:50%;
      transform: translateY(-50%)
    }

    h2 {
      padding-left: 1rem;
      max-width: 80%;
      line-height: 1.5;
    }
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

  &__apply {
    margin: 2rem 0;
    padding: 1em 4em 2em;
    background: url('../assets/img/desktop/bg-pattern-detail-footer.svg');
    // background-position: fixed;
    overflow-y:auto;
    max-height: 260px;
    a { word-break: break-all;}
    * { color: white !important;}
  }
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
    font-size: 1.3rem;
  }
}
</style>
