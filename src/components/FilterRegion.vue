<template>
  <div>
    <div class="modal-wrapper" v-if="modalOpen" @click="modalOpen=false"></div>
    <div class="filter round">
      <form @submit.prevent="handleSubmit(form)">
        <div class="filter-by-name round">
          <div
            class="search-icon"
            @click="searchOnMobile(form)"
          ><svg width="24" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z" fill="#5964E0" fill-rule="nonzero"/></svg></div>
          <input
            class="round"
            type="text"
            v-model="form.searchText"
            placeholder="Filter by title, company, expertise..."
            aria-label="filter by description"
          />
          <div><svg @click="modalOpen=!modalOpen" class="icon-filter" width="20" height="20" xmlns="http://www.w3.org/2000/svg"><path d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z" fill="#5964E0" fill-rule="nonzero"/></svg></div>
        </div>
        <div :class="{ modal: modalOpen, filter__right: !modalOpen }">
          <div class="filter-by-location">
            <svg width="20" height="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z" fill="#5964E0" fill-rule="nonzero"/></svg>
            <input
              type="text"
              v-model="form.searchLocation"
              placeholder="Filter by location..."
              aria-label="filter by location"
            />
          </div>
          <div class="filter-by-fulltime">
            <div>
              <input
                type="checkbox"
                v-model="form.fulltimeChecked"
                id="checkbox"
              />
              <label for="checkbox">Full Time Only</label>
            </div>
            <div><button class="btn btn--violet round" @click="modalOpen=false">Search</button></div>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
export default {
  setup (props, { emit }) {
    const form = reactive({
      searchText: '',
      searchLocation: '',
      fulltimeChecked: false
    })

    const modalOpen = ref(false)

    const handleSubmit = (form) => {
      const isInvalid = Object.values(form).every(field => !field)
      if (isInvalid) return

      /** Remove all white spaces and replace by + */
      const text = form.searchText.trim().replaceAll(' ', '+')
      const loc = form.searchLocation.trim().replaceAll(' ', '+')
      const ft = form.fulltimeChecked === true ? 'on' : ''
      emit('filter', { text, loc, ft })
    }

    const searchOnMobile = (form) => {
      const isMobile = window.innerWidth < 720
      if (isMobile) handleSubmit(form)
    }

    return {
      form,
      modalOpen,
      handleSubmit,
      searchOnMobile
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
  margin: 0 auto;
  position: relative;
  z-index: 10;

  ::placeholder {font-size: 1rem;}

  form,
  &-by-name {
    @include style.mix-flexBox($justify: space-between, $align: center);
    height:100%;
    width: 100%;
  }

  input[type="text"] {
    border: none;
    outline: none;
  }

  &-by-name input {
    height: 100%;
    width: calc(100% - 45px - 4rem);
  }

  svg {
    margin: 0 1rem;
    path:hover { fill: style.$var-violet-light }
    &.icon-filter { cursor: pointer;}
  }

  &__right { display: none; }
}

@media only screen and (min-width: 720px) {
  .filter {
    .icon-filter { display: none;}
    &__right { width: 70%; }

    &__right,
    &-by-fulltime,
    &-by-location {
      height: 100%;
      @include style.mix-flexBox(
        $justify: center,
        $align: center
      );

      label { font-size: .8rem;}
    }

    &-by-fulltime {
      width: 60%;
      justify-content: space-between;
      label, input { margin: 0 0 0 .5rem;}
    }

    .btn { margin: 0 1rem 0 0 }

    input[type="text"] {
      border-right: 2px solid style.$var-gray-light;
      border-top-right-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    &-by-location {
      width: 40%;
      input {
        height: 100%;
        width: calc(100% - 2rem);
      }
    }

    &-by-name {
      width: 30%;
      input { width: calc(100% - 24px - 2rem); }
    }
  }
}

/** searchButton on mobile */
@media only screen and (max-width: 720px) {
  .filter-by-name {
    input { padding:0 0 0 1rem;}
    .search-icon {
      order: 3;
      height: 60%;
      margin-right:1rem;
      background: style.$var-violet;
      align-self: center;
      border-radius: 6px;
      cursor: pointer;

      svg { transform: translate(2px, 50%) }
      path { fill: white}

      &:hover {
        background: style.$var-violet-light;
        path { fill: white;}
      }
    }
}
}

body.dark .filter {
  background: style.$var-dark;
  box-shadow: 1px 1px 0px style.$var-violet-light;
  transition: .3s;
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

/** Modal */

.filter .modal {
  position: fixed;
  width: min(400px, 90vw);
  left: 50%;
  transform: translate(-50%, 100%);
  height: 220px;
  display: grid;
  place-content: center;
  background: white;
  border-radius: 6px;
  z-index: 15;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  > * {
    width: 100%;
    padding: 1rem 1rem 1.3rem;
  }

  .filter-by-location {
    display: flex;
    align-items: center;
    border-bottom: 2px solid style.$var-gray-light;
    &, input { border-radius: 0 !important;}
    input[type="text"] {
      width: 100%;
    }
  }

  .filter-by-fulltime {
    padding: 1rem 2rem;

    > div { margin: 0 0 1rem;}

    label { margin: 0 1rem;}

    .btn {
      width: 100%;
    }
  }
}
.modal-wrapper {
  position: fixed;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba($color: #000000, $alpha: .5);
  z-index: 10;
}

</style>
