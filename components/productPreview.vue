<template>
    <div class="eProduct" v-if="product">
        <div class="eProduct__header">
            <div class="row middle-xs between-xs">
                <div class="col">
                    <p class="eProduct__sku">
                        SKU: {{ product.sku }}
                    </p>
                </div>
                <div class="col">

                </div>
            </div>
        </div>
        <nuxt-link :to="{path: '/product/' + product.slug}" class="eProduct__image">
            <img :src="product.image" :alt="product.title">
        </nuxt-link>
        <h2 class="eProduct__title">
            <nuxt-link :to="{path: '/product/' + product.slug}">
                {{ product.title }}
            </nuxt-link>
        </h2>
        <div class="eProduct__footer">
            <div class="row middle-xs between-xs">
                <div class="col">
                    <p class="eProduct__price">
                        {{ product.price }} $
                    </p>
                </div>
                <div class="col">
                    <p class="eProduct__btn">
                        <a @click="addProductToCart">
                            Buy
                        </a>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        props: ['product'],
        methods: {
            addProductToCart() {
                this.$store.commit('addProductToCart', this.product);
            }
        }
    }
</script>