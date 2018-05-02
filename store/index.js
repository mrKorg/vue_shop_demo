import Vue from 'vue'
import Vuex from 'vuex'

const createStore = () => {
    return new Vuex.Store({
        state: {
            counter: 0,
            products: [
                {
                    id: 1,
                    title: 'Virtual product A1',
                    slug: 'virtual-product-a1',
                    sku: 'a1',
                    image: '/img/a1.png',
                    price: 1000,
                    description: 'Virtual product A1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 1
                },
                {
                    id: 2,
                    title: 'Virtual product A2',
                    slug: 'virtual-product-a2',
                    sku: 'a2',
                    image: '/img/a2.png',
                    price: 200,
                    description: 'Virtual product A1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 1
                },
                {
                    id: 3,
                    title: 'Virtual product A3',
                    slug: 'virtual-product-a3',
                    sku: 'a1',
                    image: '/img/a3.png',
                    price: 500,
                    description: 'Virtual product A3 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 1
                },
                {
                    id: 4,
                    title: 'Virtual product A4',
                    slug: 'virtual-product-a4',
                    sku: 'a2',
                    image: '/img/a4.png',
                    price: 777,
                    description: 'Virtual product A4 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 1
                },
                {
                    id: 5,
                    title: 'Virtual product B1',
                    slug: 'virtual-product-b1',
                    sku: 'b1',
                    image: '/img/b1.png',
                    price: 1000,
                    description: 'Virtual product B1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 2
                },
                {
                    id: 6,
                    title: 'Virtual product B2',
                    slug: 'virtual-product-b2',
                    sku: 'b2',
                    image: '/img/b2.png',
                    price: 200,
                    description: 'Virtual product B2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 2
                },
                {
                    id: 7,
                    title: 'Virtual product B3',
                    slug: 'virtual-product-b3',
                    sku: 'b1',
                    image: '/img/b3.png',
                    price: 500,
                    description: 'Virtual product B3 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 2
                },
                {
                    id: 8,
                    title: 'Virtual product B4',
                    slug: 'virtual-product-b4',
                    sku: 'b2',
                    image: '/img/b4.png',
                    price: 777,
                    description: 'Virtual product B4 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 2
                },
                {
                    id: 9,
                    title: 'Virtual product C1',
                    slug: 'virtual-product-c1',
                    sku: 'c1',
                    image: '/img/c1.png',
                    price: 1000,
                    description: 'Virtual product C1 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 3
                },
                {
                    id: 10,
                    title: 'Virtual product C2',
                    slug: 'virtual-product-c2',
                    sku: 'c2',
                    image: '/img/c2.png',
                    price: 200,
                    description: 'Virtual product C2 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 3
                },
                {
                    id: 11,
                    title: 'Virtual product C3',
                    slug: 'virtual-product-c3',
                    sku: 'c1',
                    image: '/img/c3.png',
                    price: 500,
                    description: 'Virtual product C3 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 3
                },
                {
                    id: 12,
                    title: 'Virtual product C4',
                    slug: 'virtual-product-c4',
                    sku: 'c2',
                    image: '/img/c4.png',
                    price: 777,
                    description: 'Virtual product C4 description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
                    cat_id: 3
                },
            ],
            productsByCategories: [],
            categories: [
                {
                    id: 1,
                    title: 'Category A',
                    description: 'Category A description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 2,
                    title: 'Category B',
                    description: 'Category B description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                },
                {
                    id: 3,
                    title: 'Category C',
                    description: 'Category C description. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
                }
            ],
            selectedCategories: [],
            cart: [],
            storageCart: {}
        },
        getters: {
            cartCount: state => {
                // Get total count of products in the cart
                let total = 0;
                state.cart.forEach((item) => {
                    total += item.qty;
                });
                return total;
            },
            cartTotal: state => {
                // Get total price of products in the cart
                let total = 0;
                state.cart.forEach((item) => {
                    total += item.qty * item.product.price;
                });
                return total;
            },
            cartItems: state => {
                // Get reverse array of products in the cart
                return state.cart.reverse();
            },
            cartIds: state => {
                // Get array of products in the cart
                return state.cart.map((item) => item.product.id);
            }
        },
        mutations: {
            selectProductsByCategoriesIds(state, categoriesIds) {
                // Filter products by selected category
                this.state.selectedCategories = categoriesIds;
                if (this.state.selectedCategories.length) {
                    Vue.set(this.state, 'productsByCategories', this.state.products.filter(
                        product => this.state.selectedCategories.includes(product.cat_id)
                    ));
                } else {
                    Vue.set(this.state, 'productsByCategories', []);
                }
            },
            addProductToCart(state, product) {
                // Add product to cart
                let index = this.state.cart.findIndex((item) => {
                    return item.product.id === product.id;
                });
                if (index > -1) {
                    Vue.set(
                        this.state.cart[index],
                        'qty',
                        ++this.state.cart[index].qty
                    );
                } else {
                    Vue.set(
                        this.state.cart,
                        this.state.cart.length,
                        {
                            product: product,
                            qty: 1
                        }
                    );
                }
                this.dispatch('setStorageCart');
            },
            setCartFromStorage(state, storageCart) {
                // Set cart from local storage data
                JSON.parse(storageCart).reverse().forEach((item) => {
                    for (let id in item) {
                        if (item.hasOwnProperty(id)) {
                            let product = this.state.products.find((product) => {
                                return product.id === Number(id)
                            });
                            Vue.set(
                                this.state.cart,
                                this.state.cart.length,
                                {
                                    product: product,
                                    qty: item[id]
                                })
                        }
                    }
                });
            },
            deleteProductsFromCart(state, ids) {
                // Delete products from cart by id's
                Vue.set(
                    this.state,
                    'cart',
                    this.state.cart.filter(item => !ids.includes(item.product.id))
                );
                this.dispatch('setStorageCart');
            }
        },
        actions: {
            setStorageCart() {
                // Save cart data to local storage
                let storageCart = this.state.cart.map((item) => {
                    let itemObj = {};
                    let id = item.product.id;
                    itemObj[id] = item.qty;
                    return itemObj;
                });
                Vue.localStorage.set('vue-demo-shop-cart', JSON.stringify(storageCart));
            },
            getStorageCart() {
                // Get cart data from local storage
                let storageCart = Vue.localStorage.get('vue-demo-shop-cart');
                this.commit('setCartFromStorage', storageCart);
            }
        }
    })
};

export default createStore