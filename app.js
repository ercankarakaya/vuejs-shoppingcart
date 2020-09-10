window.addEventListener('load', () => {

    window.vue = new Vue({
        el: '#app',
        name: 'Cart',
        /*root yerine Cart ismi verdik*/
        data: {
            isLoading: true,
            cart: [],
            saved: []
        },
        methods: {
            removeFromCart(index) {
                this.cart.splice(index, 1);
            },
            saveForLater(index) {
                const item = this.cart.splice(index, 1);
                this.saved.push(item[0]);
            },
            removeFromSavedList(index) {
                this.saved.splice(index);
            },
            moveToCart(index) {
                const item = this.saved.splice(index, 1);
                this.cart.push(item[0]);
            }
        },
        created() {
            setTimeout(() => {
                fetch('./data.json')
                    .then((res) => { return res.json() })
                    .then((res) => {
                        /*console.log(res) */
                        this.isLoading = false;
                        this.cart = res.cart;
                        this.saved = res.saved;
                    })
            }, 1000)
        }
    })


});