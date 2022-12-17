const app = Vue.createApp({
    data() {
        return {
            email: ''
        }
    },

    methods: {
        subscribe(e){
            e.preventDefault();
            if (this.email) {
                alert(`${this.email} subscribed successfully`)
                this.email = '';
            } 
        }
    }
})

app.mount('#app')
