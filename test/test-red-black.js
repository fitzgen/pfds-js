/*jslint onevar: true, undef: true, eqeqeq: true, bitwise: true,
  newcap: true, immed: true, nomen: false, white: false, plusplus: false,
  laxbreak: true */

/*global define, module, test, ok, equal, window */

define(["../red-black-trees"], function (redBlack) {

    window.redBlack = redBlack;

    module("red black");

    var R = 1,
        B = 2,
        i = 0,
        intSet = redBlack(function (a, b) {
            return a < b;
        }),
        set = intSet.empty;

    for ( ; i < 100; i++ ) {
        set = intSet.insert(i, set);
    }

    function walk (n, fn) {
        if ( n._left ) {
            walk(n._left, fn);
        }
        fn(n);
        if ( n._right ) {
            walk(n._right, fn);
        }
    }

    test("All values 0 through 99 are in the set", function () {
        for ( i = 0; i < 100; i++ ) {
            equal(intSet.member(i, set), true);
        }
    });

    test("A node is either red or black", function () {
         walk(set, function (n) {
            ok(n._color === R || n._color === B);
         });
    });

    test("Root is black", function () {
        equal(set._color, B);
    });

    test("No red node has a red child", function () {
        walk(set, function (n) {
            if ( n._color === R ) {
                if ( n._left ) {
                    equal(n._left._color, B);
                }
                if ( n._right ) {
                    equal(n._right._color, B);
                }
            }
        });
    });

    test("Every path from the root to any leaf has equal blacks", function () {
        var numBlacks = 0, i;

        function checkPaths (n) {
            var oldNumBlacks = numBlacks;
            if ( n._color === B ) {
                numBlacks++;
            }
            if ( n._left ) {
                checkPaths(n._left);
            }
            if ( n._right ) {
                checkPaths(n._right);
            }
            if ( !n.left && !n._right ) {
                if ( i === undefined ) {
                    // First path can't compare the number of black nodes, it
                    // sets them.
                    i = numBlacks;
                } else {
                    equal(i, numBlacks);
                }
            }
            numBlacks = oldNumBlacks;
        }

        checkPaths(set);
    });

});