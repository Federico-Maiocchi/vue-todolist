// console.log('ciao')

const {createApp} = Vue;

createApp ({
    data() {
        return {
            currentIndex: 0,
            newItem: '',
            todos: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ]
        }
    },
    ////////////////////////////////////////////////////////////////////////////
    methods: {

        removeItem(index) {

            this.todos.splice(index, 1);
            
        },

        addItem() {
            this.todos.push({text: this.newItem, done: false});
            // console.log(this.todos.push)

            this.newItem = ''
        },

        changeDone(index) {
            this.todos[index].done = !this.todos[index].done 
        }
    },
    ////////////////////////////////////////////////////////////////////////////
    mounted() {
        // console.log('si')
    }
}).mount ('#app')