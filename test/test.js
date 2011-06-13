/*jslint onevar: true, undef: true, eqeqeq: true, bitwise: true,
  newcap: true, immed: true, nomen: false, white: false, plusplus: false,
  laxbreak: true */

/*global require, window */

window.console = window.console || {
    log: function () {},
    profile: function () {},
    profileEnd: function () {}
};

require([
    "qunit.js"
], function () {

    require.ready(function () {
        require(["test-red-black", "test-leftist-heap"]);
    });

});
