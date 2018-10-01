import Component from '@ember/component';

export default class ContentSection extends Component.extend({
  tagName: 'section',
  classNames: ['content-section']
}) {
  /**
   * Passed in used if we want to use a custom partial for the title template instead of the default
   * simple string version
   * @type {boolean}
   */
  useCustomTitleTemplate: boolean;

  /**
   * Passed in specification for the custom title template that we want to use
   * @type {string}
   */
  customTitleTemplate: string;

  /**
   * Passed in value for the title of the content section to be rendered in the header
   * @type {string}
   */
  title: string;

  constructor() {
    super(...arguments);

    // Default value setting if nothing passed in 
    this.useCustomTitleTemplate || (this.useCustomTitleTemplate = false);
    this.customTitleTemplate || (this.customTitleTemplate = '');
    this.title || (this.title = '');
  }
};
