(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#slugify', {
    setup: function() {
      
    }
  });

  test('test the static slugify method', function() {
    expect(3);
    strictEqual($.slugify('Hello    good      Sir!   '), 'hello-good-sir', 'Simple Slug');
    strictEqual($.slugify('Ätschi Bätschi'), 'aetschi-baetschi', 'German Slug');
    strictEqual($.slugify('äãàáâẽèéëêìíïîöõòóôüùúûñçß'), 'aeaaaaeeeeeiiiioeooooueuuuncss', 'Special Slug');
  });

}(jQuery));
