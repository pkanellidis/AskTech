export const languages = {
	en: 'English',
	gr: 'Ελληνικά'
}

export const defaultLang = 'en'

export const ui = {
	en: {
		'nav.home': 'Home',
		'nav.about': 'About',
		'nav.tags': 'Tags',
		'nav.search': 'Search',
		'nav.menu': 'Show Menu',
		'site.title': 'AskTech', // Assuming this is the title from siteConfig
		'site.logo.alt': 'asktech-logo',
		'nav.toggle_theme': 'Toggle theme',
		'nav.social.aria': '{name}' // Placeholder for social network names
	},
	gr: {
		'nav.home': 'Αρχική',
		'nav.about': 'Σχετικά',
		'nav.tags': 'Ετικέτες',
		'nav.search': 'Αναζήτηση',
		'nav.menu': 'Εμφάνιση Μενού',
		'site.title': 'AskTech', // Site names are typically kept the same across languages
		'site.logo.alt': 'asktech-λογότυπο',
		'nav.toggle_theme': 'Εναλλαγή θέματος',
		'nav.social.aria': '{name}' // Placeholder for social network names
	}
} as const
