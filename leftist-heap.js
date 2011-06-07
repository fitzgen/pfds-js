/*jslint onevar: true, undef: true, eqeqeq: true, bitwise: true,
  newcap: true, immed: true, nomen: false, white: false, plusplus: false,
  laxbreak: true */

/*global define */

define(function () {
    return function (leq) {

        function T (rank, el, left, right) {
            this._rank = rank;
            this._el = el;
            this._left = left;
            this._right = right;
        }

        var empty = null;

        function rank (h) {
            return h === empty
                ? 0
                : h._rank;
        }

        function makeT (x, a, b) {
            var ra = rank(a), rb = rank(b);
            return ra >= rb
                ? new T(rb + 1, x, a, b)
                : new T(ra + 1, x, b, a);
        }

        function isEmpty (h) {
            return h === empty;
        }

        function merge (h1, h2) {
            if ( isEmpty(h1) ) {
                return h2;
            } else if ( isEmpty(h2) ) {
                return h1;
            } else {
                var x = h1._el,
                    a1 = h1._left,
                    b1 = h1._right,
                    y = h2._el,
                    a2 = h2._left,
                    b2 = h2._right;
                return leq(x, y)
                    ? makeT(x, a1, merge(b1, h2))
                    : makeT(y, a2, merge(h1, b2));
            }
        }

        return {
            empty: empty,
            isEmpty: isEmpty,
            merge: merge,
            insert: function (x, h) {
                return merge(new T(1, x, empty, empty), h);
            },
            findMin: function (h) {
                if ( isEmpty(h) ) {
                    throw new TypeError(
                        "Cannot find the minimum element in an empty heap."
                    );
                } else {
                    return h._el;
                }
            },
            deleteMin: function (h) {
                if ( isEmpty(h) ) {
                    throw new TypeError(
                        "Cannot delete the minimum element in an empty heap"
                    );
                } else {
                    return merge(h._left, h._right);
                }
            }
        };

    };
});