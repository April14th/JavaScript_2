<template>
<div>
    <div class="topBanner">
        <div class="container topBannerContent px-sm-0">
            <div class="bgText">
                <a href="#">
                    <div class="topBannerText1">THE BRAND</div>
                </a>
                <a href="#">
                    <div class="topBannerText2">OF LUXERIOUS <span>FASHION</span></div>
                </a>
            </div>
        </div>
    </div>
    <main>
        <div class="container px-sm-0">
            <div class="offers row mt-5 pt-0 pt-lg-5">
                <div class="col-sm-6
                            col-10 offset-1 offset-sm-0">
                    <div class="offer">
                        <a href="#">
                            <div>hot deal</div>
                            <div>for men</div>
                        </a>
                        <a href="#"><img src="../assets/imgs/offer1.jpg" alt=""></a>
                    </div>

                    <div class="offer mt-4">
                        <a href="#">
                            <div>LUXIROUS&amp;trendy</div>
                            <div>ACCESORIES</div>
                        </a>
                        <a href="#"><img src="../assets/imgs/offer2.jpg" alt=""></a>
                    </div>
                </div>

                <div class="col-10 offset-1 offset-sm-0 col-sm-6 d-flex flex-wrap">
                    <div class="offer order-2 mt-4 mt-md-0 order-md-1">
                        <a href="#">
                            <div>30% offer</div>
                            <div>women</div>
                        </a>
                        <a class="one" href="#"><img src="../assets/imgs/offer3.jpg" alt=""></a>
                    </div>

                    <div class="offer pt-4 pt-sm-0 order-1 order-md-2 mt-0 mt-md-4">
                        <a href="#">
                            <div>new arrivals</div>
                            <div>FOR kids</div>
                        </a>
                        <a class="one" href="#"><img src="../assets/imgs/offer4.jpg" alt=""></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="mt-5 d-flex flex-column justify-content-center align-items-center">
                <a href="#">
                    <div class="feturedHeadTop">Fetured Items</div>
                </a>
                <a href="#">
                    <div class="feturedHeadBottom">Shop for items based on what we featured in this week</div>
                </a>
            </div>
            <catalog type="feturedCatalog" />
            <div class="container px-0 d-flex justify-content-around">
                <router-link to="/product" class="btn btn-outline-secondary feturedButton">
                    Browse All Product<i class="fas fa-long-arrow-alt-right"></i>
                </router-link>
            </div>
            <div class="container mt-5">
                <div class="row">
                    <div class="offerWomenLeft px-0 d-flex justify-content-center
                                col-12 col-lg-8 justify-content-lg-start">
    
                        <div class="offerWomenBannerText">
                            <div>30% <span>OFFER</span></div>
                            <div>FOR WOMEN</div>
                        </div>
                    </div>
                    <div class="offerWomenRight d-flex flex-column px-0 col-12
                                col-lg-4">
    
                        <div class="d-flex flex-column justify-content-center align-items-center
                                    flex-lg-row">
                            <div class="">
                                <img src="../assets/imgs/Truck.png" alt="">
                            </div>
                            <div class="offerWomenDetail">
                                <div class="offerWomenDetailUp">Free Delivery</div>
                                <div class="offerWomenDetailBottom">Worldwide delivery on all. Authorit tively morph
                                    next-generation innov tion with extensive models.
                                </div>
                            </div>
                        </div>
    
                        <div class="d-flex flex-column justify-content-center align-items-center
                                    flex-lg-row">
                            <div class="">
                                <img src="../assets/imgs/percent.png" alt="">
                            </div>
                            <div class="offerWomenDetail">
                                <div class="offerWomenDetailUp">Free Delivery</div>
                                <div class="offerWomenDetailBottom">Worldwide delivery on all. Authorit tively morph
                                    next-generation innov tion with extensive models.
                                </div>
                            </div>
                        </div>
    
                        <div class="d-flex flex-column justify-content-center align-items-center
                                    flex-lg-row">
                            <div class="">
                                <img src="../assets/imgs/Crown.png" alt="">
                            </div>
                            <div class="offerWomenDetail">
                                <div class="offerWomenDetailUp">Free Delivery</div>
                                <div class="offerWomenDetailBottom">Worldwide delivery on all. Authorit tively morph
                                    next-generation innov tion with extensive models.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <div class="subscribeBg pt-5 pb-5 container-fluid">
        <div class="container px-0">
            <div class="row pb-5">

                <div class="subscribeReview d-flex col-lg-6 px-0 mt-5 mb-5 pr-0 pr-lg-5">
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
                                                    col-sm-9 offset-sm-0" placeholder="Enter Your Email"
                            aria-label="Enter Your Email" aria-describedby="basic-addon2">
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

    mounted() {
        this.$store.dispatch('requestDataCatalog');
    },

    computed: {
        filterFeturedCatalog() {
            return this.$store.state.filteredCatalogItems.filter(item => item.productIsFetured == true);
        }
    }
}
</script>

<style>

</style>