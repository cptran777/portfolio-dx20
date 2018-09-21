import Controller from '@ember/controller';
import { IndexNavItems } from 'portfolio-web/components/index/nav-header';
import { action } from '@ember-decorators/object';
import { set } from '@ember/object';

export default class Index extends Controller.extend({
  /**
   * List of query parameters defined for this route
   */
  queryParams: [{ navSelection: 'sec' }]
}) {
  /**
   * The currently selected tab of the nav header
   */
  navSelection: IndexNavItems = IndexNavItems.about;

  @action
  onUpdateNavSelection(newSelection: IndexNavItems): void {
    set(this, 'navSelection', newSelection);
  }
}

declare module '@ember/controller' {
  interface Registry {
    'index': Index;
  }
}
