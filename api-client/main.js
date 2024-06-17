const { createApp } = Vue

createApp({
    data() {
        return {
            todoList: [],
            newTask: "",
            newId: ""
        }
    },

    methods: {

        fatto(index) {
            if (this.todoList[index].completed === false) {
                this.todoList[index].completed = true
            } else { this.todoList[index].completed = false }
        },

        addTask() {
            const newThing = {
                id: this.newId,
                task: this.newTask,
                completed: false
            }

            //this.todoList.push(newThing)

            const config = {

                Headers: {
                    'content-type': 'multipart/form-data'
                }
            }


            axios.post('../server.php', newThing, config).then(results => {
                console.log(results);
                (this.todoList = results.data)
            })
        },




    },

    mounted() {
        axios.get('../server.php').then(results => {
            console.log(results);
            (this.todoList = results.data)
        })

    }
}).mount('#app')
