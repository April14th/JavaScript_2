(self.webpackChunkProject=self.webpackChunkProject||[]).push([[75],{75:(t,e,s)=>{"use strict";s.r(e),s.d(e,{default:()=>l});var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("main",[s("div",[s("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[s("div",{staticClass:"carousel-inner container"},[s("div",{staticClass:"carousel-item active"},[s("img",{staticClass:"d-block",attrs:{src:t.$store.state.choosenProduct.productSlideImg,alt:"slide1"}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block",attrs:{src:t.$store.state.choosenProduct.productSlideImg,alt:"slide2"}})]),t._v(" "),s("div",{staticClass:"carousel-item"},[s("img",{staticClass:"d-block",attrs:{src:t.$store.state.choosenProduct.productSlideImg,alt:"slide3"}})])]),t._v(" "),t._m(0),t._v(" "),t._m(1)]),t._v(" "),s("div",{staticClass:"womanCollectionContainer container border px-0"},[s("div",{staticClass:"womanCollection"},[s("div",{staticClass:"womanCollectionTop d-flex flex-column align-items-center border-bottom"},[t._m(2),t._v(" "),s("div",{staticClass:"womenCollectionTextTitle"},[t._v(t._s(t.$store.state.choosenProduct.productName))]),t._v(" "),s("div",{staticClass:"womenCollectionText"},[t._v("\r\n                            Compellingly actualize fully researched processes before proactive outsourcing.\r\n                            Progressively syndicate collaborative architectures before cutting-edge services.\r\n                            Completely visualize parallel core competencies rather than exceptional portals.\r\n                        ")]),t._v(" "),s("div",{staticClass:"womenCollectionFeatures"},[s("div",[t._v("MATERIAL: "),s("span",[t._v(t._s(t.$store.state.choosenProduct.material))])]),t._v(" "),s("div",[t._v("DESIGNER: "),s("span",[t._v(t._s(t.$store.state.choosenProduct.designer))])])]),t._v(" "),s("div",{staticClass:"womenCollectionPrice"},[t._v("$"+t._s(t.$store.state.choosenProduct.productPrice))])]),t._v(" "),s("div",{staticClass:"womanCollectionBottom"},[s("form",{staticClass:"womanCollectionBottomChoose"},[s("div",{staticClass:"womenCollectionChoose"},[s("div",[t._v("CHOOSE SIZE")]),t._v(" "),s("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedSizeOfProduct,expression:"selectedSizeOfProduct"}],on:{change:[function(e){var s=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.selectedSizeOfProduct=e.target.multiple?s:s[0]},t.getChoosenSize]}},t._l(t.$store.state.choosenProduct.productSizes,(function(e){return s("option",{key:e},[t._v(t._s(e))])})),0)]),t._v(" "),s("div",{staticClass:"womenCollectionChoose"},[s("div",[t._v("QUANTITY")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.$store.state.choosenProduct.amount,expression:"$store.state.choosenProduct.amount"}],attrs:{type:"number",min:"1",max:"99"},domProps:{value:t.$store.state.choosenProduct.amount},on:{input:[function(e){e.target.composing||t.$set(t.$store.state.choosenProduct,"amount",e.target.value)},function(e){return t.limitSizeQuantity(e.target.min,e.target.max)}]}})])]),t._v(" "),s("button",{staticClass:"btn btn-outline-secondary feturedButton",attrs:{type:"button"},on:{click:function(e){return t.$store.commit("addToBasket",t.$store.state.choosenProduct)}}},[s("i",{staticClass:"fas fa-shopping-cart"}),t._v(" Add to Cart\r\n                        ")])])])]),t._v(" "),s("div",{staticClass:"container px-0"},[s("div",{staticClass:"alsoTitle d-flex justify-content-center"},[t._v("you may like also")]),t._v(" "),s("catalog",{attrs:{type:"singlePageCatalog"}})],1)])]),t._v(" "),t._m(3)])},a=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[s("span",{staticClass:"carousel-control-prev-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Previous")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[s("span",{staticClass:"carousel-control-next-icon",attrs:{"aria-hidden":"true"}}),t._v(" "),s("span",{staticClass:"sr-only"},[t._v("Next")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"womenCollectionTitle"},[t._v("WOMEN COLLECTION\r\n                            "),s("div",{staticClass:"womenCollectionTitleBorder"},[s("div"),t._v(" "),s("div"),t._v(" "),s("div")])])},function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"subscribeBg mt-5 pt-5 pb-5"},[o("div",{staticClass:"container"},[o("div",{staticClass:"row pb-5 pt-0 pt-lg-5"},[o("div",{staticClass:"d-flex col-lg-6 px-0 mt-5 mb-5 pr-0 pr-lg-5"},[o("div",{staticClass:"col-2 col-md-2 d-flex align-self-start"},[o("img",{attrs:{src:s(402),alt:"Avatar"}})]),t._v(" "),o("div",{staticClass:"col-10 pl-5 pl-md-2 pl-lg-5"},[o("blockquote",{staticClass:"reviewsTextMassage "},[t._v("\r\n                            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,\r\n                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”\r\n                        ")]),t._v(" "),o("div",{staticClass:"reviewsTextName mt-3"},[t._v("\r\n                            Bin Burhan\r\n                        ")]),t._v(" "),o("div",{staticClass:"reviewsTextFrom"},[t._v("\r\n                            Dhaka, Bd\r\n                        ")])])]),t._v(" "),o("div",{staticClass:"subscribeEmail d-flex justify-content-center flex-column align-items-center col-lg-6 border-left "},[o("div",{staticClass:"subscribeEmailHead"},[t._v("\r\n                        Subscribe\r\n                    ")]),t._v(" "),o("div",{staticClass:"subscribeEmailText pb-4"},[t._v("\r\n                        FOR OUR NEWLETTER AND PROMOTION\r\n                    ")]),t._v(" "),o("form",{staticClass:"subscribeForm input-group mb-3 pl-1 pl-sm-4"},[o("input",{staticClass:"form-control pt-4 pb-4\r\n                                                    ml-xl-5\r\n                                                    col-lg-7 offset-lg-0 ml-lg-4\r\n                                                    col-md-6 offset-md-2\r\n                                                    col-sm-9 offset-sm-0",attrs:{type:"email",placeholder:"Enter Your Email","aria-label":"Enter Your Email","aria-describedby":"basic-addon2"}}),t._v(" "),o("div",{staticClass:"input-group-append"},[o("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"}},[t._v("Subscribe")])])])])])])])}];o._withStripped=!0;const r={components:{catalog:s(56).Z},data(){return{selectedSizeOfProduct:this.$store.state.choosenProduct.choosenSize}},mounted(){this.$store.dispatch("requestDataCatalog")},methods:{getChoosenSize(){this.$store.state.choosenProduct.choosenSize=this.selectedSizeOfProduct},limitSizeQuantity(t,e){+t>this.$store.state.choosenProduct.amount?this.$store.state.choosenProduct.amount=1:+e<this.$store.state.choosenProduct.amount&&(this.$store.state.choosenProduct.amount=99)}},computed:{getRandomProducts(){let t=Object.keys(this.$store.state.filteredCatalogItems).map((t=>+t)),e=[];if(0!=this.$store.state.filteredCatalogItems){for(;e.length<4;){let s=Math.floor(Math.random()*(t[t.length-1]-t[0]+1))+t[0];e.includes(s)||e.push(s)}let s=[];for(let t=0;t<e.length;t++)s.push(this.$store.state.filteredCatalogItems[e[t]]);return s.sort((function(t,e){return t.productPrice-e.productPrice}))}}}};var i=(0,s(264).Z)(r,o,a,!1,null,null,null);i.options.__file="src/views/singlePage.vue";const l=i.exports}}]);