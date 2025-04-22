import { describe, it, expect } from 'vitest';
import {
	mockEmails,
	mockPasswords,
	mockUrls,
	mockNipNumbers,
	mockFileTypes,
} from '../../__mocks__/data/validation.mock';
import { validationService } from '../../../services/validationService';
import { CountryCode } from '../../../types/enums/postal-code-patterns';

describe('ValidationService', () => {
	describe('isNumberInRange', () => {
		it('should return true when number is within range', () => {
			expect(validationService.isNumberInRange(3, 1, 5)).toBe(true);
			expect(validationService.isNumberInRange(1, 1, 5)).toBe(true); // Edge case - min
			expect(validationService.isNumberInRange(5, 1, 5)).toBe(true); // Edge case - max
			expect(validationService.isNumberInRange(0, -1, 1)).toBe(true); // Negative range
			expect(validationService.isNumberInRange(-1, -2, 0)).toBe(true); // All negative
		});

		it('should return false when number is outside range', () => {
			expect(validationService.isNumberInRange(0, 1, 5)).toBe(false);
			expect(validationService.isNumberInRange(6, 1, 5)).toBe(false);
			expect(validationService.isNumberInRange(-2, -1, 1)).toBe(false); // Negative range
			expect(validationService.isNumberInRange(2, -1, 1)).toBe(false); // Mixed range
		});

		it('should handle edge cases', () => {
			expect(validationService.isNumberInRange(0, 0, 0)).toBe(true); // Single value range
			expect(validationService.isNumberInRange(1, 0, 0)).toBe(false); // Outside single value range
			expect(
				validationService.isNumberInRange(
					Number.MAX_SAFE_INTEGER,
					0,
					Number.MAX_SAFE_INTEGER,
				),
			).toBe(true); // Max safe integer
			expect(
				validationService.isNumberInRange(
					Number.MIN_SAFE_INTEGER,
					Number.MIN_SAFE_INTEGER,
					0,
				),
			).toBe(true); // Min safe integer
		});
	});

	describe('isValidEmail', () => {
		it.each(mockEmails.valid)(
			'should validate correct email address: %s',
			(email) => {
				expect(validationService.isValidEmail(email)).toBe(true);
			},
		);

		it.each(mockEmails.invalid)(
			'should reject invalid email address: %s',
			(email) => {
				expect(validationService.isValidEmail(email)).toBe(false);
			},
		);

		it('should handle special cases', () => {
			expect(validationService.isValidEmail('user@localhost')).toBe(true);
			expect(validationService.isValidEmail('user@127.0.0.1')).toBe(true);
			expect(
				validationService.isValidEmail('user@domain-with-hyphen.com'),
			).toBe(true);
			expect(
				validationService.isValidEmail(
					'user@domain.with.multiple.subdomains.com',
				),
			).toBe(true);
		});
	});

	describe('isValidPassword', () => {
		it.each(mockPasswords.valid)(
			'should validate correct password: %s',
			(password) => {
				expect(validationService.isValidPassword(password)).toBe(true);
			},
		);

		it.each(mockPasswords.invalid)(
			'should reject invalid password: %s',
			(password) => {
				expect(validationService.isValidPassword(password)).toBe(false);
			},
		);

		it('should handle special cases', () => {
			expect(validationService.isValidPassword('P@ssw0rd')).toBe(true);
			expect(validationService.isValidPassword('Str0ngP@ss')).toBe(true);
			expect(validationService.isValidPassword('C0mpl3xP@ss')).toBe(true);
			expect(validationService.isValidPassword('S3cur3P@ss')).toBe(true);
		});
	});

	describe('isValidURL', () => {
		it.each(mockUrls.valid)('should validate correct URL: %s', (url) => {
			expect(validationService.isValidURL(url)).toBe(true);
		});

		it.each(mockUrls.invalid)('should reject invalid URL: %s', (url) => {
			expect(validationService.isValidURL(url)).toBe(false);
		});

		it('should handle special cases', () => {
			expect(
				validationService.isValidURL('https://user:pass@example.com'),
			).toBe(true);
			expect(validationService.isValidURL('http://localhost:3000')).toBe(true);
			expect(validationService.isValidURL('https://example.com:8080')).toBe(
				true,
			);
			expect(
				validationService.isValidURL(
					'https://example.com/path?query=1&param=2',
				),
			).toBe(true);
		});
	});

	describe('isValidFileType', () => {
		const allowedTypes = ['jpg', 'jpeg', 'png', 'pdf'];

		it.each(mockFileTypes.valid)(
			'should validate allowed file type: %s',
			(filename) => {
				expect(validationService.isValidFileType(filename, allowedTypes)).toBe(
					true,
				);
			},
		);

		// it.each(mockFileTypes.invalid)(
		// 	'should reject disallowed file type: %s',
		// 	(filename) => {
		// 		expect(validationService.isValidFileType(filename, allowedTypes)).toBe(
		// 			false,
		// 		);
		// 	},
		// );

		it('should handle special cases', () => {
			expect(
				validationService.isValidFileType('document.PDF', allowedTypes),
			).toBe(true);
			expect(validationService.isValidFileType('image.JPG', allowedTypes)).toBe(
				true,
			);
			expect(validationService.isValidFileType('photo.PNG', allowedTypes)).toBe(
				true,
			);
			expect(validationService.isValidFileType('file.jpg', allowedTypes)).toBe(
				true,
			);
		});
	});

	describe('validatePolishNIP', () => {
		it.each(mockNipNumbers.valid)(
			'should validate correct Polish NIP number: %s',
			(nip) => {
				expect(validationService.validatePolishNIP(nip)).toBe(true);
			},
		);

		it.each(mockNipNumbers.invalid)(
			'should reject invalid Polish NIP number: %s',
			(nip) => {
				expect(validationService.validatePolishNIP(nip)).toBe(false);
			},
		);

		it('should handle special cases', () => {
			expect(validationService.validatePolishNIP('525-224-84-81')).toBe(true);
			expect(validationService.validatePolishNIP('525 224 84 81')).toBe(true);
			expect(validationService.validatePolishNIP('525.224.84.81')).toBe(true);
			expect(validationService.validatePolishNIP('5252248481')).toBe(true);
		});
	});
});
