


new Vue({
  el: '#np',
  data: {
    // 'library': 'netmiko',
    // "connection_args": {
    //   "device_type": driver,
    //   "host": host,
    //   "username": username,
    //   "password": password,
    //   "timeout": 5,
    //   "port": port
    // },
    // "command": commands,
    // "queue_strategy": "fifo"
    username  : '',
    password   : '',
    driver : 'cisco_ios',
    host : '',
    commands: '',
    apikey: '2a84465a-cf38-46b2-9d86-b84Q7d57f288',
    netpalmip: '',
    port: '',   
  }    

})

// var vm = new Vue({
//   el: '#np',
//   data () {
//     return {
//       info: null
//     }
//   },
//   // define methods under the `methods` object
//   methods: {
//     execute: function (event) {
//       // `this` inside methods point to the Vue instance
//       axios
//       .get('https://api.coindesk.com/v1/bpi/currentprice.json')
//       .then(response => (this.info = response))
//     }
//   }
// })

// info = {"data":"cat"};