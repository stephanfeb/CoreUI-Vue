<template >
  <div class="container-fluid" >
    <table class="table" v-if="products.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Product</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(product, index) in products">
        <th scope="row">{{index}}</th>
        <td><router-link :to="{path: '/product/fixedDeposit/details/'+index}">{{product.name}}</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'fixedDepositList',
    data () {
      return {
        products: [{name: 'OCBC FD'}, {name: 'VietBank FD'}, {name: 'HSBC 12m FD'}]
      }
    },
    created () {

    }
  }
</script>
