const _ = require('lodash');

function duplicateCount(text) {
  return _(text).countBy(_.toUpper).values().map(x => x > 1).sum();
}