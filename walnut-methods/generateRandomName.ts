import type { WalnutContext } from './walnut';

/** @walnut_method
 * name: Generate Random Name
 * description: Generate a random name and store in $[name]
 * actionType: custom_generate_random_name
 * context: shared
 * needsLocator: false
 * category: Data Processing
 */
export async function generateRandomName(ctx: WalnutContext) {
  const firstNames = ['Alex', 'Jordan', 'Taylor', 'Morgan', 'Casey', 'Riley', 'Avery', 'Quinn'];
  const lastNames = ['Smith', 'Johnson', 'Brown', 'Williams', 'Jones', 'Garcia', 'Miller', 'Davis'];

  const randomFirst = firstNames[Math.floor(Math.random() * firstNames.length)];
  const randomLast = lastNames[Math.floor(Math.random() * lastNames.length)];

  const randomName = `${randomFirst} ${randomLast}`;

  // ctx.args[0] contains the variable name from $[name]
  ctx.setVariable(ctx.args[0], randomName);
  ctx.log(`Generated random name: ${randomName}`);
}
