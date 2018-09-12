import Service from '@ember/service';
import { debounce } from '@ember/runloop';
import { set } from '@ember/object';
import { IKeyMap } from 'portfolio-web/typings/global/general';
import * as assetPaths from 'portfolio-web/data/constants/asset-paths';

export enum ScreenResolution {
  mobile = 'mobile',
  tablet = 'tablet',
  laptop = 'laptop',
  desktop = 'desktop'
}

export default class RuntimeConfigs extends Service {
  /**
   * A quick way to reference the various static asset paths we have for images and other things
   * set up in this application
   * @type {IKeyMap}
   */
  assetPaths: IKeyMap = assetPaths;

  /**
   * Determination of current screen resolution. Depending on the size of the screen, we will want to
   * adjust application behavior accordingly
   * @type {ScreenResolution}
   */
  screenResolution: ScreenResolution = ScreenResolution.desktop;

  determineScreenResolution(): void {
    set(this, 'screenResolution', 
      window.matchMedia('screen and (max-width: 768px)').matches ? ScreenResolution.mobile :
      window.matchMedia('screen and (max-width: 900px)').matches ? ScreenResolution.tablet :
      window.matchMedia('screen and (max-width: 1140px)').matches ? ScreenResolution.laptop :
      ScreenResolution.desktop
    );  
  }
  
  constructor() {
    super(...arguments);
    this.determineScreenResolution();
    window.addEventListener('resize', () => {
      debounce(this.determineScreenResolution.bind(this), 150, true);
    });
  }
}

declare module '@ember/service' {
  interface Registry {
    'runtime-configs': RuntimeConfigs;
  }
}
