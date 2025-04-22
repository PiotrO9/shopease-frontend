import { CountryCode } from '../types/enums/postal-code-patterns';

class ValidationService {
	isValidEmail(email: string): boolean {
		const emailRegex =
			/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

		if (!email || email.length > 254) {
			return false;
		}

		if (!emailRegex.test(email)) {
			return false;
		}

		const parts = email.split('@');
		if (parts.length !== 2) {
			return false;
		}

		const [localPart, domainPart] = parts;

		if (localPart?.length && localPart.length > 64) {
			return false;
		}

		if (!domainPart || domainPart.length > 255) {
			return false;
		}

		if (email.includes('..')) {
			return false;
		}

		const domainRegex =
			/^[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
		if (!domainRegex.test(domainPart)) {
			return false;
		}

		return true;
	}

	validatePhoneNumber(phoneNumber: string, countryCode: CountryCode): boolean {
		switch (countryCode) {
			case CountryCode.US: {
				const usCanadaRegex =
					/^(?:\+1)?[-.\s]?(\(\d{3}\)|\d{3})[-.\s]?\d{3}[-.\s]?\d{4}$/;
				return usCanadaRegex.test(phoneNumber);
			}
			case CountryCode.Numeric: {
				const numericRegex = /^\d+$/;
				return numericRegex.test(phoneNumber);
			}
			case CountryCode.Poland: {
				const polandRegexWithSeparators =
					/^(?:\+48)?[-.\s]?\d{3}[-.\s]\d{3}[-.\s]\d{3}$/;
				const polandRegexWithoutSeparators = /^(?:\+48)?\d{9}$/;
				return (
					polandRegexWithSeparators.test(phoneNumber) ||
					polandRegexWithoutSeparators.test(phoneNumber)
				);
			}
			default:
				return false;
		}
	}

	isValidPassword(password: string): boolean {
		const minLength = 8;
		const hasMinLength = password.length >= minLength;
		const hasUpperCase = /[A-Z]/.test(password);
		const hasLowerCase = /[a-z]/.test(password);
		const hasNumbers = /\d/.test(password);
		const hasSpecialChars = /[!@#$%^&*()_+{}[\]\]:;<>,.?~/-]/.test(password);

		return (
			hasMinLength &&
			hasUpperCase &&
			hasLowerCase &&
			hasNumbers &&
			hasSpecialChars
		);
	}

	isValidURL(url: string): boolean {
		try {
			new URL(url);
			return true;
		} catch {
			return false;
		}
	}

	isValidDate(dateString: string): boolean {
		const date = new Date(dateString);
		return !isNaN(date.getTime());
	}

	isNumberInRange(value: number, min: number, max: number): boolean {
		return value >= min && value <= max;
	}

	isValidFileType(fileName: string, allowedTypes: string[]): boolean {
		const extension = fileName.split('.').pop()?.toLowerCase();
		return extension ? allowedTypes.includes(extension) : false;
	}

	customValidator(
		value: any,
		validationFunction: (value: any) => boolean,
	): boolean {
		return validationFunction(value);
	}

	validatePolishNIP(nip: string): boolean {
		const cleanNIP = nip.replace(/\D/g, '') as string;

		if (cleanNIP.length !== 10) {
			return false;
		}

		const weights = [6, 5, 7, 2, 3, 4, 5, 6, 7] as const;
		type WeightsType = typeof weights;

		let checksum = 0;

		for (let i = 0; i < weights.length; i++) {
			const digit = cleanNIP[i];
			if (!digit) return false;
			checksum += parseInt(digit, 10) * (weights[i] as WeightsType[number]);
		}

		const checkDigit = cleanNIP[9];
		if (!checkDigit) return false;
		return checksum % 11 === parseInt(checkDigit, 10);
	}
}

export const validationService = new ValidationService();
