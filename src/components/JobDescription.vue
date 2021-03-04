<template>
  <div class="job-description round">
    <div class="job__infos">
      <p class="flex text--gray">
        <span>{{ publishTime }}</span>
        <span class="point">.</span>
        <span>{{ job.type }}</span>
      </p>
      <h2 class="text--dark job__title">{{ job.title }}</h2>
      <p class="text--violet location">{{ job.location }}</p>
      <a :href="companyUrl" ><button class="btn btn--violet round">Apply now</button></a>
    </div>
    <div v-html="job.description"></div>
  </div>
</template>

<script>
export default {
  props: {
    publishTime: {
      type: String,
      required: true
    },
    job: {
      type: Object,
      required: true
    },
    companyUrl: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
@use '../assets/scss/styles' as style;
.job {
  &-description {
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

  &__infos {
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
      right: 0px;
    }
  }
}
@media only screen and (max-width: 620px) {
  .job-description{padding: 3rem 2rem;}
}

@media only screen and (max-width: 450px) {
  .job-description {
    padding: 2rem 1.5rem;
    .job__title { max-width: 100%;}
    .job__infos .btn {
      position: static;
      display:inline-block;
      margin: 1rem 0 0;
      width:100%;
      text-align: center;
    }
  }
}

body.dark {
  .job-description {
    background: style.$var-dark;
    color: style.$var-gray;

    strong,h1, h2, h3, h4 { color: style.$var-gray-light; }
  }
}
</style>
