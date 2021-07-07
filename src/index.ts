/**
 * Configuration of Password generation.
 * Only possible to specify length. default: 16
 * All Other requirements are automatically satisfy
 * Require numbers
 * Require a special character from this set:
 * = + - ^ $ * . [ ] { } ( ) ? " ! @ # % & / \ , > < ' : ; | _ ~ `
 * Require uppercase letters
 * Require lowercase letters
 * 
 * https://docs.aws.amazon.com/cognito/latest/developerguide/user-pool-settings-policies.html
 */
interface Config {
  length: number;
}

type PasswordValue = string;

/**
 * Generate Password 
 */
export class CognitoPassword {
  MINIMUM_LENGTH = 6
  DEFAULT_LENGTH = 16
  CHARS = [
    'abcdefghijklmnopqrstuvwwyz',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    '0123456890',
    '+-^$*.[]{}()?"!@#%&/\,><\':;|_~'
  ]

  /**
   * Generate password
   * @param config {Config}
   * @returns {PasswordValue}
   */
  public generate(config?: Config): PasswordValue {
    const length = (!config || Object.keys(config).length <= 0 || config.length < this.MINIMUM_LENGTH) ? this.DEFAULT_LENGTH : config.length
    let password: PasswordValue = ''
    for(let i = 0; i < length; i++) {
      const idx = Math.floor(Math.random() * 4)
      const set = this.CHARS[idx]
      const l = set.length
      const idx2 = Math.floor(Math.random() * l)
      const chr = set[idx2]
      password = password += chr
    }
    return password
  }
}

export default CognitoPassword