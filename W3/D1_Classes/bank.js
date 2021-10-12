/**
 * A Bank class
 */
class Bank{
    
    accounts = [];
    static nextNumber = 0;
    
    addAccount(){
        this.accounts.push(new Account(++Bank.nextNumber));
        return this.accounts.length;
    }
    addSavingsAccount(interest){
        this.accounts.push(new SavingsAccount(++Bank.nextNumber, interest));
        return this.accounts.length;
    }
    addCheckingAccount(overdraft){
        this.accounts.push(new CheckingAccount(++Bank.nextNumber, overdraft));
        return this.accounts.length;
    }

    closeAccount(number){
        this.accounts = this.accounts.filter(x => x.getNumber() !== number);
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

    
    endOfMonth() {
        return this.accounts.map(account => account.endOfMonth()).join("\n").toString();
    }

}