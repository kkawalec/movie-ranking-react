/**
 * Callback for Array.reduce
 * @param {number} previousValue
 * @param {Object} currentValue
 * @return {number}
 */
const arraySumCallback = (previousValue, currentValue) => previousValue + currentValue.rating

export default arraySumCallback
