//Q1.create a bank Account (using the closure for privates state)
function createBankAccount() {
  let balance = 0;
  return {
    deposit(amount) {
      balance += amount;
      console.log("Deposited Sucesfully", "current Balance", balance);
    },
  };
}
let myAccount =createBankAccount ();
myAccount.deposit(1000);