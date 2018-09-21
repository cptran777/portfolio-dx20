import Component from '@ember/component';
import { inject as service } from '@ember/service';
import ComputedProperty from '@ember/object/computed';
import RuntimeConfigs, { ScreenResolution } from 'portfolio-web/services/runtime-configs';
import { alias } from '@ember-decorators/object/computed';
import { IKeyMap } from 'portfolio-web/typings/global/general';
import { computed } from '@ember-decorators/object';
import { INavItem } from 'portfolio-web/typings/app/navigation';
import { get } from '@ember/object';

export enum IndexNavItems {
  about = 'About Me',
  interests = 'Tech Interests',
  misc = 'Misc'
}

const navItemKeys = <Array<keyof typeof IndexNavItems>>Object.keys(IndexNavItems);

const baseNavItems = navItemKeys.map(navItemKey => ({
  link: navItemKey,
  title: IndexNavItems[navItemKey]
}));

export default class IndexNavHeader extends Component.extend({
  /**
   * Sets the tagname for the rendered html element by this component
   */
  tagName: 'nav',

  /**
   * Class for the rendered html element for this component
   */
  classNames: ['index-header'],

  classNameBindings: ['isDesktop:index-header--desktop']  
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
  
  /**
   * The currently selected tab of the nav header
   */
  navSelection: IndexNavItems;
  
  /**
   * Updates the selected tab for the nav header, triggered by user click on one of the tabs.
   * Passed in from the index controller
   * @param this - Explicit this declaration for typescript
   * @param newSelection - new selection item
   */
  onUpdateNavSelection: (s: IndexNavItems) => void;

  @computed('navSelection')
  get navOptions(): Array<INavItem> {
    const navSelection = get(this, 'navSelection');
    return baseNavItems.map(item => ({ ...item, isActive: item.title === navSelection }));
  }

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
