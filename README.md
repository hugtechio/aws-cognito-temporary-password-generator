# Cognito Temporary Password Generator

```
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
 ```

 # Usage

 ```typescript
 const generator = new CognitoPassword()
 // generate password. Length is 16.
 const password = generator.generate() 
 ```

  ```typescript
 const generator = new CognitoPassword()
 // generate password. Length is 6.
 const password = generator.generate({length: 6}) 
 ```

 
