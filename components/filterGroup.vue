<template>
    <div class="bFilterGroup">
        <div class="bFilterGroup__box">
            <div class="bFilter">
                <div class="bFilter__header">
                    <h3 class="bFilter__title">
                        Categories
                    </h3>
                </div>
                <p v-for="(category, index) in categories" v-bind:key="index" class="bFilter__filterItem">
                    <span class="eCheckBox">
                        <input type="checkbox"
                               :id="'category-' + category.id"
                               :value="category.id"
                               v-model="categoriesIds">
                        <span class="eCheckBox__el"></span>
                    </span>
                    <label :for="'category-' + category.id">
                        {{ category.title }}
                    </label>
                </p>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        props: ['categories', 'selectedCategories'],
        data() {
            return {
                categoriesIds: []
            }
        },
        mounted() {
            if (this.selectedCategories.length) {
                this.categoriesIds = this.selectedCategories;
            }
        },
        watch: {
            categoriesIds() {
                this.$store.commit('selectProductsByCategoriesIds', this.categoriesIds);
            }
        }
    }
</script>