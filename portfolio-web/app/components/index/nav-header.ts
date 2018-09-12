import Component from '@ember/component';
import { inject as service } from '@ember/service';
import ComputedProperty from '@ember/object/computed';
import RuntimeConfigs from 'portfolio-web/services/runtime-configs';
import { alias } from '@ember-decorators/object/computed';
import { IKeyMap } from 'portfolio-web/typings/global/general';

export default class IndexNavHeader extends Component.extend({
  /**
   * Sets the tagname for the rendered html element by this component
   */
  tagName: 'nav',

  /**
   * Class for the rendered html element for this component
   */
  classNames: ['index-header']
}) {
  /**
   * Injected service for the runtime configs
   * @type {ComputedProperty<Service>}
   */
  runtimeConfigs: ComputedProperty<RuntimeConfigs> = service('runtime-configs');

  /**
   * Computed alias for the asset paths we have available in our constants
   * @type {IKeyMap}
   */
  @alias('runtimeConfigs.assetPaths')
  assets: ComputedProperty<IKeyMap>;  
};
