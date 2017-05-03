import moviesComparator from '../moviesComparator'

const simpleArr = [
  {
    id: 1,
    title: 'Movie 1',
    poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-1.jpg',
  },
  {
    id: 2,
    title: 'Movie 2',
    poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-2.jpg',
  },
  {
    id: 3,
    title: 'Movie 3',
    poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-3.jpg',
  },
]

const expectedArr = [
  {
    id: 3,
    title: 'Movie 3',
    poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-3.jpg',
  },
  {
    id: 2,
    title: 'Movie 2',
    poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-2.jpg',
  },
  {
    id: 1,
    title: 'Movie 1',
    poster: 'http://www.bitrebels.com/wp-content/uploads/2011/05/Minimalistic-Star-Wars-Poster-Design-1.jpg',
  },
]

describe('movies comparator function (sort callback)', () => {
  it('should sort the array', () => {
    expect(simpleArr.sort(moviesComparator(-1, 'title'))).toEqual(expectedArr)
  })
})
