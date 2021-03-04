<template>
  <div class="text--dark round job-description job-apply">
    <slot />
  </div>
</template>

<style lang="scss">
@use '../assets/scss/styles' as style;
.job-apply {
  margin: 2rem 0;
  padding: 1em 4em 2em;
  background: url('../assets/img/desktop/bg-pattern-detail-footer.svg') !important;
  overflow-y:auto;
  max-height: 260px;
  * { color: style.$var-gray-light !important;}
  li::marker { color: white;}
}

</style>
