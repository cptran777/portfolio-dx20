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
  { id: 'reeltime', name: 'Reel Time', source: `${imageRoot}project-reeltime.png`, link: 'portfolio.reeltime' }
];

export default class PortfolioContentContainer extends BaseContentContainer {
  projectLinks = projectLinks;
};
