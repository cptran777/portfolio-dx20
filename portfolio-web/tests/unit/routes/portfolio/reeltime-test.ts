import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | portfolio/reeltime', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:portfolio/reeltime');
    assert.ok(route);
  });
});
