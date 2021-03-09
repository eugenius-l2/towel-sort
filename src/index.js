
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return !matrix || !matrix.length ? [] :
          matrix.reduce((sum, item, index) => index % 2 === 0 ? sum.concat(item) : sum.concat(item.reverse()));
}
