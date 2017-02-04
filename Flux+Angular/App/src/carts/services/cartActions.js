export default class CartActions {
    constructor(dispatcher, commonDataService) {
        this.commonDataService = commonDataService;
        this.dispatcher = dispatcher;
        this.ADD_ITEM = "ADD_ITEM";
        this.REMOVE_ITEM = "REMOVE_ITEM";
        this.SET_CATALOG = "SET_CATALOG";
    }

    addItem(item) {
        console.log("New action: ADD_ITEM.");
        this.dispatcher.emit({
            actionType: this.ADD_ITEM,
            item: item
        });
    }

    removeItem(item) {
        console.log("New action: REMOVE_ITEM.");
        this.dispatcher.emit({
            actionType: this.REMOVE_ITEM,
            item: item
        });
    }
    setCatalog() {
        this.commonDataService.getCatalog().then((response)=> {
            this.dispatcher.emit({
                actionType: this.SET_CATALOG,
                item: response.data
            });
        });
    }
    
}

CartActions.$inject = ['dispatcher', 'commonDataService'];