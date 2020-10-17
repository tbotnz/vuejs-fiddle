var app = new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue!'
    },
    delimiters: ['[[', ']]']
})

var app2 = new Vue({
  el: '#app-2',
  data: {
    message: 'You loaded this page on ' + new Date().toLocaleString()
  }
})

var app3 = new Vue({
    el: '#app-3',
    data: {
      seen: false
    }
})

var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue' },
        { text: 'Build something awesome' }
      ]
    },
    delimiters: ['[[', ']]']
})

var app5 = new Vue({
    el: '#app-5',
    data: {
      message: 'Hello Vue.js!'
    },
    methods: {
      reverseMessage: function () {
        this.message = this.message.split('').reverse().join('')
      }
    },
    delimiters: ['[[', ']]']
  })

  var app6 = new Vue({
    el: '#app-6',
    data: {
      message: 'Hello Vue!'
    },
    delimiters: ['[[', ']]']
  })

  Vue.component('todo-item', {
    props: ['todo'],
    template: '<li>{{ todo.text }}</li>'
  })
  
  var app7 = new Vue({
    el: '#app-7',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    }
  })

  Vue.component('tonys-vue', {
    props: ['things'],
    template: '<p>{{ things.text }}</p>'
  })
  
  var app9 = new Vue({
    el: '#app-9',
    data: {
      groceryList: [
        { id: 0, text: 'Vegetables' },
        { id: 1, text: 'Cheese' },
        { id: 2, text: 'Whatever else humans are supposed to eat' }
      ]
    },
    created: function () {
      // `this` points to the vm instance
      alert('a is: ' + this.groceryList[0].text)
    }
  })