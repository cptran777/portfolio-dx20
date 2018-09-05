import Component from '@ember/component';
import { INavItem } from 'portfolio-web/typings/app/navigation';

/**
 * Application navigation bar. It includes a profile picture and internal/external navigation links.
 * There also includes a button when the user is not on mobile that expands and contracts the nav bar
 */
export default class ApplicationNavBar extends Component.extend({
  tagName: 'nav'
}) {
  /**
   * Class for the rendered html element for this component
   */
  classNames = ['nav-bar'];

  /**
   * Passed in property for the navigation items. Used in the template to render the different items
   * @type {Array<INavItem>}
   */
  navItems: Array<INavItem>;

  constructor() {
    super(...arguments);
    
    this.navItems || (this.navItems = []);
  }
};
