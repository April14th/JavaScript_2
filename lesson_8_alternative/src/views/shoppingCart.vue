<template>
<div>
    <main>
        <basket type="shoppingCartBasket" />
        <div class="shipping container">
            <div class="shippingAdress">
                <div class="shippingTitles">Shipping Adress</div>
                <form>
                    <select name="" id="country">
                        <option value="Imagination">Imaginationland</option>
                        <option value="AF">Afghanistan</option>
                        <option value="AL">Albania</option>
                        <option value="DZ">Algeria</option>
                    </select>
                    <input type="text" placeholder="State" pattern = '^[a-zA-Z_ ]*$'>
                    <input type="text" placeholder="Postcode / Zip" pattern = '^[0-9]+$'>
                    <button>get a quote</button>
                </form>
            </div>
            <div class="couponDiscount">
                <div class="shippingTitles">coupon  discount</div>
                <form>
                    <div>Enter your coupon code if you have one</div>
                    <input type="text" placeholder="State" pattern = '^[a-zA-Z_ ]*$'>
                    <button>Apply coupon</button>
                </form>
            </div>
            <div class="proceedToCheckout">
                <div>
                    <div class="subTotal">sub total <span>&#36;900</span></div>
                    <div class="grandTotal">grand total <span>&#36;900</span></div>
                    <button>proceed to checkout</button>
                </div>
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
import basket from '../components/basket.vue';

export default {
    components: { basket }
}
</script>

<style>

</style>