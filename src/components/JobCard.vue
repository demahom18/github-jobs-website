<template>
  <div class="job-card job">
    <span class="logo">
      <img
        v-if="job.company_logo"
        :src="job.company_logo"
        :alt="`logo of ${job.company}`"
      >
      <span v-else>No Image</span>
    </span>
    <p class="flex text--gray-dark">
      <span>{{ publishedSince }}</span>
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
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  },
  setup (props) {
    const publishedDate = Date.parse(props.job.created_at)
    const dateNow = Date.now()
    const duration = Duration.fromMillis(dateNow - publishedDate).toFormat('d h m s')
    const arr = duration.split(' ')

    const publishedSince = computed(() => {
      // Format the time to minute precision
      if (arr[0] !== '0') return `${arr[0]}d ago`
      else if (arr[1] !== '0') return `${arr[1]}h ago`
      else return `${arr[2]}m ago`
    })

    return { publishedSince }
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
    border-radius: 6px;
    padding: 2rem;
    position: relative;
    transition: .3s;
    cursor: pointer;
    box-shadow: 0 0 10px style.$var-gray;
    &:hover {
      box-shadow: 0 0 20px style.$var-gray-dark;
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
      border-radius: 5px;
      background: white;
      display: grid;
      place-content: center;
      position: absolute;
      top: 0;
      transform: translate(0, -50%);
      img { width: 100% }
    }
  }
  .job__title {
    @include style.mix-setFont(
      $size: 1.2rem,
      $weight: bold,
      $line: 1.5rem
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

</style>
