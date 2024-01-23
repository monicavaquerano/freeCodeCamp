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
  
  // Functions
  const get_cents = (total) => {
    if (total > 0) {
      // return total / money["PENNY"]
      return Math.round(total * 100)
    } else if (total < 0) {
      console.log("Más dinero!")
    } else {
      console.log("Cabal!")
    }
 }
  const calculate_hundreds = (cents) => {
   let hundreds = 0;
   while (cents >= 10000){
     cents = cents - 10000
     hundreds++
   }
   return hundreds
  }
  const calculate_twenties = (cents) => {
   let twenties = 0;
   while (cents >= 2000){
     cents = cents - 2000
     twenties++
   }
   return twenties
  }
  const calculate_tens = (cents) => {
   let tens = 0;
   while (cents >= 1000){
     cents = cents - 1000
     tens++
   }
   return tens
  }
  const calculate_fives = (cents) => {
   let fives = 0;
   while (cents >= 500){
     cents = cents - 500
     fives++
   }
   return fives
  }
  const calculate_ones = (cents) => {
   let ones = 0;
   while (cents >= 100){
     cents = cents - 100
     ones++
   }
   return ones
  }
  const calculate_quarters = (cents) => {
   let quarters = 0;
   while (cents >= 25){
     cents = cents - 25
     quarters++
   }
   return quarters
  }
  const calculate_dimes = (cents) => {
   let dimes = 0;
   while (cents >= 10){
     cents = cents - 10
     dimes++
   }
   return dimes
  }
  const calculate_nickels = (cents) => {
   let nickels = 0;
   while (cents >= 5){
     cents = cents - 5
     nickels++
   }
   return nickels
  }
  const calculate_pennies = (cents) => {
   let pennies = 0;
   while (cents >= 1){
     cents = cents - 1
     pennies++
   }
   return pennies
  }
  // Change
  let cents = get_cents(total);
  
  let hundreds = calculate_hundreds(cents);
  cents = cents - hundreds * 10000;

  let twenties = calculate_twenties(cents);
  cents = cents - twenties * 2000;

  let tens = calculate_tens(cents);
  cents = cents - tens * 1000;

  let fives = calculate_fives(cents);
  cents = cents - fives * 500;

  let ones = calculate_ones(cents);
  cents = cents - ones * 100;

  let quarters = calculate_quarters(cents);
  cents = cents - quarters * 25;

  let dimes = calculate_dimes(cents);
  cents = cents - dimes * 10;

  let nickels = calculate_nickels(cents)
  cents = cents - nickels * 5

  let pennies = calculate_pennies(cents)
  cents = cents - pennies * 1
  
  console.log(total)
  console.log(`hundreds: ${hundreds}, twenties: ${twenties}, tens: ${tens}, fives: ${fives}, ones: ${ones}, quarters: ${quarters}, dimes: ${dimes}, nickels: ${nickels}, pennies: ${pennies}`)
  let cr = {"status": status, "change": change}
  // console.log(cr)
  let change = [];
  // return change;
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(100, 236.67, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(20, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
checkCashRegister(30, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

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
