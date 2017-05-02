/**
 * Callback for Array.sort method
 * @param {number} sort
 * @param {string} param
 */
const moviesComparator = (sort, param) => (a, b) => {
  if (sort === 1) {
    return a[param] > b[param] ? 1 : -1
  }
  return a[param] > b[param] ? -1 : 1
}

export default moviesComparator
