class Bank{
    constructor(){
        this.accounts = [];
    }
    
    addAccount(){
        let num = this.constructor.nextNumber;
        this.accounts.push(new Account(num));
        return num;
    }
    addSavingsAccount(interest){
        let num = this.constructor.nextNumber;
        this.accounts.push(new SavingsAccount(num, interest));
        return num;
    }
    addCheckingAccount(overdraft){
        let num = this.constructor.nextNumber;
        this.accounts.push(new CheckingAccount(num, overdraft));
        return num;
    }

    closeAccount(number){
        if(this.accounts.indexOf(number) > -1){
            this.accounts.splice(number, 1);
        }
    }

    accountReport(){
        if(this.accounts.length < 1){
            return "";
        }
        let resultString = "";
        for(let i = 0; i < this.accounts.length; i++){
            if(resultString.length != 0){
                resultString += "\n";
            }
            resultString += this.accounts[i];
        }
        
        return resultString;
    }

    nextNumber() {
        if(this.accounts.length == 0){
            return 0;
        }
        let temp = this.accounts.slice(-1);
        return temp.getNumber + 1;
    }


}