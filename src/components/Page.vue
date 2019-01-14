<template>
  <div>
    <div :class="[{ 'border-bottom': headerBorder }, 'pb-3 nb-3']">
      <slot name="header" />
    </div>

    <slot />

    <separator />
  </div>
</template>

<script>
import separator from './Separator'
export default {
  props: {
    headerBorder: {
      type: Boolean,
      default: true
    }
  },
  components: {
    separator
  }
}
</script>

<style lang="css">
</style>
