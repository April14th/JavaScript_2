<template>
<div>
    <main>
        <div>
            <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner container">
                    <div class="carousel-item active">
                        <img :src="$store.state.choosenProduct.productSlideImg" class="d-block" alt="slide1">
                    </div>
                    <div class="carousel-item">
                        <img :src="$store.state.choosenProduct.productSlideImg" class="d-block" alt="slide2">
                    </div>
                    <div class="carousel-item">
                        <img :src="$store.state.choosenProduct.productSlideImg" class="d-block" alt="slide3">
                    </div>
                </div>
                <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
            <div class="womanCollectionContainer container border px-0">
                <div class="womanCollection">
                    <div class="womanCollectionTop d-flex flex-column align-items-center border-bottom">
                        <div class="womenCollectionTitle">WOMEN COLLECTION
                            <div class="womenCollectionTitleBorder">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                        <div class="womenCollectionTextTitle">{{ $store.state.choosenProduct.productName }}</div>
                        <div class="womenCollectionText">
                            Compellingly actualize fully researched processes before proactive outsourcing.
                            Progressively syndicate collaborative architectures before cutting-edge services.
                            Completely visualize parallel core competencies rather than exceptional portals.
                        </div>

                        <div class="womenCollectionFeatures">
                            <div>MATERIAL: <span>{{ $store.state.choosenProduct.material }}</span></div>
                            <div>DESIGNER: <span>{{ $store.state.choosenProduct.designer }}</span></div>
                        </div>

                        <div class="womenCollectionPrice">${{ $store.state.choosenProduct.productPrice }}</div>
                    </div>
                    <div class="womanCollectionBottom">
                        <form class="womanCollectionBottomChoose">
                            <div class="womenCollectionChoose">
                                <div>CHOOSE SIZE</div>
                                <select v-model="selectedSizeOfProduct" @change="getChoosenSize">
                                    <option v-for="size of $store.state.choosenProduct.productSizes" :key="size">{{ size }}</option>
                                </select>
                            </div>
                            <div class="womenCollectionChoose">
                                <div>QUANTITY</div>
                                <input type="number" min="1" max="99" v-model="$store.state.choosenProduct.amount">
                            </div>
                        </form>
                        <button type="button" class="btn btn-outline-secondary feturedButton" @click="$store.commit('addToBasket', $store.state.choosenProduct)">
                            <i class="fas fa-shopping-cart"></i> Add to Cart
                        </button>
                    </div>
                </div>
            </div>
            <div class="container px-0">
                <div class="alsoTitle d-flex justify-content-center">you may like also</div>
                <catalog type="singlePageCatalog" />
            </div>
        </div>
    </main>
    <div class="subscribeBg mt-5 pt-5 pb-5">
        <div class="container">
            <div class="row pb-5 pt-0 pt-lg-5">

                <div class="d-flex col-lg-6 px-0 mt-5 mb-5 pr-0 pr-lg-5">
                    <div class="col-2 col-md-2 d-flex align-self-start">
                        <img src="../assets/imgs/Avatar.png" alt="Avatar">
                    </div>
                    <div class="col-10 pl-5 pl-md-2 pl-lg-5">
                        <blockquote class="reviewsTextMassage ">
                            “Vestibulum quis porttitor dui! Quisque viverra nunc mi,
                            a pulvinar purus condimentum a. Aliquam condimentum mattis neque sed pretium”
                        </blockquote>
                        <div class="reviewsTextName mt-3">
                            Bin Burhan
                        </div>
                        <div class="reviewsTextFrom">
                            Dhaka, Bd
                        </div>
                        <div class="reviewsTextSwitch  mt-5 px-0
                                    col-5
                                    col-xl-4
                                    col-lg-5
                                    col-md-3
                                    col-sm-4">
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </div>
                <div class="subscribeEmail d-flex justify-content-center flex-column align-items-center col-lg-6 border-left ">
                    <div class="subscribeEmailHead">
                        Subscribe
                    </div>
                    <div class="subscribeEmailText pb-4">
                        FOR OUR NEWLETTER AND PROMOTION
                    </div>
                    <form class="subscribeForm input-group mb-3 pl-1 pl-sm-4">
                        <input type="email" class="form-control pt-4 pb-4
                                                    ml-xl-5
                                                    col-lg-7 offset-lg-0 ml-lg-4
                                                    col-md-6 offset-md-2
                                                    col-sm-9 offset-sm-0" placeholder="Enter Your Email" aria-label="Enter Your Email" aria-describedby="basic-addon2">
                        <div class="input-group-append">
                            <button class="btn btn-outline-secondary" type="button">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import catalog from '../components/catalog.vue';

export default {
    components: { catalog },

    data() {
        return {
           selectedSizeOfProduct: ''
        }
    },

    mounted() {
        this.$store.dispatch('requestDataCatalog');
    },

    methods: {
        getChoosenSize() {
            this.$store.state.choosenProduct.choosenSize = this.selectedSizeOfProduct;
        }
    },

    computed: {
        getRandomProducts() {
            let keys = Object.keys(this.$store.state.filteredCatalogItems);
            let keysNum = keys.map(num => +num);
            let keysContainer = [];
            if (this.$store.state.filteredCatalogItems != 0) {
                while (keysContainer.length < 4) {
                    let randomKey = Math.floor(Math.random() * (keysNum[keysNum.length-1] - keysNum[0] + 1)) + keysNum[0];
                    if (!keysContainer.includes(randomKey)) {
                        keysContainer.push(randomKey)
                    }
                }
                let randomProducts = [];
                for (let i = 0; i < keysContainer.length; i++) {
                    randomProducts.push(this.$store.state.filteredCatalogItems[keysContainer[i]]);
                }
                return randomProducts.sort(function (a, b) {
                    return a.productPrice - b.productPrice;
                })
            }
        }
    }
}
</script>

<style>

</style>