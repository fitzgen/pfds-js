/*jslint onevar: true, undef: true, eqeqeq: true, bitwise: true,
  newcap: true, immed: true, nomen: false, white: false, plusplus: false,
  laxbreak: true */

/*global define */

define(["cons-list"], function (list) {

    var empty = null;

    return {

        empty: empty,

        isEmpty: function (s) {
            return s === empty
                ? true
                : false;
        },

        cons: list.cons,

        head: list.head,

        tail: list.tail

    };

});