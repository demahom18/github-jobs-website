<template>
  <div class="text--dark round job-description job-apply">
    <slot />
  </div>
</template>

<style lang="scss">
.job-apply {
  margin: 2rem 0;
  padding: 1em 4em 2em;
  background: url('../assets/img/desktop/bg-pattern-detail-footer.svg');
  overflow-y:auto;
  max-height: 260px;
  a { word-break: break-all;}
  * { color: white !important;}
  li::marker { color: white;}
}
</style>
