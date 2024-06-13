

  const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList: [],
      } 
    },

    methods: {


    },

    mounted () {
        axios.get('../server.php').then(results => {
            console.log(results);
      (this.todoList = results.data)}) 

    }
  }).mount('#app')
