import Service from '@ember/service';
import { debounce } from '@ember/runloop';
import { set } from '@ember/object';

enum ScreenResolution {
  mobile = 'mobile',
  tablet = 'tablet',
  desktop = 'desktop'
}

export default class RuntimeConfigs extends Service {
  /**
   * Determination of current screen resolution. Depending on the size of the screen, we will want to
   * adjust application behavior accordingly
   * @type {ScreenResolution}
   */
  screenResolution: ScreenResolution = ScreenResolution.desktop;

  determineScreenResolution(): void {
    set(this, 'screenResolution', 
      window.matchMedia('screen and (max-width: 768px)').matches ? ScreenResolution.mobile :
      window.matchMedia('screen and (max-width: 1028px)').matches ? ScreenResolution.tablet :
      ScreenResolution.desktop
    );  
  }
  
  constructor() {
    super(...arguments);
    this.determineScreenResolution();
    window.addEventListener('resize', () => {
      debounce(this.determineScreenResolution, 150, true);
    });
  }
}

declare module '@ember/service' {
  interface Registry {
    'runtime-configs': RuntimeConfigs;
  }
}
