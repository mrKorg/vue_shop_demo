<template>
    <div id="wrapper" class="wrapper black">
        <div class="page pCatalog">
            <div class="container">
                <header class="header">
                    <div class="row between-xs middle-xs">
                        <div class="col">
                            <nuxt-link :to="{path: '/'}" class="header__logo">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 25.98">
                                    <g>
                                        <path d="M18.46,0,15,6,11.54,0H0L15,26,30,0Z" fill="#4dba87"/>
                                        <path d="M18.46,0,15,6,11.54,0H6l9,15.59L24,0Z" fill="#435466"/>
                                    </g>
                                </svg>
                                <span class="text">
                                    Vue Shop Demo
                                </span>
                            </nuxt-link>
                        </div>
                        <div class="col">
                            <nuxt-link :to="{path: '/cart'}" class="header__cart">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50.61 45.48">
                                    <path d="M49.57,8.58H20.05a1.21,1.21,0,0,0-1.22,1.66L23.5,23.91a2,2,0,0,0,1.82,1.34H44.67a2,2,0,0,0,1.81-1.34l4.07-14A1,1,0,0,0,49.57,8.58Z"/>
                                    <circle cx="22.72" cy="41.01" r="4.42"/>
                                    <circle cx="41.41" cy="41.06" r="4.42"/>
                                    <path d="M46.71,29.74H20.89L10.55,0h-8a2.5,2.5,0,0,0,0,5H7L17.33,34.74H46.71a2.5,2.5,0,0,0,0-5Z"/>
                                </svg>
                                <span class="text">
                                    Cart <span>({{ $store.getters.cartCount }})</span>
                                </span>
                            </nuxt-link>
                        </div>
                    </div>
                </header>
                <nuxt/>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        mounted() {
            this.$store.dispatch('getStorageCart');
        }
    }
</script>