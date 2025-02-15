'use strict';

/**
 * Implement method Sort
 */ /*
function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (typeof compareFunction !== 'function') {
      // eslint-disable-next-line no-param-reassign
      compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1);
    }

    let swapped;

    do {
      swapped = false;

      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
          swapped = true;
        }
      }
    } while (swapped);

    return this;
  };
} */

function applyCustomSort() {
  [].__proto__.sort2 = function (compareFunction) {
    if (typeof compareFunction !== 'function') {
      // eslint-disable-next-line no-param-reassign
      compareFunction = (a, b) => (String(a) > String(b) ? 1 : -1);
    }

    for (let i = 0; i < this.length - 1; i++) {
      // eslint-disable-next-line no-shadow
      for (let i = 0; i < this.length - 1; i++) {
        if (compareFunction(this[i], this[i + 1]) > 0) {
          [this[i], this[i + 1]] = [this[i + 1], this[i]];
        }
      }
    }

    return this;
  };
}
module.exports = applyCustomSort;
