<template >
  <div class="container-fluid" >
      <router-link :to="{path: '/bank/edit/'+bankId}">
        <b-button variant="secondary"> Edit</b-button>
      </router-link>
    <h1>Details for {{bankId}}</h1>
  </div>
</template>

<script>
  export default {
    name: 'bankDetails',
    data () {
      return {
        bankId: ''
      }
    },
    created () {
      this.bankId = this.$route.params.bankId
    }
  }
</script>
