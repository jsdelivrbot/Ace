const _ = require('lodash');

module.exports = function(req, res) {
  var numbers = req.body;

  const a = [];
  _.each(numbers, (number) => {
    if (!a[number]) a[number] = 0;
    a[number] += 1;
  });
  const ret = [];
  for (let i = -10000; i <= 10000; i += 1) {
    if (a[i]) {
      for (let j = 0; j < a[i]; j += 1) ret.push(i);
    }
  }

  res.json(ret);
}