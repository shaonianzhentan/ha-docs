'use strict';
angular.module("ngLocale", [], ["$provide", function ($provide) {
    var PLURAL_CATEGORY = { ZERO: "zero", ONE: "one", TWO: "two", FEW: "few", MANY: "many", OTHER: "other" };
    function getDecimals(n) {
        n = n + '';
        var i = n.indexOf('.');
        return (i == -1) ? 0 : n.length - i - 1;
    }

    function getVF(n, opt_precision) {
        var v = opt_precision;

        if (undefined === v) {
            v = Math.min(getDecimals(n), 3);
        }

        var base = Math.pow(10, v);
        var f = ((n * base) | 0) % base;
        return { v: v, f: f };
    }

    $provide.value("$locale", {
        "DATETIME_FORMATS": {
            "AMPMS": [
                "上午",
                "下午"
            ],
            "DAY": [
                "周日",
                "星期一",
                "星期二",
                "星期三",
                "星期四",
                "星期五",
                "周六"
            ],
            "ERANAMES": [
                "Before Christ",
                "Anno Domini"
            ],
            "ERAS": [
                "BC",
                "AD"
            ],
            "FIRSTDAYOFWEEK": 6,
            "MONTH": [
                "一月",
                "二月",
                "三月",
                "四月",
                "五月",
                "六月",
                "七月",
                "八月",
                "九月",
                "十月",
                "十一月",
                "十二月"
            ],
            "SHORTDAY": [
                "Sun",
                "Mon",
                "Tue",
                "Wed",
                "Thu",
                "Fri",
                "Sat"
            ],
            "SHORTMONTH": [
                "一月，Jan",
                "二月，Feb",
                "三月，Mar",
                "四月，Apr",
                "五月，May",
                "六月，Jun",
                "七月，Jul",
                "八月，Aug",
                "九月，Sep",
                "十月，Oct",
                "十一月，Nov",
                "十二月，Dec"
            ],
            "STANDALONEMONTH": [
                "一月，January",
                "二月，February",
                "三月，March",
                "四月，April",
                "五月，May",
                "六月，June",
                "七月，July",
                "八月，August",
                "九月，September",
                "十月，October",
                "十一月，November",
                "十二月，December"
            ],
            "WEEKENDRANGE": [
                5,
                6
            ],
            "fullDate": "EEEE, MMMM d, y",
            "longDate": "MMMM d, y",
            "medium": "MMM d, y h:mm:ss a",
            "mediumDate": "MMM d, y",
            "mediumTime": "h:mm:ss a",
            "short": "M/d/yy h:mm a",
            "shortDate": "M/d/yy",
            "shortTime": "h:mm a"
        },
        "NUMBER_FORMATS": {
            "CURRENCY_SYM": "$",
            "DECIMAL_SEP": ".",
            "GROUP_SEP": ",",
            "PATTERNS": [
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 3,
                    "minFrac": 0,
                    "minInt": 1,
                    "negPre": "-",
                    "negSuf": "",
                    "posPre": "",
                    "posSuf": ""
                },
                {
                    "gSize": 3,
                    "lgSize": 3,
                    "maxFrac": 2,
                    "minFrac": 2,
                    "minInt": 1,
                    "negPre": "-\u00a4",
                    "negSuf": "",
                    "posPre": "\u00a4",
                    "posSuf": ""
                }
            ]
        },
        "id": "zh-cn",
        "localeID": "zh_CN",
        "pluralCat": function (n, opt_precision) { var i = n | 0; var vf = getVF(n, opt_precision); if (i == 1 && vf.v == 0) { return PLURAL_CATEGORY.ONE; } return PLURAL_CATEGORY.OTHER; }
    });
}]);
