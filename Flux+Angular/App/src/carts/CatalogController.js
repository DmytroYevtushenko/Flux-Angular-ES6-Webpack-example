export default class CatalogCtrl {
    constructor(cartActions, cartStore) {
        cartStore.cleanListeners();
        this.cartActions = cartActions;
        this.cartStore = cartStore;
        this.cartActions.setCatalog();
        cartStore.addListener(() => this.resetItems());
    }

    resetItems() {
        console.log("Update catalog items in controller.");
        this.catalogItems = angular.copy(this.cartStore.catalogItems());
    }

    addToCart(catalogItem) {
        this.cartActions.addItem(catalogItem);
    }
}

CatalogCtrl.$inject = ['cartActions', 'cartStore'];