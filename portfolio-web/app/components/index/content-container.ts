import BaseContentContainer from 'portfolio-web/components/base-content-container';
import { IndexNavItems } from 'portfolio-web/components/index/nav-header';

/**
 * List to DRY up rendering for items in the interests list
 */
const interestTabContent = [
  { title: 'Virtual and Augmented Reality', partial: 'components/index/partials/virtual-reality' },
  { title: 'Artificial Intelligence', partial: 'components/index/partials/artificial-intelligence' },
  { title: 'Game Development', partial: 'components/index/partials/game-dev' }
];

export default class IndexContentContainer extends BaseContentContainer {
  /**
   * Importing the possible index nav items to be able to shared with the container
   * @type {IndexNavItems}
   */
  IndexNavItems = IndexNavItems;

  /**
   * Static list of content to render as sections on the interests tab
   */
  interestTabContent = interestTabContent;
}
