<template>
    <page :header-boreder="false">
      <template slot="header">
          <h1>{{$t('our_products')}}</h1>
      </template>

      <p class="lead">{{$t('product_index_lead')}}</p>
      <div class="card-row mb-12">
        <product-card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
    </page>
</template>

<script>
import Page from './Page'
import ProductCard from './ProductCard'

export default {
  data () {
    return {
      products: []
    }
  },
  mounted () {
    fetch(`/static/api/${this.$route.params.locale}/products.json`)
      .then(response => response.json())
      .then((products) => { this.products = products })
  },
  components: {
    Page,
    ProductCard
  }
}
</script>

<style lang="css">
</style>
