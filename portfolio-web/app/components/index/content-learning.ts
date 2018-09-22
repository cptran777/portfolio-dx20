import Component from '@ember/component';
import { logoImageRoot } from 'portfolio-web/data/constants/asset-paths';

const skills = [
  { name: 'CPlusPlus', asset: 'c.png' },
  { name: 'CSharp', asset: 'csharp.png' },
  { name: 'Unity3D', asset: 'unity.png' }
].map(skill => ({
  ...skill,
  asset: `${logoImageRoot}${skill.asset}`
}));

export default class IndexContentLearning extends Component {
  /**
   * Our renderable list of skills for the template file
   * @type {Array<{ name: string, asset: string }>}
   */
  skills = skills;
};
