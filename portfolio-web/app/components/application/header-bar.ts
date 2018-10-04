import Component from '@ember/component';
import { inject as service } from '@ember/service';
import ComputedProperty from '@ember/object/computed';
import RuntimeConfigs from 'portfolio-web/services/runtime-configs';

export default class ApplicationHeaderBar extends Component.extend({
  // anything which *must* be merged to prototype here
}) {
  /**
   * Injected service for the runtime configs
   * @type {ComputedProperty<Service>}
   */
  runtimeConfigs: ComputedProperty<RuntimeConfigs> = service('runtime-configs');  
};
