const sum = (...values) => {
  let total = 0;
  console.log(values);
  values.forEach((num) => {
    try {
      total += parseInt(num);
    } catch (err) {
      console.log("You have non numbers in the list.");
      console.log(err);
    }
  });
  return total;
};

module.exports.sum = sum;
