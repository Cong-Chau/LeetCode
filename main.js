var canCompleteCircuit = function (gas, cost) {
  let result = -1;
  const length = gas.length;

  let gasRemain = 0;
  for (let i = 0; i < length; i++) {
    let destination;
    if (i > 0) {
      destination = i;
    } else {
      destination = length;
    }

    for (let j = i, count = 0; count < length + 1; count++) {
      //-----Xử lý yêu cầu------
      if (count != length) {
        gasRemain += gas[j];
        gasRemain -= cost[j];
        if (gasRemain < 0) {
          break;
        }
      }
      if (count == length) {
        result = i;
      }
      //-------------------------
      if (j === length - 1) {
        j = 0;
      } else {
        j++;
      }
    }
    gasRemain = 0;
  }
  return result;
};

let gas = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
let cost = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];
console.log(canCompleteCircuit(gas, cost));
// canCompleteCircuit(gas, cost);
