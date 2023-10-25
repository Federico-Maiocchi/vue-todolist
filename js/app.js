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
            currentIndex = index;
            
        }
    },
    ////////////////////////////////////////////////////////////////////////////
    mounted() {
        // console.log('si')
    }
}).mount ('#app')