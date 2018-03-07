<template>

  <div>
    <h2>Editing the Bank {{bankId}}</h2>

    <b-form @submit="onSubmit">

      <b-button type="submit">Save</b-button>
    </b-form>

    <div>&nbsp;</div>

    <router-link :to="{path: '/bank/details/' + bankId}">
      <b-button type="button">Cancel</b-button>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: 'BankEdit',
    data () {
      return {
        bankId: ''
      }
    },
    created () {
      this.bankId = this.$route.params.bankId
    },
    methods: {
      onSubmit: function (evt) {
        this.$router.push({path: '/bank/details/' + this.bankId})
      }
    }
  }
</script>
