<template>
    <div class="page__wrap">

        <div class="mBreadcrumbs">
            <nuxt-link :to="{path: '/'}">
                Vue Shop
            </nuxt-link>
            <span class="sep">-</span>
            <span>
                Cart
            </span>
        </div>

        <div v-if="$store.getters.cartCount" class="cart">
            <div class="cart__header">
                <div class="row middle-xs between-xs">
                    <div class="col cart__col--select">
                        <input v-model="selectAll" class="cart__checkbox" type="checkbox">
                    </div>
                    <div class="col cart__col--title">
                        Product
                    </div>
                    <div class="col cart__col--sku cart__sku">
                        SKU
                    </div>
                    <div class="col cart__col--price cart__price">
                        Price
                    </div>
                    <div class="col cart__col--qty cart__qty">
                        QTY
                    </div>
                    <div class="col cart__col--total cart__total">
                        Total
                    </div>
                </div>
            </div>
            <div class="cart__body">
                <div v-for="(item, index) in $store.getters.cartItems" v-bind:key="index"
                     class="cart__item">
                    <div class="row middle-xs between-xs">
                        <div class="col cart__col--select">
                            <input v-model="deleteProducts"
                                   :id="item.product.id"
                                   :value="item.product.id"
                                   class="cart__checkbox"
                                   type="checkbox">
                        </div>
                        <div class="col cart__col--title cart__title">
                            <nuxt-link :to="{path: '/product/' + item.product.slug}">
                                {{ item.product.title }}
                            </nuxt-link>
                        </div>
                        <div class="col cart__col--sku cart__sku">
                            {{ item.product.sku }}
                        </div>
                        <div class="col cart__col--price cart__price">
                            {{ item.product.price }} $
                        </div>
                        <div class="col cart__col--qty cart__qty">
                            <div class="eQty">
                                <div class="row">
                                    <div class="col">
                                        <span @click="changeQty(item, 'minus')" class="eQty__btn">-</span>
                                    </div>
                                    <div class="col">
                                        <span class="eQty__input">
                                            {{ item.qty }}
                                        </span>
                                    </div>
                                    <div class="col">
                                        <span @click="changeQty(item, 'plus')" class="eQty__btn">+</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col cart__col--total cart__total">
                            {{ item.product.price * item.qty }} $
                        </div>
                    </div>
                </div>
            </div>
            <div class="cart__footer">
                <div class="row middle-xs">
                    <div class="col cart__col--remove">
                        <a v-if="deleteProducts.length"
                           @click="deleteSelectedProducts()"
                           class="eBtn--white">
                            Delete ({{ deleteProducts.length }})
                        </a>
                    </div>
                    <div class="col cart__col--labelTotal">Total:</div>
                    <div class="col cart__col--totalPrice">
                        <strong>{{ $store.getters.cartTotal }} $</strong>
                    </div>
                </div>
            </div>
        </div>
        <div v-else="" class="emptyCart">
            <p>
                Cart is empty
            </p>
            <div>
                <nuxt-link :to="{path: '/'}" class="eBtn--white">
                    Go to catalog
                </nuxt-link>
            </div>
        </div>

    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        data() {
            return {
                deleteProducts: [],
                selectAll: null
            }
        },
        watch: {
            selectAll() {
                this.deleteProducts = (this.selectAll) ? this.$store.getters.cartIds : [];
            }
        },
        methods: {
            changeQty(item, sign) {
                if (sign === 'minus' && item.qty > 1) {
                    --item.qty;
                } else if (sign === 'plus') {
                    ++item.qty;
                }
                this.$store.dispatch('setStorageCart');
            },
            deleteSelectedProducts() {
                this.$store.commit('deleteProductsFromCart', this.deleteProducts);
                this.deleteProducts = [];
            }
        }
    }
</script>