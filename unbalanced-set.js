/*jslint onevar: true, undef: true, eqeqeq: true, bitwise: true,
  newcap: true, immed: true, nomen: false, white: false, plusplus: false,
  laxbreak: true */

/*global define */

define(function () {
    return function (lt) {

        function Tree (left, el, right) {
            this._left = left;
            this._el = el;
            this._right = right;
        }

        var empty = null;

        return {

            empty: empty,

            member: function member (x, t) {
                if ( t === empty ) {
                    return false;
                } else {
                    if ( lt(x, t._el) ) {
                        return member(x, t._left);
                    } else if ( lt(t._el, x) ) {
                        return member(x, t._right);
                    } else {
                        return true;
                    }
                }
            },

            insert: function insert (x, t) {
                if ( t === empty ) {
                    return new Tree();
                } else {
                    var left = t._left,
                        el   = t._el,
                        right = t._right;
                    if ( lt(x, el) ) {
                        return new Tree(insert(x, left), el, right);
                    } else if ( lt(el, x) ) {
                        return new Tree(left, el, insert(x, right));
                    } else {
                        return t;
                    }
                }
            }

        };

    };
});