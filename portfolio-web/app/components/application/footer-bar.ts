import Component from '@ember/component';
import ComputedProperty from '@ember/object/computed';
import { inject as service } from '@ember/service';
import RuntimeConfigs, { ScreenResolution } from 'portfolio-web/services/runtime-configs';
import { get } from '@ember/object';
import { computed } from '@ember-decorators/object';

export default class ApplicationFooterBar extends Component.extend({
  /**
   * Sets the tagname for the rendered html element by this component
   */
  tagName: 'footer',

  /**
   * Class for the rendered html element for this component
   */
  classNames: ['app-footer'],

  classNameBindings: ['isDesktop:app-footer--desktop']
}) {
  /**
   * Injected service for the runtime configs
   * @type {ComputedProperty<Service>}
   */
  runtimeConfigs: ComputedProperty<RuntimeConfigs> = service('runtime-configs');

  /**
   * Computed alias for whether the screen size for the user is a desktop size
   * @type {boolean}
   */
  @computed('runtimeConfigs.screenResolution')
  get isDesktop(): boolean {
    const resolution = get(this, 'runtimeConfigs').screenResolution;
    return resolution === ScreenResolution.desktop || resolution === ScreenResolution.laptop;
  }
};
