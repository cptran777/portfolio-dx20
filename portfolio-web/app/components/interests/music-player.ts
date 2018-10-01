import Component from '@ember/component';
import { ILabel } from 'portfolio-web/typings/global/general';

const musicList: Array<ILabel> = [
  { id: 'MLeIyy2ipps', name: 'Shinedown' },
  { id: 'ZSS5dEeMX64', name: 'Disney' },
  { id: 'e-ORhEE9VVg', name: 'T Swift' },
  { id: 'SSR6ZzjDZ94', name: 'Boston' },
  { id: 'sZfZ8uWaOFI', name: 'Aerosmith' },
  { id: 'KrZHPOeOxQQ', name: 'Bon Jovi' },
  { id: 'kPBzTxZQG5Q', name: 'Three Doors Down' },
  { id: 'YQHsXMglC9A', name: 'Adele' },
  { id: 'VMnjF1O4eH0', name: 'Queen' },
  { id: 'IsUsVbTj2AY', name: 'Justin Timberlake' },
  { id: 'r52o65-0d3g', name: 'Drake' },
  { id: 'sOnqjkJTMaA', name: 'Michael Jackson' },
  { id: 'hT_nvWreIhg', name: 'One Republic' },
  { id: 'ktvTqknDobU', name: 'Imagine Dragons' }
];

export default class MusicPlayer extends Component.extend({
  classNames: ['music-player-container']
}) {
  /**
   * ID of the current active music video
   */
  videoId = 'e-ORhEE9VVg';

  /**
   * Renders list for music items
   */
  musicList = musicList;
};
