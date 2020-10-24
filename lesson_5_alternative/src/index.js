// import bootstrap from 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './layout/styles/styles.css';

// import app from './components';

// app();

const app = new Vue({
    el: '#app',
    data: {
        catalogItems: [],
        catalogUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/catalog.json',
        basketUrl: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json'
    },
    methods: {
        get(url) {
            return fetch(url).then(d => d.json());
        }
    },
    mounted() {
        this.get(this.catalogUrl).then(items => { this.catalogItems = items })
    }
})