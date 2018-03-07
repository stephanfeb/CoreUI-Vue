<template >
  <div class="container-fluid" >
    <table class="table" v-if="banks.length">
      <thead>
      <tr>
        <th>#</th>
        <th>Bank Name</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(bank, index) in banks">
        <th scope="row">{{index}}</th>
        <td><router-link :to="{path: '/bank/details/'+index}">{{bank.name}}</router-link></td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'bankList',
    data () {
      return {
        banks: [{name: 'OCBC'}, {name: 'VietBank'}, {name: 'HSBC'}]
      }
    },
    created () {

    }
  }
</script>
