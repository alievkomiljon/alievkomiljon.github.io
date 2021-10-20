class cart{
    constructor(name, price){
        this._key = name,
        this._value = {name: name, price: price, quantity: 1}
    }

    
    getKey(){
        return this._key;
    }
    getValue(){
        return this._value;
    }
    getPrice(){
        return this._value.quantity * this._value.price;
    }
    incrementQuantity(){
        this._value.quantity++;
    }
}

module.exports = cart;