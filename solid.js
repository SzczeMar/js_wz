function Order(customerId) {
	this.customerId =  customerId;
	this.dateTime = new Date();
	this.totalAmount = 0;
	this.items = [];
}


var OrderManager = (function () {

    let discounters = [];

    function OrderManager() {}

    OrderManager.prototype.createOrder = function (customerId) {
        this.order = new Order(customerId);
    };

    OrderManager.prototype.addItem = function (item) {
        this.order.items.push(item);
        this.order.totalAmount = this.order.totalAmount + item.price; 
    };

    OrderManager.prototype.sendOrder = function () {
        if (this.isValid(this.order)) {
          this.applyDiscount(this.order);
          var orderSender = new OrderSender();
          orderSender.send(order);
        }
        else {
            handleError({ message: "Nieprawidłowe zamówienie!" });
        }
    };

    OrderManager.prototype.isValid = function (order) {
        return order.items.length > 0;
    };

    OrderManager.prototype.registerDiscounter = function (discounter) {
        discounters.push(discounter);
    };

    let silverDiscounter = {
        canDiscount: function (order) {
            return order.totalAmount > 100;
        }
        , discount: function (order) {
            order.totalAmount = order.totalAmount * 0.95;
        }
    };
    
    
    OrderManager.prototype.applyDiscount = function (order) {
        let i;for (i = 0; i < discounters.length; i++) {
            if (discounters[i].canDiscount(order)) {
                discounters[i].discount(order);
            }
        }
    };

    return OrderManager;
}());



function handleResponse(response) {
    console.log(JSON.stringify(response));
}

function handleError(error) {
    console.log(error.message);
}
