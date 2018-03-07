<template>

  <div>
    <h2>Editing the Fixed Deposit {{productId}}</h2>

    <b-form @submit="onSubmit">

      <b-button type="submit">Save</b-button>
    </b-form>

    <div>&nbsp;</div>

    <router-link :to="{path: '/product/fixedDeposit/details/' + productId}">
      <b-button type="button">Cancel</b-button>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: 'BankEdit',
    data () {
      return {
        productId: ''
      }
    },
    created () {
      this.productId = this.$route.params.productId
    },
    methods: {
      onSubmit: function (evt) {
        this.$router.push({path: '/product/fixedDeposit/details/' + this.productId})
      }
    }
  }
</script>
