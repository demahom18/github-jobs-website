<template>
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
</template>

<script>
export default {
  props: {
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
  .job--company {
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
      transform: translateY(-50%);
    }

    h2 {
      padding-left: 1rem;
      max-width: 80%;
      line-height: 1.5;
    }
  }
@media only screen and (max-width: 850px) {
  .job--company div h2 {
    max-width: 60%;
  }
}

@media only screen and (max-width: 620px) {
  .job--company {
    transform:translateY(-20%);
    flex-direction: column;
    justify-content: center;
    height: 230px;
    .btn {
      display: inline-block;
      position: static;
      margin-top: 2rem;
    }
    div h2 {
      max-width: 100%;
      text-align: center;
    }

    img{
      display: inline-block;
      transform: translateY(-40%);
      max-width: min(25vw, 100px);
      box-shadow: 0 0 5px rgba($color: style.$var-violet-light, $alpha: 0.3);
    }
  }
}
</style>
