<template>
  <header>
    <h1 @click="$router.push({ name: 'Home' })">devjobs</h1>
    <div class="switcher">
      <span>
        <!--eslint-disable-next-line -->
        <svg width="20" height="19" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.635c.33 0 .612.295.612.639v1.89c0 .344-.282.638-.612.638s-.612-.294-.612-.638v-1.89c0-.344.282-.639.612-.639zm-4.488-1.783c.27.262.27.68 0 .941L4.03 16.231a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.7-.261.97 0zm9.946 0l1.483 1.438c.27.261.27.68 0 .941a.698.698 0 01-.97 0l-1.483-1.438a.649.649 0 010-.94c.242-.262.674-.262.97 0zM10 4.552c1.396 0 2.685.525 3.598 1.4.913.85 1.504 2.05 1.504 3.35 0 1.3-.59 2.5-1.504 3.35a5.314 5.314 0 01-3.598 1.4c-1.396 0-2.685-.525-3.598-1.4-.913-.85-1.504-2.05-1.504-3.35 0-1.3.564-2.5 1.504-3.35A5.314 5.314 0 0110 4.552zM2.607 8.906c.355 0 .658.274.658.594 0 .32-.303.594-.658.594H.658C.304 10.094 0 9.82 0 9.5c0-.32.304-.594.658-.594h1.95zm16.735 0c.354 0 .658.274.658.594 0 .32-.304.594-.658.594h-1.95c-.354 0-.657-.274-.657-.594 0-.32.303-.594.658-.594h1.949zM4.03 2.77l1.482 1.438c.27.261.27.68 0 .94-.242.262-.674.262-.97 0L3.059 3.71a.649.649 0 010-.941c.27-.261.701-.261.97 0zm12.91 0c.27.261.27.68 0 .941l-1.482 1.438a.698.698 0 01-.97 0 .649.649 0 010-.941l1.482-1.438c.27-.261.701-.261.97 0zM10 .198c.33 0 .612.294.612.638v1.89c0 .344-.282.639-.612.639s-.612-.295-.612-.639V.836c0-.344.282-.638.612-.638z" fill="#FFF" fill-rule="nonzero"/></svg>
      </span>
      <label class="switch">
        <input
          v-model="checked"
          type="checkbox"
          @input="switchTheme"
          :class="{ active: checked }"
        >
        <span class="slider round" />
      </label>
      <span>
        <!--eslint-disable-next-line -->
        <svg width="12" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M6 0c1.516 0 2.925.566 3.978 1.523A3.979 3.979 0 008 1a4.014 4.014 0 00-2.821 1.179A3.927 3.927 0 004 5c0 1.095.463 2.105 1.179 2.821A3.927 3.927 0 008 9a4.034 4.034 0 003.974-3.548c.017.18.026.364.026.548a6.02 6.02 0 01-1.768 4.232A6.02 6.02 0 016 12a5.89 5.89 0 01-4.232-1.768A6.02 6.02 0 010 6a5.89 5.89 0 011.768-4.232A6.02 6.02 0 016 0z" fill="#FFF" fill-rule="nonzero"/></svg>
      </span>
   </div>
  </header>
</template>

<script>
import { ref } from 'vue'
import getUserTheme from '../composables/getUserTheme'
export default {
  emits: ['switched'],
  setup () {
    const checked = ref(false)
    const { userTheme } = getUserTheme()
    let currentTheme = window.localStorage.getItem('theme-color') || userTheme

    document.body.classList.add(currentTheme)
    checked.value = currentTheme === 'dark'

    const switchTheme = () => {
      const newTheme = checked.value ? 'light' : 'dark'

      document.body.classList.remove(currentTheme)
      document.body.classList.add(newTheme)
      window.localStorage.setItem('theme-color', newTheme)
      currentTheme = window.localStorage.getItem('theme-color')
    }

    return { checked, switchTheme }
  }
}
</script>

<style lang="scss">
@use '../assets/scss/styles' as style;
header {
  position: relative;
  width: 100%;
  height: 160px;
  padding: 0 5vw;
  background: url('../assets/bg.svg');
  @include style.mix-flexBox(
    $justify: space-between,
    $align: center
  );

  > * { transform: translateY(-1.5rem)}

  h1 { color: white; cursor: pointer}
}

/**Switcher */
.switcher {
  @include style.mix-flexBox(
    $align: center,
    $justify: center
  );
  > * { padding: 0 1em;}
}

.switch {
  position: relative;
  display: block;
  width: 48px;
  height: 24px;
}

.switch input { display: none}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left:0;
  bottom:0;
  right: 0;
  background: #dfdfdf;
  transition: .5s;
}
.slider:before {
  position: absolute;
  content:'';
  bottom: 14px;
  background-color: style.$var-violet;
  transition: .5s;
}
input:checked + .slider {
  background-color:style.$var-violet;
  box-shadow: 0px 0px 0px 1px style.$var-violet-light;
}
input:checked + .slider::before {
  transform: translate(24px, -50%);
  background: #dfdfdf;
}

.slider.round {
  border-radius: 30px;
}
.slider.round:before {
  width: 35%;
  height: 65%;
  top:50%;
  left:3px;
  transform: translateY(-50%);
  border-radius: 50% ;
}

</style>
