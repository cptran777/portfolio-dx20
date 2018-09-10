import Service from '@ember/service';

/**
 * The purpose of the navbar state service is to extend the state of the navbar to other
 * components that may use this state to determine their own positioning in the app
 */
export default class NavbarState extends Service {
  /**
   * Whether the navbar is currently expanded
   */
  isExpanded: boolean = true;
}

// DO NOT DELETE: this is how TypeScript knows how to look up your services.
declare module '@ember/service' {
  interface Registry {
    'navbar-state': NavbarState;
  }
}
