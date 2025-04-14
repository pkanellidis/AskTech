interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
	siteLogo: string
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Panos', // Site author
	title: 'AskTech', // Site title.
	description: 'Your tech hub, in one place.', // Description to display in the meta tags
	lang: 'en-GB',
	ogLocale: 'en_GB',
	shareMessage: '', // Message to share a post on social media
	paginationSize: 10, // Number of posts per page
	siteLogo: '/images/logo.png'
}
