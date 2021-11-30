let stock_article = new Vue({
    el: '#stock-article',
    data: {
        article: {},
        item_to_show: {
            sizes: []
        },
        pic_to_show: null,
        item_to_cart: {
            article_num: null,
            category: null,
            color_name: null,
            price: null,
            size: null,
            pic: null
        }
    },
    computed: {
        isOnSale() {
            return this.item_to_show.price_sale;
        },
        activePrice() {
            if (this.item_to_show.price_sale) {
                return this.item_to_show.price_sale
            } else { return this.item_to_show.price_stndrt }
        }
    },
    methods: {
        selectPic(pic) {
            this.pic_to_show = pic;
        },
        selectColor(item) {
            this.item_to_show = item;
            this.pic_to_show = item.pics[0];
            this.item_to_cart.size = item.sizes[0];
        },
        isAvailableSize(arg) {
            return this.item_to_show.sizes.some(
                size => { return size === arg }
            )
        },
        selectSize(arg) {
            if (this.isAvailableSize(arg)) {
                this.item_to_cart.article_num = this.article.article_num;
                this.item_to_cart.category = this.article.category;
                this.item_to_cart.color_name = this.item_to_show.color_name;
                this.item_to_cart.price = this.activePrice;
                this.item_to_cart.size = arg;
                this.item_to_cart.pic = this.item_to_show.pics[0];
            }
        }
    }
});

// ЭМУЛЯЦИЯ ВЫБОРА ТОВАРА ПРИ КЛИКЕ В ДР РАЗДЕЛЕ

let article = {
    article_num: 'QN 380',
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
            sizes: [40, 41, 42, 43, 44, 45],
            pics: [
                './img/stock-items/item01-01.png',
                './img/stock-items/item01-02.png',
                './img/stock-items/item01-03.png',
                // './img/stock-items/item01-04.png'
            ]
        },
        {
            color_name: 'Синий',
            color_code: '#3e5474',
            price_stndrt: 2599,
            price_sale: 1999,
            sizes: [40, 41, 42, 44, 45, 46],
            pics: [
                './img/stock-items/item02-01.png',
                './img/stock-items/item02-02.png',
                './img/stock-items/item02-03.png',
                // './img/stock-items/item02-04.png'
            ]
        },
        {
            color_name: 'Черный',
            color_code: '#000000',
            price_stndrt: 2599,
            price_sale: 0,
            sizes: [41, 42, 43, 44, 45, 46],
            pics: [
                './img/stock-items/item03-01.png',
                './img/stock-items/item03-02.png',
                './img/stock-items/item03-03.png',
                // './img/stock-items/item03-04.png'
            ]
        },
    ]
}

let item_index = 1;

// ПОСЛЕ КЛИКА НА ТОВАР

stock_article.article = Object.assign({}, article);

stock_article.item_to_show = stock_article.article.items[item_index];
stock_article.pic_to_show = stock_article.item_to_show.pics[0];

stock_article.item_to_cart.article_num = stock_article.article.article_num;
stock_article.item_to_cart.category = stock_article.article.category;

stock_article.item_to_cart.color_name = stock_article.item_to_show.color_name;
stock_article.item_to_cart.size = stock_article.item_to_show.sizes[0];;

stock_article.item_to_cart.price = stock_article.activePrice;

// MODAL WINDOWS SHOW-HIDE


$(document).ready(() => {

    $('.sizes-table-btn').click(() => {
        $('.sizes-modal').addClass('active');
        $('body').css('overflow', 'hidden');

    });

    $('.sizes-modal__btn').click(() => {
        $('.sizes-modal').removeClass('active');
        $('body').css('overflow', '');
    });


});

