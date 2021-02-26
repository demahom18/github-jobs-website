<template>
  <header>
    <!-- eslint-disable -->
    <div class="bg">
      <svg width="1981" height="161" viewBox="0 0 1981 161" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path id="path1" d="M1981 0.455994H0V60.456C0 115.684 44.7715 160.456 100 160.456H1981V0.455994Z" fill="#5964E0"/>
        <mask id="mask0" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="1981" height="161">
        <path id="path2" d="M1981 0.455994H0V60.456C0 115.684 44.7715 160.456 100 160.456H1981V0.455994Z" fill="white"/>
        </mask>
        <g mask="url(#mask0)">
        <path id="path2" opacity="0.0813802" fill-rule="evenodd" clip-rule="evenodd" d="M1717.88 -96.9683C1739.01 -120.931 1778.21 -112.598 1787.76 -82.1151L1901.88 282.048C1911.26 311.984 1884.91 340.935 1854.23 334.413L1487.74 256.513C1457.05 249.991 1444.76 212.828 1465.51 189.296L1717.88 -96.9683Z" fill="white"/>
        <path id="path3" opacity="0.0813802" fill-rule="evenodd" clip-rule="evenodd" d="M625.033 -288.886C621.915 -320.679 654.744 -343.666 683.553 -329.863L1027.71 -164.964C1056 -151.409 1059.21 -112.398 1033.51 -94.4041L726.598 120.501C700.9 138.495 665.339 122.138 662.277 90.917L625.033 -288.886Z" fill="white"/>
        <path id="path4" opacity="0.0813802" fill-rule="evenodd" clip-rule="evenodd" d="M-125.461 -33.8033C-128.578 -65.5958 -95.7496 -88.5828 -66.9407 -74.7795L277.22 90.1189C305.511 103.674 308.718 142.685 283.02 160.679L-23.8959 375.584C-49.5936 393.578 -85.1552 377.222 -88.2168 346L-125.461 -33.8033Z" fill="white"/>
        </g>
      </svg>
    </div>
    <h1>devjobs</h1>
    <div class="switcher">
      <label class="switch">
        <input
          v-model="checked"
          type="checkbox"
          @change="$emit('switched', checked)"
        >
      <span class="slider round" />
    </label>
    </div>
  </header>
</template>

<script>
import { ref } from 'vue'
export default {
  emits: ['switched'],
  setup () {
    const checked = ref(false)

    return { checked }
  }
}
</script>

<style lang="scss">
@use '../assets/scss/styles' as style;
header {
  position: relative;
  width: 100%;
  height: 162px;
  padding: 0 5vw;
  @include style.mix-flexBox(
    $justify: space-between,
    $align: center
  );
  .bg {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: -5;
  }

  h1 { color: white}
}
.switch {
  position: relative;
  display: block;
  z-index: 10;
  width: 64px;
  height: 32px;
}

.switch input { display: none}

.slider {
  position: absolute;
  z-index: 10;
  cursor: pointer;
  background: white;
  transition: .5s;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, .5);
}
.slider:before {
  position: absolute;
  content:'';
  bottom: 14px;
  background-color: black;
  transition: .5s;
}
input:checked + .slider {
  background-color:black;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, .5);
}
input:checked + .slider::before {
  transform: translate(32px, -50%);
  background: white;
}

.slider.round {
  border-radius: 30px;
}
.slider.round:before {
  width: 40%;
  height: 75%;
  top:50%;
  left:3px;
  transform: translateY(-50%);
  border-radius: 50% ;
}

</style>
