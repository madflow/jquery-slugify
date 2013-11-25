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

    test("chainable", function() {
        ok($("body").slugify().addClass("testing"), "can be chained");
        equal($("body").hasClass("testing"), true, "class was added correctly from chaining");
    });

    test('test the static slugify method', function() {
        expect(3);
        strictEqual($.slugify('Hello    good      Sir!   '), 'hello-good-sir', 'Simple Slug');
        strictEqual($.slugify('Ätschi Bätschi'), 'aetschi-baetschi', 'German Slug');
        strictEqual($.slugify('äãàáâẽèéëêìíïîöõòóôüùúûñçß'), 'aeaaaaeeeeeiiiioeooooueuuuncss', 'Special Slug');
    });

    test('test the static slugify method with options', function() {
        expect(2);
        var options = {
            'whitespace': '_',
            'invalid': '-'
        };
        strictEqual($.slugify('!Hello    good      Sir!   ', options), '-hello_good_sir-', 'Custom options');

        options = {
            'whitespace': '+',
            'invalid': '#'
        };
        strictEqual($.slugify('!Hello    good      Sir!   ', options), '#hello+good+sir#', 'Custom options 2');
    });
    
    test('test the DOM function on change', function() {
        expect(1);
        $('#slug-target').slugify('#slug-source');
        $('#slug-source').val('Hello    good      Sir!   ').trigger('change');
        equal($('#slug-target').val(), 'hello-good-sir', "Correct slug in target field change event");
    });
    
    test('test the DOM function on keyup', function() {
        expect(1);
        $('#slug-target').slugify('#slug-source');
        $('#slug-source').val('Hello    good      Sir!   ').trigger('keyup');
        equal($('#slug-target').val(), 'hello-good-sir', "Correct slug in target field with keyup event");
    });
    
    test('invalid event triggers nothing', function() {
        expect(1);
        $('#slug-target').slugify('#slug-source');
        $('#slug-source').val('A').trigger('click');
        equal($('#slug-target').val(), '', "Invalid event (click)");
    });
    
    test('when a the slug field is edited - the data attributed "locked should be added"', function() {
        expect(2);
        $('#slug-target').slugify('#slug-source');
        $('#slug-source').val('a').trigger('keyup');
        equal($('#slug-target').val(), 'a', "Slug added correctly");
        $('#slug-target').val('ab').trigger('change');
        ok($('#slug-target').data('locked'), '"locked" is in data object');
    });
    
    test('the slug field is a span', function() {
        expect(2);
        $('#slug-target-span').slugify('#slug-source');
        $('#slug-source').val('Hello Span!').trigger('keyup');
        equal($('#slug-target-span').text(), 'hello-span', "Slug added to span correctly");
        $('#slug-source').val('Hello Spanner!').trigger('change');
        equal($('#slug-target-span').text(), 'hello-spanner', "Slug added to span correctly again");
    });
    
    test('test the preSlug postSlug callbacks', function() {

        expect(2);

        strictEqual($.slugify('a', {
            postSlug: function(sourceString) {
                return sourceString.toUpperCase();
            }
        }), 'A', 'Uppercase postSlug');

        strictEqual($.slugify('a', {
            postSlug: function(sourceString) {
                return sourceString + 'rsch';
            }
        }), 'arsch', 'Naughty word appendend preSlug');
    });


    QUnit.testDone(function() {
        $('#slug-target').val('');
        $('#slug-source').val('');
    });

}(jQuery));
