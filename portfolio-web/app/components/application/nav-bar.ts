import Component from '@ember/component';
import { inject as service } from '@ember/service';
import ComputedProperty from '@ember/object/computed';
import { INavItem } from 'portfolio-web/typings/app/navigation';
import RuntimeConfigs from 'portfolio-web/services/runtime-configs';
import { get } from '@ember/object';

/**
 * Application navigation bar. It includes a profile picture and internal/external navigation links.
 * There also includes a button when the user is not on mobile that expands and contracts the nav bar
 */
export default class ApplicationNavBar extends Component.extend({
  /**
   * Sets the tagname for the rendered html element by this component
   */
  tagName: 'nav',

  /**
   * Injected service for the runtime configs
   * @type {ComputedProperty<Service>}
   */
  runtimeConfigs: <ComputedProperty<RuntimeConfigs>>service('runtime-configs')
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

  /**
   * Boolean flag that determines whether the nav bar is currently expanded. 
   * @type {boolean}
   */
  isExpanded = false;

  constructor() {
    super(...arguments);
    this.navItems || (this.navItems = []);

    const configs = get(this, 'runtimeConfigs');

    console.log(configs);
  }
};
