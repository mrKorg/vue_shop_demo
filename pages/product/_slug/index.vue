<template>

    <div class="page__wrap">

        <div class="mBreadcrumbs" v-if="product">
            <nuxt-link :to="{path: '/'}">
                Vue Shop
            </nuxt-link>
            <span class="sep">-</span>
            <nuxt-link :to="{path: '/'}">
                Catalog
            </nuxt-link>
            <span class="sep">-</span>
            <span>
                {{ product.title }}
            </span>
        </div>

        <div class="row" v-if="product">
            <div class="col-xs-12 col-lg-6">
                <div class="pProduct__image">
                    <img :src="product.image" alt="">
                </div>
            </div>
            <div class="col-xs-12 col-lg-6">
                <div class="pProduct__info">
                    <h1 class="pProduct__title">
                        {{ product.title }}
                    </h1>
                    <div class="row between-xs">
                        <div class="col">
                            <p class="pProduct__price">
                                {{ product.price }} $
                            </p>
                            <p class="pProduct__sku">
                                SKU: {{ product.sku }}
                            </p>
                        </div>
                        <div class="col">
                            <a @click="addProductToCart" class="eBtn--white">Buy now</a>
                        </div>
                    </div>
                    <hr class="pProduct__hr">
                    <div class="pProduct__description">
                        <p>
                            <strong class="title">
                                Description
                            </strong>
                        </p>
                        <div class="text">
                            <p>
                                {{ product.description }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                product: null
            }
        },
        created() {
            return new Promise((resolve, reject) => {
                this.product = this.$store.state.products.find(t => t.slug === this.$route.params.slug);
            })
        },
        methods: {
            addProductToCart() {
                this.$store.commit('addProductToCart', this.product);
            }
        }
    }
</script>