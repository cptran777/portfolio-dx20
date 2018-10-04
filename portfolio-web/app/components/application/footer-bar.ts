import Component from '@ember/component';
import ComputedProperty from '@ember/object/computed';
import { inject as service } from '@ember/service';
import RuntimeConfigs from 'portfolio-web/services/runtime-configs';
import { alias } from '@ember-decorators/object/computed';

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
  @alias('runtimeConfigs.isDesktop')
  isDesktop: ComputedProperty<boolean>;
};
