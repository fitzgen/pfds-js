/*jslint onevar: true, undef: true, eqeqeq: true, bitwise: true,
  newcap: true, immed: true, nomen: false, white: false, plusplus: false,
  laxbreak: true */

/*global define, module, test, ok, equal, window */

define(["../leftist-heap"], function (leftistHeap) {

    window.leftistHeap = leftistHeap;

    module("leftist heaps");

    var i = 0,
        numHeap = leftistHeap(function (a, b) {
            return a <= b;
        }),
        testArray = [],
        heap = numHeap.empty,
        n;

    for ( ; i < 100; i++ ) {
        n = Math.random();
        heap = numHeap.insert(n, heap);
        testArray.push(n);
    }

    testArray.sort(function (a, b) { return a - b; });

    test("All values are in the correct order", function () {
        var myHeap = heap;
        for ( i = 0; i < 100; i++ ) {
            equal(testArray[i], numHeap.findMin(myHeap));
            myHeap = numHeap.deleteMin(myHeap);
        }
    });

});