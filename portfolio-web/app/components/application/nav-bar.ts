import Component from '@ember/component';
import { inject as service } from '@ember/service';
import ComputedProperty from '@ember/object/computed';
import { INavItem } from 'portfolio-web/typings/app/navigation';
import RuntimeConfigs, { ScreenResolution } from 'portfolio-web/services/runtime-configs';
import { equal, alias } from '@ember-decorators/object/computed';
import { action } from '@ember-decorators/object';
import { IKeyMap } from 'portfolio-web/typings/global/general';
import NavbarState from 'portfolio-web/services/navbar-state';
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
   * Class for the rendered html element for this component
   */
  classNames: ['nav-bar'],

  classNameBindings: ['isExpanded:nav-bar--expanded:nav-bar--collapsed', 'isDesktop:nav-bar--desktop']
}) {
  /**
   * Passed in property for the navigation items. Used in the template to render the different items
   * @type {Array<INavItem>}
   */
  navItems: Array<INavItem>;

  /**
   * Boolean flag that determines whether the nav bar is currently expanded. 
   * @type {boolean}
   */
  isExpanded = true;

  /**
   * Injected service for the runtime configs
   * @type {ComputedProperty<Service>}
   */
  runtimeConfigs: ComputedProperty<RuntimeConfigs> = service('runtime-configs');

  /**
   * Injected service for the navbar state
   * @type {ComputedProperty<Service>}
   */
  navbarState: ComputedProperty<NavbarState> = service('navbar-state');

  /**
   * Computed alias for whether the screen size for the user is a desktop size
   * @type {boolean}
   */
  @equal('runtimeConfigs.screenResolution', ScreenResolution.desktop)
  isDesktop: ComputedProperty<boolean>;

  /**
   * Computed alias for the asset paths we have available in our constants
   * @type {IKeyMap}
   */
  @alias('runtimeConfigs.assetPaths')
  assets: ComputedProperty<IKeyMap>;

  constructor() {
    super(...arguments);
    this.navItems || (this.navItems = []);
  }

  /**
   * Triggered by user click on the double arrows at the top of the navbar, changes our sidebar 
   * between the collapsed or expanded states
   */
  @action
  onToggleExpanded() {
    // Also want to trigger the service to make other components aware of this state
    get(this, 'navbarState').set('isExpanded', this.toggleProperty('isExpanded'));
  }
};
