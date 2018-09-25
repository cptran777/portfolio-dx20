import BaseContentContainer from 'portfolio-web/components/base-content-container';
import { IndexNavItems } from 'portfolio-web/components/index/nav-header';

export default class IndexContentContainer extends BaseContentContainer {
  /**
   * Importing the possible index nav items to be able to shared with the container
   * @type {IndexNavItems}
   */
  IndexNavItems = IndexNavItems;
}
