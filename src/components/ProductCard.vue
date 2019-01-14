<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{region.name}}</h5>

      <p class="card-text small text-muted">
        {{ctx}}
      </p>

      <p class="card-text">
        {{region.description}}
      </p>
    </div>
  </div>
</template>

<script>
import LocalizedLink from './LocalizedLink'
export default {
  props: {
    ctx: []
  },
  components: {
    LocalizedLink
  },
  created () {
    console.log('Prod:', this.ctx)
  }
}
</script>
