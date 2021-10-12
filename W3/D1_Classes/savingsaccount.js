"use strict";

class SavingsAccount extends Account{
    constructor(number, interest){
        super(number);
        this._interest = interest;
    }
    getInterest(){
        return this._interest;
    }
    setInterest(interest){
        this._interest = interest;
    }

    addInterest(interest){
        super.deposit(this._balance * interest / 100);
    }

    //Overwritten toString method.
    toString(){ 
        return "Savings account " + this._number + ": balance " + this._balance + ": interest " + this._interest;
    }

    /**
     * Performs needed actions at the end of the month
     * 
     * @returns How much interest has been added
     */
     endOfMonth() {
         this.addInterest(2.5);
        return "Interest added " + this; // Returns how much interest has been added
    }
}

