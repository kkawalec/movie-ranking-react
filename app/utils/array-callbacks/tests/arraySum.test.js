import arraySum from '../arraySum'

const simpleArr = [
  {
    id: 1,
    movie_id: 1,
    rating: 5,
  },
  {
    id: 25,
    movie_id: 1,
    rating: 3,
  },
  {
    id: 26,
    movie_id: 1,
    rating: 1,
  },
]

describe('array sum function (reduce callback)', () => {
  it('should sum the rating', () => {
    expect(simpleArr.reduce(arraySum, 0)).toBe(9)
  })
})
