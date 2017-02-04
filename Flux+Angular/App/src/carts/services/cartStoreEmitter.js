import EventEmitter from '../dispatcher';

export default class CartStoreEventEmitter extends EventEmitter {
    constructor() {
        super();
        this.cartItems = [];
        this.catalogItems = [];
    }

    addItem(catalogItem) {
        var items = this.cartItems.filter((i) => i.catalogItem.Name == catalogItem.Name);
        if (items.length === 0) {
            this.cartItems.push({qty: 1, catalogItem: catalogItem});
        } else {
            items[0].qty += 1;
        }
    }

    removeItem(cartItem) {
        for(let i=0; i<this.cartItems.length; i++){
            if (this.cartItems[i].catalogItem.Name === cartItem.catalogItem.Name) {
                this.cartItems.splice(i, 1);
            }
        }
    }

    setCatalog(items) {
        this.catalogItems = items;
    }
    cleanListeners() {
        this.listeners = [];
    }
    emitChange() {
        console.log("Say listeners, that store was changed.");
        this.emit("change");
    }
}

