function fibonacci(num) {
  if (num < 1 || typeof num !== "number")
    return "Please provide a positive integer";
  if (num === 1) return [0];

  const result = [0, 1];

  for (let i = 2; i < num; i++) {
    const firstNum = result[result.length - 1];
    let secondNum = result[result.length - 2];
    result.push(firstNum + secondNum);
  }

  return result;
}

function fibonacciRec(num) {
  if (num < 1 || typeof num !== "number")
    return "Please provide a positive integer";
  if (num === 1) return [0];

  function helper(num, seq) {
    if (num < 3) return seq;
    seq.push(seq[seq.length - 1] + seq[seq.length - 2]);
    return helper(num - 1, seq);
  }

  return helper(num, [0, 1]);
}
