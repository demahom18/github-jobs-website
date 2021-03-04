<template>
  <div class="loader">
    <h3 class="loader-text">Wait Please, Fetching Data...</h3>
    <div class="loader-rotate">
      <span style="--i:1"></span>
      <span style="--i:2"></span>
      <span style="--i:3"></span>
      <span style="--i:4"></span>
      <span style="--i:5"></span>
      <span style="--i:6"></span>
      <span style="--i:7"></span>
      <span style="--i:8"></span>
      <span style="--i:9"></span>
      <span style="--i:10"></span>
      <span style="--i:11"></span>
      <span style="--i:12"></span>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@use '../assets/scss/styles' as style;

.loader {
  &-text {margin: 0 auto;}
  &-rotate {
    width: 100px;
    height: 100px;
    position: relative;
    margin: 0 auto;
    transform:translateX(-50%);

    span {
      position: absolute;
      top: 50%;
      width: 100%;
      height: 100%;
      transform: rotate(calc(30deg * var(--i)));

      &::before {
        content:'';
        position: absolute;
        top: 50%;
        width: 15px;
        height:15px;
        border-radius: 50%;
        background: style.$var-gray-light;
        animation: rotate linear infinite 1.2s;
        animation-delay: calc(.1s * var(--i));
        box-shadow:
          0 0 10px style.$var-violet-light,
          0 0 20px style.$var-violet-light,
          0 0 40px style.$var-violet-light,
          0 0 60px style.$var-violet-light,
          0 0 80px style.$var-violet-light,
          0 0 100px style.$var-violet-light,
          0 0 120px style.$var-violet-light;
      }
    }
  }
}

@keyframes rotate {
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(.1);
  }
}
body.dark .loader-rotate span:before {
  box-shadow:
          0 0 10px style.$var-violet,
          0 0 20px style.$var-violet,
          0 0 40px style.$var-violet,
          0 0 60px style.$var-violet,
          0 0 80px style.$var-violet,
          0 0 100px style.$var-violet,
          0 0 120px style.$var-violet;
}
</style>
