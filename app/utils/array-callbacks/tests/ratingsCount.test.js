import ratingsCount from '../ratingsCount'

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
  {
    id: 27,
    movie_id: 1,
    rating: 1,
  },
]

const expectedObject = {
  1: 2,
  3: 1,
  5: 1,
}

describe('ratings count function (reduce callback)', () => {
  it('should return ratings object', () => {
    expect(simpleArr.reduce(ratingsCount, {})).toEqual(expectedObject)
  })
})
