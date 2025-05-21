import { describe, it, expect, vi } from 'vitest'
import {
	filterPostsByCategory,
	getCategories,
	getCategoriesByLocale,
	getPostByTag,
	getPosts,
	getPostsByLocale,
	getTags,
	getTagsByLocale
} from './post'

const mockCollections: Record<string, any[]> = {
	en: [
		{
			data: {
				draft: false,
				category: 'english',
				pubDate: '2026-05-20T09:00:00.000Z',
				tags: ['english']
			}
		},
		{
			data: {
				draft: false,
				category: 'common',
				pubDate: '2025-05-20T09:00:00.000Z',
				tags: ['common']
			}
		}
	],
	gr: [
		{
			data: {
				draft: false,
				category: 'greek',
				pubDate: '2025-05-20T09:00:00.000Z',
				tags: ['greek']
			}
		},
		{
			data: { draft: true, category: 'common', pubDate: '2025-05-20T09:00:00.000Z', tags: ['next'] }
		}
	]
}

vi.mock('astro:content', () => ({
	getCollection: async (locale: string) => mockCollections[locale] || []
}))

describe('getCategoriesByLocale', () => {
	it('returns correct categories for en locale', async () => {
		const result = await getCategoriesByLocale('en')
		expect(result).toContain('english')
		expect(result).toContain('common')
		expect(result).not.toContain('greek')
	})

	it('returns correct categories for gr locale', async () => {
		const result = await getCategoriesByLocale('gr')
		expect(result).toContain('greek')
		expect(result).not.toContain('english')
		expect(result).not.toContain('common')
	})
})

describe('getCategories', () => {
	it('returns all categories from both locales', async () => {
		const result = await getCategories()
		expect(result).toContain('english')
		expect(result).toContain('greek')
		expect(result).toContain('common')
	})
})

describe('getPostsByLocale', () => {
	it('returns posts for en locale', async () => {
		const result = await getPostsByLocale('en')
		expect(result).toHaveLength(2)
		expect(result[0].data.category).toBe('english')
	})

	it('returns posts for gr locale', async () => {
		const result = await getPostsByLocale('gr')
		expect(result).toHaveLength(1)
		expect(result[0].data.category).toBe('greek')
	})

	it('filters out drafts', async () => {
		const result = await getPostsByLocale('gr')
		expect(result).toHaveLength(1)
		expect(result[0].data.draft).toBe(false)
	})

	it('limits the number of posts returned', async () => {
		const result = await getPostsByLocale('en', 1)
		expect(result).toHaveLength(1)
		expect(result[0].data.category).toBe('english')
	})

	it('sorts posts by pubDate', async () => {
		const result = await getPostsByLocale('en')
		expect(new Date(result[1].data.pubDate).valueOf()).toBeLessThan(
			new Date(result[0].data.pubDate).valueOf()
		)
	})
})

describe('getPosts', () => {
	it('returns posts from both locales', async () => {
		const result = await getPosts()
		expect(result).toHaveLength(3)
	})

	it('filters out drafts', async () => {
		const result = await getPosts()
		expect(result).toHaveLength(3)
		expect(result[2].data.draft).toBe(false)
	})
})

describe('getTagsByLocale', () => {
	it('returns tags for en locale', async () => {
		const result = await getTagsByLocale('en')
		expect(result).toContain('english')
		expect(result).toContain('common')
	})

	it('returns tags for gr locale', async () => {
		const result = await getTagsByLocale('gr')
		expect(result).toContain('greek')
		expect(result).not.toContain('english')
		expect(result).not.toContain('common')
	})
})

describe('getTags', () => {
	it('returns all tags from both locales', async () => {
		const result = await getTags()
		expect(result).toContain('english')
		expect(result).toContain('greek')
		expect(result).toContain('common')
	})
})

describe('getPostByTag', () => {
	it('returns posts by tag for en locale', async () => {
		const result = await getPostByTag('en', 'english')
		expect(result).toHaveLength(1)
		expect(result[0].data.tags).toContain('english')
	})

	it('returns posts by tag for gr locale', async () => {
		const result = await getPostByTag('gr', 'greek')
		expect(result).toHaveLength(1)
		expect(result[0].data.tags).toContain('greek')
	})
})

describe('filterPostsByCategory', () => {
	it('returns posts by category', async () => {
		const result = await filterPostsByCategory('common')
		expect(result).toHaveLength(1)
		expect(result[0].data.category).toBe('common')
	})
})
