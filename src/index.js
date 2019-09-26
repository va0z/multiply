module.exports = function multiply(first, second) {
  let firstBig = BigInt(first);
  let secondBig = BigInt(second);
  let proiz = firstBig * secondBig;
  let res = String(proiz);
  
  // console.log(res);
  return res;
}
