Vue.createApp({
    template: `
        <div>123{{title}}</div>
    `,
    data() {
        return { title: 'mytitle' }
    }
}).mount('#App')