export class ValidatorService {
  static min(inputValue, min) {
    if (inputValue < min) {
      return `Can't be less than ${min} characters.`;
    }
  }
  static max(inputValue, max) {
    if (inputValue > max) {
      return `Can't be more than ${max} characters.`;
    }
  }
}
