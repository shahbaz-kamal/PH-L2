{
  //?Getter and Setter
  class BankAccount {
    public readonly id: number;
    public name: string;
    protected _balance: number; ////so that we cant access balance property outside of class. A convention ('underscore before name') is followed to indicate private property. Also to get access of this property by using extends in another class we define it protected instead of private

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    // public addDeposite(amount: number) {
    //   this._balance = this._balance + amount;
    // }
    // public getBalance() {
    //   return this._balance;
    // }
    //*creating addDeposite using setter
    set addDeposite(amount: number) {
      this._balance = this._balance + amount;
    }

    //*creating getBalance using geter
    get getBalance() {
      return this._balance;
    }
  }
  class Student extends BankAccount {
    test() {}
  }

  const gorib = new BankAccount(1, "poor mia", 64);
  gorib.addDeposite = 30;
  const myBalance = gorib.getBalance; //*here it can be used as property

  console.log(myBalance);
}
