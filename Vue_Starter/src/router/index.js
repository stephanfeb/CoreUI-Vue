import Vue from 'vue'
import Router from 'vue-router'

// Containers
import Full from '@/containers/Full'

// Views
import Dashboard from '@/views/Dashboard'
import Banks from '@/views/partners/Banks'
import BankDetails from '@/views/partners/BankDetails'
import BankList from '@/views/partners/BankList'
import BankEdit from '@/views/partners/BankEdit'
import FixedDeposit from '@/views/products/FixedDeposit'
import FixedDepositDetails from '@/views/products/FixedDepositDetails'
import FixedDepositEdit from '@/views/products/FixedDepositEdit'
import FixedDepositList from '@/views/products/FixedDepositList'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  linkActiveClass: 'open active',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    {
      path: '/',
      redirect: '/dashboard',
      name: 'Home',
      component: Full,
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: Dashboard
        },
        {
          path: 'bank',
          name: 'Banks',
          redirect: '/bank/list',
          component: Banks,
          children: [
            {
              path: 'list',
              name: 'BankList',
              component: BankList
            },
            {
              path: 'details/:bankId',
              name: 'Bank Details',
              component: BankDetails
            },
            {
              path: 'edit/:bankId',
              name: 'Bank Edit',
              component: BankEdit
            }
          ]
        },
        {
          path: 'product',
          name: 'Fixed Deposit',
          redirect: '/product/fixedDeposit/list',
          component: FixedDeposit,
          children: [
            {
              path: 'fixedDeposit/list',
              name: 'List',
              component: FixedDepositList
            },
            {
              path: 'fixedDeposit/details/:productId',
              name: 'Details',
              component: FixedDepositDetails
            },
            {
              path: 'fixedDeposit/edit/:productId',
              name: 'Edit',
              component: FixedDepositEdit
            }
          ]
        }

      ]
    }
  ]
})
