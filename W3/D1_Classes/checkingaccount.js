"use strict";

class CheckingAccount extends Account{
    constructor(number, overdraft){
        super(number);
        this._overdraft = overdraft;
    }
    getOverdraft(){
        return this._overdraft;
    }
    setOverdraft(overdraft){
        this._overdraft = overdraft;
    }

    withdraw(amount) {
        if (amount <= 0) {
            throw new RangeError("Withdraw amount has to be greater than zero");
        }
        if (this._balance - amount < this._overdraft) {
            throw Error("Overdraft limit, balance cannot be lower than " + this._overdraft + "$");
        }
        this._balance -= amount;
    }

    //Overwritten toString method.
    toString(){ 
        return "Checking account " + this._number + ": balance " + this._balance + ": overdraft " + this._overdraft;
    }
}

