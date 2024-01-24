function checkCashRegister(price, cash, cid) {
    const MONEY = {
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

    let total = cash - price

    let totalCID = Number(cid.reduce((sum, element) => sum + element[1], 0).toFixed(2))

    // Status
    if (totalCID < total) {
        return { "status": "INSUFFICIENT_FUNDS", "change": [] }
    } else if (totalCID == total) {
        return { "status": "CLOSED", "change": cid }
    } else {
        let changeArr = []
        for (let i = cid.length - 1; i >= 0; i--) {
            let unitName = cid[i][0]
            let unitTotal = cid[i][1]
            let unitValue = MONEY[unitName]
            let unitAmount = Number((unitTotal / unitValue).toFixed(0))
            let unitsToReturn = 0

            while (total >= unitValue && unitAmount > 0) {
                total -= unitValue
                total = Number(total.toFixed(2))
                unitAmount--
                unitsToReturn++
            }

            if (unitsToReturn > 0) {
                changeArr.push([unitName, unitsToReturn * unitValue])
            }
        }
        if (total > 0) {
            return { "status": "INSUFFICIENT_FUNDS", "change": [] }
        } else if (total < 0) {
            return { "status": "CLOSED", "change": [] }
        }

        return { "status": "OPEN", "change": changeArr }
    }
}

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// should return {status: "OPEN", change: [["QUARTER", 0.5]]}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "INSUFFICIENT_FUNDS", change: []}
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));
// should return {status: "CLOSED", change: [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]}.

console.log(checkCashRegister(30, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
console.log(checkCashRegister(20, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));
