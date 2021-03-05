<template>
  <div
    class="job-card job round"
    @click="gotoJobDetail(job.id, publishTime, companyUrl)"
  >
    <span class="logo round">
      <img
        v-if="job.company_logo"
        :src="job.company_logo"
        :alt="`logo of ${job.company}`"
      >
      <span v-else>No Image</span>
    </span>
    <p class="flex text--gray-dark">
      <span>{{ publishTime }}</span>
      <span class="point">.</span>
      <span>{{ job.type }}</span>
    </p>
    <h2 class="text--dark job__title">{{ job.title }}</h2>
    <p class="text--gray-dark">{{ job.company }}</p>
    <p class="text--violet location">{{ job.location }}</p>
  </div>
</template>

<script>
import { Duration } from 'luxon'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const publishedDate = Date.parse(props.job.created_at)
    const duration = Duration.fromMillis(Date.now() - publishedDate)
      .toFormat('d h m s').split(' ')

    const publishTime = computed(() => {
      // Format the time to minute precision
      if (duration[0] !== '0') return `${duration[0]}d ago`
      else if (duration[1] !== '0') return `${duration[1]}h ago`
      else return `${duration[2]}m ago`
    })

    //  Test if the company url is valid
    /* eslint-disable-next-line */
    const urlTest = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/gm
    const test = urlTest.test(props.job.company_url)
    const companyUrl = computed(() => test ? props.job.company_url : props.job.url)

    const router = useRouter()
    const gotoJobDetail = (id, publishTime, companyUrl) => {
      router.push({ name: 'JobDetail', params: { id, publishTime, companyUrl } })
    }
    return {
      companyUrl,
      publishTime,
      gotoJobDetail
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../assets/scss/styles.scss' as style;

.job{
  &-card {
    width: min(350px, 90vw);
    height: 250px;
    background: white;
    padding: 2rem;
    position: relative;
    transition: .3s;
    cursor: pointer;
    transform: scale(.98);
    box-shadow: 0 0 10px  rgba($color: style.$var-violet, $alpha: 0.1);
    &:hover {
      box-shadow: 0 0px 15px  rgba($color: style.$var-violet, $alpha: .5);
      transform: scale(1);
    }

    @include style.mix-flexBox(
      $dir:column,
      $justify:space-around,
      $align: flex-start
    );

    .logo {
      width: 50px;
      min-height: 50px;
      box-shadow: 0 0 10px style.$var-gray;
      background: white;
      display: grid;
      place-content: center;
      position: absolute;
      top: 0;
      transform: translate(0, -50%);
      img { width: 100% }
    }
  }
  &__title {
    @include style.mix-setFont(
      $size: 1.2rem,
      $weight: bold,
      $line: 2rem
    );
  }
  p.flex {
    align-items: center;
    span { padding: 0 5px 0 0;}
  }

  p.location {
    font-weight: bold;
    text-transform: capitalize;
  }

  .point {
    font-size: 2rem;
    transform: translate(0, -5px);
  }
}

body.dark {
  .job-card {
    background: style.$var-dark;
    box-shadow: 1px 1px 0px style.$var-violet-light;
    &:hover {
      box-shadow: 10px 15px 0 style.$var-violet;
    }
    .logo { box-shadow: 0 0 10px style.$var-midnight; }
  }
}

</style>
