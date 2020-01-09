import { censor, Fields } from './Announcement'
describe('censor', () => {
  const ANNOUNCEMENTS: Fields[] = [
    { block: ['us', 'nk'], live: true, text: 'no kimchi fries', link: 'example.us' },
    { block: ['uk'], live: true, text: 'brexit', link: 'example.co.uk' },
    { block: [], live: true, text: 'none', link: 'example.com' },
    { live: true, text: 'no array', link: 'example.com' },
  ]
  describe('when an announcment contains the given country', () => {
    it('removes the anouncment from list', () => {
      expect(censor(ANNOUNCEMENTS, 'us')).toEqual([
        { block: ['uk'], live: true, text: 'brexit', link: 'example.co.uk' },
        { block: [], live: true, text: 'none', link: 'example.com' },
        { live: true, text: 'no array', link: 'example.com' },
      ])
    })
  })
  describe('when an announcment does not contain the given country', () => {
    it('makes no modifyication to list', () => {
      expect(censor(ANNOUNCEMENTS, 'au')).toEqual(ANNOUNCEMENTS)
    })
  })
})
