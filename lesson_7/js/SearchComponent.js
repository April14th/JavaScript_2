// Vue.component('search-form', {
//     props: ['value'],
//     methods: {
//       updateValue: function (value) {
//         this.$emit("input", value);
//       }
//     },
//     template: `<form action="#" class="search-form" @submit.prevent="$emit('filter')">
//                 <input type="text" class="search-field" :value="value" @input="updateValue($event.target.value)">
//                 <button type="submit" class="btn-search">
//                     <i class="fas fa-search"></i>
//                 </button>
//             </form>`
// });

Vue.component('search-form', {
  data () {
    return {
      userSearch: ''
    }
  },
  template: `<form action="#" class="search-form" @submit.prevent="$parent.filter(userSearch)">
              <input type="text" class="search-field" v-model="userSearch">
              <button type="submit" class="btn-search">
                  <i class="fas fa-search"></i>
              </button>
          </form>`
});