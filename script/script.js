const app = Vue.createApp({
    data() {
        return{
            team: 'Forza Milan!',
            imgSource: 'assets/img/037060a022d928837048b3a884e2dad8.jpg',
            displayFlex: 'd-flex',
            justContent: 'justify-content-center',
        }
    }
});

app.mount('#app');