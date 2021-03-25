<template>
<div>
    <main>
        <div class="container my-5 pb-0 pb-lg-5 px-0">
            <div class="row mr-0 ml-0">

                <div class="col-10 offset-1
                            col-sm-12 offset-sm-0
                            col-md-12 d-sm-flex justify-sm-content-between
                            col-lg-3 pr-lg-4 d-lg-block ">

                    <details class="pl-0 pr-0
                                    col-sm-4 pr-sm-4
                                    col-lg-12 pr-lg-3 ">
                        <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                            <span>Category</span>
                            <i class="fas fa-caret-down"></i>
                            <i class="fas fa-caret-up"></i>
                        </summary>
                        <div class="d-flex flex-column">
                            <router-link to="/product">Accessories</router-link>
                            <router-link to="/product">Bags</router-link>
                            <router-link to="/product">Denim</router-link>
                            <router-link to="/product">Hoodies &amp; Sweatshirts</router-link>
                            <router-link to="/product">Jackets &amp; Coats</router-link>
                            <router-link to="/product">Pants</router-link>
                            <router-link to="/product">Polos</router-link>
                            <router-link to="/product">Shirts</router-link>
                            <router-link to="/product">Shoes</router-link>
                            <router-link to="/product">Shorts</router-link>
                            <router-link to="/product">Sweaters &amp; Knits</router-link>
                            <router-link to="/product">T-Shirts</router-link>
                            <router-link to="/product">Tanks</router-link>
                        </div>
                    </details>

                    <details class="pl-0 pr-0 mt-4
                                    col-sm-4 pr-sm-4 mt-sm-0
                                    col-lg-12 pt-lg-4 pl-lg-0 pr-lg-3 ">
                        <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                            <span>Brand</span>
                            <i class="fas fa-caret-down"></i>
                            <i class="fas fa-caret-up"></i>
                        </summary>
                        <div class="d-flex flex-column">
                            <router-link to="/product">Accessories</router-link>
                            <router-link to="/product">Bags</router-link>
                            <router-link to="/product">Denim</router-link>
                            <router-link to="/product">Hoodies &amp; Sweatshirts</router-link>
                            <router-link to="/product">Jackets &amp; Coats</router-link>
                            <router-link to="/product">Pants</router-link>
                            <router-link to="/product">Polos</router-link>
                            <router-link to="/product">Shirts</router-link>
                            <router-link to="/product">Shoes</router-link>
                            <router-link to="/product">Shorts</router-link>
                            <router-link to="/product">Sweaters &amp; Knits</router-link>
                            <router-link to="/product">T-Shirts</router-link>
                            <router-link to="/product">Tanks</router-link>
                        </div>
                    </details>

                    <details class="pl-0 pr-0 mt-4
                                    col-sm-4 mt-sm-0
                                    col-lg-12 pt-lg-4 pl-lg-0 pr-lg-3">
                        <summary class="d-flex justify-content-between align-items-center py-2 pl-2">
                            <span>Designer</span>
                            <i class="fas fa-caret-down"></i>
                            <i class="fas fa-caret-up"></i>
                        </summary>
                        <div class="d-flex flex-column">
                            <router-link to="/product">Accessories</router-link>
                            <router-link to="/product">Bags</router-link>
                            <router-link to="/product">Denim</router-link>
                            <router-link to="/product">Hoodies &amp; Sweatshirts</router-link>
                            <router-link to="/product">Jackets &amp; Coats</router-link>
                            <router-link to="/product">Pants</router-link>
                            <router-link to="/product">Polos</router-link>
                            <router-link to="/product">Shirts</router-link>
                            <router-link to="/product">Shoes</router-link>
                            <router-link to="/product">Shorts</router-link>
                            <router-link to="/product">Sweaters &amp; Knits</router-link>
                            <router-link to="/product">T-Shirts</router-link>
                            <router-link to="/product">Tanks</router-link>
                        </div>
                    </details>
                </div>

                <div class="col-10 offset-1 col-sm-12 offset-sm-0
                            col-md-12 offset-md-0
                            col-lg-9">
                    <div class="row mr-0 ml-0 no-gutters d-flex justify-content-around justify-content-md-between">
                        <div class="productSizesWrapper
                                    no-gutters
                                    col-8 mt-5
                                    col-sm-6
                                    col-md-4 pl-md-3
                                    pl-lg-0 mt-lg-0">
                            <div class="productFeaturesTitle">Size</div>

                            <form class="productSizes row flex-nowrap col-12 no-gutters pt-2">
                                <div class="col-3 productFeatures">
                                    <input type="checkbox" id="xxs" name="xxs" value="XXS" v-model="selectedSizeOfProducts">
                                    <label for="xxs">xxs</label>
                                </div>
                                <div class="col-3 productFeatures pl-lg-2">
                                    <input type="checkbox" id="xs" name="xs" value="XS" v-model="selectedSizeOfProducts">
                                    <label for="xs">xs</label>
                                </div>
                                <div class="col-3 productFeatures pl-lg-2">
                                    <input type="checkbox" id="s" name="s" value="S" v-model="selectedSizeOfProducts">
                                    <label for="s">s</label>
                                </div>
                                <div class="col-3 productFeatures">
                                    <input type="checkbox" id="m" name="m" value="M" v-model="selectedSizeOfProducts">
                                    <label for="m">m</label>
                                </div>
                                <div class="col-3 productFeatures">
                                    <input type="checkbox" id="l" name="l" value="L" v-model="selectedSizeOfProducts">
                                    <label for="l">l</label>
                                </div>
                                <div class="col-3 productFeatures pl-lg-2">
                                    <input type="checkbox" id="xl" name="xl" value="XL" v-model="selectedSizeOfProducts">
                                    <label for="xl">xl</label>
                                </div>
                                <div class="col-3 productFeatures ml-lg-2">
                                    <input type="checkbox" id="xxl" name="xxl" value="XXL" v-model="selectedSizeOfProducts">
                                    <label for="xxl">xxl</label>
                                </div>
                            </form>
                        </div>

                        <div class="col-10 mt-5 offset-0
                                    col-sm-10
                                    col-md-4
                                    mt-lg-0">
                            <div>
                                <form>
                                    <div class="form-group productFeaturesTitle mb-0">
                                        <label for="formControlRange">Price</label>
                                        <input type="range" min="52" max="200" class="form-control-range" id="formControlRange" v-model="selectedPriceOfProducts">
                                    </div>
                                </form>
                            </div>
                            <div class="productFeatures d-flex justify-content-between">
                                <div class="">&#36;52</div>
                                <div class="">&#36;200</div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-4 sortBy d-flex justify-content-around justify-content-md-start">
                        <form class="py-3">
                            <label class="px-2 ml-3 mb-0" for="sortBy">Sort By</label>
                            <select v-model="selectedSortingTypeOfProducts" class="" id="sortBy">
                                <option>Price</option>
                                <option>Name</option>
                            </select>
                        </form>
                        <form class="py-3">
                            <label class="px-2 ml-3 mb-0" for="sortBy2">Show</label>
                            <select v-model="selectedNumberOfProducts" class="" id="sortBy2">
                                <option>06</option>
                                <option>12</option>
                                <option>24</option>
                                <option>All</option>
                            </select>
                        </form>
                    </div>

                    <catalog type="productCatalog" :renderPagesProductCatalog="renderPagesProductCatalog" />

                    <div class="d-flex flex-column align-items-center justify-content-around mt-5 flex-sm-row justify-content-sm-between">
                        <nav aria-label="Page navigation example">
                            <ul class="pagination">
                                <li class="page-item">
                                    <button class="page-btn" aria-label="Previous" value="previous" @click="changePagesProductCatalog($event.currentTarget.value)">
                                        <span aria-hidden="true"><i class="fas fa-angle-left"></i></span>
                                    </button>
                                </li>
                                <li class="page-item" v-for="item of pagination" :key="item.pageNumber">
                                    <button class="page-btn" :class="{ pageBtnActive: item.pageIsActive }" @click="changePagesProductCatalog(item.pageNumber)">
                                        {{ item.pageNumber }}
                                    </button>
                                </li>
                                <li class="page-item">
                                    <button class="page-btn" aria-label="Next" value="next" @click="changePagesProductCatalog($event.currentTarget.value)">
                                        <span aria-hidden="true"><i class="fas fa-angle-right"></i></span>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>

                </div>
            </div>
        </div>
        <!-------------------------------FETURED END----------------------------->

            <div class="productsFeaturesBg py-5 ">
                <div class="container py-3 px-0">

                        <div class="d-flex justify-content-between align-items-center row mr-0 ml-0
                                        justify-content-lg-around">

                            <div class="productsFeaturesText
                                        col-10 offset-1
                                        col-sm-8 offset-sm-2
                                        col-md-6 offset-md-0
                                        col-lg-4">
                                <img src="../assets/imgs/Truck.png" alt="Truck">
                                <div>Free Delivery</div>
                                <div>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                            </div>
                            <div class="productsFeaturesText
                                        col-10 offset-1 pt-5
                                        col-sm-8 offset-sm-2
                                        col-md-6 offset-md-0 pt-md-0
                                        col-lg-4">
                                <img src="../assets/imgs/percent.png" alt="percent">
                                <div>Sales &amp; discounts</div>
                                <div>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                            </div>
                            <div class="productsFeaturesText
                                        col-10 offset-1 pt-5
                                        col-sm-8 offset-sm-2
                                        col-md-12 mt-md-5 offset-md-0 pt-md-0
                                        col-lg-4 mt-lg-0">
                                <img src="../assets/imgs/Crown.png" alt="crown">
                                <div>Quality assurance</div>
                                <div>Worldwide delivery on all. Authorit tively morph next-generation innov tion with extensive models.</div>
                            </div>

                        </div>

                </div>
            </div>
    </main>
    <!-------------------------------SUBSCRIBE ST----------------------------->

    <div class="subscribeBg mt-0 pt-5 pb-5 container-fluid">
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
            selectedSizeOfProducts: [],
            selectedSortingTypeOfProducts: 'Price',
            selectedNumberOfProducts: '06',
            selectedPriceOfProducts: 120,
            pagination: [
                {
                    pageNumber: 1,
                    pageIsActive: false
                }
            ]
        }
    },

    mounted() {
        this.$store.dispatch('requestDataCatalog');
    },

    computed: {
        sortProducts() {
            this.sortProductsByType(this.$store.state.filteredCatalogItems);
            return this.$store.state.filteredCatalogItems;
        },

        filterPriceProductCatalog() {
            return this.sortProducts.filter(item => item.productPrice <= +this.selectedPriceOfProducts)
        },

        filterSizeProductCatalog() {
            if (this.selectedSizeOfProducts.length !== 0) {
                let arr = [];
                let filteredItems = [];
                for (let size of this.selectedSizeOfProducts) {
                    arr = this.filterPriceProductCatalog.filter(product => product.productSizes.includes(size));
                    if (filteredItems.length == 0) {
                        filteredItems = arr.slice();
                    } else {
                        for (let product of arr) {
                            if (!filteredItems.includes(product)) {
                                filteredItems.push(product);
                            }
                        }
                    }
                }
                this.sortProductsByType(filteredItems);
                return filteredItems;
            } else {
                return this.filterPriceProductCatalog;
            }   
        },

        filterQuantityProductCatalog(numberActivePage) {
            for (let item of this.pagination) {
                if (item.pageIsActive == true) {
                    numberActivePage = item.pageNumber;
                }
            }
            switch (this.selectedNumberOfProducts) {
                case '06':
                case '12':
                case '24':
                    if (numberActivePage > 1) {
                        return this.filterSizeProductCatalog.filter(item => 
                            this.filterSizeProductCatalog.indexOf(item) <= (+this.selectedNumberOfProducts * numberActivePage)-1 && 
                            this.filterSizeProductCatalog.indexOf(item) > (+this.selectedNumberOfProducts * (numberActivePage-1))-1);
                    } else {
                        return this.filterSizeProductCatalog.filter(item => this.filterSizeProductCatalog.indexOf(item) < +this.selectedNumberOfProducts);
                    }
                    break;
                default:
                    return this.filterSizeProductCatalog;
            }
        },

        renderPagesProductCatalog() {
            if (this.$store.state.filteredCatalogItems != 0) {
                let productsFilteredLength = this.filterSizeProductCatalog.length;
                let selectedNumberOfProducts = isNaN(this.selectedNumberOfProducts) ? this.filterSizeProductCatalog.length : +this.selectedNumberOfProducts;
                let count =  productsFilteredLength / selectedNumberOfProducts;
                class PaginationPage {
                    constructor(pageNumber, pageIsActive) {
                        this.pageNumber = pageNumber,
                        this.pageIsActive = pageIsActive
                    }
                }
                for (let i = 0; i <= Math.ceil(count); i++) {
                    for (let item of this.pagination) {
                        let newPaginationItem = new PaginationPage(i, false);
                        if (item.pageNumber <= Math.ceil(count) && !this.pagination.some(obj => obj.pageNumber == newPaginationItem.pageNumber) && newPaginationItem.pageNumber != 0) {
                            this.pagination.push(newPaginationItem);
                        } else if (item.pageNumber > Math.ceil(count) && this.pagination.length > 1 || this.selectedNumberOfProducts === 'All' && this.pagination.length > 1) {
                            this.pagination.pop();
                        } else if (item.pageNumber == Math.ceil(count) && this.pagination.length > 1 && selectedNumberOfProducts == 24) {
                            this.pagination.pop();
                        }
                    }
                }
                for (let item of this.pagination) {
                    if (item.pageNumber == 1) {
                        item.pageIsActive = true;
                    } else {
                        item.pageIsActive = false;
                    }
                }
                return this.pagination;
            }
        }
    },

    methods: {
        sortProductsByType(sortingArr) {
            if (this.selectedSortingTypeOfProducts === 'Price') {
                return sortingArr.sort(function (a, b) {
                    return a.productPrice - b.productPrice;
                })
            } else if (this.selectedSortingTypeOfProducts === 'Name') {
                return sortingArr.sort(function (a, b) {
                    if (a.productName > b.productName) {
                        return 1;
                    } else if (a.productName < b.productName) {
                        return -1;
                    } else {
                        return 0;
                    }
                })
            }
        },

        changePagesProductCatalog(num) {
            if (typeof num === 'number') {
                for (let item of this.pagination) {
                    if (item.pageNumber == num) {
                        item.pageIsActive = true;
                    } else {
                        item.pageIsActive = false;
                    }
                }
            } else if (num === 'previous') {
                for (let item of this.pagination) {
                    if (item.pageIsActive == true) {
                        item.pageIsActive = false;
                        let index = this.pagination.indexOf(item);
                        if (index == 0) {
                            this.pagination[this.pagination.length - 1].pageIsActive = true;
                        } else {
                            this.pagination[index - 1].pageIsActive = true;
                        }
                        break;
                    }
                }
            } else if (num === 'next') {
                for (let item of this.pagination) {
                    if (item.pageIsActive == true) {
                        item.pageIsActive = false;
                        let index = this.pagination.indexOf(item);
                        if (index == (this.pagination.length - 1)) {
                            this.pagination[0].pageIsActive = true;
                        } else {
                            this.pagination[index + 1].pageIsActive = true;
                        }
                        break;
                    }
                }
            }
        }
    }
}
</script>

<style>

</style>