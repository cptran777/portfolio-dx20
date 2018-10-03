import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('portfolio', function() {
    this.route('avalon');
    this.route('reeltime');
    this.route('labit');
    this.route('syrup');
  });
  this.route('interests');
});

export default Router;
