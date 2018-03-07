<template >
  <div class="container-fluid" >
      <router-link :to="{path: '/product/fixedDeposit/edit/'+productId}">
        <b-button variant="secondary"> Edit</b-button>
      </router-link>
    <h1>Details for {{productId}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'fixedDepositDetails',
    data () {
      return {
        productId: ''
      }
    },
    created () {
      this.productId = this.$route.params.productId
    }
  }
</script>
