import { describe, it, expect } from 'vitest'
import { sluglify, unsluglify } from './sluglify'

describe('sluglify', () => {
	it('replaces spaces with dashes', () => {
		expect(sluglify('hello world')).toBe('hello-world')
		expect(sluglify('foo bar baz')).toBe('foo-bar-baz')
	})
})

describe('unsluglify', () => {
	it('replaces dashes with spaces', () => {
		expect(unsluglify('hello-world')).toBe('hello world')
		expect(unsluglify('foo-bar-baz')).toBe('foo bar baz')
	})
})
