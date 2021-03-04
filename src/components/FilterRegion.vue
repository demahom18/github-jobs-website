<template>
  <div class="filter round">
    <form @submit.prevent="handleSubmit(form)">
      <div class="filter-by-name round">
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fill-rule="nonzero"/></svg>
        <input
          class="round"
          type="text"
          v-model="form.searchText"
          placeholder="Filter by title, company, expertise..."
        />
      </div>
      <div class="filter-by-location">
        <!-- eslint-disable-next-line vue/max-attributes-per-line -->
        <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fill-rule="nonzero"/></svg>
        <input
          type="text"
          v-model="form.searchLocation"
          placeholder="Filter by location..."
        />
      </div>
      <div class="filter-by-fulltime">
        <input
          type="checkbox"
          v-model="form.fulltimeChecked"
          id="checkbox"
        >
        <label for="checkbox">Full Time Only</label>
      </div>
      <div><button class="btn btn--violet round">Search</button></div>
    </form>
  </div>
</template>

<script>
import { reactive } from 'vue'
export default {
  setup (props, { emit }) {
    const form = reactive({
      searchText: '',
      searchLocation: '',
      fulltimeChecked: false
    })

    const handleSubmit = async (form) => {
      /** Remove all white spaces and replace by + */
      const text = form.searchText.trim().replace(' ', '+')
      const loc = form.searchLocation.trim().replace(' ', '+')
      const ft = form.fulltimeChecked === true ? 'on' : ''
      emit('filter', { text, loc, ft })
    }

    return {
      form,
      handleSubmit
    }
  }
}
</script>

<style lang="scss">
@use '../assets/scss/styles' as style;

.filter {
  transform: translateY(-40%);
  background: white;
  width: min(80vw, 1200px);
  height: 80px;
  position: relative;
  margin: 0 auto;
  form {
    @include style.mix-flexBox(
      $align:center,
      $justify: space-between
    );
    height:100%;
    position: absolute;
    width: 100%;
  }
  input {
    outline: none;
    font-family: inherit;
    border: none;
    padding: 0 1rem 0 3rem;
    height: 80px;
    &[type="text"] {
      width: 100%;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
      border-right: 2px solid style.$var-gray-light;
    }
  }
  div {
    position: relative;
  }

  svg {
    position: absolute;
    z-index: 5;
    top:50%;
    left:0;
    transform: translate(1rem, -50%);
  }

  &-by-name, &-by-location { flex-basis: min(23vw, 400px) !important}
  &-by-fulltime {
    @include style.mix-flexBox(
      $align:center,
      $justify: center,
      $gap: 0.7rem
    );
    margin: 0rem;
    + div { margin-right: 1rem;}
  }
}
@media only screen and (max-width: 880px) {
  .filter label { font-size: .8rem;}
}

@media only screen and (max-width: 650px) {
  //TODO: mobile version modal
}

body.dark .filter {
  background: style.$var-dark;
  box-shadow: 1px 1px 0px style.$var-violet-light;
  &:hover {
    box-shadow: 3px 3px 0 style.$var-violet;
  }
  *:not(.btn) {
    background: style.$var-dark;
    border-color: rgba($color: style.$var-gray-light, $alpha: 0.2);
    border-radius: 6px;
    color: style.$var-gray-light;
  }
  ::placeholder { color: style.$var-gray;}
}
</style>
