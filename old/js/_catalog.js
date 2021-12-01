let catalog_dynamic = new Vue({
    el: '#catalog-dynamic',
    data: {
        catalog: [
            {
                article_num: 'QN 380',
                top_material: 'Натуральная кожа',
                insole_material: 'Овчина',
                sole_material: 'Полиуретан',
                season: 'Зима',
                category: 'Кроссовки',
                items: [
                    {
                        color_name: 'Зеленый',
                        color_code: '#5c6b5c',
                        price_stndrt: 2599,
                        price_sale: 1999,
                        isNew: true,
                        rating: 4,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 1,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 4,
                            },
                            {
                                size_num: 43,
                                size_qty: 8,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 10,
                            },
                            {
                                size_num: 46,
                                size_qty: 0,
                            },
                        ],
                        pics: [
                            './img/stock-items/item01-01.png',
                            './img/stock-items/item01-02.png',
                            './img/stock-items/item01-03.png',
                        ],
                    },
                    {
                        color_name: 'Синий',
                        color_code: '#3e5474',
                        price_stndrt: 2599,
                        price_sale: 1999,
                        isNew: true,
                        rating: 2,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 1,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 4,
                            },
                            {
                                size_num: 43,
                                size_qty: 0,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 9,
                            },
                            {
                                size_num: 46,
                                size_qty: 10,
                            },
                        ],
                        pics: [
                            './img/stock-items/item02-01.png',
                            './img/stock-items/item02-02.png',
                            './img/stock-items/item02-03.png',
                        ],
                    },
                    {
                        color_name: 'Черный',
                        color_code: '#000000',
                        price_stndrt: 2599,
                        price_sale: 0,
                        isNew: false,
                        rating: 10,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 0,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 4,
                            },
                            {
                                size_num: 43,
                                size_qty: 1,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 9,
                            },
                            {
                                size_num: 46,
                                size_qty: 10,
                            },
                        ],
                        pics: [
                            './img/stock-items/item03-01.png',
                            './img/stock-items/item03-02.png',
                            './img/stock-items/item03-03.png',
                        ],
                    },
                ],
            },
            {
                article_num: 'QN 450',
                top_material: 'Натуральная кожа',
                insole_material: 'Овчина',
                sole_material: 'Полиуретан',
                season: 'Зима',
                category: 'Ботинки',
                items: [
                    {
                        color_name: 'Зеленый',
                        color_code: '#5c6b5c',
                        price_stndrt: 2599,
                        price_sale: 1999,
                        isNew: true,
                        rating: 1,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 1,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 0,
                            },
                            {
                                size_num: 43,
                                size_qty: 4,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 9,
                            },
                            {
                                size_num: 46,
                                size_qty: 0,
                            },
                        ],
                        pics: [
                            './img/stock-items/item01-01.png',
                            './img/stock-items/item01-02.png',
                            './img/stock-items/item01-03.png',
                        ],
                    },
                    {
                        color_name: 'Синий',
                        color_code: '#3e5474',
                        price_stndrt: 2599,
                        price_sale: 1999,
                        isNew: true,
                        rating: 2,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 0,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 4,
                            },
                            {
                                size_num: 43,
                                size_qty: 0,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 9,
                            },
                            {
                                size_num: 46,
                                size_qty: 10,
                            },
                        ],
                        pics: [
                            './img/stock-items/item02-01.png',
                            './img/stock-items/item02-02.png',
                            './img/stock-items/item02-03.png',
                        ],
                    },
                    {
                        color_name: 'Черный',
                        color_code: '#000000',
                        price_stndrt: 2599,
                        price_sale: 0,
                        isNew: false,
                        rating: 6,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 0,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 4,
                            },
                            {
                                size_num: 43,
                                size_qty: 1,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 9,
                            },
                            {
                                size_num: 46,
                                size_qty: 10,
                            },
                        ],
                        pics: [
                            './img/stock-items/item03-01.png',
                            './img/stock-items/item03-02.png',
                            './img/stock-items/item03-03.png',
                        ],
                    },
                ],
            },
            {
                article_num: 'QN 900',
                top_material: 'Натуральная кожа',
                insole_material: 'Овчина',
                sole_material: 'Полиуретан',
                season: 'Зима',
                category: 'Ботинки',
                items: [
                    {
                        color_name: 'Зеленый',
                        color_code: '#5c6b5c',
                        price_stndrt: 2599,
                        price_sale: 1999,
                        isNew: false,
                        rating: 0,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 1,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 4,
                            },
                            {
                                size_num: 43,
                                size_qty: 1,
                            }, {
                                size_num: 44,
                                size_qty: 0,
                            },
                            {
                                size_num: 45,
                                size_qty: 9,
                            },
                            {
                                size_num: 46,
                                size_qty: 0,
                            },
                        ],
                        pics: [
                            './img/stock-items/item01-01.png',
                            './img/stock-items/item01-02.png',
                            './img/stock-items/item01-03.png',
                        ],
                    },
                    {
                        color_name: 'Синий',
                        color_code: '#3e5474',
                        price_stndrt: 2599,
                        price_sale: 1999,
                        isNew: true,
                        rating: 1,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 1,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 0,
                            },
                            {
                                size_num: 43,
                                size_qty: 0,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 2,
                            },
                            {
                                size_num: 46,
                                size_qty: 7,
                            },
                        ],
                        pics: [
                            './img/stock-items/item02-01.png',
                            './img/stock-items/item02-02.png',
                            './img/stock-items/item02-03.png',
                        ],
                    },
                    {
                        color_name: 'Черный',
                        color_code: '#000000',
                        price_stndrt: 2599,
                        price_sale: 0,
                        isNew: true,
                        rating: 4,
                        sizes: [
                            {
                                size_num: 40,
                                size_qty: 0,
                            },
                            {
                                size_num: 41,
                                size_qty: 2,
                            },
                            {
                                size_num: 42,
                                size_qty: 4,
                            },
                            {
                                size_num: 43,
                                size_qty: 7,
                            }, {
                                size_num: 44,
                                size_qty: 6,
                            },
                            {
                                size_num: 45,
                                size_qty: 9,
                            },
                            {
                                size_num: 46,
                                size_qty: 10,
                            },
                        ],
                        pics: [
                            './img/stock-items/item03-01.png',
                            './img/stock-items/item03-02.png',
                            './img/stock-items/item03-03.png',
                        ],
                    },
                ],
            },
        ],
        catalogToShowItems: [],
        filters: {
            sort_options: [
                'Возрастанию цены',
                'Убыванию цены',
                'Новинки',
            ],
            sizes: [
                34,
                35,
                36,
                37,
                38,
                39,
                40,
                41,
                42,
                43,
                44,
                45,
                46,
            ],
            colors: [
                {
                    color_name: 'Зеленый',
                    color_code: '#5c6b5c',
                },
                {
                    color_name: 'Синий',
                    color_code: '#3e5474',
                },
                {
                    color_name: 'Терракотовый',
                    color_code: '#f5973f',
                },
                {
                    color_name: 'Коричневый',
                    color_code: '#573a20',
                },
                {
                    color_name: 'Серый',
                    color_code: '#6d7073',
                },
                {
                    color_name: 'Черный',
                    color_code: '#000000',
                },
            ],
            categories: [
                'Кроссовки',
                'Ботинки',
                'Туфли',
            ],
        },
        filters_selected: {
            sort_option: null,
            sizes: [],
            colors: [],
            category: 'Категория не выбрана',
        },
    },
    computed: {
        isCatalogToShowItems() {
            return this.catalogToShowItems.length;
        },
    },
    methods: {
        selectSortOption(sort_option) {
            this.filters_selected.sort_option = sort_option;
        },
        isSelectedSortOption(sort_option) {
            return this.filters_selected.sort_option === sort_option;
        },
        applySelectedSortOption() {
            if (this.filters_selected.sort_option === this.filters.sort_options[0]) { // По 'Возрастанию цены'
                this.catalogToShowItems.sort((itemA, itemB) => {
                    return this.activePrice(itemA) - this.activePrice(itemB);
                });
            } else if (this.filters_selected.sort_option === this.filters.sort_options[1]) { // По 'Убыванию цены'
                this.catalogToShowItems.sort((itemA, itemB) => {
                    return this.activePrice(itemB) - this.activePrice(itemA);
                });
            } else { // По 'Новинки'
                this.catalogToShowItems.sort((itemA, itemB) => {
                    return itemB.isNew - itemA.isNew;
                });
            }
        },
        selectSizes(size) {
            if (!this.isSelectedSize(size)) {
                this.filters_selected.sizes.push(size);
            } else {
                this.filters_selected.sizes.forEach((el, index) => {
                    if (el === size) {
                        this.filters_selected.sizes.splice(index, 1);
                    }
                });
            }
        },
        isSelectedSize(arg) {
            return this.filters_selected.sizes.some(
                size => { return size === arg },
            );
        },
        applySelectedSize() {
            let selected_items = [];
            this.catalogToShowItems.forEach(item => {
                item.sizes.forEach(size => {
                    if (size.size_qty > 0) {
                        if (this.filters_selected.sizes.some(Size => {
                            return size.size_num === Size
                        })) {
                            selected_items.push(item);
                        }
                    }
                })
            })
            this.catalogToShowItems.splice(0, this.catalogToShowItems.length);
            selected_items.forEach(item => {
                this.catalogToShowItems.push(item);
            })
        },
        selectColors(color) {
            if (!this.isSelectedColor(color)) {
                this.filters_selected.colors.push(color);
            } else {
                this.filters_selected.colors.forEach((el, index) => {
                    if (el === color) {
                        this.filters_selected.colors.splice(index, 1);
                    }
                });
            }
        },
        isSelectedColor(arg) {
            return this.filters_selected.colors.some(
                color => { return color === arg },
            );
        },
        applySelectedColor() {
            let selected_items = [];
            this.catalogToShowItems.forEach(item => {
                if (this.filters_selected.colors.some(color => {
                    return item.color_name === color.color_name
                })) {
                    selected_items.push(item);
                }
            })
            this.catalogToShowItems.splice(0, this.catalogToShowItems.length);
            selected_items.forEach(item => {
                this.catalogToShowItems.push(item);
            })
        },
        selectCategory(category) {
            this.filters_selected.category = category;
        },
        isSelectedCategory(category) {
            return this.filters_selected.category === category;
        },
        applySelectedCategory() {
            this.catalogToShowItems.splice(0, this.catalogToShowItems.length);
            this.catalog.forEach(article => {
                if (article.category === this.filters_selected.category) {
                    article.items.forEach(item => {
                        this.catalogToShowItems.push(Object.assign(
                            {
                                article_num: article.article_num,
                                category: article.category,
                            },
                            item,
                        ))
                    });
                }
            });
        },
        isOnSale(item) {
            return item.price_sale;
        },
        activePrice(item) {
            if (item.price_sale) {
                return item.price_sale
            } else { return item.price_stndrt }
        },
    },
});

// filters show-hide animation

$(document).ready(() => {

    $('.filter__title').click(function () {
        $(this).closest('.filter').toggleClass('active');
        $('.filter__title').not($(this)).closest('.filter').removeClass('active');
    });

    $('.filter__btn').click(function () {
        $(this).closest('.filter').removeClass('active');
    });

});