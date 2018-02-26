export class ValidationMessages {
  static required(label: string): string {
    return `${label} is required`;
  }

  static lengthRange(label: string, min: number, max?: number): string {
    const maxMessage = max ? `maximum ${max}` : '';
    const union = maxMessage ? ', and ' : '';
    return `${label} must be at least ${min} symbols${union} ${maxMessage}`;
  }

  static email(): string {
    return 'Enter correct email';
  }

  static phone(): string {
    return 'Enter correct phone number';
  }

  static incorrectSymbols(label: string): string {
    return `${label} contains incorrect symbols`;
  }
}
