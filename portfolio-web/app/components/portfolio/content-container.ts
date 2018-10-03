import BaseContentContainer from 'portfolio-web/components/base-content-container';
import { ILabel } from 'portfolio-web/typings/global/general';
import { imageRoot } from 'portfolio-web/data/constants/asset-paths';

interface IThumbnail extends ILabel {
  source: string;
  link: string;
}

/**
 * Constant project link thumbnails to be passed into the component and rendered in the template under
 * the other projects folder
 */
const projectLinks: Array<IThumbnail> = [
  { id: 'avalon', name: 'Avalon', source: `${imageRoot}project-avalon.png`, link: 'portfolio.avalon' },
  { id: 'reeltime', name: 'Reel Time', source: `${imageRoot}project-reeltime.png`, link: 'portfolio.reeltime' },
  { id: 'labit', name: 'Laugh About It', source: `${imageRoot}project-labit.png`, link: 'portfolio.labit' },
  { id: 'syrup', name: 'Syrup Tale', source: `${imageRoot}Syrup.png`, link: 'portfolio.syrup' }
];

export default class PortfolioContentContainer extends BaseContentContainer {
  /**
   * Class property for project links in order to pass to the template to be rendered
   * @type {Array<IThumbnail>}
   */
  projectLinks = projectLinks;
};
