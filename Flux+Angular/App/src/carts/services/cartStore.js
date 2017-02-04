import CartStoreEmitter from './cartStoreEmitter';

var CartStore = function(dispatcher, cartActions) {
    var cartStore = new CartStoreEmitter();

    dispatcher.addListener(function(action) {
        console.log("Change store.");
        switch (action.actionType) {
        case cartActions.ADD_ITEM:
            cartStore.addItem(action.item);
            cartStore.emitChange();
            break;

        case cartActions.REMOVE_ITEM:
            cartStore.removeItem(action.item);
            cartStore.emitChange();
            break;

        case cartActions.SET_CATALOG:
            cartStore.setCatalog(action.item);
            cartStore.emitChange();
            break;
        }
    });

    return {
        addListener: (listener) => cartStore.addListener(listener),
        cartItems: () => cartStore.cartItems,
        catalogItems: () => cartStore.catalogItems,
        cleanListeners: () => cartStore.cleanListeners()
    };
};

export default CartStore;
CartStore.$inject = ['dispatcher', 'cartActions'];

