<template>
  <div class="loader">
    <h2 class="fetch">Wait Please, Fetching Data...</h2>
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
  display: grid;
  place-content: center;
  padding: 50px 0;
}
.loader-rotate {
  margin: 50px auto;
  width: 100px;
  height: 100px;
  position: relative;

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
      background: style.$var-violet;
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

@keyframes rotate {
  0% {
    transform: scale(1)
  }
  100% {
    transform: scale(.1);
  }
}

</style>
