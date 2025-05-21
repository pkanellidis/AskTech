import { describe, it, expect, vi } from 'vitest'
import { remarkReadingTime } from './readTime'

describe('remarkReadingTime', () => {
	it('injects minutesRead into frontmatter', () => {
		const mockTree = 'This is a test post with some content.'
		const mockData = { astro: { frontmatter: {} as any } }
		const fn = remarkReadingTime()
		fn(mockTree, { data: mockData })
		expect((mockData.astro.frontmatter as any).minutesRead).toBe('1 min read')
	})
})
