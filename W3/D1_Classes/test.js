describe("CheckingAccount class test", function(){
    

    describe("Testing addSavingsAccount() method", function(){
        it("Expected output of 'addSavingsAccount()' is 'Savings account 0: balance 0: interest 777'", function(){
            let bank = new Bank();
            //bank.addSavingsAccount(777);
            //bank.addSavingsAccount(778);
            bank.addAccount();
            bank.addAccount();

            assert.equal("Savings account 0: balance 0: interest 777\n", bank.accountReport());
        });
    });
    describe("Testing getNumber() method", function(){
        it("Expected output of 'getNumber()' is '1'", function(){
            let bank = new Bank();
            bank.addSavingsAccount(777);

            assert.equal(1, this.nextNumber);
        });
    });

    

});

describe("Account class test", function(){
    describe("Testing constructor", function(){
        it("Expected output of constructor of 'new Account(777)' is { _number: 777, _balance: 0 }", function(){
            assert.deepEqual({ _number: 777, _balance: 0 }, new Account(777));
        });
    });

    describe("Testing getNumber() method", function(){
        it("Expected output of 'getNumber' is 777", function(){
            let account777 = new Account(777);

            assert.deepEqual(777, account777.getNumber());
        });
    });

    describe("Testing getBalance() method", function(){
        it("Expected output of 'getBalance' is 0.0", function(){
            let account777 = new Account(777);

            assert.equal(0.0, account777.getBalance());
        });
    });

    describe("Testing deposit(amount) method", function(){
        it("Expected output of BEFORE depositing is 0.0", function(){
            let account777 = new Account(777);
            assert.equal(0.0, account777.getBalance());
        });
        it("Expected output of AFTER depositing is 1000", function(){
            let account777 = new Account(777);
            account777.deposit(1000);
            assert.equal(1000.0, account777.getBalance());
        });
    });

    
    describe("Testing withdraw(amount) method", function(){
        it("Balance =0.0, trying to withdraw 1000.0$, Expected RangeError -> 'Withdraw amount has to be greater than zero'", function(){
            let account777 = new Account(777);
            assert.throws(() => { account777.withdraw(-1000.0) }, RangeError, "Withdraw amount has to be greater than zero");
        });
        it("Balance =100.0$, trying to withdraw 1000.0$, Expected Error -> 'Insufficient funds'", function(){
            let account777 = new Account(777);
            account777.deposit(100.0);
            assert.throws(() => { account777.withdraw(1000.0) }, Error, "Insufficient funds");
        });
        it("Balance =1000.0$, withdrawed 100.0$, Expected getBalance() => 900.0", function(){
            let account777 = new Account(777);
            account777.deposit(1000.0);
            account777.withdraw(100.0)
            assert.equal(900.0, account777.getBalance());
        });
    });

    describe("Testing toString() function", function(){
        it("Expected output of toString() of account { _number: 777, _balance: 777 } is 'Account 777: balance 777'", function(){
            let acc = new Account(777);
            acc.deposit(777)
            assert.equal("Account 777: balance 777", acc.toString());
        });
    });

    describe("Testing endOfMonth() function", function(){
        it('Expected output of endOfMonth() is "" (empty string)', function(){
            let acc = new Account(777);
            assert.equal("", acc.endOfMonth());
        });
    });

});
describe("SavingsAccount class test", function(){
    describe("Testing constructor", function(){
        it("Expected output of constructor of 'new SavingsAccount(777, 100)' is { _interest: 100,  _number: 777, _balance: 0 }", function(){
            assert.deepEqual({ _interest: 100,  _number: 777, _balance: 0 }, new SavingsAccount(777, 100));
        });
    });

    describe("Testing getInterest() method", function(){
        it("Expected output of 'getInterest()' is 100", function(){
            let account777 = new SavingsAccount(777, 100);

            assert.deepEqual(100, account777.getInterest());
        });
    });

    describe("Testing setInterest(interest) method", function(){
        it("Expected output of BEFORE setting interest is 0.0", function(){
            let account777 = new SavingsAccount(777, 0);
            assert.equal(0.0, account777.getInterest());
        });
        it("Expected output of AFTER setting interest is 1000", function(){
            let account777 = new SavingsAccount(777, 0.0);
            account777.setInterest(1000);
            assert.equal(1000.0, account777.getInterest());
        });
    });
    describe("Testing addInterest(interest) method", function(){
        it("Expected output of BEFORE adding interest is 100.0", function(){
            let account777 = new SavingsAccount(777, 0);
            account777.deposit(100.0);
            assert.equal(100.0, account777.getBalance());
        });
        it("Expected output of AFTER adding interest is 10", function(){
            let account777 = new SavingsAccount(777, 0.0);
            account777.deposit(100);
            account777.addInterest(10);
            assert.equal(110.0, account777.getBalance());
        });
    });

    describe("Testing toString() overwritten function of SavingsAccount", function(){
        it("Expected output of toString() of account { _number: 777, _balance: 777 } is 'Account 777: balance 777'", function(){
            let acc = new SavingsAccount(777, 100);
            acc.deposit(777)
            assert.equal("Savings account 777: balance 777: interest 100", acc.toString());
        });
    });

});
describe("CheckingAccount class test", function(){
    describe("Testing constructor", function(){
        it("Expected output of constructor of 'new CheckingAccount(777, -100)' is { _overdraft: -100,  _number: 777,  _balance: 0 }", function(){
            assert.deepEqual({ _overdraft: -100,  _number: 777,  _balance: 0 }, new CheckingAccount(777, -100));
        });
    });

    describe("Testing getInterest() method", function(){
        it("Expected output of 'getOverdraft()' is -100", function(){
            let account777 = new CheckingAccount(777, -100);

            assert.equal(-100, account777.getOverdraft());
        });
    });

    describe("Testing setOverdraft(interest) method", function(){
        it("Expected output of BEFORE setting overdraft is 0.0", function(){
            let account777 = new CheckingAccount(777, 0);
            assert.equal(0.0, account777.getOverdraft());
        });
        it("Expected output of AFTER setting overdraft is -100", function(){
            let account777 = new CheckingAccount(777, 0.0);
            account777.setOverdraft(-100);
            assert.equal(-100, account777.getOverdraft());
        });
    });
    
    describe("Testing withdraw(amount) method", function(){
        it("Balance =100.0$, trying to withdraw 1000.0$, Expected Error -> 'Overdraft limit, balance cannot be lower than -100$'", function(){
            let account777 = new CheckingAccount(777, -100);
            account777.deposit(100.0);
            assert.throws(() => { account777.withdraw(1000.0) }, Error, "Overdraft limit, balance cannot be lower than -100$");
        });
    });

    describe("Testing toString() overwritten function of CheckingAccount", function(){
        it("Expected output of toString() is 'Checking account 777: balance 777: overdraft -100'", function(){
            let acc = new CheckingAccount(777, -100);
            acc.deposit(777)
            assert.equal("Checking account 777: balance 777: overdraft -100", acc.toString());
        });
    });

});
