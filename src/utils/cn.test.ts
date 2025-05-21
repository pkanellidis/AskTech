import { describe, it, expect } from 'vitest'
import { cn } from './cn'

describe('cn', () => {
	it('merges class names correctly', () => {
		expect(cn('foo', 'bar')).toContain('foo')
		expect(cn('foo', 'bar')).toContain('bar')
	})

	it('handles falsy values', () => {
		expect(cn('foo', false, null, undefined, '', 'bar')).toContain('foo')
		expect(cn('foo', false, null, undefined, '', 'bar')).toContain('bar')
	})
})
