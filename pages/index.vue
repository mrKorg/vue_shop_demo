<template>

    <div class="page__wrap">
        <div class="row">
            <div class="col-xs-12 col-lg-3">
                <div class="mBreadcrumbs">
                    <nuxt-link :to="{path: '/'}">
                        Vue Shop
                    </nuxt-link>
                    <span class="sep">-</span>
                    <span>
                        Catalog
                    </span>
                </div>
                <filterGroup :categories="categories" :selectedCategories="selectedCategories"></filterGroup>
            </div>
            <div class="col-xs-12 col-lg-9">
                <div v-if="productsArray" class="pCatalog__list gridRow">
                    <transition-group name="list" tag="div" class="row">
                        <div v-for="(product, index) in productsArray" v-bind:key="index" class="col-xs-12 col-md-6 col-lg-4 col-xl-3">
                            <productPreview :product="product"></productPreview>
                        </div>
                    </transition-group>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    import {mapState} from 'vuex'
    import productPreview from '~/components/productPreview.vue'
    import filterGroup from '~/components/filterGroup.vue'

    export default {
        components: {
            productPreview, filterGroup
        },
        computed: {
            ...mapState(['products', 'categories', 'selectedCategories', 'productsByCategories']),
            productsArray() {
                return this.productsByCategories.length ? this.productsByCategories : this.products;
            }
        }
    }
</script>
