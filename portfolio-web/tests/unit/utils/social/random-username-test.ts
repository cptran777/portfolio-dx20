import socialRandomUsername from 'portfolio-web/utils/social/random-username';
import { module, test } from 'qunit';

module('Unit | Utility | social/random-username', function(hooks) {

  // Replace this with your real tests.
  test('it works', function(assert) {
    let result = socialRandomUsername();
    assert.ok(result);
  });
});
