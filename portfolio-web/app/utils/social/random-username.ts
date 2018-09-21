import { capitalize } from "@ember/string";

const usernameSeeds = [
  'main', 'pro', 'sniper', 'arrow', 'blaze', 'cerulean', 'blue', 'red', 'yellow',
  'speed', 'racer', 'dark', 'deception', 'biker', 'trainer', 'Pokemon', 'doom',
  'legion', 'blade', 'sword', 'animal', 'beast', 'nacho', 'fries', 'dog', 'wolf',
  'lone', 'ranger', 'gunner', 'chief', 'bandit', 'lloyd', 'sarah', 'matt',
  'brenton', 'kevin', 'justin', 'lord', 'overlord', 'phantom', 'ghost', 'malig',
  'dragon', 'flaming', 'wings', 'hope', 'horizon', 'zero', 'one', 'two', 'seven',
  'six', 'eternal', 'ethereal', 'ephemeral', 'angel', 'SF', 'yorker', 'matty',
  'teax', 'wolverine', 'tears', 'angelic', 'rune', 'brooklyn', 'rage', 'joey'
];

/**
 * Uses the options above to generate a random username
 * @returns {string}
 */
export default function randomUsername(): string {
  const words = [];
  const length = Math.ceil(Math.random() * 3);
  const usernamesLength = usernameSeeds.length;

  for (let count = 0; count < length; count++) {
    words.push(usernameSeeds[Math.floor(Math.random() * usernamesLength)]);
  }

  return words.map(word => capitalize(word)).join('');
}
