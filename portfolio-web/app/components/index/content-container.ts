import Component from '@ember/component';
import { IndexNavItems } from 'portfolio-web/components/index/nav-header';
import ComputedProperty from '@ember/object/computed';
import { inject as service } from '@ember/service';
import RuntimeConfigs, { ScreenResolution } from 'portfolio-web/services/runtime-configs';
import { computed } from '@ember-decorators/object';
import { get } from '@ember/object';

export default class IndexContentContainer extends Component.extend({
  classNames: ['content-container'],

  classNameBindings: ['isDesktop:content-container--desktop']
}) {
  /**
   * Importing the possible index nav items to be able to shared with the container
   * @type {IndexNavItems}
   */
  IndexNavItems = IndexNavItems;

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

  @computed('isDesktop')
  get contentSectionClass(): string {
    return `content-section content-section--${get(this, 'isDesktop') ? 'desktop' : 'mobile'}`;
  }
};
