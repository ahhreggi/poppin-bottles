// POPPIN BOTTLES

/*
Calculate the total number of bottles that can be redeemed with an initial investment

- Each bottle of pop costs $2 to purchase
- For every two empty bottles, you can get one free (full) bottle of pop
- For every four bottle caps, you can get one free (full) bottle of pop

Example:
  redeemBottles(2) => 1
  redeemBottles(40) => 75
*/
const redeemBottles = function(money, seen = 0, bottles = 0, caps = 0, bottleCount = 0, capCount = 0) {
  // Base case: not enough resources to redeem a full bottle
  if (money < 2 && bottles < 2 && caps < 4) {
    console.log('--------------------------------');
    console.log(`TOTAL BOTTLES: ${seen}`);
    console.log(`\nREMAINING BOTTLES: ${bottles}`);
    console.log(`REMAINING CAPS: ${caps}`);
    console.log(`\n2x EMPTY BOTTLES REDEMPTIONS: ${bottleCount}`);
    console.log(`4x CAP REDEMPTIONS: ${capCount}`);
    console.log('--------------------------------');
  // Recursive case: can redeem 1 or more bottles
  } else {
    // If there is enough money, -2 money, +1 bottle, +1 cap
    if (money >= 2) {
      seen += 1;
      money -= 2;
      bottles += 1;
      caps += 1;
    }
    // If there are enough bottles, -1 bottle, +1 cap
    if (bottles >= 2) {
      seen += 1;
      bottles -= 1;
      caps += 1;
      bottleCount += 1;
    }
    // If there are enough caps, +1 bottle, -3 caps
    if (caps >= 4) {
      seen += 1;
      bottles += 1;
      caps -= 3;
      capCount += 1;
    }
    return redeemBottles(money, seen, bottles, caps, bottleCount, capCount);
  }
};

// TEST CASES
// redeemBottles(0); // 0
// redeemBottles(3); // 1
// redeemBottles(10); // 15
// redeemBottles(20); // 35
// redeemBottles(30); // 55
// redeemBottles(40); // 75