const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
        }
    },

    methods: {

        fatto(index) {
            if (this.todoList[index].completed === false) {
                this.todoList[index].completed = true
            } else { this.todoList[index].completed = false }
        }



    },

    mounted() {
        axios.get('../server.php').then(results => {
            console.log(results);
            (this.todoList = results.data)
        })

    }
}).mount('#app')
