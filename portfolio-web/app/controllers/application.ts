import Controller from '@ember/controller';
import { computed, get } from '@ember/object';
import { INavItem } from 'portfolio-web/typings/app/navigation';

export default class ApplicationController extends Controller {
  navItems = computed('currentPath', function (): Array<INavItem> {
    const currentPath = get(this, 'currentPath');
    const navItems: Array<INavItem> = [
      { link: 'index', title: 'Home' },
      { link: 'portfolio', title: 'Portfolio' },
      { link: 'interests', title: 'Interests' }
    ];

    return navItems.map(item => ({ ...item, isActive: currentPath.includes(item.link) }));
  });
}

declare module '@ember/controller' {
  interface Registry {
    'application': ApplicationController;
  }
}
