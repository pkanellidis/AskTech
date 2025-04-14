import TwitterIcon from '@/components/icons/TwitterIcon'
import FacebookIcon from '@/components/icons/FacebookIcon'
import type { HTMLAttributes } from 'astro/types'

export interface SocialNetwork {
	name: string
	url: string
	icon: HTMLAttributes<any>
	draft: boolean
}

// ADD YOUR SOCIAL NETWORKS HERE
export const SOCIALNETWORKS: SocialNetwork[] = [
	{
		name: 'Facebook',
		url: '#',
		icon: FacebookIcon,
		draft: true
	},

	{
		name: 'Twitter',
		url: '#',
		icon: TwitterIcon,
		draft: true
	}
] as const
