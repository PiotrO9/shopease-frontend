import { describe, it, expect } from 'vitest';
import { formattingService } from '../../../services/formattingService';

describe('FormattingService', () => {
	describe('formatDate', () => {
		it('should format date with default format', () => {
			const date = new Date('2024-01-01');
			expect(formattingService.formatDate(date)).toBe('2024-01-01');
		});

		it('should format date with custom format', () => {
			const date = new Date('2024-01-01');
			expect(formattingService.formatDate(date, 'dd/MM/yyyy')).toBe(
				'01/01/2024',
			);
		});

		it('should format date string', () => {
			const dateString = '2024-01-01';
			expect(formattingService.formatDate(dateString)).toBe('2024-01-01');
		});
	});

	describe('formatTime', () => {
		it('should format time with default format', () => {
			const date = new Date('2024-01-01T12:30:45');
			expect(formattingService.formatTime(date)).toBe('12:30:45');
		});

		it('should format time with custom format', () => {
			const date = new Date('2024-01-01T12:30:45');
			expect(formattingService.formatTime(date, 'HH:mm')).toBe('12:30');
		});
	});

	describe('formatCurrency', () => {
		it('should format currency with default settings', () => {
			expect(formattingService.formatCurrency(1234.56)).toBe('$1,234.56');
		});

		it('should handle negative values', () => {
			expect(formattingService.formatCurrency(-1234.56)).toBe('-$1,234.56');
		});
	});

	describe('formatNumber', () => {
		it('should format number with default decimal places', () => {
			expect(formattingService.formatNumber(1234.5678)).toBe('1,234.57');
		});

		it('should format number with custom decimal places', () => {
			expect(formattingService.formatNumber(1234.5678, 4)).toBe('1,234.5678');
		});
	});

	describe('formatPercentage', () => {
		it('should format percentage with default settings', () => {
			expect(formattingService.formatPercentage(0.1234)).toBe('12.34%');
		});

		it('should format percentage with custom decimal places', () => {
			expect(formattingService.formatPercentage(0.1234, 4)).toBe('12.3400%');
		});
	});

	describe('capitalizeFirstLetter', () => {
		it('should capitalize first letter of string', () => {
			expect(formattingService.capitalizeFirstLetter('hello')).toBe('Hello');
		});

		it('should handle single character', () => {
			expect(formattingService.capitalizeFirstLetter('h')).toBe('H');
		});

		it('should handle empty string', () => {
			expect(formattingService.capitalizeFirstLetter('')).toBe('');
		});
	});

	describe('truncate', () => {
		it('should truncate string when exceeding max length', () => {
			expect(formattingService.truncate('Hello World', 5)).toBe('Hello...');
		});

		it('should not truncate string when within max length', () => {
			expect(formattingService.truncate('Hello', 10)).toBe('Hello');
		});

		it('should use custom suffix', () => {
			expect(formattingService.truncate('Hello World', 5, '***')).toBe(
				'Hello***',
			);
		});
	});

	describe('formatBoolean', () => {
		it('should format true with default strings', () => {
			expect(formattingService.formatBoolean(true)).toBe('Yes');
		});

		it('should format false with default strings', () => {
			expect(formattingService.formatBoolean(false)).toBe('No');
		});

		it('should use custom strings', () => {
			expect(formattingService.formatBoolean(true, 'Tak', 'Nie')).toBe('Tak');
			expect(formattingService.formatBoolean(false, 'Tak', 'Nie')).toBe('Nie');
		});
	});

	describe('reverseString', () => {
		it('should reverse string', () => {
			expect(formattingService.reverseString('Hello')).toBe('olleH');
		});

		it('should handle empty string', () => {
			expect(formattingService.reverseString('')).toBe('');
		});
	});

	describe('toCamelCase', () => {
		it('should convert snake_case to camelCase', () => {
			expect(formattingService.toCamelCase('hello_world')).toBe('helloWorld');
		});

		it('should handle mixed cases', () => {
			expect(formattingService.toCamelCase('Hello-World_Test')).toBe(
				'helloWorldTest',
			);
		});
	});

	describe('toKebabCase', () => {
		it('should handle spaces', () => {
			expect(formattingService.toKebabCase('Hello World')).toBe('hello-world');
		});
	});

	describe('toSlug', () => {
		it('should convert string to URL-friendly slug', () => {
			expect(formattingService.toSlug('Hello World!')).toBe('hello-world');
		});

		it('should handle multiple spaces and hyphens', () => {
			expect(formattingService.toSlug('Hello   World---Test')).toBe(
				'hello-world-test',
			);
		});
	});
});
