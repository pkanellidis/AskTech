import { getCollection } from 'astro:content'
import { CATEGORIES } from '@/data/categories'

export const getCategories = async () => {
	const categoriesEN = await getCategoriesByLocale('en')
	const categoriesGR = await getCategoriesByLocale('gr')
	return [...categoriesEN, ...categoriesGR]
}

export const getCategoriesByLocale = async (locale: 'en' | 'gr') => {
	const posts = await getCollection(locale)
	const categories = new Set(
		posts?.filter((post) => !post.data.draft).map((post) => post.data.category)
	)
	return Array.from(categories).sort((a, b) =>
		CATEGORIES.indexOf(a) < CATEGORIES.indexOf(b) ? -1 : 1
	)
}

export const getPosts = async (max?: number) => {
	return [...(await getPostsByLocale('en', max)), ...(await getPostsByLocale('gr', max))]
}

export const getPostsByLocale = async (locale: 'en' | 'gr', max?: number) => {
	return (await getCollection(locale))
		?.filter((post) => !post.data.draft)
		?.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf())
		.slice(0, max)
}

export const getTags = async () => {
	const tagsEN = await getTagsByLocale('en')
	const tagsGR = await getTagsByLocale('gr')
	return [...tagsEN, ...tagsGR]
}

export const getTagsByLocale = async (locale: 'en' | 'gr') => {
	const posts = await getCollection(locale)
	const tags = new Set()
	posts
		?.filter((post) => !post.data.draft)
		?.forEach((post) => {
			post.data.tags.forEach((tag) => {
				if (tag != '') {
					tags.add(tag.toLowerCase())
				}
			})
		})

	return Array.from(tags)
}

export const getPostByTag = async (locale: 'en' | 'gr', tag: string) => {
	const posts = await getPosts(locale)
	const lowercaseTag = tag.toLowerCase()
	return posts
		?.filter((post) => !post.data.draft)
		?.filter((post) => {
			return post.data.tags.some((postTag) => postTag.toLowerCase() === lowercaseTag)
		})
}

export const filterPostsByCategory = async (locale: 'en' | 'gr', category: string) => {
	const posts = await getPosts(locale)
	return posts
		?.filter((post) => !post.data.draft)
		?.filter((post) => post.data.category.toLowerCase() === category)
}
