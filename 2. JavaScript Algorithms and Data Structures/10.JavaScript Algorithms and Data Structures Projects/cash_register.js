function checkCashRegister(price, cash, cid) {
  let status;
  if (price == cash) {
    status = "CLOSED";
  } else if (price < cash){
    status = "OPEN"
  } else {
    status = "INSUFFICIENT_FUNDS";
  }
  let total = cash - price  
  
  const money = {
    "PENNY": 0.01,
    "NICKEL": 0.05,
    "DIME": 0.1,
    "QUARTER": 0.25,
    "ONE": 1,
    "FIVE": 5,
    "TEN": 10,
    "TWENTY": 20,
    "ONE HUNDRED": 100
  }
  let cents, hundreds, twenties, tens, fives, ones, quarters, dimes, nickels, pennies;

  // Functions
  const get_cents = (total) => {
   return total / money["PENNY"]
 }
  const calculate_nickels = (cents) => {
   let nickels = 0;
   while (cents >= 5){
     cents = cents - 5
     nickels++
   }
   return nickels
 }
 
  cents = get_cents(total)
  
  nickels = calculate_nickels(cents)
  cents = cents - nickels * 5
  
  console.log(total)
  console.log(`cents: ${cents}, nickels : ${nickels}`)
  let cr = {"status": status, "change": change}
  // console.log(cr)
  let change = [];
  // return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(20, 19.5, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(20, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

// const money = [
  //   ["PENNY", 0.01],
  //   ["NICKEL", 0.05],
  //   ["DIME", 0.1],
  //   ["QUARTER", 0.25],
  //   ["ONE", 1],
  //   ["FIVE",5],
  //   ["TEN", 10],
  //   ["TWENTY", 20],
  //   ["ONE_HUNDRED", 100]
  //   ]
