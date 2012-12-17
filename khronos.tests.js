/// <reference path="khronos.js" />
/// <reference path="jasmine/jasmine.js" />
var second = 1000;
var minute = 60000;
var hour = minute * 60;
var day = hour * 24;

var now = new Date();
describe("When testing Khronos.js, using the current Date/Time" + now, function () {

    it("The current date, should equal the current date", function () {
        expect(now).toEqual(now);
    });

    it("The addDays method should work", function () {
        var result1 = new Date(now.getTime() + (day * 2));
        var result2 = new Date(now.getTime() - (day * 2));

        //scenario 1
        var date = new Date(now);
        date.addDays(2);
        expect(date.getDate()).toEqual(result1.getDate());
        
        //scenario 2
        expect(new Date(now).addDays(2).getDate()).toEqual(result1.getDate());

        //scenario 3
        expect(new Date(now).addDays(-2).getDate()).toEqual(result2.getDate());
    });

    it("Is leap year should detect a leap year", function () {
        expect(new Date(2012, 01, 01, 01, 01, 01, 01).isLeapYear()).toEqual(true);
        expect(new Date(2011, 01, 01, 01, 01, 01, 01).isLeapYear()).toEqual(false);
        expect(new Date(2010, 01, 01, 01, 01, 01, 01).isLeapYear()).toEqual(false);
        expect(new Date(2009, 01, 01, 01, 01, 01, 01).isLeapYear()).toEqual(false);

    });

    it("Is should format date correctly" + now.toString("mmYY"), function () {
        
    });
});

