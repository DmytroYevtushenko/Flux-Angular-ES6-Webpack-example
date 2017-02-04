export default class CartController {
    constructor(cartStore, cartActions) {
        this.cartStore = cartStore;
        this.cartActions = cartActions;
        this.resetItems();
        this.total = 0;
        cartStore.addListener(() => this.resetItems());
    }

    resetItems() {
        console.log("Update cart items in controller.");
        this.items = angular.copy(this.cartStore.cartItems());
        let total = 0;
        angular.forEach(this.items, function (value, key) {
            total += value.qty * value.catalogItem.Price;
        });
        this.total = total;
    }

    removeItem(item) {
        this.cartActions.removeItem(item);
    }
}

CartController.$inject = ['cartStore', 'cartActions'];