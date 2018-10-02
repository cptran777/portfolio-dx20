import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | portfolio/avalon', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:portfolio/avalon');
    assert.ok(route);
  });
});
