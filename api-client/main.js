

  const { createApp } = Vue

  createApp({
    data() {
      return {
        todoList: []
      } 
    },

    methods: {


    },

    mounted () {
        axios.get('../server.php').then(response => {
            console.log(response);
      (this.todoList = response.data)})
    }
  }).mount('#app')
