import Component from '@ember/component';
import ComputedProperty from '@ember/object/computed';
import { inject as service } from '@ember/service';
import RuntimeConfigs, { ScreenResolution } from 'portfolio-web/services/runtime-configs';
import { alias } from '@ember-decorators/object/computed';
import NavbarState from 'portfolio-web/services/navbar-state';
import { get } from '@ember/object';
import { computed } from '@ember-decorators/object';

export default class ApplicationBodyBar extends Component.extend({
  /**
   * Class for the rendered html element for this component
   */
  classNames: ['app-body'],

  classNameBindings: [
    'isDesktop:app-body--desktop', 
    'navIsExpanded:app-body--desktop--nav-expanded:app-body--desktop--nav-collapsed'
  ]
}) {
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
  @computed('runtimeConfigs.screenResolution')
  get isDesktop(): boolean {
    const resolution = get(this, 'runtimeConfigs').screenResolution;
    return resolution === ScreenResolution.desktop || resolution === ScreenResolution.laptop;
  }

  @alias('navbarState.isExpanded')
  navIsExpanded: ComputedProperty<boolean>;
};
