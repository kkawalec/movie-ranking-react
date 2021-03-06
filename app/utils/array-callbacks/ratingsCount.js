/**
 * Callback for Array.reduce
 * @param {Object} previousValue
 * @param {Object} currentValue
 * @return {Object}
 */
const ratingsCount = (previousValue, currentValue) => {
  if (previousValue.hasOwnProperty(currentValue.rating)) {
    previousValue[currentValue.rating]++
    return previousValue
  }
  previousValue[currentValue.rating] = 1
  return previousValue
}

export default ratingsCount
