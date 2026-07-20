"use strict";
class BankAccount {
    owner;
    balance = 0;
    #otp = 123456;
    constructor(owner) {
        this.owner = owner;
    }
    deposit(amt) {
        if (amt <= 0)
            throw new Error('amount must be positive');
        this.balance += amt;
    }
    getBalance() {
        return this.balance;
    }
    verifyOtp(code) {
        return this.#otp === code;
    }
}
const acc = new BankAccount('dharn');
acc.deposit(500);
