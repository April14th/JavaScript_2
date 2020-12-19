<template>

<div>
    <header class="container px-0 my-4">
        <div class="row col-12 d-flex px-0 mx-0">
    
            <div class="logo d-flex justify-content-center px-0
                                        col-7
                                        col-xl-2 offset-xl-0
                                        col-lg-2 offset-lg-0
                                        col-md-3 offset-md-4
                                        col-sm-4 offset-sm-4">
                <router-link to="/" class="pr-2"><img src="../assets/imgs/logo.png" alt="logo"></router-link>
                <router-link to="/" class="pr-3 pr-xl-3 pr-lg-0 pr-md-2 pr-sm-2 brand">bran<span>d</span></router-link>
            </div>
    
            <div class="d-flex align-items-center
                                        col-12 pt-3
                                        col-xl-5 pl-xl-4 px-xl-0
                                        col-lg-5 pl-lg-5 pr-lg-0 px-lg-0 pt-lg-0
                                        col-md-7 px-md-0
                                        pt-sm-3 ">
                <div class="dropdown">
                    <button class=" btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Browse
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <div class="dropdown-item">woman</div>
                        <router-link to="/product" class="dropdown-item" type="button">Dresses</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Tops</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Sweaters/Knits</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Jackets/Coats</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Blazers</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Denim</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Leggings/Pants</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Skirts/Shorts</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Accessories</router-link>
    
                        <div class="dropdown-item">men</div>
                        <router-link to="/product" class="dropdown-item" type="button">Tees/Tank tops</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Shirts/Polos</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Sweaters</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Sweatshirts/Hoodies</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Blazers</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">Jackets/vests</router-link>
                    </div>
                </div>
                <search />
            </div>
    
            <div class="row headerAccountAndCart d-none  align-items-center
                                        col-12 offset-0 px-0 pt-3 mx-auto justify-content-center
                                        col-xl-2 offset-xl-3 mt-xl-0
                                        col-lg-3 offset-lg-2 pt-lg-0
                                        col-md-3 offset-md-2 mt-md-0 mr-md-0 d-md-flex
                                        col-sm-4 offset-sm-4 pt-sm-3 justify-content-sm-end ">
    
    
                <div class="headerCart pr-4" >
                    <button id="basket-toggler" @click="showbasket = !showbasket" type="button"></button>
                    <basket type="headerBasket" v-show="showbasket" />
                </div>
    
    
                <div class="dropdown">
                    <button class="btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Account
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>
    
        </div>
    
        <div class="row mx-0 d-md-none pt-3 justify-content-between">
    
            <div class="burgermenu justify-content-between align-items-center
                                    col-2 pt-1
                                    col-sm-6">
                <div class="dropdown">
                    <button class="btn btn-secondary px-4 pt-2" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="burgerMenu fas fa-bars"></i></button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <router-link to="/" class="dropdown-item" type="button">home</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">man</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">women</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">kids</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">accessories</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">featured</router-link>
                        <router-link to="/product" class="dropdown-item" type="button">hot deals</router-link>
                    </div>
                </div>
            </div>
    
            <div class="headerAccountAndCart d-flex align-items-center justify-content-end
                                    col-2 pt-1
                                    col-sm-6">
                <div class="headerCart pr-4" >
                    <a href="#"><img src="../assets/imgs/cart.png" alt="headerCart"></a>
                    <div class="headerCartWrap">
                        <div class="headerCartWrapBlock"></div>
                        <div class="headerCartWrapInAll">
                            <div class="d-flex headerCartWrapIn">
                                <a href="#" class="d-flex ">
                                    <img src="../assets/imgs/myAccount1.jpg" alt="">
                                    <div>
                                        <div>Rebox Zane</div>
                                        <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span>
                                        <div class="headerCartWrapPrice">1 <span>x</span> $250</div>
                                    </div>
                                </a>
                                <a href="#"><i class="fas fa-times-circle"></i></a>
                            </div>
    
                            <div class="d-flex">
                                <a href="#" class="d-flex headerCartWrapIn">
                                    <img src="../assets/imgs/myAccount2.jpg" alt="">
                                    <div>
                                        <div>Rebox Zane</div>
                                        <span><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></span>
                                        <div class="headerCartWrapPrice">1 <span>x</span> $250</div>
                                    </div>
                                </a>
                                <a href="#"><i class="fas fa-times-circle"></i></a>
                            </div>
    
                            <div class="headerCartWrapTotalPrice">
                                <div>total</div>
                                <div>$500.00</div>
                            </div>
    
                            <button type="button" class="productsButtonIndex">Checkout</button>
                            <button type="button" class="productsButtonIndex">Go to cart</button>
                        </div>
                    </div>
    
                </div>
    
                <div class="dropdown">
                    <button class="btn-lg btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        My Account
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button class="dropdown-item" type="button">Action</button>
                        <button class="dropdown-item" type="button">Another action</button>
                        <button class="dropdown-item" type="button">Something else here</button>
                    </div>
                </div>
            </div>
    
        </div>
    </header>

    <div class="headerLine"></div>

    <nav class="nav container d-none d-md-flex justify-content-center mt-3"> 
        <div class="navAll">
            <router-link class="nav-link" to="/">Home</router-link>
            <div class="dropNav">
                <div class="dropNavIn">
                    <div class="dropNavItem">home</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Accessories</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">home</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <div class="dropNavItem">home</div>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">home</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product">
                        <div>Super sale!</div>
                        <img src="../assets/imgs/navDrop.jpg" alt="nav img">
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="navAll">
            <router-link to="/product" class="nav-link">Man</router-link>
            <div class="dropNav">
                <div class="dropNavIn">
                    <div class="dropNavItem">Man</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Accessories</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Man</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <div class="dropNavItem">Man</div>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Man</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product">
                        <div>Super sale!</div>
                        <img src="../assets/imgs/navDrop.jpg" alt="nav img">
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="navAll">
            <router-link to="/product" class="nav-link">woman</router-link>
            <div class="dropNav">
                <div class="dropNavIn">
                    <div class="dropNavItem">woman</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Accessories</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">woman</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <div class="dropNavItem">woman</div>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">woman</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product">
                        <div>Super sale!</div>
                        <img src="../assets/imgs/navDrop.jpg" alt="nav img">
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="navAll">
            <router-link to="/product" class="nav-link">Kids</router-link>
            <div class="dropNav">
                <div class="dropNavIn">
                    <div class="dropNavItem">Kids</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Accessories</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Kids</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <div class="dropNavItem">Kids</div>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Kids</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product">
                        <div>Super sale!</div>
                        <img src="../assets/imgs/navDrop.jpg" alt="nav img">
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="navAll">
            <router-link to="/product" class="nav-link">Accoseriese</router-link>
            <div class="dropNav">
                <div class="dropNavIn">
                    <div class="dropNavItem">Accoseriese</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Accessories</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Accoseriese</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <div class="dropNavItem">Accoseriese</div>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Accoseriese</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product">
                        <div>Super sale!</div>
                        <img src="../assets/imgs/navDrop.jpg" alt="nav img">
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="navAll">
            <router-link to="/product" class="nav-link">Featured</router-link>
            <div class="dropNav">
                <div class="dropNavIn">
                    <div class="dropNavItem">Featured</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Accessories</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Featured</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <div class="dropNavItem">Featured</div>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Featured</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product">
                        <div>Super sale!</div>
                        <img src="../assets/imgs/navDrop.jpg" alt="nav img">
                    </router-link>
                </div>
            </div>
        </div>
    
        <div class="navAll">
            <router-link to="/product" class="nav-link">Hot Deals</router-link>
            <div class="dropNav">
                <div class="dropNavIn">
                    <div class="dropNavItem">Hot Deals</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Accessories</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Hot Deals</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Blazers</router-link>
                    <div class="dropNavItem">Hot Deals</div>
                    <router-link to="/product" class="dropNavItem" type="button">Denim</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Leggings/Pants</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Skirts/Shorts</router-link>
                </div>
                <div class="dropNavIn">
                    <div class="dropNavItem">Hot Deals</div>
                    <router-link to="/product" class="dropNavItem" type="button">Dresses</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Tops</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Sweaters/Knits</router-link>
                    <router-link to="/product" class="dropNavItem" type="button">Jackets/Coats</router-link>
                    <router-link to="/product">
                        <div>Super sale!</div>
                        <img src="../assets/imgs/navDrop.jpg" alt="nav img">
                    </router-link>
                </div>
            </div>
        </div>         
    </nav>
    <div class="newArrivalsBg pb-5 pt-5">
        <div class="px-md-0 container d-flex flex-column flex-sm-row justify-content-between align-items-center ">
            <div class="newArrivals">New Arrivals</div>
            <div class="newArrivalsPath mt-4 mt-sm-0">
                <router-link to="/">home</router-link>
                <router-link to="/product">men</router-link>
                <router-link to="/product">new arrivals</router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import basket from './basket.vue';
import search from './search.vue';

export default {
    components: { basket, search },

    data() {
        return {
            showbasket: false,
        }
    }
}
</script>

<style>

</style>