import Component from '@ember/component';
import { computed } from '@ember-decorators/object';
import { set, get } from '@ember/object';

const baseThumbnailClass = 'content-project__overlay';

export default class PortfolioProjectThumbnail extends Component.extend({
  classNames: ['content-project']
}) {
  /**
   * Flag determining whether the user has their mouse over the component
   * @type {boolean}
   */
  isHovering = false;
  
  /**
   * Determines the class of the thumbnail overlay, which then allows us to manipulate its 
   * animation with attached css specs. On user mouseover, the thumbnail overlay should fall
   * into view, and then be removed on mouseout
   */
  @computed('isHovering')
  get thumbnailOverlayClass(): string {
    const isHovering = get(this, 'isHovering');
    const noHoverClass = `${baseThumbnailClass}--hide`;
    const hoverClass = `${baseThumbnailClass}--show`;

    return `${baseThumbnailClass} ${isHovering ? hoverClass : noHoverClass}`;
  }

  mouseEnter() {
    set(this, 'isHovering', true);
  }

  mouseLeave() {
    set(this, 'isHovering', false);
  }
};
