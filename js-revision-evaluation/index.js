//Q1.create a bank Account (using the closure for privates state)
function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposited Sucesfully", "current Balance", balance);
    },
    withdraw (amount){
        if(amount<=0){
            console.log("invalid amount");
            return;
        }
        if(amount >balance){
            console.log("insufficient funds");
            return;

        }
        balance-=amount;
        perviousTransaction.push({type:"WITHDRWA",amount});
        return balance;

    },
    getBalance(){
        console.log("current Balance",balance);

    }
    getTransactionHistroy(){
        console.log("Transaction Histroy",perviousTransactions);
        
    }
  };
}
let myAccount =createBankAccount ();
myAccount.deposit(1000);
myAccount.withdraw(500);
myAccount.getBalance();
myAccount.getTransactionHistroy();
