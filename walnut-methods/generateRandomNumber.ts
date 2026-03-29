import type { WalnutContext } from './walnut';

/** @walnut_method
 * name: Generate Random 5 Digit Number
 * description: Generate a random 5 digit number and store in $[randomNumber]
 * actionType: custom_generate_random_5_digit_number
 * context: shared
 * needsLocator: false
 * category: Data Processing
 */
export async function generateRandomNumber(ctx: WalnutContext) {
  const randomNumber = Math.floor(10000 + Math.random() * 90000).toString();
  ctx.setVariable(ctx.args[0], randomNumber);
}
