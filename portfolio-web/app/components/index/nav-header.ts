import Component from '@ember/component';
import { inject as service } from '@ember/service';
import ComputedProperty from '@ember/object/computed';
import RuntimeConfigs from 'portfolio-web/services/runtime-configs';
import { alias } from '@ember-decorators/object/computed';
import { IKeyMap } from 'portfolio-web/typings/global/general';
import { computed, action } from '@ember-decorators/object';
import { INavItem } from 'portfolio-web/typings/app/navigation';
import { get, set } from '@ember/object';

enum IndexNavItems {
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
  
  /**
   * The currently selected tab of the nav header
   */
  navSelection: string = IndexNavItems.about;

  @computed('navSelection')
  get navOptions(): Array<INavItem> {
    const navSelection = get(this, 'navSelection');
    return baseNavItems.map(item => ({ ...item, isActive: item.title === navSelection }));
  }

  /**
   * Updates the selected tab for the nav header, triggered by user click on one of the tabs
   * @param this - Explicit this declaration for typescript
   * @param newSelection - new selection item
   */
  @action
  onUpdateNavSelection(this: IndexNavHeader, newSelection: IndexNavItems): void {
    set(this, 'navSelection', newSelection);
  }
};
