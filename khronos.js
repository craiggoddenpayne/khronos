Date.prototype.today = function () {
    var now = new Date();
    return new Date(now.year(), now.month(), now.day(), 0, 0, 0, 0);
};

Date.prototype.addMilliseconds = function (amount) { ///<summary>Adds milliseconds to a date object</summary><param name="amount">An amount of milliseconds</param>
    this.setMilliseconds(this.getMilliseconds() + amount);
    return this;
};
Date.prototype.addSeconds = function (amount) { ///<summary>Adds seconds to a date object</summary><param name="amount">An amount of seconds</param>
    this.setSeconds(this.getSeconds() + amount);
    return this;
};
Date.prototype.addMinutes = function (amount) { ///<summary>Adds minutes to a date object</summary><param name="amount">An amount of minutes</param>
    this.setMinutes(this.getMinutes() + amount);
    return this;
};
Date.prototype.addHours = function (amount) { ///<summary>Adds hours to a date object</summary><param name="amount">An amount of hours</param>
    this.setHours(this.getHours() + amount);
    return this;
};
Date.prototype.addDays = function (amount) { ///<summary>Adds days to a date object</summary><param name="amount">An amount of days</param>
    this.setHours(this.getHours() + (amount * 24));
    return this;
};
Date.prototype.addWeeks = function (amount) { ///<summary>Adds weeks to a date object</summary><param name="amount">An amount of weeks</param>
    this.addDays(amount * 7);
    return this;
};
Date.prototype.addMonths = function (amount) { ///<summary>Adds months to a date object</summary><param name="amount">An amount of months</param>
    this.setMonth(this.getMonth() + amount);
    return this;
};
Date.prototype.addYears = function (amount) { ///<summary>Adds years to a date object</summary><param name="amount">An amount of years</param>
    this.setFullYear(this.getFullYear() + amount);
    return this;
};
Date.prototype.isAfter = function (date) {///<summary>Is the specified date after this date?</summary><param name="date">A specified date</param>
    return this.getTime() > date.getTime();
};
Date.prototype.isBefore = function (date) {///<summary>Is the specified date before this date?</summary><param name="date">A specified date</param>
    return this.getTime() < date.getTime();
};

Date.prototype.add = function (years, months, days, hours, minutes, seconds, milliseconds) {
    ///<summary>Adds to a date</summary>
    this.addYears(years == null ? 0 : years);
    this.addMonths(months == null ? 0 : months);
    this.addDays(days == null ? 0 : days);
    this.addHours(hours == null ? 0 : hours);
    this.addSeconds(seconds == null ? 0 : seconds);
    this.addMilliseconds(milliseconds == null ? 0 : milliseconds);
    return this;
};

Date.prototype.milliseconds = function () {
    return this.getMilliseconds();
};
Date.prototype.second = function () {
    return this.getSeconds();
};
Date.prototype.minute = function () {
    return this.getMinutes();
};
Date.prototype.hour = function () {
    return this.getHours();
};
Date.prototype.day = function () {
    return this.getUTCDate();
};
Date.prototype.month = function () {
    return this.getUTCMonth();
};
Date.prototype.year = function () {
    return this.getUTCFullYear();
};


Date.prototype.dayOfWeek = function () {
    switch (this.getDay()) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
    }
};

//Specialist methods
Date.prototype.isLeapYear = function () {
    return new Date(this.year(), 1, 29).getMonth() == 1
};