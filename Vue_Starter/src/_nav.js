export default {
  items: [
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer'
    },
    {
      name: 'Partners',
      'icon': 'icon-umbrella',
      children: [
        {
          name: 'Banks',
          url: '/bank/list',
          'icon': 'icon-diamond',
          class: 'mt-auto'

        }
      ]
    },
    {
      name: 'Products',
      'icon': 'icon-umbrella',
      children: [
        {
          name: 'Fixed Deposit',
          url: '/product/fixedDeposit/list',
          'icon': 'icon-diamond',
          class: 'mt-auto'

        }
      ]
    }
  ]
}
