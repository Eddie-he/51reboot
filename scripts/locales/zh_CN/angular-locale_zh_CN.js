angular.module("ngLocale", [], ["$provide", function($provide) {
var PLURAL_CATEGORY = {ZERO: "零", ONE: "一", TWO: "二", FEW: "三", MANY: "更多", OTHER: "其他"};
$provide.value("$locale", {
  "DATETIME_FORMATS": {
    "AMPMS": {
      "0": "早上",
      "1": "下午"
    },
    "DAY": {
      "0": "星期日",
      "1": "星期一",
      "2": "星期二",
      "3": "星期三",
      "4": "星期四",
      "5": "星期五",
      "6": "星期六"
    },
    "MONTH": {
      "0": "1月",
      "1": "2月",
      "2": "3月",
      "3": "4月",
      "4": "5月",
      "5": "6月",
      "6": "7月",
      "7": "8月",
      "8": "9月",
      "9": "10月",
      "10": "11月",
      "11": "12月"
    },
    "SHORTDAY": {
      "0": "日",
      "1": "一",
      "2": "二",
      "3": "三",
      "4": "四",
      "5": "五",
      "6": "六"
    },
    "SHORTMONTH": {
      "0": "1月",
      "1": "2月",
      "2": "3月",
      "3": "4月",
      "4": "5月",
      "5": "6月",
      "6": "7月",
      "7": "8月",
      "8": "9月",
      "9": "10月",
      "10": "11月",
      "11": "12月"
    },
    "fullDate": "y-M-d  EEEE",
    "longDate": "y年 MMMM d日",
    "medium": " y年 MMM d日 H:mm:ss ",
    "mediumDate": "y年 MMM d日",
    "mediumTime": "H:mm:ss ",
    "short": "yy/M/d H:mm ",
    "shortDate": "M月 d日",
    "shortTime": "H:mm ",
    "monthYear":"y年 MMMM", //schedule-header.twig
    "monthDay":" MMM d日 EEEE ", // scoreboard.twig
    "dobDay":"y-MM-dd",// playerSnapshot.twig
    "scoreBoardDay":"EEEE",
    "longNoYear":"MMMM d日",
    "shortMonthDay":"MMM dd"
  },
  "NUMBER_FORMATS": {
    "CURRENCY_SYM": "?",
    "DECIMAL_SEP": ".",
    "GROUP_SEP": ",",
    "PATTERNS": {
      "0": {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 3,
        "minFrac": 0,
        "minInt": 1,
        "negPre": "-",
        "negSuf": "",
        "posPre": "",
        "posSuf": ""
      },
      "1": {
        "gSize": 3,
        "lgSize": 3,
        "macFrac": 0,
        "maxFrac": 2,
        "minFrac": 2,
        "minInt": 1,
        "negPre": "(\u00a4",
        "negSuf": ")",
        "posPre": "\u00a4",
        "posSuf": ""
      }
    }
  },
  "id": "zh",
  "pluralCat": function (n) {  if (n == 1) {   return PLURAL_CATEGORY.ONE;  }  return PLURAL_CATEGORY.OTHER;}
});
}]);

/*  |xGv00|841168a4dad7ccd0be7163aa39c6713a */