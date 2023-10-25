// console.log('ciao')

const {createApp} = Vue;

createApp ({
    data() {
        return {
            currentIndex: 0,
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

            this.todos.splice(index, 1)
            
        }
    },
    ////////////////////////////////////////////////////////////////////////////
    mounted() {
        // console.log('si')
    }
}).mount ('#app')