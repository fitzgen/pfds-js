/*jslint onevar: true, undef: true, eqeqeq: true, bitwise: true,
  newcap: true, immed: true, nomen: false, white: false, plusplus: false,
  laxbreak: true */

/*global define */

define(function () {

    function Cons (head, tail) {
        this._head = head;
        this._tail = tail;
    }

    Cons.prototype.toString = function () {
        return "(" + this._head.toString() +" . " + this._tail.toString() + ")";
    };

    return {

        cons: function (h, t) {
            return new Cons(h, t);
        },

        head: function (s) {
            if ( s === null ) {
                throw new TypeError("Can't take the head of the empty list.");
            } else {
                return s._head;
            }
        },

        tail: function (s) {
            if ( s === null ) {
                throw new TypeError("Can't take the tail of the empty list.");
            } else {
                return s._tail;
            }
        }

    };

});