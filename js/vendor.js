function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var quarterOfYear$2 = {exports: {}};

var quarterOfYear = quarterOfYear$2.exports;

(function (module, exports) {
	!function(t,n){module.exports=n();}(quarterOfYear,(function(){var t="month",n="quarter";return function(e,i){var r=i.prototype;r.quarter=function(t){return this.$utils().u(t)?Math.ceil((this.month()+1)/3):this.month(this.month()%3+3*(t-1))};var s=r.add;r.add=function(e,i){return e=Number(e),this.$utils().p(i)===n?this.add(3*e,t):s.bind(this)(e,i)};var u=r.startOf;r.startOf=function(e,i){var r=this.$utils(),s=!!r.u(i)||i;if(r.p(e)===n){var o=this.quarter()-1;return s?this.month(3*o).startOf(t).startOf("day"):this.month(3*o+2).endOf(t).endOf("day")}return u.bind(this)(e,i)};}})); 
} (quarterOfYear$2));

var quarterOfYearExports = quarterOfYear$2.exports;
var quarterOfYear$1 = /*@__PURE__*/getDefaultExportFromCjs(quarterOfYearExports);

var dayjs_min$1 = {exports: {}};

var dayjs_min = dayjs_min$1.exports;

(function (module, exports) {
	!function(t,e){module.exports=e();}(dayjs_min,(function(){var t=1e3,e=6e4,n=36e5,r="millisecond",i="second",s="minute",u="hour",a="day",o="week",c="month",f="quarter",h="year",d="date",l="Invalid Date",$=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,M={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return "["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},m=function(t,e,n){var r=String(t);return !r||r.length>=e?t:""+Array(e+1-r.length).join(n)+t},v={s:m,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),r=Math.floor(n/60),i=n%60;return (e<=0?"+":"-")+m(r,2,"0")+":"+m(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return -t(n,e);var r=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(r,c),s=n-i<0,u=e.clone().add(r+(s?-1:1),c);return +(-(r+(n-i)/(s?i-u:u-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return {M:c,y:h,w:o,d:a,D:d,h:u,m:s,s:i,ms:r,Q:f}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},g="en",D={};D[g]=M;var p="$isDayjsObject",S=function(t){return t instanceof _||!(!t||!t[p])},w=function t(e,n,r){var i;if(!e)return g;if("string"==typeof e){var s=e.toLowerCase();D[s]&&(i=s),n&&(D[s]=n,i=s);var u=e.split("-");if(!i&&u.length>1)return t(u[0])}else {var a=e.name;D[a]=e,i=a;}return !r&&i&&(g=i),i||!r&&g},O=function(t,e){if(S(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new _(n)},b=v;b.l=w,b.i=S,b.w=function(t,e){return O(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var _=function(){function M(t){this.$L=w(t.locale,null,true),this.parse(t),this.$x=this.$x||t.x||{},this[p]=true;}var m=M.prototype;return m.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(b.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var r=e.match($);if(r){var i=r[2]-1||0,s=(r[7]||"0").substring(0,3);return n?new Date(Date.UTC(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)):new Date(r[1],i,r[3]||1,r[4]||0,r[5]||0,r[6]||0,s)}}return new Date(e)}(t),this.init();},m.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds();},m.$utils=function(){return b},m.isValid=function(){return !(this.$d.toString()===l)},m.isSame=function(t,e){var n=O(t);return this.startOf(e)<=n&&n<=this.endOf(e)},m.isAfter=function(t,e){return O(t)<this.startOf(e)},m.isBefore=function(t,e){return this.endOf(e)<O(t)},m.$g=function(t,e,n){return b.u(t)?this[e]:this.set(n,t)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(t,e){var n=this,r=!!b.u(e)||e,f=b.p(t),l=function(t,e){var i=b.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return r?i:i.endOf(a)},$=function(t,e){return b.w(n.toDate()[t].apply(n.toDate("s"),(r?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},y=this.$W,M=this.$M,m=this.$D,v="set"+(this.$u?"UTC":"");switch(f){case h:return r?l(1,0):l(31,11);case c:return r?l(1,M):l(0,M+1);case o:var g=this.$locale().weekStart||0,D=(y<g?y+7:y)-g;return l(r?m-D:m+(6-D),M);case a:case d:return $(v+"Hours",0);case u:return $(v+"Minutes",1);case s:return $(v+"Seconds",2);case i:return $(v+"Milliseconds",3);default:return this.clone()}},m.endOf=function(t){return this.startOf(t,false)},m.$set=function(t,e){var n,o=b.p(t),f="set"+(this.$u?"UTC":""),l=(n={},n[a]=f+"Date",n[d]=f+"Date",n[c]=f+"Month",n[h]=f+"FullYear",n[u]=f+"Hours",n[s]=f+"Minutes",n[i]=f+"Seconds",n[r]=f+"Milliseconds",n)[o],$=o===a?this.$D+(e-this.$W):e;if(o===c||o===h){var y=this.clone().set(d,1);y.$d[l]($),y.init(),this.$d=y.set(d,Math.min(this.$D,y.daysInMonth())).$d;}else l&&this.$d[l]($);return this.init(),this},m.set=function(t,e){return this.clone().$set(t,e)},m.get=function(t){return this[b.p(t)]()},m.add=function(r,f){var d,l=this;r=Number(r);var $=b.p(f),y=function(t){var e=O(l);return b.w(e.date(e.date()+Math.round(t*r)),l)};if($===c)return this.set(c,this.$M+r);if($===h)return this.set(h,this.$y+r);if($===a)return y(1);if($===o)return y(7);var M=(d={},d[s]=e,d[u]=n,d[i]=t,d)[$]||1,m=this.$d.getTime()+r*M;return b.w(m,this)},m.subtract=function(t,e){return this.add(-1*t,e)},m.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||l;var r=t||"YYYY-MM-DDTHH:mm:ssZ",i=b.z(this),s=this.$H,u=this.$m,a=this.$M,o=n.weekdays,c=n.months,f=n.meridiem,h=function(t,n,i,s){return t&&(t[n]||t(e,r))||i[n].slice(0,s)},d=function(t){return b.s(s%12||12,t,"0")},$=f||function(t,e,n){var r=t<12?"AM":"PM";return n?r.toLowerCase():r};return r.replace(y,(function(t,r){return r||function(t){switch(t){case "YY":return String(e.$y).slice(-2);case "YYYY":return b.s(e.$y,4,"0");case "M":return a+1;case "MM":return b.s(a+1,2,"0");case "MMM":return h(n.monthsShort,a,c,3);case "MMMM":return h(c,a);case "D":return e.$D;case "DD":return b.s(e.$D,2,"0");case "d":return String(e.$W);case "dd":return h(n.weekdaysMin,e.$W,o,2);case "ddd":return h(n.weekdaysShort,e.$W,o,3);case "dddd":return o[e.$W];case "H":return String(s);case "HH":return b.s(s,2,"0");case "h":return d(1);case "hh":return d(2);case "a":return $(s,u,true);case "A":return $(s,u,false);case "m":return String(u);case "mm":return b.s(u,2,"0");case "s":return String(e.$s);case "ss":return b.s(e.$s,2,"0");case "SSS":return b.s(e.$ms,3,"0");case "Z":return i}return null}(t)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(r,d,l){var $,y=this,M=b.p(d),m=O(r),v=(m.utcOffset()-this.utcOffset())*e,g=this-m,D=function(){return b.m(y,m)};switch(M){case h:$=D()/12;break;case c:$=D();break;case f:$=D()/3;break;case o:$=(g-v)/6048e5;break;case a:$=(g-v)/864e5;break;case u:$=g/n;break;case s:$=g/e;break;case i:$=g/t;break;default:$=g;}return l?$:b.a($)},m.daysInMonth=function(){return this.endOf(c).$D},m.$locale=function(){return D[this.$L]},m.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),r=w(t,e,true);return r&&(n.$L=r),n},m.clone=function(){return b.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},M}(),k=_.prototype;return O.prototype=k,[["$ms",r],["$s",i],["$m",s],["$H",u],["$W",a],["$M",c],["$y",h],["$D",d]].forEach((function(t){k[t[1]]=function(e){return this.$g(e,t[0],t[1])};})),O.extend=function(t,e){return t.$i||(t(e,_,O),t.$i=true),O},O.locale=w,O.isDayjs=S,O.unix=function(t){return O(1e3*t)},O.en=D[g],O.Ls=D,O.p={},O})); 
} (dayjs_min$1));

var dayjs_minExports = dayjs_min$1.exports;
var dayjs = /*@__PURE__*/getDefaultExportFromCjs(dayjs_minExports);

var Meridiem;
(function (Meridiem) {
    Meridiem[Meridiem["AM"] = 0] = "AM";
    Meridiem[Meridiem["PM"] = 1] = "PM";
})(Meridiem || (Meridiem = {}));
var Weekday;
(function (Weekday) {
    Weekday[Weekday["SUNDAY"] = 0] = "SUNDAY";
    Weekday[Weekday["MONDAY"] = 1] = "MONDAY";
    Weekday[Weekday["TUESDAY"] = 2] = "TUESDAY";
    Weekday[Weekday["WEDNESDAY"] = 3] = "WEDNESDAY";
    Weekday[Weekday["THURSDAY"] = 4] = "THURSDAY";
    Weekday[Weekday["FRIDAY"] = 5] = "FRIDAY";
    Weekday[Weekday["SATURDAY"] = 6] = "SATURDAY";
})(Weekday || (Weekday = {}));
var Month;
(function (Month) {
    Month[Month["JANUARY"] = 1] = "JANUARY";
    Month[Month["FEBRUARY"] = 2] = "FEBRUARY";
    Month[Month["MARCH"] = 3] = "MARCH";
    Month[Month["APRIL"] = 4] = "APRIL";
    Month[Month["MAY"] = 5] = "MAY";
    Month[Month["JUNE"] = 6] = "JUNE";
    Month[Month["JULY"] = 7] = "JULY";
    Month[Month["AUGUST"] = 8] = "AUGUST";
    Month[Month["SEPTEMBER"] = 9] = "SEPTEMBER";
    Month[Month["OCTOBER"] = 10] = "OCTOBER";
    Month[Month["NOVEMBER"] = 11] = "NOVEMBER";
    Month[Month["DECEMBER"] = 12] = "DECEMBER";
})(Month || (Month = {}));

function implyTheNextDay(component, targetDayJs) {
    targetDayJs = targetDayJs.add(1, "day");
    implySimilarDate(component, targetDayJs);
    implySimilarTime(component, targetDayJs);
}
function assignSimilarDate(component, targetDayJs) {
    component.assign("day", targetDayJs.date());
    component.assign("month", targetDayJs.month() + 1);
    component.assign("year", targetDayJs.year());
}
function assignSimilarTime(component, targetDayJs) {
    component.assign("hour", targetDayJs.hour());
    component.assign("minute", targetDayJs.minute());
    component.assign("second", targetDayJs.second());
    component.assign("millisecond", targetDayJs.millisecond());
    if (component.get("hour") < 12) {
        component.assign("meridiem", Meridiem.AM);
    }
    else {
        component.assign("meridiem", Meridiem.PM);
    }
}
function implySimilarDate(component, targetDayJs) {
    component.imply("day", targetDayJs.date());
    component.imply("month", targetDayJs.month() + 1);
    component.imply("year", targetDayJs.year());
}
function implySimilarTime(component, targetDayJs) {
    component.imply("hour", targetDayJs.hour());
    component.imply("minute", targetDayJs.minute());
    component.imply("second", targetDayJs.second());
    component.imply("millisecond", targetDayJs.millisecond());
}

const TIMEZONE_ABBR_MAP = {
    ACDT: 630,
    ACST: 570,
    ADT: -180,
    AEDT: 660,
    AEST: 600,
    AFT: 270,
    AKDT: -480,
    AKST: -540,
    ALMT: 360,
    AMST: -180,
    AMT: -240,
    ANAST: 720,
    ANAT: 720,
    AQTT: 300,
    ART: -180,
    AST: -240,
    AWDT: 540,
    AWST: 480,
    AZOST: 0,
    AZOT: -60,
    AZST: 300,
    AZT: 240,
    BNT: 480,
    BOT: -240,
    BRST: -120,
    BRT: -180,
    BST: 60,
    BTT: 360,
    CAST: 480,
    CAT: 120,
    CCT: 390,
    CDT: -300,
    CEST: 120,
    CET: {
        timezoneOffsetDuringDst: 2 * 60,
        timezoneOffsetNonDst: 60,
        dstStart: (year) => getLastWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2),
        dstEnd: (year) => getLastWeekdayOfMonth(year, Month.OCTOBER, Weekday.SUNDAY, 3),
    },
    CHADT: 825,
    CHAST: 765,
    CKT: -600,
    CLST: -180,
    CLT: -240,
    COT: -300,
    CST: -360,
    CT: {
        timezoneOffsetDuringDst: -5 * 60,
        timezoneOffsetNonDst: -6 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2),
    },
    CVT: -60,
    CXT: 420,
    ChST: 600,
    DAVT: 420,
    EASST: -300,
    EAST: -360,
    EAT: 180,
    ECT: -300,
    EDT: -240,
    EEST: 180,
    EET: 120,
    EGST: 0,
    EGT: -60,
    EST: -300,
    ET: {
        timezoneOffsetDuringDst: -4 * 60,
        timezoneOffsetNonDst: -5 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2),
    },
    FJST: 780,
    FJT: 720,
    FKST: -180,
    FKT: -240,
    FNT: -120,
    GALT: -360,
    GAMT: -540,
    GET: 240,
    GFT: -180,
    GILT: 720,
    GMT: 0,
    GST: 240,
    GYT: -240,
    HAA: -180,
    HAC: -300,
    HADT: -540,
    HAE: -240,
    HAP: -420,
    HAR: -360,
    HAST: -600,
    HAT: -90,
    HAY: -480,
    HKT: 480,
    HLV: -210,
    HNA: -240,
    HNC: -360,
    HNE: -300,
    HNP: -480,
    HNR: -420,
    HNT: -150,
    HNY: -540,
    HOVT: 420,
    ICT: 420,
    IDT: 180,
    IOT: 360,
    IRDT: 270,
    IRKST: 540,
    IRKT: 540,
    IRST: 210,
    IST: 330,
    JST: 540,
    KGT: 360,
    KRAST: 480,
    KRAT: 480,
    KST: 540,
    KUYT: 240,
    LHDT: 660,
    LHST: 630,
    LINT: 840,
    MAGST: 720,
    MAGT: 720,
    MART: -510,
    MAWT: 300,
    MDT: -360,
    MESZ: 120,
    MEZ: 60,
    MHT: 720,
    MMT: 390,
    MSD: 240,
    MSK: 180,
    MST: -420,
    MT: {
        timezoneOffsetDuringDst: -6 * 60,
        timezoneOffsetNonDst: -7 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2),
    },
    MUT: 240,
    MVT: 300,
    MYT: 480,
    NCT: 660,
    NDT: -90,
    NFT: 690,
    NOVST: 420,
    NOVT: 360,
    NPT: 345,
    NST: -150,
    NUT: -660,
    NZDT: 780,
    NZST: 720,
    OMSST: 420,
    OMST: 420,
    PDT: -420,
    PET: -300,
    PETST: 720,
    PETT: 720,
    PGT: 600,
    PHOT: 780,
    PHT: 480,
    PKT: 300,
    PMDT: -120,
    PMST: -180,
    PONT: 660,
    PST: -480,
    PT: {
        timezoneOffsetDuringDst: -7 * 60,
        timezoneOffsetNonDst: -8 * 60,
        dstStart: (year) => getNthWeekdayOfMonth(year, Month.MARCH, Weekday.SUNDAY, 2, 2),
        dstEnd: (year) => getNthWeekdayOfMonth(year, Month.NOVEMBER, Weekday.SUNDAY, 1, 2),
    },
    PWT: 540,
    PYST: -180,
    PYT: -240,
    RET: 240,
    SAMT: 240,
    SAST: 120,
    SBT: 660,
    SCT: 240,
    SGT: 480,
    SRT: -180,
    SST: -660,
    TAHT: -600,
    TFT: 300,
    TJT: 300,
    TKT: 780,
    TLT: 540,
    TMT: 300,
    TVT: 720,
    ULAT: 480,
    UTC: 0,
    UYST: -120,
    UYT: -180,
    UZT: 300,
    VET: -210,
    VLAST: 660,
    VLAT: 660,
    VUT: 660,
    WAST: 120,
    WAT: 60,
    WEST: 60,
    WESZ: 60,
    WET: 0,
    WEZ: 0,
    WFT: 720,
    WGST: -120,
    WGT: -180,
    WIB: 420,
    WIT: 540,
    WITA: 480,
    WST: 780,
    WT: 0,
    YAKST: 600,
    YAKT: 600,
    YAPT: 600,
    YEKST: 360,
    YEKT: 360,
};
function getNthWeekdayOfMonth(year, month, weekday, n, hour = 0) {
    let dayOfMonth = 0;
    let i = 0;
    while (i < n) {
        dayOfMonth++;
        const date = new Date(year, month - 1, dayOfMonth);
        if (date.getDay() === weekday)
            i++;
    }
    return new Date(year, month - 1, dayOfMonth, hour);
}
function getLastWeekdayOfMonth(year, month, weekday, hour = 0) {
    const oneIndexedWeekday = weekday === 0 ? 7 : weekday;
    const date = new Date(year, month - 1 + 1, 1, 12);
    const firstWeekdayNextMonth = date.getDay() === 0 ? 7 : date.getDay();
    let dayDiff;
    if (firstWeekdayNextMonth === oneIndexedWeekday)
        dayDiff = 7;
    else if (firstWeekdayNextMonth < oneIndexedWeekday)
        dayDiff = 7 + firstWeekdayNextMonth - oneIndexedWeekday;
    else
        dayDiff = firstWeekdayNextMonth - oneIndexedWeekday;
    date.setDate(date.getDate() - dayDiff);
    return new Date(year, month - 1, date.getDate(), hour);
}
function toTimezoneOffset(timezoneInput, date, timezoneOverrides = {}) {
    if (timezoneInput == null) {
        return null;
    }
    if (typeof timezoneInput === "number") {
        return timezoneInput;
    }
    const matchedTimezone = timezoneOverrides[timezoneInput] ?? TIMEZONE_ABBR_MAP[timezoneInput];
    if (matchedTimezone == null) {
        return null;
    }
    if (typeof matchedTimezone == "number") {
        return matchedTimezone;
    }
    if (date == null) {
        return null;
    }
    if (dayjs(date).isAfter(matchedTimezone.dstStart(date.getFullYear())) &&
        !dayjs(date).isAfter(matchedTimezone.dstEnd(date.getFullYear()))) {
        return matchedTimezone.timezoneOffsetDuringDst;
    }
    return matchedTimezone.timezoneOffsetNonDst;
}

dayjs.extend(quarterOfYear$1);
class ReferenceWithTimezone {
    constructor(input) {
        input = input ?? new Date();
        if (input instanceof Date) {
            this.instant = input;
        }
        else {
            this.instant = input.instant ?? new Date();
            this.timezoneOffset = toTimezoneOffset(input.timezone, this.instant);
        }
    }
    getDateWithAdjustedTimezone() {
        return new Date(this.instant.getTime() + this.getSystemTimezoneAdjustmentMinute(this.instant) * 60000);
    }
    getSystemTimezoneAdjustmentMinute(date, overrideTimezoneOffset) {
        if (!date || date.getTime() < 0) {
            date = new Date();
        }
        const currentTimezoneOffset = -date.getTimezoneOffset();
        const targetTimezoneOffset = overrideTimezoneOffset ?? this.timezoneOffset ?? currentTimezoneOffset;
        return currentTimezoneOffset - targetTimezoneOffset;
    }
}
class ParsingComponents {
    constructor(reference, knownComponents) {
        this._tags = new Set();
        this.reference = reference;
        this.knownValues = {};
        this.impliedValues = {};
        if (knownComponents) {
            for (const key in knownComponents) {
                this.knownValues[key] = knownComponents[key];
            }
        }
        const refDayJs = dayjs(reference.instant);
        this.imply("day", refDayJs.date());
        this.imply("month", refDayJs.month() + 1);
        this.imply("year", refDayJs.year());
        this.imply("hour", 12);
        this.imply("minute", 0);
        this.imply("second", 0);
        this.imply("millisecond", 0);
    }
    get(component) {
        if (component in this.knownValues) {
            return this.knownValues[component];
        }
        if (component in this.impliedValues) {
            return this.impliedValues[component];
        }
        return null;
    }
    isCertain(component) {
        return component in this.knownValues;
    }
    getCertainComponents() {
        return Object.keys(this.knownValues);
    }
    imply(component, value) {
        if (component in this.knownValues) {
            return this;
        }
        this.impliedValues[component] = value;
        return this;
    }
    assign(component, value) {
        this.knownValues[component] = value;
        delete this.impliedValues[component];
        return this;
    }
    delete(component) {
        delete this.knownValues[component];
        delete this.impliedValues[component];
    }
    clone() {
        const component = new ParsingComponents(this.reference);
        component.knownValues = {};
        component.impliedValues = {};
        for (const key in this.knownValues) {
            component.knownValues[key] = this.knownValues[key];
        }
        for (const key in this.impliedValues) {
            component.impliedValues[key] = this.impliedValues[key];
        }
        return component;
    }
    isOnlyDate() {
        return !this.isCertain("hour") && !this.isCertain("minute") && !this.isCertain("second");
    }
    isOnlyTime() {
        return (!this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month") && !this.isCertain("year"));
    }
    isOnlyWeekdayComponent() {
        return this.isCertain("weekday") && !this.isCertain("day") && !this.isCertain("month");
    }
    isDateWithUnknownYear() {
        return this.isCertain("month") && !this.isCertain("year");
    }
    isValidDate() {
        const date = this.dateWithoutTimezoneAdjustment();
        if (date.getFullYear() !== this.get("year"))
            return false;
        if (date.getMonth() !== this.get("month") - 1)
            return false;
        if (date.getDate() !== this.get("day"))
            return false;
        if (this.get("hour") != null && date.getHours() != this.get("hour"))
            return false;
        if (this.get("minute") != null && date.getMinutes() != this.get("minute"))
            return false;
        return true;
    }
    toString() {
        return `[ParsingComponents {
            tags: ${JSON.stringify(Array.from(this._tags).sort())}, 
            knownValues: ${JSON.stringify(this.knownValues)}, 
            impliedValues: ${JSON.stringify(this.impliedValues)}}, 
            reference: ${JSON.stringify(this.reference)}]`;
    }
    dayjs() {
        return dayjs(this.date());
    }
    date() {
        const date = this.dateWithoutTimezoneAdjustment();
        const timezoneAdjustment = this.reference.getSystemTimezoneAdjustmentMinute(date, this.get("timezoneOffset"));
        return new Date(date.getTime() + timezoneAdjustment * 60000);
    }
    addTag(tag) {
        this._tags.add(tag);
        return this;
    }
    addTags(tags) {
        for (const tag of tags) {
            this._tags.add(tag);
        }
        return this;
    }
    tags() {
        return new Set(this._tags);
    }
    dateWithoutTimezoneAdjustment() {
        const date = new Date(this.get("year"), this.get("month") - 1, this.get("day"), this.get("hour"), this.get("minute"), this.get("second"), this.get("millisecond"));
        date.setFullYear(this.get("year"));
        return date;
    }
    static createRelativeFromReference(reference, fragments) {
        let date = dayjs(reference.instant);
        for (const key in fragments) {
            date = date.add(fragments[key], key);
        }
        const components = new ParsingComponents(reference);
        components.addTag("result/relativeDate");
        if (fragments["hour"] || fragments["minute"] || fragments["second"]) {
            components.addTag("result/relativeDateAndTime");
            assignSimilarTime(components, date);
            assignSimilarDate(components, date);
            if (reference.timezoneOffset !== null) {
                components.assign("timezoneOffset", -reference.instant.getTimezoneOffset());
            }
        }
        else {
            implySimilarTime(components, date);
            if (reference.timezoneOffset !== null) {
                components.imply("timezoneOffset", -reference.instant.getTimezoneOffset());
            }
            if (fragments["d"]) {
                components.assign("day", date.date());
                components.assign("month", date.month() + 1);
                components.assign("year", date.year());
            }
            else if (fragments["week"]) {
                components.assign("day", date.date());
                components.assign("month", date.month() + 1);
                components.assign("year", date.year());
                components.imply("weekday", date.day());
            }
            else {
                components.imply("day", date.date());
                if (fragments["month"]) {
                    components.assign("month", date.month() + 1);
                    components.assign("year", date.year());
                }
                else {
                    components.imply("month", date.month() + 1);
                    if (fragments["year"]) {
                        components.assign("year", date.year());
                    }
                    else {
                        components.imply("year", date.year());
                    }
                }
            }
        }
        return components;
    }
}
class ParsingResult {
    constructor(reference, index, text, start, end) {
        this.reference = reference;
        this.refDate = reference.instant;
        this.index = index;
        this.text = text;
        this.start = start || new ParsingComponents(reference);
        this.end = end;
    }
    clone() {
        const result = new ParsingResult(this.reference, this.index, this.text);
        result.start = this.start ? this.start.clone() : null;
        result.end = this.end ? this.end.clone() : null;
        return result;
    }
    date() {
        return this.start.date();
    }
    addTag(tag) {
        this.start.addTag(tag);
        if (this.end) {
            this.end.addTag(tag);
        }
        return this;
    }
    addTags(tags) {
        this.start.addTags(tags);
        if (this.end) {
            this.end.addTags(tags);
        }
        return this;
    }
    tags() {
        const combinedTags = new Set(this.start.tags());
        if (this.end) {
            for (const tag of this.end.tags()) {
                combinedTags.add(tag);
            }
        }
        return combinedTags;
    }
    toString() {
        const tags = Array.from(this.tags()).sort();
        return `[ParsingResult {index: ${this.index}, text: '${this.text}', tags: ${JSON.stringify(tags)} ...}]`;
    }
}

function repeatedTimeunitPattern(prefix, singleTimeunitPattern, connectorPattern = "\\s{0,5},?\\s{0,5}") {
    const singleTimeunitPatternNoCapture = singleTimeunitPattern.replace(/\((?!\?)/g, "(?:");
    return `${prefix}${singleTimeunitPatternNoCapture}(?:${connectorPattern}${singleTimeunitPatternNoCapture}){0,10}`;
}
function extractTerms(dictionary) {
    let keys;
    if (dictionary instanceof Array) {
        keys = [...dictionary];
    }
    else if (dictionary instanceof Map) {
        keys = Array.from(dictionary.keys());
    }
    else {
        keys = Object.keys(dictionary);
    }
    return keys;
}
function matchAnyPattern(dictionary) {
    const joinedTerms = extractTerms(dictionary)
        .sort((a, b) => b.length - a.length)
        .join("|")
        .replace(/\./g, "\\.");
    return `(?:${joinedTerms})`;
}

function findMostLikelyADYear(yearNumber) {
    if (yearNumber < 100) {
        if (yearNumber > 50) {
            yearNumber = yearNumber + 1900;
        }
        else {
            yearNumber = yearNumber + 2000;
        }
    }
    return yearNumber;
}
function findYearClosestToRef(refDate, day, month) {
    const refMoment = dayjs(refDate);
    let dateMoment = refMoment;
    dateMoment = dateMoment.month(month - 1);
    dateMoment = dateMoment.date(day);
    dateMoment = dateMoment.year(refMoment.year());
    const nextYear = dateMoment.add(1, "y");
    const lastYear = dateMoment.add(-1, "y");
    if (Math.abs(nextYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = nextYear;
    }
    else if (Math.abs(lastYear.diff(refMoment)) < Math.abs(dateMoment.diff(refMoment))) {
        dateMoment = lastYear;
    }
    return dateMoment.year();
}

const WEEKDAY_DICTIONARY = {
    sunday: 0,
    sun: 0,
    "sun.": 0,
    monday: 1,
    mon: 1,
    "mon.": 1,
    tuesday: 2,
    tue: 2,
    "tue.": 2,
    wednesday: 3,
    wed: 3,
    "wed.": 3,
    thursday: 4,
    thurs: 4,
    "thurs.": 4,
    thur: 4,
    "thur.": 4,
    thu: 4,
    "thu.": 4,
    friday: 5,
    fri: 5,
    "fri.": 5,
    saturday: 6,
    sat: 6,
    "sat.": 6,
};
const FULL_MONTH_NAME_DICTIONARY = {
    january: 1,
    february: 2,
    march: 3,
    april: 4,
    may: 5,
    june: 6,
    july: 7,
    august: 8,
    september: 9,
    october: 10,
    november: 11,
    december: 12,
};
const MONTH_DICTIONARY = {
    ...FULL_MONTH_NAME_DICTIONARY,
    jan: 1,
    "jan.": 1,
    feb: 2,
    "feb.": 2,
    mar: 3,
    "mar.": 3,
    apr: 4,
    "apr.": 4,
    jun: 6,
    "jun.": 6,
    jul: 7,
    "jul.": 7,
    aug: 8,
    "aug.": 8,
    sep: 9,
    "sep.": 9,
    sept: 9,
    "sept.": 9,
    oct: 10,
    "oct.": 10,
    nov: 11,
    "nov.": 11,
    dec: 12,
    "dec.": 12,
};
const INTEGER_WORD_DICTIONARY = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
    six: 6,
    seven: 7,
    eight: 8,
    nine: 9,
    ten: 10,
    eleven: 11,
    twelve: 12,
};
const ORDINAL_WORD_DICTIONARY = {
    first: 1,
    second: 2,
    third: 3,
    fourth: 4,
    fifth: 5,
    sixth: 6,
    seventh: 7,
    eighth: 8,
    ninth: 9,
    tenth: 10,
    eleventh: 11,
    twelfth: 12,
    thirteenth: 13,
    fourteenth: 14,
    fifteenth: 15,
    sixteenth: 16,
    seventeenth: 17,
    eighteenth: 18,
    nineteenth: 19,
    twentieth: 20,
    "twenty first": 21,
    "twenty-first": 21,
    "twenty second": 22,
    "twenty-second": 22,
    "twenty third": 23,
    "twenty-third": 23,
    "twenty fourth": 24,
    "twenty-fourth": 24,
    "twenty fifth": 25,
    "twenty-fifth": 25,
    "twenty sixth": 26,
    "twenty-sixth": 26,
    "twenty seventh": 27,
    "twenty-seventh": 27,
    "twenty eighth": 28,
    "twenty-eighth": 28,
    "twenty ninth": 29,
    "twenty-ninth": 29,
    "thirtieth": 30,
    "thirty first": 31,
    "thirty-first": 31,
};
const TIME_UNIT_DICTIONARY_NO_ABBR = {
    second: "second",
    seconds: "second",
    minute: "minute",
    minutes: "minute",
    hour: "hour",
    hours: "hour",
    day: "d",
    days: "d",
    week: "week",
    weeks: "week",
    month: "month",
    months: "month",
    quarter: "quarter",
    quarters: "quarter",
    year: "year",
    years: "year",
};
const TIME_UNIT_DICTIONARY = {
    s: "second",
    sec: "second",
    second: "second",
    seconds: "second",
    m: "minute",
    min: "minute",
    mins: "minute",
    minute: "minute",
    minutes: "minute",
    h: "hour",
    hr: "hour",
    hrs: "hour",
    hour: "hour",
    hours: "hour",
    d: "d",
    day: "d",
    days: "d",
    w: "w",
    week: "week",
    weeks: "week",
    mo: "month",
    mon: "month",
    mos: "month",
    month: "month",
    months: "month",
    qtr: "quarter",
    quarter: "quarter",
    quarters: "quarter",
    y: "year",
    yr: "year",
    year: "year",
    years: "year",
    ...TIME_UNIT_DICTIONARY_NO_ABBR,
};
const NUMBER_PATTERN = `(?:${matchAnyPattern(INTEGER_WORD_DICTIONARY)}|[0-9]+|[0-9]+\\.[0-9]+|half(?:\\s{0,2}an?)?|an?\\b(?:\\s{0,2}few)?|few|several|the|a?\\s{0,2}couple\\s{0,2}(?:of)?)`;
function parseNumberPattern(match) {
    const num = match.toLowerCase();
    if (INTEGER_WORD_DICTIONARY[num] !== undefined) {
        return INTEGER_WORD_DICTIONARY[num];
    }
    else if (num === "a" || num === "an" || num == "the") {
        return 1;
    }
    else if (num.match(/few/)) {
        return 3;
    }
    else if (num.match(/half/)) {
        return 0.5;
    }
    else if (num.match(/couple/)) {
        return 2;
    }
    else if (num.match(/several/)) {
        return 7;
    }
    return parseFloat(num);
}
const ORDINAL_NUMBER_PATTERN = `(?:${matchAnyPattern(ORDINAL_WORD_DICTIONARY)}|[0-9]{1,2}(?:st|nd|rd|th)?)`;
function parseOrdinalNumberPattern(match) {
    let num = match.toLowerCase();
    if (ORDINAL_WORD_DICTIONARY[num] !== undefined) {
        return ORDINAL_WORD_DICTIONARY[num];
    }
    num = num.replace(/(?:st|nd|rd|th)$/i, "");
    return parseInt(num);
}
const YEAR_PATTERN = `(?:[1-9][0-9]{0,3}\\s{0,2}(?:BE|AD|BC|BCE|CE)|[1-2][0-9]{3}|[5-9][0-9]|2[0-5])`;
function parseYear(match) {
    if (/BE/i.test(match)) {
        match = match.replace(/BE/i, "");
        return parseInt(match) - 543;
    }
    if (/BCE?/i.test(match)) {
        match = match.replace(/BCE?/i, "");
        return -parseInt(match);
    }
    if (/(AD|CE)/i.test(match)) {
        match = match.replace(/(AD|CE)/i, "");
        return parseInt(match);
    }
    const rawYearNumber = parseInt(match);
    return findMostLikelyADYear(rawYearNumber);
}
const SINGLE_TIME_UNIT_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY)})`;
const SINGLE_TIME_UNIT_REGEX = new RegExp(SINGLE_TIME_UNIT_PATTERN, "i");
const SINGLE_TIME_UNIT_NO_ABBR_PATTERN = `(${NUMBER_PATTERN})\\s{0,3}(${matchAnyPattern(TIME_UNIT_DICTIONARY_NO_ABBR)})`;
const TIME_UNIT_CONNECTOR_PATTERN = `\\s{0,5},?(?:\\s*and)?\\s{0,5}`;
const TIME_UNITS_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
const TIME_UNITS_NO_ABBR_PATTERN = repeatedTimeunitPattern(`(?:(?:about|around)\\s{0,3})?`, SINGLE_TIME_UNIT_NO_ABBR_PATTERN, TIME_UNIT_CONNECTOR_PATTERN);
function parseTimeUnits(timeunitText) {
    const fragments = {};
    let remainingText = timeunitText;
    let match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    while (match) {
        collectDateTimeFragment(fragments, match);
        remainingText = remainingText.substring(match[0].length).trim();
        match = SINGLE_TIME_UNIT_REGEX.exec(remainingText);
    }
    if (Object.keys(fragments).length == 0) {
        return null;
    }
    return fragments;
}
function collectDateTimeFragment(fragments, match) {
    if (match[0].match(/^[a-zA-Z]+$/)) {
        return;
    }
    const num = parseNumberPattern(match[1]);
    const unit = TIME_UNIT_DICTIONARY[match[2].toLowerCase()];
    fragments[unit] = num;
}

class AbstractParserWithWordBoundaryChecking {
    constructor() {
        this.cachedInnerPattern = null;
        this.cachedPattern = null;
    }
    innerPatternHasChange(context, currentInnerPattern) {
        return this.innerPattern(context) !== currentInnerPattern;
    }
    patternLeftBoundary() {
        return `(\\W|^)`;
    }
    pattern(context) {
        if (this.cachedInnerPattern) {
            if (!this.innerPatternHasChange(context, this.cachedInnerPattern)) {
                return this.cachedPattern;
            }
        }
        this.cachedInnerPattern = this.innerPattern(context);
        this.cachedPattern = new RegExp(`${this.patternLeftBoundary()}${this.cachedInnerPattern.source}`, this.cachedInnerPattern.flags);
        return this.cachedPattern;
    }
    extract(context, match) {
        const header = match[1] ?? "";
        match.index = match.index + header.length;
        match[0] = match[0].substring(header.length);
        for (let i = 2; i < match.length; i++) {
            match[i - 1] = match[i];
        }
        return this.innerExtract(context, match);
    }
}

const PATTERN_WITH_OPTIONAL_PREFIX = new RegExp(`(?:(?:within|in|for)\\s*)?` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX = new RegExp(`(?:within|in|for)\\s*` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_WITH_PREFIX_STRICT = new RegExp(`(?:within|in|for)\\s*` +
    `(?:(?:about|around|roughly|approximately|just)\\s*(?:~\\s*)?)?(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitWithinFormatParser extends AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern(context) {
        if (this.strictMode) {
            return PATTERN_WITH_PREFIX_STRICT;
        }
        return context.option.forwardDate ? PATTERN_WITH_OPTIONAL_PREFIX : PATTERN_WITH_PREFIX;
    }
    innerExtract(context, match) {
        if (match[0].match(/^for\s*the\s*\w+/)) {
            return null;
        }
        const timeUnits = parseTimeUnits(match[1]);
        if (!timeUnits) {
            return null;
        }
        return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}

const PATTERN$d = new RegExp(`(?:on\\s{0,3})?` +
    `(${ORDINAL_NUMBER_PATTERN})` +
    `(?:` +
    `\\s{0,3}(?:to|\\-|\\–|until|through|till)?\\s{0,3}` +
    `(${ORDINAL_NUMBER_PATTERN})` +
    ")?" +
    `(?:-|/|\\s{0,3}(?:of)?\\s{0,3})` +
    `(${matchAnyPattern(MONTH_DICTIONARY)})` +
    "(?:" +
    `(?:-|/|,?\\s{0,3})` +
    `(${YEAR_PATTERN}(?!\\w))` +
    ")?" +
    "(?=\\W|$)", "i");
const DATE_GROUP$1 = 1;
const DATE_TO_GROUP$1 = 2;
const MONTH_NAME_GROUP$3 = 3;
const YEAR_GROUP$5 = 4;
class ENMonthNameLittleEndianParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN$d;
    }
    innerExtract(context, match) {
        const result = context.createParsingResult(match.index, match[0]);
        const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP$3].toLowerCase()];
        const day = parseOrdinalNumberPattern(match[DATE_GROUP$1]);
        if (day > 31) {
            match.index = match.index + match[DATE_GROUP$1].length;
            return null;
        }
        result.start.assign("month", month);
        result.start.assign("day", day);
        if (match[YEAR_GROUP$5]) {
            const yearNumber = parseYear(match[YEAR_GROUP$5]);
            result.start.assign("year", yearNumber);
        }
        else {
            const year = findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        if (match[DATE_TO_GROUP$1]) {
            const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP$1]);
            result.end = result.start.clone();
            result.end.assign("day", endDate);
        }
        return result;
    }
}

const PATTERN$c = new RegExp(`(${matchAnyPattern(MONTH_DICTIONARY)})` +
    "(?:-|/|\\s*,?\\s*)" +
    `(${ORDINAL_NUMBER_PATTERN})(?!\\s*(?:am|pm))\\s*` +
    "(?:" +
    "(?:to|\\-)\\s*" +
    `(${ORDINAL_NUMBER_PATTERN})\\s*` +
    ")?" +
    "(?:" +
    `(?:-|/|\\s*,\\s*|\\s+)` +
    `(${YEAR_PATTERN})` +
    ")?" +
    "(?=\\W|$)(?!\\:\\d)", "i");
const MONTH_NAME_GROUP$2 = 1;
const DATE_GROUP = 2;
const DATE_TO_GROUP = 3;
const YEAR_GROUP$4 = 4;
class ENMonthNameMiddleEndianParser extends AbstractParserWithWordBoundaryChecking {
    constructor(shouldSkipYearLikeDate) {
        super();
        this.shouldSkipYearLikeDate = shouldSkipYearLikeDate;
    }
    innerPattern() {
        return PATTERN$c;
    }
    innerExtract(context, match) {
        const month = MONTH_DICTIONARY[match[MONTH_NAME_GROUP$2].toLowerCase()];
        const day = parseOrdinalNumberPattern(match[DATE_GROUP]);
        if (day > 31) {
            return null;
        }
        if (this.shouldSkipYearLikeDate) {
            if (!match[DATE_TO_GROUP] && !match[YEAR_GROUP$4] && match[DATE_GROUP].match(/^2[0-5]$/)) {
                return null;
            }
        }
        const components = context
            .createParsingComponents({
            day: day,
            month: month,
        })
            .addTag("parser/ENMonthNameMiddleEndianParser");
        if (match[YEAR_GROUP$4]) {
            const year = parseYear(match[YEAR_GROUP$4]);
            components.assign("year", year);
        }
        else {
            const year = findYearClosestToRef(context.refDate, day, month);
            components.imply("year", year);
        }
        if (!match[DATE_TO_GROUP]) {
            return components;
        }
        const endDate = parseOrdinalNumberPattern(match[DATE_TO_GROUP]);
        const result = context.createParsingResult(match.index, match[0]);
        result.start = components;
        result.end = components.clone();
        result.end.assign("day", endDate);
        return result;
    }
}

const PATTERN$b = new RegExp(`((?:in)\\s*)?` +
    `(${matchAnyPattern(MONTH_DICTIONARY)})` +
    `\\s*` +
    `(?:` +
    `(?:,|-|of)?\\s*(${YEAR_PATTERN})?` +
    ")?" +
    "(?=[^\\s\\w]|\\s+[^0-9]|\\s+$|$)", "i");
const PREFIX_GROUP$1 = 1;
const MONTH_NAME_GROUP$1 = 2;
const YEAR_GROUP$3 = 3;
class ENMonthNameParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN$b;
    }
    innerExtract(context, match) {
        const monthName = match[MONTH_NAME_GROUP$1].toLowerCase();
        if (match[0].length <= 3 && !FULL_MONTH_NAME_DICTIONARY[monthName]) {
            return null;
        }
        const result = context.createParsingResult(match.index + (match[PREFIX_GROUP$1] || "").length, match.index + match[0].length);
        result.start.imply("day", 1);
        result.start.addTag("parser/ENMonthNameParser");
        const month = MONTH_DICTIONARY[monthName];
        result.start.assign("month", month);
        if (match[YEAR_GROUP$3]) {
            const year = parseYear(match[YEAR_GROUP$3]);
            result.start.assign("year", year);
        }
        else {
            const year = findYearClosestToRef(context.refDate, 1, month);
            result.start.imply("year", year);
        }
        return result;
    }
}

const PATTERN$a = new RegExp(`([0-9]{4})[-\\.\\/\\s]` +
    `(?:(${matchAnyPattern(MONTH_DICTIONARY)})|([0-9]{1,2}))[-\\.\\/\\s]` +
    `([0-9]{1,2})` +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP$1 = 1;
const MONTH_NAME_GROUP = 2;
const MONTH_NUMBER_GROUP$1 = 3;
const DATE_NUMBER_GROUP$1 = 4;
class ENYearMonthDayParser extends AbstractParserWithWordBoundaryChecking {
    constructor(strictMonthDateOrder) {
        super();
        this.strictMonthDateOrder = strictMonthDateOrder;
    }
    innerPattern() {
        return PATTERN$a;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_NUMBER_GROUP$1]);
        let day = parseInt(match[DATE_NUMBER_GROUP$1]);
        let month = match[MONTH_NUMBER_GROUP$1]
            ? parseInt(match[MONTH_NUMBER_GROUP$1])
            : MONTH_DICTIONARY[match[MONTH_NAME_GROUP].toLowerCase()];
        if (month < 1 || month > 12) {
            if (this.strictMonthDateOrder) {
                return null;
            }
            if (day >= 1 && day <= 12) {
                [month, day] = [day, month];
            }
        }
        if (day < 1 || day > 31) {
            return null;
        }
        return {
            day: day,
            month: month,
            year: year,
        };
    }
}

const PATTERN$9 = new RegExp("([0-9]|0[1-9]|1[012])/([0-9]{4})" + "", "i");
const MONTH_GROUP = 1;
const YEAR_GROUP$2 = 2;
class ENSlashMonthFormatParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN$9;
    }
    innerExtract(context, match) {
        const year = parseInt(match[YEAR_GROUP$2]);
        const month = parseInt(match[MONTH_GROUP]);
        return context.createParsingComponents().imply("day", 1).assign("month", month).assign("year", year);
    }
}

function primaryTimePattern(leftBoundary, primaryPrefix, primarySuffix, flags) {
    return new RegExp(`${leftBoundary}` +
        `${primaryPrefix}` +
        `(\\d{1,4})` +
        `(?:` +
        `(?:\\.|:|：)` +
        `(\\d{1,2})` +
        `(?:` +
        `(?::|：)` +
        `(\\d{2})` +
        `(?:\\.(\\d{1,6}))?` +
        `)?` +
        `)?` +
        `(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?` +
        `${primarySuffix}`, flags);
}
function followingTimePatten(followingPhase, followingSuffix) {
    return new RegExp(`^(${followingPhase})` +
        `(\\d{1,4})` +
        `(?:` +
        `(?:\\.|\\:|\\：)` +
        `(\\d{1,2})` +
        `(?:` +
        `(?:\\.|\\:|\\：)` +
        `(\\d{1,2})(?:\\.(\\d{1,6}))?` +
        `)?` +
        `)?` +
        `(?:\\s*(a\\.m\\.|p\\.m\\.|am?|pm?))?` +
        `${followingSuffix}`, "i");
}
const HOUR_GROUP = 2;
const MINUTE_GROUP = 3;
const SECOND_GROUP = 4;
const MILLI_SECOND_GROUP = 5;
const AM_PM_HOUR_GROUP = 6;
class AbstractTimeExpressionParser {
    constructor(strictMode = false) {
        this.cachedPrimaryPrefix = null;
        this.cachedPrimarySuffix = null;
        this.cachedPrimaryTimePattern = null;
        this.cachedFollowingPhase = null;
        this.cachedFollowingSuffix = null;
        this.cachedFollowingTimePatten = null;
        this.strictMode = strictMode;
    }
    patternFlags() {
        return "i";
    }
    primaryPatternLeftBoundary() {
        return `(^|\\s|T|\\b)`;
    }
    primarySuffix() {
        return `(?!/)(?=\\W|$)`;
    }
    followingSuffix() {
        return `(?!/)(?=\\W|$)`;
    }
    pattern(context) {
        return this.getPrimaryTimePatternThroughCache();
    }
    extract(context, match) {
        const startComponents = this.extractPrimaryTimeComponents(context, match);
        if (!startComponents) {
            if (match[0].match(/^\d{4}/)) {
                match.index += 4;
                return null;
            }
            match.index += match[0].length;
            return null;
        }
        const index = match.index + match[1].length;
        const text = match[0].substring(match[1].length);
        const result = context.createParsingResult(index, text, startComponents);
        match.index += match[0].length;
        const remainingText = context.text.substring(match.index);
        const followingPattern = this.getFollowingTimePatternThroughCache();
        const followingMatch = followingPattern.exec(remainingText);
        if (text.match(/^\d{3,4}/) && followingMatch) {
            if (followingMatch[0].match(/^\s*([+-])\s*\d{2,4}$/)) {
                return null;
            }
            if (followingMatch[0].match(/^\s*([+-])\s*\d{2}\W\d{2}/)) {
                return null;
            }
        }
        if (!followingMatch ||
            followingMatch[0].match(/^\s*([+-])\s*\d{3,4}$/)) {
            return this.checkAndReturnWithoutFollowingPattern(result);
        }
        result.end = this.extractFollowingTimeComponents(context, followingMatch, result);
        if (result.end) {
            result.text += followingMatch[0];
        }
        return this.checkAndReturnWithFollowingPattern(result);
    }
    extractPrimaryTimeComponents(context, match, strict = false) {
        const components = context.createParsingComponents();
        let minute = 0;
        let meridiem = null;
        let hour = parseInt(match[HOUR_GROUP]);
        if (hour > 100) {
            if (this.strictMode || match[MINUTE_GROUP] != null) {
                return null;
            }
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (hour > 24) {
            return null;
        }
        if (match[MINUTE_GROUP] != null) {
            if (match[MINUTE_GROUP].length == 1 && !match[AM_PM_HOUR_GROUP]) {
                return null;
            }
            minute = parseInt(match[MINUTE_GROUP]);
        }
        if (minute >= 60) {
            return null;
        }
        if (hour > 12) {
            meridiem = Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12)
                return null;
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                }
            }
            if (ampm == "p") {
                meridiem = Meridiem.PM;
                if (hour != 12) {
                    hour += 12;
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem !== null) {
            components.assign("meridiem", meridiem);
        }
        else {
            if (hour < 12) {
                components.imply("meridiem", Meridiem.AM);
            }
            else {
                components.imply("meridiem", Meridiem.PM);
            }
        }
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        return components;
    }
    extractFollowingTimeComponents(context, match, result) {
        const components = context.createParsingComponents();
        if (match[MILLI_SECOND_GROUP] != null) {
            const millisecond = parseInt(match[MILLI_SECOND_GROUP].substring(0, 3));
            if (millisecond >= 1000)
                return null;
            components.assign("millisecond", millisecond);
        }
        if (match[SECOND_GROUP] != null) {
            const second = parseInt(match[SECOND_GROUP]);
            if (second >= 60)
                return null;
            components.assign("second", second);
        }
        let hour = parseInt(match[HOUR_GROUP]);
        let minute = 0;
        let meridiem = -1;
        if (match[MINUTE_GROUP] != null) {
            minute = parseInt(match[MINUTE_GROUP]);
        }
        else if (hour > 100) {
            minute = hour % 100;
            hour = Math.floor(hour / 100);
        }
        if (minute >= 60 || hour > 24) {
            return null;
        }
        if (hour >= 12) {
            meridiem = Meridiem.PM;
        }
        if (match[AM_PM_HOUR_GROUP] != null) {
            if (hour > 12) {
                return null;
            }
            const ampm = match[AM_PM_HOUR_GROUP][0].toLowerCase();
            if (ampm == "a") {
                meridiem = Meridiem.AM;
                if (hour == 12) {
                    hour = 0;
                    if (!components.isCertain("day")) {
                        components.imply("day", components.get("day") + 1);
                    }
                }
            }
            if (ampm == "p") {
                meridiem = Meridiem.PM;
                if (hour != 12)
                    hour += 12;
            }
            if (!result.start.isCertain("meridiem")) {
                if (meridiem == Meridiem.AM) {
                    result.start.imply("meridiem", Meridiem.AM);
                    if (result.start.get("hour") == 12) {
                        result.start.assign("hour", 0);
                    }
                }
                else {
                    result.start.imply("meridiem", Meridiem.PM);
                    if (result.start.get("hour") != 12) {
                        result.start.assign("hour", result.start.get("hour") + 12);
                    }
                }
            }
        }
        components.assign("hour", hour);
        components.assign("minute", minute);
        if (meridiem >= 0) {
            components.assign("meridiem", meridiem);
        }
        else {
            const startAtPM = result.start.isCertain("meridiem") && result.start.get("hour") > 12;
            if (startAtPM) {
                if (result.start.get("hour") - 12 > hour) {
                    components.imply("meridiem", Meridiem.AM);
                }
                else if (hour <= 12) {
                    components.assign("hour", hour + 12);
                    components.assign("meridiem", Meridiem.PM);
                }
            }
            else if (hour > 12) {
                components.imply("meridiem", Meridiem.PM);
            }
            else if (hour <= 12) {
                components.imply("meridiem", Meridiem.AM);
            }
        }
        if (components.date().getTime() < result.start.date().getTime()) {
            components.imply("day", components.get("day") + 1);
        }
        return components;
    }
    checkAndReturnWithoutFollowingPattern(result) {
        if (result.text.match(/^\d$/)) {
            return null;
        }
        if (result.text.match(/^\d\d\d+$/)) {
            return null;
        }
        if (result.text.match(/\d[apAP]$/)) {
            return null;
        }
        const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)$/);
        if (endingWithNumbers) {
            const endingNumbers = endingWithNumbers[1];
            if (this.strictMode) {
                return null;
            }
            if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
                return null;
            }
            const endingNumberVal = parseInt(endingNumbers);
            if (endingNumberVal > 24) {
                return null;
            }
        }
        return result;
    }
    checkAndReturnWithFollowingPattern(result) {
        if (result.text.match(/^\d+-\d+$/)) {
            return null;
        }
        const endingWithNumbers = result.text.match(/[^\d:.](\d[\d.]+)\s*-\s*(\d[\d.]+)$/);
        if (endingWithNumbers) {
            if (this.strictMode) {
                return null;
            }
            const startingNumbers = endingWithNumbers[1];
            const endingNumbers = endingWithNumbers[2];
            if (endingNumbers.includes(".") && !endingNumbers.match(/\d(\.\d{2})+$/)) {
                return null;
            }
            const endingNumberVal = parseInt(endingNumbers);
            const startingNumberVal = parseInt(startingNumbers);
            if (endingNumberVal > 24 || startingNumberVal > 24) {
                return null;
            }
        }
        return result;
    }
    getPrimaryTimePatternThroughCache() {
        const primaryPrefix = this.primaryPrefix();
        const primarySuffix = this.primarySuffix();
        if (this.cachedPrimaryPrefix === primaryPrefix && this.cachedPrimarySuffix === primarySuffix) {
            return this.cachedPrimaryTimePattern;
        }
        this.cachedPrimaryTimePattern = primaryTimePattern(this.primaryPatternLeftBoundary(), primaryPrefix, primarySuffix, this.patternFlags());
        this.cachedPrimaryPrefix = primaryPrefix;
        this.cachedPrimarySuffix = primarySuffix;
        return this.cachedPrimaryTimePattern;
    }
    getFollowingTimePatternThroughCache() {
        const followingPhase = this.followingPhase();
        const followingSuffix = this.followingSuffix();
        if (this.cachedFollowingPhase === followingPhase && this.cachedFollowingSuffix === followingSuffix) {
            return this.cachedFollowingTimePatten;
        }
        this.cachedFollowingTimePatten = followingTimePatten(followingPhase, followingSuffix);
        this.cachedFollowingPhase = followingPhase;
        this.cachedFollowingSuffix = followingSuffix;
        return this.cachedFollowingTimePatten;
    }
}

class ENTimeExpressionParser extends AbstractTimeExpressionParser {
    constructor(strictMode) {
        super(strictMode);
    }
    followingPhase() {
        return "\\s*(?:\\-|\\–|\\~|\\〜|to|until|through|till|\\?)\\s*";
    }
    primaryPrefix() {
        return "(?:(?:at|from)\\s*)??";
    }
    primarySuffix() {
        return "(?:\\s*(?:o\\W*clock|at\\s*night|in\\s*the\\s*(?:morning|afternoon)))?(?!/)(?=\\W|$)";
    }
    extractPrimaryTimeComponents(context, match) {
        const components = super.extractPrimaryTimeComponents(context, match);
        if (!components) {
            return components;
        }
        if (match[0].endsWith("night")) {
            const hour = components.get("hour");
            if (hour >= 6 && hour < 12) {
                components.assign("hour", components.get("hour") + 12);
                components.assign("meridiem", Meridiem.PM);
            }
            else if (hour < 6) {
                components.assign("meridiem", Meridiem.AM);
            }
        }
        if (match[0].endsWith("afternoon")) {
            components.assign("meridiem", Meridiem.PM);
            const hour = components.get("hour");
            if (hour >= 0 && hour <= 6) {
                components.assign("hour", components.get("hour") + 12);
            }
        }
        if (match[0].endsWith("morning")) {
            components.assign("meridiem", Meridiem.AM);
            const hour = components.get("hour");
            if (hour < 12) {
                components.assign("hour", components.get("hour"));
            }
        }
        return components.addTag("parser/ENTimeExpressionParser");
    }
    extractFollowingTimeComponents(context, match, result) {
        const followingComponents = super.extractFollowingTimeComponents(context, match, result);
        if (followingComponents) {
            followingComponents.addTag("parser/ENTimeExpressionParser");
        }
        return followingComponents;
    }
}

function reverseTimeUnits(timeUnits) {
    const reversed = {};
    for (const key in timeUnits) {
        reversed[key] = -timeUnits[key];
    }
    return reversed;
}
function addImpliedTimeUnits(components, timeUnits) {
    const output = components.clone();
    let date = components.dayjs();
    for (const key in timeUnits) {
        date = date.add(timeUnits[key], key);
    }
    if ("day" in timeUnits || "d" in timeUnits || "week" in timeUnits || "month" in timeUnits || "year" in timeUnits) {
        output.imply("day", date.date());
        output.imply("month", date.month() + 1);
        output.imply("year", date.year());
    }
    if ("second" in timeUnits || "minute" in timeUnits || "hour" in timeUnits) {
        output.imply("second", date.second());
        output.imply("minute", date.minute());
        output.imply("hour", date.hour());
    }
    return output;
}

const PATTERN$8 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
const STRICT_PATTERN$1 = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(?:ago|before|earlier)(?=\\W|$)`, "i");
class ENTimeUnitAgoFormatParser extends AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN$1 : PATTERN$8;
    }
    innerExtract(context, match) {
        const timeUnits = parseTimeUnits(match[1]);
        if (!timeUnits) {
            return null;
        }
        const outputTimeUnits = reverseTimeUnits(timeUnits);
        return ParsingComponents.createRelativeFromReference(context.reference, outputTimeUnits);
    }
}

const PATTERN$7 = new RegExp(`(${TIME_UNITS_PATTERN})\\s{0,5}(?:later|after|from now|henceforth|forward|out)` + "(?=(?:\\W|$))", "i");
const STRICT_PATTERN = new RegExp(`(${TIME_UNITS_NO_ABBR_PATTERN})\\s{0,5}(later|after|from now)(?=\\W|$)`, "i");
const GROUP_NUM_TIMEUNITS = 1;
class ENTimeUnitLaterFormatParser extends AbstractParserWithWordBoundaryChecking {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    innerPattern() {
        return this.strictMode ? STRICT_PATTERN : PATTERN$7;
    }
    innerExtract(context, match) {
        const timeUnits = parseTimeUnits(match[GROUP_NUM_TIMEUNITS]);
        if (!timeUnits) {
            return null;
        }
        return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}

class Filter {
    refine(context, results) {
        return results.filter((r) => this.isValid(context, r));
    }
}
class MergingRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const mergedResults = [];
        let curResult = results[0];
        let nextResult = null;
        for (let i = 1; i < results.length; i++) {
            nextResult = results[i];
            const textBetween = context.text.substring(curResult.index + curResult.text.length, nextResult.index);
            if (!this.shouldMergeResults(textBetween, curResult, nextResult, context)) {
                mergedResults.push(curResult);
                curResult = nextResult;
            }
            else {
                const left = curResult;
                const right = nextResult;
                const mergedResult = this.mergeResults(textBetween, left, right, context);
                context.debug(() => {
                    console.log(`${this.constructor.name} merged ${left} and ${right} into ${mergedResult}`);
                });
                curResult = mergedResult;
            }
        }
        if (curResult != null) {
            mergedResults.push(curResult);
        }
        return mergedResults;
    }
}

class AbstractMergeDateRangeRefiner extends MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return !currentResult.end && !nextResult.end && textBetween.match(this.patternBetween()) != null;
    }
    mergeResults(textBetween, fromResult, toResult) {
        if (!fromResult.start.isOnlyWeekdayComponent() && !toResult.start.isOnlyWeekdayComponent()) {
            toResult.start.getCertainComponents().forEach((key) => {
                if (!fromResult.start.isCertain(key)) {
                    fromResult.start.imply(key, toResult.start.get(key));
                }
            });
            fromResult.start.getCertainComponents().forEach((key) => {
                if (!toResult.start.isCertain(key)) {
                    toResult.start.imply(key, fromResult.start.get(key));
                }
            });
        }
        if (fromResult.start.date().getTime() > toResult.start.date().getTime()) {
            let fromMoment = fromResult.start.dayjs();
            let toMoment = toResult.start.dayjs();
            if (toResult.start.isOnlyWeekdayComponent() && toMoment.add(7, "days").isAfter(fromMoment)) {
                toMoment = toMoment.add(7, "days");
                toResult.start.imply("day", toMoment.date());
                toResult.start.imply("month", toMoment.month() + 1);
                toResult.start.imply("year", toMoment.year());
            }
            else if (fromResult.start.isOnlyWeekdayComponent() && fromMoment.add(-7, "days").isBefore(toMoment)) {
                fromMoment = fromMoment.add(-7, "days");
                fromResult.start.imply("day", fromMoment.date());
                fromResult.start.imply("month", fromMoment.month() + 1);
                fromResult.start.imply("year", fromMoment.year());
            }
            else if (toResult.start.isDateWithUnknownYear() && toMoment.add(1, "years").isAfter(fromMoment)) {
                toMoment = toMoment.add(1, "years");
                toResult.start.imply("year", toMoment.year());
            }
            else if (fromResult.start.isDateWithUnknownYear() && fromMoment.add(-1, "years").isBefore(toMoment)) {
                fromMoment = fromMoment.add(-1, "years");
                fromResult.start.imply("year", fromMoment.year());
            }
            else {
                [toResult, fromResult] = [fromResult, toResult];
            }
        }
        const result = fromResult.clone();
        result.start = fromResult.start;
        result.end = toResult.start;
        result.index = Math.min(fromResult.index, toResult.index);
        if (fromResult.index < toResult.index) {
            result.text = fromResult.text + textBetween + toResult.text;
        }
        else {
            result.text = toResult.text + textBetween + fromResult.text;
        }
        return result;
    }
}

class ENMergeDateRangeRefiner extends AbstractMergeDateRangeRefiner {
    patternBetween() {
        return /^\s*(to|-|–|until|through|till)\s*$/i;
    }
}

function mergeDateTimeResult(dateResult, timeResult) {
    const result = dateResult.clone();
    const beginDate = dateResult.start;
    const beginTime = timeResult.start;
    result.start = mergeDateTimeComponent(beginDate, beginTime);
    if (dateResult.end != null || timeResult.end != null) {
        const endDate = dateResult.end == null ? dateResult.start : dateResult.end;
        const endTime = timeResult.end == null ? timeResult.start : timeResult.end;
        const endDateTime = mergeDateTimeComponent(endDate, endTime);
        if (dateResult.end == null && endDateTime.date().getTime() < result.start.date().getTime()) {
            const nextDayJs = endDateTime.dayjs().add(1, "day");
            if (endDateTime.isCertain("day")) {
                assignSimilarDate(endDateTime, nextDayJs);
            }
            else {
                implySimilarDate(endDateTime, nextDayJs);
            }
        }
        result.end = endDateTime;
    }
    return result;
}
function mergeDateTimeComponent(dateComponent, timeComponent) {
    const dateTimeComponent = dateComponent.clone();
    if (timeComponent.isCertain("hour")) {
        dateTimeComponent.assign("hour", timeComponent.get("hour"));
        dateTimeComponent.assign("minute", timeComponent.get("minute"));
        if (timeComponent.isCertain("second")) {
            dateTimeComponent.assign("second", timeComponent.get("second"));
            if (timeComponent.isCertain("millisecond")) {
                dateTimeComponent.assign("millisecond", timeComponent.get("millisecond"));
            }
            else {
                dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
            }
        }
        else {
            dateTimeComponent.imply("second", timeComponent.get("second"));
            dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
        }
    }
    else {
        dateTimeComponent.imply("hour", timeComponent.get("hour"));
        dateTimeComponent.imply("minute", timeComponent.get("minute"));
        dateTimeComponent.imply("second", timeComponent.get("second"));
        dateTimeComponent.imply("millisecond", timeComponent.get("millisecond"));
    }
    if (timeComponent.isCertain("timezoneOffset")) {
        dateTimeComponent.assign("timezoneOffset", timeComponent.get("timezoneOffset"));
    }
    if (timeComponent.isCertain("meridiem")) {
        dateTimeComponent.assign("meridiem", timeComponent.get("meridiem"));
    }
    else if (timeComponent.get("meridiem") != null && dateTimeComponent.get("meridiem") == null) {
        dateTimeComponent.imply("meridiem", timeComponent.get("meridiem"));
    }
    if (dateTimeComponent.get("meridiem") == Meridiem.PM && dateTimeComponent.get("hour") < 12) {
        if (timeComponent.isCertain("hour")) {
            dateTimeComponent.assign("hour", dateTimeComponent.get("hour") + 12);
        }
        else {
            dateTimeComponent.imply("hour", dateTimeComponent.get("hour") + 12);
        }
    }
    dateTimeComponent.addTags(dateComponent.tags());
    dateTimeComponent.addTags(timeComponent.tags());
    return dateTimeComponent;
}

class AbstractMergeDateTimeRefiner extends MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        return (((currentResult.start.isOnlyDate() && nextResult.start.isOnlyTime()) ||
            (nextResult.start.isOnlyDate() && currentResult.start.isOnlyTime())) &&
            textBetween.match(this.patternBetween()) != null);
    }
    mergeResults(textBetween, currentResult, nextResult) {
        const result = currentResult.start.isOnlyDate()
            ? mergeDateTimeResult(currentResult, nextResult)
            : mergeDateTimeResult(nextResult, currentResult);
        result.index = currentResult.index;
        result.text = currentResult.text + textBetween + nextResult.text;
        return result;
    }
}

class ENMergeDateTimeRefiner extends AbstractMergeDateTimeRefiner {
    patternBetween() {
        return new RegExp("^\\s*(T|at|after|before|on|of|,|-|\\.|∙|:)?\\s*$");
    }
}

const TIMEZONE_NAME_PATTERN = new RegExp("^\\s*,?\\s*\\(?([A-Z]{2,4})\\)?(?=\\W|$)", "i");
class ExtractTimezoneAbbrRefiner {
    constructor(timezoneOverrides) {
        this.timezoneOverrides = timezoneOverrides;
    }
    refine(context, results) {
        const timezoneOverrides = context.option.timezones ?? {};
        results.forEach((result) => {
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_NAME_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            const timezoneAbbr = match[1].toUpperCase();
            const refDate = result.start.date() ?? result.refDate ?? new Date();
            const tzOverrides = { ...this.timezoneOverrides, ...timezoneOverrides };
            const extractedTimezoneOffset = toTimezoneOffset(timezoneAbbr, refDate, tzOverrides);
            if (extractedTimezoneOffset == null) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${timezoneAbbr}' into: ${extractedTimezoneOffset} for: ${result.start}`);
            });
            const currentTimezoneOffset = result.start.get("timezoneOffset");
            if (currentTimezoneOffset !== null && extractedTimezoneOffset != currentTimezoneOffset) {
                if (result.start.isCertain("timezoneOffset")) {
                    return;
                }
                if (timezoneAbbr != match[1]) {
                    return;
                }
            }
            if (result.start.isOnlyDate()) {
                if (timezoneAbbr != match[1]) {
                    return;
                }
            }
            result.text += match[0];
            if (!result.start.isCertain("timezoneOffset")) {
                result.start.assign("timezoneOffset", extractedTimezoneOffset);
            }
            if (result.end != null && !result.end.isCertain("timezoneOffset")) {
                result.end.assign("timezoneOffset", extractedTimezoneOffset);
            }
        });
        return results;
    }
}

const TIMEZONE_OFFSET_PATTERN = new RegExp("^\\s*(?:\\(?(?:GMT|UTC)\\s?)?([+-])(\\d{1,2})(?::?(\\d{2}))?\\)?", "i");
const TIMEZONE_OFFSET_SIGN_GROUP = 1;
const TIMEZONE_OFFSET_HOUR_OFFSET_GROUP = 2;
const TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP = 3;
class ExtractTimezoneOffsetRefiner {
    refine(context, results) {
        results.forEach(function (result) {
            if (result.start.isCertain("timezoneOffset")) {
                return;
            }
            const suffix = context.text.substring(result.index + result.text.length);
            const match = TIMEZONE_OFFSET_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting timezone: '${match[0]}' into : ${result}`);
            });
            const hourOffset = parseInt(match[TIMEZONE_OFFSET_HOUR_OFFSET_GROUP]);
            const minuteOffset = parseInt(match[TIMEZONE_OFFSET_MINUTE_OFFSET_GROUP] || "0");
            let timezoneOffset = hourOffset * 60 + minuteOffset;
            if (timezoneOffset > 14 * 60) {
                return;
            }
            if (match[TIMEZONE_OFFSET_SIGN_GROUP] === "-") {
                timezoneOffset = -timezoneOffset;
            }
            if (result.end != null) {
                result.end.assign("timezoneOffset", timezoneOffset);
            }
            result.start.assign("timezoneOffset", timezoneOffset);
            result.text += match[0];
        });
        return results;
    }
}

class OverlapRemovalRefiner {
    refine(context, results) {
        if (results.length < 2) {
            return results;
        }
        const filteredResults = [];
        let prevResult = results[0];
        for (let i = 1; i < results.length; i++) {
            const result = results[i];
            if (result.index >= prevResult.index + prevResult.text.length) {
                filteredResults.push(prevResult);
                prevResult = result;
                continue;
            }
            let kept = null;
            let removed = null;
            if (result.text.length > prevResult.text.length) {
                kept = result;
                removed = prevResult;
            }
            else {
                kept = prevResult;
                removed = result;
            }
            context.debug(() => {
                console.log(`${this.constructor.name} remove ${removed} by ${kept}`);
            });
            prevResult = kept;
        }
        if (prevResult != null) {
            filteredResults.push(prevResult);
        }
        return filteredResults;
    }
}

class ForwardDateRefiner {
    refine(context, results) {
        if (!context.option.forwardDate) {
            return results;
        }
        results.forEach((result) => {
            let refMoment = dayjs(context.refDate);
            if (result.start.isOnlyTime() && refMoment.isAfter(result.start.dayjs())) {
                refMoment = refMoment.add(1, "day");
                implySimilarDate(result.start, refMoment);
                if (result.end && result.end.isOnlyTime()) {
                    implySimilarDate(result.end, refMoment);
                    if (result.start.dayjs().isAfter(result.end.dayjs())) {
                        refMoment = refMoment.add(1, "day");
                        implySimilarDate(result.end, refMoment);
                    }
                }
                context.debug(() => {
                    console.log(`${this.constructor.name} adjusted ${result} time result (${result.start})`);
                });
            }
            if (result.start.isOnlyWeekdayComponent() && refMoment.isAfter(result.start.dayjs())) {
                if (refMoment.day() >= result.start.get("weekday")) {
                    refMoment = refMoment.day(result.start.get("weekday") + 7);
                }
                else {
                    refMoment = refMoment.day(result.start.get("weekday"));
                }
                result.start.imply("day", refMoment.date());
                result.start.imply("month", refMoment.month() + 1);
                result.start.imply("year", refMoment.year());
                context.debug(() => {
                    console.log(`${this.constructor.name} adjusted ${result} weekday (${result.start})`);
                });
                if (result.end && result.end.isOnlyWeekdayComponent()) {
                    if (refMoment.day() > result.end.get("weekday")) {
                        refMoment = refMoment.day(result.end.get("weekday") + 7);
                    }
                    else {
                        refMoment = refMoment.day(result.end.get("weekday"));
                    }
                    result.end.imply("day", refMoment.date());
                    result.end.imply("month", refMoment.month() + 1);
                    result.end.imply("year", refMoment.year());
                    context.debug(() => {
                        console.log(`${this.constructor.name} adjusted ${result} weekday (${result.end})`);
                    });
                }
            }
            if (result.start.isDateWithUnknownYear() && refMoment.isAfter(result.start.dayjs())) {
                for (let i = 0; i < 3 && refMoment.isAfter(result.start.dayjs()); i++) {
                    result.start.imply("year", result.start.get("year") + 1);
                    context.debug(() => {
                        console.log(`${this.constructor.name} adjusted ${result} year (${result.start})`);
                    });
                    if (result.end && !result.end.isCertain("year")) {
                        result.end.imply("year", result.end.get("year") + 1);
                        context.debug(() => {
                            console.log(`${this.constructor.name} adjusted ${result} month (${result.start})`);
                        });
                    }
                }
            }
        });
        return results;
    }
}

class UnlikelyFormatFilter extends Filter {
    constructor(strictMode) {
        super();
        this.strictMode = strictMode;
    }
    isValid(context, result) {
        if (result.text.replace(" ", "").match(/^\d*(\.\d*)?$/)) {
            context.debug(() => {
                console.log(`Removing unlikely result '${result.text}'`);
            });
            return false;
        }
        if (!result.start.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.start})`);
            });
            return false;
        }
        if (result.end && !result.end.isValidDate()) {
            context.debug(() => {
                console.log(`Removing invalid result: ${result} (${result.end})`);
            });
            return false;
        }
        if (this.strictMode) {
            return this.isStrictModeValid(context, result);
        }
        return true;
    }
    isStrictModeValid(context, result) {
        if (result.start.isOnlyWeekdayComponent()) {
            context.debug(() => {
                console.log(`(Strict) Removing weekday only component: ${result} (${result.end})`);
            });
            return false;
        }
        if (result.start.isOnlyTime() && (!result.start.isCertain("hour") || !result.start.isCertain("minute"))) {
            context.debug(() => {
                console.log(`(Strict) Removing uncertain time component: ${result} (${result.end})`);
            });
            return false;
        }
        return true;
    }
}

const PATTERN$6 = new RegExp("([0-9]{4})\\-([0-9]{1,2})\\-([0-9]{1,2})" +
    "(?:T" +
    "([0-9]{1,2}):([0-9]{1,2})" +
    "(?:" +
    ":([0-9]{1,2})(?:\\.(\\d{1,4}))?" +
    ")?" +
    "(" +
    "Z|([+-]\\d{2}):?(\\d{2})?" +
    ")?" +
    ")?" +
    "(?=\\W|$)", "i");
const YEAR_NUMBER_GROUP = 1;
const MONTH_NUMBER_GROUP = 2;
const DATE_NUMBER_GROUP = 3;
const HOUR_NUMBER_GROUP = 4;
const MINUTE_NUMBER_GROUP = 5;
const SECOND_NUMBER_GROUP = 6;
const MILLISECOND_NUMBER_GROUP = 7;
const TZD_GROUP = 8;
const TZD_HOUR_OFFSET_GROUP = 9;
const TZD_MINUTE_OFFSET_GROUP = 10;
class ISOFormatParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN$6;
    }
    innerExtract(context, match) {
        const components = context.createParsingComponents({
            "year": parseInt(match[YEAR_NUMBER_GROUP]),
            "month": parseInt(match[MONTH_NUMBER_GROUP]),
            "day": parseInt(match[DATE_NUMBER_GROUP]),
        });
        if (match[HOUR_NUMBER_GROUP] != null) {
            components.assign("hour", parseInt(match[HOUR_NUMBER_GROUP]));
            components.assign("minute", parseInt(match[MINUTE_NUMBER_GROUP]));
            if (match[SECOND_NUMBER_GROUP] != null) {
                components.assign("second", parseInt(match[SECOND_NUMBER_GROUP]));
            }
            if (match[MILLISECOND_NUMBER_GROUP] != null) {
                components.assign("millisecond", parseInt(match[MILLISECOND_NUMBER_GROUP]));
            }
            if (match[TZD_GROUP] != null) {
                let offset = 0;
                if (match[TZD_HOUR_OFFSET_GROUP]) {
                    const hourOffset = parseInt(match[TZD_HOUR_OFFSET_GROUP]);
                    let minuteOffset = 0;
                    if (match[TZD_MINUTE_OFFSET_GROUP] != null) {
                        minuteOffset = parseInt(match[TZD_MINUTE_OFFSET_GROUP]);
                    }
                    offset = hourOffset * 60;
                    if (offset < 0) {
                        offset -= minuteOffset;
                    }
                    else {
                        offset += minuteOffset;
                    }
                }
                components.assign("timezoneOffset", offset);
            }
        }
        return components.addTag("parser/ISOFormatParser");
    }
}

class MergeWeekdayComponentRefiner extends MergingRefiner {
    mergeResults(textBetween, currentResult, nextResult) {
        const newResult = nextResult.clone();
        newResult.index = currentResult.index;
        newResult.text = currentResult.text + textBetween + newResult.text;
        newResult.start.assign("weekday", currentResult.start.get("weekday"));
        if (newResult.end) {
            newResult.end.assign("weekday", currentResult.start.get("weekday"));
        }
        return newResult;
    }
    shouldMergeResults(textBetween, currentResult, nextResult) {
        const weekdayThenNormalDate = currentResult.start.isOnlyWeekdayComponent() &&
            !currentResult.start.isCertain("hour") &&
            nextResult.start.isCertain("day");
        return weekdayThenNormalDate && textBetween.match(/^,?\s*$/) != null;
    }
}

function includeCommonConfiguration(configuration, strictMode = false) {
    configuration.parsers.unshift(new ISOFormatParser());
    configuration.refiners.unshift(new MergeWeekdayComponentRefiner());
    configuration.refiners.unshift(new ExtractTimezoneOffsetRefiner());
    configuration.refiners.unshift(new OverlapRemovalRefiner());
    configuration.refiners.push(new ExtractTimezoneAbbrRefiner());
    configuration.refiners.push(new OverlapRemovalRefiner());
    configuration.refiners.push(new ForwardDateRefiner());
    configuration.refiners.push(new UnlikelyFormatFilter(strictMode));
    return configuration;
}

function now(reference) {
    const targetDate = dayjs(reference.instant);
    const component = new ParsingComponents(reference, {});
    assignSimilarDate(component, targetDate);
    assignSimilarTime(component, targetDate);
    if (reference.timezoneOffset !== null) {
        component.assign("timezoneOffset", targetDate.utcOffset());
    }
    component.addTag("casualReference/now");
    return component;
}
function today(reference) {
    const targetDate = dayjs(reference.instant);
    const component = new ParsingComponents(reference, {});
    assignSimilarDate(component, targetDate);
    implySimilarTime(component, targetDate);
    component.addTag("casualReference/today");
    return component;
}
function yesterday(reference) {
    return theDayBefore(reference).addTag("casualReference/yesterday");
}
function theDayBefore(reference, numDay) {
    return theDayAfter(reference, -1);
}
function tomorrow(reference) {
    return theDayAfter(reference, 1).addTag("casualReference/tomorrow");
}
function theDayAfter(reference, nDays) {
    let targetDate = dayjs(reference.instant);
    const component = new ParsingComponents(reference, {});
    targetDate = targetDate.add(nDays, "day");
    assignSimilarDate(component, targetDate);
    implySimilarTime(component, targetDate);
    return component;
}
function tonight(reference, implyHour = 22) {
    const targetDate = dayjs(reference.instant);
    const component = new ParsingComponents(reference, {});
    assignSimilarDate(component, targetDate);
    component.imply("hour", implyHour);
    component.imply("meridiem", Meridiem.PM);
    component.addTag("casualReference/tonight");
    return component;
}
function evening(reference, implyHour = 20) {
    const component = new ParsingComponents(reference, {});
    component.imply("meridiem", Meridiem.PM);
    component.imply("hour", implyHour);
    component.addTag("casualReference/evening");
    return component;
}
function midnight(reference) {
    const component = new ParsingComponents(reference, {});
    const targetDate = dayjs(reference.instant);
    if (targetDate.hour() > 2) {
        implyTheNextDay(component, targetDate);
    }
    component.assign("hour", 0);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/midnight");
    return component;
}
function morning(reference, implyHour = 6) {
    const component = new ParsingComponents(reference, {});
    component.imply("meridiem", Meridiem.AM);
    component.imply("hour", implyHour);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/morning");
    return component;
}
function afternoon(reference, implyHour = 15) {
    const component = new ParsingComponents(reference, {});
    component.imply("meridiem", Meridiem.PM);
    component.imply("hour", implyHour);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/afternoon");
    return component;
}
function noon(reference) {
    const component = new ParsingComponents(reference, {});
    component.imply("meridiem", Meridiem.AM);
    component.imply("hour", 12);
    component.imply("minute", 0);
    component.imply("second", 0);
    component.imply("millisecond", 0);
    component.addTag("casualReference/noon");
    return component;
}

const PATTERN$5 = /(now|today|tonight|tomorrow|tmr|tmrw|yesterday|last\s*night)(?=\W|$)/i;
class ENCasualDateParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern(context) {
        return PATTERN$5;
    }
    innerExtract(context, match) {
        let targetDate = dayjs(context.refDate);
        const lowerText = match[0].toLowerCase();
        let component = context.createParsingComponents();
        switch (lowerText) {
            case "now":
                component = now(context.reference);
                break;
            case "today":
                component = today(context.reference);
                break;
            case "yesterday":
                component = yesterday(context.reference);
                break;
            case "tomorrow":
            case "tmr":
            case "tmrw":
                component = tomorrow(context.reference);
                break;
            case "tonight":
                component = tonight(context.reference);
                break;
            default:
                if (lowerText.match(/last\s*night/)) {
                    if (targetDate.hour() > 6) {
                        targetDate = targetDate.add(-1, "day");
                    }
                    assignSimilarDate(component, targetDate);
                    component.imply("hour", 0);
                }
                break;
        }
        component.addTag("parser/ENCasualDateParser");
        return component;
    }
}

const PATTERN$4 = /(?:this)?\s{0,3}(morning|afternoon|evening|night|midnight|midday|noon)(?=\W|$)/i;
class ENCasualTimeParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN$4;
    }
    innerExtract(context, match) {
        let component = null;
        switch (match[1].toLowerCase()) {
            case "afternoon":
                component = afternoon(context.reference);
                break;
            case "evening":
            case "night":
                component = evening(context.reference);
                break;
            case "midnight":
                component = midnight(context.reference);
                break;
            case "morning":
                component = morning(context.reference);
                break;
            case "noon":
            case "midday":
                component = noon(context.reference);
                break;
        }
        if (component) {
            component.addTag("parser/ENCasualTimeParser");
        }
        return component;
    }
}

function createParsingComponentsAtWeekday(reference, weekday, modifier) {
    const refDate = reference.getDateWithAdjustedTimezone();
    const daysToWeekday = getDaysToWeekday(refDate, weekday, modifier);
    let components = new ParsingComponents(reference);
    components = addImpliedTimeUnits(components, { "day": daysToWeekday });
    components.assign("weekday", weekday);
    return components;
}
function getDaysToWeekday(refDate, weekday, modifier) {
    const refWeekday = refDate.getDay();
    switch (modifier) {
        case "this":
            return getDaysForwardToWeekday(refDate, weekday);
        case "last":
            return getBackwardDaysToWeekday(refDate, weekday);
        case "next":
            if (refWeekday == Weekday.SUNDAY) {
                return weekday == Weekday.SUNDAY ? 7 : weekday;
            }
            if (refWeekday == Weekday.SATURDAY) {
                if (weekday == Weekday.SATURDAY)
                    return 7;
                if (weekday == Weekday.SUNDAY)
                    return 8;
                return 1 + weekday;
            }
            if (weekday < refWeekday && weekday != Weekday.SUNDAY) {
                return getDaysForwardToWeekday(refDate, weekday);
            }
            else {
                return getDaysForwardToWeekday(refDate, weekday) + 7;
            }
    }
    return getDaysToWeekdayClosest(refDate, weekday);
}
function getDaysToWeekdayClosest(refDate, weekday) {
    const backward = getBackwardDaysToWeekday(refDate, weekday);
    const forward = getDaysForwardToWeekday(refDate, weekday);
    return forward < -backward ? forward : backward;
}
function getDaysForwardToWeekday(refDate, weekday) {
    const refWeekday = refDate.getDay();
    let forwardCount = weekday - refWeekday;
    if (forwardCount < 0) {
        forwardCount += 7;
    }
    return forwardCount;
}
function getBackwardDaysToWeekday(refDate, weekday) {
    const refWeekday = refDate.getDay();
    let backwardCount = weekday - refWeekday;
    if (backwardCount >= 0) {
        backwardCount -= 7;
    }
    return backwardCount;
}

const PATTERN$3 = new RegExp("(?:(?:\\,|\\(|\\（)\\s*)?" +
    "(?:on\\s*?)?" +
    "(?:(this|last|past|next)\\s*)?" +
    `(${matchAnyPattern(WEEKDAY_DICTIONARY)}|weekend|weekday)` +
    "(?:\\s*(?:\\,|\\)|\\）))?" +
    "(?:\\s*(this|last|past|next)\\s*week)?" +
    "(?=\\W|$)", "i");
const PREFIX_GROUP = 1;
const WEEKDAY_GROUP = 2;
const POSTFIX_GROUP = 3;
class ENWeekdayParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN$3;
    }
    innerExtract(context, match) {
        const prefix = match[PREFIX_GROUP];
        const postfix = match[POSTFIX_GROUP];
        let modifierWord = prefix || postfix;
        modifierWord = modifierWord || "";
        modifierWord = modifierWord.toLowerCase();
        let modifier = null;
        if (modifierWord == "last" || modifierWord == "past") {
            modifier = "last";
        }
        else if (modifierWord == "next") {
            modifier = "next";
        }
        else if (modifierWord == "this") {
            modifier = "this";
        }
        const weekday_word = match[WEEKDAY_GROUP].toLowerCase();
        let weekday;
        if (WEEKDAY_DICTIONARY[weekday_word] !== undefined) {
            weekday = WEEKDAY_DICTIONARY[weekday_word];
        }
        else if (weekday_word == "weekend") {
            weekday = modifier == "last" ? Weekday.SUNDAY : Weekday.SATURDAY;
        }
        else if (weekday_word == "weekday") {
            const refWeekday = context.reference.getDateWithAdjustedTimezone().getDay();
            if (refWeekday == Weekday.SUNDAY || refWeekday == Weekday.SATURDAY) {
                weekday = modifier == "last" ? Weekday.FRIDAY : Weekday.MONDAY;
            }
            else {
                weekday = refWeekday - 1;
                weekday = modifier == "last" ? weekday - 1 : weekday + 1;
                weekday = (weekday % 5) + 1;
            }
        }
        else {
            return null;
        }
        return createParsingComponentsAtWeekday(context.reference, weekday, modifier);
    }
}

const PATTERN$2 = new RegExp(`(this|last|past|next|after\\s*this)\\s*(${matchAnyPattern(TIME_UNIT_DICTIONARY)})(?=\\s*)` + "(?=\\W|$)", "i");
const MODIFIER_WORD_GROUP = 1;
const RELATIVE_WORD_GROUP = 2;
class ENRelativeDateFormatParser extends AbstractParserWithWordBoundaryChecking {
    innerPattern() {
        return PATTERN$2;
    }
    innerExtract(context, match) {
        const modifier = match[MODIFIER_WORD_GROUP].toLowerCase();
        const unitWord = match[RELATIVE_WORD_GROUP].toLowerCase();
        const timeunit = TIME_UNIT_DICTIONARY[unitWord];
        if (modifier == "next" || modifier.startsWith("after")) {
            const timeUnits = {};
            timeUnits[timeunit] = 1;
            return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        if (modifier == "last" || modifier == "past") {
            const timeUnits = {};
            timeUnits[timeunit] = -1;
            return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
        }
        const components = context.createParsingComponents();
        let date = dayjs(context.reference.instant);
        if (unitWord.match(/week/i)) {
            date = date.add(-date.get("d"), "d");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.imply("year", date.year());
        }
        else if (unitWord.match(/month/i)) {
            date = date.add(-date.date() + 1, "d");
            components.imply("day", date.date());
            components.assign("year", date.year());
            components.assign("month", date.month() + 1);
        }
        else if (unitWord.match(/year/i)) {
            date = date.add(-date.date() + 1, "d");
            date = date.add(-date.month(), "month");
            components.imply("day", date.date());
            components.imply("month", date.month() + 1);
            components.assign("year", date.year());
        }
        return components;
    }
}

const PATTERN$1 = new RegExp("([^\\d]|^)" +
    "([0-3]{0,1}[0-9]{1})[\\/\\.\\-]([0-3]{0,1}[0-9]{1})" +
    "(?:[\\/\\.\\-]([0-9]{4}|[0-9]{2}))?" +
    "(\\W|$)", "i");
const OPENING_GROUP = 1;
const ENDING_GROUP = 5;
const FIRST_NUMBERS_GROUP = 2;
const SECOND_NUMBERS_GROUP = 3;
const YEAR_GROUP$1 = 4;
class SlashDateFormatParser {
    constructor(littleEndian) {
        this.groupNumberMonth = littleEndian ? SECOND_NUMBERS_GROUP : FIRST_NUMBERS_GROUP;
        this.groupNumberDay = littleEndian ? FIRST_NUMBERS_GROUP : SECOND_NUMBERS_GROUP;
    }
    pattern() {
        return PATTERN$1;
    }
    extract(context, match) {
        const index = match.index + match[OPENING_GROUP].length;
        const indexEnd = match.index + match[0].length - match[ENDING_GROUP].length;
        if (index > 0) {
            const textBefore = context.text.substring(0, index);
            if (textBefore.match("\\d/?$")) {
                return;
            }
        }
        if (indexEnd < context.text.length) {
            const textAfter = context.text.substring(indexEnd);
            if (textAfter.match("^/?\\d")) {
                return;
            }
        }
        const text = context.text.substring(index, indexEnd);
        if (text.match(/^\d\.\d$/) || text.match(/^\d\.\d{1,2}\.\d{1,2}\s*$/)) {
            return;
        }
        if (!match[YEAR_GROUP$1] && text.indexOf("/") < 0) {
            return;
        }
        const result = context.createParsingResult(index, text);
        let month = parseInt(match[this.groupNumberMonth]);
        let day = parseInt(match[this.groupNumberDay]);
        if (month < 1 || month > 12) {
            if (month > 12) {
                if (day >= 1 && day <= 12 && month <= 31) {
                    [day, month] = [month, day];
                }
                else {
                    return null;
                }
            }
        }
        if (day < 1 || day > 31) {
            return null;
        }
        result.start.assign("day", day);
        result.start.assign("month", month);
        if (match[YEAR_GROUP$1]) {
            const rawYearNumber = parseInt(match[YEAR_GROUP$1]);
            const year = findMostLikelyADYear(rawYearNumber);
            result.start.assign("year", year);
        }
        else {
            const year = findYearClosestToRef(context.refDate, day, month);
            result.start.imply("year", year);
        }
        return result.addTag("parser/SlashDateFormatParser");
    }
}

const PATTERN = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_PATTERN})(?=\\W|$)`, "i");
const PATTERN_NO_ABBR = new RegExp(`(this|last|past|next|after|\\+|-)\\s*(${TIME_UNITS_NO_ABBR_PATTERN})(?=\\W|$)`, "i");
class ENTimeUnitCasualRelativeFormatParser extends AbstractParserWithWordBoundaryChecking {
    constructor(allowAbbreviations = true) {
        super();
        this.allowAbbreviations = allowAbbreviations;
    }
    innerPattern() {
        return this.allowAbbreviations ? PATTERN : PATTERN_NO_ABBR;
    }
    innerExtract(context, match) {
        const prefix = match[1].toLowerCase();
        let timeUnits = parseTimeUnits(match[2]);
        if (!timeUnits) {
            return null;
        }
        switch (prefix) {
            case "last":
            case "past":
            case "-":
                timeUnits = reverseTimeUnits(timeUnits);
                break;
        }
        return ParsingComponents.createRelativeFromReference(context.reference, timeUnits);
    }
}

function IsPositiveFollowingReference(result) {
    return result.text.match(/^[+-]/i) != null;
}
function IsNegativeFollowingReference(result) {
    return result.text.match(/^-/i) != null;
}
class ENMergeRelativeAfterDateRefiner extends MergingRefiner {
    shouldMergeResults(textBetween, currentResult, nextResult) {
        if (!textBetween.match(/^\s*$/i)) {
            return false;
        }
        return IsPositiveFollowingReference(nextResult) || IsNegativeFollowingReference(nextResult);
    }
    mergeResults(textBetween, currentResult, nextResult, context) {
        let timeUnits = parseTimeUnits(nextResult.text);
        if (IsNegativeFollowingReference(nextResult)) {
            timeUnits = reverseTimeUnits(timeUnits);
        }
        const components = ParsingComponents.createRelativeFromReference(new ReferenceWithTimezone(currentResult.start.date()), timeUnits);
        return new ParsingResult(currentResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
    }
}

function hasImpliedEarlierReferenceDate(result) {
    return result.text.match(/\s+(before|from)$/i) != null;
}
function hasImpliedLaterReferenceDate(result) {
    return result.text.match(/\s+(after|since)$/i) != null;
}
class ENMergeRelativeFollowByDateRefiner extends MergingRefiner {
    patternBetween() {
        return /^\s*$/i;
    }
    shouldMergeResults(textBetween, currentResult, nextResult) {
        if (!textBetween.match(this.patternBetween())) {
            return false;
        }
        if (!hasImpliedEarlierReferenceDate(currentResult) && !hasImpliedLaterReferenceDate(currentResult)) {
            return false;
        }
        return !!nextResult.start.get("day") && !!nextResult.start.get("month") && !!nextResult.start.get("year");
    }
    mergeResults(textBetween, currentResult, nextResult) {
        let timeUnits = parseTimeUnits(currentResult.text);
        if (hasImpliedEarlierReferenceDate(currentResult)) {
            timeUnits = reverseTimeUnits(timeUnits);
        }
        const components = ParsingComponents.createRelativeFromReference(new ReferenceWithTimezone(nextResult.start.date()), timeUnits);
        return new ParsingResult(nextResult.reference, currentResult.index, `${currentResult.text}${textBetween}${nextResult.text}`, components);
    }
}

const YEAR_SUFFIX_PATTERN = new RegExp(`^\\s*(${YEAR_PATTERN})`, "i");
const YEAR_GROUP = 1;
class ENExtractYearSuffixRefiner {
    refine(context, results) {
        results.forEach(function (result) {
            if (!result.start.isDateWithUnknownYear()) {
                return;
            }
            const suffix = context.text.substring(result.index + result.text.length);
            const match = YEAR_SUFFIX_PATTERN.exec(suffix);
            if (!match) {
                return;
            }
            context.debug(() => {
                console.log(`Extracting year: '${match[0]}' into : ${result}`);
            });
            const year = parseYear(match[YEAR_GROUP]);
            if (result.end != null) {
                result.end.assign("year", year);
            }
            result.start.assign("year", year);
            result.text += match[0];
        });
        return results;
    }
}

class ENUnlikelyFormatFilter extends Filter {
    constructor() {
        super();
    }
    isValid(context, result) {
        const text = result.text.trim();
        if (text === context.text.trim()) {
            return true;
        }
        if (text.toLowerCase() === "may") {
            const textBefore = context.text.substring(0, result.index).trim();
            if (!textBefore.match(/\b(in)$/i)) {
                context.debug(() => {
                    console.log(`Removing unlikely result: ${result}`);
                });
                return false;
            }
        }
        if (text.toLowerCase().endsWith("the second")) {
            const textAfter = context.text.substring(result.index + result.text.length).trim();
            if (textAfter.length > 0) {
                context.debug(() => {
                    console.log(`Removing unlikely result: ${result}`);
                });
            }
            return false;
        }
        return true;
    }
}

class ENDefaultConfiguration {
    createCasualConfiguration(littleEndian = false) {
        const option = this.createConfiguration(false, littleEndian);
        option.parsers.push(new ENCasualDateParser());
        option.parsers.push(new ENCasualTimeParser());
        option.parsers.push(new ENMonthNameParser());
        option.parsers.push(new ENRelativeDateFormatParser());
        option.parsers.push(new ENTimeUnitCasualRelativeFormatParser());
        option.refiners.push(new ENUnlikelyFormatFilter());
        return option;
    }
    createConfiguration(strictMode = true, littleEndian = false) {
        const options = includeCommonConfiguration({
            parsers: [
                new SlashDateFormatParser(littleEndian),
                new ENTimeUnitWithinFormatParser(strictMode),
                new ENMonthNameLittleEndianParser(),
                new ENMonthNameMiddleEndianParser(littleEndian),
                new ENWeekdayParser(),
                new ENSlashMonthFormatParser(),
                new ENTimeExpressionParser(strictMode),
                new ENTimeUnitAgoFormatParser(strictMode),
                new ENTimeUnitLaterFormatParser(strictMode),
            ],
            refiners: [new ENMergeDateTimeRefiner()],
        }, strictMode);
        options.parsers.unshift(new ENYearMonthDayParser(strictMode));
        options.refiners.unshift(new ENMergeRelativeFollowByDateRefiner());
        options.refiners.unshift(new ENMergeRelativeAfterDateRefiner());
        options.refiners.unshift(new OverlapRemovalRefiner());
        options.refiners.push(new ENMergeDateTimeRefiner());
        options.refiners.push(new ENExtractYearSuffixRefiner());
        options.refiners.push(new ENMergeDateRangeRefiner());
        return options;
    }
}

class Chrono {
    constructor(configuration) {
        this.defaultConfig = new ENDefaultConfiguration();
        configuration = configuration || this.defaultConfig.createCasualConfiguration();
        this.parsers = [...configuration.parsers];
        this.refiners = [...configuration.refiners];
    }
    clone() {
        return new Chrono({
            parsers: [...this.parsers],
            refiners: [...this.refiners],
        });
    }
    parseDate(text, referenceDate, option) {
        const results = this.parse(text, referenceDate, option);
        return results.length > 0 ? results[0].start.date() : null;
    }
    parse(text, referenceDate, option) {
        const context = new ParsingContext(text, referenceDate, option);
        let results = [];
        this.parsers.forEach((parser) => {
            const parsedResults = Chrono.executeParser(context, parser);
            results = results.concat(parsedResults);
        });
        results.sort((a, b) => {
            return a.index - b.index;
        });
        this.refiners.forEach(function (refiner) {
            results = refiner.refine(context, results);
        });
        return results;
    }
    static executeParser(context, parser) {
        const results = [];
        const pattern = parser.pattern(context);
        const originalText = context.text;
        let remainingText = context.text;
        let match = pattern.exec(remainingText);
        while (match) {
            const index = match.index + originalText.length - remainingText.length;
            match.index = index;
            const result = parser.extract(context, match);
            if (!result) {
                remainingText = originalText.substring(match.index + 1);
                match = pattern.exec(remainingText);
                continue;
            }
            let parsedResult = null;
            if (result instanceof ParsingResult) {
                parsedResult = result;
            }
            else if (result instanceof ParsingComponents) {
                parsedResult = context.createParsingResult(match.index, match[0]);
                parsedResult.start = result;
            }
            else {
                parsedResult = context.createParsingResult(match.index, match[0], result);
            }
            const parsedIndex = parsedResult.index;
            const parsedText = parsedResult.text;
            context.debug(() => console.log(`${parser.constructor.name} extracted (at index=${parsedIndex}) '${parsedText}'`));
            results.push(parsedResult);
            remainingText = originalText.substring(parsedIndex + parsedText.length);
            match = pattern.exec(remainingText);
        }
        return results;
    }
}
class ParsingContext {
    constructor(text, refDate, option) {
        this.text = text;
        this.reference = new ReferenceWithTimezone(refDate);
        this.option = option ?? {};
        this.refDate = this.reference.instant;
    }
    createParsingComponents(components) {
        if (components instanceof ParsingComponents) {
            return components;
        }
        return new ParsingComponents(this.reference, components);
    }
    createParsingResult(index, textOrEndIndex, startComponents, endComponents) {
        const text = typeof textOrEndIndex === "string" ? textOrEndIndex : this.text.substring(index, textOrEndIndex);
        const start = startComponents ? this.createParsingComponents(startComponents) : null;
        const end = endComponents ? this.createParsingComponents(endComponents) : null;
        return new ParsingResult(this.reference, index, text, start, end);
    }
    debug(block) {
        if (this.option.debug) {
            if (this.option.debug instanceof Function) {
                this.option.debug(block);
            }
            else {
                const handler = this.option.debug;
                handler.debug(block);
            }
        }
    }
}

const configuration = new ENDefaultConfiguration();
const casual$1 = new Chrono(configuration.createCasualConfiguration(false));
new Chrono(configuration.createConfiguration(true, false));
new Chrono(configuration.createCasualConfiguration(true));

const casual = casual$1;
function parse(text, ref, option) {
    return casual.parse(text, ref, option);
}

var utc$2 = {exports: {}};

var utc = utc$2.exports;

(function (module, exports) {
	!function(t,i){module.exports=i();}(utc,(function(){var t="minute",i=/[+-]\d\d(?::?\d\d)?/g,e=/([+-]|\d\d)/g;return function(s,f,n){var u=f.prototype;n.utc=function(t){var i={date:t,utc:true,args:arguments};return new f(i)},u.utc=function(i){var e=n(this.toDate(),{locale:this.$L,utc:true});return i?e.add(this.utcOffset(),t):e},u.local=function(){return n(this.toDate(),{locale:this.$L,utc:false})};var o=u.parse;u.parse=function(t){t.utc&&(this.$u=true),this.$utils().u(t.$offset)||(this.$offset=t.$offset),o.call(this,t);};var r=u.init;u.init=function(){if(this.$u){var t=this.$d;this.$y=t.getUTCFullYear(),this.$M=t.getUTCMonth(),this.$D=t.getUTCDate(),this.$W=t.getUTCDay(),this.$H=t.getUTCHours(),this.$m=t.getUTCMinutes(),this.$s=t.getUTCSeconds(),this.$ms=t.getUTCMilliseconds();}else r.call(this);};var a=u.utcOffset;u.utcOffset=function(s,f){var n=this.$utils().u;if(n(s))return this.$u?0:n(this.$offset)?a.call(this):this.$offset;if("string"==typeof s&&(s=function(t){ void 0===t&&(t="");var s=t.match(i);if(!s)return null;var f=(""+s[0]).match(e)||["-",0,0],n=f[0],u=60*+f[1]+ +f[2];return 0===u?0:"+"===n?u:-u}(s),null===s))return this;var u=Math.abs(s)<=16?60*s:s,o=this;if(f)return o.$offset=u,o.$u=0===s,o;if(0!==s){var r=this.$u?this.toDate().getTimezoneOffset():-1*this.utcOffset();(o=this.local().add(u+r,t)).$offset=u,o.$x.$localOffset=r;}else o=this.utc();return o};var h=u.format;u.format=function(t){var i=t||(this.$u?"YYYY-MM-DDTHH:mm:ss[Z]":"");return h.call(this,i)},u.valueOf=function(){var t=this.$utils().u(this.$offset)?0:this.$offset+(this.$x.$localOffset||this.$d.getTimezoneOffset());return this.$d.valueOf()-6e4*t},u.isUTC=function(){return !!this.$u},u.toISOString=function(){return this.toDate().toISOString()},u.toString=function(){return this.toDate().toUTCString()};var l=u.toDate;u.toDate=function(t){return "s"===t&&this.$offset?n(this.format("YYYY-MM-DD HH:mm:ss:SSS")).toDate():l.call(this)};var c=u.diff;u.diff=function(t,i,e){if(t&&this.$u===t.$u)return c.call(this,t,i,e);var s=this.local(),f=n(t).local();return c.call(s,f,i,e)};}})); 
} (utc$2));

var utcExports = utc$2.exports;
var utc$1 = /*@__PURE__*/getDefaultExportFromCjs(utcExports);

var timezone$2 = {exports: {}};

var timezone = timezone$2.exports;

(function (module, exports) {
	!function(t,e){module.exports=e();}(timezone,(function(){var t={year:0,month:1,day:2,hour:3,minute:4,second:5},e={};return function(n,i,o){var r,a=function(t,n,i){ void 0===i&&(i={});var o=new Date(t),r=function(t,n){ void 0===n&&(n={});var i=n.timeZoneName||"short",o=t+"|"+i,r=e[o];return r||(r=new Intl.DateTimeFormat("en-US",{hour12:false,timeZone:t,year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",second:"2-digit",timeZoneName:i}),e[o]=r),r}(n,i);return r.formatToParts(o)},u=function(e,n){for(var i=a(e,n),r=[],u=0;u<i.length;u+=1){var f=i[u],s=f.type,m=f.value,c=t[s];c>=0&&(r[c]=parseInt(m,10));}var d=r[3],l=24===d?0:d,h=r[0]+"-"+r[1]+"-"+r[2]+" "+l+":"+r[4]+":"+r[5]+":000",v=+e;return (o.utc(h).valueOf()-(v-=v%1e3))/6e4},f=i.prototype;f.tz=function(t,e){ void 0===t&&(t=r);var n,i=this.utcOffset(),a=this.toDate(),u=a.toLocaleString("en-US",{timeZone:t}),f=Math.round((a-new Date(u))/1e3/60),s=15*-Math.round(a.getTimezoneOffset()/15)-f;if(!Number(s))n=this.utcOffset(0,e);else if(n=o(u,{locale:this.$L}).$set("millisecond",this.$ms).utcOffset(s,true),e){var m=n.utcOffset();n=n.add(i-m,"minute");}return n.$x.$timezone=t,n},f.offsetName=function(t){var e=this.$x.$timezone||o.tz.guess(),n=a(this.valueOf(),e,{timeZoneName:t}).find((function(t){return "timezonename"===t.type.toLowerCase()}));return n&&n.value};var s=f.startOf;f.startOf=function(t,e){if(!this.$x||!this.$x.$timezone)return s.call(this,t,e);var n=o(this.format("YYYY-MM-DD HH:mm:ss:SSS"),{locale:this.$L});return s.call(n,t,e).tz(this.$x.$timezone,true)},o.tz=function(t,e,n){var i=n&&e,a=n||e||r,f=u(+o(),a);if("string"!=typeof t)return o(t).tz(a);var s=function(t,e,n){var i=t-60*e*1e3,o=u(i,n);if(e===o)return [i,e];var r=u(i-=60*(o-e)*1e3,n);return o===r?[i,o]:[t-60*Math.min(o,r)*1e3,Math.max(o,r)]}(o.utc(t,i).valueOf(),f,a),m=s[0],c=s[1],d=o(m).utcOffset(c);return d.$x.$timezone=a,d},o.tz.guess=function(){return Intl.DateTimeFormat().resolvedOptions().timeZone},o.tz.setDefault=function(t){r=t;};}})); 
} (timezone$2));

var timezoneExports = timezone$2.exports;
var timezone$1 = /*@__PURE__*/getDefaultExportFromCjs(timezoneExports);

// Fallback locale.
// (when not a single one of the supplied "preferred" locales is available)
var defaultLocale$1 = 'en'; // For all locales added
// their relative time formatter messages will be stored here.

var localesData$1 = {}; // According to the spec BCP 47 language tags are case-insensitive.
// https://tools.ietf.org/html/rfc5646

var lowercaseLocaleLookup = {};
function getDefaultLocale() {
  return defaultLocale$1;
}
function setDefaultLocale(locale) {
  defaultLocale$1 = locale;
}
/**
 * Gets locale data previously added by `addLocaleData()`.
 * @return  {object} [localeData]
 */

function getLocaleData$1(locale) {
  return localesData$1[locale];
}
/**
 * Adds locale data.
 * Is called by `RelativeTimeFormat.addLocale(...)`.
 * @param  {object} localeData
 */

function addLocaleData$1(localeData) {
  if (!localeData) {
    throw new Error('No locale data passed');
  } // This locale data is stored in a global variable
  // and later used when calling `.format(time)`.


  localesData$1[localeData.locale] = localeData;
  lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
}
/**
 * Returns a locale for which locale data has been added
 * via `RelativeTimeFormat.addLocale(...)`.
 * @param  {string} locale
 * @return {string} [locale]
 */

function resolveLocale$1(locale) {
  if (localesData$1[locale]) {
    return locale;
  }

  if (lowercaseLocaleLookup[locale.toLowerCase()]) {
    return lowercaseLocaleLookup[locale.toLowerCase()];
  }
}

/**
 * Resolves a locale to a supported one (if any).
 * @param  {string} locale
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocale("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocale("xx-Latn")
 */

function resolveLocale(locale) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var localeMatcher = options.localeMatcher || 'lookup';

  switch (localeMatcher) {
    case 'lookup':
      return resolveLocaleLookup(locale);
    // "best fit" locale matching is not supported.
    // https://github.com/catamphetamine/relative-time-format/issues/2

    case 'best fit':
      // return resolveLocaleBestFit(locale)
      return resolveLocaleLookup(locale);

    default:
      throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
  }
}
/**
 * Resolves a locale to a supported one (if any).
 * Starts from the most specific locale and gradually
 * falls back to less specific ones.
 * This is a basic implementation of the "lookup" algorithm.
 * https://tools.ietf.org/html/rfc4647#section-3.4
 * @param  {string} locale
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocaleLookup("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocaleLookup("xx-Latn")
 */

function resolveLocaleLookup(locale) {
  var resolvedLocale = resolveLocale$1(locale);

  if (resolvedLocale) {
    return resolvedLocale;
  } // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.


  var parts = locale.split('-');

  while (locale.length > 1) {
    parts.pop();
    locale = parts.join('-');

    var _resolvedLocale = resolveLocale$1(locale);

    if (_resolvedLocale) {
      return _resolvedLocale;
    }
  }
}

// (this file was autogenerated by `generate-locales`)
// "plural rules" functions are not stored in locale JSON files because they're not strings.
// This file isn't big — it's about 5 kilobytes in size (minified).
// Alternatively, the pluralization rules for each locale could be stored
// in their JSON files in a non-parsed form and later parsed via `make-plural` library.
// But `make-plural` library itself is relatively big in size:
// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).
// So, it's more practical to bypass runtime `make-plural` pluralization rules compilation
// and just include the already compiled pluarlization rules for all locales in the library code.
var $ = {
  af: function af(n) {
    return n == 1 ? 'one' : 'other';
  },
  am: function am(n) {
    return n >= 0 && n <= 1 ? 'one' : 'other';
  },
  ar: function ar(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
  },
  ast: function ast(n) {
    var s = String(n).split('.'),
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : 'other';
  },
  be: function be(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
  },
  br: function br(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        n1000000 = t0 && s[0].slice(-6);
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
  },
  bs: function bs(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  },
  ca: function ca(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n == 1 && v0 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ceb: function ceb(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  },
  cs: function cs(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
  },
  cy: function cy(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
  },
  da: function da(n) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n;
    return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
  },
  dsb: function dsb(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
  },
  dz: function dz(n) {
    return 'other';
  },
  es: function es(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ff: function ff(n) {
    return n >= 0 && n < 2 ? 'one' : 'other';
  },
  fr: function fr(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n >= 0 && n < 2 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ga: function ga(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
  },
  gd: function gd(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
  },
  he: function he(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    return i == 1 && v0 || i == 0 && !v0 ? 'one' : i == 2 && v0 ? 'two' : 'other';
  },
  is: function is(n) {
    var s = String(n).split('.'),
        i = s[0],
        t = (s[1] || '').replace(/0+$/, ''),
        t0 = Number(s[0]) == n,
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return t0 && i10 == 1 && i100 != 11 || t % 10 == 1 && t % 100 != 11 ? 'one' : 'other';
  },
  ksh: function ksh(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
  },
  lt: function lt(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
  },
  lv: function lv(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
  },
  mk: function mk(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
  },
  mt: function mt(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 ? 'one' : n == 2 ? 'two' : n == 0 || n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
  },
  pa: function pa(n) {
    return n == 0 || n == 1 ? 'one' : 'other';
  },
  pl: function pl(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
  },
  pt: function pt(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return i == 0 || i == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ro: function ro(n) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? 'one' : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? 'few' : 'other';
  },
  ru: function ru(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
  },
  se: function se(n) {
    return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
  },
  si: function si(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '';
    return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
  },
  sl: function sl(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i100 = i.slice(-2);
    return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
  }
};
$.as = $.am;
$.az = $.af;
$.bg = $.af;
$.bn = $.am;
$.brx = $.af;
$.ce = $.af;
$.chr = $.af;
$.de = $.ast;
$.ee = $.af;
$.el = $.af;
$.en = $.ast;
$.et = $.ast;
$.eu = $.af;
$.fa = $.am;
$.fi = $.ast;
$.fil = $.ceb;
$.fo = $.af;
$.fur = $.af;
$.fy = $.ast;
$.gl = $.ast;
$.gu = $.am;
$.ha = $.af;
$.hi = $.am;
$.hr = $.bs;
$.hsb = $.dsb;
$.hu = $.af;
$.hy = $.ff;
$.ia = $.ast;
$.id = $.dz;
$.ig = $.dz;
$.it = $.ca;
$.ja = $.dz;
$.jgo = $.af;
$.jv = $.dz;
$.ka = $.af;
$.kea = $.dz;
$.kk = $.af;
$.kl = $.af;
$.km = $.dz;
$.kn = $.am;
$.ko = $.dz;
$.ks = $.af;
$.ku = $.af;
$.ky = $.af;
$.lb = $.af;
$.lkt = $.dz;
$.lo = $.dz;
$.ml = $.af;
$.mn = $.af;
$.mr = $.af;
$.ms = $.dz;
$.my = $.dz;
$.nb = $.af;
$.ne = $.af;
$.nl = $.ast;
$.nn = $.af;
$.no = $.af;
$.or = $.af;
$.pcm = $.am;
$.ps = $.af;
$.rm = $.af;
$.sah = $.dz;
$.sc = $.ast;
$.sd = $.af;
$.sk = $.cs;
$.so = $.af;
$.sq = $.af;
$.sr = $.bs;
$.su = $.dz;
$.sv = $.ast;
$.sw = $.ast;
$.ta = $.af;
$.te = $.af;
$.th = $.dz;
$.ti = $.pa;
$.tk = $.af;
$.to = $.dz;
$.tr = $.af;
$.ug = $.af;
$.uk = $.ru;
$.ur = $.ast;
$.uz = $.af;
$.vi = $.dz;
$.wae = $.af;
$.wo = $.dz;
$.xh = $.af;
$.yi = $.ast;
$.yo = $.dz;
$.yue = $.dz;
$.zh = $.dz;
$.zu = $.am;

/**
 * Returns a `locale` for which a function exists in `./PluralRuleFunctions.js`.
 * @param  {string} locale
 * @return {string}
 * @example
 * getPluralRulesLocale("ru-RU-Cyrl") // Returns "ru".
 */
function getPluralRulesLocale(locale) {
  // "pt" language is the only one having different pluralization rules
  // for the one ("pt") (Portuguese) locale and the other ("pt-PT") (European Portuguese).
  // http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
  // (see the entries for "pt" and "pt_PT" there)
  if (locale === 'pt-PT') {
    return locale;
  }

  return getLanguageFromLanguageTag(locale);
}
/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */

var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;

function getLanguageFromLanguageTag(languageTag) {
  var match = languageTag.match(LANGUAGE_REG_EXP);

  if (!match) {
    throw new TypeError("Invalid locale: ".concat(languageTag));
  }

  return match[1];
}

function _classCallCheck$3(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$3(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$3(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$3(Constructor.prototype, protoProps); if (staticProps) _defineProperties$3(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
/**
 * `Intl.PluralRules` polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
 */

var PluralRules = /*#__PURE__*/function () {
  function PluralRules(locale, options) {
    _classCallCheck$3(this, PluralRules);

    var locales = PluralRules.supportedLocalesOf(locale);

    if (locales.length === 0) {
      throw new RangeError("Unsupported locale: " + locale);
    }

    if (options && options.type !== "cardinal") {
      throw new RangeError("Only \"cardinal\" \"type\" is supported");
    }

    this.$ = $[getPluralRulesLocale(locales[0])];
  }

  _createClass$3(PluralRules, [{
    key: "select",
    value: function select(number) {
      return this.$(number);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(locales) {
      if (typeof locales === "string") {
        locales = [locales];
      }

      return locales.filter(function (locale) {
        return $[getPluralRulesLocale(locale)];
      });
    }
  }]);

  return PluralRules;
}();

function _typeof$5(obj) { "@babel/helpers - typeof"; return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$5(obj); }

function ownKeys$9(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$9(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$9(Object(source), true).forEach(function (key) { _defineProperty$9(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$9(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$9(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray$1(arr, i) { return _arrayWithHoles$1(arr) || _iterableToArrayLimit$1(arr, i) || _unsupportedIterableToArray$2(arr, i) || _nonIterableRest$1(); }

function _nonIterableRest$1() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$2(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$2(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$2(o, minLen); }

function _arrayLikeToArray$2(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit$1(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles$1(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck$2(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$2(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$2(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$2(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
// results in a bundle that is larger by 1kB for some reason.
// import PluralRules from 'intl-plural-rules-polyfill/cardinal'
// Valid time units.

var UNITS = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"]; // Valid values for the `numeric` option.

var NUMERIC_VALUES = ["auto", "always"]; // Valid values for the `style` option.

var STYLE_VALUES = ["long", "short", "narrow"]; // Valid values for the `localeMatcher` option.

var LOCALE_MATCHER_VALUES = ["lookup", "best fit"];
/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */

var RelativeTimeFormat = /*#__PURE__*/function () {
  /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.numeric="always"] - (Version >= 2) One of: "always", "auto".
   * @param {string} [options.localeMatcher="lookup"] - One of: "lookup", "best fit". Currently only "lookup" is supported.
   */
  function RelativeTimeFormat() {
    var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    _classCallCheck$2(this, RelativeTimeFormat);

    var numeric = options.numeric,
        style = options.style,
        localeMatcher = options.localeMatcher;
    this.numeric = "always";
    this.style = "long";
    this.localeMatcher = "lookup"; // Set `numeric` option.

    if (numeric !== undefined) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError("Invalid \"numeric\" option: ".concat(numeric));
      }

      this.numeric = numeric;
    } // Set `style` option.


    if (style !== undefined) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError("Invalid \"style\" option: ".concat(style));
      }

      this.style = style;
    } // Set `localeMatcher` option.


    if (localeMatcher !== undefined) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
      }

      this.localeMatcher = localeMatcher;
    } // Set `locale`.
    // Convert `locales` to an array.


    if (typeof locales === 'string') {
      locales = [locales];
    } // Add default locale.


    locales.push(getDefaultLocale()); // Choose the most appropriate locale.

    this.locale = RelativeTimeFormat.supportedLocalesOf(locales, {
      localeMatcher: this.localeMatcher
    })[0];

    if (!this.locale) {
      throw new Error("No supported locale was found");
    } // Construct an `Intl.PluralRules` instance (polyfill).


    if (PluralRules.supportedLocalesOf(this.locale).length > 0) {
      this.pluralRules = new PluralRules(this.locale);
    } else {
      console.warn("\"".concat(this.locale, "\" locale is not supported"));
    } // Use `Intl.NumberFormat` for formatting numbers (when available).


    if (typeof Intl !== 'undefined' && Intl.NumberFormat) {
      this.numberFormat = new Intl.NumberFormat(this.locale);
      this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
    } else {
      this.numberingSystem = 'latn';
    }

    this.locale = resolveLocale(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  /**
   * Formats time `number` in `units` (either in past or in future).
   * @param {number} number - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */


  _createClass$2(RelativeTimeFormat, [{
    key: "format",
    value: function format() {
      var _parseFormatArgs = parseFormatArgs(arguments),
          _parseFormatArgs2 = _slicedToArray$1(_parseFormatArgs, 2),
          number = _parseFormatArgs2[0],
          unit = _parseFormatArgs2[1];

      return this.getRule(number, unit).replace('{0}', this.formatNumber(Math.abs(number)));
    }
    /**
     * Formats time `number` in `units` (either in past or in future).
     * @param {number} number - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value, unit? }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Version 1 (deprecated).
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "day", value: "100" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     * //
     * // Version 2.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "integer", value: "100", unit: "day" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     */

  }, {
    key: "formatToParts",
    value: function formatToParts() {
      var _parseFormatArgs3 = parseFormatArgs(arguments),
          _parseFormatArgs4 = _slicedToArray$1(_parseFormatArgs3, 2),
          number = _parseFormatArgs4[0],
          unit = _parseFormatArgs4[1];

      var rule = this.getRule(number, unit);
      var valueIndex = rule.indexOf("{0}"); // "yesterday"/"today"/"tomorrow".

      if (valueIndex < 0) {
        return [{
          type: "literal",
          value: rule
        }];
      }

      var parts = [];

      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }

      parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function (part) {
        return _objectSpread$9(_objectSpread$9({}, part), {}, {
          unit: unit
        });
      }));

      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }

      return parts;
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */

  }, {
    key: "getRule",
    value: function getRule(value, unit) {
      // Get locale-specific time interval formatting rules
      // of a given `style` for the given value of measurement `unit`.
      //
      // E.g.:
      //
      // ```json
      // {
      //  "past": {
      //    "one": "a second ago",
      //    "other": "{0} seconds ago"
      //  },
      //  "future": {
      //    "one": "in a second",
      //    "other": "in {0} seconds"
      //  }
      // }
      // ```
      //
      var unitMessages = getLocaleData$1(this.locale)[this.style][unit]; // Bundle size optimization technique for styles like
      // "tiny" in `javascript-time-ago`: "1m", "2h", "3d"...

      if (typeof unitMessages === 'string') {
        return unitMessages;
      } // Special case for "yesterday"/"today"/"tomorrow".


      if (this.numeric === "auto") {
        // "yesterday", "the day before yesterday", etc.
        if (value === -2 || value === -1) {
          var message = unitMessages["previous".concat(value === -1 ? '' : '-' + Math.abs(value))];

          if (message) {
            return message;
          }
        } // "tomorrow", "the day after tomorrow", etc.
        else if (value === 1 || value === 2) {
          var _message = unitMessages["next".concat(value === 1 ? '' : '-' + Math.abs(value))];

          if (_message) {
            return _message;
          }
        } // "today"
        else if (value === 0) {
          if (unitMessages.current) {
            return unitMessages.current;
          }
        }
      } // Choose either "past" or "future" based on time `value` sign.
      // If there's only "other" then it's being collapsed.
      // (the resulting bundle size optimization technique)


      var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"]; // Bundle size optimization technique for styles like "narrow"
      // having messages like "in {0} d." or "{0} d. ago".

      if (typeof pluralizedMessages === "string") {
        return pluralizedMessages;
      } // Quantify `value`.
      // There seems to be no such locale in CLDR
      // for which "plural rules" function is missing.


      var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || 'other'; // "other" rule is supposed to be always present.
      // If only "other" rule is present then "rules" is not an object and is a string.

      return pluralizedMessages[quantifier] || pluralizedMessages.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */

  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Formats a number into a list of parts.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {object[]}
     */

  }, {
    key: "formatNumberToParts",
    value: function formatNumberToParts(number) {
      // `Intl.NumberFormat.formatToParts()` is not present, for example,
      // in Node.js 8.x while `Intl.NumberFormat` itself is present.
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [{
        type: "integer",
        value: this.formatNumber(number)
      }];
    }
    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */

  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]);

  return RelativeTimeFormat;
}();

RelativeTimeFormat.supportedLocalesOf = function (locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales];
  } else if (!Array.isArray(locales)) {
    throw new TypeError('Invalid "locales" argument');
  }

  return locales.filter(function (locale) {
    return resolveLocale(locale, options);
  });
};
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */


RelativeTimeFormat.addLocale = addLocaleData$1;
/**
 * Sets default locale.
 * @param  {string} locale
 */

RelativeTimeFormat.setDefaultLocale = setDefaultLocale;
/**
 * Gets default locale.
 * @return  {string} locale
 */

RelativeTimeFormat.getDefaultLocale = getDefaultLocale;
/**
 * Export `Intl.PluralRules` just in case it's used somewhere else.
 */

RelativeTimeFormat.PluralRules = PluralRules; // The specification allows units to be in plural form.
// Convert plural to singular.
// Example: "seconds" -> "second".

var UNIT_ERROR = 'Invalid "unit" argument';

function parseUnit(unit) {
  if (_typeof$5(unit) === 'symbol') {
    throw new TypeError(UNIT_ERROR);
  }

  if (typeof unit !== 'string') {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }

  if (unit[unit.length - 1] === 's') {
    unit = unit.slice(0, unit.length - 1);
  }

  if (UNITS.indexOf(unit) < 0) {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }

  return unit;
} // Converts `value` to a `Number`.
// The specification allows value to be a non-number.
// For example, "-0" is supposed to be treated as `-0`.
// Also checks if `value` is a finite number.


var NUMBER_ERROR = 'Invalid "number" argument';

function parseNumber(value) {
  value = Number(value);

  if (Number.isFinite) {
    if (!Number.isFinite(value)) {
      throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
    }
  }

  return value;
}
/**
 * Tells `0` from `-0`.
 * https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
 * @param  {number} number
 * @return {Boolean}
 * @example
 * isNegativeZero(0); // false
 * isNegativeZero(-0); // true
 */


function isNegativeZero(number) {
  return 1 / number === -Infinity;
}

function isNegative(number) {
  return number < 0 || number === 0 && isNegativeZero(number);
}

function parseFormatArgs(args) {
  if (args.length < 2) {
    throw new TypeError("\"unit\" argument is required");
  }

  return [parseNumber(args[0]), parseUnit(args[1])];
}

function _typeof$4(obj) { "@babel/helpers - typeof"; return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$4(obj); }

function _classCallCheck$1(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties$1(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass$1(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties$1(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * A basic in-memory cache.
 *
 * import Cache from 'javascript-time-ago/Cache'
 * const cache = new Cache()
 * const object = cache.get('key1', 'key2', ...) || cache.put('key1', 'key2', ..., createObject())
 */
var Cache = /*#__PURE__*/function () {
  function Cache() {
    _classCallCheck$1(this, Cache);

    this.cache = {};
  }

  _createClass$1(Cache, [{
    key: "get",
    value: function get() {
      var cache = this.cache;

      for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];

        if (_typeof$4(cache) !== 'object') {
          return;
        }

        cache = cache[key];
      }

      return cache;
    }
  }, {
    key: "put",
    value: function put() {
      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      var value = keys.pop();
      var lastKey = keys.pop();
      var cache = this.cache;

      for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
        var key = _keys2[_i2];

        if (_typeof$4(cache[key]) !== 'object') {
          cache[key] = {};
        }

        cache = cache[key];
      }

      return cache[lastKey] = value;
    }
  }]);

  return Cache;
}();

function _typeof$3(obj) { "@babel/helpers - typeof"; return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$3(obj); }

function _createForOfIteratorHelperLoose$1(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray$1(o)) || allowArrayLike) { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray$1(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray$1(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray$1(o, minLen); }

function _arrayLikeToArray$1(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Chooses the most appropriate locale
 * (one of the registered ones)
 * based on the list of preferred `locales` supplied by the user.
 *
 * @param {string[]} locales - the list of preferable locales (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)).
 * @param {Function} isLocaleDataAvailable - tests if a locale is available.
 *
 * @returns {string} The most suitable locale.
 *
 * @example
 * // Returns 'en'
 * chooseLocale(['en-US'], undefined, (locale) => locale === 'ru' || locale === 'en')
 */
function chooseLocale(locales, isLocaleDataAvailable) {
  // This is not an intelligent algorithm,
  // but it will do for this library's case.
  // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
  for (var _iterator = _createForOfIteratorHelperLoose$1(locales), _step; !(_step = _iterator()).done;) {
    var locale = _step.value;

    if (isLocaleDataAvailable(locale)) {
      return locale;
    }

    var parts = locale.split('-');

    while (parts.length > 1) {
      parts.pop();
      locale = parts.join('-');

      if (isLocaleDataAvailable(locale)) {
        return locale;
      }
    }
  }

  throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(', ')));
}
/**
 * Whether can use `Intl.DateTimeFormat`.
 * @return {boolean}
 */

function intlDateTimeFormatSupported() {
  // Babel transforms `typeof` into some "branches"
  // so istanbul will show this as "branch not covered".

  /* istanbul ignore next */
  var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : _typeof$3(Intl)) === 'object';
  return isIntlAvailable && typeof Intl.DateTimeFormat === 'function';
}

function _typeof$2(obj) { "@babel/helpers - typeof"; return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$2(obj); }

function isStyleObject(object) {
  return isObject(object) && (Array.isArray(object.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(object.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(object.flavour) || typeof object.flavour === 'string' || Array.isArray(object.labels) || typeof object.labels === 'string' || // `units` property is deprecated.
  Array.isArray(object.units) || // `custom` property is deprecated.
  typeof object.custom === 'function');
}
var OBJECT_CONSTRUCTOR = {}.constructor;

function isObject(object) {
  return _typeof$2(object) !== undefined && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
}

var minute = 60; // in seconds

var hour = 60 * minute; // in seconds

var day = 24 * hour; // in seconds

var week = 7 * day; // in seconds
// https://www.quora.com/What-is-the-average-number-of-days-in-a-month

var month = 30.44 * day; // in seconds
// "400 years have 146097 days (taking into account leap year rules)"

var year = 146097 / 400 * day; // in seconds

function getSecondsInUnit(unit) {
  switch (unit) {
    case 'second':
      return 1;

    case 'minute':
      return minute;

    case 'hour':
      return hour;

    case 'day':
      return day;

    case 'week':
      return week;

    case 'month':
      return month;

    case 'year':
      return year;
  }
} // export function getPreviousUnitFor(unit) {
// 	switch (unit) {
// 		case 'second':
// 			return 'now'
// 		case 'minute':
// 			return 'second'
// 		case 'hour':
// 			return 'minute'
// 		case 'day':
// 			return 'hour'
// 		case 'week':
// 			return 'day'
// 		case 'month':
// 			return 'week'
// 		case 'year':
// 			return 'month'
// 	}
// }

function getStepDenominator(step) {
  // `factor` is a legacy property.
  if (step.factor !== undefined) {
    return step.factor;
  } // "unit" is now called "formatAs".


  return getSecondsInUnit(step.unit || step.formatAs) || 1;
}

function getRoundFunction(round) {
  switch (round) {
    case 'floor':
      return Math.floor;

    default:
      return Math.round;
  }
} // For non-negative numbers.

function getDiffRatioToNextRoundedNumber(round) {
  switch (round) {
    case 'floor':
      // Math.floor(x) = x
      // Math.floor(x + 1) = x + 1
      return 1;

    default:
      // Math.round(x) = x
      // Math.round(x + 0.5) = x + 1
      return 0.5;
  }
}

function _typeof$1(obj) { "@babel/helpers - typeof"; return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof$1(obj); }
function getStepMinTime(step, _ref) {
  var prevStep = _ref.prevStep,
      timestamp = _ref.timestamp,
      now = _ref.now,
      future = _ref.future,
      round = _ref.round;
  var minTime; // "threshold_for_xxx" is a legacy property.

  if (prevStep) {
    if (prevStep.id || prevStep.unit) {
      minTime = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
    }
  }

  if (minTime === undefined) {
    // "threshold" is a legacy property.
    if (step.threshold !== undefined) {
      // "threshold" is a legacy name for "minTime".
      minTime = step.threshold; // "threshold" function is deprecated.

      if (typeof minTime === 'function') {
        minTime = minTime(now, future);
      }
    }
  }

  if (minTime === undefined) {
    minTime = step.minTime;
  } // A deprecated way of specifying a different threshold
  // depending on the previous step's unit.


  if (_typeof$1(minTime) === 'object') {
    if (prevStep && prevStep.id && minTime[prevStep.id] !== undefined) {
      minTime = minTime[prevStep.id];
    } else {
      minTime = minTime["default"];
    }
  }

  if (typeof minTime === 'function') {
    minTime = minTime(timestamp, {
      future: future,
      getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
        return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
          round: round
        });
      }
    });
  } // Evaluate the `test()` function.
  // `test()` function is deprecated.


  if (minTime === undefined) {
    if (step.test) {
      if (step.test(timestamp, {
        now: now,
        future: future
      })) {
        // `0` threshold always passes.
        minTime = 0;
      } else {
        // `MAX_SAFE_INTEGER` threshold won't ever pass in real life.
        minTime = 9007199254740991; // Number.MAX_SAFE_INTEGER
      }
    }
  }

  if (minTime === undefined) {
    if (prevStep) {
      if (step.formatAs && prevStep.formatAs) {
        minTime = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
          round: round
        });
      }
    } else {
      // The first step's `minTime` is `0` by default.
      minTime = 0;
    }
  } // Warn if no `minTime` was defined or could be deduced.


  if (minTime === undefined) {
    console.warn('[javascript-time-ago] A step should specify `minTime`:\n' + JSON.stringify(step, null, 2));
  }

  return minTime;
}

function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
  var round = _ref2.round;
  var toUnitAmount = getSecondsInUnit(toUnit); // if (!fromUnit) {
  // 	return toUnitAmount;
  // }
  // if (!fromUnit) {
  // 	fromUnit = getPreviousUnitFor(toUnit)
  // }

  var fromUnitAmount;

  if (fromUnit === 'now') {
    fromUnitAmount = getSecondsInUnit(toUnit);
  } else {
    fromUnitAmount = getSecondsInUnit(fromUnit);
  }

  if (toUnitAmount !== undefined && fromUnitAmount !== undefined) {
    return toUnitAmount - fromUnitAmount * (1 - getDiffRatioToNextRoundedNumber(round));
  }
}

function ownKeys$8(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$8(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$8(Object(source), true).forEach(function (key) { _defineProperty$8(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$8(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$8(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
/**
 * Finds an appropriate `step` of `steps` for the time interval (in seconds).
 *
 * @param {Object[]} steps - Time formatting steps.
 *
 * @param {number} secondsPassed - Time interval (in seconds).
 *                                 `< 0` for past dates and `> 0` for future dates.
 *
 * @param {number} options.now - Current timestamp.
 *
 * @param {boolean} [options.future] - Whether the date should be formatted as a future one
 *                                     instead of a past one.
 *
 * @param {string} [options.round] - (undocumented) Rounding mechanism.
 *
 * @param {string[]} [options.units] - A list of allowed time units.
 *                                     (Example: ['second', 'minute', 'hour', …])
 *
 * @param {boolean} [options.getNextStep] - Pass true to return `[step, nextStep]` instead of just `step`.
 *
 * @return {Object|Object[]} [step] — Either a `step` or `[prevStep, step, nextStep]`.
 */

function getStep(steps, secondsPassed, _ref) {
  var now = _ref.now,
      future = _ref.future,
      round = _ref.round,
      units = _ref.units;
  // Ignore steps having not-supported time units in `formatAs`.
  steps = filterStepsByUnits(steps, units);

  var step = _getStep(steps, secondsPassed, {
    now: now,
    future: future,
    round: round
  });

  {
    if (step) {
      var prevStep = steps[steps.indexOf(step) - 1];
      var nextStep = steps[steps.indexOf(step) + 1];
      return [prevStep, step, nextStep];
    }

    return [undefined, undefined, steps[0]];
  }
}

function _getStep(steps, secondsPassed, _ref2) {
  var now = _ref2.now,
      future = _ref2.future,
      round = _ref2.round;

  // If no steps fit the conditions then return nothing.
  if (steps.length === 0) {
    return;
  } // Find the most appropriate step.


  var i = getStepIndex(steps, secondsPassed, {
    now: now,
    future: future || secondsPassed < 0,
    round: round
  }); // If no step is applicable the return nothing.

  if (i === -1) {
    return;
  }

  var step = steps[i]; // Apply granularity to the time amount
  // (and fall back to the previous step
  //  if the first level of granularity
  //  isn't met by this amount)

  if (step.granularity) {
    // Recalculate the amount of seconds passed based on `granularity`.
    var secondsPassedGranular = getRoundFunction(round)(Math.abs(secondsPassed) / getStepDenominator(step) / step.granularity) * step.granularity; // If the granularity for this step is too high,
    // then fall back to the previous step.
    // (if there is any previous step)

    if (secondsPassedGranular === 0 && i > 0) {
      return steps[i - 1];
    }
  }

  return step;
}
/**
 * Iterates through steps until it finds the maximum one satisfying the `minTime` threshold.
 * @param  {Object} steps - Steps.
 * @param  {number} secondsPassed - How much seconds have passed since the date till `now`.
 * @param  {number} options.now - Current timestamp.
 * @param  {boolean} options.future - Whether the time interval should be formatted as a future one.
 * @param  {number} [i] - Gradation step currently being tested.
 * @return {number} Gradation step index.
 */


function getStepIndex(steps, secondsPassed, options) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minTime = getStepMinTime(steps[i], _objectSpread$8({
    prevStep: steps[i - 1],
    timestamp: options.now - secondsPassed * 1000
  }, options)); // If `minTime` isn't defined or deduceable for this step, then stop.

  if (minTime === undefined) {
    return i - 1;
  } // If the `minTime` threshold for moving from previous step
  // to this step is too high then return the previous step.


  if (Math.abs(secondsPassed) < minTime) {
    return i - 1;
  } // If it's the last step then return it.


  if (i === steps.length - 1) {
    return i;
  } // Move to the next step.


  return getStepIndex(steps, secondsPassed, options, i + 1);
}
/**
 * Leaves only allowed steps.
 * @param  {Object[]} steps
 * @param  {string[]} units - Allowed time units.
 * @return {Object[]}
 */


function filterStepsByUnits(steps, units) {
  return steps.filter(function (_ref3) {
    var unit = _ref3.unit,
        formatAs = _ref3.formatAs;
    // "unit" is now called "formatAs".
    unit = unit || formatAs; // If this step has a `unit` defined
    // then this `unit` must be in the list of allowed `units`.

    if (unit) {
      return units.indexOf(unit) >= 0;
    } // A step is not required to specify a `unit`:
    // alternatively, it could specify `format()`.
    // (see "twitter" style for an example)


    return true;
  });
}

/**
 * Gets the time to next update for a step with a time unit defined.
 * @param  {string} unit
 * @param  {number} date — The date passed to `.format()`, converted to a timestamp.
 * @param  {number} options.now
 * @param  {string} [options.round] — (undocumented) Rounding mechanism.
 * @return {number} [timeToNextUpdate]
 */

function getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
  var now = _ref.now,
      round = _ref.round;

  // For some units, like "now", there's no defined amount of seconds in them.
  if (!getSecondsInUnit(unit)) {
    // If there's no amount of seconds defined for this unit
    // then the update interval can't be determined reliably.
    return;
  }

  var unitDenominator = getSecondsInUnit(unit) * 1000;
  var future = timestamp > now;
  var preciseAmount = Math.abs(timestamp - now);
  var roundedAmount = getRoundFunction(round)(preciseAmount / unitDenominator) * unitDenominator;

  if (future) {
    if (roundedAmount > 0) {
      // Amount decreases with time.
      return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round, unitDenominator);
    } else {
      // Refresh right after the zero point,
      // when "future" changes to "past".
      return preciseAmount - roundedAmount + 1;
    }
  } // Amount increases with time.


  return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round, unitDenominator);
}

function getDiffToNextRoundedNumber(round, unitDenominator) {
  return getDiffRatioToNextRoundedNumber(round) * unitDenominator;
}

function getDiffToPreviousRoundedNumber(round, unitDenominator) {
  return (1 - getDiffRatioToNextRoundedNumber(round)) * unitDenominator + 1;
}

var YEAR = 365 * 24 * 60 * 60 * 1000;
var INFINITY = 1000 * YEAR;
/**
 * Gets the time to next update for a date and a step.
 * @param  {number} date — The date passed to `.format()`, converted to a timestamp.
 * @param  {object} step
 * @param  {object} [options.previousStep]
 * @param  {object} [options.nextStep]
 * @param  {number} options.now
 * @param  {boolean} options.future
 * @param  {string} [options.round] - (undocumented) Rounding mechanism.
 * @return {number} [timeToNextUpdate]
 */

function getTimeToNextUpdate(date, step, _ref) {
  var prevStep = _ref.prevStep,
      nextStep = _ref.nextStep,
      now = _ref.now,
      future = _ref.future,
      round = _ref.round;
  var timestamp = date.getTime ? date.getTime() : date;

  var getTimeToNextUpdateForUnit$1 = function getTimeToNextUpdateForUnit$1(unit) {
    return getTimeToNextUpdateForUnit(unit, timestamp, {
      now: now,
      round: round
    });
  }; // For future dates, steps move from the last one to the first one,
  // while for past dates, steps move from the first one to the last one,
  // due to the fact that time flows in one direction,
  // and future dates' interval naturally becomes smaller
  // while past dates' interval naturally grows larger.
  //
  // For future dates, it's the transition
  // from the current step to the previous step,
  // therefore check the `minTime` of the current step.
  //
  // For past dates, it's the transition
  // from the current step to the next step,
  // therefore check the `minTime` of the next step.
  //


  var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
    future: future,
    now: now,
    round: round,
    prevStep: future ? prevStep : step // isFirstStep: future && isFirstStep

  });

  if (timeToStepChange === undefined) {
    // Can't reliably determine "time to next update"
    // if not all of the steps provide `minTime`.
    return;
  }

  var timeToNextUpdate;

  if (step) {
    if (step.getTimeToNextUpdate) {
      timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
        getTimeToNextUpdateForUnit: getTimeToNextUpdateForUnit$1,
        getRoundFunction: getRoundFunction,
        now: now,
        future: future,
        round: round
      });
    }

    if (timeToNextUpdate === undefined) {
      // "unit" is now called "formatAs".
      var unit = step.unit || step.formatAs;

      if (unit) {
        // For some units, like "now", there's no defined amount of seconds in them.
        // In such cases, `getTimeToNextUpdateForUnit()` returns `undefined`,
        // and the next step's `minTime` could be used to calculate the update interval:
        // it will just assume that the label never changes for this step.
        timeToNextUpdate = getTimeToNextUpdateForUnit$1(unit);
      }
    }
  }

  if (timeToNextUpdate === undefined) {
    return timeToStepChange;
  }

  return Math.min(timeToNextUpdate, timeToStepChange);
}
function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
  var now = _ref2.now,
      future = _ref2.future,
      round = _ref2.round,
      prevStep = _ref2.prevStep;
  // The first step's `minTime` is `0` by default.
  // It doesn't "change" steps at zero point
  // but it does change the wording when switching
  // from "future" to "past": "in ..." -> "... ago".
  // Therefore, the label should be updated at zero-point too.
  var minTime = getStepMinTime(currentOrNextStep, {
    timestamp: timestamp,
    now: now,
    future: future,
    round: round,
    prevStep: prevStep
  });

  if (minTime === undefined) {
    return;
  }

  if (future) {
    // The step changes to the previous step
    // as soon as `timestamp - now` becomes
    // less than the `minTime` of the current step:
    // `timestamp - now === minTime - 1`
    // => `now === timestamp - minTime + 1`.
    return timestamp - minTime * 1000 + 1;
  } else {
    // The step changes to the next step
    // as soon as `now - timestamp` becomes
    // equal to `minTime` of the next step:
    // `now - timestamp === minTime`
    // => `now === timestamp + minTime`.
    // This is a special case when double-update could be skipped.
    if (minTime === 0 && timestamp === now) {
      return INFINITY;
    }

    return timestamp + minTime * 1000;
  }
}
function getTimeToStepChange(step, timestamp, _ref3) {
  var now = _ref3.now,
      future = _ref3.future,
      round = _ref3.round,
      prevStep = _ref3.prevStep;

  if (step) {
    var stepChangesAt = getStepChangesAt(step, timestamp, {
      now: now,
      future: future,
      round: round,
      prevStep: prevStep
    });

    if (stepChangesAt === undefined) {
      return;
    }

    return stepChangesAt - now;
  } else {
    if (future) {
      // No step.
      // Update right after zero point, when it changes from "future" to "past".
      return timestamp - now + 1;
    } else {
      // The last step doesn't ever change when `date` is in the past.
      return INFINITY;
    }
  }
}

// For all locales added
// their relative time formatter messages will be stored here.
var localesData = {};
function getLocaleData(locale) {
  return localesData[locale];
}
function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error('[javascript-time-ago] No locale data passed.');
  } // This locale data is stored in a global variable
  // and later used when calling `.format(time)`.


  localesData[localeData.locale] = localeData;
}

// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// …
// 3 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
var round$1 = [{
  formatAs: 'now'
}, {
  formatAs: 'second'
}, {
  formatAs: 'minute'
}, {
  formatAs: 'hour'
}, {
  formatAs: 'day'
}, {
  formatAs: 'week'
}, {
  formatAs: 'month'
}, {
  formatAs: 'year'
}];

// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// 3 weeks ago
// 4 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
//

var round = {
  steps: round$1,
  labels: 'long'
};

function ownKeys$7(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$7(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$7(Object(source), true).forEach(function (key) { _defineProperty$7(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$7(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$7(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// 3 weeks ago
// 4 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
//

var defaultStyle = _objectSpread$7(_objectSpread$7({}, round), {}, {
  // Skip "seconds".
  steps: round.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
});

// Developers shouldn't need to use it in their custom steps.
// "threshold" is a legacy name of "min".
// Developers should use "min" property name instead of "threshold".
// "threshold_for_idOrUnit: value" is a legacy way of specifying "min: { id: value }".
// Developers should use "min" property instead of "threshold".
// just now
// 1 minute ago
// 2 minutes ago
// 5 minutes ago
// 10 minutes ago
// 15 minutes ago
// 20 minutes ago
// …
// 50 minutes ago
// an hour ago
// 2 hours ago
// …
// 20 hours ago
// a day ago
// 2 days ago
// 5 days ago
// a week ago
// 2 weeks ago
// 3 weeks ago
// a month ago
// 2 months ago
// 4 months ago
// a year ago
// 2 years ago
// …

var approximate$1 = [{
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "now" labels are used for formatting the output.
  unit: 'now'
}, {
  // When the language doesn't support `now` unit,
  // the first step is ignored, and it uses this `second` unit.
  threshold: 1,
  // `threshold_for_now` should be the same as `threshold` on minutes.
  threshold_for_now: 45.5,
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "second" labels are used for formatting the output.
  unit: 'second'
}, {
  // `threshold` should be the same as `threshold_for_now` on seconds.
  threshold: 45.5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: minute,
  // "minute" labels are used for formatting the output.
  unit: 'minute'
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * minute,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: minute,
  // "minute" labels are used for formatting the output.
  unit: 'minute'
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * hour,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: 'half-hour'
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * minute,
  threshold_for_minute: 52.5 * minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: hour,
  // "hour" labels are used for formatting the output.
  unit: 'hour'
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: day,
  // "day" labels are used for formatting the output.
  unit: 'day'
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: week,
  // "week" labels are used for formatting the output.
  unit: 'week'
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * week,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: month,
  // "month" labels are used for formatting the output.
  unit: 'month'
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * month,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: year,
  // "year" labels are used for formatting the output.
  unit: 'year'
}];

// It's here just for legacy compatibility.
// Use "steps" name instead.
// "flavour" is a legacy name for "labels".
// It's here just for legacy compatibility.
// Use "labels" name instead.
// "units" is a legacy property.
// It's here just for legacy compatibility.
// Developers shouldn't need to use it in their custom styles.

var approximate = {
  gradation: approximate$1,
  flavour: 'long',
  units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};

// It's here just for legacy compatibility.
// Use "steps" name instead.
// "flavour" is a legacy name for "labels".
// It's here just for legacy compatibility.
// Use "labels" name instead.
// "units" is a legacy property.
// It's here just for legacy compatibility.
// Developers shouldn't need to use it in their custom styles.
// Similar to the default style but with "ago" omitted.
//
// just now
// 5 minutes
// 10 minutes
// 15 minutes
// 20 minutes
// an hour
// 2 hours
// …
// 20 hours
// 1 day
// 2 days
// a week
// 2 weeks
// 3 weeks
// a month
// 2 months
// 3 months
// 4 months
// a year
// 2 years
//

var approximateTime = {
  gradation: approximate$1,
  flavour: 'long-time',
  units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
};

// Looks like this one's deprecated.
// /**
//  * Returns a step corresponding to the unit.
//  * @param  {Object[]} steps
//  * @param  {string} unit
//  * @return {?Object}
//  */
// export function getStepForUnit(steps, unit) {
// 	for (const step of steps) {
// 		if (step.unit === unit) {
// 			return step
// 		}
// 	}
// }
// Looks like this one won't be used in the next major version.

/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}

// ("1m", "2h", "Mar 3", "Apr 4, 2012").
//
// Seconds, minutes or hours are shown for shorter intervals,
// and longer intervals are formatted using full date format.

var steps = [{
  formatAs: 'second'
}, {
  formatAs: 'minute'
}, {
  formatAs: 'hour'
}]; // A cache for `Intl.DateTimeFormat` formatters
// for various locales (is a global variable).

var formatters = {}; // Starting from day intervals, output month and day.

var monthAndDay = {
  minTime: function minTime(timestamp, _ref) {
    _ref.future;
        var getMinTimeForUnit = _ref.getMinTimeForUnit;
    // Returns `23.5 * 60 * 60` when `round` is "round",
    // and `24 * 60 * 60` when `round` is "floor".
    return getMinTimeForUnit('day');
  },
  format: function format(value, locale) {
    /* istanbul ignore else */
    if (!formatters[locale]) {
      formatters[locale] = {};
    }
    /* istanbul ignore else */


    if (!formatters[locale].dayMonth) {
      // "Apr 11" (MMMd)
      formatters[locale].dayMonth = new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric'
      });
    } // Output month and day.


    return formatters[locale].dayMonth.format(getDate(value));
  }
}; // If the `date` happened/happens outside of current year,
// then output day, month and year.
// The interval should be such that the `date` lies outside of the current year.

var yearMonthAndDay = {
  minTime: function minTime(timestamp, _ref2) {
    var future = _ref2.future;

    if (future) {
      // January 1, 00:00, of the `date`'s year is right after
      // the maximum `now` for formatting a future date:
      // When `now` is before that date, the `date` is formatted as "day/month/year" (this step),
      // When `now` is equal to or after that date, the `date` is formatted as "day/month" (another step).
      // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
      // The date is right after the maximum `now` for formatting a future date,
      // so subtract 1 millisecond from it.
      var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1; // Return `minTime` (in seconds).

      return (timestamp - maxFittingNow) / 1000;
    } else {
      // January 1, 00:00, of the year following the `date`'s year
      // is the minimum `now` for formatting a past date:
      // When `now` is before that date, the `date` is formatted as "day/month" (another step),
      // When `now` is equal to or after that date, the `date` is formatted as "day/month/year" (this step).
      // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
      var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime(); // Return `minTime` (in seconds).

      return (minFittingNow - timestamp) / 1000;
    }
  },
  format: function format(value, locale) {
    /* istanbul ignore if */
    if (!formatters[locale]) {
      formatters[locale] = {};
    }
    /* istanbul ignore else */


    if (!formatters[locale].dayMonthYear) {
      // "Apr 11, 2017" (yMMMd)
      formatters[locale].dayMonthYear = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } // Output day, month and year.


    return formatters[locale].dayMonthYear.format(getDate(value));
  }
}; // If `Intl.DateTimeFormat` is supported,
// then longer time intervals will be formatted as dates.

/* istanbul ignore else */

if (intlDateTimeFormatSupported()) {
  steps.push(monthAndDay, yearMonthAndDay);
} // Otherwise, if `Intl.DateTimeFormat` is not supported,
// which could be the case when using Internet Explorer,
// then simply mimick "round" steps.
else {
  steps.push({
    formatAs: 'day'
  }, {
    formatAs: 'week'
  }, {
    formatAs: 'month'
  }, {
    formatAs: 'year'
  });
}

var twitter = {
  steps: steps,
  labels: [// "mini" labels are only defined for a few languages.
  'mini', // "short-time" labels are only defined for a few languages.
  'short-time', // "narrow" and "short" labels are defined for all languages.
  // "narrow" labels can sometimes be weird (like "+5d."),
  // but "short" labels have the " ago" part, so "narrow" seem
  // more appropriate.
  // "short" labels would have been more appropriate if they
  // didn't have the " ago" part, hence the "short-time" above.
  'narrow', // Since "narrow" labels are always present, "short" element
  // of this array can be removed.
  'short']
};

function ownKeys$6(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$6(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$6(Object(source), true).forEach(function (key) { _defineProperty$6(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$6(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$6(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twitterNow = _objectSpread$6(_objectSpread$6({}, twitter), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(twitter.steps)
});

function ownKeys$5(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$5(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$5(Object(source), true).forEach(function (key) { _defineProperty$5(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$5(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$5(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twitterMinute = _objectSpread$5(_objectSpread$5({}, twitter), {}, {
  // Skip "seconds".
  steps: twitter.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
});

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), true).forEach(function (key) { _defineProperty$4(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$4(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twitterMinuteNow = _objectSpread$4(_objectSpread$4({}, twitterMinute), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(twitterMinute.steps)
});

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), true).forEach(function (key) { _defineProperty$3(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$3(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var twitterFirstMinute = _objectSpread$3(_objectSpread$3({}, twitter), {}, {
  // Skip "seconds".
  steps: twitter.steps.filter(function (step) {
    return step.formatAs !== 'second';
  }) // Start showing `1m` from the first minute.
  .map(function (step) {
    return step.formatAs === 'minute' ? _objectSpread$3(_objectSpread$3({}, step), {}, {
      minTime: minute
    }) : step;
  })
});

var mini = {
  steps: [{
    formatAs: 'second'
  }, {
    formatAs: 'minute'
  }, {
    formatAs: 'hour'
  }, {
    formatAs: 'day'
  }, {
    formatAs: 'month'
  }, {
    formatAs: 'year'
  }],
  labels: [// "mini" labels are only defined for a few languages.
  'mini', // "short-time" labels are only defined for a few languages.
  'short-time', // "narrow" and "short" labels are defined for all languages.
  // "narrow" labels can sometimes be weird (like "+5d."),
  // but "short" labels have the " ago" part, so "narrow" seem
  // more appropriate.
  // "short" labels would have been more appropriate if they
  // didn't have the " ago" part, hence the "short-time" above.
  'narrow', // Since "narrow" labels are always present, "short" element
  // of this array can be removed.
  'short']
};

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), true).forEach(function (key) { _defineProperty$2(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$2(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var miniNow = _objectSpread$2(_objectSpread$2({}, mini), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(mini.steps)
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), true).forEach(function (key) { _defineProperty$1(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var miniMinute = _objectSpread$1(_objectSpread$1({}, mini), {}, {
  // Skip "seconds".
  steps: mini.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
});

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var miniMinuteNow = _objectSpread(_objectSpread({}, miniMinute), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(miniMinute.steps)
});

function getStyleByName(style) {
  switch (style) {
    // "default" style name is deprecated.
    case 'default':
    case 'round':
      return round;

    case 'round-minute':
      return defaultStyle;

    case 'approximate':
      return approximate;
    // "time" style name is deprecated.

    case 'time':
    case 'approximate-time':
      return approximateTime;

    case 'mini':
      return mini;

    case 'mini-now':
      return miniNow;

    case 'mini-minute':
      return miniMinute;

    case 'mini-minute-now':
      return miniMinuteNow;

    case 'twitter':
      return twitter;

    case 'twitter-now':
      return twitterNow;

    case 'twitter-minute':
      return twitterMinute;

    case 'twitter-minute-now':
      return twitterMinuteNow;

    case 'twitter-first-minute':
      return twitterFirstMinute;

    default:
      // For historical reasons, the default style is "approximate".
      return approximate;
  }
}

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike) { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TimeAgo = /*#__PURE__*/function () {
  /**
   * @param {(string|string[])} locales=[] - Preferred locales (or locale).
   * @param {boolean} [polyfill] — Pass `false` to use native `Intl.RelativeTimeFormat` and `Intl.PluralRules` instead of the polyfills.
   */
  function TimeAgo() {
    var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        polyfill = _ref.polyfill;

    _classCallCheck(this, TimeAgo);

    // Convert `locales` to an array.
    if (typeof locales === 'string') {
      locales = [locales];
    } // Choose the most appropriate locale
    // from the list of `locales` added by the user.
    // For example, new TimeAgo("en-US") -> "en".


    this.locale = chooseLocale(locales.concat(TimeAgo.getDefaultLocale()), getLocaleData);

    if (typeof Intl !== 'undefined') {
      // Use `Intl.NumberFormat` for formatting numbers (when available).
      if (Intl.NumberFormat) {
        this.numberFormat = new Intl.NumberFormat(this.locale);
      }
    } // Some people have requested the ability to use native
    // `Intl.RelativeTimeFormat` and `Intl.PluralRules`
    // instead of the polyfills.
    // https://github.com/catamphetamine/javascript-time-ago/issues/21


    if (polyfill === false) {
      this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
      this.IntlPluralRules = Intl.PluralRules;
    } else {
      this.IntlRelativeTimeFormat = RelativeTimeFormat;
      this.IntlPluralRules = RelativeTimeFormat.PluralRules;
    } // Cache `Intl.RelativeTimeFormat` instance.


    this.relativeTimeFormatCache = new Cache(); // Cache `Intl.PluralRules` instance.

    this.pluralRulesCache = new Cache();
  }
  /**
   * Formats relative date/time.
   *
   * @param {(number|Date)} input — A `Date` or a javascript timestamp.
   *
   * @param {(string|object)} style — Date/time formatting style. Either one of the built-in style names or a "custom" style definition object having `steps: object[]` and `labels: string[]`.
   *
   * @param {number} [options.now] - Sets the current date timestamp.
   *
   * @param  {boolean} [options.future] — Tells how to format value `0`:
   *         as "future" (`true`) or "past" (`false`).
   *         Is `false` by default, but should have been `true` actually,
   *         in order to correspond to `Intl.RelativeTimeFormat`
   *         that uses `future` formatting for `0` unless `-0` is passed.
   *
   * @param {string} [options.round] — Rounding method. Overrides the style's one.
   *
   * @param {boolean} [options.getTimeToNextUpdate] — Pass `true` to return `[formattedDate, timeToNextUpdate]` instead of just `formattedDate`.
   *
   * @return {string} The formatted relative date/time. If no eligible `step` is found, then an empty string is returned.
   */


  _createClass(TimeAgo, [{
    key: "format",
    value: function format(input, style, options) {
      if (!options) {
        if (style && !isStyle(style)) {
          options = style;
          style = undefined;
        } else {
          options = {};
        }
      }

      if (!style) {
        style = defaultStyle;
      }

      if (typeof style === 'string') {
        style = getStyleByName(style);
      }

      var timestamp = getTimestamp(input); // Get locale messages for this type of labels.
      // "flavour" is a legacy name for "labels".

      var _this$getLabels = this.getLabels(style.flavour || style.labels),
          labels = _this$getLabels.labels,
          labelsType = _this$getLabels.labelsType;

      var now; // Can pass a custom `now`, e.g. for testing purposes.
      //
      // Legacy way was passing `now` in `style`.
      // That way is deprecated.

      if (style.now !== undefined) {
        now = style.now;
      } // The new way is passing `now` option to `.format()`.


      if (now === undefined && options.now !== undefined) {
        now = options.now;
      }

      if (now === undefined) {
        now = Date.now();
      } // how much time has passed (in seconds)


      var secondsPassed = (now - timestamp) / 1000; // in seconds

      var future = options.future || secondsPassed < 0;
      var nowLabel = getNowLabel(labels, getLocaleData(this.locale).now, getLocaleData(this.locale)["long"], future); // `custom` – A function of `{ elapsed, time, date, now, locale }`.
      //
      // Looks like `custom` function is deprecated and will be removed
      // in the next major version.
      //
      // If this function returns a value, then the `.format()` call will return that value.
      // Otherwise the relative date/time is formatted as usual.
      // This feature is currently not used anywhere and is here
      // just for providing the ultimate customization point
      // in case anyone would ever need that. Prefer using
      // `steps[step].format(value, locale)` instead.
      //

      if (style.custom) {
        var custom = style.custom({
          now: now,
          date: new Date(timestamp),
          time: timestamp,
          elapsed: secondsPassed,
          locale: this.locale
        });

        if (custom !== undefined) {
          // Won't return `timeToNextUpdate` here
          // because `custom()` seems deprecated.
          return custom;
        }
      } // Get the list of available time interval units.


      var units = getTimeIntervalMeasurementUnits( // Controlling `style.steps` through `style.units` seems to be deprecated:
      // create a new custom `style` instead.
      style.units, labels, nowLabel); // // If no available time unit is suitable, just output an empty string.
      // if (units.length === 0) {
      // 	console.error(`None of the "${units.join(', ')}" time units have been found in "${labelsType}" labels for "${this.locale}" locale.`)
      // 	return ''
      // }

      var round = options.round || style.round; // Choose the appropriate time measurement unit
      // and get the corresponding rounded time amount.

      var _getStep = getStep( // "gradation" is a legacy name for "steps".
      // For historical reasons, "approximate" steps are used by default.
      // In the next major version, there'll be no default for `steps`.
      style.gradation || style.steps || defaultStyle.steps, secondsPassed, {
        now: now,
        units: units,
        round: round,
        future: future}),
          _getStep2 = _slicedToArray(_getStep, 3),
          prevStep = _getStep2[0],
          step = _getStep2[1],
          nextStep = _getStep2[2];

      var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
        labels: labels,
        labelsType: labelsType,
        nowLabel: nowLabel,
        now: now,
        future: future,
        round: round
      }) || '';

      if (options.getTimeToNextUpdate) {
        var timeToNextUpdate = getTimeToNextUpdate(timestamp, step, {
          nextStep: nextStep,
          prevStep: prevStep,
          now: now,
          future: future,
          round: round
        });
        return [formattedDate, timeToNextUpdate];
      }

      return formattedDate;
    }
  }, {
    key: "formatDateForStep",
    value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
      var _this = this;

      var labels = _ref2.labels,
          labelsType = _ref2.labelsType,
          nowLabel = _ref2.nowLabel,
          now = _ref2.now,
          future = _ref2.future,
          round = _ref2.round;

      // If no step matches, then output an empty string.
      if (!step) {
        return;
      }

      if (step.format) {
        return step.format(timestamp, this.locale, {
          formatAs: function formatAs(unit, value) {
            // Mimicks `Intl.RelativeTimeFormat.format()`.
            return _this.formatValue(value, unit, {
              labels: labels,
              future: future
            });
          },
          now: now,
          future: future
        });
      } // "unit" is now called "formatAs".


      var unit = step.unit || step.formatAs;

      if (!unit) {
        throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
      } // `Intl.RelativeTimeFormat` doesn't operate in "now" units.
      // Therefore, threat "now" as a special case.


      if (unit === 'now') {
        return nowLabel;
      } // Amount in units.


      var amount = Math.abs(secondsPassed) / getStepDenominator(step); // Apply granularity to the time amount
      // (and fallback to the previous step
      //  if the first level of granularity
      //  isn't met by this amount)
      //
      // `granularity` — (advanced) Time interval value "granularity".
      // For example, it could be set to `5` for minutes to allow only 5-minute increments
      // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
      // Perhaps this feature will be removed because there seem to be no use cases
      // of it in the real world.
      //

      if (step.granularity) {
        // Recalculate the amount of seconds passed based on granularity
        amount = getRoundFunction(round)(amount / step.granularity) * step.granularity;
      }

      var valueForFormatting = -1 * Math.sign(secondsPassed) * getRoundFunction(round)(amount); // By default, this library formats a `0` in "past" mode,
      // unless `future: true` option is passed.
      // This is different to `relative-time-format`'s behavior
      // which formats a `0` in "future" mode by default, unless it's a `-0`.
      // So, convert `0` to `-0` if `future: true` option wasn't passed.
      // `=== 0` matches both `0` and `-0`.

      if (valueForFormatting === 0) {
        if (future) {
          valueForFormatting = 0;
        } else {
          valueForFormatting = -0;
        }
      }

      switch (labelsType) {
        case 'long':
        case 'short':
        case 'narrow':
          // Format the amount using `Intl.RelativeTimeFormat`.
          return this.getFormatter(labelsType).format(valueForFormatting, unit);

        default:
          // Format the amount.
          // (mimicks `Intl.RelativeTimeFormat` behavior for other time label styles)
          return this.formatValue(valueForFormatting, unit, {
            labels: labels,
            future: future
          });
      }
    }
    /**
     * Mimicks what `Intl.RelativeTimeFormat` does for additional locale styles.
     * @param  {number} value
     * @param  {string} unit
     * @param  {object} options.labels — Relative time labels.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default, but should have been `true` actually.
     * @return {string}
     */

  }, {
    key: "formatValue",
    value: function formatValue(value, unit, _ref3) {
      var labels = _ref3.labels,
          future = _ref3.future;
      return this.getFormattingRule(labels, unit, value, {
        future: future
      }).replace('{0}', this.formatNumber(Math.abs(value)));
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {object} formattingRules — Relative time labels for different units.
     * @param {string} unit - Time interval measurement unit.
     * @param {number} value - Time interval value.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default.
     * @return {string}
     * @example
     * // Returns "{0} days ago"
     * getFormattingRule(en.long, "day", -2, 'en')
     */

  }, {
    key: "getFormattingRule",
    value: function getFormattingRule(formattingRules, unit, value, _ref4) {
      var future = _ref4.future;
      // Passing the language is required in order to
      // be able to correctly classify the `value` as a number.
      this.locale;
      formattingRules = formattingRules[unit]; // Check for a special "compacted" rules case:
      // if formatting rules are the same for "past" and "future",
      // and also for all possible `value`s, then those rules are
      // stored as a single string.

      if (typeof formattingRules === 'string') {
        return formattingRules;
      } // Choose either "past" or "future" based on time `value` sign.
      // If "past" is same as "future" then they're stored as "other".
      // If there's only "other" then it's being collapsed.


      var pastOrFuture = value === 0 ? future ? 'future' : 'past' : value < 0 ? 'past' : 'future';
      var quantifierRules = formattingRules[pastOrFuture] || formattingRules; // Bundle size optimization technique.

      if (typeof quantifierRules === 'string') {
        return quantifierRules;
      } // Quantify `value`.


      var quantifier = this.getPluralRules().select(Math.abs(value)); // "other" rule is supposed to always be present.
      // If only "other" rule is present then "rules" is not an object and is a string.

      return quantifierRules[quantifier] || quantifierRules.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */

  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Returns an `Intl.RelativeTimeFormat` for a given `labelsType`.
     * @param {string} labelsType
     * @return {object} `Intl.RelativeTimeFormat` instance
     */

  }, {
    key: "getFormatter",
    value: function getFormatter(labelsType) {
      // `Intl.RelativeTimeFormat` instance creation is (hypothetically) assumed
      // a lengthy operation so the instances are cached and reused.
      return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
        style: labelsType
      }));
    }
    /**
     * Returns an `Intl.PluralRules` instance.
     * @return {object} `Intl.PluralRules` instance
     */

  }, {
    key: "getPluralRules",
    value: function getPluralRules() {
      // `Intl.PluralRules` instance creation is (hypothetically) assumed
      // a lengthy operation so the instances are cached and reused.
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
    /**
     * Gets localized labels for this type of labels.
     *
     * @param {(string|string[])} labelsType - Relative date/time labels type.
     *                                     If it's an array then all label types are tried
     *                                     until a suitable one is found.
     *
     * @returns {Object} Returns an object of shape { labelsType, labels }
     */

  }, {
    key: "getLabels",
    value: function getLabels() {
      var labelsType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      // Convert `labels` to an array.
      if (typeof labelsType === 'string') {
        labelsType = [labelsType];
      } // Supports legacy "tiny" and "mini-time" label styles.


      labelsType = labelsType.map(function (labelsType) {
        switch (labelsType) {
          case 'tiny':
          case 'mini-time':
            return 'mini';

          default:
            return labelsType;
        }
      }); // "long" labels type is the default one.
      // (it's always present for all languages)

      labelsType = labelsType.concat('long'); // Find a suitable labels type.

      var localeData = getLocaleData(this.locale);

      for (var _iterator = _createForOfIteratorHelperLoose(labelsType), _step; !(_step = _iterator()).done;) {
        var _labelsType = _step.value;

        if (localeData[_labelsType]) {
          return {
            labelsType: _labelsType,
            labels: localeData[_labelsType]
          };
        }
      }
    }
  }]);

  return TimeAgo;
}();
var defaultLocale = 'en';
/**
 * Gets default locale.
 * @return  {string} locale
 */

TimeAgo.getDefaultLocale = function () {
  return defaultLocale;
};
/**
 * Sets default locale.
 * @param  {string} locale
 */


TimeAgo.setDefaultLocale = function (locale) {
  return defaultLocale = locale;
};
/**
 * Adds locale data for a specific locale and marks the locale as default.
 * @param {Object} localeData
 */


TimeAgo.addDefaultLocale = function (localeData) {
  if (defaultLocaleHasBeenSpecified) {
    return console.error('[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.');
  }

  defaultLocaleHasBeenSpecified = true;
  TimeAgo.setDefaultLocale(localeData.locale);
  TimeAgo.addLocale(localeData);
};

var defaultLocaleHasBeenSpecified;
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */

TimeAgo.addLocale = function (localeData) {
  addLocaleData(localeData);
  RelativeTimeFormat.addLocale(localeData);
};
/**
 * (legacy alias)
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 * @deprecated
 */


TimeAgo.locale = TimeAgo.addLocale;
/**
 * Adds custom labels to locale data.
 * @param {string} locale
 * @param {string} name
 * @param {object} labels
 */

TimeAgo.addLabels = function (locale, name, labels) {
  var localeData = getLocaleData(locale);

  if (!localeData) {
    addLocaleData({
      locale: locale
    });
    localeData = getLocaleData(locale); // throw new Error(`[javascript-time-ago] No data for locale "${locale}"`)
  }

  localeData[name] = labels;
}; // Normalizes `.format()` `time` argument.


function getTimestamp(input) {
  if (input.constructor === Date || isMockedDate(input)) {
    return input.getTime();
  }

  if (typeof input === 'number') {
    return input;
  } // For some weird reason istanbul doesn't see this `throw` covered.

  /* istanbul ignore next */


  throw new Error("Unsupported relative time formatter input: ".concat(_typeof(input), ", ").concat(input));
} // During testing via some testing libraries `Date`s aren't actually `Date`s.
// https://github.com/catamphetamine/javascript-time-ago/issues/22


function isMockedDate(object) {
  return _typeof(object) === 'object' && typeof object.getTime === 'function';
} // Get available time interval measurement units.


function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
  // Get all time interval measurement units that're available
  // in locale data for a given time labels style.
  var units = Object.keys(labels); // `now` unit is handled separately and is shipped in its own `now.json` file.
  // `now.json` isn't present for all locales, so it could be substituted with
  // ".second.current".
  // Add `now` unit if it's available in locale data.

  if (nowLabel) {
    units.push('now');
  } // If only a specific set of available time measurement units can be used
  // then only those units are allowed (if they're present in locale data).


  if (allowedUnits) {
    units = allowedUnits.filter(function (unit) {
      return unit === 'now' || units.indexOf(unit) >= 0;
    });
  }

  return units;
}

function getNowLabel(labels, nowLabels, longLabels, future) {
  var nowLabel = labels.now || nowLabels && nowLabels.now; // Specific "now" message form extended locale data (if present).

  if (nowLabel) {
    // Bundle size optimization technique.
    if (typeof nowLabel === 'string') {
      return nowLabel;
    } // Not handling `value === 0` as `localeData.now.current` here
    // because it wouldn't make sense: "now" is a moment,
    // so one can't possibly differentiate between a
    // "previous" moment, a "current" moment and a "next moment".
    // It can only be differentiated between "past" and "future".


    if (future) {
      return nowLabel.future;
    } else {
      return nowLabel.past;
    }
  } // Use ".second.current" as "now" message.


  if (longLabels && longLabels.second && longLabels.second.current) {
    return longLabels.second.current;
  }
}

function isStyle(variable) {
  return typeof variable === 'string' || isStyleObject(variable);
}

var en = {
	"locale": "en",
	"long": {
		"year": {
			"previous": "last year",
			"current": "this year",
			"next": "next year",
			"past": {
				"one": "{0} year ago",
				"other": "{0} years ago"
			},
			"future": {
				"one": "in {0} year",
				"other": "in {0} years"
			}
		},
		"quarter": {
			"previous": "last quarter",
			"current": "this quarter",
			"next": "next quarter",
			"past": {
				"one": "{0} quarter ago",
				"other": "{0} quarters ago"
			},
			"future": {
				"one": "in {0} quarter",
				"other": "in {0} quarters"
			}
		},
		"month": {
			"previous": "last month",
			"current": "this month",
			"next": "next month",
			"past": {
				"one": "{0} month ago",
				"other": "{0} months ago"
			},
			"future": {
				"one": "in {0} month",
				"other": "in {0} months"
			}
		},
		"week": {
			"previous": "last week",
			"current": "this week",
			"next": "next week",
			"past": {
				"one": "{0} week ago",
				"other": "{0} weeks ago"
			},
			"future": {
				"one": "in {0} week",
				"other": "in {0} weeks"
			}
		},
		"day": {
			"previous": "yesterday",
			"current": "today",
			"next": "tomorrow",
			"past": {
				"one": "{0} day ago",
				"other": "{0} days ago"
			},
			"future": {
				"one": "in {0} day",
				"other": "in {0} days"
			}
		},
		"hour": {
			"current": "this hour",
			"past": {
				"one": "{0} hour ago",
				"other": "{0} hours ago"
			},
			"future": {
				"one": "in {0} hour",
				"other": "in {0} hours"
			}
		},
		"minute": {
			"current": "this minute",
			"past": {
				"one": "{0} minute ago",
				"other": "{0} minutes ago"
			},
			"future": {
				"one": "in {0} minute",
				"other": "in {0} minutes"
			}
		},
		"second": {
			"current": "now",
			"past": {
				"one": "{0} second ago",
				"other": "{0} seconds ago"
			},
			"future": {
				"one": "in {0} second",
				"other": "in {0} seconds"
			}
		}
	},
	"short": {
		"year": {
			"previous": "last yr.",
			"current": "this yr.",
			"next": "next yr.",
			"past": "{0} yr. ago",
			"future": "in {0} yr."
		},
		"quarter": {
			"previous": "last qtr.",
			"current": "this qtr.",
			"next": "next qtr.",
			"past": {
				"one": "{0} qtr. ago",
				"other": "{0} qtrs. ago"
			},
			"future": {
				"one": "in {0} qtr.",
				"other": "in {0} qtrs."
			}
		},
		"month": {
			"previous": "last mo.",
			"current": "this mo.",
			"next": "next mo.",
			"past": "{0} mo. ago",
			"future": "in {0} mo."
		},
		"week": {
			"previous": "last wk.",
			"current": "this wk.",
			"next": "next wk.",
			"past": "{0} wk. ago",
			"future": "in {0} wk."
		},
		"day": {
			"previous": "yesterday",
			"current": "today",
			"next": "tomorrow",
			"past": {
				"one": "{0} day ago",
				"other": "{0} days ago"
			},
			"future": {
				"one": "in {0} day",
				"other": "in {0} days"
			}
		},
		"hour": {
			"current": "this hour",
			"past": "{0} hr. ago",
			"future": "in {0} hr."
		},
		"minute": {
			"current": "this minute",
			"past": "{0} min. ago",
			"future": "in {0} min."
		},
		"second": {
			"current": "now",
			"past": "{0} sec. ago",
			"future": "in {0} sec."
		}
	},
	"narrow": {
		"year": {
			"previous": "last yr.",
			"current": "this yr.",
			"next": "next yr.",
			"past": "{0}y ago",
			"future": "in {0}y"
		},
		"quarter": {
			"previous": "last qtr.",
			"current": "this qtr.",
			"next": "next qtr.",
			"past": "{0}q ago",
			"future": "in {0}q"
		},
		"month": {
			"previous": "last mo.",
			"current": "this mo.",
			"next": "next mo.",
			"past": "{0}mo ago",
			"future": "in {0}mo"
		},
		"week": {
			"previous": "last wk.",
			"current": "this wk.",
			"next": "next wk.",
			"past": "{0}w ago",
			"future": "in {0}w"
		},
		"day": {
			"previous": "yesterday",
			"current": "today",
			"next": "tomorrow",
			"past": "{0}d ago",
			"future": "in {0}d"
		},
		"hour": {
			"current": "this hour",
			"past": "{0}h ago",
			"future": "in {0}h"
		},
		"minute": {
			"current": "this minute",
			"past": "{0}m ago",
			"future": "in {0}m"
		},
		"second": {
			"current": "now",
			"past": "{0}s ago",
			"future": "in {0}s"
		}
	},
	"now": {
		"now": {
			"current": "now",
			"future": "in a moment",
			"past": "just now"
		}
	},
	"mini": {
		"year": "{0}yr",
		"month": "{0}mo",
		"week": "{0}wk",
		"day": "{0}d",
		"hour": "{0}h",
		"minute": "{0}m",
		"second": "{0}s",
		"now": "now"
	},
	"short-time": {
		"year": "{0} yr.",
		"month": "{0} mo.",
		"week": "{0} wk.",
		"day": {
			"one": "{0} day",
			"other": "{0} days"
		},
		"hour": "{0} hr.",
		"minute": "{0} min.",
		"second": "{0} sec."
	},
	"long-time": {
		"year": {
			"one": "{0} year",
			"other": "{0} years"
		},
		"month": {
			"one": "{0} month",
			"other": "{0} months"
		},
		"week": {
			"one": "{0} week",
			"other": "{0} weeks"
		},
		"day": {
			"one": "{0} day",
			"other": "{0} days"
		},
		"hour": {
			"one": "{0} hour",
			"other": "{0} hours"
		},
		"minute": {
			"one": "{0} minute",
			"other": "{0} minutes"
		},
		"second": {
			"one": "{0} second",
			"other": "{0} seconds"
		}
	}
};

export { TimeAgo as T, dayjs as d, en as e, parse as p, timezone$1 as t, utc$1 as u };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yLmpzIiwic291cmNlcyI6WyIuLi8uLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3F1YXJ0ZXJPZlllYXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF5anMvZGF5anMubWluLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL3R5cGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL3V0aWxzL2RheWpzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL3RpbWV6b25lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL3Jlc3VsdHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vdXRpbHMvcGF0dGVybi5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jYWxjdWxhdGlvbi95ZWFycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL2NvbnN0YW50cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRXaXRoaW5Gb3JtYXRQYXJzZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9wYXJzZXJzL0VOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2xvY2FsZXMvZW4vcGFyc2Vycy9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL3BhcnNlcnMvRU5Nb250aE5hbWVQYXJzZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9wYXJzZXJzL0VOWWVhck1vbnRoRGF5UGFyc2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2xvY2FsZXMvZW4vcGFyc2Vycy9FTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lRXhwcmVzc2lvblBhcnNlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS91dGlscy90aW1ldW5pdHMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9wYXJzZXJzL0VOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb21tb24vYWJzdHJhY3RSZWZpbmVycy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb21tb24vcmVmaW5lcnMvQWJzdHJhY3RNZXJnZURhdGVSYW5nZVJlZmluZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlRGF0ZVJhbmdlUmVmaW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jYWxjdWxhdGlvbi9tZXJnaW5nQ2FsY3VsYXRpb24uanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9yZWZpbmVycy9FTk1lcmdlRGF0ZVRpbWVSZWZpbmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb21tb24vcmVmaW5lcnMvRXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2NvbW1vbi9yZWZpbmVycy9Gb3J3YXJkRGF0ZVJlZmluZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vY29tbW9uL3JlZmluZXJzL1VubGlrZWx5Rm9ybWF0RmlsdGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2NvbW1vbi9wYXJzZXJzL0lTT0Zvcm1hdFBhcnNlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb21tb24vcmVmaW5lcnMvTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb25maWd1cmF0aW9ucy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9jb21tb24vY2FzdWFsUmVmZXJlbmNlcy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2xvY2FsZXMvZW4vcGFyc2Vycy9FTkNhc3VhbFRpbWVQYXJzZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vY29tbW9uL2NhbGN1bGF0aW9uL3dlZWtkYXlzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2xvY2FsZXMvZW4vcGFyc2Vycy9FTldlZWtkYXlQYXJzZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9wYXJzZXJzL0VOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2NvbW1vbi9wYXJzZXJzL1NsYXNoRGF0ZUZvcm1hdFBhcnNlci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2xvY2FsZXMvZW4vcmVmaW5lcnMvRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL3JlZmluZXJzL0VOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9yZWZpbmVycy9FTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lci5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXIuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvY2hyb25vLW5vZGUvZGlzdC9lc20vbG9jYWxlcy9lbi9jb25maWd1cmF0aW9uLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2Nocm9uby5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9jaHJvbm8tbm9kZS9kaXN0L2VzbS9sb2NhbGVzL2VuL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nocm9uby1ub2RlL2Rpc3QvZXNtL2luZGV4LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2RheWpzL3BsdWdpbi91dGMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvZGF5anMvcGx1Z2luL3RpbWV6b25lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbGF0aXZlLXRpbWUtZm9ybWF0L21vZHVsZXMvTG9jYWxlRGF0YVN0b3JlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbGF0aXZlLXRpbWUtZm9ybWF0L21vZHVsZXMvcmVzb2x2ZUxvY2FsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZWxhdGl2ZS10aW1lLWZvcm1hdC9tb2R1bGVzL1BsdXJhbFJ1bGVGdW5jdGlvbnMuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvcmVsYXRpdmUtdGltZS1mb3JtYXQvbW9kdWxlcy9nZXRQbHVyYWxSdWxlc0xvY2FsZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9yZWxhdGl2ZS10aW1lLWZvcm1hdC9tb2R1bGVzL1BsdXJhbFJ1bGVzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL3JlbGF0aXZlLXRpbWUtZm9ybWF0L21vZHVsZXMvUmVsYXRpdmVUaW1lRm9ybWF0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9jYWNoZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qYXZhc2NyaXB0LXRpbWUtYWdvL21vZHVsZXMvbG9jYWxlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9pc1N0eWxlT2JqZWN0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdGVwcy91bml0cy5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qYXZhc2NyaXB0LXRpbWUtYWdvL21vZHVsZXMvc3RlcHMvZ2V0U3RlcERlbm9taW5hdG9yLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9yb3VuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qYXZhc2NyaXB0LXRpbWUtYWdvL21vZHVsZXMvc3RlcHMvZ2V0U3RlcE1pblRpbWUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0ZXBzL2dldFN0ZXAuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0ZXBzL2dldFRpbWVUb05leHRVcGRhdGVGb3JVbml0LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdGVwcy9nZXRUaW1lVG9OZXh0VXBkYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9Mb2NhbGVEYXRhU3RvcmUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0ZXBzL3JvdW5kLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdHlsZS9yb3VuZC5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qYXZhc2NyaXB0LXRpbWUtYWdvL21vZHVsZXMvc3R5bGUvcm91bmRNaW51dGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0ZXBzL2FwcHJveGltYXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdHlsZS9hcHByb3hpbWF0ZS5qcyIsIi4uLy4uL25vZGVfbW9kdWxlcy9qYXZhc2NyaXB0LXRpbWUtYWdvL21vZHVsZXMvc3R5bGUvYXBwcm94aW1hdGVUaW1lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdGVwcy9oZWxwZXJzLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdHlsZS90d2l0dGVyLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdHlsZS90d2l0dGVyTm93LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdHlsZS90d2l0dGVyTWludXRlLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdHlsZS90d2l0dGVyTWludXRlTm93LmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9zdHlsZS90d2l0dGVyRmlyc3RNaW51dGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0eWxlL21pbmkuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0eWxlL21pbmlOb3cuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0eWxlL21pbmlNaW51dGUuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0eWxlL21pbmlNaW51dGVOb3cuanMiLCIuLi8uLi9ub2RlX21vZHVsZXMvamF2YXNjcmlwdC10aW1lLWFnby9tb2R1bGVzL3N0eWxlL2dldFN0eWxlQnlOYW1lLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbW9kdWxlcy9UaW1lQWdvLmpzIiwiLi4vLi4vbm9kZV9tb2R1bGVzL2phdmFzY3JpcHQtdGltZS1hZ28vbG9jYWxlL2VuLmpzb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiIWZ1bmN0aW9uKHQsbil7XCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMmJlwidW5kZWZpbmVkXCIhPXR5cGVvZiBtb2R1bGU/bW9kdWxlLmV4cG9ydHM9bigpOlwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZD9kZWZpbmUobik6KHQ9XCJ1bmRlZmluZWRcIiE9dHlwZW9mIGdsb2JhbFRoaXM/Z2xvYmFsVGhpczp0fHxzZWxmKS5kYXlqc19wbHVnaW5fcXVhcnRlck9mWWVhcj1uKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9XCJtb250aFwiLG49XCJxdWFydGVyXCI7cmV0dXJuIGZ1bmN0aW9uKGUsaSl7dmFyIHI9aS5wcm90b3R5cGU7ci5xdWFydGVyPWZ1bmN0aW9uKHQpe3JldHVybiB0aGlzLiR1dGlscygpLnUodCk/TWF0aC5jZWlsKCh0aGlzLm1vbnRoKCkrMSkvMyk6dGhpcy5tb250aCh0aGlzLm1vbnRoKCklMyszKih0LTEpKX07dmFyIHM9ci5hZGQ7ci5hZGQ9ZnVuY3Rpb24oZSxpKXtyZXR1cm4gZT1OdW1iZXIoZSksdGhpcy4kdXRpbHMoKS5wKGkpPT09bj90aGlzLmFkZCgzKmUsdCk6cy5iaW5kKHRoaXMpKGUsaSl9O3ZhciB1PXIuc3RhcnRPZjtyLnN0YXJ0T2Y9ZnVuY3Rpb24oZSxpKXt2YXIgcj10aGlzLiR1dGlscygpLHM9ISFyLnUoaSl8fGk7aWYoci5wKGUpPT09bil7dmFyIG89dGhpcy5xdWFydGVyKCktMTtyZXR1cm4gcz90aGlzLm1vbnRoKDMqbykuc3RhcnRPZih0KS5zdGFydE9mKFwiZGF5XCIpOnRoaXMubW9udGgoMypvKzIpLmVuZE9mKHQpLmVuZE9mKFwiZGF5XCIpfXJldHVybiB1LmJpbmQodGhpcykoZSxpKX19fSkpOyIsIiFmdW5jdGlvbih0LGUpe1wib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzJiZcInVuZGVmaW5lZFwiIT10eXBlb2YgbW9kdWxlP21vZHVsZS5leHBvcnRzPWUoKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKGUpOih0PVwidW5kZWZpbmVkXCIhPXR5cGVvZiBnbG9iYWxUaGlzP2dsb2JhbFRoaXM6dHx8c2VsZikuZGF5anM9ZSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PTFlMyxlPTZlNCxuPTM2ZTUscj1cIm1pbGxpc2Vjb25kXCIsaT1cInNlY29uZFwiLHM9XCJtaW51dGVcIix1PVwiaG91clwiLGE9XCJkYXlcIixvPVwid2Vla1wiLGM9XCJtb250aFwiLGY9XCJxdWFydGVyXCIsaD1cInllYXJcIixkPVwiZGF0ZVwiLGw9XCJJbnZhbGlkIERhdGVcIiwkPS9eKFxcZHs0fSlbLS9dPyhcXGR7MSwyfSk/Wy0vXT8oXFxkezAsMn0pW1R0XFxzXSooXFxkezEsMn0pPzo/KFxcZHsxLDJ9KT86PyhcXGR7MSwyfSk/Wy46XT8oXFxkKyk/JC8seT0vXFxbKFteXFxdXSspXXxZezEsNH18TXsxLDR9fER7MSwyfXxkezEsNH18SHsxLDJ9fGh7MSwyfXxhfEF8bXsxLDJ9fHN7MSwyfXxaezEsMn18U1NTL2csTT17bmFtZTpcImVuXCIsd2Vla2RheXM6XCJTdW5kYXlfTW9uZGF5X1R1ZXNkYXlfV2VkbmVzZGF5X1RodXJzZGF5X0ZyaWRheV9TYXR1cmRheVwiLnNwbGl0KFwiX1wiKSxtb250aHM6XCJKYW51YXJ5X0ZlYnJ1YXJ5X01hcmNoX0FwcmlsX01heV9KdW5lX0p1bHlfQXVndXN0X1NlcHRlbWJlcl9PY3RvYmVyX05vdmVtYmVyX0RlY2VtYmVyXCIuc3BsaXQoXCJfXCIpLG9yZGluYWw6ZnVuY3Rpb24odCl7dmFyIGU9W1widGhcIixcInN0XCIsXCJuZFwiLFwicmRcIl0sbj10JTEwMDtyZXR1cm5cIltcIit0KyhlWyhuLTIwKSUxMF18fGVbbl18fGVbMF0pK1wiXVwifX0sbT1mdW5jdGlvbih0LGUsbil7dmFyIHI9U3RyaW5nKHQpO3JldHVybiFyfHxyLmxlbmd0aD49ZT90OlwiXCIrQXJyYXkoZSsxLXIubGVuZ3RoKS5qb2luKG4pK3R9LHY9e3M6bSx6OmZ1bmN0aW9uKHQpe3ZhciBlPS10LnV0Y09mZnNldCgpLG49TWF0aC5hYnMoZSkscj1NYXRoLmZsb29yKG4vNjApLGk9biU2MDtyZXR1cm4oZTw9MD9cIitcIjpcIi1cIikrbShyLDIsXCIwXCIpK1wiOlwiK20oaSwyLFwiMFwiKX0sbTpmdW5jdGlvbiB0KGUsbil7aWYoZS5kYXRlKCk8bi5kYXRlKCkpcmV0dXJuLXQobixlKTt2YXIgcj0xMioobi55ZWFyKCktZS55ZWFyKCkpKyhuLm1vbnRoKCktZS5tb250aCgpKSxpPWUuY2xvbmUoKS5hZGQocixjKSxzPW4taTwwLHU9ZS5jbG9uZSgpLmFkZChyKyhzPy0xOjEpLGMpO3JldHVybisoLShyKyhuLWkpLyhzP2ktdTp1LWkpKXx8MCl9LGE6ZnVuY3Rpb24odCl7cmV0dXJuIHQ8MD9NYXRoLmNlaWwodCl8fDA6TWF0aC5mbG9vcih0KX0scDpmdW5jdGlvbih0KXtyZXR1cm57TTpjLHk6aCx3Om8sZDphLEQ6ZCxoOnUsbTpzLHM6aSxtczpyLFE6Zn1bdF18fFN0cmluZyh0fHxcIlwiKS50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL3MkLyxcIlwiKX0sdTpmdW5jdGlvbih0KXtyZXR1cm4gdm9pZCAwPT09dH19LGc9XCJlblwiLEQ9e307RFtnXT1NO3ZhciBwPVwiJGlzRGF5anNPYmplY3RcIixTPWZ1bmN0aW9uKHQpe3JldHVybiB0IGluc3RhbmNlb2YgX3x8ISghdHx8IXRbcF0pfSx3PWZ1bmN0aW9uIHQoZSxuLHIpe3ZhciBpO2lmKCFlKXJldHVybiBnO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBlKXt2YXIgcz1lLnRvTG93ZXJDYXNlKCk7RFtzXSYmKGk9cyksbiYmKERbc109bixpPXMpO3ZhciB1PWUuc3BsaXQoXCItXCIpO2lmKCFpJiZ1Lmxlbmd0aD4xKXJldHVybiB0KHVbMF0pfWVsc2V7dmFyIGE9ZS5uYW1lO0RbYV09ZSxpPWF9cmV0dXJuIXImJmkmJihnPWkpLGl8fCFyJiZnfSxPPWZ1bmN0aW9uKHQsZSl7aWYoUyh0KSlyZXR1cm4gdC5jbG9uZSgpO3ZhciBuPVwib2JqZWN0XCI9PXR5cGVvZiBlP2U6e307cmV0dXJuIG4uZGF0ZT10LG4uYXJncz1hcmd1bWVudHMsbmV3IF8obil9LGI9djtiLmw9dyxiLmk9UyxiLnc9ZnVuY3Rpb24odCxlKXtyZXR1cm4gTyh0LHtsb2NhbGU6ZS4kTCx1dGM6ZS4kdSx4OmUuJHgsJG9mZnNldDplLiRvZmZzZXR9KX07dmFyIF89ZnVuY3Rpb24oKXtmdW5jdGlvbiBNKHQpe3RoaXMuJEw9dyh0LmxvY2FsZSxudWxsLCEwKSx0aGlzLnBhcnNlKHQpLHRoaXMuJHg9dGhpcy4keHx8dC54fHx7fSx0aGlzW3BdPSEwfXZhciBtPU0ucHJvdG90eXBlO3JldHVybiBtLnBhcnNlPWZ1bmN0aW9uKHQpe3RoaXMuJGQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5kYXRlLG49dC51dGM7aWYobnVsbD09PWUpcmV0dXJuIG5ldyBEYXRlKE5hTik7aWYoYi51KGUpKXJldHVybiBuZXcgRGF0ZTtpZihlIGluc3RhbmNlb2YgRGF0ZSlyZXR1cm4gbmV3IERhdGUoZSk7aWYoXCJzdHJpbmdcIj09dHlwZW9mIGUmJiEvWiQvaS50ZXN0KGUpKXt2YXIgcj1lLm1hdGNoKCQpO2lmKHIpe3ZhciBpPXJbMl0tMXx8MCxzPShyWzddfHxcIjBcIikuc3Vic3RyaW5nKDAsMyk7cmV0dXJuIG4/bmV3IERhdGUoRGF0ZS5VVEMoclsxXSxpLHJbM118fDEscls0XXx8MCxyWzVdfHwwLHJbNl18fDAscykpOm5ldyBEYXRlKHJbMV0saSxyWzNdfHwxLHJbNF18fDAscls1XXx8MCxyWzZdfHwwLHMpfX1yZXR1cm4gbmV3IERhdGUoZSl9KHQpLHRoaXMuaW5pdCgpfSxtLmluaXQ9ZnVuY3Rpb24oKXt2YXIgdD10aGlzLiRkO3RoaXMuJHk9dC5nZXRGdWxsWWVhcigpLHRoaXMuJE09dC5nZXRNb250aCgpLHRoaXMuJEQ9dC5nZXREYXRlKCksdGhpcy4kVz10LmdldERheSgpLHRoaXMuJEg9dC5nZXRIb3VycygpLHRoaXMuJG09dC5nZXRNaW51dGVzKCksdGhpcy4kcz10LmdldFNlY29uZHMoKSx0aGlzLiRtcz10LmdldE1pbGxpc2Vjb25kcygpfSxtLiR1dGlscz1mdW5jdGlvbigpe3JldHVybiBifSxtLmlzVmFsaWQ9ZnVuY3Rpb24oKXtyZXR1cm4hKHRoaXMuJGQudG9TdHJpbmcoKT09PWwpfSxtLmlzU2FtZT1mdW5jdGlvbih0LGUpe3ZhciBuPU8odCk7cmV0dXJuIHRoaXMuc3RhcnRPZihlKTw9biYmbjw9dGhpcy5lbmRPZihlKX0sbS5pc0FmdGVyPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIE8odCk8dGhpcy5zdGFydE9mKGUpfSxtLmlzQmVmb3JlPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHRoaXMuZW5kT2YoZSk8Tyh0KX0sbS4kZz1mdW5jdGlvbih0LGUsbil7cmV0dXJuIGIudSh0KT90aGlzW2VdOnRoaXMuc2V0KG4sdCl9LG0udW5peD1mdW5jdGlvbigpe3JldHVybiBNYXRoLmZsb29yKHRoaXMudmFsdWVPZigpLzFlMyl9LG0udmFsdWVPZj1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLmdldFRpbWUoKX0sbS5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7dmFyIG49dGhpcyxyPSEhYi51KGUpfHxlLGY9Yi5wKHQpLGw9ZnVuY3Rpb24odCxlKXt2YXIgaT1iLncobi4kdT9EYXRlLlVUQyhuLiR5LGUsdCk6bmV3IERhdGUobi4keSxlLHQpLG4pO3JldHVybiByP2k6aS5lbmRPZihhKX0sJD1mdW5jdGlvbih0LGUpe3JldHVybiBiLncobi50b0RhdGUoKVt0XS5hcHBseShuLnRvRGF0ZShcInNcIiksKHI/WzAsMCwwLDBdOlsyMyw1OSw1OSw5OTldKS5zbGljZShlKSksbil9LHk9dGhpcy4kVyxNPXRoaXMuJE0sbT10aGlzLiRELHY9XCJzZXRcIisodGhpcy4kdT9cIlVUQ1wiOlwiXCIpO3N3aXRjaChmKXtjYXNlIGg6cmV0dXJuIHI/bCgxLDApOmwoMzEsMTEpO2Nhc2UgYzpyZXR1cm4gcj9sKDEsTSk6bCgwLE0rMSk7Y2FzZSBvOnZhciBnPXRoaXMuJGxvY2FsZSgpLndlZWtTdGFydHx8MCxEPSh5PGc/eSs3OnkpLWc7cmV0dXJuIGwocj9tLUQ6bSsoNi1EKSxNKTtjYXNlIGE6Y2FzZSBkOnJldHVybiAkKHYrXCJIb3Vyc1wiLDApO2Nhc2UgdTpyZXR1cm4gJCh2K1wiTWludXRlc1wiLDEpO2Nhc2UgczpyZXR1cm4gJCh2K1wiU2Vjb25kc1wiLDIpO2Nhc2UgaTpyZXR1cm4gJCh2K1wiTWlsbGlzZWNvbmRzXCIsMyk7ZGVmYXVsdDpyZXR1cm4gdGhpcy5jbG9uZSgpfX0sbS5lbmRPZj1mdW5jdGlvbih0KXtyZXR1cm4gdGhpcy5zdGFydE9mKHQsITEpfSxtLiRzZXQ9ZnVuY3Rpb24odCxlKXt2YXIgbixvPWIucCh0KSxmPVwic2V0XCIrKHRoaXMuJHU/XCJVVENcIjpcIlwiKSxsPShuPXt9LG5bYV09ZitcIkRhdGVcIixuW2RdPWYrXCJEYXRlXCIsbltjXT1mK1wiTW9udGhcIixuW2hdPWYrXCJGdWxsWWVhclwiLG5bdV09ZitcIkhvdXJzXCIsbltzXT1mK1wiTWludXRlc1wiLG5baV09ZitcIlNlY29uZHNcIixuW3JdPWYrXCJNaWxsaXNlY29uZHNcIixuKVtvXSwkPW89PT1hP3RoaXMuJEQrKGUtdGhpcy4kVyk6ZTtpZihvPT09Y3x8bz09PWgpe3ZhciB5PXRoaXMuY2xvbmUoKS5zZXQoZCwxKTt5LiRkW2xdKCQpLHkuaW5pdCgpLHRoaXMuJGQ9eS5zZXQoZCxNYXRoLm1pbih0aGlzLiRELHkuZGF5c0luTW9udGgoKSkpLiRkfWVsc2UgbCYmdGhpcy4kZFtsXSgkKTtyZXR1cm4gdGhpcy5pbml0KCksdGhpc30sbS5zZXQ9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5jbG9uZSgpLiRzZXQodCxlKX0sbS5nZXQ9ZnVuY3Rpb24odCl7cmV0dXJuIHRoaXNbYi5wKHQpXSgpfSxtLmFkZD1mdW5jdGlvbihyLGYpe3ZhciBkLGw9dGhpcztyPU51bWJlcihyKTt2YXIgJD1iLnAoZikseT1mdW5jdGlvbih0KXt2YXIgZT1PKGwpO3JldHVybiBiLncoZS5kYXRlKGUuZGF0ZSgpK01hdGgucm91bmQodCpyKSksbCl9O2lmKCQ9PT1jKXJldHVybiB0aGlzLnNldChjLHRoaXMuJE0rcik7aWYoJD09PWgpcmV0dXJuIHRoaXMuc2V0KGgsdGhpcy4keStyKTtpZigkPT09YSlyZXR1cm4geSgxKTtpZigkPT09bylyZXR1cm4geSg3KTt2YXIgTT0oZD17fSxkW3NdPWUsZFt1XT1uLGRbaV09dCxkKVskXXx8MSxtPXRoaXMuJGQuZ2V0VGltZSgpK3IqTTtyZXR1cm4gYi53KG0sdGhpcyl9LG0uc3VidHJhY3Q9ZnVuY3Rpb24odCxlKXtyZXR1cm4gdGhpcy5hZGQoLTEqdCxlKX0sbS5mb3JtYXQ9ZnVuY3Rpb24odCl7dmFyIGU9dGhpcyxuPXRoaXMuJGxvY2FsZSgpO2lmKCF0aGlzLmlzVmFsaWQoKSlyZXR1cm4gbi5pbnZhbGlkRGF0ZXx8bDt2YXIgcj10fHxcIllZWVktTU0tRERUSEg6bW06c3NaXCIsaT1iLnoodGhpcykscz10aGlzLiRILHU9dGhpcy4kbSxhPXRoaXMuJE0sbz1uLndlZWtkYXlzLGM9bi5tb250aHMsZj1uLm1lcmlkaWVtLGg9ZnVuY3Rpb24odCxuLGkscyl7cmV0dXJuIHQmJih0W25dfHx0KGUscikpfHxpW25dLnNsaWNlKDAscyl9LGQ9ZnVuY3Rpb24odCl7cmV0dXJuIGIucyhzJTEyfHwxMix0LFwiMFwiKX0sJD1mfHxmdW5jdGlvbih0LGUsbil7dmFyIHI9dDwxMj9cIkFNXCI6XCJQTVwiO3JldHVybiBuP3IudG9Mb3dlckNhc2UoKTpyfTtyZXR1cm4gci5yZXBsYWNlKHksKGZ1bmN0aW9uKHQscil7cmV0dXJuIHJ8fGZ1bmN0aW9uKHQpe3N3aXRjaCh0KXtjYXNlXCJZWVwiOnJldHVybiBTdHJpbmcoZS4keSkuc2xpY2UoLTIpO2Nhc2VcIllZWVlcIjpyZXR1cm4gYi5zKGUuJHksNCxcIjBcIik7Y2FzZVwiTVwiOnJldHVybiBhKzE7Y2FzZVwiTU1cIjpyZXR1cm4gYi5zKGErMSwyLFwiMFwiKTtjYXNlXCJNTU1cIjpyZXR1cm4gaChuLm1vbnRoc1Nob3J0LGEsYywzKTtjYXNlXCJNTU1NXCI6cmV0dXJuIGgoYyxhKTtjYXNlXCJEXCI6cmV0dXJuIGUuJEQ7Y2FzZVwiRERcIjpyZXR1cm4gYi5zKGUuJEQsMixcIjBcIik7Y2FzZVwiZFwiOnJldHVybiBTdHJpbmcoZS4kVyk7Y2FzZVwiZGRcIjpyZXR1cm4gaChuLndlZWtkYXlzTWluLGUuJFcsbywyKTtjYXNlXCJkZGRcIjpyZXR1cm4gaChuLndlZWtkYXlzU2hvcnQsZS4kVyxvLDMpO2Nhc2VcImRkZGRcIjpyZXR1cm4gb1tlLiRXXTtjYXNlXCJIXCI6cmV0dXJuIFN0cmluZyhzKTtjYXNlXCJISFwiOnJldHVybiBiLnMocywyLFwiMFwiKTtjYXNlXCJoXCI6cmV0dXJuIGQoMSk7Y2FzZVwiaGhcIjpyZXR1cm4gZCgyKTtjYXNlXCJhXCI6cmV0dXJuICQocyx1LCEwKTtjYXNlXCJBXCI6cmV0dXJuICQocyx1LCExKTtjYXNlXCJtXCI6cmV0dXJuIFN0cmluZyh1KTtjYXNlXCJtbVwiOnJldHVybiBiLnModSwyLFwiMFwiKTtjYXNlXCJzXCI6cmV0dXJuIFN0cmluZyhlLiRzKTtjYXNlXCJzc1wiOnJldHVybiBiLnMoZS4kcywyLFwiMFwiKTtjYXNlXCJTU1NcIjpyZXR1cm4gYi5zKGUuJG1zLDMsXCIwXCIpO2Nhc2VcIlpcIjpyZXR1cm4gaX1yZXR1cm4gbnVsbH0odCl8fGkucmVwbGFjZShcIjpcIixcIlwiKX0pKX0sbS51dGNPZmZzZXQ9ZnVuY3Rpb24oKXtyZXR1cm4gMTUqLU1hdGgucm91bmQodGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpLzE1KX0sbS5kaWZmPWZ1bmN0aW9uKHIsZCxsKXt2YXIgJCx5PXRoaXMsTT1iLnAoZCksbT1PKHIpLHY9KG0udXRjT2Zmc2V0KCktdGhpcy51dGNPZmZzZXQoKSkqZSxnPXRoaXMtbSxEPWZ1bmN0aW9uKCl7cmV0dXJuIGIubSh5LG0pfTtzd2l0Y2goTSl7Y2FzZSBoOiQ9RCgpLzEyO2JyZWFrO2Nhc2UgYzokPUQoKTticmVhaztjYXNlIGY6JD1EKCkvMzticmVhaztjYXNlIG86JD0oZy12KS82MDQ4ZTU7YnJlYWs7Y2FzZSBhOiQ9KGctdikvODY0ZTU7YnJlYWs7Y2FzZSB1OiQ9Zy9uO2JyZWFrO2Nhc2UgczokPWcvZTticmVhaztjYXNlIGk6JD1nL3Q7YnJlYWs7ZGVmYXVsdDokPWd9cmV0dXJuIGw/JDpiLmEoJCl9LG0uZGF5c0luTW9udGg9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy5lbmRPZihjKS4kRH0sbS4kbG9jYWxlPWZ1bmN0aW9uKCl7cmV0dXJuIERbdGhpcy4kTF19LG0ubG9jYWxlPWZ1bmN0aW9uKHQsZSl7aWYoIXQpcmV0dXJuIHRoaXMuJEw7dmFyIG49dGhpcy5jbG9uZSgpLHI9dyh0LGUsITApO3JldHVybiByJiYobi4kTD1yKSxufSxtLmNsb25lPWZ1bmN0aW9uKCl7cmV0dXJuIGIudyh0aGlzLiRkLHRoaXMpfSxtLnRvRGF0ZT1mdW5jdGlvbigpe3JldHVybiBuZXcgRGF0ZSh0aGlzLnZhbHVlT2YoKSl9LG0udG9KU09OPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuaXNWYWxpZCgpP3RoaXMudG9JU09TdHJpbmcoKTpudWxsfSxtLnRvSVNPU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuJGQudG9JU09TdHJpbmcoKX0sbS50b1N0cmluZz1mdW5jdGlvbigpe3JldHVybiB0aGlzLiRkLnRvVVRDU3RyaW5nKCl9LE19KCksaz1fLnByb3RvdHlwZTtyZXR1cm4gTy5wcm90b3R5cGU9ayxbW1wiJG1zXCIscl0sW1wiJHNcIixpXSxbXCIkbVwiLHNdLFtcIiRIXCIsdV0sW1wiJFdcIixhXSxbXCIkTVwiLGNdLFtcIiR5XCIsaF0sW1wiJERcIixkXV0uZm9yRWFjaCgoZnVuY3Rpb24odCl7a1t0WzFdXT1mdW5jdGlvbihlKXtyZXR1cm4gdGhpcy4kZyhlLHRbMF0sdFsxXSl9fSkpLE8uZXh0ZW5kPWZ1bmN0aW9uKHQsZSl7cmV0dXJuIHQuJGl8fCh0KGUsXyxPKSx0LiRpPSEwKSxPfSxPLmxvY2FsZT13LE8uaXNEYXlqcz1TLE8udW5peD1mdW5jdGlvbih0KXtyZXR1cm4gTygxZTMqdCl9LE8uZW49RFtnXSxPLkxzPUQsTy5wPXt9LE99KSk7IiwiZXhwb3J0IHZhciBNZXJpZGllbTtcbihmdW5jdGlvbiAoTWVyaWRpZW0pIHtcbiAgICBNZXJpZGllbVtNZXJpZGllbVtcIkFNXCJdID0gMF0gPSBcIkFNXCI7XG4gICAgTWVyaWRpZW1bTWVyaWRpZW1bXCJQTVwiXSA9IDFdID0gXCJQTVwiO1xufSkoTWVyaWRpZW0gfHwgKE1lcmlkaWVtID0ge30pKTtcbmV4cG9ydCB2YXIgV2Vla2RheTtcbihmdW5jdGlvbiAoV2Vla2RheSkge1xuICAgIFdlZWtkYXlbV2Vla2RheVtcIlNVTkRBWVwiXSA9IDBdID0gXCJTVU5EQVlcIjtcbiAgICBXZWVrZGF5W1dlZWtkYXlbXCJNT05EQVlcIl0gPSAxXSA9IFwiTU9OREFZXCI7XG4gICAgV2Vla2RheVtXZWVrZGF5W1wiVFVFU0RBWVwiXSA9IDJdID0gXCJUVUVTREFZXCI7XG4gICAgV2Vla2RheVtXZWVrZGF5W1wiV0VETkVTREFZXCJdID0gM10gPSBcIldFRE5FU0RBWVwiO1xuICAgIFdlZWtkYXlbV2Vla2RheVtcIlRIVVJTREFZXCJdID0gNF0gPSBcIlRIVVJTREFZXCI7XG4gICAgV2Vla2RheVtXZWVrZGF5W1wiRlJJREFZXCJdID0gNV0gPSBcIkZSSURBWVwiO1xuICAgIFdlZWtkYXlbV2Vla2RheVtcIlNBVFVSREFZXCJdID0gNl0gPSBcIlNBVFVSREFZXCI7XG59KShXZWVrZGF5IHx8IChXZWVrZGF5ID0ge30pKTtcbmV4cG9ydCB2YXIgTW9udGg7XG4oZnVuY3Rpb24gKE1vbnRoKSB7XG4gICAgTW9udGhbTW9udGhbXCJKQU5VQVJZXCJdID0gMV0gPSBcIkpBTlVBUllcIjtcbiAgICBNb250aFtNb250aFtcIkZFQlJVQVJZXCJdID0gMl0gPSBcIkZFQlJVQVJZXCI7XG4gICAgTW9udGhbTW9udGhbXCJNQVJDSFwiXSA9IDNdID0gXCJNQVJDSFwiO1xuICAgIE1vbnRoW01vbnRoW1wiQVBSSUxcIl0gPSA0XSA9IFwiQVBSSUxcIjtcbiAgICBNb250aFtNb250aFtcIk1BWVwiXSA9IDVdID0gXCJNQVlcIjtcbiAgICBNb250aFtNb250aFtcIkpVTkVcIl0gPSA2XSA9IFwiSlVORVwiO1xuICAgIE1vbnRoW01vbnRoW1wiSlVMWVwiXSA9IDddID0gXCJKVUxZXCI7XG4gICAgTW9udGhbTW9udGhbXCJBVUdVU1RcIl0gPSA4XSA9IFwiQVVHVVNUXCI7XG4gICAgTW9udGhbTW9udGhbXCJTRVBURU1CRVJcIl0gPSA5XSA9IFwiU0VQVEVNQkVSXCI7XG4gICAgTW9udGhbTW9udGhbXCJPQ1RPQkVSXCJdID0gMTBdID0gXCJPQ1RPQkVSXCI7XG4gICAgTW9udGhbTW9udGhbXCJOT1ZFTUJFUlwiXSA9IDExXSA9IFwiTk9WRU1CRVJcIjtcbiAgICBNb250aFtNb250aFtcIkRFQ0VNQkVSXCJdID0gMTJdID0gXCJERUNFTUJFUlwiO1xufSkoTW9udGggfHwgKE1vbnRoID0ge30pKTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR5cGVzLmpzLm1hcCIsImltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uL3R5cGVzLmpzXCI7XG5leHBvcnQgZnVuY3Rpb24gYXNzaWduVGhlTmV4dERheShjb21wb25lbnQsIHRhcmdldERheUpzKSB7XG4gICAgdGFyZ2V0RGF5SnMgPSB0YXJnZXREYXlKcy5hZGQoMSwgXCJkYXlcIik7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBpbXBseVRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXlKcykge1xuICAgIHRhcmdldERheUpzID0gdGFyZ2V0RGF5SnMuYWRkKDEsIFwiZGF5XCIpO1xuICAgIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcyk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERheUpzKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImRheVwiLCB0YXJnZXREYXlKcy5kYXRlKCkpO1xuICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtb250aFwiLCB0YXJnZXREYXlKcy5tb250aCgpICsgMSk7XG4gICAgY29tcG9uZW50LmFzc2lnbihcInllYXJcIiwgdGFyZ2V0RGF5SnMueWVhcigpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKSB7XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgdGFyZ2V0RGF5SnMuaG91cigpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWludXRlXCIsIHRhcmdldERheUpzLm1pbnV0ZSgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwic2Vjb25kXCIsIHRhcmdldERheUpzLnNlY29uZCgpKTtcbiAgICBjb21wb25lbnQuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgdGFyZ2V0RGF5SnMubWlsbGlzZWNvbmQoKSk7XG4gICAgaWYgKGNvbXBvbmVudC5nZXQoXCJob3VyXCIpIDwgMTIpIHtcbiAgICAgICAgY29tcG9uZW50LmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIGltcGx5U2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXlKcykge1xuICAgIGNvbXBvbmVudC5pbXBseShcImRheVwiLCB0YXJnZXREYXlKcy5kYXRlKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1vbnRoXCIsIHRhcmdldERheUpzLm1vbnRoKCkgKyAxKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJ5ZWFyXCIsIHRhcmdldERheUpzLnllYXIoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERheUpzKSB7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCB0YXJnZXREYXlKcy5ob3VyKCkpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbnV0ZVwiLCB0YXJnZXREYXlKcy5taW51dGUoKSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIHRhcmdldERheUpzLnNlY29uZCgpKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCB0YXJnZXREYXlKcy5taWxsaXNlY29uZCgpKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRheWpzLmpzLm1hcCIsImltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IFdlZWtkYXksIE1vbnRoIH0gZnJvbSBcIi4vdHlwZXMuanNcIjtcbmV4cG9ydCBjb25zdCBUSU1FWk9ORV9BQkJSX01BUCA9IHtcbiAgICBBQ0RUOiA2MzAsXG4gICAgQUNTVDogNTcwLFxuICAgIEFEVDogLTE4MCxcbiAgICBBRURUOiA2NjAsXG4gICAgQUVTVDogNjAwLFxuICAgIEFGVDogMjcwLFxuICAgIEFLRFQ6IC00ODAsXG4gICAgQUtTVDogLTU0MCxcbiAgICBBTE1UOiAzNjAsXG4gICAgQU1TVDogLTE4MCxcbiAgICBBTVQ6IC0yNDAsXG4gICAgQU5BU1Q6IDcyMCxcbiAgICBBTkFUOiA3MjAsXG4gICAgQVFUVDogMzAwLFxuICAgIEFSVDogLTE4MCxcbiAgICBBU1Q6IC0yNDAsXG4gICAgQVdEVDogNTQwLFxuICAgIEFXU1Q6IDQ4MCxcbiAgICBBWk9TVDogMCxcbiAgICBBWk9UOiAtNjAsXG4gICAgQVpTVDogMzAwLFxuICAgIEFaVDogMjQwLFxuICAgIEJOVDogNDgwLFxuICAgIEJPVDogLTI0MCxcbiAgICBCUlNUOiAtMTIwLFxuICAgIEJSVDogLTE4MCxcbiAgICBCU1Q6IDYwLFxuICAgIEJUVDogMzYwLFxuICAgIENBU1Q6IDQ4MCxcbiAgICBDQVQ6IDEyMCxcbiAgICBDQ1Q6IDM5MCxcbiAgICBDRFQ6IC0zMDAsXG4gICAgQ0VTVDogMTIwLFxuICAgIENFVDoge1xuICAgICAgICB0aW1lem9uZU9mZnNldER1cmluZ0RzdDogMiAqIDYwLFxuICAgICAgICB0aW1lem9uZU9mZnNldE5vbkRzdDogNjAsXG4gICAgICAgIGRzdFN0YXJ0OiAoeWVhcikgPT4gZ2V0TGFzdFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXIpID0+IGdldExhc3RXZWVrZGF5T2ZNb250aCh5ZWFyLCBNb250aC5PQ1RPQkVSLCBXZWVrZGF5LlNVTkRBWSwgMyksXG4gICAgfSxcbiAgICBDSEFEVDogODI1LFxuICAgIENIQVNUOiA3NjUsXG4gICAgQ0tUOiAtNjAwLFxuICAgIENMU1Q6IC0xODAsXG4gICAgQ0xUOiAtMjQwLFxuICAgIENPVDogLTMwMCxcbiAgICBDU1Q6IC0zNjAsXG4gICAgQ1Q6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC01ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNiAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBDVlQ6IC02MCxcbiAgICBDWFQ6IDQyMCxcbiAgICBDaFNUOiA2MDAsXG4gICAgREFWVDogNDIwLFxuICAgIEVBU1NUOiAtMzAwLFxuICAgIEVBU1Q6IC0zNjAsXG4gICAgRUFUOiAxODAsXG4gICAgRUNUOiAtMzAwLFxuICAgIEVEVDogLTI0MCxcbiAgICBFRVNUOiAxODAsXG4gICAgRUVUOiAxMjAsXG4gICAgRUdTVDogMCxcbiAgICBFR1Q6IC02MCxcbiAgICBFU1Q6IC0zMDAsXG4gICAgRVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC00ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNSAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBGSlNUOiA3ODAsXG4gICAgRkpUOiA3MjAsXG4gICAgRktTVDogLTE4MCxcbiAgICBGS1Q6IC0yNDAsXG4gICAgRk5UOiAtMTIwLFxuICAgIEdBTFQ6IC0zNjAsXG4gICAgR0FNVDogLTU0MCxcbiAgICBHRVQ6IDI0MCxcbiAgICBHRlQ6IC0xODAsXG4gICAgR0lMVDogNzIwLFxuICAgIEdNVDogMCxcbiAgICBHU1Q6IDI0MCxcbiAgICBHWVQ6IC0yNDAsXG4gICAgSEFBOiAtMTgwLFxuICAgIEhBQzogLTMwMCxcbiAgICBIQURUOiAtNTQwLFxuICAgIEhBRTogLTI0MCxcbiAgICBIQVA6IC00MjAsXG4gICAgSEFSOiAtMzYwLFxuICAgIEhBU1Q6IC02MDAsXG4gICAgSEFUOiAtOTAsXG4gICAgSEFZOiAtNDgwLFxuICAgIEhLVDogNDgwLFxuICAgIEhMVjogLTIxMCxcbiAgICBITkE6IC0yNDAsXG4gICAgSE5DOiAtMzYwLFxuICAgIEhORTogLTMwMCxcbiAgICBITlA6IC00ODAsXG4gICAgSE5SOiAtNDIwLFxuICAgIEhOVDogLTE1MCxcbiAgICBITlk6IC01NDAsXG4gICAgSE9WVDogNDIwLFxuICAgIElDVDogNDIwLFxuICAgIElEVDogMTgwLFxuICAgIElPVDogMzYwLFxuICAgIElSRFQ6IDI3MCxcbiAgICBJUktTVDogNTQwLFxuICAgIElSS1Q6IDU0MCxcbiAgICBJUlNUOiAyMTAsXG4gICAgSVNUOiAzMzAsXG4gICAgSlNUOiA1NDAsXG4gICAgS0dUOiAzNjAsXG4gICAgS1JBU1Q6IDQ4MCxcbiAgICBLUkFUOiA0ODAsXG4gICAgS1NUOiA1NDAsXG4gICAgS1VZVDogMjQwLFxuICAgIExIRFQ6IDY2MCxcbiAgICBMSFNUOiA2MzAsXG4gICAgTElOVDogODQwLFxuICAgIE1BR1NUOiA3MjAsXG4gICAgTUFHVDogNzIwLFxuICAgIE1BUlQ6IC01MTAsXG4gICAgTUFXVDogMzAwLFxuICAgIE1EVDogLTM2MCxcbiAgICBNRVNaOiAxMjAsXG4gICAgTUVaOiA2MCxcbiAgICBNSFQ6IDcyMCxcbiAgICBNTVQ6IDM5MCxcbiAgICBNU0Q6IDI0MCxcbiAgICBNU0s6IDE4MCxcbiAgICBNU1Q6IC00MjAsXG4gICAgTVQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC02ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtNyAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBNVVQ6IDI0MCxcbiAgICBNVlQ6IDMwMCxcbiAgICBNWVQ6IDQ4MCxcbiAgICBOQ1Q6IDY2MCxcbiAgICBORFQ6IC05MCxcbiAgICBORlQ6IDY5MCxcbiAgICBOT1ZTVDogNDIwLFxuICAgIE5PVlQ6IDM2MCxcbiAgICBOUFQ6IDM0NSxcbiAgICBOU1Q6IC0xNTAsXG4gICAgTlVUOiAtNjYwLFxuICAgIE5aRFQ6IDc4MCxcbiAgICBOWlNUOiA3MjAsXG4gICAgT01TU1Q6IDQyMCxcbiAgICBPTVNUOiA0MjAsXG4gICAgUERUOiAtNDIwLFxuICAgIFBFVDogLTMwMCxcbiAgICBQRVRTVDogNzIwLFxuICAgIFBFVFQ6IDcyMCxcbiAgICBQR1Q6IDYwMCxcbiAgICBQSE9UOiA3ODAsXG4gICAgUEhUOiA0ODAsXG4gICAgUEtUOiAzMDAsXG4gICAgUE1EVDogLTEyMCxcbiAgICBQTVNUOiAtMTgwLFxuICAgIFBPTlQ6IDY2MCxcbiAgICBQU1Q6IC00ODAsXG4gICAgUFQ6IHtcbiAgICAgICAgdGltZXpvbmVPZmZzZXREdXJpbmdEc3Q6IC03ICogNjAsXG4gICAgICAgIHRpbWV6b25lT2Zmc2V0Tm9uRHN0OiAtOCAqIDYwLFxuICAgICAgICBkc3RTdGFydDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk1BUkNILCBXZWVrZGF5LlNVTkRBWSwgMiwgMiksXG4gICAgICAgIGRzdEVuZDogKHllYXIpID0+IGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIE1vbnRoLk5PVkVNQkVSLCBXZWVrZGF5LlNVTkRBWSwgMSwgMiksXG4gICAgfSxcbiAgICBQV1Q6IDU0MCxcbiAgICBQWVNUOiAtMTgwLFxuICAgIFBZVDogLTI0MCxcbiAgICBSRVQ6IDI0MCxcbiAgICBTQU1UOiAyNDAsXG4gICAgU0FTVDogMTIwLFxuICAgIFNCVDogNjYwLFxuICAgIFNDVDogMjQwLFxuICAgIFNHVDogNDgwLFxuICAgIFNSVDogLTE4MCxcbiAgICBTU1Q6IC02NjAsXG4gICAgVEFIVDogLTYwMCxcbiAgICBURlQ6IDMwMCxcbiAgICBUSlQ6IDMwMCxcbiAgICBUS1Q6IDc4MCxcbiAgICBUTFQ6IDU0MCxcbiAgICBUTVQ6IDMwMCxcbiAgICBUVlQ6IDcyMCxcbiAgICBVTEFUOiA0ODAsXG4gICAgVVRDOiAwLFxuICAgIFVZU1Q6IC0xMjAsXG4gICAgVVlUOiAtMTgwLFxuICAgIFVaVDogMzAwLFxuICAgIFZFVDogLTIxMCxcbiAgICBWTEFTVDogNjYwLFxuICAgIFZMQVQ6IDY2MCxcbiAgICBWVVQ6IDY2MCxcbiAgICBXQVNUOiAxMjAsXG4gICAgV0FUOiA2MCxcbiAgICBXRVNUOiA2MCxcbiAgICBXRVNaOiA2MCxcbiAgICBXRVQ6IDAsXG4gICAgV0VaOiAwLFxuICAgIFdGVDogNzIwLFxuICAgIFdHU1Q6IC0xMjAsXG4gICAgV0dUOiAtMTgwLFxuICAgIFdJQjogNDIwLFxuICAgIFdJVDogNTQwLFxuICAgIFdJVEE6IDQ4MCxcbiAgICBXU1Q6IDc4MCxcbiAgICBXVDogMCxcbiAgICBZQUtTVDogNjAwLFxuICAgIFlBS1Q6IDYwMCxcbiAgICBZQVBUOiA2MDAsXG4gICAgWUVLU1Q6IDM2MCxcbiAgICBZRUtUOiAzNjAsXG59O1xuZXhwb3J0IGZ1bmN0aW9uIGdldE50aFdlZWtkYXlPZk1vbnRoKHllYXIsIG1vbnRoLCB3ZWVrZGF5LCBuLCBob3VyID0gMCkge1xuICAgIGxldCBkYXlPZk1vbnRoID0gMDtcbiAgICBsZXQgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBuKSB7XG4gICAgICAgIGRheU9mTW9udGgrKztcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSwgZGF5T2ZNb250aCk7XG4gICAgICAgIGlmIChkYXRlLmdldERheSgpID09PSB3ZWVrZGF5KVxuICAgICAgICAgICAgaSsrO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXlPZk1vbnRoLCBob3VyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRMYXN0V2Vla2RheU9mTW9udGgoeWVhciwgbW9udGgsIHdlZWtkYXksIGhvdXIgPSAwKSB7XG4gICAgY29uc3Qgb25lSW5kZXhlZFdlZWtkYXkgPSB3ZWVrZGF5ID09PSAwID8gNyA6IHdlZWtkYXk7XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHllYXIsIG1vbnRoIC0gMSArIDEsIDEsIDEyKTtcbiAgICBjb25zdCBmaXJzdFdlZWtkYXlOZXh0TW9udGggPSBkYXRlLmdldERheSgpID09PSAwID8gNyA6IGRhdGUuZ2V0RGF5KCk7XG4gICAgbGV0IGRheURpZmY7XG4gICAgaWYgKGZpcnN0V2Vla2RheU5leHRNb250aCA9PT0gb25lSW5kZXhlZFdlZWtkYXkpXG4gICAgICAgIGRheURpZmYgPSA3O1xuICAgIGVsc2UgaWYgKGZpcnN0V2Vla2RheU5leHRNb250aCA8IG9uZUluZGV4ZWRXZWVrZGF5KVxuICAgICAgICBkYXlEaWZmID0gNyArIGZpcnN0V2Vla2RheU5leHRNb250aCAtIG9uZUluZGV4ZWRXZWVrZGF5O1xuICAgIGVsc2VcbiAgICAgICAgZGF5RGlmZiA9IGZpcnN0V2Vla2RheU5leHRNb250aCAtIG9uZUluZGV4ZWRXZWVrZGF5O1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRheURpZmYpO1xuICAgIHJldHVybiBuZXcgRGF0ZSh5ZWFyLCBtb250aCAtIDEsIGRhdGUuZ2V0RGF0ZSgpLCBob3VyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1RpbWV6b25lT2Zmc2V0KHRpbWV6b25lSW5wdXQsIGRhdGUsIHRpbWV6b25lT3ZlcnJpZGVzID0ge30pIHtcbiAgICBpZiAodGltZXpvbmVJbnB1dCA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIHRpbWV6b25lSW5wdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgcmV0dXJuIHRpbWV6b25lSW5wdXQ7XG4gICAgfVxuICAgIGNvbnN0IG1hdGNoZWRUaW1lem9uZSA9IHRpbWV6b25lT3ZlcnJpZGVzW3RpbWV6b25lSW5wdXRdID8/IFRJTUVaT05FX0FCQlJfTUFQW3RpbWV6b25lSW5wdXRdO1xuICAgIGlmIChtYXRjaGVkVGltZXpvbmUgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBtYXRjaGVkVGltZXpvbmUgPT0gXCJudW1iZXJcIikge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lO1xuICAgIH1cbiAgICBpZiAoZGF0ZSA9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZGF5anMoZGF0ZSkuaXNBZnRlcihtYXRjaGVkVGltZXpvbmUuZHN0U3RhcnQoZGF0ZS5nZXRGdWxsWWVhcigpKSkgJiZcbiAgICAgICAgIWRheWpzKGRhdGUpLmlzQWZ0ZXIobWF0Y2hlZFRpbWV6b25lLmRzdEVuZChkYXRlLmdldEZ1bGxZZWFyKCkpKSkge1xuICAgICAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0RHVyaW5nRHN0O1xuICAgIH1cbiAgICByZXR1cm4gbWF0Y2hlZFRpbWV6b25lLnRpbWV6b25lT2Zmc2V0Tm9uRHN0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZXpvbmUuanMubWFwIiwiaW1wb3J0IHF1YXJ0ZXJPZlllYXIgZnJvbSBcImRheWpzL3BsdWdpbi9xdWFydGVyT2ZZZWFyLmpzXCI7XG5pbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBhc3NpZ25TaW1pbGFyRGF0ZSwgYXNzaWduU2ltaWxhclRpbWUsIGltcGx5U2ltaWxhclRpbWUgfSBmcm9tIFwiLi91dGlscy9kYXlqcy5qc1wiO1xuaW1wb3J0IHsgdG9UaW1lem9uZU9mZnNldCB9IGZyb20gXCIuL3RpbWV6b25lLmpzXCI7XG5kYXlqcy5leHRlbmQocXVhcnRlck9mWWVhcik7XG5leHBvcnQgY2xhc3MgUmVmZXJlbmNlV2l0aFRpbWV6b25lIHtcbiAgICBjb25zdHJ1Y3RvcihpbnB1dCkge1xuICAgICAgICBpbnB1dCA9IGlucHV0ID8/IG5ldyBEYXRlKCk7XG4gICAgICAgIGlmIChpbnB1dCBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdGFudCA9IGlucHV0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5pbnN0YW50ID0gaW5wdXQuaW5zdGFudCA/PyBuZXcgRGF0ZSgpO1xuICAgICAgICAgICAgdGhpcy50aW1lem9uZU9mZnNldCA9IHRvVGltZXpvbmVPZmZzZXQoaW5wdXQudGltZXpvbmUsIHRoaXMuaW5zdGFudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RGF0ZVdpdGhBZGp1c3RlZFRpbWV6b25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IERhdGUodGhpcy5pbnN0YW50LmdldFRpbWUoKSArIHRoaXMuZ2V0U3lzdGVtVGltZXpvbmVBZGp1c3RtZW50TWludXRlKHRoaXMuaW5zdGFudCkgKiA2MDAwMCk7XG4gICAgfVxuICAgIGdldFN5c3RlbVRpbWV6b25lQWRqdXN0bWVudE1pbnV0ZShkYXRlLCBvdmVycmlkZVRpbWV6b25lT2Zmc2V0KSB7XG4gICAgICAgIGlmICghZGF0ZSB8fCBkYXRlLmdldFRpbWUoKSA8IDApIHtcbiAgICAgICAgICAgIGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IC1kYXRlLmdldFRpbWV6b25lT2Zmc2V0KCk7XG4gICAgICAgIGNvbnN0IHRhcmdldFRpbWV6b25lT2Zmc2V0ID0gb3ZlcnJpZGVUaW1lem9uZU9mZnNldCA/PyB0aGlzLnRpbWV6b25lT2Zmc2V0ID8/IGN1cnJlbnRUaW1lem9uZU9mZnNldDtcbiAgICAgICAgcmV0dXJuIGN1cnJlbnRUaW1lem9uZU9mZnNldCAtIHRhcmdldFRpbWV6b25lT2Zmc2V0O1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgY29uc3RydWN0b3IocmVmZXJlbmNlLCBrbm93bkNvbXBvbmVudHMpIHtcbiAgICAgICAgdGhpcy5fdGFncyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5yZWZlcmVuY2UgPSByZWZlcmVuY2U7XG4gICAgICAgIHRoaXMua25vd25WYWx1ZXMgPSB7fTtcbiAgICAgICAgdGhpcy5pbXBsaWVkVmFsdWVzID0ge307XG4gICAgICAgIGlmIChrbm93bkNvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIGtub3duQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHRoaXMua25vd25WYWx1ZXNba2V5XSA9IGtub3duQ29tcG9uZW50c1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZkRheUpzID0gZGF5anMocmVmZXJlbmNlLmluc3RhbnQpO1xuICAgICAgICB0aGlzLmltcGx5KFwiZGF5XCIsIHJlZkRheUpzLmRhdGUoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJtb250aFwiLCByZWZEYXlKcy5tb250aCgpICsgMSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJ5ZWFyXCIsIHJlZkRheUpzLnllYXIoKSk7XG4gICAgICAgIHRoaXMuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbnV0ZVwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICAgICAgdGhpcy5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIH1cbiAgICBnZXQoY29tcG9uZW50KSB7XG4gICAgICAgIGlmIChjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMua25vd25WYWx1ZXNbY29tcG9uZW50XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMuaW1wbGllZFZhbHVlcykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpc0NlcnRhaW4oY29tcG9uZW50KSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQgaW4gdGhpcy5rbm93blZhbHVlcztcbiAgICB9XG4gICAgZ2V0Q2VydGFpbkNvbXBvbmVudHMoKSB7XG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmtub3duVmFsdWVzKTtcbiAgICB9XG4gICAgaW1wbHkoY29tcG9uZW50LCB2YWx1ZSkge1xuICAgICAgICBpZiAoY29tcG9uZW50IGluIHRoaXMua25vd25WYWx1ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdID0gdmFsdWU7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhc3NpZ24oY29tcG9uZW50LCB2YWx1ZSkge1xuICAgICAgICB0aGlzLmtub3duVmFsdWVzW2NvbXBvbmVudF0gPSB2YWx1ZTtcbiAgICAgICAgZGVsZXRlIHRoaXMuaW1wbGllZFZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZGVsZXRlKGNvbXBvbmVudCkge1xuICAgICAgICBkZWxldGUgdGhpcy5rbm93blZhbHVlc1tjb21wb25lbnRdO1xuICAgICAgICBkZWxldGUgdGhpcy5pbXBsaWVkVmFsdWVzW2NvbXBvbmVudF07XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZlcmVuY2UpO1xuICAgICAgICBjb21wb25lbnQua25vd25WYWx1ZXMgPSB7fTtcbiAgICAgICAgY29tcG9uZW50LmltcGxpZWRWYWx1ZXMgPSB7fTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5rbm93blZhbHVlcykge1xuICAgICAgICAgICAgY29tcG9uZW50Lmtub3duVmFsdWVzW2tleV0gPSB0aGlzLmtub3duVmFsdWVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gdGhpcy5pbXBsaWVkVmFsdWVzKSB7XG4gICAgICAgICAgICBjb21wb25lbnQuaW1wbGllZFZhbHVlc1trZXldID0gdGhpcy5pbXBsaWVkVmFsdWVzW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG4gICAgaXNPbmx5RGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuICF0aGlzLmlzQ2VydGFpbihcImhvdXJcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibWludXRlXCIpICYmICF0aGlzLmlzQ2VydGFpbihcInNlY29uZFwiKTtcbiAgICB9XG4gICAgaXNPbmx5VGltZSgpIHtcbiAgICAgICAgcmV0dXJuICghdGhpcy5pc0NlcnRhaW4oXCJ3ZWVrZGF5XCIpICYmICF0aGlzLmlzQ2VydGFpbihcImRheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJtb250aFwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJ5ZWFyXCIpKTtcbiAgICB9XG4gICAgaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwid2Vla2RheVwiKSAmJiAhdGhpcy5pc0NlcnRhaW4oXCJkYXlcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwibW9udGhcIik7XG4gICAgfVxuICAgIGlzRGF0ZVdpdGhVbmtub3duWWVhcigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaXNDZXJ0YWluKFwibW9udGhcIikgJiYgIXRoaXMuaXNDZXJ0YWluKFwieWVhclwiKTtcbiAgICB9XG4gICAgaXNWYWxpZERhdGUoKSB7XG4gICAgICAgIGNvbnN0IGRhdGUgPSB0aGlzLmRhdGVXaXRob3V0VGltZXpvbmVBZGp1c3RtZW50KCk7XG4gICAgICAgIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgIT09IHRoaXMuZ2V0KFwieWVhclwiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKGRhdGUuZ2V0TW9udGgoKSAhPT0gdGhpcy5nZXQoXCJtb250aFwiKSAtIDEpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmIChkYXRlLmdldERhdGUoKSAhPT0gdGhpcy5nZXQoXCJkYXlcIikpXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmdldChcImhvdXJcIikgIT0gbnVsbCAmJiBkYXRlLmdldEhvdXJzKCkgIT0gdGhpcy5nZXQoXCJob3VyXCIpKVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5nZXQoXCJtaW51dGVcIikgIT0gbnVsbCAmJiBkYXRlLmdldE1pbnV0ZXMoKSAhPSB0aGlzLmdldChcIm1pbnV0ZVwiKSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICByZXR1cm4gYFtQYXJzaW5nQ29tcG9uZW50cyB7XG4gICAgICAgICAgICB0YWdzOiAke0pTT04uc3RyaW5naWZ5KEFycmF5LmZyb20odGhpcy5fdGFncykuc29ydCgpKX0sIFxuICAgICAgICAgICAga25vd25WYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5rbm93blZhbHVlcyl9LCBcbiAgICAgICAgICAgIGltcGxpZWRWYWx1ZXM6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy5pbXBsaWVkVmFsdWVzKX19LCBcbiAgICAgICAgICAgIHJlZmVyZW5jZTogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnJlZmVyZW5jZSl9XWA7XG4gICAgfVxuICAgIGRheWpzKCkge1xuICAgICAgICByZXR1cm4gZGF5anModGhpcy5kYXRlKCkpO1xuICAgIH1cbiAgICBkYXRlKCkge1xuICAgICAgICBjb25zdCBkYXRlID0gdGhpcy5kYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpO1xuICAgICAgICBjb25zdCB0aW1lem9uZUFkanVzdG1lbnQgPSB0aGlzLnJlZmVyZW5jZS5nZXRTeXN0ZW1UaW1lem9uZUFkanVzdG1lbnRNaW51dGUoZGF0ZSwgdGhpcy5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKSk7XG4gICAgICAgIHJldHVybiBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIHRpbWV6b25lQWRqdXN0bWVudCAqIDYwMDAwKTtcbiAgICB9XG4gICAgYWRkVGFnKHRhZykge1xuICAgICAgICB0aGlzLl90YWdzLmFkZCh0YWcpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkVGFncyh0YWdzKSB7XG4gICAgICAgIGZvciAoY29uc3QgdGFnIG9mIHRhZ3MpIHtcbiAgICAgICAgICAgIHRoaXMuX3RhZ3MuYWRkKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHRhZ3MoKSB7XG4gICAgICAgIHJldHVybiBuZXcgU2V0KHRoaXMuX3RhZ3MpO1xuICAgIH1cbiAgICBkYXRlV2l0aG91dFRpbWV6b25lQWRqdXN0bWVudCgpIHtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHRoaXMuZ2V0KFwieWVhclwiKSwgdGhpcy5nZXQoXCJtb250aFwiKSAtIDEsIHRoaXMuZ2V0KFwiZGF5XCIpLCB0aGlzLmdldChcImhvdXJcIiksIHRoaXMuZ2V0KFwibWludXRlXCIpLCB0aGlzLmdldChcInNlY29uZFwiKSwgdGhpcy5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgIGRhdGUuc2V0RnVsbFllYXIodGhpcy5nZXQoXCJ5ZWFyXCIpKTtcbiAgICAgICAgcmV0dXJuIGRhdGU7XG4gICAgfVxuICAgIHN0YXRpYyBjcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UocmVmZXJlbmNlLCBmcmFnbWVudHMpIHtcbiAgICAgICAgbGV0IGRhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGZyYWdtZW50cykge1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKGZyYWdtZW50c1trZXldLCBrZXkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlKTtcbiAgICAgICAgY29tcG9uZW50cy5hZGRUYWcoXCJyZXN1bHQvcmVsYXRpdmVEYXRlXCIpO1xuICAgICAgICBpZiAoZnJhZ21lbnRzW1wiaG91clwiXSB8fCBmcmFnbWVudHNbXCJtaW51dGVcIl0gfHwgZnJhZ21lbnRzW1wic2Vjb25kXCJdKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFkZFRhZyhcInJlc3VsdC9yZWxhdGl2ZURhdGVBbmRUaW1lXCIpO1xuICAgICAgICAgICAgYXNzaWduU2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnRzLCBkYXRlKTtcbiAgICAgICAgICAgIGlmIChyZWZlcmVuY2UudGltZXpvbmVPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIC1yZWZlcmVuY2UuaW5zdGFudC5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50cywgZGF0ZSk7XG4gICAgICAgICAgICBpZiAocmVmZXJlbmNlLnRpbWV6b25lT2Zmc2V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInRpbWV6b25lT2Zmc2V0XCIsIC1yZWZlcmVuY2UuaW5zdGFudC5nZXRUaW1lem9uZU9mZnNldCgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcmFnbWVudHNbXCJkXCJdKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZyYWdtZW50c1tcIndlZWtcIl0pIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ3ZWVrZGF5XCIsIGRhdGUuZGF5KCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcImRheVwiLCBkYXRlLmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgaWYgKGZyYWdtZW50c1tcIm1vbnRoXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibW9udGhcIiwgZGF0ZS5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudHNbXCJ5ZWFyXCJdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgZGF0ZS55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgIH1cbn1cbmV4cG9ydCBjbGFzcyBQYXJzaW5nUmVzdWx0IHtcbiAgICBjb25zdHJ1Y3RvcihyZWZlcmVuY2UsIGluZGV4LCB0ZXh0LCBzdGFydCwgZW5kKSB7XG4gICAgICAgIHRoaXMucmVmZXJlbmNlID0gcmVmZXJlbmNlO1xuICAgICAgICB0aGlzLnJlZkRhdGUgPSByZWZlcmVuY2UuaW5zdGFudDtcbiAgICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnN0YXJ0ID0gc3RhcnQgfHwgbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSk7XG4gICAgICAgIHRoaXMuZW5kID0gZW5kO1xuICAgIH1cbiAgICBjbG9uZSgpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gbmV3IFBhcnNpbmdSZXN1bHQodGhpcy5yZWZlcmVuY2UsIHRoaXMuaW5kZXgsIHRoaXMudGV4dCk7XG4gICAgICAgIHJlc3VsdC5zdGFydCA9IHRoaXMuc3RhcnQgPyB0aGlzLnN0YXJ0LmNsb25lKCkgOiBudWxsO1xuICAgICAgICByZXN1bHQuZW5kID0gdGhpcy5lbmQgPyB0aGlzLmVuZC5jbG9uZSgpIDogbnVsbDtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnQuZGF0ZSgpO1xuICAgIH1cbiAgICBhZGRUYWcodGFnKSB7XG4gICAgICAgIHRoaXMuc3RhcnQuYWRkVGFnKHRhZyk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5lbmQuYWRkVGFnKHRhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFRhZ3ModGFncykge1xuICAgICAgICB0aGlzLnN0YXJ0LmFkZFRhZ3ModGFncyk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgdGhpcy5lbmQuYWRkVGFncyh0YWdzKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdGFncygpIHtcbiAgICAgICAgY29uc3QgY29tYmluZWRUYWdzID0gbmV3IFNldCh0aGlzLnN0YXJ0LnRhZ3MoKSk7XG4gICAgICAgIGlmICh0aGlzLmVuZCkge1xuICAgICAgICAgICAgZm9yIChjb25zdCB0YWcgb2YgdGhpcy5lbmQudGFncygpKSB7XG4gICAgICAgICAgICAgICAgY29tYmluZWRUYWdzLmFkZCh0YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21iaW5lZFRhZ3M7XG4gICAgfVxuICAgIHRvU3RyaW5nKCkge1xuICAgICAgICBjb25zdCB0YWdzID0gQXJyYXkuZnJvbSh0aGlzLnRhZ3MoKSkuc29ydCgpO1xuICAgICAgICByZXR1cm4gYFtQYXJzaW5nUmVzdWx0IHtpbmRleDogJHt0aGlzLmluZGV4fSwgdGV4dDogJyR7dGhpcy50ZXh0fScsIHRhZ3M6ICR7SlNPTi5zdHJpbmdpZnkodGFncyl9IC4uLn1dYDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXN1bHRzLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZFRpbWV1bml0UGF0dGVybihwcmVmaXgsIHNpbmdsZVRpbWV1bml0UGF0dGVybiwgY29ubmVjdG9yUGF0dGVybiA9IFwiXFxcXHN7MCw1fSw/XFxcXHN7MCw1fVwiKSB7XG4gICAgY29uc3Qgc2luZ2xlVGltZXVuaXRQYXR0ZXJuTm9DYXB0dXJlID0gc2luZ2xlVGltZXVuaXRQYXR0ZXJuLnJlcGxhY2UoL1xcKCg/IVxcPykvZywgXCIoPzpcIik7XG4gICAgcmV0dXJuIGAke3ByZWZpeH0ke3NpbmdsZVRpbWV1bml0UGF0dGVybk5vQ2FwdHVyZX0oPzoke2Nvbm5lY3RvclBhdHRlcm59JHtzaW5nbGVUaW1ldW5pdFBhdHRlcm5Ob0NhcHR1cmV9KXswLDEwfWA7XG59XG5leHBvcnQgZnVuY3Rpb24gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnkpIHtcbiAgICBsZXQga2V5cztcbiAgICBpZiAoZGljdGlvbmFyeSBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICAgIGtleXMgPSBbLi4uZGljdGlvbmFyeV07XG4gICAgfVxuICAgIGVsc2UgaWYgKGRpY3Rpb25hcnkgaW5zdGFuY2VvZiBNYXApIHtcbiAgICAgICAga2V5cyA9IEFycmF5LmZyb20oZGljdGlvbmFyeS5rZXlzKCkpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAga2V5cyA9IE9iamVjdC5rZXlzKGRpY3Rpb25hcnkpO1xuICAgIH1cbiAgICByZXR1cm4ga2V5cztcbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaEFueVBhdHRlcm4oZGljdGlvbmFyeSkge1xuICAgIGNvbnN0IGpvaW5lZFRlcm1zID0gZXh0cmFjdFRlcm1zKGRpY3Rpb25hcnkpXG4gICAgICAgIC5zb3J0KChhLCBiKSA9PiBiLmxlbmd0aCAtIGEubGVuZ3RoKVxuICAgICAgICAuam9pbihcInxcIilcbiAgICAgICAgLnJlcGxhY2UoL1xcLi9nLCBcIlxcXFwuXCIpO1xuICAgIHJldHVybiBgKD86JHtqb2luZWRUZXJtc30pYDtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBhdHRlcm4uanMubWFwIiwiaW1wb3J0IGRheWpzIGZyb20gXCJkYXlqc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGZpbmRNb3N0TGlrZWx5QURZZWFyKHllYXJOdW1iZXIpIHtcbiAgICBpZiAoeWVhck51bWJlciA8IDEwMCkge1xuICAgICAgICBpZiAoeWVhck51bWJlciA+IDUwKSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDE5MDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB5ZWFyTnVtYmVyID0geWVhck51bWJlciArIDIwMDA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHllYXJOdW1iZXI7XG59XG5leHBvcnQgZnVuY3Rpb24gZmluZFllYXJDbG9zZXN0VG9SZWYocmVmRGF0ZSwgZGF5LCBtb250aCkge1xuICAgIGNvbnN0IHJlZk1vbWVudCA9IGRheWpzKHJlZkRhdGUpO1xuICAgIGxldCBkYXRlTW9tZW50ID0gcmVmTW9tZW50O1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50Lm1vbnRoKG1vbnRoIC0gMSk7XG4gICAgZGF0ZU1vbWVudCA9IGRhdGVNb21lbnQuZGF0ZShkYXkpO1xuICAgIGRhdGVNb21lbnQgPSBkYXRlTW9tZW50LnllYXIocmVmTW9tZW50LnllYXIoKSk7XG4gICAgY29uc3QgbmV4dFllYXIgPSBkYXRlTW9tZW50LmFkZCgxLCBcInlcIik7XG4gICAgY29uc3QgbGFzdFllYXIgPSBkYXRlTW9tZW50LmFkZCgtMSwgXCJ5XCIpO1xuICAgIGlmIChNYXRoLmFicyhuZXh0WWVhci5kaWZmKHJlZk1vbWVudCkpIDwgTWF0aC5hYnMoZGF0ZU1vbWVudC5kaWZmKHJlZk1vbWVudCkpKSB7XG4gICAgICAgIGRhdGVNb21lbnQgPSBuZXh0WWVhcjtcbiAgICB9XG4gICAgZWxzZSBpZiAoTWF0aC5hYnMobGFzdFllYXIuZGlmZihyZWZNb21lbnQpKSA8IE1hdGguYWJzKGRhdGVNb21lbnQuZGlmZihyZWZNb21lbnQpKSkge1xuICAgICAgICBkYXRlTW9tZW50ID0gbGFzdFllYXI7XG4gICAgfVxuICAgIHJldHVybiBkYXRlTW9tZW50LnllYXIoKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXllYXJzLmpzLm1hcCIsImltcG9ydCB7IG1hdGNoQW55UGF0dGVybiwgcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4gfSBmcm9tIFwiLi4vLi4vdXRpbHMvcGF0dGVybi5qc1wiO1xuaW1wb3J0IHsgZmluZE1vc3RMaWtlbHlBRFllYXIgfSBmcm9tIFwiLi4vLi4vY2FsY3VsYXRpb24veWVhcnMuanNcIjtcbmV4cG9ydCBjb25zdCBXRUVLREFZX0RJQ1RJT05BUlkgPSB7XG4gICAgc3VuZGF5OiAwLFxuICAgIHN1bjogMCxcbiAgICBcInN1bi5cIjogMCxcbiAgICBtb25kYXk6IDEsXG4gICAgbW9uOiAxLFxuICAgIFwibW9uLlwiOiAxLFxuICAgIHR1ZXNkYXk6IDIsXG4gICAgdHVlOiAyLFxuICAgIFwidHVlLlwiOiAyLFxuICAgIHdlZG5lc2RheTogMyxcbiAgICB3ZWQ6IDMsXG4gICAgXCJ3ZWQuXCI6IDMsXG4gICAgdGh1cnNkYXk6IDQsXG4gICAgdGh1cnM6IDQsXG4gICAgXCJ0aHVycy5cIjogNCxcbiAgICB0aHVyOiA0LFxuICAgIFwidGh1ci5cIjogNCxcbiAgICB0aHU6IDQsXG4gICAgXCJ0aHUuXCI6IDQsXG4gICAgZnJpZGF5OiA1LFxuICAgIGZyaTogNSxcbiAgICBcImZyaS5cIjogNSxcbiAgICBzYXR1cmRheTogNixcbiAgICBzYXQ6IDYsXG4gICAgXCJzYXQuXCI6IDYsXG59O1xuZXhwb3J0IGNvbnN0IEZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZID0ge1xuICAgIGphbnVhcnk6IDEsXG4gICAgZmVicnVhcnk6IDIsXG4gICAgbWFyY2g6IDMsXG4gICAgYXByaWw6IDQsXG4gICAgbWF5OiA1LFxuICAgIGp1bmU6IDYsXG4gICAganVseTogNyxcbiAgICBhdWd1c3Q6IDgsXG4gICAgc2VwdGVtYmVyOiA5LFxuICAgIG9jdG9iZXI6IDEwLFxuICAgIG5vdmVtYmVyOiAxMSxcbiAgICBkZWNlbWJlcjogMTIsXG59O1xuZXhwb3J0IGNvbnN0IE1PTlRIX0RJQ1RJT05BUlkgPSB7XG4gICAgLi4uRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksXG4gICAgamFuOiAxLFxuICAgIFwiamFuLlwiOiAxLFxuICAgIGZlYjogMixcbiAgICBcImZlYi5cIjogMixcbiAgICBtYXI6IDMsXG4gICAgXCJtYXIuXCI6IDMsXG4gICAgYXByOiA0LFxuICAgIFwiYXByLlwiOiA0LFxuICAgIGp1bjogNixcbiAgICBcImp1bi5cIjogNixcbiAgICBqdWw6IDcsXG4gICAgXCJqdWwuXCI6IDcsXG4gICAgYXVnOiA4LFxuICAgIFwiYXVnLlwiOiA4LFxuICAgIHNlcDogOSxcbiAgICBcInNlcC5cIjogOSxcbiAgICBzZXB0OiA5LFxuICAgIFwic2VwdC5cIjogOSxcbiAgICBvY3Q6IDEwLFxuICAgIFwib2N0LlwiOiAxMCxcbiAgICBub3Y6IDExLFxuICAgIFwibm92LlwiOiAxMSxcbiAgICBkZWM6IDEyLFxuICAgIFwiZGVjLlwiOiAxMixcbn07XG5leHBvcnQgY29uc3QgSU5URUdFUl9XT1JEX0RJQ1RJT05BUlkgPSB7XG4gICAgb25lOiAxLFxuICAgIHR3bzogMixcbiAgICB0aHJlZTogMyxcbiAgICBmb3VyOiA0LFxuICAgIGZpdmU6IDUsXG4gICAgc2l4OiA2LFxuICAgIHNldmVuOiA3LFxuICAgIGVpZ2h0OiA4LFxuICAgIG5pbmU6IDksXG4gICAgdGVuOiAxMCxcbiAgICBlbGV2ZW46IDExLFxuICAgIHR3ZWx2ZTogMTIsXG59O1xuZXhwb3J0IGNvbnN0IE9SRElOQUxfV09SRF9ESUNUSU9OQVJZID0ge1xuICAgIGZpcnN0OiAxLFxuICAgIHNlY29uZDogMixcbiAgICB0aGlyZDogMyxcbiAgICBmb3VydGg6IDQsXG4gICAgZmlmdGg6IDUsXG4gICAgc2l4dGg6IDYsXG4gICAgc2V2ZW50aDogNyxcbiAgICBlaWdodGg6IDgsXG4gICAgbmludGg6IDksXG4gICAgdGVudGg6IDEwLFxuICAgIGVsZXZlbnRoOiAxMSxcbiAgICB0d2VsZnRoOiAxMixcbiAgICB0aGlydGVlbnRoOiAxMyxcbiAgICBmb3VydGVlbnRoOiAxNCxcbiAgICBmaWZ0ZWVudGg6IDE1LFxuICAgIHNpeHRlZW50aDogMTYsXG4gICAgc2V2ZW50ZWVudGg6IDE3LFxuICAgIGVpZ2h0ZWVudGg6IDE4LFxuICAgIG5pbmV0ZWVudGg6IDE5LFxuICAgIHR3ZW50aWV0aDogMjAsXG4gICAgXCJ0d2VudHkgZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHktZmlyc3RcIjogMjEsXG4gICAgXCJ0d2VudHkgc2Vjb25kXCI6IDIyLFxuICAgIFwidHdlbnR5LXNlY29uZFwiOiAyMixcbiAgICBcInR3ZW50eSB0aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eS10aGlyZFwiOiAyMyxcbiAgICBcInR3ZW50eSBmb3VydGhcIjogMjQsXG4gICAgXCJ0d2VudHktZm91cnRoXCI6IDI0LFxuICAgIFwidHdlbnR5IGZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5LWZpZnRoXCI6IDI1LFxuICAgIFwidHdlbnR5IHNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5LXNpeHRoXCI6IDI2LFxuICAgIFwidHdlbnR5IHNldmVudGhcIjogMjcsXG4gICAgXCJ0d2VudHktc2V2ZW50aFwiOiAyNyxcbiAgICBcInR3ZW50eSBlaWdodGhcIjogMjgsXG4gICAgXCJ0d2VudHktZWlnaHRoXCI6IDI4LFxuICAgIFwidHdlbnR5IG5pbnRoXCI6IDI5LFxuICAgIFwidHdlbnR5LW5pbnRoXCI6IDI5LFxuICAgIFwidGhpcnRpZXRoXCI6IDMwLFxuICAgIFwidGhpcnR5IGZpcnN0XCI6IDMxLFxuICAgIFwidGhpcnR5LWZpcnN0XCI6IDMxLFxufTtcbmV4cG9ydCBjb25zdCBUSU1FX1VOSVRfRElDVElPTkFSWV9OT19BQkJSID0ge1xuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG1pbnV0ZTogXCJtaW51dGVcIixcbiAgICBtaW51dGVzOiBcIm1pbnV0ZVwiLFxuICAgIGhvdXI6IFwiaG91clwiLFxuICAgIGhvdXJzOiBcImhvdXJcIixcbiAgICBkYXk6IFwiZFwiLFxuICAgIGRheXM6IFwiZFwiLFxuICAgIHdlZWs6IFwid2Vla1wiLFxuICAgIHdlZWtzOiBcIndlZWtcIixcbiAgICBtb250aDogXCJtb250aFwiLFxuICAgIG1vbnRoczogXCJtb250aFwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5ZWFyOiBcInllYXJcIixcbiAgICB5ZWFyczogXCJ5ZWFyXCIsXG59O1xuZXhwb3J0IGNvbnN0IFRJTUVfVU5JVF9ESUNUSU9OQVJZID0ge1xuICAgIHM6IFwic2Vjb25kXCIsXG4gICAgc2VjOiBcInNlY29uZFwiLFxuICAgIHNlY29uZDogXCJzZWNvbmRcIixcbiAgICBzZWNvbmRzOiBcInNlY29uZFwiLFxuICAgIG06IFwibWludXRlXCIsXG4gICAgbWluOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnM6IFwibWludXRlXCIsXG4gICAgbWludXRlOiBcIm1pbnV0ZVwiLFxuICAgIG1pbnV0ZXM6IFwibWludXRlXCIsXG4gICAgaDogXCJob3VyXCIsXG4gICAgaHI6IFwiaG91clwiLFxuICAgIGhyczogXCJob3VyXCIsXG4gICAgaG91cjogXCJob3VyXCIsXG4gICAgaG91cnM6IFwiaG91clwiLFxuICAgIGQ6IFwiZFwiLFxuICAgIGRheTogXCJkXCIsXG4gICAgZGF5czogXCJkXCIsXG4gICAgdzogXCJ3XCIsXG4gICAgd2VlazogXCJ3ZWVrXCIsXG4gICAgd2Vla3M6IFwid2Vla1wiLFxuICAgIG1vOiBcIm1vbnRoXCIsXG4gICAgbW9uOiBcIm1vbnRoXCIsXG4gICAgbW9zOiBcIm1vbnRoXCIsXG4gICAgbW9udGg6IFwibW9udGhcIixcbiAgICBtb250aHM6IFwibW9udGhcIixcbiAgICBxdHI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXI6IFwicXVhcnRlclwiLFxuICAgIHF1YXJ0ZXJzOiBcInF1YXJ0ZXJcIixcbiAgICB5OiBcInllYXJcIixcbiAgICB5cjogXCJ5ZWFyXCIsXG4gICAgeWVhcjogXCJ5ZWFyXCIsXG4gICAgeWVhcnM6IFwieWVhclwiLFxuICAgIC4uLlRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlIsXG59O1xuZXhwb3J0IGNvbnN0IE5VTUJFUl9QQVRURVJOID0gYCg/OiR7bWF0Y2hBbnlQYXR0ZXJuKElOVEVHRVJfV09SRF9ESUNUSU9OQVJZKX18WzAtOV0rfFswLTldK1xcXFwuWzAtOV0rfGhhbGYoPzpcXFxcc3swLDJ9YW4/KT98YW4/XFxcXGIoPzpcXFxcc3swLDJ9ZmV3KT98ZmV3fHNldmVyYWx8dGhlfGE/XFxcXHN7MCwyfWNvdXBsZVxcXFxzezAsMn0oPzpvZik/KWA7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2VOdW1iZXJQYXR0ZXJuKG1hdGNoKSB7XG4gICAgY29uc3QgbnVtID0gbWF0Y2gudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoSU5URUdFUl9XT1JEX0RJQ1RJT05BUllbbnVtXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBJTlRFR0VSX1dPUkRfRElDVElPTkFSWVtudW1dO1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0gPT09IFwiYVwiIHx8IG51bSA9PT0gXCJhblwiIHx8IG51bSA9PSBcInRoZVwiKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0ubWF0Y2goL2Zldy8pKSB7XG4gICAgICAgIHJldHVybiAzO1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0ubWF0Y2goL2hhbGYvKSkge1xuICAgICAgICByZXR1cm4gMC41O1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0ubWF0Y2goL2NvdXBsZS8pKSB7XG4gICAgICAgIHJldHVybiAyO1xuICAgIH1cbiAgICBlbHNlIGlmIChudW0ubWF0Y2goL3NldmVyYWwvKSkge1xuICAgICAgICByZXR1cm4gNztcbiAgICB9XG4gICAgcmV0dXJuIHBhcnNlRmxvYXQobnVtKTtcbn1cbmV4cG9ydCBjb25zdCBPUkRJTkFMX05VTUJFUl9QQVRURVJOID0gYCg/OiR7bWF0Y2hBbnlQYXR0ZXJuKE9SRElOQUxfV09SRF9ESUNUSU9OQVJZKX18WzAtOV17MSwyfSg/OnN0fG5kfHJkfHRoKT8pYDtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoKSB7XG4gICAgbGV0IG51bSA9IG1hdGNoLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKE9SRElOQUxfV09SRF9ESUNUSU9OQVJZW251bV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gT1JESU5BTF9XT1JEX0RJQ1RJT05BUllbbnVtXTtcbiAgICB9XG4gICAgbnVtID0gbnVtLnJlcGxhY2UoLyg/OnN0fG5kfHJkfHRoKSQvaSwgXCJcIik7XG4gICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG59XG5leHBvcnQgY29uc3QgWUVBUl9QQVRURVJOID0gYCg/OlsxLTldWzAtOV17MCwzfVxcXFxzezAsMn0oPzpCRXxBRHxCQ3xCQ0V8Q0UpfFsxLTJdWzAtOV17M318WzUtOV1bMC05XXwyWzAtNV0pYDtcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVllYXIobWF0Y2gpIHtcbiAgICBpZiAoL0JFL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CRS9pLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG1hdGNoKSAtIDU0MztcbiAgICB9XG4gICAgaWYgKC9CQ0U/L2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC9CQ0U/L2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gLXBhcnNlSW50KG1hdGNoKTtcbiAgICB9XG4gICAgaWYgKC8oQUR8Q0UpL2kudGVzdChtYXRjaCkpIHtcbiAgICAgICAgbWF0Y2ggPSBtYXRjaC5yZXBsYWNlKC8oQUR8Q0UpL2ksIFwiXCIpO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobWF0Y2gpO1xuICAgIH1cbiAgICBjb25zdCByYXdZZWFyTnVtYmVyID0gcGFyc2VJbnQobWF0Y2gpO1xuICAgIHJldHVybiBmaW5kTW9zdExpa2VseUFEWWVhcihyYXdZZWFyTnVtYmVyKTtcbn1cbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfUEFUVEVSTiA9IGAoJHtOVU1CRVJfUEFUVEVSTn0pXFxcXHN7MCwzfSgke21hdGNoQW55UGF0dGVybihUSU1FX1VOSVRfRElDVElPTkFSWSl9KWA7XG5jb25zdCBTSU5HTEVfVElNRV9VTklUX1JFR0VYID0gbmV3IFJlZ0V4cChTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sIFwiaVwiKTtcbmNvbnN0IFNJTkdMRV9USU1FX1VOSVRfTk9fQUJCUl9QQVRURVJOID0gYCgke05VTUJFUl9QQVRURVJOfSlcXFxcc3swLDN9KCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZX05PX0FCQlIpfSlgO1xuY29uc3QgVElNRV9VTklUX0NPTk5FQ1RPUl9QQVRURVJOID0gYFxcXFxzezAsNX0sPyg/OlxcXFxzKmFuZCk/XFxcXHN7MCw1fWA7XG5leHBvcnQgY29uc3QgVElNRV9VTklUU19QQVRURVJOID0gcmVwZWF0ZWRUaW1ldW5pdFBhdHRlcm4oYCg/Oig/OmFib3V0fGFyb3VuZClcXFxcc3swLDN9KT9gLCBTSU5HTEVfVElNRV9VTklUX1BBVFRFUk4sIFRJTUVfVU5JVF9DT05ORUNUT1JfUEFUVEVSTik7XG5leHBvcnQgY29uc3QgVElNRV9VTklUU19OT19BQkJSX1BBVFRFUk4gPSByZXBlYXRlZFRpbWV1bml0UGF0dGVybihgKD86KD86YWJvdXR8YXJvdW5kKVxcXFxzezAsM30pP2AsIFNJTkdMRV9USU1FX1VOSVRfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRfQ09OTkVDVE9SX1BBVFRFUk4pO1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlVGltZVVuaXRzKHRpbWV1bml0VGV4dCkge1xuICAgIGNvbnN0IGZyYWdtZW50cyA9IHt9O1xuICAgIGxldCByZW1haW5pbmdUZXh0ID0gdGltZXVuaXRUZXh0O1xuICAgIGxldCBtYXRjaCA9IFNJTkdMRV9USU1FX1VOSVRfUkVHRVguZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICB3aGlsZSAobWF0Y2gpIHtcbiAgICAgICAgY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCk7XG4gICAgICAgIHJlbWFpbmluZ1RleHQgPSByZW1haW5pbmdUZXh0LnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgbWF0Y2ggPSBTSU5HTEVfVElNRV9VTklUX1JFR0VYLmV4ZWMocmVtYWluaW5nVGV4dCk7XG4gICAgfVxuICAgIGlmIChPYmplY3Qua2V5cyhmcmFnbWVudHMpLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gZnJhZ21lbnRzO1xufVxuZnVuY3Rpb24gY29sbGVjdERhdGVUaW1lRnJhZ21lbnQoZnJhZ21lbnRzLCBtYXRjaCkge1xuICAgIGlmIChtYXRjaFswXS5tYXRjaCgvXlthLXpBLVpdKyQvKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG51bSA9IHBhcnNlTnVtYmVyUGF0dGVybihtYXRjaFsxXSk7XG4gICAgY29uc3QgdW5pdCA9IFRJTUVfVU5JVF9ESUNUSU9OQVJZW21hdGNoWzJdLnRvTG93ZXJDYXNlKCldO1xuICAgIGZyYWdtZW50c1t1bml0XSA9IG51bTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50cy5qcy5tYXAiLCJleHBvcnQgY2xhc3MgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmNhY2hlZElubmVyUGF0dGVybiA9IG51bGw7XG4gICAgICAgIHRoaXMuY2FjaGVkUGF0dGVybiA9IG51bGw7XG4gICAgfVxuICAgIGlubmVyUGF0dGVybkhhc0NoYW5nZShjb250ZXh0LCBjdXJyZW50SW5uZXJQYXR0ZXJuKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KSAhPT0gY3VycmVudElubmVyUGF0dGVybjtcbiAgICB9XG4gICAgcGF0dGVybkxlZnRCb3VuZGFyeSgpIHtcbiAgICAgICAgcmV0dXJuIGAoXFxcXFd8XilgO1xuICAgIH1cbiAgICBwYXR0ZXJuKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuaW5uZXJQYXR0ZXJuSGFzQ2hhbmdlKGNvbnRleHQsIHRoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZWRJbm5lclBhdHRlcm4gPSB0aGlzLmlubmVyUGF0dGVybihjb250ZXh0KTtcbiAgICAgICAgdGhpcy5jYWNoZWRQYXR0ZXJuID0gbmV3IFJlZ0V4cChgJHt0aGlzLnBhdHRlcm5MZWZ0Qm91bmRhcnkoKX0ke3RoaXMuY2FjaGVkSW5uZXJQYXR0ZXJuLnNvdXJjZX1gLCB0aGlzLmNhY2hlZElubmVyUGF0dGVybi5mbGFncyk7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZFBhdHRlcm47XG4gICAgfVxuICAgIGV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gbWF0Y2hbMV0gPz8gXCJcIjtcbiAgICAgICAgbWF0Y2guaW5kZXggPSBtYXRjaC5pbmRleCArIGhlYWRlci5sZW5ndGg7XG4gICAgICAgIG1hdGNoWzBdID0gbWF0Y2hbMF0uc3Vic3RyaW5nKGhlYWRlci5sZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IG1hdGNoLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBtYXRjaFtpIC0gMV0gPSBtYXRjaFtpXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS5qcy5tYXAiLCJpbXBvcnQgeyBUSU1FX1VOSVRTX1BBVFRFUk4sIHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHMuanNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS5qc1wiO1xuY29uc3QgUEFUVEVSTl9XSVRIX09QVElPTkFMX1BSRUZJWCA9IG5ldyBSZWdFeHAoYCg/Oig/OndpdGhpbnxpbnxmb3IpXFxcXHMqKT9gICtcbiAgICBgKD86KD86YWJvdXR8YXJvdW5kfHJvdWdobHl8YXBwcm94aW1hdGVseXxqdXN0KVxcXFxzKig/On5cXFxccyopPyk/KCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFBBVFRFUk5fV0lUSF9QUkVGSVggPSBuZXcgUmVnRXhwKGAoPzp3aXRoaW58aW58Zm9yKVxcXFxzKmAgK1xuICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX1BBVFRFUk59KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgUEFUVEVSTl9XSVRIX1BSRUZJWF9TVFJJQ1QgPSBuZXcgUmVnRXhwKGAoPzp3aXRoaW58aW58Zm9yKVxcXFxzKmAgK1xuICAgIGAoPzooPzphYm91dHxhcm91bmR8cm91Z2hseXxhcHByb3hpbWF0ZWx5fGp1c3QpXFxcXHMqKD86flxcXFxzKik/KT8oJHtUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTn0pKD89XFxcXFd8JClgLCBcImlcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gc3RyaWN0TW9kZTtcbiAgICB9XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIFBBVFRFUk5fV0lUSF9QUkVGSVhfU1RSSUNUO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb250ZXh0Lm9wdGlvbi5mb3J3YXJkRGF0ZSA/IFBBVFRFUk5fV0lUSF9PUFRJT05BTF9QUkVGSVggOiBQQVRURVJOX1dJVEhfUFJFRklYO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eZm9yXFxzKnRoZVxccypcXHcrLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHBhcnNlVGltZVVuaXRzKG1hdGNoWzFdKTtcbiAgICAgICAgaWYgKCF0aW1lVW5pdHMpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UoY29udGV4dC5yZWZlcmVuY2UsIHRpbWVVbml0cyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlci5qcy5tYXAiLCJpbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFycy5qc1wiO1xuaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiwgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuLmpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkuanNcIjtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAoPzpvblxcXFxzezAsM30pP2AgK1xuICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICBgKD86YCArXG4gICAgYFxcXFxzezAsM30oPzp0b3xcXFxcLXxcXFxc4oCTfHVudGlsfHRocm91Z2h8dGlsbCk/XFxcXHN7MCwzfWAgK1xuICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSlgICtcbiAgICBcIik/XCIgK1xuICAgIGAoPzotfC98XFxcXHN7MCwzfSg/Om9mKT9cXFxcc3swLDN9KWAgK1xuICAgIGAoJHttYXRjaEFueVBhdHRlcm4oTU9OVEhfRElDVElPTkFSWSl9KWAgK1xuICAgIFwiKD86XCIgK1xuICAgIGAoPzotfC98LD9cXFxcc3swLDN9KWAgK1xuICAgIGAoJHtZRUFSX1BBVFRFUk59KD8hXFxcXHcpKWAgK1xuICAgIFwiKT9cIiArXG4gICAgXCIoPz1cXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBEQVRFX0dST1VQID0gMTtcbmNvbnN0IERBVEVfVE9fR1JPVVAgPSAyO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgY29uc3QgbW9udGggPSBNT05USF9ESUNUSU9OQVJZW21hdGNoW01PTlRIX05BTUVfR1JPVVBdLnRvTG93ZXJDYXNlKCldO1xuICAgICAgICBjb25zdCBkYXkgPSBwYXJzZU9yZGluYWxOdW1iZXJQYXR0ZXJuKG1hdGNoW0RBVEVfR1JPVVBdKTtcbiAgICAgICAgaWYgKGRheSA+IDMxKSB7XG4gICAgICAgICAgICBtYXRjaC5pbmRleCA9IG1hdGNoLmluZGV4ICsgbWF0Y2hbREFURV9HUk9VUF0ubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcIm1vbnRoXCIsIG1vbnRoKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXJOdW1iZXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhck51bWJlcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCBkYXksIG1vbnRoKTtcbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW0RBVEVfVE9fR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCBlbmREYXRlID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX1RPX0dST1VQXSk7XG4gICAgICAgICAgICByZXN1bHQuZW5kID0gcmVzdWx0LnN0YXJ0LmNsb25lKCk7XG4gICAgICAgICAgICByZXN1bHQuZW5kLmFzc2lnbihcImRheVwiLCBlbmREYXRlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyLmpzLm1hcCIsImltcG9ydCB7IGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uLy4uL2NhbGN1bGF0aW9uL3llYXJzLmpzXCI7XG5pbXBvcnQgeyBNT05USF9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgT1JESU5BTF9OVU1CRVJfUEFUVEVSTiwgcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybiB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm4uanNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS5qc1wiO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgXCIoPzotfC98XFxcXHMqLD9cXFxccyopXCIgK1xuICAgIGAoJHtPUkRJTkFMX05VTUJFUl9QQVRURVJOfSkoPyFcXFxccyooPzphbXxwbSkpXFxcXHMqYCArXG4gICAgXCIoPzpcIiArXG4gICAgXCIoPzp0b3xcXFxcLSlcXFxccypcIiArXG4gICAgYCgke09SRElOQUxfTlVNQkVSX1BBVFRFUk59KVxcXFxzKmAgK1xuICAgIFwiKT9cIiArXG4gICAgXCIoPzpcIiArXG4gICAgYCg/Oi18L3xcXFxccyosXFxcXHMqfFxcXFxzKylgICtcbiAgICBgKCR7WUVBUl9QQVRURVJOfSlgICtcbiAgICBcIik/XCIgK1xuICAgIFwiKD89XFxcXFd8JCkoPyFcXFxcOlxcXFxkKVwiLCBcImlcIik7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMTtcbmNvbnN0IERBVEVfR1JPVVAgPSAyO1xuY29uc3QgREFURV9UT19HUk9VUCA9IDM7XG5jb25zdCBZRUFSX0dST1VQID0gNDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHNob3VsZFNraXBZZWFyTGlrZURhdGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zaG91bGRTa2lwWWVhckxpa2VEYXRlID0gc2hvdWxkU2tpcFllYXJMaWtlRGF0ZTtcbiAgICB9XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gUEFUVEVSTjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgY29uc3QgZGF5ID0gcGFyc2VPcmRpbmFsTnVtYmVyUGF0dGVybihtYXRjaFtEQVRFX0dST1VQXSk7XG4gICAgICAgIGlmIChkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2hvdWxkU2tpcFllYXJMaWtlRGF0ZSkge1xuICAgICAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSAmJiAhbWF0Y2hbWUVBUl9HUk9VUF0gJiYgbWF0Y2hbREFURV9HUk9VUF0ubWF0Y2goL14yWzAtNV0kLykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dFxuICAgICAgICAgICAgLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHtcbiAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICB9KVxuICAgICAgICAgICAgLmFkZFRhZyhcInBhcnNlci9FTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlclwiKTtcbiAgICAgICAgaWYgKG1hdGNoW1lFQVJfR1JPVVBdKSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VZZWFyKG1hdGNoW1lFQVJfR1JPVVBdKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFtYXRjaFtEQVRFX1RPX0dST1VQXSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IHBhcnNlT3JkaW5hbE51bWJlclBhdHRlcm4obWF0Y2hbREFURV9UT19HUk9VUF0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQobWF0Y2guaW5kZXgsIG1hdGNoWzBdKTtcbiAgICAgICAgcmVzdWx0LnN0YXJ0ID0gY29tcG9uZW50cztcbiAgICAgICAgcmVzdWx0LmVuZCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcbiAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJkYXlcIiwgZW5kRGF0ZSk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIuanMubWFwIiwiaW1wb3J0IHsgRlVMTF9NT05USF9OQU1FX0RJQ1RJT05BUlksIE1PTlRIX0RJQ1RJT05BUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBmaW5kWWVhckNsb3Nlc3RUb1JlZiB9IGZyb20gXCIuLi8uLi8uLi9jYWxjdWxhdGlvbi95ZWFycy5qc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm4uanNcIjtcbmltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LmpzXCI7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChgKCg/OmluKVxcXFxzKik/YCArXG4gICAgYCgke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pYCArXG4gICAgYFxcXFxzKmAgK1xuICAgIGAoPzpgICtcbiAgICBgKD86LHwtfG9mKT9cXFxccyooJHtZRUFSX1BBVFRFUk59KT9gICtcbiAgICBcIik/XCIgK1xuICAgIFwiKD89W15cXFxcc1xcXFx3XXxcXFxccytbXjAtOV18XFxcXHMrJHwkKVwiLCBcImlcIik7XG5jb25zdCBQUkVGSVhfR1JPVVAgPSAxO1xuY29uc3QgTU9OVEhfTkFNRV9HUk9VUCA9IDI7XG5jb25zdCBZRUFSX0dST1VQID0gMztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTW9udGhOYW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBtb250aE5hbWUgPSBtYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAobWF0Y2hbMF0ubGVuZ3RoIDw9IDMgJiYgIUZVTExfTU9OVEhfTkFNRV9ESUNUSU9OQVJZW21vbnRoTmFtZV0pIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCArIChtYXRjaFtQUkVGSVhfR1JPVVBdIHx8IFwiXCIpLmxlbmd0aCwgbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgMSk7XG4gICAgICAgIHJlc3VsdC5zdGFydC5hZGRUYWcoXCJwYXJzZXIvRU5Nb250aE5hbWVQYXJzZXJcIik7XG4gICAgICAgIGNvbnN0IG1vbnRoID0gTU9OVEhfRElDVElPTkFSWVttb250aE5hbWVdO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZFllYXJDbG9zZXN0VG9SZWYoY29udGV4dC5yZWZEYXRlLCAxLCBtb250aCk7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RU5Nb250aE5hbWVQYXJzZXIuanMubWFwIiwiaW1wb3J0IHsgTU9OVEhfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IG1hdGNoQW55UGF0dGVybiB9IGZyb20gXCIuLi8uLi8uLi91dGlscy9wYXR0ZXJuLmpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkuanNcIjtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAoWzAtOV17NH0pWy1cXFxcLlxcXFwvXFxcXHNdYCArXG4gICAgYCg/Oigke21hdGNoQW55UGF0dGVybihNT05USF9ESUNUSU9OQVJZKX0pfChbMC05XXsxLDJ9KSlbLVxcXFwuXFxcXC9cXFxcc11gICtcbiAgICBgKFswLTldezEsMn0pYCArXG4gICAgXCIoPz1cXFxcV3wkKVwiLCBcImlcIik7XG5jb25zdCBZRUFSX05VTUJFUl9HUk9VUCA9IDE7XG5jb25zdCBNT05USF9OQU1FX0dST1VQID0gMjtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDQ7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlllYXJNb250aERheVBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb250aERhdGVPcmRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cmljdE1vbnRoRGF0ZU9yZGVyID0gc3RyaWN0TW9udGhEYXRlT3JkZXI7XG4gICAgfVxuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9OVU1CRVJfR1JPVVBdKTtcbiAgICAgICAgbGV0IGRheSA9IHBhcnNlSW50KG1hdGNoW0RBVEVfTlVNQkVSX0dST1VQXSk7XG4gICAgICAgIGxldCBtb250aCA9IG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF1cbiAgICAgICAgICAgID8gcGFyc2VJbnQobWF0Y2hbTU9OVEhfTlVNQkVSX0dST1VQXSlcbiAgICAgICAgICAgIDogTU9OVEhfRElDVElPTkFSWVttYXRjaFtNT05USF9OQU1FX0dST1VQXS50b0xvd2VyQ2FzZSgpXTtcbiAgICAgICAgaWYgKG1vbnRoIDwgMSB8fCBtb250aCA+IDEyKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb250aERhdGVPcmRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGRheSA+PSAxICYmIGRheSA8PSAxMikge1xuICAgICAgICAgICAgICAgIFttb250aCwgZGF5XSA9IFtkYXksIG1vbnRoXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRheTogZGF5LFxuICAgICAgICAgICAgbW9udGg6IG1vbnRoLFxuICAgICAgICAgICAgeWVhcjogeWVhcixcbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FTlllYXJNb250aERheVBhcnNlci5qcy5tYXAiLCJpbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkuanNcIjtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKFwiKFswLTldfDBbMS05XXwxWzAxMl0pLyhbMC05XXs0fSlcIiArIFwiXCIsIFwiaVwiKTtcbmNvbnN0IE1PTlRIX0dST1VQID0gMTtcbmNvbnN0IFlFQVJfR1JPVVAgPSAyO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB5ZWFyID0gcGFyc2VJbnQobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICBjb25zdCBtb250aCA9IHBhcnNlSW50KG1hdGNoW01PTlRIX0dST1VQXSk7XG4gICAgICAgIHJldHVybiBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCkuaW1wbHkoXCJkYXlcIiwgMSkuYXNzaWduKFwibW9udGhcIiwgbW9udGgpLmFzc2lnbihcInllYXJcIiwgeWVhcik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RU5TbGFzaE1vbnRoRm9ybWF0UGFyc2VyLmpzLm1hcCIsImltcG9ydCB7IE1lcmlkaWVtIH0gZnJvbSBcIi4uLy4uL3R5cGVzLmpzXCI7XG5mdW5jdGlvbiBwcmltYXJ5VGltZVBhdHRlcm4obGVmdEJvdW5kYXJ5LCBwcmltYXJ5UHJlZml4LCBwcmltYXJ5U3VmZml4LCBmbGFncykge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGAke2xlZnRCb3VuZGFyeX1gICtcbiAgICAgICAgYCR7cHJpbWFyeVByZWZpeH1gICtcbiAgICAgICAgYChcXFxcZHsxLDR9KWAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgIGAoPzpcXFxcLnw6fO+8milgICtcbiAgICAgICAgYChcXFxcZHsxLDJ9KWAgK1xuICAgICAgICBgKD86YCArXG4gICAgICAgIGAoPzo6fO+8milgICtcbiAgICAgICAgYChcXFxcZHsyfSlgICtcbiAgICAgICAgYCg/OlxcXFwuKFxcXFxkezEsNn0pKT9gICtcbiAgICAgICAgYCk/YCArXG4gICAgICAgIGApP2AgK1xuICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICBgJHtwcmltYXJ5U3VmZml4fWAsIGZsYWdzKTtcbn1cbmZ1bmN0aW9uIGZvbGxvd2luZ1RpbWVQYXR0ZW4oZm9sbG93aW5nUGhhc2UsIGZvbGxvd2luZ1N1ZmZpeCkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKGBeKCR7Zm9sbG93aW5nUGhhc2V9KWAgK1xuICAgICAgICBgKFxcXFxkezEsNH0pYCArXG4gICAgICAgIGAoPzpgICtcbiAgICAgICAgYCg/OlxcXFwufFxcXFw6fFxcXFzvvJopYCArXG4gICAgICAgIGAoXFxcXGR7MSwyfSlgICtcbiAgICAgICAgYCg/OmAgK1xuICAgICAgICBgKD86XFxcXC58XFxcXDp8XFxcXO+8milgICtcbiAgICAgICAgYChcXFxcZHsxLDJ9KSg/OlxcXFwuKFxcXFxkezEsNn0pKT9gICtcbiAgICAgICAgYCk/YCArXG4gICAgICAgIGApP2AgK1xuICAgICAgICBgKD86XFxcXHMqKGFcXFxcLm1cXFxcLnxwXFxcXC5tXFxcXC58YW0/fHBtPykpP2AgK1xuICAgICAgICBgJHtmb2xsb3dpbmdTdWZmaXh9YCwgXCJpXCIpO1xufVxuY29uc3QgSE9VUl9HUk9VUCA9IDI7XG5jb25zdCBNSU5VVEVfR1JPVVAgPSAzO1xuY29uc3QgU0VDT05EX0dST1VQID0gNDtcbmNvbnN0IE1JTExJX1NFQ09ORF9HUk9VUCA9IDU7XG5jb25zdCBBTV9QTV9IT1VSX0dST1VQID0gNjtcbmV4cG9ydCBjbGFzcyBBYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyIHtcbiAgICBjb25zdHJ1Y3RvcihzdHJpY3RNb2RlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID0gbnVsbDtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBudWxsO1xuICAgICAgICB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW4gPSBudWxsO1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cbiAgICBwYXR0ZXJuRmxhZ3MoKSB7XG4gICAgICAgIHJldHVybiBcImlcIjtcbiAgICB9XG4gICAgcHJpbWFyeVBhdHRlcm5MZWZ0Qm91bmRhcnkoKSB7XG4gICAgICAgIHJldHVybiBgKF58XFxcXHN8VHxcXFxcYilgO1xuICAgIH1cbiAgICBwcmltYXJ5U3VmZml4KCkge1xuICAgICAgICByZXR1cm4gYCg/IS8pKD89XFxcXFd8JClgO1xuICAgIH1cbiAgICBmb2xsb3dpbmdTdWZmaXgoKSB7XG4gICAgICAgIHJldHVybiBgKD8hLykoPz1cXFxcV3wkKWA7XG4gICAgfVxuICAgIHBhdHRlcm4oY29udGV4dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRQcmltYXJ5VGltZVBhdHRlcm5UaHJvdWdoQ2FjaGUoKTtcbiAgICB9XG4gICAgZXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBzdGFydENvbXBvbmVudHMgPSB0aGlzLmV4dHJhY3RQcmltYXJ5VGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gpO1xuICAgICAgICBpZiAoIXN0YXJ0Q29tcG9uZW50cykge1xuICAgICAgICAgICAgaWYgKG1hdGNoWzBdLm1hdGNoKC9eXFxkezR9LykpIHtcbiAgICAgICAgICAgICAgICBtYXRjaC5pbmRleCArPSA0O1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWF0Y2guaW5kZXggKz0gbWF0Y2hbMF0ubGVuZ3RoO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSBtYXRjaC5pbmRleCArIG1hdGNoWzFdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgdGV4dCA9IG1hdGNoWzBdLnN1YnN0cmluZyhtYXRjaFsxXS5sZW5ndGgpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdSZXN1bHQoaW5kZXgsIHRleHQsIHN0YXJ0Q29tcG9uZW50cyk7XG4gICAgICAgIG1hdGNoLmluZGV4ICs9IG1hdGNoWzBdLmxlbmd0aDtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nVGV4dCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdQYXR0ZXJuID0gdGhpcy5nZXRGb2xsb3dpbmdUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpO1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdNYXRjaCA9IGZvbGxvd2luZ1BhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgaWYgKHRleHQubWF0Y2goL15cXGR7Myw0fS8pICYmIGZvbGxvd2luZ01hdGNoKSB7XG4gICAgICAgICAgICBpZiAoZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHsyLDR9JC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHsyfVxcV1xcZHsyfS8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFmb2xsb3dpbmdNYXRjaCB8fFxuICAgICAgICAgICAgZm9sbG93aW5nTWF0Y2hbMF0ubWF0Y2goL15cXHMqKFsrLV0pXFxzKlxcZHszLDR9JC8pKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGVja0FuZFJldHVybldpdGhvdXRGb2xsb3dpbmdQYXR0ZXJuKHJlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LmVuZCA9IHRoaXMuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIGZvbGxvd2luZ01hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAocmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gZm9sbG93aW5nTWF0Y2hbMF07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tBbmRSZXR1cm5XaXRoRm9sbG93aW5nUGF0dGVybihyZXN1bHQpO1xuICAgIH1cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoLCBzdHJpY3QgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gbnVsbDtcbiAgICAgICAgbGV0IGhvdXIgPSBwYXJzZUludChtYXRjaFtIT1VSX0dST1VQXSk7XG4gICAgICAgIGlmIChob3VyID4gMTAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5zdHJpY3RNb2RlIHx8IG1hdGNoW01JTlVURV9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWludXRlID0gaG91ciAlIDEwMDtcbiAgICAgICAgICAgIGhvdXIgPSBNYXRoLmZsb29yKGhvdXIgLyAxMDApO1xuICAgICAgICB9XG4gICAgICAgIGlmIChob3VyID4gMjQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdLmxlbmd0aCA9PSAxICYmICFtYXRjaFtBTV9QTV9IT1VSX0dST1VQXSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbWludXRlID0gcGFyc2VJbnQobWF0Y2hbTUlOVVRFX0dST1VQXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1pbnV0ZSA+PSA2MCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPiAxMikge1xuICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbQU1fUE1fSE9VUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgaWYgKGhvdXIgPiAxMilcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhbXBtID09IFwicFwiKSB7XG4gICAgICAgICAgICAgICAgbWVyaWRpZW0gPSBNZXJpZGllbS5QTTtcbiAgICAgICAgICAgICAgICBpZiAoaG91ciAhPSAxMikge1xuICAgICAgICAgICAgICAgICAgICBob3VyICs9IDEyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gICAgICAgIGlmIChtZXJpZGllbSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBtZXJpZGllbSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW01JTExJX1NFQ09ORF9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgbWlsbGlzZWNvbmQgPSBwYXJzZUludChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdLnN1YnN0cmluZygwLCAzKSk7XG4gICAgICAgICAgICBpZiAobWlsbGlzZWNvbmQgPj0gMTAwMClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWlsbGlzZWNvbmRcIiwgbWlsbGlzZWNvbmQpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaFtTRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlY29uZCA9IHBhcnNlSW50KG1hdGNoW1NFQ09ORF9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHNlY29uZCA+PSA2MClcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwic2Vjb25kXCIsIHNlY29uZCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIGV4dHJhY3RGb2xsb3dpbmdUaW1lQ29tcG9uZW50cyhjb250ZXh0LCBtYXRjaCwgcmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIGlmIChtYXRjaFtNSUxMSV9TRUNPTkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IG1pbGxpc2Vjb25kID0gcGFyc2VJbnQobWF0Y2hbTUlMTElfU0VDT05EX0dST1VQXS5zdWJzdHJpbmcoMCwgMykpO1xuICAgICAgICAgICAgaWYgKG1pbGxpc2Vjb25kID49IDEwMDApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIG1pbGxpc2Vjb25kKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbU0VDT05EX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBzZWNvbmQgPSBwYXJzZUludChtYXRjaFtTRUNPTkRfR1JPVVBdKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmQgPj0gNjApXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcInNlY29uZFwiLCBzZWNvbmQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBob3VyID0gcGFyc2VJbnQobWF0Y2hbSE9VUl9HUk9VUF0pO1xuICAgICAgICBsZXQgbWludXRlID0gMDtcbiAgICAgICAgbGV0IG1lcmlkaWVtID0gLTE7XG4gICAgICAgIGlmIChtYXRjaFtNSU5VVEVfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IHBhcnNlSW50KG1hdGNoW01JTlVURV9HUk9VUF0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGhvdXIgPiAxMDApIHtcbiAgICAgICAgICAgIG1pbnV0ZSA9IGhvdXIgJSAxMDA7XG4gICAgICAgICAgICBob3VyID0gTWF0aC5mbG9vcihob3VyIC8gMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWludXRlID49IDYwIHx8IGhvdXIgPiAyNCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGhvdXIgPj0gMTIpIHtcbiAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoW0FNX1BNX0hPVVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFtcG0gPSBtYXRjaFtBTV9QTV9IT1VSX0dST1VQXVswXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICAgICAgaWYgKGFtcG0gPT0gXCJhXCIpIHtcbiAgICAgICAgICAgICAgICBtZXJpZGllbSA9IE1lcmlkaWVtLkFNO1xuICAgICAgICAgICAgICAgIGlmIChob3VyID09IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvdXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbXBvbmVudHMuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW1wbSA9PSBcInBcIikge1xuICAgICAgICAgICAgICAgIG1lcmlkaWVtID0gTWVyaWRpZW0uUE07XG4gICAgICAgICAgICAgICAgaWYgKGhvdXIgIT0gMTIpXG4gICAgICAgICAgICAgICAgICAgIGhvdXIgKz0gMTI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICAgICAgICAgIGlmIChtZXJpZGllbSA9PSBNZXJpZGllbS5BTSkge1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA9PSAxMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5nZXQoXCJob3VyXCIpICE9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwiaG91clwiLCByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcImhvdXJcIiwgaG91cik7XG4gICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwibWludXRlXCIsIG1pbnV0ZSk7XG4gICAgICAgIGlmIChtZXJpZGllbSA+PSAwKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIG1lcmlkaWVtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0QXRQTSA9IHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSAmJiByZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSA+IDEyO1xuICAgICAgICAgICAgaWYgKHN0YXJ0QXRQTSkge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuZ2V0KFwiaG91clwiKSAtIDEyID4gaG91cikge1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChob3VyIDw9IDEyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBob3VyICsgMTIpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChob3VyID4gMTIpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoaG91ciA8PSAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNvbXBvbmVudHMuZGF0ZSgpLmdldFRpbWUoKSA8IHJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGNvbXBvbmVudHMuZ2V0KFwiZGF5XCIpICsgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxuICAgIGNoZWNrQW5kUmV0dXJuV2l0aG91dEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZCQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9eXFxkXFxkXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lm1hdGNoKC9cXGRbYXBBUF0kLykpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVuZGluZ1dpdGhOdW1iZXJzID0gcmVzdWx0LnRleHQubWF0Y2goL1teXFxkOi5dKFxcZFtcXGQuXSspJC8pO1xuICAgICAgICBpZiAoZW5kaW5nV2l0aE51bWJlcnMpIHtcbiAgICAgICAgICAgIGNvbnN0IGVuZGluZ051bWJlcnMgPSBlbmRpbmdXaXRoTnVtYmVyc1sxXTtcbiAgICAgICAgICAgIGlmICh0aGlzLnN0cmljdE1vZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJzLmluY2x1ZGVzKFwiLlwiKSAmJiAhZW5kaW5nTnVtYmVycy5tYXRjaCgvXFxkKFxcLlxcZHsyfSkrJC8pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJWYWwgPSBwYXJzZUludChlbmRpbmdOdW1iZXJzKTtcbiAgICAgICAgICAgIGlmIChlbmRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGNoZWNrQW5kUmV0dXJuV2l0aEZvbGxvd2luZ1BhdHRlcm4ocmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQudGV4dC5tYXRjaCgvXlxcZCstXFxkKyQvKSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW5kaW5nV2l0aE51bWJlcnMgPSByZXN1bHQudGV4dC5tYXRjaCgvW15cXGQ6Ll0oXFxkW1xcZC5dKylcXHMqLVxccyooXFxkW1xcZC5dKykkLyk7XG4gICAgICAgIGlmIChlbmRpbmdXaXRoTnVtYmVycykge1xuICAgICAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3RhcnRpbmdOdW1iZXJzID0gZW5kaW5nV2l0aE51bWJlcnNbMV07XG4gICAgICAgICAgICBjb25zdCBlbmRpbmdOdW1iZXJzID0gZW5kaW5nV2l0aE51bWJlcnNbMl07XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVycy5pbmNsdWRlcyhcIi5cIikgJiYgIWVuZGluZ051bWJlcnMubWF0Y2goL1xcZChcXC5cXGR7Mn0pKyQvKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZW5kaW5nTnVtYmVyVmFsID0gcGFyc2VJbnQoZW5kaW5nTnVtYmVycyk7XG4gICAgICAgICAgICBjb25zdCBzdGFydGluZ051bWJlclZhbCA9IHBhcnNlSW50KHN0YXJ0aW5nTnVtYmVycyk7XG4gICAgICAgICAgICBpZiAoZW5kaW5nTnVtYmVyVmFsID4gMjQgfHwgc3RhcnRpbmdOdW1iZXJWYWwgPiAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGdldFByaW1hcnlUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgcHJpbWFyeVByZWZpeCA9IHRoaXMucHJpbWFyeVByZWZpeCgpO1xuICAgICAgICBjb25zdCBwcmltYXJ5U3VmZml4ID0gdGhpcy5wcmltYXJ5U3VmZml4KCk7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlZFByaW1hcnlQcmVmaXggPT09IHByaW1hcnlQcmVmaXggJiYgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID09PSBwcmltYXJ5U3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5VGltZVBhdHRlcm4gPSBwcmltYXJ5VGltZVBhdHRlcm4odGhpcy5wcmltYXJ5UGF0dGVybkxlZnRCb3VuZGFyeSgpLCBwcmltYXJ5UHJlZml4LCBwcmltYXJ5U3VmZml4LCB0aGlzLnBhdHRlcm5GbGFncygpKTtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5UHJlZml4ID0gcHJpbWFyeVByZWZpeDtcbiAgICAgICAgdGhpcy5jYWNoZWRQcmltYXJ5U3VmZml4ID0gcHJpbWFyeVN1ZmZpeDtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2FjaGVkUHJpbWFyeVRpbWVQYXR0ZXJuO1xuICAgIH1cbiAgICBnZXRGb2xsb3dpbmdUaW1lUGF0dGVyblRocm91Z2hDYWNoZSgpIHtcbiAgICAgICAgY29uc3QgZm9sbG93aW5nUGhhc2UgPSB0aGlzLmZvbGxvd2luZ1BoYXNlKCk7XG4gICAgICAgIGNvbnN0IGZvbGxvd2luZ1N1ZmZpeCA9IHRoaXMuZm9sbG93aW5nU3VmZml4KCk7XG4gICAgICAgIGlmICh0aGlzLmNhY2hlZEZvbGxvd2luZ1BoYXNlID09PSBmb2xsb3dpbmdQaGFzZSAmJiB0aGlzLmNhY2hlZEZvbGxvd2luZ1N1ZmZpeCA9PT0gZm9sbG93aW5nU3VmZml4KSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jYWNoZWRGb2xsb3dpbmdUaW1lUGF0dGVuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nVGltZVBhdHRlbiA9IGZvbGxvd2luZ1RpbWVQYXR0ZW4oZm9sbG93aW5nUGhhc2UsIGZvbGxvd2luZ1N1ZmZpeCk7XG4gICAgICAgIHRoaXMuY2FjaGVkRm9sbG93aW5nUGhhc2UgPSBmb2xsb3dpbmdQaGFzZTtcbiAgICAgICAgdGhpcy5jYWNoZWRGb2xsb3dpbmdTdWZmaXggPSBmb2xsb3dpbmdTdWZmaXg7XG4gICAgICAgIHJldHVybiB0aGlzLmNhY2hlZEZvbGxvd2luZ1RpbWVQYXR0ZW47XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9QWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlci5qcy5tYXAiLCJpbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi8uLi8uLi90eXBlcy5qc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFRpbWVFeHByZXNzaW9uUGFyc2VyLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RUaW1lRXhwcmVzc2lvblBhcnNlciB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcihzdHJpY3RNb2RlKTtcbiAgICB9XG4gICAgZm9sbG93aW5nUGhhc2UoKSB7XG4gICAgICAgIHJldHVybiBcIlxcXFxzKig/OlxcXFwtfFxcXFzigJN8XFxcXH58XFxcXOOAnHx0b3x1bnRpbHx0aHJvdWdofHRpbGx8XFxcXD8pXFxcXHMqXCI7XG4gICAgfVxuICAgIHByaW1hcnlQcmVmaXgoKSB7XG4gICAgICAgIHJldHVybiBcIig/Oig/OmF0fGZyb20pXFxcXHMqKT8/XCI7XG4gICAgfVxuICAgIHByaW1hcnlTdWZmaXgoKSB7XG4gICAgICAgIHJldHVybiBcIig/OlxcXFxzKig/Om9cXFxcVypjbG9ja3xhdFxcXFxzKm5pZ2h0fGluXFxcXHMqdGhlXFxcXHMqKD86bW9ybmluZ3xhZnRlcm5vb24pKSk/KD8hLykoPz1cXFxcV3wkKVwiO1xuICAgIH1cbiAgICBleHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBzdXBlci5leHRyYWN0UHJpbWFyeVRpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgaWYgKCFjb21wb25lbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9uZW50cztcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2hbMF0uZW5kc1dpdGgoXCJuaWdodFwiKSkge1xuICAgICAgICAgICAgY29uc3QgaG91ciA9IGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKTtcbiAgICAgICAgICAgIGlmIChob3VyID49IDYgJiYgaG91ciA8IDEyKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIGNvbXBvbmVudHMuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGhvdXIgPCA2KSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwiYWZ0ZXJub29uXCIpKSB7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICAgICAgICAgIGNvbnN0IGhvdXIgPSBjb21wb25lbnRzLmdldChcImhvdXJcIik7XG4gICAgICAgICAgICBpZiAoaG91ciA+PSAwICYmIGhvdXIgPD0gNikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1hdGNoWzBdLmVuZHNXaXRoKFwibW9ybmluZ1wiKSkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtZXJpZGllbVwiLCBNZXJpZGllbS5BTSk7XG4gICAgICAgICAgICBjb25zdCBob3VyID0gY29tcG9uZW50cy5nZXQoXCJob3VyXCIpO1xuICAgICAgICAgICAgaWYgKGhvdXIgPCAxMikge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwiaG91clwiLCBjb21wb25lbnRzLmdldChcImhvdXJcIikpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9FTlRpbWVFeHByZXNzaW9uUGFyc2VyXCIpO1xuICAgIH1cbiAgICBleHRyYWN0Rm9sbG93aW5nVGltZUNvbXBvbmVudHMoY29udGV4dCwgbWF0Y2gsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCBmb2xsb3dpbmdDb21wb25lbnRzID0gc3VwZXIuZXh0cmFjdEZvbGxvd2luZ1RpbWVDb21wb25lbnRzKGNvbnRleHQsIG1hdGNoLCByZXN1bHQpO1xuICAgICAgICBpZiAoZm9sbG93aW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgZm9sbG93aW5nQ29tcG9uZW50cy5hZGRUYWcoXCJwYXJzZXIvRU5UaW1lRXhwcmVzc2lvblBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm9sbG93aW5nQ29tcG9uZW50cztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FTlRpbWVFeHByZXNzaW9uUGFyc2VyLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cykge1xuICAgIGNvbnN0IHJldmVyc2VkID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgaW4gdGltZVVuaXRzKSB7XG4gICAgICAgIHJldmVyc2VkW2tleV0gPSAtdGltZVVuaXRzW2tleV07XG4gICAgfVxuICAgIHJldHVybiByZXZlcnNlZDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRJbXBsaWVkVGltZVVuaXRzKGNvbXBvbmVudHMsIHRpbWVVbml0cykge1xuICAgIGNvbnN0IG91dHB1dCA9IGNvbXBvbmVudHMuY2xvbmUoKTtcbiAgICBsZXQgZGF0ZSA9IGNvbXBvbmVudHMuZGF5anMoKTtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKHRpbWVVbml0c1trZXldLCBrZXkpO1xuICAgIH1cbiAgICBpZiAoXCJkYXlcIiBpbiB0aW1lVW5pdHMgfHwgXCJkXCIgaW4gdGltZVVuaXRzIHx8IFwid2Vla1wiIGluIHRpbWVVbml0cyB8fCBcIm1vbnRoXCIgaW4gdGltZVVuaXRzIHx8IFwieWVhclwiIGluIHRpbWVVbml0cykge1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJkYXlcIiwgZGF0ZS5kYXRlKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgfVxuICAgIGlmIChcInNlY29uZFwiIGluIHRpbWVVbml0cyB8fCBcIm1pbnV0ZVwiIGluIHRpbWVVbml0cyB8fCBcImhvdXJcIiBpbiB0aW1lVW5pdHMpIHtcbiAgICAgICAgb3V0cHV0LmltcGx5KFwic2Vjb25kXCIsIGRhdGUuc2Vjb25kKCkpO1xuICAgICAgICBvdXRwdXQuaW1wbHkoXCJtaW51dGVcIiwgZGF0ZS5taW51dGUoKSk7XG4gICAgICAgIG91dHB1dC5pbXBseShcImhvdXJcIiwgZGF0ZS5ob3VyKCkpO1xuICAgIH1cbiAgICByZXR1cm4gb3V0cHV0O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dGltZXVuaXRzLmpzLm1hcCIsImltcG9ydCB7IHBhcnNlVGltZVVuaXRzLCBUSU1FX1VOSVRTX05PX0FCQlJfUEFUVEVSTiwgVElNRV9VTklUU19QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0cy5qc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LmpzXCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0cy5qc1wiO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfUEFUVEVSTn0pXFxcXHN7MCw1fSg/OmFnb3xiZWZvcmV8ZWFybGllcikoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFNUUklDVF9QQVRURVJOID0gbmV3IFJlZ0V4cChgKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KVxcXFxzezAsNX0oPzphZ298YmVmb3JlfGVhcmxpZXIpKD89XFxcXFd8JClgLCBcImlcIik7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gc3RyaWN0TW9kZTtcbiAgICB9XG4gICAgaW5uZXJQYXR0ZXJuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zdHJpY3RNb2RlID8gU1RSSUNUX1BBVFRFUk4gOiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgdGltZVVuaXRzID0gcGFyc2VUaW1lVW5pdHMobWF0Y2hbMV0pO1xuICAgICAgICBpZiAoIXRpbWVVbml0cykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3V0cHV0VGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCBvdXRwdXRUaW1lVW5pdHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIuanMubWFwIiwiaW1wb3J0IHsgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOLCBUSU1FX1VOSVRTX1BBVFRFUk4gfSBmcm9tIFwiLi4vY29uc3RhbnRzLmpzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzLmpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkuanNcIjtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAoJHtUSU1FX1VOSVRTX1BBVFRFUk59KVxcXFxzezAsNX0oPzpsYXRlcnxhZnRlcnxmcm9tIG5vd3xoZW5jZWZvcnRofGZvcndhcmR8b3V0KWAgKyBcIig/PSg/OlxcXFxXfCQpKVwiLCBcImlcIik7XG5jb25zdCBTVFJJQ1RfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCgke1RJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOfSlcXFxcc3swLDV9KGxhdGVyfGFmdGVyfGZyb20gbm93KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuY29uc3QgR1JPVVBfTlVNX1RJTUVVTklUUyA9IDE7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgY29uc3RydWN0b3Ioc3RyaWN0TW9kZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnN0cmljdE1vZGUgPSBzdHJpY3RNb2RlO1xuICAgIH1cbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnN0cmljdE1vZGUgPyBTVFJJQ1RfUEFUVEVSTiA6IFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFtHUk9VUF9OVU1fVElNRVVOSVRTXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVOVGltZVVuaXRMYXRlckZvcm1hdFBhcnNlci5qcy5tYXAiLCJleHBvcnQgY2xhc3MgRmlsdGVyIHtcbiAgICByZWZpbmUoY29udGV4dCwgcmVzdWx0cykge1xuICAgICAgICByZXR1cm4gcmVzdWx0cy5maWx0ZXIoKHIpID0+IHRoaXMuaXNWYWxpZChjb250ZXh0LCByKSk7XG4gICAgfVxufVxuZXhwb3J0IGNsYXNzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dCwgcmVzdWx0cykge1xuICAgICAgICBpZiAocmVzdWx0cy5sZW5ndGggPCAyKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBtZXJnZWRSZXN1bHRzID0gW107XG4gICAgICAgIGxldCBjdXJSZXN1bHQgPSByZXN1bHRzWzBdO1xuICAgICAgICBsZXQgbmV4dFJlc3VsdCA9IG51bGw7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbmV4dFJlc3VsdCA9IHJlc3VsdHNbaV07XG4gICAgICAgICAgICBjb25zdCB0ZXh0QmV0d2VlbiA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoY3VyUmVzdWx0LmluZGV4ICsgY3VyUmVzdWx0LnRleHQubGVuZ3RoLCBuZXh0UmVzdWx0LmluZGV4KTtcbiAgICAgICAgICAgIGlmICghdGhpcy5zaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1clJlc3VsdCwgbmV4dFJlc3VsdCwgY29udGV4dCkpIHtcbiAgICAgICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBuZXh0UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbGVmdCA9IGN1clJlc3VsdDtcbiAgICAgICAgICAgICAgICBjb25zdCByaWdodCA9IG5leHRSZXN1bHQ7XG4gICAgICAgICAgICAgICAgY29uc3QgbWVyZ2VkUmVzdWx0ID0gdGhpcy5tZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGxlZnQsIHJpZ2h0LCBjb250ZXh0KTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBtZXJnZWQgJHtsZWZ0fSBhbmQgJHtyaWdodH0gaW50byAke21lcmdlZFJlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjdXJSZXN1bHQgPSBtZXJnZWRSZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGN1clJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBtZXJnZWRSZXN1bHRzLnB1c2goY3VyUmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbWVyZ2VkUmVzdWx0cztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1hYnN0cmFjdFJlZmluZXJzLmpzLm1hcCIsImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIGV4dGVuZHMgTWVyZ2luZ1JlZmluZXIge1xuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCkge1xuICAgICAgICByZXR1cm4gIWN1cnJlbnRSZXN1bHQuZW5kICYmICFuZXh0UmVzdWx0LmVuZCAmJiB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGw7XG4gICAgfVxuICAgIG1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgZnJvbVJlc3VsdCwgdG9SZXN1bHQpIHtcbiAgICAgICAgaWYgKCFmcm9tUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiAhdG9SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghZnJvbVJlc3VsdC5zdGFydC5pc0NlcnRhaW4oa2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBmcm9tUmVzdWx0LnN0YXJ0LmltcGx5KGtleSwgdG9SZXN1bHQuc3RhcnQuZ2V0KGtleSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5nZXRDZXJ0YWluQ29tcG9uZW50cygpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdG9SZXN1bHQuc3RhcnQuaXNDZXJ0YWluKGtleSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoa2V5LCBmcm9tUmVzdWx0LnN0YXJ0LmdldChrZXkpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZnJvbVJlc3VsdC5zdGFydC5kYXRlKCkuZ2V0VGltZSgpID4gdG9SZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgbGV0IGZyb21Nb21lbnQgPSBmcm9tUmVzdWx0LnN0YXJ0LmRheWpzKCk7XG4gICAgICAgICAgICBsZXQgdG9Nb21lbnQgPSB0b1Jlc3VsdC5zdGFydC5kYXlqcygpO1xuICAgICAgICAgICAgaWYgKHRvUmVzdWx0LnN0YXJ0LmlzT25seVdlZWtkYXlDb21wb25lbnQoKSAmJiB0b01vbWVudC5hZGQoNywgXCJkYXlzXCIpLmlzQWZ0ZXIoZnJvbU1vbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0b01vbWVudCA9IHRvTW9tZW50LmFkZCg3LCBcImRheXNcIik7XG4gICAgICAgICAgICAgICAgdG9SZXN1bHQuc3RhcnQuaW1wbHkoXCJkYXlcIiwgdG9Nb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIHRvTW9tZW50Lm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgICAgICB0b1Jlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgdG9Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGZyb21SZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmIGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIikuaXNCZWZvcmUodG9Nb21lbnQpKSB7XG4gICAgICAgICAgICAgICAgZnJvbU1vbWVudCA9IGZyb21Nb21lbnQuYWRkKC03LCBcImRheXNcIik7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcImRheVwiLCBmcm9tTW9tZW50LmRhdGUoKSk7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIGZyb21Nb21lbnQubW9udGgoKSArIDEpO1xuICAgICAgICAgICAgICAgIGZyb21SZXN1bHQuc3RhcnQuaW1wbHkoXCJ5ZWFyXCIsIGZyb21Nb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHRvUmVzdWx0LnN0YXJ0LmlzRGF0ZVdpdGhVbmtub3duWWVhcigpICYmIHRvTW9tZW50LmFkZCgxLCBcInllYXJzXCIpLmlzQWZ0ZXIoZnJvbU1vbWVudCkpIHtcbiAgICAgICAgICAgICAgICB0b01vbWVudCA9IHRvTW9tZW50LmFkZCgxLCBcInllYXJzXCIpO1xuICAgICAgICAgICAgICAgIHRvUmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB0b01vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoZnJvbVJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSAmJiBmcm9tTW9tZW50LmFkZCgtMSwgXCJ5ZWFyc1wiKS5pc0JlZm9yZSh0b01vbWVudCkpIHtcbiAgICAgICAgICAgICAgICBmcm9tTW9tZW50ID0gZnJvbU1vbWVudC5hZGQoLTEsIFwieWVhcnNcIik7XG4gICAgICAgICAgICAgICAgZnJvbVJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgZnJvbU1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgW3RvUmVzdWx0LCBmcm9tUmVzdWx0XSA9IFtmcm9tUmVzdWx0LCB0b1Jlc3VsdF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gZnJvbVJlc3VsdC5jbG9uZSgpO1xuICAgICAgICByZXN1bHQuc3RhcnQgPSBmcm9tUmVzdWx0LnN0YXJ0O1xuICAgICAgICByZXN1bHQuZW5kID0gdG9SZXN1bHQuc3RhcnQ7XG4gICAgICAgIHJlc3VsdC5pbmRleCA9IE1hdGgubWluKGZyb21SZXN1bHQuaW5kZXgsIHRvUmVzdWx0LmluZGV4KTtcbiAgICAgICAgaWYgKGZyb21SZXN1bHQuaW5kZXggPCB0b1Jlc3VsdC5pbmRleCkge1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgPSBmcm9tUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIHRvUmVzdWx0LnRleHQ7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQudGV4dCA9IHRvUmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIGZyb21SZXN1bHQudGV4dDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLmpzLm1hcCIsImltcG9ydCBBYnN0cmFjdE1lcmdlRGF0ZVJhbmdlUmVmaW5lciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3JlZmluZXJzL0Fic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlRGF0ZVJhbmdlUmVmaW5lciBleHRlbmRzIEFic3RyYWN0TWVyZ2VEYXRlUmFuZ2VSZWZpbmVyIHtcbiAgICBwYXR0ZXJuQmV0d2VlbigpIHtcbiAgICAgICAgcmV0dXJuIC9eXFxzKih0b3wtfOKAk3x1bnRpbHx0aHJvdWdofHRpbGwpXFxzKiQvaTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FTk1lcmdlRGF0ZVJhbmdlUmVmaW5lci5qcy5tYXAiLCJpbXBvcnQgeyBNZXJpZGllbSB9IGZyb20gXCIuLi90eXBlcy5qc1wiO1xuaW1wb3J0IHsgYXNzaWduU2ltaWxhckRhdGUsIGltcGx5U2ltaWxhckRhdGUgfSBmcm9tIFwiLi4vdXRpbHMvZGF5anMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURhdGVUaW1lUmVzdWx0KGRhdGVSZXN1bHQsIHRpbWVSZXN1bHQpIHtcbiAgICBjb25zdCByZXN1bHQgPSBkYXRlUmVzdWx0LmNsb25lKCk7XG4gICAgY29uc3QgYmVnaW5EYXRlID0gZGF0ZVJlc3VsdC5zdGFydDtcbiAgICBjb25zdCBiZWdpblRpbWUgPSB0aW1lUmVzdWx0LnN0YXJ0O1xuICAgIHJlc3VsdC5zdGFydCA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoYmVnaW5EYXRlLCBiZWdpblRpbWUpO1xuICAgIGlmIChkYXRlUmVzdWx0LmVuZCAhPSBudWxsIHx8IHRpbWVSZXN1bHQuZW5kICE9IG51bGwpIHtcbiAgICAgICAgY29uc3QgZW5kRGF0ZSA9IGRhdGVSZXN1bHQuZW5kID09IG51bGwgPyBkYXRlUmVzdWx0LnN0YXJ0IDogZGF0ZVJlc3VsdC5lbmQ7XG4gICAgICAgIGNvbnN0IGVuZFRpbWUgPSB0aW1lUmVzdWx0LmVuZCA9PSBudWxsID8gdGltZVJlc3VsdC5zdGFydCA6IHRpbWVSZXN1bHQuZW5kO1xuICAgICAgICBjb25zdCBlbmREYXRlVGltZSA9IG1lcmdlRGF0ZVRpbWVDb21wb25lbnQoZW5kRGF0ZSwgZW5kVGltZSk7XG4gICAgICAgIGlmIChkYXRlUmVzdWx0LmVuZCA9PSBudWxsICYmIGVuZERhdGVUaW1lLmRhdGUoKS5nZXRUaW1lKCkgPCByZXN1bHQuc3RhcnQuZGF0ZSgpLmdldFRpbWUoKSkge1xuICAgICAgICAgICAgY29uc3QgbmV4dERheUpzID0gZW5kRGF0ZVRpbWUuZGF5anMoKS5hZGQoMSwgXCJkYXlcIik7XG4gICAgICAgICAgICBpZiAoZW5kRGF0ZVRpbWUuaXNDZXJ0YWluKFwiZGF5XCIpKSB7XG4gICAgICAgICAgICAgICAgYXNzaWduU2ltaWxhckRhdGUoZW5kRGF0ZVRpbWUsIG5leHREYXlKcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpbXBseVNpbWlsYXJEYXRlKGVuZERhdGVUaW1lLCBuZXh0RGF5SnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJlc3VsdC5lbmQgPSBlbmREYXRlVGltZTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBtZXJnZURhdGVUaW1lQ29tcG9uZW50KGRhdGVDb21wb25lbnQsIHRpbWVDb21wb25lbnQpIHtcbiAgICBjb25zdCBkYXRlVGltZUNvbXBvbmVudCA9IGRhdGVDb21wb25lbnQuY2xvbmUoKTtcbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJob3VyXCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuYXNzaWduKFwibWludXRlXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWludXRlXCIpKTtcbiAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwic2Vjb25kXCIpKSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJzZWNvbmRcIikpO1xuICAgICAgICAgICAgaWYgKHRpbWVDb21wb25lbnQuaXNDZXJ0YWluKFwibWlsbGlzZWNvbmRcIikpIHtcbiAgICAgICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtaWxsaXNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1pbGxpc2Vjb25kXCIpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIHRpbWVDb21wb25lbnQuZ2V0KFwibWlsbGlzZWNvbmRcIikpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJob3VyXCIpKTtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaW51dGVcIikpO1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCB0aW1lQ29tcG9uZW50LmdldChcInNlY29uZFwiKSk7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmltcGx5KFwibWlsbGlzZWNvbmRcIiwgdGltZUNvbXBvbmVudC5nZXQoXCJtaWxsaXNlY29uZFwiKSk7XG4gICAgfVxuICAgIGlmICh0aW1lQ29tcG9uZW50LmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgIGRhdGVUaW1lQ29tcG9uZW50LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWVDb21wb25lbnQuZ2V0KFwidGltZXpvbmVPZmZzZXRcIikpO1xuICAgIH1cbiAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJtZXJpZGllbVwiKSkge1xuICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJtZXJpZGllbVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpKTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGltZUNvbXBvbmVudC5nZXQoXCJtZXJpZGllbVwiKSAhPSBudWxsICYmIGRhdGVUaW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpID09IG51bGwpIHtcbiAgICAgICAgZGF0ZVRpbWVDb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCB0aW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpKTtcbiAgICB9XG4gICAgaWYgKGRhdGVUaW1lQ29tcG9uZW50LmdldChcIm1lcmlkaWVtXCIpID09IE1lcmlkaWVtLlBNICYmIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgPCAxMikge1xuICAgICAgICBpZiAodGltZUNvbXBvbmVudC5pc0NlcnRhaW4oXCJob3VyXCIpKSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5hc3NpZ24oXCJob3VyXCIsIGRhdGVUaW1lQ29tcG9uZW50LmdldChcImhvdXJcIikgKyAxMik7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBkYXRlVGltZUNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgZGF0ZVRpbWVDb21wb25lbnQuZ2V0KFwiaG91clwiKSArIDEyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKGRhdGVDb21wb25lbnQudGFncygpKTtcbiAgICBkYXRlVGltZUNvbXBvbmVudC5hZGRUYWdzKHRpbWVDb21wb25lbnQudGFncygpKTtcbiAgICByZXR1cm4gZGF0ZVRpbWVDb21wb25lbnQ7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1tZXJnaW5nQ2FsY3VsYXRpb24uanMubWFwIiwiaW1wb3J0IHsgTWVyZ2luZ1JlZmluZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVycy5qc1wiO1xuaW1wb3J0IHsgbWVyZ2VEYXRlVGltZVJlc3VsdCB9IGZyb20gXCIuLi8uLi9jYWxjdWxhdGlvbi9tZXJnaW5nQ2FsY3VsYXRpb24uanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KSB7XG4gICAgICAgIHJldHVybiAoKChjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBuZXh0UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkgfHxcbiAgICAgICAgICAgIChuZXh0UmVzdWx0LnN0YXJ0LmlzT25seURhdGUoKSAmJiBjdXJyZW50UmVzdWx0LnN0YXJ0LmlzT25seVRpbWUoKSkpICYmXG4gICAgICAgICAgICB0ZXh0QmV0d2Vlbi5tYXRjaCh0aGlzLnBhdHRlcm5CZXR3ZWVuKCkpICE9IG51bGwpO1xuICAgIH1cbiAgICBtZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY3VycmVudFJlc3VsdC5zdGFydC5pc09ubHlEYXRlKClcbiAgICAgICAgICAgID8gbWVyZ2VEYXRlVGltZVJlc3VsdChjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KVxuICAgICAgICAgICAgOiBtZXJnZURhdGVUaW1lUmVzdWx0KG5leHRSZXN1bHQsIGN1cnJlbnRSZXN1bHQpO1xuICAgICAgICByZXN1bHQuaW5kZXggPSBjdXJyZW50UmVzdWx0LmluZGV4O1xuICAgICAgICByZXN1bHQudGV4dCA9IGN1cnJlbnRSZXN1bHQudGV4dCArIHRleHRCZXR3ZWVuICsgbmV4dFJlc3VsdC50ZXh0O1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIuanMubWFwIiwiaW1wb3J0IEFic3RyYWN0TWVyZ2VEYXRlVGltZVJlZmluZXIgZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9yZWZpbmVycy9BYnN0cmFjdE1lcmdlRGF0ZVRpbWVSZWZpbmVyLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGV4dGVuZHMgQWJzdHJhY3RNZXJnZURhdGVUaW1lUmVmaW5lciB7XG4gICAgcGF0dGVybkJldHdlZW4oKSB7XG4gICAgICAgIHJldHVybiBuZXcgUmVnRXhwKFwiXlxcXFxzKihUfGF0fGFmdGVyfGJlZm9yZXxvbnxvZnwsfC18XFxcXC584oiZfDopP1xcXFxzKiRcIik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RU5NZXJnZURhdGVUaW1lUmVmaW5lci5qcy5tYXAiLCJpbXBvcnQgeyB0b1RpbWV6b25lT2Zmc2V0IH0gZnJvbSBcIi4uLy4uL3RpbWV6b25lLmpzXCI7XG5jb25zdCBUSU1FWk9ORV9OQU1FX1BBVFRFUk4gPSBuZXcgUmVnRXhwKFwiXlxcXFxzKiw/XFxcXHMqXFxcXCg/KFtBLVpdezIsNH0pXFxcXCk/KD89XFxcXFd8JClcIiwgXCJpXCIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRXh0cmFjdFRpbWV6b25lQWJiclJlZmluZXIge1xuICAgIGNvbnN0cnVjdG9yKHRpbWV6b25lT3ZlcnJpZGVzKSB7XG4gICAgICAgIHRoaXMudGltZXpvbmVPdmVycmlkZXMgPSB0aW1lem9uZU92ZXJyaWRlcztcbiAgICB9XG4gICAgcmVmaW5lKGNvbnRleHQsIHJlc3VsdHMpIHtcbiAgICAgICAgY29uc3QgdGltZXpvbmVPdmVycmlkZXMgPSBjb250ZXh0Lm9wdGlvbi50aW1lem9uZXMgPz8ge307XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWZmaXggPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKHJlc3VsdC5pbmRleCArIHJlc3VsdC50ZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBjb25zdCBtYXRjaCA9IFRJTUVaT05FX05BTUVfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgdGltZXpvbmVBYmJyID0gbWF0Y2hbMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgICAgIGNvbnN0IHJlZkRhdGUgPSByZXN1bHQuc3RhcnQuZGF0ZSgpID8/IHJlc3VsdC5yZWZEYXRlID8/IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCB0ek92ZXJyaWRlcyA9IHsgLi4udGhpcy50aW1lem9uZU92ZXJyaWRlcywgLi4udGltZXpvbmVPdmVycmlkZXMgfTtcbiAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZFRpbWV6b25lT2Zmc2V0ID0gdG9UaW1lem9uZU9mZnNldCh0aW1lem9uZUFiYnIsIHJlZkRhdGUsIHR6T3ZlcnJpZGVzKTtcbiAgICAgICAgICAgIGlmIChleHRyYWN0ZWRUaW1lem9uZU9mZnNldCA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgdGltZXpvbmU6ICcke3RpbWV6b25lQWJicn0nIGludG86ICR7ZXh0cmFjdGVkVGltZXpvbmVPZmZzZXR9IGZvcjogJHtyZXN1bHQuc3RhcnR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnJlbnRUaW1lem9uZU9mZnNldCA9IHJlc3VsdC5zdGFydC5nZXQoXCJ0aW1lem9uZU9mZnNldFwiKTtcbiAgICAgICAgICAgIGlmIChjdXJyZW50VGltZXpvbmVPZmZzZXQgIT09IG51bGwgJiYgZXh0cmFjdGVkVGltZXpvbmVPZmZzZXQgIT0gY3VycmVudFRpbWV6b25lT2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0aW1lem9uZUFiYnIgIT0gbWF0Y2hbMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5RGF0ZSgpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRpbWV6b25lQWJiciAhPSBtYXRjaFsxXSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAhPSBudWxsICYmICFyZXN1bHQuZW5kLmlzQ2VydGFpbihcInRpbWV6b25lT2Zmc2V0XCIpKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBleHRyYWN0ZWRUaW1lem9uZU9mZnNldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lci5qcy5tYXAiLCJjb25zdCBUSU1FWk9ORV9PRkZTRVRfUEFUVEVSTiA9IG5ldyBSZWdFeHAoXCJeXFxcXHMqKD86XFxcXCg/KD86R01UfFVUQylcXFxccz8pPyhbKy1dKShcXFxcZHsxLDJ9KSg/Ojo/KFxcXFxkezJ9KSk/XFxcXCk/XCIsIFwiaVwiKTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9TSUdOX0dST1VQID0gMTtcbmNvbnN0IFRJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUCA9IDI7XG5jb25zdCBUSU1FWk9ORV9PRkZTRVRfTUlOVVRFX09GRlNFVF9HUk9VUCA9IDM7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFeHRyYWN0VGltZXpvbmVPZmZzZXRSZWZpbmVyIHtcbiAgICByZWZpbmUoY29udGV4dCwgcmVzdWx0cykge1xuICAgICAgICByZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJ0aW1lem9uZU9mZnNldFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gVElNRVpPTkVfT0ZGU0VUX1BBVFRFUk4uZXhlYyhzdWZmaXgpO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFeHRyYWN0aW5nIHRpbWV6b25lOiAnJHttYXRjaFswXX0nIGludG8gOiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgaG91ck9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RJTUVaT05FX09GRlNFVF9IT1VSX09GRlNFVF9HUk9VUF0pO1xuICAgICAgICAgICAgY29uc3QgbWludXRlT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX01JTlVURV9PRkZTRVRfR1JPVVBdIHx8IFwiMFwiKTtcbiAgICAgICAgICAgIGxldCB0aW1lem9uZU9mZnNldCA9IGhvdXJPZmZzZXQgKiA2MCArIG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgIGlmICh0aW1lem9uZU9mZnNldCA+IDE0ICogNjApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2hbVElNRVpPTkVfT0ZGU0VUX1NJR05fR1JPVVBdID09PSBcIi1cIikge1xuICAgICAgICAgICAgICAgIHRpbWV6b25lT2Zmc2V0ID0gLXRpbWV6b25lT2Zmc2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwidGltZXpvbmVPZmZzZXRcIiwgdGltZXpvbmVPZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRpbWV6b25lT2Zmc2V0KTtcbiAgICAgICAgICAgIHJlc3VsdC50ZXh0ICs9IG1hdGNoWzBdO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RXh0cmFjdFRpbWV6b25lT2Zmc2V0UmVmaW5lci5qcy5tYXAiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBPdmVybGFwUmVtb3ZhbFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0LCByZXN1bHRzKSB7XG4gICAgICAgIGlmIChyZXN1bHRzLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpbHRlcmVkUmVzdWx0cyA9IFtdO1xuICAgICAgICBsZXQgcHJldlJlc3VsdCA9IHJlc3VsdHNbMF07XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgcmVzdWx0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzdWx0c1tpXTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuaW5kZXggPj0gcHJldlJlc3VsdC5pbmRleCArIHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgICAgICAgICBwcmV2UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGtlcHQgPSBudWxsO1xuICAgICAgICAgICAgbGV0IHJlbW92ZWQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC50ZXh0Lmxlbmd0aCA+IHByZXZSZXN1bHQudGV4dC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBrZXB0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIHJlbW92ZWQgPSBwcmV2UmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAga2VwdCA9IHByZXZSZXN1bHQ7XG4gICAgICAgICAgICAgICAgcmVtb3ZlZCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gcmVtb3ZlICR7cmVtb3ZlZH0gYnkgJHtrZXB0fWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBwcmV2UmVzdWx0ID0ga2VwdDtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgICBmaWx0ZXJlZFJlc3VsdHMucHVzaChwcmV2UmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmlsdGVyZWRSZXN1bHRzO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU92ZXJsYXBSZW1vdmFsUmVmaW5lci5qcy5tYXAiLCJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBpbXBseVNpbWlsYXJEYXRlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2RheWpzLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3J3YXJkRGF0ZVJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0LCByZXN1bHRzKSB7XG4gICAgICAgIGlmICghY29udGV4dC5vcHRpb24uZm9yd2FyZERhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgICB9XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaCgocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICBsZXQgcmVmTW9tZW50ID0gZGF5anMoY29udGV4dC5yZWZEYXRlKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5VGltZSgpICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKSkge1xuICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5hZGQoMSwgXCJkYXlcIik7XG4gICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuc3RhcnQsIHJlZk1vbWVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgJiYgcmVzdWx0LmVuZC5pc09ubHlUaW1lKCkpIHtcbiAgICAgICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuZW5kLCByZWZNb21lbnQpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LnN0YXJ0LmRheWpzKCkuaXNBZnRlcihyZXN1bHQuZW5kLmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuYWRkKDEsIFwiZGF5XCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW1wbHlTaW1pbGFyRGF0ZShyZXN1bHQuZW5kLCByZWZNb21lbnQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB0aW1lIHJlc3VsdCAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlXZWVrZGF5Q29tcG9uZW50KCkgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgaWYgKHJlZk1vbWVudC5kYXkoKSA+PSByZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSkge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpICsgNyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5zdGFydC5nZXQoXCJ3ZWVrZGF5XCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwiZGF5XCIsIHJlZk1vbWVudC5kYXRlKCkpO1xuICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcIm1vbnRoXCIsIHJlZk1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCByZWZNb21lbnQueWVhcigpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYCR7dGhpcy5jb25zdHJ1Y3Rvci5uYW1lfSBhZGp1c3RlZCAke3Jlc3VsdH0gd2Vla2RheSAoJHtyZXN1bHQuc3RhcnR9KWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZW5kICYmIHJlc3VsdC5lbmQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWZNb21lbnQuZGF5KCkgPiByZXN1bHQuZW5kLmdldChcIndlZWtkYXlcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZk1vbWVudCA9IHJlZk1vbWVudC5kYXkocmVzdWx0LmVuZC5nZXQoXCJ3ZWVrZGF5XCIpICsgNyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZWZNb21lbnQgPSByZWZNb21lbnQuZGF5KHJlc3VsdC5lbmQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcImRheVwiLCByZWZNb21lbnQuZGF0ZSgpKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmVuZC5pbXBseShcIm1vbnRoXCIsIHJlZk1vbWVudC5tb250aCgpICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuaW1wbHkoXCJ5ZWFyXCIsIHJlZk1vbWVudC55ZWFyKCkpO1xuICAgICAgICAgICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IHdlZWtkYXkgKCR7cmVzdWx0LmVuZH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNEYXRlV2l0aFVua25vd25ZZWFyKCkgJiYgcmVmTW9tZW50LmlzQWZ0ZXIocmVzdWx0LnN0YXJ0LmRheWpzKCkpKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzICYmIHJlZk1vbWVudC5pc0FmdGVyKHJlc3VsdC5zdGFydC5kYXlqcygpKTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5zdGFydC5pbXBseShcInllYXJcIiwgcmVzdWx0LnN0YXJ0LmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLmNvbnN0cnVjdG9yLm5hbWV9IGFkanVzdGVkICR7cmVzdWx0fSB5ZWFyICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVzdWx0LmVuZCAmJiAhcmVzdWx0LmVuZC5pc0NlcnRhaW4oXCJ5ZWFyXCIpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQuZW5kLmltcGx5KFwieWVhclwiLCByZXN1bHQuZW5kLmdldChcInllYXJcIikgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMuY29uc3RydWN0b3IubmFtZX0gYWRqdXN0ZWQgJHtyZXN1bHR9IG1vbnRoICgke3Jlc3VsdC5zdGFydH0pYCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUZvcndhcmREYXRlUmVmaW5lci5qcy5tYXAiLCJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vYWJzdHJhY3RSZWZpbmVycy5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5saWtlbHlGb3JtYXRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKHN0cmljdE1vZGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5zdHJpY3RNb2RlID0gc3RyaWN0TW9kZTtcbiAgICB9XG4gICAgaXNWYWxpZChjb250ZXh0LCByZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdC50ZXh0LnJlcGxhY2UoXCIgXCIsIFwiXCIpLm1hdGNoKC9eXFxkKihcXC5cXGQqKT8kLykpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQgJyR7cmVzdWx0LnRleHR9J2ApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFyZXN1bHQuc3RhcnQuaXNWYWxpZERhdGUoKSkge1xuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYFJlbW92aW5nIGludmFsaWQgcmVzdWx0OiAke3Jlc3VsdH0gKCR7cmVzdWx0LnN0YXJ0fSlgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXN1bHQuZW5kICYmICFyZXN1bHQuZW5kLmlzVmFsaWREYXRlKCkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyBpbnZhbGlkIHJlc3VsdDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc3RyaWN0TW9kZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaXNTdHJpY3RNb2RlVmFsaWQoY29udGV4dCwgcmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaXNTdHJpY3RNb2RlVmFsaWQoY29udGV4dCwgcmVzdWx0KSB7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlYnVnKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgKFN0cmljdCkgUmVtb3Zpbmcgd2Vla2RheSBvbmx5IGNvbXBvbmVudDogJHtyZXN1bHR9ICgke3Jlc3VsdC5lbmR9KWApO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJlc3VsdC5zdGFydC5pc09ubHlUaW1lKCkgJiYgKCFyZXN1bHQuc3RhcnQuaXNDZXJ0YWluKFwiaG91clwiKSB8fCAhcmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcIm1pbnV0ZVwiKSkpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGAoU3RyaWN0KSBSZW1vdmluZyB1bmNlcnRhaW4gdGltZSBjb21wb25lbnQ6ICR7cmVzdWx0fSAoJHtyZXN1bHQuZW5kfSlgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVVubGlrZWx5Rm9ybWF0RmlsdGVyLmpzLm1hcCIsImltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4vQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LmpzXCI7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIihbMC05XXs0fSlcXFxcLShbMC05XXsxLDJ9KVxcXFwtKFswLTldezEsMn0pXCIgK1xuICAgIFwiKD86VFwiICtcbiAgICBcIihbMC05XXsxLDJ9KTooWzAtOV17MSwyfSlcIiArXG4gICAgXCIoPzpcIiArXG4gICAgXCI6KFswLTldezEsMn0pKD86XFxcXC4oXFxcXGR7MSw0fSkpP1wiICtcbiAgICBcIik/XCIgK1xuICAgIFwiKFwiICtcbiAgICBcIlp8KFsrLV1cXFxcZHsyfSk6PyhcXFxcZHsyfSk/XCIgK1xuICAgIFwiKT9cIiArXG4gICAgXCIpP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsIFwiaVwiKTtcbmNvbnN0IFlFQVJfTlVNQkVSX0dST1VQID0gMTtcbmNvbnN0IE1PTlRIX05VTUJFUl9HUk9VUCA9IDI7XG5jb25zdCBEQVRFX05VTUJFUl9HUk9VUCA9IDM7XG5jb25zdCBIT1VSX05VTUJFUl9HUk9VUCA9IDQ7XG5jb25zdCBNSU5VVEVfTlVNQkVSX0dST1VQID0gNTtcbmNvbnN0IFNFQ09ORF9OVU1CRVJfR1JPVVAgPSA2O1xuY29uc3QgTUlMTElTRUNPTkRfTlVNQkVSX0dST1VQID0gNztcbmNvbnN0IFRaRF9HUk9VUCA9IDg7XG5jb25zdCBUWkRfSE9VUl9PRkZTRVRfR1JPVVAgPSA5O1xuY29uc3QgVFpEX01JTlVURV9PRkZTRVRfR1JPVVAgPSAxMDtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIElTT0Zvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ0NvbXBvbmVudHMoe1xuICAgICAgICAgICAgXCJ5ZWFyXCI6IHBhcnNlSW50KG1hdGNoW1lFQVJfTlVNQkVSX0dST1VQXSksXG4gICAgICAgICAgICBcIm1vbnRoXCI6IHBhcnNlSW50KG1hdGNoW01PTlRIX05VTUJFUl9HUk9VUF0pLFxuICAgICAgICAgICAgXCJkYXlcIjogcGFyc2VJbnQobWF0Y2hbREFURV9OVU1CRVJfR1JPVVBdKSxcbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChtYXRjaFtIT1VSX05VTUJFUl9HUk9VUF0gIT0gbnVsbCkge1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJob3VyXCIsIHBhcnNlSW50KG1hdGNoW0hPVVJfTlVNQkVSX0dST1VQXSkpO1xuICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJtaW51dGVcIiwgcGFyc2VJbnQobWF0Y2hbTUlOVVRFX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIGlmIChtYXRjaFtTRUNPTkRfTlVNQkVSX0dST1VQXSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJzZWNvbmRcIiwgcGFyc2VJbnQobWF0Y2hbU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtNSUxMSVNFQ09ORF9OVU1CRVJfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1pbGxpc2Vjb25kXCIsIHBhcnNlSW50KG1hdGNoW01JTExJU0VDT05EX05VTUJFUl9HUk9VUF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaFtUWkRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBob3VyT2Zmc2V0ID0gcGFyc2VJbnQobWF0Y2hbVFpEX0hPVVJfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBtaW51dGVPZmZzZXQgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbVFpEX01JTlVURV9PRkZTRVRfR1JPVVBdICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbnV0ZU9mZnNldCA9IHBhcnNlSW50KG1hdGNoW1RaRF9NSU5VVEVfT0ZGU0VUX0dST1VQXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0ID0gaG91ck9mZnNldCAqIDYwO1xuICAgICAgICAgICAgICAgICAgICBpZiAob2Zmc2V0IDwgMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2Zmc2V0IC09IG1pbnV0ZU9mZnNldDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9mZnNldCArPSBtaW51dGVPZmZzZXQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29tcG9uZW50cy5hc3NpZ24oXCJ0aW1lem9uZU9mZnNldFwiLCBvZmZzZXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wb25lbnRzLmFkZFRhZyhcInBhcnNlci9JU09Gb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9SVNPRm9ybWF0UGFyc2VyLmpzLm1hcCIsImltcG9ydCB7IE1lcmdpbmdSZWZpbmVyIH0gZnJvbSBcIi4uL2Fic3RyYWN0UmVmaW5lcnMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IG5ld1Jlc3VsdCA9IG5leHRSZXN1bHQuY2xvbmUoKTtcbiAgICAgICAgbmV3UmVzdWx0LmluZGV4ID0gY3VycmVudFJlc3VsdC5pbmRleDtcbiAgICAgICAgbmV3UmVzdWx0LnRleHQgPSBjdXJyZW50UmVzdWx0LnRleHQgKyB0ZXh0QmV0d2VlbiArIG5ld1Jlc3VsdC50ZXh0O1xuICAgICAgICBuZXdSZXN1bHQuc3RhcnQuYXNzaWduKFwid2Vla2RheVwiLCBjdXJyZW50UmVzdWx0LnN0YXJ0LmdldChcIndlZWtkYXlcIikpO1xuICAgICAgICBpZiAobmV3UmVzdWx0LmVuZCkge1xuICAgICAgICAgICAgbmV3UmVzdWx0LmVuZC5hc3NpZ24oXCJ3ZWVrZGF5XCIsIGN1cnJlbnRSZXN1bHQuc3RhcnQuZ2V0KFwid2Vla2RheVwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ld1Jlc3VsdDtcbiAgICB9XG4gICAgc2hvdWxkTWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KSB7XG4gICAgICAgIGNvbnN0IHdlZWtkYXlUaGVuTm9ybWFsRGF0ZSA9IGN1cnJlbnRSZXN1bHQuc3RhcnQuaXNPbmx5V2Vla2RheUNvbXBvbmVudCgpICYmXG4gICAgICAgICAgICAhY3VycmVudFJlc3VsdC5zdGFydC5pc0NlcnRhaW4oXCJob3VyXCIpICYmXG4gICAgICAgICAgICBuZXh0UmVzdWx0LnN0YXJ0LmlzQ2VydGFpbihcImRheVwiKTtcbiAgICAgICAgcmV0dXJuIHdlZWtkYXlUaGVuTm9ybWFsRGF0ZSAmJiB0ZXh0QmV0d2Vlbi5tYXRjaCgvXiw/XFxzKiQvKSAhPSBudWxsO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPU1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIuanMubWFwIiwiaW1wb3J0IEV4dHJhY3RUaW1lem9uZUFiYnJSZWZpbmVyIGZyb20gXCIuL2NvbW1vbi9yZWZpbmVycy9FeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lci5qc1wiO1xuaW1wb3J0IEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL0V4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIuanNcIjtcbmltcG9ydCBPdmVybGFwUmVtb3ZhbFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL092ZXJsYXBSZW1vdmFsUmVmaW5lci5qc1wiO1xuaW1wb3J0IEZvcndhcmREYXRlUmVmaW5lciBmcm9tIFwiLi9jb21tb24vcmVmaW5lcnMvRm9yd2FyZERhdGVSZWZpbmVyLmpzXCI7XG5pbXBvcnQgVW5saWtlbHlGb3JtYXRGaWx0ZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL1VubGlrZWx5Rm9ybWF0RmlsdGVyLmpzXCI7XG5pbXBvcnQgSVNPRm9ybWF0UGFyc2VyIGZyb20gXCIuL2NvbW1vbi9wYXJzZXJzL0lTT0Zvcm1hdFBhcnNlci5qc1wiO1xuaW1wb3J0IE1lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIgZnJvbSBcIi4vY29tbW9uL3JlZmluZXJzL01lcmdlV2Vla2RheUNvbXBvbmVudFJlZmluZXIuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBpbmNsdWRlQ29tbW9uQ29uZmlndXJhdGlvbihjb25maWd1cmF0aW9uLCBzdHJpY3RNb2RlID0gZmFsc2UpIHtcbiAgICBjb25maWd1cmF0aW9uLnBhcnNlcnMudW5zaGlmdChuZXcgSVNPRm9ybWF0UGFyc2VyKCkpO1xuICAgIGNvbmZpZ3VyYXRpb24ucmVmaW5lcnMudW5zaGlmdChuZXcgTWVyZ2VXZWVrZGF5Q29tcG9uZW50UmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnVuc2hpZnQobmV3IEV4dHJhY3RUaW1lem9uZU9mZnNldFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy51bnNoaWZ0KG5ldyBPdmVybGFwUmVtb3ZhbFJlZmluZXIoKSk7XG4gICAgY29uZmlndXJhdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFeHRyYWN0VGltZXpvbmVBYmJyUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IEZvcndhcmREYXRlUmVmaW5lcigpKTtcbiAgICBjb25maWd1cmF0aW9uLnJlZmluZXJzLnB1c2gobmV3IFVubGlrZWx5Rm9ybWF0RmlsdGVyKHN0cmljdE1vZGUpKTtcbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbmZpZ3VyYXRpb25zLmpzLm1hcCIsImltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uL3Jlc3VsdHMuanNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlLCBhc3NpZ25TaW1pbGFyVGltZSwgaW1wbHlTaW1pbGFyVGltZSwgaW1wbHlUaGVOZXh0RGF5LCB9IGZyb20gXCIuLi91dGlscy9kYXlqcy5qc1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0gfSBmcm9tIFwiLi4vdHlwZXMuanNcIjtcbmV4cG9ydCBmdW5jdGlvbiBub3cocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBhc3NpZ25TaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGlmIChyZWZlcmVuY2UudGltZXpvbmVPZmZzZXQgIT09IG51bGwpIHtcbiAgICAgICAgY29tcG9uZW50LmFzc2lnbihcInRpbWV6b25lT2Zmc2V0XCIsIHRhcmdldERhdGUudXRjT2Zmc2V0KCkpO1xuICAgIH1cbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL25vd1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvZGF5KHJlZmVyZW5jZSkge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgaW1wbHlTaW1pbGFyVGltZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvdG9kYXlcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB5ZXN0ZXJkYXkocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIHRoZURheUJlZm9yZShyZWZlcmVuY2UsIDEpLmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS95ZXN0ZXJkYXlcIik7XG59XG5leHBvcnQgZnVuY3Rpb24gdGhlRGF5QmVmb3JlKHJlZmVyZW5jZSwgbnVtRGF5KSB7XG4gICAgcmV0dXJuIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgLW51bURheSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9tb3Jyb3cocmVmZXJlbmNlKSB7XG4gICAgcmV0dXJuIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgMSkuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvbW9ycm93XCIpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRoZURheUFmdGVyKHJlZmVyZW5jZSwgbkRheXMpIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKG5EYXlzLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGltcGx5U2ltaWxhclRpbWUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvbmlnaHQocmVmZXJlbmNlLCBpbXBseUhvdXIgPSAyMikge1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGFzc2lnblNpbWlsYXJEYXRlKGNvbXBvbmVudCwgdGFyZ2V0RGF0ZSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwiaG91clwiLCBpbXBseUhvdXIpO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL3RvbmlnaHRcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBsYXN0TmlnaHQocmVmZXJlbmNlLCBpbXBseUhvdXIgPSAwKSB7XG4gICAgbGV0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGlmICh0YXJnZXREYXRlLmhvdXIoKSA8IDYpIHtcbiAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICB9XG4gICAgYXNzaWduU2ltaWxhckRhdGUoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBldmVuaW5nKHJlZmVyZW5jZSwgaW1wbHlIb3VyID0gMjApIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uUE0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2V2ZW5pbmdcIik7XG4gICAgcmV0dXJuIGNvbXBvbmVudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiB5ZXN0ZXJkYXlFdmVuaW5nKHJlZmVyZW5jZSwgaW1wbHlIb3VyID0gMjApIHtcbiAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKHJlZmVyZW5jZS5pbnN0YW50KTtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtZXJpZGllbVwiLCBNZXJpZGllbS5QTSk7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS95ZXN0ZXJkYXlcIik7XG4gICAgY29tcG9uZW50LmFkZFRhZyhcImNhc3VhbFJlZmVyZW5jZS9ldmVuaW5nXCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbWlkbmlnaHQocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbnN0IHRhcmdldERhdGUgPSBkYXlqcyhyZWZlcmVuY2UuaW5zdGFudCk7XG4gICAgaWYgKHRhcmdldERhdGUuaG91cigpID4gMikge1xuICAgICAgICBpbXBseVRoZU5leHREYXkoY29tcG9uZW50LCB0YXJnZXREYXRlKTtcbiAgICB9XG4gICAgY29tcG9uZW50LmFzc2lnbihcImhvdXJcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL21pZG5pZ2h0XCIpO1xuICAgIHJldHVybiBjb21wb25lbnQ7XG59XG5leHBvcnQgZnVuY3Rpb24gbW9ybmluZyhyZWZlcmVuY2UsIGltcGx5SG91ciA9IDYpIHtcbiAgICBjb25zdCBjb21wb25lbnQgPSBuZXcgUGFyc2luZ0NvbXBvbmVudHMocmVmZXJlbmNlLCB7fSk7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWVyaWRpZW1cIiwgTWVyaWRpZW0uQU0pO1xuICAgIGNvbXBvbmVudC5pbXBseShcImhvdXJcIiwgaW1wbHlIb3VyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2UvbW9ybmluZ1wiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFmdGVybm9vbihyZWZlcmVuY2UsIGltcGx5SG91ciA9IDE1KSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLlBNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIGltcGx5SG91cik7XG4gICAgY29tcG9uZW50LmltcGx5KFwibWludXRlXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcInNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaWxsaXNlY29uZFwiLCAwKTtcbiAgICBjb21wb25lbnQuYWRkVGFnKFwiY2FzdWFsUmVmZXJlbmNlL2FmdGVybm9vblwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuZXhwb3J0IGZ1bmN0aW9uIG5vb24ocmVmZXJlbmNlKSB7XG4gICAgY29uc3QgY29tcG9uZW50ID0gbmV3IFBhcnNpbmdDb21wb25lbnRzKHJlZmVyZW5jZSwge30pO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1lcmlkaWVtXCIsIE1lcmlkaWVtLkFNKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDEyKTtcbiAgICBjb21wb25lbnQuaW1wbHkoXCJtaW51dGVcIiwgMCk7XG4gICAgY29tcG9uZW50LmltcGx5KFwic2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5pbXBseShcIm1pbGxpc2Vjb25kXCIsIDApO1xuICAgIGNvbXBvbmVudC5hZGRUYWcoXCJjYXN1YWxSZWZlcmVuY2Uvbm9vblwiKTtcbiAgICByZXR1cm4gY29tcG9uZW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2FzdWFsUmVmZXJlbmNlcy5qcy5tYXAiLCJpbXBvcnQgZGF5anMgZnJvbSBcImRheWpzXCI7XG5pbXBvcnQgeyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vcGFyc2Vycy9BYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnkuanNcIjtcbmltcG9ydCB7IGFzc2lnblNpbWlsYXJEYXRlIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL2RheWpzLmpzXCI7XG5pbXBvcnQgKiBhcyByZWZlcmVuY2VzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlcy5qc1wiO1xuY29uc3QgUEFUVEVSTiA9IC8obm93fHRvZGF5fHRvbmlnaHR8dG9tb3Jyb3d8dG1yfHRtcnd8eWVzdGVyZGF5fGxhc3RcXHMqbmlnaHQpKD89XFxXfCQpL2k7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTkNhc3VhbERhdGVQYXJzZXIgZXh0ZW5kcyBBYnN0cmFjdFBhcnNlcldpdGhXb3JkQm91bmRhcnlDaGVja2luZyB7XG4gICAgaW5uZXJQYXR0ZXJuKGNvbnRleHQpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBsZXQgdGFyZ2V0RGF0ZSA9IGRheWpzKGNvbnRleHQucmVmRGF0ZSk7XG4gICAgICAgIGNvbnN0IGxvd2VyVGV4dCA9IG1hdGNoWzBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCBjb21wb25lbnQgPSBjb250ZXh0LmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKCk7XG4gICAgICAgIHN3aXRjaCAobG93ZXJUZXh0KSB7XG4gICAgICAgICAgICBjYXNlIFwibm93XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy5ub3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy50b2RheShjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwieWVzdGVyZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gcmVmZXJlbmNlcy55ZXN0ZXJkYXkoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvbW9ycm93XCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yXCI6XG4gICAgICAgICAgICBjYXNlIFwidG1yd1wiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IHJlZmVyZW5jZXMudG9tb3Jyb3coY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInRvbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSByZWZlcmVuY2VzLnRvbmlnaHQoY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBpZiAobG93ZXJUZXh0Lm1hdGNoKC9sYXN0XFxzKm5pZ2h0LykpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldERhdGUuaG91cigpID4gNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0RGF0ZSA9IHRhcmdldERhdGUuYWRkKC0xLCBcImRheVwiKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhc3NpZ25TaW1pbGFyRGF0ZShjb21wb25lbnQsIHRhcmdldERhdGUpO1xuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQuaW1wbHkoXCJob3VyXCIsIDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsRGF0ZVBhcnNlclwiKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudDtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FTkNhc3VhbERhdGVQYXJzZXIuanMubWFwIiwiaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBjYXN1YWxSZWZlcmVuY2VzIGZyb20gXCIuLi8uLi8uLi9jb21tb24vY2FzdWFsUmVmZXJlbmNlcy5qc1wiO1xuY29uc3QgUEFUVEVSTiA9IC8oPzp0aGlzKT9cXHN7MCwzfShtb3JuaW5nfGFmdGVybm9vbnxldmVuaW5nfG5pZ2h0fG1pZG5pZ2h0fG1pZGRheXxub29uKSg/PVxcV3wkKS9pO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5DYXN1YWxUaW1lUGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBsZXQgY29tcG9uZW50ID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChtYXRjaFsxXS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgICBjYXNlIFwiYWZ0ZXJub29uXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5hZnRlcm5vb24oY29udGV4dC5yZWZlcmVuY2UpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImV2ZW5pbmdcIjpcbiAgICAgICAgICAgIGNhc2UgXCJuaWdodFwiOlxuICAgICAgICAgICAgICAgIGNvbXBvbmVudCA9IGNhc3VhbFJlZmVyZW5jZXMuZXZlbmluZyhjb250ZXh0LnJlZmVyZW5jZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibWlkbmlnaHRcIjpcbiAgICAgICAgICAgICAgICBjb21wb25lbnQgPSBjYXN1YWxSZWZlcmVuY2VzLm1pZG5pZ2h0KGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtb3JuaW5nXCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5tb3JuaW5nKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJub29uXCI6XG4gICAgICAgICAgICBjYXNlIFwibWlkZGF5XCI6XG4gICAgICAgICAgICAgICAgY29tcG9uZW50ID0gY2FzdWFsUmVmZXJlbmNlcy5ub29uKGNvbnRleHQucmVmZXJlbmNlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoY29tcG9uZW50KSB7XG4gICAgICAgICAgICBjb21wb25lbnQuYWRkVGFnKFwicGFyc2VyL0VOQ2FzdWFsVGltZVBhcnNlclwiKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVOQ2FzdWFsVGltZVBhcnNlci5qcy5tYXAiLCJpbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uL3R5cGVzLmpzXCI7XG5pbXBvcnQgeyBQYXJzaW5nQ29tcG9uZW50cyB9IGZyb20gXCIuLi8uLi9yZXN1bHRzLmpzXCI7XG5pbXBvcnQgeyBhZGRJbXBsaWVkVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uL3V0aWxzL3RpbWV1bml0cy5qc1wiO1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVBhcnNpbmdDb21wb25lbnRzQXRXZWVrZGF5KHJlZmVyZW5jZSwgd2Vla2RheSwgbW9kaWZpZXIpIHtcbiAgICBjb25zdCByZWZEYXRlID0gcmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpO1xuICAgIGNvbnN0IGRheXNUb1dlZWtkYXkgPSBnZXREYXlzVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXksIG1vZGlmaWVyKTtcbiAgICBsZXQgY29tcG9uZW50cyA9IG5ldyBQYXJzaW5nQ29tcG9uZW50cyhyZWZlcmVuY2UpO1xuICAgIGNvbXBvbmVudHMgPSBhZGRJbXBsaWVkVGltZVVuaXRzKGNvbXBvbmVudHMsIHsgXCJkYXlcIjogZGF5c1RvV2Vla2RheSB9KTtcbiAgICBjb21wb25lbnRzLmFzc2lnbihcIndlZWtkYXlcIiwgd2Vla2RheSk7XG4gICAgcmV0dXJuIGNvbXBvbmVudHM7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5LCBtb2RpZmllcikge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpO1xuICAgIHN3aXRjaCAobW9kaWZpZXIpIHtcbiAgICAgICAgY2FzZSBcInRoaXNcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXREYXlzRm9yd2FyZFRvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIHJldHVybiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgICAgIGNhc2UgXCJuZXh0XCI6XG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNVTkRBWSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB3ZWVrZGF5ID09IFdlZWtkYXkuU1VOREFZID8gNyA6IHdlZWtkYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAocmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TQVRVUkRBWSlcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDc7XG4gICAgICAgICAgICAgICAgaWYgKHdlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiA4O1xuICAgICAgICAgICAgICAgIHJldHVybiAxICsgd2Vla2RheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWVrZGF5IDwgcmVmV2Vla2RheSAmJiB3ZWVrZGF5ICE9IFdlZWtkYXkuU1VOREFZKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGdldERheXNGb3J3YXJkVG9XZWVrZGF5KHJlZkRhdGUsIHdlZWtkYXkpICsgNztcbiAgICAgICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGdldERheXNUb1dlZWtkYXlDbG9zZXN0KHJlZkRhdGUsIHdlZWtkYXkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldERheXNUb1dlZWtkYXlDbG9zZXN0KHJlZkRhdGUsIHdlZWtkYXkpIHtcbiAgICBjb25zdCBiYWNrd2FyZCA9IGdldEJhY2t3YXJkRGF5c1RvV2Vla2RheShyZWZEYXRlLCB3ZWVrZGF5KTtcbiAgICBjb25zdCBmb3J3YXJkID0gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSk7XG4gICAgcmV0dXJuIGZvcndhcmQgPCAtYmFja3dhcmQgPyBmb3J3YXJkIDogYmFja3dhcmQ7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGF5c0ZvcndhcmRUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSkge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpO1xuICAgIGxldCBmb3J3YXJkQ291bnQgPSB3ZWVrZGF5IC0gcmVmV2Vla2RheTtcbiAgICBpZiAoZm9yd2FyZENvdW50IDwgMCkge1xuICAgICAgICBmb3J3YXJkQ291bnQgKz0gNztcbiAgICB9XG4gICAgcmV0dXJuIGZvcndhcmRDb3VudDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRCYWNrd2FyZERheXNUb1dlZWtkYXkocmVmRGF0ZSwgd2Vla2RheSkge1xuICAgIGNvbnN0IHJlZldlZWtkYXkgPSByZWZEYXRlLmdldERheSgpO1xuICAgIGxldCBiYWNrd2FyZENvdW50ID0gd2Vla2RheSAtIHJlZldlZWtkYXk7XG4gICAgaWYgKGJhY2t3YXJkQ291bnQgPj0gMCkge1xuICAgICAgICBiYWNrd2FyZENvdW50IC09IDc7XG4gICAgfVxuICAgIHJldHVybiBiYWNrd2FyZENvdW50O1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9d2Vla2RheXMuanMubWFwIiwiaW1wb3J0IHsgV0VFS0RBWV9ESUNUSU9OQVJZIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm4uanNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS5qc1wiO1xuaW1wb3J0IHsgY3JlYXRlUGFyc2luZ0NvbXBvbmVudHNBdFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2NhbGN1bGF0aW9uL3dlZWtkYXlzLmpzXCI7XG5pbXBvcnQgeyBXZWVrZGF5IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzLmpzXCI7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIig/Oig/OlxcXFwsfFxcXFwofFxcXFzvvIgpXFxcXHMqKT9cIiArXG4gICAgXCIoPzpvblxcXFxzKj8pP1wiICtcbiAgICBcIig/Oih0aGlzfGxhc3R8cGFzdHxuZXh0KVxcXFxzKik/XCIgK1xuICAgIGAoJHttYXRjaEFueVBhdHRlcm4oV0VFS0RBWV9ESUNUSU9OQVJZKX18d2Vla2VuZHx3ZWVrZGF5KWAgK1xuICAgIFwiKD86XFxcXHMqKD86XFxcXCx8XFxcXCl8XFxcXO+8iSkpP1wiICtcbiAgICBcIig/OlxcXFxzKih0aGlzfGxhc3R8cGFzdHxuZXh0KVxcXFxzKndlZWspP1wiICtcbiAgICBcIig/PVxcXFxXfCQpXCIsIFwiaVwiKTtcbmNvbnN0IFBSRUZJWF9HUk9VUCA9IDE7XG5jb25zdCBXRUVLREFZX0dST1VQID0gMjtcbmNvbnN0IFBPU1RGSVhfR1JPVVAgPSAzO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5XZWVrZGF5UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIFBBVFRFUk47XG4gICAgfVxuICAgIGlubmVyRXh0cmFjdChjb250ZXh0LCBtYXRjaCkge1xuICAgICAgICBjb25zdCBwcmVmaXggPSBtYXRjaFtQUkVGSVhfR1JPVVBdO1xuICAgICAgICBjb25zdCBwb3N0Zml4ID0gbWF0Y2hbUE9TVEZJWF9HUk9VUF07XG4gICAgICAgIGxldCBtb2RpZmllcldvcmQgPSBwcmVmaXggfHwgcG9zdGZpeDtcbiAgICAgICAgbW9kaWZpZXJXb3JkID0gbW9kaWZpZXJXb3JkIHx8IFwiXCI7XG4gICAgICAgIG1vZGlmaWVyV29yZCA9IG1vZGlmaWVyV29yZC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBsZXQgbW9kaWZpZXIgPSBudWxsO1xuICAgICAgICBpZiAobW9kaWZpZXJXb3JkID09IFwibGFzdFwiIHx8IG1vZGlmaWVyV29yZCA9PSBcInBhc3RcIikge1xuICAgICAgICAgICAgbW9kaWZpZXIgPSBcImxhc3RcIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChtb2RpZmllcldvcmQgPT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgIG1vZGlmaWVyID0gXCJuZXh0XCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAobW9kaWZpZXJXb3JkID09IFwidGhpc1wiKSB7XG4gICAgICAgICAgICBtb2RpZmllciA9IFwidGhpc1wiO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHdlZWtkYXlfd29yZCA9IG1hdGNoW1dFRUtEQVlfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCB3ZWVrZGF5O1xuICAgICAgICBpZiAoV0VFS0RBWV9ESUNUSU9OQVJZW3dlZWtkYXlfd29yZF0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgd2Vla2RheSA9IFdFRUtEQVlfRElDVElPTkFSWVt3ZWVrZGF5X3dvcmRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdlZWtkYXlfd29yZCA9PSBcIndlZWtlbmRcIikge1xuICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gV2Vla2RheS5TVU5EQVkgOiBXZWVrZGF5LlNBVFVSREFZO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdlZWtkYXlfd29yZCA9PSBcIndlZWtkYXlcIikge1xuICAgICAgICAgICAgY29uc3QgcmVmV2Vla2RheSA9IGNvbnRleHQucmVmZXJlbmNlLmdldERhdGVXaXRoQWRqdXN0ZWRUaW1lem9uZSgpLmdldERheSgpO1xuICAgICAgICAgICAgaWYgKHJlZldlZWtkYXkgPT0gV2Vla2RheS5TVU5EQVkgfHwgcmVmV2Vla2RheSA9PSBXZWVrZGF5LlNBVFVSREFZKSB7XG4gICAgICAgICAgICAgICAgd2Vla2RheSA9IG1vZGlmaWVyID09IFwibGFzdFwiID8gV2Vla2RheS5GUklEQVkgOiBXZWVrZGF5Lk1PTkRBWTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSByZWZXZWVrZGF5IC0gMTtcbiAgICAgICAgICAgICAgICB3ZWVrZGF5ID0gbW9kaWZpZXIgPT0gXCJsYXN0XCIgPyB3ZWVrZGF5IC0gMSA6IHdlZWtkYXkgKyAxO1xuICAgICAgICAgICAgICAgIHdlZWtkYXkgPSAod2Vla2RheSAlIDUpICsgMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjcmVhdGVQYXJzaW5nQ29tcG9uZW50c0F0V2Vla2RheShjb250ZXh0LnJlZmVyZW5jZSwgd2Vla2RheSwgbW9kaWZpZXIpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVOV2Vla2RheVBhcnNlci5qcy5tYXAiLCJpbXBvcnQgeyBUSU1FX1VOSVRfRElDVElPTkFSWSB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IFBhcnNpbmdDb21wb25lbnRzIH0gZnJvbSBcIi4uLy4uLy4uL3Jlc3VsdHMuanNcIjtcbmltcG9ydCBkYXlqcyBmcm9tIFwiZGF5anNcIjtcbmltcG9ydCB7IEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9wYXJzZXJzL0Fic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeS5qc1wiO1xuaW1wb3J0IHsgbWF0Y2hBbnlQYXR0ZXJuIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3BhdHRlcm4uanNcIjtcbmNvbnN0IFBBVFRFUk4gPSBuZXcgUmVnRXhwKGAodGhpc3xsYXN0fHBhc3R8bmV4dHxhZnRlclxcXFxzKnRoaXMpXFxcXHMqKCR7bWF0Y2hBbnlQYXR0ZXJuKFRJTUVfVU5JVF9ESUNUSU9OQVJZKX0pKD89XFxcXHMqKWAgKyBcIig/PVxcXFxXfCQpXCIsIFwiaVwiKTtcbmNvbnN0IE1PRElGSUVSX1dPUkRfR1JPVVAgPSAxO1xuY29uc3QgUkVMQVRJVkVfV09SRF9HUk9VUCA9IDI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlciBleHRlbmRzIEFic3RyYWN0UGFyc2VyV2l0aFdvcmRCb3VuZGFyeUNoZWNraW5nIHtcbiAgICBpbm5lclBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBpbm5lckV4dHJhY3QoY29udGV4dCwgbWF0Y2gpIHtcbiAgICAgICAgY29uc3QgbW9kaWZpZXIgPSBtYXRjaFtNT0RJRklFUl9XT1JEX0dST1VQXS50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBjb25zdCB1bml0V29yZCA9IG1hdGNoW1JFTEFUSVZFX1dPUkRfR1JPVVBdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGNvbnN0IHRpbWV1bml0ID0gVElNRV9VTklUX0RJQ1RJT05BUllbdW5pdFdvcmRdO1xuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJuZXh0XCIgfHwgbW9kaWZpZXIuc3RhcnRzV2l0aChcImFmdGVyXCIpKSB7XG4gICAgICAgICAgICBjb25zdCB0aW1lVW5pdHMgPSB7fTtcbiAgICAgICAgICAgIHRpbWVVbml0c1t0aW1ldW5pdF0gPSAxO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kaWZpZXIgPT0gXCJsYXN0XCIgfHwgbW9kaWZpZXIgPT0gXCJwYXN0XCIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRpbWVVbml0cyA9IHt9O1xuICAgICAgICAgICAgdGltZVVuaXRzW3RpbWV1bml0XSA9IC0xO1xuICAgICAgICAgICAgcmV0dXJuIFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShjb250ZXh0LnJlZmVyZW5jZSwgdGltZVVuaXRzKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnRzID0gY29udGV4dC5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cygpO1xuICAgICAgICBsZXQgZGF0ZSA9IGRheWpzKGNvbnRleHQucmVmZXJlbmNlLmluc3RhbnQpO1xuICAgICAgICBpZiAodW5pdFdvcmQubWF0Y2goL3dlZWsvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5nZXQoXCJkXCIpLCBcImRcIik7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJ5ZWFyXCIsIGRhdGUueWVhcigpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1bml0V29yZC5tYXRjaCgvbW9udGgvaSkpIHtcbiAgICAgICAgICAgIGRhdGUgPSBkYXRlLmFkZCgtZGF0ZS5kYXRlKCkgKyAxLCBcImRcIik7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgICAgICBjb21wb25lbnRzLmFzc2lnbihcIm1vbnRoXCIsIGRhdGUubW9udGgoKSArIDEpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVuaXRXb3JkLm1hdGNoKC95ZWFyL2kpKSB7XG4gICAgICAgICAgICBkYXRlID0gZGF0ZS5hZGQoLWRhdGUuZGF0ZSgpICsgMSwgXCJkXCIpO1xuICAgICAgICAgICAgZGF0ZSA9IGRhdGUuYWRkKC1kYXRlLm1vbnRoKCksIFwibW9udGhcIik7XG4gICAgICAgICAgICBjb21wb25lbnRzLmltcGx5KFwiZGF5XCIsIGRhdGUuZGF0ZSgpKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuaW1wbHkoXCJtb250aFwiLCBkYXRlLm1vbnRoKCkgKyAxKTtcbiAgICAgICAgICAgIGNvbXBvbmVudHMuYXNzaWduKFwieWVhclwiLCBkYXRlLnllYXIoKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudHM7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIuanMubWFwIiwiaW1wb3J0IHsgZmluZE1vc3RMaWtlbHlBRFllYXIsIGZpbmRZZWFyQ2xvc2VzdFRvUmVmIH0gZnJvbSBcIi4uLy4uL2NhbGN1bGF0aW9uL3llYXJzLmpzXCI7XG5jb25zdCBQQVRURVJOID0gbmV3IFJlZ0V4cChcIihbXlxcXFxkXXxeKVwiICtcbiAgICBcIihbMC0zXXswLDF9WzAtOV17MX0pW1xcXFwvXFxcXC5cXFxcLV0oWzAtM117MCwxfVswLTldezF9KVwiICtcbiAgICBcIig/OltcXFxcL1xcXFwuXFxcXC1dKFswLTldezR9fFswLTldezJ9KSk/XCIgK1xuICAgIFwiKFxcXFxXfCQpXCIsIFwiaVwiKTtcbmNvbnN0IE9QRU5JTkdfR1JPVVAgPSAxO1xuY29uc3QgRU5ESU5HX0dST1VQID0gNTtcbmNvbnN0IEZJUlNUX05VTUJFUlNfR1JPVVAgPSAyO1xuY29uc3QgU0VDT05EX05VTUJFUlNfR1JPVVAgPSAzO1xuY29uc3QgWUVBUl9HUk9VUCA9IDQ7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTbGFzaERhdGVGb3JtYXRQYXJzZXIge1xuICAgIGNvbnN0cnVjdG9yKGxpdHRsZUVuZGlhbikge1xuICAgICAgICB0aGlzLmdyb3VwTnVtYmVyTW9udGggPSBsaXR0bGVFbmRpYW4gPyBTRUNPTkRfTlVNQkVSU19HUk9VUCA6IEZJUlNUX05VTUJFUlNfR1JPVVA7XG4gICAgICAgIHRoaXMuZ3JvdXBOdW1iZXJEYXkgPSBsaXR0bGVFbmRpYW4gPyBGSVJTVF9OVU1CRVJTX0dST1VQIDogU0VDT05EX05VTUJFUlNfR1JPVVA7XG4gICAgfVxuICAgIHBhdHRlcm4oKSB7XG4gICAgICAgIHJldHVybiBQQVRURVJOO1xuICAgIH1cbiAgICBleHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gbWF0Y2guaW5kZXggKyBtYXRjaFtPUEVOSU5HX0dST1VQXS5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGluZGV4RW5kID0gbWF0Y2guaW5kZXggKyBtYXRjaFswXS5sZW5ndGggLSBtYXRjaFtFTkRJTkdfR1JPVVBdLmxlbmd0aDtcbiAgICAgICAgaWYgKGluZGV4ID4gMCkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEJlZm9yZSA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoMCwgaW5kZXgpO1xuICAgICAgICAgICAgaWYgKHRleHRCZWZvcmUubWF0Y2goXCJcXFxcZC8/JFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaW5kZXhFbmQgPCBjb250ZXh0LnRleHQubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCB0ZXh0QWZ0ZXIgPSBjb250ZXh0LnRleHQuc3Vic3RyaW5nKGluZGV4RW5kKTtcbiAgICAgICAgICAgIGlmICh0ZXh0QWZ0ZXIubWF0Y2goXCJeLz9cXFxcZFwiKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZXh0ID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhpbmRleCwgaW5kZXhFbmQpO1xuICAgICAgICBpZiAodGV4dC5tYXRjaCgvXlxcZFxcLlxcZCQvKSB8fCB0ZXh0Lm1hdGNoKC9eXFxkXFwuXFxkezEsMn1cXC5cXGR7MSwyfVxccyokLykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIW1hdGNoW1lFQVJfR1JPVVBdICYmIHRleHQuaW5kZXhPZihcIi9cIikgPCAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzdWx0ID0gY29udGV4dC5jcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0KTtcbiAgICAgICAgbGV0IG1vbnRoID0gcGFyc2VJbnQobWF0Y2hbdGhpcy5ncm91cE51bWJlck1vbnRoXSk7XG4gICAgICAgIGxldCBkYXkgPSBwYXJzZUludChtYXRjaFt0aGlzLmdyb3VwTnVtYmVyRGF5XSk7XG4gICAgICAgIGlmIChtb250aCA8IDEgfHwgbW9udGggPiAxMikge1xuICAgICAgICAgICAgaWYgKG1vbnRoID4gMTIpIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF5ID49IDEgJiYgZGF5IDw9IDEyICYmIG1vbnRoIDw9IDMxKSB7XG4gICAgICAgICAgICAgICAgICAgIFtkYXksIG1vbnRoXSA9IFttb250aCwgZGF5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZGF5IDwgMSB8fCBkYXkgPiAzMSkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmVzdWx0LnN0YXJ0LmFzc2lnbihcImRheVwiLCBkYXkpO1xuICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwibW9udGhcIiwgbW9udGgpO1xuICAgICAgICBpZiAobWF0Y2hbWUVBUl9HUk9VUF0pIHtcbiAgICAgICAgICAgIGNvbnN0IHJhd1llYXJOdW1iZXIgPSBwYXJzZUludChtYXRjaFtZRUFSX0dST1VQXSk7XG4gICAgICAgICAgICBjb25zdCB5ZWFyID0gZmluZE1vc3RMaWtlbHlBRFllYXIocmF3WWVhck51bWJlcik7XG4gICAgICAgICAgICByZXN1bHQuc3RhcnQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBmaW5kWWVhckNsb3Nlc3RUb1JlZihjb250ZXh0LnJlZkRhdGUsIGRheSwgbW9udGgpO1xuICAgICAgICAgICAgcmVzdWx0LnN0YXJ0LmltcGx5KFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0LmFkZFRhZyhcInBhcnNlci9TbGFzaERhdGVGb3JtYXRQYXJzZXJcIik7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9U2xhc2hEYXRlRm9ybWF0UGFyc2VyLmpzLm1hcCIsImltcG9ydCB7IFRJTUVfVU5JVFNfUEFUVEVSTiwgcGFyc2VUaW1lVW5pdHMsIFRJTUVfVU5JVFNfTk9fQUJCUl9QQVRURVJOIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMgfSBmcm9tIFwiLi4vLi4vLi4vcmVzdWx0cy5qc1wiO1xuaW1wb3J0IHsgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3BhcnNlcnMvQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5LmpzXCI7XG5pbXBvcnQgeyByZXZlcnNlVGltZVVuaXRzIH0gZnJvbSBcIi4uLy4uLy4uL3V0aWxzL3RpbWV1bml0cy5qc1wiO1xuY29uc3QgUEFUVEVSTiA9IG5ldyBSZWdFeHAoYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19QQVRURVJOfSkoPz1cXFxcV3wkKWAsIFwiaVwiKTtcbmNvbnN0IFBBVFRFUk5fTk9fQUJCUiA9IG5ldyBSZWdFeHAoYCh0aGlzfGxhc3R8cGFzdHxuZXh0fGFmdGVyfFxcXFwrfC0pXFxcXHMqKCR7VElNRV9VTklUU19OT19BQkJSX1BBVFRFUk59KSg/PVxcXFxXfCQpYCwgXCJpXCIpO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGV4dGVuZHMgQWJzdHJhY3RQYXJzZXJXaXRoV29yZEJvdW5kYXJ5Q2hlY2tpbmcge1xuICAgIGNvbnN0cnVjdG9yKGFsbG93QWJicmV2aWF0aW9ucyA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hbGxvd0FiYnJldmlhdGlvbnMgPSBhbGxvd0FiYnJldmlhdGlvbnM7XG4gICAgfVxuICAgIGlubmVyUGF0dGVybigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsb3dBYmJyZXZpYXRpb25zID8gUEFUVEVSTiA6IFBBVFRFUk5fTk9fQUJCUjtcbiAgICB9XG4gICAgaW5uZXJFeHRyYWN0KGNvbnRleHQsIG1hdGNoKSB7XG4gICAgICAgIGNvbnN0IHByZWZpeCA9IG1hdGNoWzFdLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhtYXRjaFsyXSk7XG4gICAgICAgIGlmICghdGltZVVuaXRzKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHByZWZpeCkge1xuICAgICAgICAgICAgY2FzZSBcImxhc3RcIjpcbiAgICAgICAgICAgIGNhc2UgXCJwYXN0XCI6XG4gICAgICAgICAgICBjYXNlIFwiLVwiOlxuICAgICAgICAgICAgICAgIHRpbWVVbml0cyA9IHJldmVyc2VUaW1lVW5pdHModGltZVVuaXRzKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUGFyc2luZ0NvbXBvbmVudHMuY3JlYXRlUmVsYXRpdmVGcm9tUmVmZXJlbmNlKGNvbnRleHQucmVmZXJlbmNlLCB0aW1lVW5pdHMpO1xuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUVOVGltZVVuaXRDYXN1YWxSZWxhdGl2ZUZvcm1hdFBhcnNlci5qcy5tYXAiLCJpbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVycy5qc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHJldmVyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzLmpzXCI7XG5mdW5jdGlvbiBJc1Bvc2l0aXZlRm9sbG93aW5nUmVmZXJlbmNlKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQudGV4dC5tYXRjaCgvXlsrLV0vaSkgIT0gbnVsbDtcbn1cbmZ1bmN0aW9uIElzTmVnYXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9eLS9pKSAhPSBudWxsO1xufVxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBleHRlbmRzIE1lcmdpbmdSZWZpbmVyIHtcbiAgICBzaG91bGRNZXJnZVJlc3VsdHModGV4dEJldHdlZW4sIGN1cnJlbnRSZXN1bHQsIG5leHRSZXN1bHQpIHtcbiAgICAgICAgaWYgKCF0ZXh0QmV0d2Vlbi5tYXRjaCgvXlxccyokL2kpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIElzUG9zaXRpdmVGb2xsb3dpbmdSZWZlcmVuY2UobmV4dFJlc3VsdCkgfHwgSXNOZWdhdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShuZXh0UmVzdWx0KTtcbiAgICB9XG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0LCBjb250ZXh0KSB7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhuZXh0UmVzdWx0LnRleHQpO1xuICAgICAgICBpZiAoSXNOZWdhdGl2ZUZvbGxvd2luZ1JlZmVyZW5jZShuZXh0UmVzdWx0KSkge1xuICAgICAgICAgICAgdGltZVVuaXRzID0gcmV2ZXJzZVRpbWVVbml0cyh0aW1lVW5pdHMpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudHMgPSBQYXJzaW5nQ29tcG9uZW50cy5jcmVhdGVSZWxhdGl2ZUZyb21SZWZlcmVuY2UobmV3IFJlZmVyZW5jZVdpdGhUaW1lem9uZShjdXJyZW50UmVzdWx0LnN0YXJ0LmRhdGUoKSksIHRpbWVVbml0cyk7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdChjdXJyZW50UmVzdWx0LnJlZmVyZW5jZSwgY3VycmVudFJlc3VsdC5pbmRleCwgYCR7Y3VycmVudFJlc3VsdC50ZXh0fSR7dGV4dEJldHdlZW59JHtuZXh0UmVzdWx0LnRleHR9YCwgY29tcG9uZW50cyk7XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9RU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lci5qcy5tYXAiLCJpbXBvcnQgeyBNZXJnaW5nUmVmaW5lciB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vYWJzdHJhY3RSZWZpbmVycy5qc1wiO1xuaW1wb3J0IHsgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9IGZyb20gXCIuLi8uLi8uLi9yZXN1bHRzLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVRpbWVVbml0cyB9IGZyb20gXCIuLi9jb25zdGFudHMuanNcIjtcbmltcG9ydCB7IHJldmVyc2VUaW1lVW5pdHMgfSBmcm9tIFwiLi4vLi4vLi4vdXRpbHMvdGltZXVuaXRzLmpzXCI7XG5mdW5jdGlvbiBoYXNJbXBsaWVkRWFybGllclJlZmVyZW5jZURhdGUocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9cXHMrKGJlZm9yZXxmcm9tKSQvaSkgIT0gbnVsbDtcbn1cbmZ1bmN0aW9uIGhhc0ltcGxpZWRMYXRlclJlZmVyZW5jZURhdGUocmVzdWx0KSB7XG4gICAgcmV0dXJuIHJlc3VsdC50ZXh0Lm1hdGNoKC9cXHMrKGFmdGVyfHNpbmNlKSQvaSkgIT0gbnVsbDtcbn1cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOTWVyZ2VSZWxhdGl2ZUZvbGxvd0J5RGF0ZVJlZmluZXIgZXh0ZW5kcyBNZXJnaW5nUmVmaW5lciB7XG4gICAgcGF0dGVybkJldHdlZW4oKSB7XG4gICAgICAgIHJldHVybiAvXlxccyokL2k7XG4gICAgfVxuICAgIHNob3VsZE1lcmdlUmVzdWx0cyh0ZXh0QmV0d2VlbiwgY3VycmVudFJlc3VsdCwgbmV4dFJlc3VsdCkge1xuICAgICAgICBpZiAoIXRleHRCZXR3ZWVuLm1hdGNoKHRoaXMucGF0dGVybkJldHdlZW4oKSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWhhc0ltcGxpZWRFYXJsaWVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSAmJiAhaGFzSW1wbGllZExhdGVyUmVmZXJlbmNlRGF0ZShjdXJyZW50UmVzdWx0KSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAhIW5leHRSZXN1bHQuc3RhcnQuZ2V0KFwiZGF5XCIpICYmICEhbmV4dFJlc3VsdC5zdGFydC5nZXQoXCJtb250aFwiKSAmJiAhIW5leHRSZXN1bHQuc3RhcnQuZ2V0KFwieWVhclwiKTtcbiAgICB9XG4gICAgbWVyZ2VSZXN1bHRzKHRleHRCZXR3ZWVuLCBjdXJyZW50UmVzdWx0LCBuZXh0UmVzdWx0KSB7XG4gICAgICAgIGxldCB0aW1lVW5pdHMgPSBwYXJzZVRpbWVVbml0cyhjdXJyZW50UmVzdWx0LnRleHQpO1xuICAgICAgICBpZiAoaGFzSW1wbGllZEVhcmxpZXJSZWZlcmVuY2VEYXRlKGN1cnJlbnRSZXN1bHQpKSB7XG4gICAgICAgICAgICB0aW1lVW5pdHMgPSByZXZlcnNlVGltZVVuaXRzKHRpbWVVbml0cyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY29tcG9uZW50cyA9IFBhcnNpbmdDb21wb25lbnRzLmNyZWF0ZVJlbGF0aXZlRnJvbVJlZmVyZW5jZShuZXcgUmVmZXJlbmNlV2l0aFRpbWV6b25lKG5leHRSZXN1bHQuc3RhcnQuZGF0ZSgpKSwgdGltZVVuaXRzKTtcbiAgICAgICAgcmV0dXJuIG5ldyBQYXJzaW5nUmVzdWx0KG5leHRSZXN1bHQucmVmZXJlbmNlLCBjdXJyZW50UmVzdWx0LmluZGV4LCBgJHtjdXJyZW50UmVzdWx0LnRleHR9JHt0ZXh0QmV0d2Vlbn0ke25leHRSZXN1bHQudGV4dH1gLCBjb21wb25lbnRzKTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyLmpzLm1hcCIsImltcG9ydCB7IFlFQVJfUEFUVEVSTiwgcGFyc2VZZWFyIH0gZnJvbSBcIi4uL2NvbnN0YW50cy5qc1wiO1xuY29uc3QgWUVBUl9TVUZGSVhfUEFUVEVSTiA9IG5ldyBSZWdFeHAoYF5cXFxccyooJHtZRUFSX1BBVFRFUk59KWAsIFwiaVwiKTtcbmNvbnN0IFlFQVJfR1JPVVAgPSAxO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIge1xuICAgIHJlZmluZShjb250ZXh0LCByZXN1bHRzKSB7XG4gICAgICAgIHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG4gICAgICAgICAgICBpZiAoIXJlc3VsdC5zdGFydC5pc0RhdGVXaXRoVW5rbm93blllYXIoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN1ZmZpeCA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcocmVzdWx0LmluZGV4ICsgcmVzdWx0LnRleHQubGVuZ3RoKTtcbiAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gWUVBUl9TVUZGSVhfUEFUVEVSTi5leGVjKHN1ZmZpeCk7XG4gICAgICAgICAgICBpZiAoIW1hdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYEV4dHJhY3RpbmcgeWVhcjogJyR7bWF0Y2hbMF19JyBpbnRvIDogJHtyZXN1bHR9YCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHllYXIgPSBwYXJzZVllYXIobWF0Y2hbWUVBUl9HUk9VUF0pO1xuICAgICAgICAgICAgaWYgKHJlc3VsdC5lbmQgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5lbmQuYXNzaWduKFwieWVhclwiLCB5ZWFyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdC5zdGFydC5hc3NpZ24oXCJ5ZWFyXCIsIHllYXIpO1xuICAgICAgICAgICAgcmVzdWx0LnRleHQgKz0gbWF0Y2hbMF07XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FTkV4dHJhY3RZZWFyU3VmZml4UmVmaW5lci5qcy5tYXAiLCJpbXBvcnQgeyBGaWx0ZXIgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2Fic3RyYWN0UmVmaW5lcnMuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVOVW5saWtlbHlGb3JtYXRGaWx0ZXIgZXh0ZW5kcyBGaWx0ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgIH1cbiAgICBpc1ZhbGlkKGNvbnRleHQsIHJlc3VsdCkge1xuICAgICAgICBjb25zdCB0ZXh0ID0gcmVzdWx0LnRleHQudHJpbSgpO1xuICAgICAgICBpZiAodGV4dCA9PT0gY29udGV4dC50ZXh0LnRyaW0oKSkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHQudG9Mb3dlckNhc2UoKSA9PT0gXCJtYXlcIikge1xuICAgICAgICAgICAgY29uc3QgdGV4dEJlZm9yZSA9IGNvbnRleHQudGV4dC5zdWJzdHJpbmcoMCwgcmVzdWx0LmluZGV4KS50cmltKCk7XG4gICAgICAgICAgICBpZiAoIXRleHRCZWZvcmUubWF0Y2goL1xcYihpbikkL2kpKSB7XG4gICAgICAgICAgICAgICAgY29udGV4dC5kZWJ1ZygoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGBSZW1vdmluZyB1bmxpa2VseSByZXN1bHQ6ICR7cmVzdWx0fWApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dC50b0xvd2VyQ2FzZSgpLmVuZHNXaXRoKFwidGhlIHNlY29uZFwiKSkge1xuICAgICAgICAgICAgY29uc3QgdGV4dEFmdGVyID0gY29udGV4dC50ZXh0LnN1YnN0cmluZyhyZXN1bHQuaW5kZXggKyByZXN1bHQudGV4dC5sZW5ndGgpLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh0ZXh0QWZ0ZXIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgUmVtb3ZpbmcgdW5saWtlbHkgcmVzdWx0OiAke3Jlc3VsdH1gKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1FTlVubGlrZWx5Rm9ybWF0RmlsdGVyLmpzLm1hcCIsImltcG9ydCBFTlRpbWVVbml0V2l0aGluRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlci5qc1wiO1xuaW1wb3J0IEVOTW9udGhOYW1lTGl0dGxlRW5kaWFuUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIuanNcIjtcbmltcG9ydCBFTk1vbnRoTmFtZU1pZGRsZUVuZGlhblBhcnNlciBmcm9tIFwiLi9wYXJzZXJzL0VOTW9udGhOYW1lTWlkZGxlRW5kaWFuUGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5Nb250aE5hbWVQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTk1vbnRoTmFtZVBhcnNlci5qc1wiO1xuaW1wb3J0IEVOWWVhck1vbnRoRGF5UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5ZZWFyTW9udGhEYXlQYXJzZXIuanNcIjtcbmltcG9ydCBFTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlNsYXNoTW9udGhGb3JtYXRQYXJzZXIuanNcIjtcbmltcG9ydCBFTlRpbWVFeHByZXNzaW9uUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lRXhwcmVzc2lvblBhcnNlci5qc1wiO1xuaW1wb3J0IEVOVGltZVVuaXRBZ29Gb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdExhdGVyRm9ybWF0UGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5NZXJnZURhdGVSYW5nZVJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5NZXJnZURhdGVSYW5nZVJlZmluZXIuanNcIjtcbmltcG9ydCBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyIGZyb20gXCIuL3JlZmluZXJzL0VOTWVyZ2VEYXRlVGltZVJlZmluZXIuanNcIjtcbmltcG9ydCB7IGluY2x1ZGVDb21tb25Db25maWd1cmF0aW9uIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ3VyYXRpb25zLmpzXCI7XG5pbXBvcnQgRU5DYXN1YWxEYXRlUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5DYXN1YWxEYXRlUGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5DYXN1YWxUaW1lUGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5DYXN1YWxUaW1lUGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5XZWVrZGF5UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5XZWVrZGF5UGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5SZWxhdGl2ZURhdGVGb3JtYXRQYXJzZXIgZnJvbSBcIi4vcGFyc2Vycy9FTlJlbGF0aXZlRGF0ZUZvcm1hdFBhcnNlci5qc1wiO1xuaW1wb3J0IFNsYXNoRGF0ZUZvcm1hdFBhcnNlciBmcm9tIFwiLi4vLi4vY29tbW9uL3BhcnNlcnMvU2xhc2hEYXRlRm9ybWF0UGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyIGZyb20gXCIuL3BhcnNlcnMvRU5UaW1lVW5pdENhc3VhbFJlbGF0aXZlRm9ybWF0UGFyc2VyLmpzXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlQWZ0ZXJEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyLmpzXCI7XG5pbXBvcnQgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lciBmcm9tIFwiLi9yZWZpbmVycy9FTk1lcmdlUmVsYXRpdmVGb2xsb3dCeURhdGVSZWZpbmVyLmpzXCI7XG5pbXBvcnQgT3ZlcmxhcFJlbW92YWxSZWZpbmVyIGZyb20gXCIuLi8uLi9jb21tb24vcmVmaW5lcnMvT3ZlcmxhcFJlbW92YWxSZWZpbmVyLmpzXCI7XG5pbXBvcnQgRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIgZnJvbSBcIi4vcmVmaW5lcnMvRU5FeHRyYWN0WWVhclN1ZmZpeFJlZmluZXIuanNcIjtcbmltcG9ydCBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyIGZyb20gXCIuL3JlZmluZXJzL0VOVW5saWtlbHlGb3JtYXRGaWx0ZXIuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVORGVmYXVsdENvbmZpZ3VyYXRpb24ge1xuICAgIGNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24obGl0dGxlRW5kaWFuID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gdGhpcy5jcmVhdGVDb25maWd1cmF0aW9uKGZhbHNlLCBsaXR0bGVFbmRpYW4pO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTkNhc3VhbERhdGVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOQ2FzdWFsVGltZVBhcnNlcigpKTtcbiAgICAgICAgb3B0aW9uLnBhcnNlcnMucHVzaChuZXcgRU5Nb250aE5hbWVQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5wYXJzZXJzLnB1c2gobmV3IEVOUmVsYXRpdmVEYXRlRm9ybWF0UGFyc2VyKCkpO1xuICAgICAgICBvcHRpb24ucGFyc2Vycy5wdXNoKG5ldyBFTlRpbWVVbml0Q2FzdWFsUmVsYXRpdmVGb3JtYXRQYXJzZXIoKSk7XG4gICAgICAgIG9wdGlvbi5yZWZpbmVycy5wdXNoKG5ldyBFTlVubGlrZWx5Rm9ybWF0RmlsdGVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9uO1xuICAgIH1cbiAgICBjcmVhdGVDb25maWd1cmF0aW9uKHN0cmljdE1vZGUgPSB0cnVlLCBsaXR0bGVFbmRpYW4gPSBmYWxzZSkge1xuICAgICAgICBjb25zdCBvcHRpb25zID0gaW5jbHVkZUNvbW1vbkNvbmZpZ3VyYXRpb24oe1xuICAgICAgICAgICAgcGFyc2VyczogW1xuICAgICAgICAgICAgICAgIG5ldyBTbGFzaERhdGVGb3JtYXRQYXJzZXIobGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICBuZXcgRU5UaW1lVW5pdFdpdGhpbkZvcm1hdFBhcnNlcihzdHJpY3RNb2RlKSxcbiAgICAgICAgICAgICAgICBuZXcgRU5Nb250aE5hbWVMaXR0bGVFbmRpYW5QYXJzZXIoKSxcbiAgICAgICAgICAgICAgICBuZXcgRU5Nb250aE5hbWVNaWRkbGVFbmRpYW5QYXJzZXIobGl0dGxlRW5kaWFuKSxcbiAgICAgICAgICAgICAgICBuZXcgRU5XZWVrZGF5UGFyc2VyKCksXG4gICAgICAgICAgICAgICAgbmV3IEVOU2xhc2hNb250aEZvcm1hdFBhcnNlcigpLFxuICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVFeHByZXNzaW9uUGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0QWdvRm9ybWF0UGFyc2VyKHN0cmljdE1vZGUpLFxuICAgICAgICAgICAgICAgIG5ldyBFTlRpbWVVbml0TGF0ZXJGb3JtYXRQYXJzZXIoc3RyaWN0TW9kZSksXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcmVmaW5lcnM6IFtuZXcgRU5NZXJnZURhdGVUaW1lUmVmaW5lcigpXSxcbiAgICAgICAgfSwgc3RyaWN0TW9kZSk7XG4gICAgICAgIG9wdGlvbnMucGFyc2Vycy51bnNoaWZ0KG5ldyBFTlllYXJNb250aERheVBhcnNlcihzdHJpY3RNb2RlKSk7XG4gICAgICAgIG9wdGlvbnMucmVmaW5lcnMudW5zaGlmdChuZXcgRU5NZXJnZVJlbGF0aXZlRm9sbG93QnlEYXRlUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy51bnNoaWZ0KG5ldyBFTk1lcmdlUmVsYXRpdmVBZnRlckRhdGVSZWZpbmVyKCkpO1xuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnVuc2hpZnQobmV3IE92ZXJsYXBSZW1vdmFsUmVmaW5lcigpKTtcbiAgICAgICAgb3B0aW9ucy5yZWZpbmVycy5wdXNoKG5ldyBFTk1lcmdlRGF0ZVRpbWVSZWZpbmVyKCkpO1xuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVORXh0cmFjdFllYXJTdWZmaXhSZWZpbmVyKCkpO1xuICAgICAgICBvcHRpb25zLnJlZmluZXJzLnB1c2gobmV3IEVOTWVyZ2VEYXRlUmFuZ2VSZWZpbmVyKCkpO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jb25maWd1cmF0aW9uLmpzLm1hcCIsImltcG9ydCB7IFJlZmVyZW5jZVdpdGhUaW1lem9uZSwgUGFyc2luZ0NvbXBvbmVudHMsIFBhcnNpbmdSZXN1bHQgfSBmcm9tIFwiLi9yZXN1bHRzLmpzXCI7XG5pbXBvcnQgRU5EZWZhdWx0Q29uZmlndXJhdGlvbiBmcm9tIFwiLi9sb2NhbGVzL2VuL2NvbmZpZ3VyYXRpb24uanNcIjtcbmV4cG9ydCBjbGFzcyBDaHJvbm8ge1xuICAgIGNvbnN0cnVjdG9yKGNvbmZpZ3VyYXRpb24pIHtcbiAgICAgICAgdGhpcy5kZWZhdWx0Q29uZmlnID0gbmV3IEVORGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgY29uZmlndXJhdGlvbiA9IGNvbmZpZ3VyYXRpb24gfHwgdGhpcy5kZWZhdWx0Q29uZmlnLmNyZWF0ZUNhc3VhbENvbmZpZ3VyYXRpb24oKTtcbiAgICAgICAgdGhpcy5wYXJzZXJzID0gWy4uLmNvbmZpZ3VyYXRpb24ucGFyc2Vyc107XG4gICAgICAgIHRoaXMucmVmaW5lcnMgPSBbLi4uY29uZmlndXJhdGlvbi5yZWZpbmVyc107XG4gICAgfVxuICAgIGNsb25lKCkge1xuICAgICAgICByZXR1cm4gbmV3IENocm9ubyh7XG4gICAgICAgICAgICBwYXJzZXJzOiBbLi4udGhpcy5wYXJzZXJzXSxcbiAgICAgICAgICAgIHJlZmluZXJzOiBbLi4udGhpcy5yZWZpbmVyc10sXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwYXJzZURhdGUodGV4dCwgcmVmZXJlbmNlRGF0ZSwgb3B0aW9uKSB7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSB0aGlzLnBhcnNlKHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbik7XG4gICAgICAgIHJldHVybiByZXN1bHRzLmxlbmd0aCA+IDAgPyByZXN1bHRzWzBdLnN0YXJ0LmRhdGUoKSA6IG51bGw7XG4gICAgfVxuICAgIHBhcnNlKHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbikge1xuICAgICAgICBjb25zdCBjb250ZXh0ID0gbmV3IFBhcnNpbmdDb250ZXh0KHRleHQsIHJlZmVyZW5jZURhdGUsIG9wdGlvbik7XG4gICAgICAgIGxldCByZXN1bHRzID0gW107XG4gICAgICAgIHRoaXMucGFyc2Vycy5mb3JFYWNoKChwYXJzZXIpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFJlc3VsdHMgPSBDaHJvbm8uZXhlY3V0ZVBhcnNlcihjb250ZXh0LCBwYXJzZXIpO1xuICAgICAgICAgICAgcmVzdWx0cyA9IHJlc3VsdHMuY29uY2F0KHBhcnNlZFJlc3VsdHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmVzdWx0cy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYS5pbmRleCAtIGIuaW5kZXg7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnJlZmluZXJzLmZvckVhY2goZnVuY3Rpb24gKHJlZmluZXIpIHtcbiAgICAgICAgICAgIHJlc3VsdHMgPSByZWZpbmVyLnJlZmluZShjb250ZXh0LCByZXN1bHRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cbiAgICBzdGF0aWMgZXhlY3V0ZVBhcnNlcihjb250ZXh0LCBwYXJzZXIpIHtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IFtdO1xuICAgICAgICBjb25zdCBwYXR0ZXJuID0gcGFyc2VyLnBhdHRlcm4oY29udGV4dCk7XG4gICAgICAgIGNvbnN0IG9yaWdpbmFsVGV4dCA9IGNvbnRleHQudGV4dDtcbiAgICAgICAgbGV0IHJlbWFpbmluZ1RleHQgPSBjb250ZXh0LnRleHQ7XG4gICAgICAgIGxldCBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgd2hpbGUgKG1hdGNoKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IG1hdGNoLmluZGV4ICsgb3JpZ2luYWxUZXh0Lmxlbmd0aCAtIHJlbWFpbmluZ1RleHQubGVuZ3RoO1xuICAgICAgICAgICAgbWF0Y2guaW5kZXggPSBpbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHBhcnNlci5leHRyYWN0KGNvbnRleHQsIG1hdGNoKTtcbiAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcobWF0Y2guaW5kZXggKyAxKTtcbiAgICAgICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBwYXJzZWRSZXN1bHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFBhcnNpbmdSZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBwYXJzZWRSZXN1bHQgPSByZXN1bHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBQYXJzaW5nQ29tcG9uZW50cykge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0pO1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdC5zdGFydCA9IHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcnNlZFJlc3VsdCA9IGNvbnRleHQuY3JlYXRlUGFyc2luZ1Jlc3VsdChtYXRjaC5pbmRleCwgbWF0Y2hbMF0sIHJlc3VsdCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRJbmRleCA9IHBhcnNlZFJlc3VsdC5pbmRleDtcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFRleHQgPSBwYXJzZWRSZXN1bHQudGV4dDtcbiAgICAgICAgICAgIGNvbnRleHQuZGVidWcoKCkgPT4gY29uc29sZS5sb2coYCR7cGFyc2VyLmNvbnN0cnVjdG9yLm5hbWV9IGV4dHJhY3RlZCAoYXQgaW5kZXg9JHtwYXJzZWRJbmRleH0pICcke3BhcnNlZFRleHR9J2ApKTtcbiAgICAgICAgICAgIHJlc3VsdHMucHVzaChwYXJzZWRSZXN1bHQpO1xuICAgICAgICAgICAgcmVtYWluaW5nVGV4dCA9IG9yaWdpbmFsVGV4dC5zdWJzdHJpbmcocGFyc2VkSW5kZXggKyBwYXJzZWRUZXh0Lmxlbmd0aCk7XG4gICAgICAgICAgICBtYXRjaCA9IHBhdHRlcm4uZXhlYyhyZW1haW5pbmdUZXh0KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG59XG5leHBvcnQgY2xhc3MgUGFyc2luZ0NvbnRleHQge1xuICAgIGNvbnN0cnVjdG9yKHRleHQsIHJlZkRhdGUsIG9wdGlvbikge1xuICAgICAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgICAgICB0aGlzLnJlZmVyZW5jZSA9IG5ldyBSZWZlcmVuY2VXaXRoVGltZXpvbmUocmVmRGF0ZSk7XG4gICAgICAgIHRoaXMub3B0aW9uID0gb3B0aW9uID8/IHt9O1xuICAgICAgICB0aGlzLnJlZkRhdGUgPSB0aGlzLnJlZmVyZW5jZS5pbnN0YW50O1xuICAgIH1cbiAgICBjcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhjb21wb25lbnRzKSB7XG4gICAgICAgIGlmIChjb21wb25lbnRzIGluc3RhbmNlb2YgUGFyc2luZ0NvbXBvbmVudHMpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ0NvbXBvbmVudHModGhpcy5yZWZlcmVuY2UsIGNvbXBvbmVudHMpO1xuICAgIH1cbiAgICBjcmVhdGVQYXJzaW5nUmVzdWx0KGluZGV4LCB0ZXh0T3JFbmRJbmRleCwgc3RhcnRDb21wb25lbnRzLCBlbmRDb21wb25lbnRzKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPSB0eXBlb2YgdGV4dE9yRW5kSW5kZXggPT09IFwic3RyaW5nXCIgPyB0ZXh0T3JFbmRJbmRleCA6IHRoaXMudGV4dC5zdWJzdHJpbmcoaW5kZXgsIHRleHRPckVuZEluZGV4KTtcbiAgICAgICAgY29uc3Qgc3RhcnQgPSBzdGFydENvbXBvbmVudHMgPyB0aGlzLmNyZWF0ZVBhcnNpbmdDb21wb25lbnRzKHN0YXJ0Q29tcG9uZW50cykgOiBudWxsO1xuICAgICAgICBjb25zdCBlbmQgPSBlbmRDb21wb25lbnRzID8gdGhpcy5jcmVhdGVQYXJzaW5nQ29tcG9uZW50cyhlbmRDb21wb25lbnRzKSA6IG51bGw7XG4gICAgICAgIHJldHVybiBuZXcgUGFyc2luZ1Jlc3VsdCh0aGlzLnJlZmVyZW5jZSwgaW5kZXgsIHRleHQsIHN0YXJ0LCBlbmQpO1xuICAgIH1cbiAgICBkZWJ1ZyhibG9jaykge1xuICAgICAgICBpZiAodGhpcy5vcHRpb24uZGVidWcpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9wdGlvbi5kZWJ1ZyBpbnN0YW5jZW9mIEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5vcHRpb24uZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IHRoaXMub3B0aW9uLmRlYnVnO1xuICAgICAgICAgICAgICAgIGhhbmRsZXIuZGVidWcoYmxvY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y2hyb25vLmpzLm1hcCIsImltcG9ydCB7IENocm9ubyB9IGZyb20gXCIuLi8uLi9jaHJvbm8uanNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi4vLi4vcmVzdWx0cy5qc1wiO1xuaW1wb3J0IHsgTWVyaWRpZW0sIFdlZWtkYXkgfSBmcm9tIFwiLi4vLi4vdHlwZXMuanNcIjtcbmltcG9ydCBFTkRlZmF1bHRDb25maWd1cmF0aW9uIGZyb20gXCIuL2NvbmZpZ3VyYXRpb24uanNcIjtcbmV4cG9ydCB7IENocm9ubywgUGFyc2luZ1Jlc3VsdCwgUGFyc2luZ0NvbXBvbmVudHMsIFJlZmVyZW5jZVdpdGhUaW1lem9uZSB9O1xuZXhwb3J0IHsgTWVyaWRpZW0sIFdlZWtkYXkgfTtcbmV4cG9ydCBjb25zdCBjb25maWd1cmF0aW9uID0gbmV3IEVORGVmYXVsdENvbmZpZ3VyYXRpb24oKTtcbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbihmYWxzZSkpO1xuZXhwb3J0IGNvbnN0IHN0cmljdCA9IG5ldyBDaHJvbm8oY29uZmlndXJhdGlvbi5jcmVhdGVDb25maWd1cmF0aW9uKHRydWUsIGZhbHNlKSk7XG5leHBvcnQgY29uc3QgR0IgPSBuZXcgQ2hyb25vKGNvbmZpZ3VyYXRpb24uY3JlYXRlQ2FzdWFsQ29uZmlndXJhdGlvbih0cnVlKSk7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dCwgcmVmLCBvcHRpb24pIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCJpbXBvcnQgKiBhcyBlbiBmcm9tIFwiLi9sb2NhbGVzL2VuL2luZGV4LmpzXCI7XG5pbXBvcnQgeyBDaHJvbm8gfSBmcm9tIFwiLi9jaHJvbm8uanNcIjtcbmltcG9ydCB7IFBhcnNpbmdSZXN1bHQsIFBhcnNpbmdDb21wb25lbnRzLCBSZWZlcmVuY2VXaXRoVGltZXpvbmUgfSBmcm9tIFwiLi9yZXN1bHRzLmpzXCI7XG5pbXBvcnQgeyBNZXJpZGllbSwgV2Vla2RheSB9IGZyb20gXCIuL3R5cGVzLmpzXCI7XG5leHBvcnQgeyBlbiwgQ2hyb25vLCBQYXJzaW5nUmVzdWx0LCBQYXJzaW5nQ29tcG9uZW50cywgUmVmZXJlbmNlV2l0aFRpbWV6b25lIH07XG5leHBvcnQgeyBNZXJpZGllbSwgV2Vla2RheSB9O1xuaW1wb3J0ICogYXMgZGUgZnJvbSBcIi4vbG9jYWxlcy9kZS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgZnIgZnJvbSBcIi4vbG9jYWxlcy9mci9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgamEgZnJvbSBcIi4vbG9jYWxlcy9qYS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgcHQgZnJvbSBcIi4vbG9jYWxlcy9wdC9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgbmwgZnJvbSBcIi4vbG9jYWxlcy9ubC9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgemggZnJvbSBcIi4vbG9jYWxlcy96aC9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgcnUgZnJvbSBcIi4vbG9jYWxlcy9ydS9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgZXMgZnJvbSBcIi4vbG9jYWxlcy9lcy9pbmRleC5qc1wiO1xuaW1wb3J0ICogYXMgdWsgZnJvbSBcIi4vbG9jYWxlcy91ay9pbmRleC5qc1wiO1xuZXhwb3J0IHsgZGUsIGZyLCBqYSwgcHQsIG5sLCB6aCwgcnUsIGVzLCB1ayB9O1xuZXhwb3J0IGNvbnN0IHN0cmljdCA9IGVuLnN0cmljdDtcbmV4cG9ydCBjb25zdCBjYXN1YWwgPSBlbi5jYXN1YWw7XG5leHBvcnQgZnVuY3Rpb24gcGFyc2UodGV4dCwgcmVmLCBvcHRpb24pIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlKHRleHQsIHJlZiwgb3B0aW9uKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZURhdGUodGV4dCwgcmVmLCBvcHRpb24pIHtcbiAgICByZXR1cm4gY2FzdWFsLnBhcnNlRGF0ZSh0ZXh0LCByZWYsIG9wdGlvbik7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIhZnVuY3Rpb24odCxpKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1pKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShpKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl91dGM9aSgpfSh0aGlzLChmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciB0PVwibWludXRlXCIsaT0vWystXVxcZFxcZCg/Ojo/XFxkXFxkKT8vZyxlPS8oWystXXxcXGRcXGQpL2c7cmV0dXJuIGZ1bmN0aW9uKHMsZixuKXt2YXIgdT1mLnByb3RvdHlwZTtuLnV0Yz1mdW5jdGlvbih0KXt2YXIgaT17ZGF0ZTp0LHV0YzohMCxhcmdzOmFyZ3VtZW50c307cmV0dXJuIG5ldyBmKGkpfSx1LnV0Yz1mdW5jdGlvbihpKXt2YXIgZT1uKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMH0pO3JldHVybiBpP2UuYWRkKHRoaXMudXRjT2Zmc2V0KCksdCk6ZX0sdS5sb2NhbD1mdW5jdGlvbigpe3JldHVybiBuKHRoaXMudG9EYXRlKCkse2xvY2FsZTp0aGlzLiRMLHV0YzohMX0pfTt2YXIgbz11LnBhcnNlO3UucGFyc2U9ZnVuY3Rpb24odCl7dC51dGMmJih0aGlzLiR1PSEwKSx0aGlzLiR1dGlscygpLnUodC4kb2Zmc2V0KXx8KHRoaXMuJG9mZnNldD10LiRvZmZzZXQpLG8uY2FsbCh0aGlzLHQpfTt2YXIgcj11LmluaXQ7dS5pbml0PWZ1bmN0aW9uKCl7aWYodGhpcy4kdSl7dmFyIHQ9dGhpcy4kZDt0aGlzLiR5PXQuZ2V0VVRDRnVsbFllYXIoKSx0aGlzLiRNPXQuZ2V0VVRDTW9udGgoKSx0aGlzLiREPXQuZ2V0VVRDRGF0ZSgpLHRoaXMuJFc9dC5nZXRVVENEYXkoKSx0aGlzLiRIPXQuZ2V0VVRDSG91cnMoKSx0aGlzLiRtPXQuZ2V0VVRDTWludXRlcygpLHRoaXMuJHM9dC5nZXRVVENTZWNvbmRzKCksdGhpcy4kbXM9dC5nZXRVVENNaWxsaXNlY29uZHMoKX1lbHNlIHIuY2FsbCh0aGlzKX07dmFyIGE9dS51dGNPZmZzZXQ7dS51dGNPZmZzZXQ9ZnVuY3Rpb24ocyxmKXt2YXIgbj10aGlzLiR1dGlscygpLnU7aWYobihzKSlyZXR1cm4gdGhpcy4kdT8wOm4odGhpcy4kb2Zmc2V0KT9hLmNhbGwodGhpcyk6dGhpcy4kb2Zmc2V0O2lmKFwic3RyaW5nXCI9PXR5cGVvZiBzJiYocz1mdW5jdGlvbih0KXt2b2lkIDA9PT10JiYodD1cIlwiKTt2YXIgcz10Lm1hdGNoKGkpO2lmKCFzKXJldHVybiBudWxsO3ZhciBmPShcIlwiK3NbMF0pLm1hdGNoKGUpfHxbXCItXCIsMCwwXSxuPWZbMF0sdT02MCorZlsxXSsgK2ZbMl07cmV0dXJuIDA9PT11PzA6XCIrXCI9PT1uP3U6LXV9KHMpLG51bGw9PT1zKSlyZXR1cm4gdGhpczt2YXIgdT1NYXRoLmFicyhzKTw9MTY/NjAqczpzLG89dGhpcztpZihmKXJldHVybiBvLiRvZmZzZXQ9dSxvLiR1PTA9PT1zLG87aWYoMCE9PXMpe3ZhciByPXRoaXMuJHU/dGhpcy50b0RhdGUoKS5nZXRUaW1lem9uZU9mZnNldCgpOi0xKnRoaXMudXRjT2Zmc2V0KCk7KG89dGhpcy5sb2NhbCgpLmFkZCh1K3IsdCkpLiRvZmZzZXQ9dSxvLiR4LiRsb2NhbE9mZnNldD1yfWVsc2Ugbz10aGlzLnV0YygpO3JldHVybiBvfTt2YXIgaD11LmZvcm1hdDt1LmZvcm1hdD1mdW5jdGlvbih0KXt2YXIgaT10fHwodGhpcy4kdT9cIllZWVktTU0tRERUSEg6bW06c3NbWl1cIjpcIlwiKTtyZXR1cm4gaC5jYWxsKHRoaXMsaSl9LHUudmFsdWVPZj1mdW5jdGlvbigpe3ZhciB0PXRoaXMuJHV0aWxzKCkudSh0aGlzLiRvZmZzZXQpPzA6dGhpcy4kb2Zmc2V0Kyh0aGlzLiR4LiRsb2NhbE9mZnNldHx8dGhpcy4kZC5nZXRUaW1lem9uZU9mZnNldCgpKTtyZXR1cm4gdGhpcy4kZC52YWx1ZU9mKCktNmU0KnR9LHUuaXNVVEM9ZnVuY3Rpb24oKXtyZXR1cm4hIXRoaXMuJHV9LHUudG9JU09TdHJpbmc9ZnVuY3Rpb24oKXtyZXR1cm4gdGhpcy50b0RhdGUoKS50b0lTT1N0cmluZygpfSx1LnRvU3RyaW5nPWZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMudG9EYXRlKCkudG9VVENTdHJpbmcoKX07dmFyIGw9dS50b0RhdGU7dS50b0RhdGU9ZnVuY3Rpb24odCl7cmV0dXJuXCJzXCI9PT10JiZ0aGlzLiRvZmZzZXQ/bih0aGlzLmZvcm1hdChcIllZWVktTU0tREQgSEg6bW06c3M6U1NTXCIpKS50b0RhdGUoKTpsLmNhbGwodGhpcyl9O3ZhciBjPXUuZGlmZjt1LmRpZmY9ZnVuY3Rpb24odCxpLGUpe2lmKHQmJnRoaXMuJHU9PT10LiR1KXJldHVybiBjLmNhbGwodGhpcyx0LGksZSk7dmFyIHM9dGhpcy5sb2NhbCgpLGY9bih0KS5sb2NhbCgpO3JldHVybiBjLmNhbGwocyxmLGksZSl9fX0pKTsiLCIhZnVuY3Rpb24odCxlKXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJ1bmRlZmluZWRcIiE9dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz1lKCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShlKToodD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZ2xvYmFsVGhpcz9nbG9iYWxUaGlzOnR8fHNlbGYpLmRheWpzX3BsdWdpbl90aW1lem9uZT1lKCl9KHRoaXMsKGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIHQ9e3llYXI6MCxtb250aDoxLGRheToyLGhvdXI6MyxtaW51dGU6NCxzZWNvbmQ6NX0sZT17fTtyZXR1cm4gZnVuY3Rpb24obixpLG8pe3ZhciByLGE9ZnVuY3Rpb24odCxuLGkpe3ZvaWQgMD09PWkmJihpPXt9KTt2YXIgbz1uZXcgRGF0ZSh0KSxyPWZ1bmN0aW9uKHQsbil7dm9pZCAwPT09biYmKG49e30pO3ZhciBpPW4udGltZVpvbmVOYW1lfHxcInNob3J0XCIsbz10K1wifFwiK2kscj1lW29dO3JldHVybiByfHwocj1uZXcgSW50bC5EYXRlVGltZUZvcm1hdChcImVuLVVTXCIse2hvdXIxMjohMSx0aW1lWm9uZTp0LHllYXI6XCJudW1lcmljXCIsbW9udGg6XCIyLWRpZ2l0XCIsZGF5OlwiMi1kaWdpdFwiLGhvdXI6XCIyLWRpZ2l0XCIsbWludXRlOlwiMi1kaWdpdFwiLHNlY29uZDpcIjItZGlnaXRcIix0aW1lWm9uZU5hbWU6aX0pLGVbb109cikscn0obixpKTtyZXR1cm4gci5mb3JtYXRUb1BhcnRzKG8pfSx1PWZ1bmN0aW9uKGUsbil7Zm9yKHZhciBpPWEoZSxuKSxyPVtdLHU9MDt1PGkubGVuZ3RoO3UrPTEpe3ZhciBmPWlbdV0scz1mLnR5cGUsbT1mLnZhbHVlLGM9dFtzXTtjPj0wJiYocltjXT1wYXJzZUludChtLDEwKSl9dmFyIGQ9clszXSxsPTI0PT09ZD8wOmQsaD1yWzBdK1wiLVwiK3JbMV0rXCItXCIrclsyXStcIiBcIitsK1wiOlwiK3JbNF0rXCI6XCIrcls1XStcIjowMDBcIix2PStlO3JldHVybihvLnV0YyhoKS52YWx1ZU9mKCktKHYtPXYlMWUzKSkvNmU0fSxmPWkucHJvdG90eXBlO2YudHo9ZnVuY3Rpb24odCxlKXt2b2lkIDA9PT10JiYodD1yKTt2YXIgbixpPXRoaXMudXRjT2Zmc2V0KCksYT10aGlzLnRvRGF0ZSgpLHU9YS50b0xvY2FsZVN0cmluZyhcImVuLVVTXCIse3RpbWVab25lOnR9KSxmPU1hdGgucm91bmQoKGEtbmV3IERhdGUodSkpLzFlMy82MCkscz0xNSotTWF0aC5yb3VuZChhLmdldFRpbWV6b25lT2Zmc2V0KCkvMTUpLWY7aWYoIU51bWJlcihzKSluPXRoaXMudXRjT2Zmc2V0KDAsZSk7ZWxzZSBpZihuPW8odSx7bG9jYWxlOnRoaXMuJEx9KS4kc2V0KFwibWlsbGlzZWNvbmRcIix0aGlzLiRtcykudXRjT2Zmc2V0KHMsITApLGUpe3ZhciBtPW4udXRjT2Zmc2V0KCk7bj1uLmFkZChpLW0sXCJtaW51dGVcIil9cmV0dXJuIG4uJHguJHRpbWV6b25lPXQsbn0sZi5vZmZzZXROYW1lPWZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMuJHguJHRpbWV6b25lfHxvLnR6Lmd1ZXNzKCksbj1hKHRoaXMudmFsdWVPZigpLGUse3RpbWVab25lTmFtZTp0fSkuZmluZCgoZnVuY3Rpb24odCl7cmV0dXJuXCJ0aW1lem9uZW5hbWVcIj09PXQudHlwZS50b0xvd2VyQ2FzZSgpfSkpO3JldHVybiBuJiZuLnZhbHVlfTt2YXIgcz1mLnN0YXJ0T2Y7Zi5zdGFydE9mPWZ1bmN0aW9uKHQsZSl7aWYoIXRoaXMuJHh8fCF0aGlzLiR4LiR0aW1lem9uZSlyZXR1cm4gcy5jYWxsKHRoaXMsdCxlKTt2YXIgbj1vKHRoaXMuZm9ybWF0KFwiWVlZWS1NTS1ERCBISDptbTpzczpTU1NcIikse2xvY2FsZTp0aGlzLiRMfSk7cmV0dXJuIHMuY2FsbChuLHQsZSkudHoodGhpcy4keC4kdGltZXpvbmUsITApfSxvLnR6PWZ1bmN0aW9uKHQsZSxuKXt2YXIgaT1uJiZlLGE9bnx8ZXx8cixmPXUoK28oKSxhKTtpZihcInN0cmluZ1wiIT10eXBlb2YgdClyZXR1cm4gbyh0KS50eihhKTt2YXIgcz1mdW5jdGlvbih0LGUsbil7dmFyIGk9dC02MCplKjFlMyxvPXUoaSxuKTtpZihlPT09bylyZXR1cm5baSxlXTt2YXIgcj11KGktPTYwKihvLWUpKjFlMyxuKTtyZXR1cm4gbz09PXI/W2ksb106W3QtNjAqTWF0aC5taW4obyxyKSoxZTMsTWF0aC5tYXgobyxyKV19KG8udXRjKHQsaSkudmFsdWVPZigpLGYsYSksbT1zWzBdLGM9c1sxXSxkPW8obSkudXRjT2Zmc2V0KGMpO3JldHVybiBkLiR4LiR0aW1lem9uZT1hLGR9LG8udHouZ3Vlc3M9ZnVuY3Rpb24oKXtyZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdCgpLnJlc29sdmVkT3B0aW9ucygpLnRpbWVab25lfSxvLnR6LnNldERlZmF1bHQ9ZnVuY3Rpb24odCl7cj10fX19KSk7IiwiLy8gRmFsbGJhY2sgbG9jYWxlLlxuLy8gKHdoZW4gbm90IGEgc2luZ2xlIG9uZSBvZiB0aGUgc3VwcGxpZWQgXCJwcmVmZXJyZWRcIiBsb2NhbGVzIGlzIGF2YWlsYWJsZSlcbnZhciBkZWZhdWx0TG9jYWxlID0gJ2VuJzsgLy8gRm9yIGFsbCBsb2NhbGVzIGFkZGVkXG4vLyB0aGVpciByZWxhdGl2ZSB0aW1lIGZvcm1hdHRlciBtZXNzYWdlcyB3aWxsIGJlIHN0b3JlZCBoZXJlLlxuXG52YXIgbG9jYWxlc0RhdGEgPSB7fTsgLy8gQWNjb3JkaW5nIHRvIHRoZSBzcGVjIEJDUCA0NyBsYW5ndWFnZSB0YWdzIGFyZSBjYXNlLWluc2Vuc2l0aXZlLlxuLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzU2NDZcblxudmFyIGxvd2VyY2FzZUxvY2FsZUxvb2t1cCA9IHt9O1xuZXhwb3J0IGZ1bmN0aW9uIGdldERlZmF1bHRMb2NhbGUoKSB7XG4gIHJldHVybiBkZWZhdWx0TG9jYWxlO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldERlZmF1bHRMb2NhbGUobG9jYWxlKSB7XG4gIGRlZmF1bHRMb2NhbGUgPSBsb2NhbGU7XG59XG4vKipcclxuICogR2V0cyBsb2NhbGUgZGF0YSBwcmV2aW91c2x5IGFkZGVkIGJ5IGBhZGRMb2NhbGVEYXRhKClgLlxyXG4gKiBAcmV0dXJuICB7b2JqZWN0fSBbbG9jYWxlRGF0YV1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXRhKGxvY2FsZSkge1xuICByZXR1cm4gbG9jYWxlc0RhdGFbbG9jYWxlXTtcbn1cbi8qKlxyXG4gKiBBZGRzIGxvY2FsZSBkYXRhLlxyXG4gKiBJcyBjYWxsZWQgYnkgYFJlbGF0aXZlVGltZUZvcm1hdC5hZGRMb2NhbGUoLi4uKWAuXHJcbiAqIEBwYXJhbSAge29iamVjdH0gbG9jYWxlRGF0YVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvY2FsZURhdGEobG9jYWxlRGF0YSkge1xuICBpZiAoIWxvY2FsZURhdGEpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGxvY2FsZSBkYXRhIHBhc3NlZCcpO1xuICB9IC8vIFRoaXMgbG9jYWxlIGRhdGEgaXMgc3RvcmVkIGluIGEgZ2xvYmFsIHZhcmlhYmxlXG4gIC8vIGFuZCBsYXRlciB1c2VkIHdoZW4gY2FsbGluZyBgLmZvcm1hdCh0aW1lKWAuXG5cblxuICBsb2NhbGVzRGF0YVtsb2NhbGVEYXRhLmxvY2FsZV0gPSBsb2NhbGVEYXRhO1xuICBsb3dlcmNhc2VMb2NhbGVMb29rdXBbbG9jYWxlRGF0YS5sb2NhbGUudG9Mb3dlckNhc2UoKV0gPSBsb2NhbGVEYXRhLmxvY2FsZTtcbn1cbi8qKlxyXG4gKiBSZXR1cm5zIGEgbG9jYWxlIGZvciB3aGljaCBsb2NhbGUgZGF0YSBoYXMgYmVlbiBhZGRlZFxyXG4gKiB2aWEgYFJlbGF0aXZlVGltZUZvcm1hdC5hZGRMb2NhbGUoLi4uKWAuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gbG9jYWxlXHJcbiAqIEByZXR1cm4ge3N0cmluZ30gW2xvY2FsZV1cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTG9jYWxlKGxvY2FsZSkge1xuICBpZiAobG9jYWxlc0RhdGFbbG9jYWxlXSkge1xuICAgIHJldHVybiBsb2NhbGU7XG4gIH1cblxuICBpZiAobG93ZXJjYXNlTG9jYWxlTG9va3VwW2xvY2FsZS50b0xvd2VyQ2FzZSgpXSkge1xuICAgIHJldHVybiBsb3dlcmNhc2VMb2NhbGVMb29rdXBbbG9jYWxlLnRvTG93ZXJDYXNlKCldO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1Mb2NhbGVEYXRhU3RvcmUuanMubWFwIiwiaW1wb3J0IHsgcmVzb2x2ZUxvY2FsZSBhcyByZXNvbHZlTG9jYWxlRm9yRGF0YSB9IGZyb20gJy4vTG9jYWxlRGF0YVN0b3JlLmpzJztcbi8qKlxyXG4gKiBSZXNvbHZlcyBhIGxvY2FsZSB0byBhIHN1cHBvcnRlZCBvbmUgKGlmIGFueSkuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gbG9jYWxlXHJcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBBbiBvYmplY3QgdGhhdCBtYXkgaGF2ZSB0aGUgZm9sbG93aW5nIHByb3BlcnR5OlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubG9jYWxlTWF0Y2hlcj1cImxvb2t1cFwiXSAtIFRoZSBsb2NhbGUgbWF0Y2hpbmcgYWxnb3JpdGhtIHRvIHVzZS4gUG9zc2libGUgdmFsdWVzIGFyZSBcImxvb2t1cFwiIGFuZCBcImJlc3QgZml0XCIuIEN1cnJlbnRseSBvbmx5IFwibG9va3VwXCIgaXMgc3VwcG9ydGVkLlxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFtsb2NhbGVdXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIFJldHVybnMgXCJzclwiXHJcbiAqIHJlc29sdmVMb2NhbGUoXCJzci1DeXJsLUJBXCIpXHJcbiAqIC8vIFJldHVybnMgYHVuZGVmaW5lZGBcclxuICogcmVzb2x2ZUxvY2FsZShcInh4LUxhdG5cIilcclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmVMb2NhbGUobG9jYWxlKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcbiAgdmFyIGxvY2FsZU1hdGNoZXIgPSBvcHRpb25zLmxvY2FsZU1hdGNoZXIgfHwgJ2xvb2t1cCc7XG5cbiAgc3dpdGNoIChsb2NhbGVNYXRjaGVyKSB7XG4gICAgY2FzZSAnbG9va3VwJzpcbiAgICAgIHJldHVybiByZXNvbHZlTG9jYWxlTG9va3VwKGxvY2FsZSk7XG4gICAgLy8gXCJiZXN0IGZpdFwiIGxvY2FsZSBtYXRjaGluZyBpcyBub3Qgc3VwcG9ydGVkLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRhbXBoZXRhbWluZS9yZWxhdGl2ZS10aW1lLWZvcm1hdC9pc3N1ZXMvMlxuXG4gICAgY2FzZSAnYmVzdCBmaXQnOlxuICAgICAgLy8gcmV0dXJuIHJlc29sdmVMb2NhbGVCZXN0Rml0KGxvY2FsZSlcbiAgICAgIHJldHVybiByZXNvbHZlTG9jYWxlTG9va3VwKGxvY2FsZSk7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIFxcXCJsb2NhbGVNYXRjaGVyXFxcIiBvcHRpb246IFwiLmNvbmNhdChsb2NhbGVNYXRjaGVyKSk7XG4gIH1cbn1cbi8qKlxyXG4gKiBSZXNvbHZlcyBhIGxvY2FsZSB0byBhIHN1cHBvcnRlZCBvbmUgKGlmIGFueSkuXHJcbiAqIFN0YXJ0cyBmcm9tIHRoZSBtb3N0IHNwZWNpZmljIGxvY2FsZSBhbmQgZ3JhZHVhbGx5XHJcbiAqIGZhbGxzIGJhY2sgdG8gbGVzcyBzcGVjaWZpYyBvbmVzLlxyXG4gKiBUaGlzIGlzIGEgYmFzaWMgaW1wbGVtZW50YXRpb24gb2YgdGhlIFwibG9va3VwXCIgYWxnb3JpdGhtLlxyXG4gKiBodHRwczovL3Rvb2xzLmlldGYub3JnL2h0bWwvcmZjNDY0NyNzZWN0aW9uLTMuNFxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGxvY2FsZVxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9IFtsb2NhbGVdXHJcbiAqIEBleGFtcGxlXHJcbiAqIC8vIFJldHVybnMgXCJzclwiXHJcbiAqIHJlc29sdmVMb2NhbGVMb29rdXAoXCJzci1DeXJsLUJBXCIpXHJcbiAqIC8vIFJldHVybnMgYHVuZGVmaW5lZGBcclxuICogcmVzb2x2ZUxvY2FsZUxvb2t1cChcInh4LUxhdG5cIilcclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlTG9jYWxlTG9va3VwKGxvY2FsZSkge1xuICB2YXIgcmVzb2x2ZWRMb2NhbGUgPSByZXNvbHZlTG9jYWxlRm9yRGF0YShsb2NhbGUpO1xuXG4gIGlmIChyZXNvbHZlZExvY2FsZSkge1xuICAgIHJldHVybiByZXNvbHZlZExvY2FsZTtcbiAgfSAvLyBgc3ItQ3lybC1CQWAgLT4gYHNyLUN5cmxgIC0+IGBzcmAuXG5cblxuICB2YXIgcGFydHMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcblxuICB3aGlsZSAobG9jYWxlLmxlbmd0aCA+IDEpIHtcbiAgICBwYXJ0cy5wb3AoKTtcbiAgICBsb2NhbGUgPSBwYXJ0cy5qb2luKCctJyk7XG5cbiAgICB2YXIgX3Jlc29sdmVkTG9jYWxlID0gcmVzb2x2ZUxvY2FsZUZvckRhdGEobG9jYWxlKTtcblxuICAgIGlmIChfcmVzb2x2ZWRMb2NhbGUpIHtcbiAgICAgIHJldHVybiBfcmVzb2x2ZWRMb2NhbGU7XG4gICAgfVxuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yZXNvbHZlTG9jYWxlLmpzLm1hcCIsIi8vICh0aGlzIGZpbGUgd2FzIGF1dG9nZW5lcmF0ZWQgYnkgYGdlbmVyYXRlLWxvY2FsZXNgKVxuLy8gXCJwbHVyYWwgcnVsZXNcIiBmdW5jdGlvbnMgYXJlIG5vdCBzdG9yZWQgaW4gbG9jYWxlIEpTT04gZmlsZXMgYmVjYXVzZSB0aGV5J3JlIG5vdCBzdHJpbmdzLlxuLy8gVGhpcyBmaWxlIGlzbid0IGJpZyDigJQgaXQncyBhYm91dCA1IGtpbG9ieXRlcyBpbiBzaXplIChtaW5pZmllZCkuXG4vLyBBbHRlcm5hdGl2ZWx5LCB0aGUgcGx1cmFsaXphdGlvbiBydWxlcyBmb3IgZWFjaCBsb2NhbGUgY291bGQgYmUgc3RvcmVkXG4vLyBpbiB0aGVpciBKU09OIGZpbGVzIGluIGEgbm9uLXBhcnNlZCBmb3JtIGFuZCBsYXRlciBwYXJzZWQgdmlhIGBtYWtlLXBsdXJhbGAgbGlicmFyeS5cbi8vIEJ1dCBgbWFrZS1wbHVyYWxgIGxpYnJhcnkgaXRzZWxmIGlzIHJlbGF0aXZlbHkgYmlnIGluIHNpemU6XG4vLyBgbWFrZS1wbHVyYWwubWluLmpzYCBpcyBhYm91dCA2IGtpbG9ieXRlcyAoaHR0cHM6Ly91bnBrZy5jb20vbWFrZS1wbHVyYWwvKS5cbi8vIFNvLCBpdCdzIG1vcmUgcHJhY3RpY2FsIHRvIGJ5cGFzcyBydW50aW1lIGBtYWtlLXBsdXJhbGAgcGx1cmFsaXphdGlvbiBydWxlcyBjb21waWxhdGlvblxuLy8gYW5kIGp1c3QgaW5jbHVkZSB0aGUgYWxyZWFkeSBjb21waWxlZCBwbHVhcmxpemF0aW9uIHJ1bGVzIGZvciBhbGwgbG9jYWxlcyBpbiB0aGUgbGlicmFyeSBjb2RlLlxudmFyICQgPSB7XG4gIGFmOiBmdW5jdGlvbiBhZihuKSB7XG4gICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgfSxcbiAgYW06IGZ1bmN0aW9uIGFtKG4pIHtcbiAgICByZXR1cm4gbiA+PSAwICYmIG4gPD0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgfSxcbiAgYXI6IGZ1bmN0aW9uIGFyKG4pIHtcbiAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMik7XG4gICAgcmV0dXJuIG4gPT0gMCA/ICd6ZXJvJyA6IG4gPT0gMSA/ICdvbmUnIDogbiA9PSAyID8gJ3R3bycgOiBuMTAwID49IDMgJiYgbjEwMCA8PSAxMCA/ICdmZXcnIDogbjEwMCA+PSAxMSAmJiBuMTAwIDw9IDk5ID8gJ21hbnknIDogJ290aGVyJztcbiAgfSxcbiAgYXN0OiBmdW5jdGlvbiBhc3Qobikge1xuICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgIHYwID0gIXNbMV07XG4gICAgcmV0dXJuIG4gPT0gMSAmJiB2MCA/ICdvbmUnIDogJ290aGVyJztcbiAgfSxcbiAgYmU6IGZ1bmN0aW9uIGJlKG4pIHtcbiAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKSxcbiAgICAgICAgbjEwMCA9IHQwICYmIHNbMF0uc2xpY2UoLTIpO1xuICAgIHJldHVybiBuMTAgPT0gMSAmJiBuMTAwICE9IDExID8gJ29uZScgOiBuMTAgPj0gMiAmJiBuMTAgPD0gNCAmJiAobjEwMCA8IDEyIHx8IG4xMDAgPiAxNCkgPyAnZmV3JyA6IHQwICYmIG4xMCA9PSAwIHx8IG4xMCA+PSA1ICYmIG4xMCA8PSA5IHx8IG4xMDAgPj0gMTEgJiYgbjEwMCA8PSAxNCA/ICdtYW55JyA6ICdvdGhlcic7XG4gIH0sXG4gIGJyOiBmdW5jdGlvbiBicihuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbixcbiAgICAgICAgbjEwID0gdDAgJiYgc1swXS5zbGljZSgtMSksXG4gICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKSxcbiAgICAgICAgbjEwMDAwMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC02KTtcbiAgICByZXR1cm4gbjEwID09IDEgJiYgbjEwMCAhPSAxMSAmJiBuMTAwICE9IDcxICYmIG4xMDAgIT0gOTEgPyAnb25lJyA6IG4xMCA9PSAyICYmIG4xMDAgIT0gMTIgJiYgbjEwMCAhPSA3MiAmJiBuMTAwICE9IDkyID8gJ3R3bycgOiAobjEwID09IDMgfHwgbjEwID09IDQgfHwgbjEwID09IDkpICYmIChuMTAwIDwgMTAgfHwgbjEwMCA+IDE5KSAmJiAobjEwMCA8IDcwIHx8IG4xMDAgPiA3OSkgJiYgKG4xMDAgPCA5MCB8fCBuMTAwID4gOTkpID8gJ2ZldycgOiBuICE9IDAgJiYgdDAgJiYgbjEwMDAwMDAgPT0gMCA/ICdtYW55JyA6ICdvdGhlcic7XG4gIH0sXG4gIGJzOiBmdW5jdGlvbiBicyhuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpLFxuICAgICAgICBmMTAgPSBmLnNsaWNlKC0xKSxcbiAgICAgICAgZjEwMCA9IGYuc2xpY2UoLTIpO1xuICAgIHJldHVybiB2MCAmJiBpMTAgPT0gMSAmJiBpMTAwICE9IDExIHx8IGYxMCA9PSAxICYmIGYxMDAgIT0gMTEgPyAnb25lJyA6IHYwICYmIGkxMCA+PSAyICYmIGkxMCA8PSA0ICYmIChpMTAwIDwgMTIgfHwgaTEwMCA+IDE0KSB8fCBmMTAgPj0gMiAmJiBmMTAgPD0gNCAmJiAoZjEwMCA8IDEyIHx8IGYxMDAgPiAxNCkgPyAnZmV3JyA6ICdvdGhlcic7XG4gIH0sXG4gIGNhOiBmdW5jdGlvbiBjYShuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgIGkxMDAwMDAwID0gaS5zbGljZSgtNik7XG4gICAgcmV0dXJuIG4gPT0gMSAmJiB2MCA/ICdvbmUnIDogaSAhPSAwICYmIGkxMDAwMDAwID09IDAgJiYgdjAgPyAnbWFueScgOiAnb3RoZXInO1xuICB9LFxuICBjZWI6IGZ1bmN0aW9uIGNlYihuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgZjEwID0gZi5zbGljZSgtMSk7XG4gICAgcmV0dXJuIHYwICYmIChpID09IDEgfHwgaSA9PSAyIHx8IGkgPT0gMykgfHwgdjAgJiYgaTEwICE9IDQgJiYgaTEwICE9IDYgJiYgaTEwICE9IDkgfHwgIXYwICYmIGYxMCAhPSA0ICYmIGYxMCAhPSA2ICYmIGYxMCAhPSA5ID8gJ29uZScgOiAnb3RoZXInO1xuICB9LFxuICBjczogZnVuY3Rpb24gY3Mobikge1xuICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgIGkgPSBzWzBdLFxuICAgICAgICB2MCA9ICFzWzFdO1xuICAgIHJldHVybiBuID09IDEgJiYgdjAgPyAnb25lJyA6IGkgPj0gMiAmJiBpIDw9IDQgJiYgdjAgPyAnZmV3JyA6ICF2MCA/ICdtYW55JyA6ICdvdGhlcic7XG4gIH0sXG4gIGN5OiBmdW5jdGlvbiBjeShuKSB7XG4gICAgcmV0dXJuIG4gPT0gMCA/ICd6ZXJvJyA6IG4gPT0gMSA/ICdvbmUnIDogbiA9PSAyID8gJ3R3bycgOiBuID09IDMgPyAnZmV3JyA6IG4gPT0gNiA/ICdtYW55JyA6ICdvdGhlcic7XG4gIH0sXG4gIGRhOiBmdW5jdGlvbiBkYShuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG47XG4gICAgcmV0dXJuIG4gPT0gMSB8fCAhdDAgJiYgKGkgPT0gMCB8fCBpID09IDEpID8gJ29uZScgOiAnb3RoZXInO1xuICB9LFxuICBkc2I6IGZ1bmN0aW9uIGRzYihuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICBpMTAwID0gaS5zbGljZSgtMiksXG4gICAgICAgIGYxMDAgPSBmLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gdjAgJiYgaTEwMCA9PSAxIHx8IGYxMDAgPT0gMSA/ICdvbmUnIDogdjAgJiYgaTEwMCA9PSAyIHx8IGYxMDAgPT0gMiA/ICd0d28nIDogdjAgJiYgKGkxMDAgPT0gMyB8fCBpMTAwID09IDQpIHx8IGYxMDAgPT0gMyB8fCBmMTAwID09IDQgPyAnZmV3JyA6ICdvdGhlcic7XG4gIH0sXG4gIGR6OiBmdW5jdGlvbiBkeihuKSB7XG4gICAgcmV0dXJuICdvdGhlcic7XG4gIH0sXG4gIGVzOiBmdW5jdGlvbiBlcyhuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgIGkxMDAwMDAwID0gaS5zbGljZSgtNik7XG4gICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogaSAhPSAwICYmIGkxMDAwMDAwID09IDAgJiYgdjAgPyAnbWFueScgOiAnb3RoZXInO1xuICB9LFxuICBmZjogZnVuY3Rpb24gZmYobikge1xuICAgIHJldHVybiBuID49IDAgJiYgbiA8IDIgPyAnb25lJyA6ICdvdGhlcic7XG4gIH0sXG4gIGZyOiBmdW5jdGlvbiBmcihuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgIGkxMDAwMDAwID0gaS5zbGljZSgtNik7XG4gICAgcmV0dXJuIG4gPj0gMCAmJiBuIDwgMiA/ICdvbmUnIDogaSAhPSAwICYmIGkxMDAwMDAwID09IDAgJiYgdjAgPyAnbWFueScgOiAnb3RoZXInO1xuICB9LFxuICBnYTogZnVuY3Rpb24gZ2Eobikge1xuICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG47XG4gICAgcmV0dXJuIG4gPT0gMSA/ICdvbmUnIDogbiA9PSAyID8gJ3R3bycgOiB0MCAmJiBuID49IDMgJiYgbiA8PSA2ID8gJ2ZldycgOiB0MCAmJiBuID49IDcgJiYgbiA8PSAxMCA/ICdtYW55JyA6ICdvdGhlcic7XG4gIH0sXG4gIGdkOiBmdW5jdGlvbiBnZChuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgdDAgPSBOdW1iZXIoc1swXSkgPT0gbjtcbiAgICByZXR1cm4gbiA9PSAxIHx8IG4gPT0gMTEgPyAnb25lJyA6IG4gPT0gMiB8fCBuID09IDEyID8gJ3R3bycgOiB0MCAmJiBuID49IDMgJiYgbiA8PSAxMCB8fCB0MCAmJiBuID49IDEzICYmIG4gPD0gMTkgPyAnZmV3JyA6ICdvdGhlcic7XG4gIH0sXG4gIGhlOiBmdW5jdGlvbiBoZShuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHYwID0gIXNbMV07XG4gICAgcmV0dXJuIGkgPT0gMSAmJiB2MCB8fCBpID09IDAgJiYgIXYwID8gJ29uZScgOiBpID09IDIgJiYgdjAgPyAndHdvJyA6ICdvdGhlcic7XG4gIH0sXG4gIGlzOiBmdW5jdGlvbiBpcyhuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHQgPSAoc1sxXSB8fCAnJykucmVwbGFjZSgvMCskLywgJycpLFxuICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICBpMTAgPSBpLnNsaWNlKC0xKSxcbiAgICAgICAgaTEwMCA9IGkuc2xpY2UoLTIpO1xuICAgIHJldHVybiB0MCAmJiBpMTAgPT0gMSAmJiBpMTAwICE9IDExIHx8IHQgJSAxMCA9PSAxICYmIHQgJSAxMDAgIT0gMTEgPyAnb25lJyA6ICdvdGhlcic7XG4gIH0sXG4gIGtzaDogZnVuY3Rpb24ga3NoKG4pIHtcbiAgICByZXR1cm4gbiA9PSAwID8gJ3plcm8nIDogbiA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICB9LFxuICBsdDogZnVuY3Rpb24gbHQobikge1xuICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgIGYgPSBzWzFdIHx8ICcnLFxuICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKSxcbiAgICAgICAgbjEwMCA9IHQwICYmIHNbMF0uc2xpY2UoLTIpO1xuICAgIHJldHVybiBuMTAgPT0gMSAmJiAobjEwMCA8IDExIHx8IG4xMDAgPiAxOSkgPyAnb25lJyA6IG4xMCA+PSAyICYmIG4xMCA8PSA5ICYmIChuMTAwIDwgMTEgfHwgbjEwMCA+IDE5KSA/ICdmZXcnIDogZiAhPSAwID8gJ21hbnknIDogJ290aGVyJztcbiAgfSxcbiAgbHY6IGZ1bmN0aW9uIGx2KG4pIHtcbiAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICBmID0gc1sxXSB8fCAnJyxcbiAgICAgICAgdiA9IGYubGVuZ3RoLFxuICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICBuMTAgPSB0MCAmJiBzWzBdLnNsaWNlKC0xKSxcbiAgICAgICAgbjEwMCA9IHQwICYmIHNbMF0uc2xpY2UoLTIpLFxuICAgICAgICBmMTAwID0gZi5zbGljZSgtMiksXG4gICAgICAgIGYxMCA9IGYuc2xpY2UoLTEpO1xuICAgIHJldHVybiB0MCAmJiBuMTAgPT0gMCB8fCBuMTAwID49IDExICYmIG4xMDAgPD0gMTkgfHwgdiA9PSAyICYmIGYxMDAgPj0gMTEgJiYgZjEwMCA8PSAxOSA/ICd6ZXJvJyA6IG4xMCA9PSAxICYmIG4xMDAgIT0gMTEgfHwgdiA9PSAyICYmIGYxMCA9PSAxICYmIGYxMDAgIT0gMTEgfHwgdiAhPSAyICYmIGYxMCA9PSAxID8gJ29uZScgOiAnb3RoZXInO1xuICB9LFxuICBtazogZnVuY3Rpb24gbWsobikge1xuICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgIGkgPSBzWzBdLFxuICAgICAgICBmID0gc1sxXSB8fCAnJyxcbiAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKSxcbiAgICAgICAgZjEwID0gZi5zbGljZSgtMSksXG4gICAgICAgIGYxMDAgPSBmLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gdjAgJiYgaTEwID09IDEgJiYgaTEwMCAhPSAxMSB8fCBmMTAgPT0gMSAmJiBmMTAwICE9IDExID8gJ29uZScgOiAnb3RoZXInO1xuICB9LFxuICBtdDogZnVuY3Rpb24gbXQobikge1xuICAgIHZhciBzID0gU3RyaW5nKG4pLnNwbGl0KCcuJyksXG4gICAgICAgIHQwID0gTnVtYmVyKHNbMF0pID09IG4sXG4gICAgICAgIG4xMDAgPSB0MCAmJiBzWzBdLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiBuID09IDIgPyAndHdvJyA6IG4gPT0gMCB8fCBuMTAwID49IDMgJiYgbjEwMCA8PSAxMCA/ICdmZXcnIDogbjEwMCA+PSAxMSAmJiBuMTAwIDw9IDE5ID8gJ21hbnknIDogJ290aGVyJztcbiAgfSxcbiAgcGE6IGZ1bmN0aW9uIHBhKG4pIHtcbiAgICByZXR1cm4gbiA9PSAwIHx8IG4gPT0gMSA/ICdvbmUnIDogJ290aGVyJztcbiAgfSxcbiAgcGw6IGZ1bmN0aW9uIHBsKG4pIHtcbiAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICBpID0gc1swXSxcbiAgICAgICAgdjAgPSAhc1sxXSxcbiAgICAgICAgaTEwID0gaS5zbGljZSgtMSksXG4gICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gbiA9PSAxICYmIHYwID8gJ29uZScgOiB2MCAmJiBpMTAgPj0gMiAmJiBpMTAgPD0gNCAmJiAoaTEwMCA8IDEyIHx8IGkxMDAgPiAxNCkgPyAnZmV3JyA6IHYwICYmIGkgIT0gMSAmJiAoaTEwID09IDAgfHwgaTEwID09IDEpIHx8IHYwICYmIGkxMCA+PSA1ICYmIGkxMCA8PSA5IHx8IHYwICYmIGkxMDAgPj0gMTIgJiYgaTEwMCA8PSAxNCA/ICdtYW55JyA6ICdvdGhlcic7XG4gIH0sXG4gIHB0OiBmdW5jdGlvbiBwdChuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgIGkxMDAwMDAwID0gaS5zbGljZSgtNik7XG4gICAgcmV0dXJuIGkgPT0gMCB8fCBpID09IDEgPyAnb25lJyA6IGkgIT0gMCAmJiBpMTAwMDAwMCA9PSAwICYmIHYwID8gJ21hbnknIDogJ290aGVyJztcbiAgfSxcbiAgcm86IGZ1bmN0aW9uIHJvKG4pIHtcbiAgICB2YXIgcyA9IFN0cmluZyhuKS5zcGxpdCgnLicpLFxuICAgICAgICB2MCA9ICFzWzFdLFxuICAgICAgICB0MCA9IE51bWJlcihzWzBdKSA9PSBuLFxuICAgICAgICBuMTAwID0gdDAgJiYgc1swXS5zbGljZSgtMik7XG4gICAgcmV0dXJuIG4gPT0gMSAmJiB2MCA/ICdvbmUnIDogIXYwIHx8IG4gPT0gMCB8fCBuICE9IDEgJiYgbjEwMCA+PSAxICYmIG4xMDAgPD0gMTkgPyAnZmV3JyA6ICdvdGhlcic7XG4gIH0sXG4gIHJ1OiBmdW5jdGlvbiBydShuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgIGkxMCA9IGkuc2xpY2UoLTEpLFxuICAgICAgICBpMTAwID0gaS5zbGljZSgtMik7XG4gICAgcmV0dXJuIHYwICYmIGkxMCA9PSAxICYmIGkxMDAgIT0gMTEgPyAnb25lJyA6IHYwICYmIGkxMCA+PSAyICYmIGkxMCA8PSA0ICYmIChpMTAwIDwgMTIgfHwgaTEwMCA+IDE0KSA/ICdmZXcnIDogdjAgJiYgaTEwID09IDAgfHwgdjAgJiYgaTEwID49IDUgJiYgaTEwIDw9IDkgfHwgdjAgJiYgaTEwMCA+PSAxMSAmJiBpMTAwIDw9IDE0ID8gJ21hbnknIDogJ290aGVyJztcbiAgfSxcbiAgc2U6IGZ1bmN0aW9uIHNlKG4pIHtcbiAgICByZXR1cm4gbiA9PSAxID8gJ29uZScgOiBuID09IDIgPyAndHdvJyA6ICdvdGhlcic7XG4gIH0sXG4gIHNpOiBmdW5jdGlvbiBzaShuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIGYgPSBzWzFdIHx8ICcnO1xuICAgIHJldHVybiBuID09IDAgfHwgbiA9PSAxIHx8IGkgPT0gMCAmJiBmID09IDEgPyAnb25lJyA6ICdvdGhlcic7XG4gIH0sXG4gIHNsOiBmdW5jdGlvbiBzbChuKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcobikuc3BsaXQoJy4nKSxcbiAgICAgICAgaSA9IHNbMF0sXG4gICAgICAgIHYwID0gIXNbMV0sXG4gICAgICAgIGkxMDAgPSBpLnNsaWNlKC0yKTtcbiAgICByZXR1cm4gdjAgJiYgaTEwMCA9PSAxID8gJ29uZScgOiB2MCAmJiBpMTAwID09IDIgPyAndHdvJyA6IHYwICYmIChpMTAwID09IDMgfHwgaTEwMCA9PSA0KSB8fCAhdjAgPyAnZmV3JyA6ICdvdGhlcic7XG4gIH1cbn07XG4kLmFzID0gJC5hbTtcbiQuYXogPSAkLmFmO1xuJC5iZyA9ICQuYWY7XG4kLmJuID0gJC5hbTtcbiQuYnJ4ID0gJC5hZjtcbiQuY2UgPSAkLmFmO1xuJC5jaHIgPSAkLmFmO1xuJC5kZSA9ICQuYXN0O1xuJC5lZSA9ICQuYWY7XG4kLmVsID0gJC5hZjtcbiQuZW4gPSAkLmFzdDtcbiQuZXQgPSAkLmFzdDtcbiQuZXUgPSAkLmFmO1xuJC5mYSA9ICQuYW07XG4kLmZpID0gJC5hc3Q7XG4kLmZpbCA9ICQuY2ViO1xuJC5mbyA9ICQuYWY7XG4kLmZ1ciA9ICQuYWY7XG4kLmZ5ID0gJC5hc3Q7XG4kLmdsID0gJC5hc3Q7XG4kLmd1ID0gJC5hbTtcbiQuaGEgPSAkLmFmO1xuJC5oaSA9ICQuYW07XG4kLmhyID0gJC5icztcbiQuaHNiID0gJC5kc2I7XG4kLmh1ID0gJC5hZjtcbiQuaHkgPSAkLmZmO1xuJC5pYSA9ICQuYXN0O1xuJC5pZCA9ICQuZHo7XG4kLmlnID0gJC5kejtcbiQuaXQgPSAkLmNhO1xuJC5qYSA9ICQuZHo7XG4kLmpnbyA9ICQuYWY7XG4kLmp2ID0gJC5kejtcbiQua2EgPSAkLmFmO1xuJC5rZWEgPSAkLmR6O1xuJC5rayA9ICQuYWY7XG4kLmtsID0gJC5hZjtcbiQua20gPSAkLmR6O1xuJC5rbiA9ICQuYW07XG4kLmtvID0gJC5kejtcbiQua3MgPSAkLmFmO1xuJC5rdSA9ICQuYWY7XG4kLmt5ID0gJC5hZjtcbiQubGIgPSAkLmFmO1xuJC5sa3QgPSAkLmR6O1xuJC5sbyA9ICQuZHo7XG4kLm1sID0gJC5hZjtcbiQubW4gPSAkLmFmO1xuJC5tciA9ICQuYWY7XG4kLm1zID0gJC5kejtcbiQubXkgPSAkLmR6O1xuJC5uYiA9ICQuYWY7XG4kLm5lID0gJC5hZjtcbiQubmwgPSAkLmFzdDtcbiQubm4gPSAkLmFmO1xuJC5ubyA9ICQuYWY7XG4kLm9yID0gJC5hZjtcbiQucGNtID0gJC5hbTtcbiQucHMgPSAkLmFmO1xuJC5ybSA9ICQuYWY7XG4kLnNhaCA9ICQuZHo7XG4kLnNjID0gJC5hc3Q7XG4kLnNkID0gJC5hZjtcbiQuc2sgPSAkLmNzO1xuJC5zbyA9ICQuYWY7XG4kLnNxID0gJC5hZjtcbiQuc3IgPSAkLmJzO1xuJC5zdSA9ICQuZHo7XG4kLnN2ID0gJC5hc3Q7XG4kLnN3ID0gJC5hc3Q7XG4kLnRhID0gJC5hZjtcbiQudGUgPSAkLmFmO1xuJC50aCA9ICQuZHo7XG4kLnRpID0gJC5wYTtcbiQudGsgPSAkLmFmO1xuJC50byA9ICQuZHo7XG4kLnRyID0gJC5hZjtcbiQudWcgPSAkLmFmO1xuJC51ayA9ICQucnU7XG4kLnVyID0gJC5hc3Q7XG4kLnV6ID0gJC5hZjtcbiQudmkgPSAkLmR6O1xuJC53YWUgPSAkLmFmO1xuJC53byA9ICQuZHo7XG4kLnhoID0gJC5hZjtcbiQueWkgPSAkLmFzdDtcbiQueW8gPSAkLmR6O1xuJC55dWUgPSAkLmR6O1xuJC56aCA9ICQuZHo7XG4kLnp1ID0gJC5hbTtcbmV4cG9ydCBkZWZhdWx0ICQ7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1QbHVyYWxSdWxlRnVuY3Rpb25zLmpzLm1hcCIsIi8qKlxyXG4gKiBSZXR1cm5zIGEgYGxvY2FsZWAgZm9yIHdoaWNoIGEgZnVuY3Rpb24gZXhpc3RzIGluIGAuL1BsdXJhbFJ1bGVGdW5jdGlvbnMuanNgLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGxvY2FsZVxyXG4gKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAqIEBleGFtcGxlXHJcbiAqIGdldFBsdXJhbFJ1bGVzTG9jYWxlKFwicnUtUlUtQ3lybFwiKSAvLyBSZXR1cm5zIFwicnVcIi5cclxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQbHVyYWxSdWxlc0xvY2FsZShsb2NhbGUpIHtcbiAgLy8gXCJwdFwiIGxhbmd1YWdlIGlzIHRoZSBvbmx5IG9uZSBoYXZpbmcgZGlmZmVyZW50IHBsdXJhbGl6YXRpb24gcnVsZXNcbiAgLy8gZm9yIHRoZSBvbmUgKFwicHRcIikgKFBvcnR1Z3Vlc2UpIGxvY2FsZSBhbmQgdGhlIG90aGVyIChcInB0LVBUXCIpIChFdXJvcGVhbiBQb3J0dWd1ZXNlKS5cbiAgLy8gaHR0cDovL3d3dy51bmljb2RlLm9yZy9jbGRyL2NoYXJ0cy9sYXRlc3Qvc3VwcGxlbWVudGFsL2xhbmd1YWdlX3BsdXJhbF9ydWxlcy5odG1sXG4gIC8vIChzZWUgdGhlIGVudHJpZXMgZm9yIFwicHRcIiBhbmQgXCJwdF9QVFwiIHRoZXJlKVxuICBpZiAobG9jYWxlID09PSAncHQtUFQnKSB7XG4gICAgcmV0dXJuIGxvY2FsZTtcbiAgfVxuXG4gIHJldHVybiBnZXRMYW5ndWFnZUZyb21MYW5ndWFnZVRhZyhsb2NhbGUpO1xufVxuLyoqXHJcbiAqIEV4dHJhY3RzIGxhbmd1YWdlIGZyb20gYW4gSUVURiBCQ1AgNDcgbGFuZ3VhZ2UgdGFnLlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gbGFuZ3VhZ2VUYWcgLSBJRVRGIEJDUCA0NyBsYW5ndWFnZSB0YWcuXHJcbiAqIEByZXR1cm4ge3N0cmluZ31cclxuICogQGV4YW1wbGVcclxuICogLy8gUmV0dXJucyBcImhlXCJcclxuICogZ2V0TGFuZ3VhZ2VGcm9tTGFuZ3VhZ2VUYWcoXCJoZS1JTC11LWNhLWhlYnJldy10ei1qZXJ1c2xtXCIpXHJcbiAqIC8vIFJldHVybnMgXCJhclwiXHJcbiAqIGdldExhbmd1YWdlRnJvbUxhbmd1YWdlVGFnKFwiYXItdS1udS1sYXRuXCIpXHJcbiAqL1xuXG52YXIgTEFOR1VBR0VfUkVHX0VYUCA9IC9eKFthLXowLTldKykvaTtcblxuZnVuY3Rpb24gZ2V0TGFuZ3VhZ2VGcm9tTGFuZ3VhZ2VUYWcobGFuZ3VhZ2VUYWcpIHtcbiAgdmFyIG1hdGNoID0gbGFuZ3VhZ2VUYWcubWF0Y2goTEFOR1VBR0VfUkVHX0VYUCk7XG5cbiAgaWYgKCFtYXRjaCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGxvY2FsZTogXCIuY29uY2F0KGxhbmd1YWdlVGFnKSk7XG4gIH1cblxuICByZXR1cm4gbWF0Y2hbMV07XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRQbHVyYWxSdWxlc0xvY2FsZS5qcy5tYXAiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbi8vIEltcG9ydGluZyBgUGx1cmFsUnVsZWAgcG9seWZpbGwgZnJvbSBhIHNlcGFyYXRlIHBhY2thZ2Vcbi8vIHJlc3VsdHMgaW4gYSBidW5kbGUgdGhhdCBpcyBsYXJnZXIgYnkgMWtCIGZvciBzb21lIHJlYXNvbi5cbi8vIGV4cG9ydCB7IGRlZmF1bHQgYXMgZGVmYXVsdCB9IGZyb20gJ2ludGwtcGx1cmFsLXJ1bGVzLXBvbHlmaWxsL2NhcmRpbmFsJ1xuaW1wb3J0IFBsdXJhbFJ1bGVGdW5jdGlvbnMgZnJvbSBcIi4vUGx1cmFsUnVsZUZ1bmN0aW9ucy5qc1wiO1xuaW1wb3J0IGdldFBsdXJhbFJ1bGVzTG9jYWxlIGZyb20gXCIuL2dldFBsdXJhbFJ1bGVzTG9jYWxlLmpzXCI7XG4vKipcclxuICogYEludGwuUGx1cmFsUnVsZXNgIHBvbHlmaWxsLlxyXG4gKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9QbHVyYWxSdWxlc1xyXG4gKi9cblxudmFyIFBsdXJhbFJ1bGVzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUGx1cmFsUnVsZXMobG9jYWxlLCBvcHRpb25zKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFBsdXJhbFJ1bGVzKTtcblxuICAgIHZhciBsb2NhbGVzID0gUGx1cmFsUnVsZXMuc3VwcG9ydGVkTG9jYWxlc09mKGxvY2FsZSk7XG5cbiAgICBpZiAobG9jYWxlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiVW5zdXBwb3J0ZWQgbG9jYWxlOiBcIiArIGxvY2FsZSk7XG4gICAgfVxuXG4gICAgaWYgKG9wdGlvbnMgJiYgb3B0aW9ucy50eXBlICE9PSBcImNhcmRpbmFsXCIpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiT25seSBcXFwiY2FyZGluYWxcXFwiIFxcXCJ0eXBlXFxcIiBpcyBzdXBwb3J0ZWRcIik7XG4gICAgfVxuXG4gICAgdGhpcy4kID0gUGx1cmFsUnVsZUZ1bmN0aW9uc1tnZXRQbHVyYWxSdWxlc0xvY2FsZShsb2NhbGVzWzBdKV07XG4gIH1cblxuICBfY3JlYXRlQ2xhc3MoUGx1cmFsUnVsZXMsIFt7XG4gICAga2V5OiBcInNlbGVjdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZWxlY3QobnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy4kKG51bWJlcik7XG4gICAgfVxuICB9XSwgW3tcbiAgICBrZXk6IFwic3VwcG9ydGVkTG9jYWxlc09mXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN1cHBvcnRlZExvY2FsZXNPZihsb2NhbGVzKSB7XG4gICAgICBpZiAodHlwZW9mIGxvY2FsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgbG9jYWxlcyA9IFtsb2NhbGVzXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGxvY2FsZXMuZmlsdGVyKGZ1bmN0aW9uIChsb2NhbGUpIHtcbiAgICAgICAgcmV0dXJuIFBsdXJhbFJ1bGVGdW5jdGlvbnNbZ2V0UGx1cmFsUnVsZXNMb2NhbGUobG9jYWxlKV07XG4gICAgICB9KTtcbiAgICB9XG4gIH1dKTtcblxuICByZXR1cm4gUGx1cmFsUnVsZXM7XG59KCk7XG5cbmV4cG9ydCB7IFBsdXJhbFJ1bGVzIGFzIGRlZmF1bHQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVBsdXJhbFJ1bGVzLmpzLm1hcCIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmltcG9ydCB7IGdldERlZmF1bHRMb2NhbGUsIHNldERlZmF1bHRMb2NhbGUsIGdldExvY2FsZURhdGEsIGFkZExvY2FsZURhdGEgfSBmcm9tICcuL0xvY2FsZURhdGFTdG9yZS5qcyc7XG5pbXBvcnQgcmVzb2x2ZUxvY2FsZSBmcm9tICcuL3Jlc29sdmVMb2NhbGUuanMnO1xuaW1wb3J0IFBsdXJhbFJ1bGVzIGZyb20gJy4vUGx1cmFsUnVsZXMuanMnOyAvLyBJbXBvcnRpbmcgYFBsdXJhbFJ1bGVgIHBvbHlmaWxsIGZyb20gYSBzZXBhcmF0ZSBwYWNrYWdlXG4vLyByZXN1bHRzIGluIGEgYnVuZGxlIHRoYXQgaXMgbGFyZ2VyIGJ5IDFrQiBmb3Igc29tZSByZWFzb24uXG4vLyBpbXBvcnQgUGx1cmFsUnVsZXMgZnJvbSAnaW50bC1wbHVyYWwtcnVsZXMtcG9seWZpbGwvY2FyZGluYWwnXG4vLyBWYWxpZCB0aW1lIHVuaXRzLlxuXG5leHBvcnQgdmFyIFVOSVRTID0gW1wic2Vjb25kXCIsIFwibWludXRlXCIsIFwiaG91clwiLCBcImRheVwiLCBcIndlZWtcIiwgXCJtb250aFwiLCBcInF1YXJ0ZXJcIiwgXCJ5ZWFyXCJdOyAvLyBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBgbnVtZXJpY2Agb3B0aW9uLlxuXG52YXIgTlVNRVJJQ19WQUxVRVMgPSBbXCJhdXRvXCIsIFwiYWx3YXlzXCJdOyAvLyBWYWxpZCB2YWx1ZXMgZm9yIHRoZSBgc3R5bGVgIG9wdGlvbi5cblxudmFyIFNUWUxFX1ZBTFVFUyA9IFtcImxvbmdcIiwgXCJzaG9ydFwiLCBcIm5hcnJvd1wiXTsgLy8gVmFsaWQgdmFsdWVzIGZvciB0aGUgYGxvY2FsZU1hdGNoZXJgIG9wdGlvbi5cblxudmFyIExPQ0FMRV9NQVRDSEVSX1ZBTFVFUyA9IFtcImxvb2t1cFwiLCBcImJlc3QgZml0XCJdO1xuLyoqXHJcbiAqIFBvbHlmaWxsIGZvciBgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXRgIHByb3Bvc2FsLlxyXG4gKiBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1pbnRsLXJlbGF0aXZlLXRpbWVcclxuICogaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtaW50bC1yZWxhdGl2ZS10aW1lL2lzc3Vlcy81NVxyXG4gKi9cblxudmFyIFJlbGF0aXZlVGltZUZvcm1hdCA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IFtsb2NhbGVzXSAtIFByZWZlcnJlZCBsb2NhbGVzIChvciBsb2NhbGUpLlxyXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBGb3JtYXR0aW5nIG9wdGlvbnMuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnN0eWxlPVwibG9uZ1wiXSAtIE9uZSBvZjogXCJsb25nXCIsIFwic2hvcnRcIiwgXCJuYXJyb3dcIi5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMubnVtZXJpYz1cImFsd2F5c1wiXSAtIChWZXJzaW9uID49IDIpIE9uZSBvZjogXCJhbHdheXNcIiwgXCJhdXRvXCIuXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLmxvY2FsZU1hdGNoZXI9XCJsb29rdXBcIl0gLSBPbmUgb2Y6IFwibG9va3VwXCIsIFwiYmVzdCBmaXRcIi4gQ3VycmVudGx5IG9ubHkgXCJsb29rdXBcIiBpcyBzdXBwb3J0ZWQuXHJcbiAgICovXG4gIGZ1bmN0aW9uIFJlbGF0aXZlVGltZUZvcm1hdCgpIHtcbiAgICB2YXIgbG9jYWxlcyA9IGFyZ3VtZW50cy5sZW5ndGggPiAwICYmIGFyZ3VtZW50c1swXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzBdIDogW107XG4gICAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9O1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFJlbGF0aXZlVGltZUZvcm1hdCk7XG5cbiAgICB2YXIgbnVtZXJpYyA9IG9wdGlvbnMubnVtZXJpYyxcbiAgICAgICAgc3R5bGUgPSBvcHRpb25zLnN0eWxlLFxuICAgICAgICBsb2NhbGVNYXRjaGVyID0gb3B0aW9ucy5sb2NhbGVNYXRjaGVyO1xuICAgIHRoaXMubnVtZXJpYyA9IFwiYWx3YXlzXCI7XG4gICAgdGhpcy5zdHlsZSA9IFwibG9uZ1wiO1xuICAgIHRoaXMubG9jYWxlTWF0Y2hlciA9IFwibG9va3VwXCI7IC8vIFNldCBgbnVtZXJpY2Agb3B0aW9uLlxuXG4gICAgaWYgKG51bWVyaWMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKE5VTUVSSUNfVkFMVUVTLmluZGV4T2YobnVtZXJpYykgPCAwKSB7XG4gICAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiSW52YWxpZCBcXFwibnVtZXJpY1xcXCIgb3B0aW9uOiBcIi5jb25jYXQobnVtZXJpYykpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLm51bWVyaWMgPSBudW1lcmljO1xuICAgIH0gLy8gU2V0IGBzdHlsZWAgb3B0aW9uLlxuXG5cbiAgICBpZiAoc3R5bGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKFNUWUxFX1ZBTFVFUy5pbmRleE9mKHN0eWxlKSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIFxcXCJzdHlsZVxcXCIgb3B0aW9uOiBcIi5jb25jYXQoc3R5bGUpKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zdHlsZSA9IHN0eWxlO1xuICAgIH0gLy8gU2V0IGBsb2NhbGVNYXRjaGVyYCBvcHRpb24uXG5cblxuICAgIGlmIChsb2NhbGVNYXRjaGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChMT0NBTEVfTUFUQ0hFUl9WQUxVRVMuaW5kZXhPZihsb2NhbGVNYXRjaGVyKSA8IDApIHtcbiAgICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJJbnZhbGlkIFxcXCJsb2NhbGVNYXRjaGVyXFxcIiBvcHRpb246IFwiLmNvbmNhdChsb2NhbGVNYXRjaGVyKSk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMubG9jYWxlTWF0Y2hlciA9IGxvY2FsZU1hdGNoZXI7XG4gICAgfSAvLyBTZXQgYGxvY2FsZWAuXG4gICAgLy8gQ29udmVydCBgbG9jYWxlc2AgdG8gYW4gYXJyYXkuXG5cblxuICAgIGlmICh0eXBlb2YgbG9jYWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGxvY2FsZXMgPSBbbG9jYWxlc107XG4gICAgfSAvLyBBZGQgZGVmYXVsdCBsb2NhbGUuXG5cblxuICAgIGxvY2FsZXMucHVzaChnZXREZWZhdWx0TG9jYWxlKCkpOyAvLyBDaG9vc2UgdGhlIG1vc3QgYXBwcm9wcmlhdGUgbG9jYWxlLlxuXG4gICAgdGhpcy5sb2NhbGUgPSBSZWxhdGl2ZVRpbWVGb3JtYXQuc3VwcG9ydGVkTG9jYWxlc09mKGxvY2FsZXMsIHtcbiAgICAgIGxvY2FsZU1hdGNoZXI6IHRoaXMubG9jYWxlTWF0Y2hlclxuICAgIH0pWzBdO1xuXG4gICAgaWYgKCF0aGlzLmxvY2FsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VwcG9ydGVkIGxvY2FsZSB3YXMgZm91bmRcIik7XG4gICAgfSAvLyBDb25zdHJ1Y3QgYW4gYEludGwuUGx1cmFsUnVsZXNgIGluc3RhbmNlIChwb2x5ZmlsbCkuXG5cblxuICAgIGlmIChQbHVyYWxSdWxlcy5zdXBwb3J0ZWRMb2NhbGVzT2YodGhpcy5sb2NhbGUpLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMucGx1cmFsUnVsZXMgPSBuZXcgUGx1cmFsUnVsZXModGhpcy5sb2NhbGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLndhcm4oXCJcXFwiXCIuY29uY2F0KHRoaXMubG9jYWxlLCBcIlxcXCIgbG9jYWxlIGlzIG5vdCBzdXBwb3J0ZWRcIikpO1xuICAgIH0gLy8gVXNlIGBJbnRsLk51bWJlckZvcm1hdGAgZm9yIGZvcm1hdHRpbmcgbnVtYmVycyAod2hlbiBhdmFpbGFibGUpLlxuXG5cbiAgICBpZiAodHlwZW9mIEludGwgIT09ICd1bmRlZmluZWQnICYmIEludGwuTnVtYmVyRm9ybWF0KSB7XG4gICAgICB0aGlzLm51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSk7XG4gICAgICB0aGlzLm51bWJlcmluZ1N5c3RlbSA9IHRoaXMubnVtYmVyRm9ybWF0LnJlc29sdmVkT3B0aW9ucygpLm51bWJlcmluZ1N5c3RlbTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5udW1iZXJpbmdTeXN0ZW0gPSAnbGF0bic7XG4gICAgfVxuXG4gICAgdGhpcy5sb2NhbGUgPSByZXNvbHZlTG9jYWxlKHRoaXMubG9jYWxlLCB7XG4gICAgICBsb2NhbGVNYXRjaGVyOiB0aGlzLmxvY2FsZU1hdGNoZXJcbiAgICB9KTtcbiAgfVxuICAvKipcclxuICAgKiBGb3JtYXRzIHRpbWUgYG51bWJlcmAgaW4gYHVuaXRzYCAoZWl0aGVyIGluIHBhc3Qgb3IgaW4gZnV0dXJlKS5cclxuICAgKiBAcGFyYW0ge251bWJlcn0gbnVtYmVyIC0gVGltZSBpbnRlcnZhbCB2YWx1ZS5cclxuICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRpbWUgaW50ZXJ2YWwgbWVhc3VyZW1lbnQgdW5pdC5cclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgdW5pdCBpcyBub3Qgb25lIG9mIFwic2Vjb25kXCIsIFwibWludXRlXCIsIFwiaG91clwiLCBcImRheVwiLCBcIndlZWtcIiwgXCJtb250aFwiLCBcInF1YXJ0ZXJcIi5cclxuICAgKiBAZXhhbXBsZVxyXG4gICAqIC8vIFJldHVybnMgXCIyIGRheXMgYWdvXCJcclxuICAgKiBydGYuZm9ybWF0KC0yLCBcImRheVwiKVxyXG4gICAqIC8vIFJldHVybnMgXCJpbiA1IG1pbnV0ZXNcIlxyXG4gICAqIHJ0Zi5mb3JtYXQoNSwgXCJtaW51dGVcIilcclxuICAgKi9cblxuXG4gIF9jcmVhdGVDbGFzcyhSZWxhdGl2ZVRpbWVGb3JtYXQsIFt7XG4gICAga2V5OiBcImZvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQoKSB7XG4gICAgICB2YXIgX3BhcnNlRm9ybWF0QXJncyA9IHBhcnNlRm9ybWF0QXJncyhhcmd1bWVudHMpLFxuICAgICAgICAgIF9wYXJzZUZvcm1hdEFyZ3MyID0gX3NsaWNlZFRvQXJyYXkoX3BhcnNlRm9ybWF0QXJncywgMiksXG4gICAgICAgICAgbnVtYmVyID0gX3BhcnNlRm9ybWF0QXJnczJbMF0sXG4gICAgICAgICAgdW5pdCA9IF9wYXJzZUZvcm1hdEFyZ3MyWzFdO1xuXG4gICAgICByZXR1cm4gdGhpcy5nZXRSdWxlKG51bWJlciwgdW5pdCkucmVwbGFjZSgnezB9JywgdGhpcy5mb3JtYXROdW1iZXIoTWF0aC5hYnMobnVtYmVyKSkpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEZvcm1hdHMgdGltZSBgbnVtYmVyYCBpbiBgdW5pdHNgIChlaXRoZXIgaW4gcGFzdCBvciBpbiBmdXR1cmUpLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlciAtIFRpbWUgaW50ZXJ2YWwgdmFsdWUuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdW5pdCAtIFRpbWUgaW50ZXJ2YWwgbWVhc3VyZW1lbnQgdW5pdC5cclxuICAgICAqIEByZXR1cm4ge09iamVjdFtdfSBUaGUgcGFydHMgKGB7IHR5cGUsIHZhbHVlLCB1bml0PyB9YCkuXHJcbiAgICAgKiBAdGhyb3dzIHtSYW5nZUVycm9yfSBJZiB1bml0IGlzIG5vdCBvbmUgb2YgXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCIsIFwid2Vla1wiLCBcIm1vbnRoXCIsIFwicXVhcnRlclwiLlxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIFZlcnNpb24gMSAoZGVwcmVjYXRlZCkuXHJcbiAgICAgKiAvLyBSZXR1cm5zIFtcclxuICAgICAqIC8vICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiaW4gXCIgfSxcclxuICAgICAqIC8vICAgeyB0eXBlOiBcImRheVwiLCB2YWx1ZTogXCIxMDBcIiB9LFxyXG4gICAgICogLy8gICB7IHR5cGU6IFwibGl0ZXJhbFwiLCB2YWx1ZTogXCIgZGF5c1wiIH1cclxuICAgICAqIC8vIF1cclxuICAgICAqIHJ0Zi5mb3JtYXRUb1BhcnRzKDEwMCwgXCJkYXlcIilcclxuICAgICAqIC8vXHJcbiAgICAgKiAvLyBWZXJzaW9uIDIuXHJcbiAgICAgKiAvLyBSZXR1cm5zIFtcclxuICAgICAqIC8vICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiaW4gXCIgfSxcclxuICAgICAqIC8vICAgeyB0eXBlOiBcImludGVnZXJcIiwgdmFsdWU6IFwiMTAwXCIsIHVuaXQ6IFwiZGF5XCIgfSxcclxuICAgICAqIC8vICAgeyB0eXBlOiBcImxpdGVyYWxcIiwgdmFsdWU6IFwiIGRheXNcIiB9XHJcbiAgICAgKiAvLyBdXHJcbiAgICAgKiBydGYuZm9ybWF0VG9QYXJ0cygxMDAsIFwiZGF5XCIpXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFRvUGFydHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0VG9QYXJ0cygpIHtcbiAgICAgIHZhciBfcGFyc2VGb3JtYXRBcmdzMyA9IHBhcnNlRm9ybWF0QXJncyhhcmd1bWVudHMpLFxuICAgICAgICAgIF9wYXJzZUZvcm1hdEFyZ3M0ID0gX3NsaWNlZFRvQXJyYXkoX3BhcnNlRm9ybWF0QXJnczMsIDIpLFxuICAgICAgICAgIG51bWJlciA9IF9wYXJzZUZvcm1hdEFyZ3M0WzBdLFxuICAgICAgICAgIHVuaXQgPSBfcGFyc2VGb3JtYXRBcmdzNFsxXTtcblxuICAgICAgdmFyIHJ1bGUgPSB0aGlzLmdldFJ1bGUobnVtYmVyLCB1bml0KTtcbiAgICAgIHZhciB2YWx1ZUluZGV4ID0gcnVsZS5pbmRleE9mKFwiezB9XCIpOyAvLyBcInllc3RlcmRheVwiL1widG9kYXlcIi9cInRvbW9ycm93XCIuXG5cbiAgICAgIGlmICh2YWx1ZUluZGV4IDwgMCkge1xuICAgICAgICByZXR1cm4gW3tcbiAgICAgICAgICB0eXBlOiBcImxpdGVyYWxcIixcbiAgICAgICAgICB2YWx1ZTogcnVsZVxuICAgICAgICB9XTtcbiAgICAgIH1cblxuICAgICAgdmFyIHBhcnRzID0gW107XG5cbiAgICAgIGlmICh2YWx1ZUluZGV4ID4gMCkge1xuICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiBcImxpdGVyYWxcIixcbiAgICAgICAgICB2YWx1ZTogcnVsZS5zbGljZSgwLCB2YWx1ZUluZGV4KVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgcGFydHMgPSBwYXJ0cy5jb25jYXQodGhpcy5mb3JtYXROdW1iZXJUb1BhcnRzKE1hdGguYWJzKG51bWJlcikpLm1hcChmdW5jdGlvbiAocGFydCkge1xuICAgICAgICByZXR1cm4gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBwYXJ0KSwge30sIHtcbiAgICAgICAgICB1bml0OiB1bml0XG4gICAgICAgIH0pO1xuICAgICAgfSkpO1xuXG4gICAgICBpZiAodmFsdWVJbmRleCArIFwiezB9XCIubGVuZ3RoIDwgcnVsZS5sZW5ndGggLSAxKSB7XG4gICAgICAgIHBhcnRzLnB1c2goe1xuICAgICAgICAgIHR5cGU6IFwibGl0ZXJhbFwiLFxuICAgICAgICAgIHZhbHVlOiBydWxlLnNsaWNlKHZhbHVlSW5kZXggKyBcInswfVwiLmxlbmd0aClcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwYXJ0cztcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGZvcm1hdHRpbmcgcnVsZSBmb3IgYHZhbHVlYCBpbiBgdW5pdHNgIChlaXRoZXIgaW4gcGFzdCBvciBpbiBmdXR1cmUpLlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGltZSBpbnRlcnZhbCB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGltZSBpbnRlcnZhbCBtZWFzdXJlbWVudCB1bml0LlxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICogQHRocm93cyB7UmFuZ2VFcnJvcn0gSWYgdW5pdCBpcyBub3Qgb25lIG9mIFwic2Vjb25kXCIsIFwibWludXRlXCIsIFwiaG91clwiLCBcImRheVwiLCBcIndlZWtcIiwgXCJtb250aFwiLCBcInF1YXJ0ZXJcIi5cclxuICAgICAqIEBleGFtcGxlXHJcbiAgICAgKiAvLyBSZXR1cm5zIFwiezB9IGRheXMgYWdvXCJcclxuICAgICAqIGdldFJ1bGUoLTIsIFwiZGF5XCIpXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldFJ1bGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0UnVsZSh2YWx1ZSwgdW5pdCkge1xuICAgICAgLy8gR2V0IGxvY2FsZS1zcGVjaWZpYyB0aW1lIGludGVydmFsIGZvcm1hdHRpbmcgcnVsZXNcbiAgICAgIC8vIG9mIGEgZ2l2ZW4gYHN0eWxlYCBmb3IgdGhlIGdpdmVuIHZhbHVlIG9mIG1lYXN1cmVtZW50IGB1bml0YC5cbiAgICAgIC8vXG4gICAgICAvLyBFLmcuOlxuICAgICAgLy9cbiAgICAgIC8vIGBgYGpzb25cbiAgICAgIC8vIHtcbiAgICAgIC8vICBcInBhc3RcIjoge1xuICAgICAgLy8gICAgXCJvbmVcIjogXCJhIHNlY29uZCBhZ29cIixcbiAgICAgIC8vICAgIFwib3RoZXJcIjogXCJ7MH0gc2Vjb25kcyBhZ29cIlxuICAgICAgLy8gIH0sXG4gICAgICAvLyAgXCJmdXR1cmVcIjoge1xuICAgICAgLy8gICAgXCJvbmVcIjogXCJpbiBhIHNlY29uZFwiLFxuICAgICAgLy8gICAgXCJvdGhlclwiOiBcImluIHswfSBzZWNvbmRzXCJcbiAgICAgIC8vICB9XG4gICAgICAvLyB9XG4gICAgICAvLyBgYGBcbiAgICAgIC8vXG4gICAgICB2YXIgdW5pdE1lc3NhZ2VzID0gZ2V0TG9jYWxlRGF0YSh0aGlzLmxvY2FsZSlbdGhpcy5zdHlsZV1bdW5pdF07IC8vIEJ1bmRsZSBzaXplIG9wdGltaXphdGlvbiB0ZWNobmlxdWUgZm9yIHN0eWxlcyBsaWtlXG4gICAgICAvLyBcInRpbnlcIiBpbiBgamF2YXNjcmlwdC10aW1lLWFnb2A6IFwiMW1cIiwgXCIyaFwiLCBcIjNkXCIuLi5cblxuICAgICAgaWYgKHR5cGVvZiB1bml0TWVzc2FnZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiB1bml0TWVzc2FnZXM7XG4gICAgICB9IC8vIFNwZWNpYWwgY2FzZSBmb3IgXCJ5ZXN0ZXJkYXlcIi9cInRvZGF5XCIvXCJ0b21vcnJvd1wiLlxuXG5cbiAgICAgIGlmICh0aGlzLm51bWVyaWMgPT09IFwiYXV0b1wiKSB7XG4gICAgICAgIC8vIFwieWVzdGVyZGF5XCIsIFwidGhlIGRheSBiZWZvcmUgeWVzdGVyZGF5XCIsIGV0Yy5cbiAgICAgICAgaWYgKHZhbHVlID09PSAtMiB8fCB2YWx1ZSA9PT0gLTEpIHtcbiAgICAgICAgICB2YXIgbWVzc2FnZSA9IHVuaXRNZXNzYWdlc1tcInByZXZpb3VzXCIuY29uY2F0KHZhbHVlID09PSAtMSA/ICcnIDogJy0nICsgTWF0aC5hYnModmFsdWUpKV07XG5cbiAgICAgICAgICBpZiAobWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIG1lc3NhZ2U7XG4gICAgICAgICAgfVxuICAgICAgICB9IC8vIFwidG9tb3Jyb3dcIiwgXCJ0aGUgZGF5IGFmdGVyIHRvbW9ycm93XCIsIGV0Yy5cbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IDEgfHwgdmFsdWUgPT09IDIpIHtcbiAgICAgICAgICB2YXIgX21lc3NhZ2UgPSB1bml0TWVzc2FnZXNbXCJuZXh0XCIuY29uY2F0KHZhbHVlID09PSAxID8gJycgOiAnLScgKyBNYXRoLmFicyh2YWx1ZSkpXTtcblxuICAgICAgICAgIGlmIChfbWVzc2FnZSkge1xuICAgICAgICAgICAgcmV0dXJuIF9tZXNzYWdlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSAvLyBcInRvZGF5XCJcbiAgICAgICAgZWxzZSBpZiAodmFsdWUgPT09IDApIHtcbiAgICAgICAgICBpZiAodW5pdE1lc3NhZ2VzLmN1cnJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiB1bml0TWVzc2FnZXMuY3VycmVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gLy8gQ2hvb3NlIGVpdGhlciBcInBhc3RcIiBvciBcImZ1dHVyZVwiIGJhc2VkIG9uIHRpbWUgYHZhbHVlYCBzaWduLlxuICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IFwib3RoZXJcIiB0aGVuIGl0J3MgYmVpbmcgY29sbGFwc2VkLlxuICAgICAgLy8gKHRoZSByZXN1bHRpbmcgYnVuZGxlIHNpemUgb3B0aW1pemF0aW9uIHRlY2huaXF1ZSlcblxuXG4gICAgICB2YXIgcGx1cmFsaXplZE1lc3NhZ2VzID0gdW5pdE1lc3NhZ2VzW2lzTmVnYXRpdmUodmFsdWUpID8gXCJwYXN0XCIgOiBcImZ1dHVyZVwiXTsgLy8gQnVuZGxlIHNpemUgb3B0aW1pemF0aW9uIHRlY2huaXF1ZSBmb3Igc3R5bGVzIGxpa2UgXCJuYXJyb3dcIlxuICAgICAgLy8gaGF2aW5nIG1lc3NhZ2VzIGxpa2UgXCJpbiB7MH0gZC5cIiBvciBcInswfSBkLiBhZ29cIi5cblxuICAgICAgaWYgKHR5cGVvZiBwbHVyYWxpemVkTWVzc2FnZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgcmV0dXJuIHBsdXJhbGl6ZWRNZXNzYWdlcztcbiAgICAgIH0gLy8gUXVhbnRpZnkgYHZhbHVlYC5cbiAgICAgIC8vIFRoZXJlIHNlZW1zIHRvIGJlIG5vIHN1Y2ggbG9jYWxlIGluIENMRFJcbiAgICAgIC8vIGZvciB3aGljaCBcInBsdXJhbCBydWxlc1wiIGZ1bmN0aW9uIGlzIG1pc3NpbmcuXG5cblxuICAgICAgdmFyIHF1YW50aWZpZXIgPSB0aGlzLnBsdXJhbFJ1bGVzICYmIHRoaXMucGx1cmFsUnVsZXMuc2VsZWN0KE1hdGguYWJzKHZhbHVlKSkgfHwgJ290aGVyJzsgLy8gXCJvdGhlclwiIHJ1bGUgaXMgc3VwcG9zZWQgdG8gYmUgYWx3YXlzIHByZXNlbnQuXG4gICAgICAvLyBJZiBvbmx5IFwib3RoZXJcIiBydWxlIGlzIHByZXNlbnQgdGhlbiBcInJ1bGVzXCIgaXMgbm90IGFuIG9iamVjdCBhbmQgaXMgYSBzdHJpbmcuXG5cbiAgICAgIHJldHVybiBwbHVyYWxpemVkTWVzc2FnZXNbcXVhbnRpZmllcl0gfHwgcGx1cmFsaXplZE1lc3NhZ2VzLm90aGVyO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEZvcm1hdHMgYSBudW1iZXIgaW50byBhIHN0cmluZy5cclxuICAgICAqIFVzZXMgYEludGwuTnVtYmVyRm9ybWF0YCB3aGVuIGF2YWlsYWJsZS5cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gbnVtYmVyXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE51bWJlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXQgPyB0aGlzLm51bWJlckZvcm1hdC5mb3JtYXQobnVtYmVyKSA6IFN0cmluZyhudW1iZXIpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEZvcm1hdHMgYSBudW1iZXIgaW50byBhIGxpc3Qgb2YgcGFydHMuXHJcbiAgICAgKiBVc2VzIGBJbnRsLk51bWJlckZvcm1hdGAgd2hlbiBhdmFpbGFibGUuXHJcbiAgICAgKiBAcGFyYW0gIHtudW1iZXJ9IG51bWJlclxyXG4gICAgICogQHJldHVybiB7b2JqZWN0W119XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE51bWJlclRvUGFydHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZm9ybWF0TnVtYmVyVG9QYXJ0cyhudW1iZXIpIHtcbiAgICAgIC8vIGBJbnRsLk51bWJlckZvcm1hdC5mb3JtYXRUb1BhcnRzKClgIGlzIG5vdCBwcmVzZW50LCBmb3IgZXhhbXBsZSxcbiAgICAgIC8vIGluIE5vZGUuanMgOC54IHdoaWxlIGBJbnRsLk51bWJlckZvcm1hdGAgaXRzZWxmIGlzIHByZXNlbnQuXG4gICAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXQgJiYgdGhpcy5udW1iZXJGb3JtYXQuZm9ybWF0VG9QYXJ0cyA/IHRoaXMubnVtYmVyRm9ybWF0LmZvcm1hdFRvUGFydHMobnVtYmVyKSA6IFt7XG4gICAgICAgIHR5cGU6IFwiaW50ZWdlclwiLFxuICAgICAgICB2YWx1ZTogdGhpcy5mb3JtYXROdW1iZXIobnVtYmVyKVxuICAgICAgfV07XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhIG5ldyBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHJlZmxlY3RpbmcgdGhlIGxvY2FsZSBhbmQgZGF0ZSBhbmQgdGltZSBmb3JtYXR0aW5nIG9wdGlvbnMgY29tcHV0ZWQgZHVyaW5nIGluaXRpYWxpemF0aW9uIG9mIHRoaXMgRGF0ZVRpbWVGb3JtYXQgb2JqZWN0LlxyXG4gICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvRGF0ZVRpbWVGb3JtYXQvcmVzb2x2ZWRPcHRpb25zXHJcbiAgICAgKiBAcmV0dXJuIHtPYmplY3R9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcInJlc29sdmVkT3B0aW9uc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiByZXNvbHZlZE9wdGlvbnMoKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlLFxuICAgICAgICBzdHlsZTogdGhpcy5zdHlsZSxcbiAgICAgICAgbnVtZXJpYzogdGhpcy5udW1lcmljLFxuICAgICAgICBudW1iZXJpbmdTeXN0ZW06IHRoaXMubnVtYmVyaW5nU3lzdGVtXG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBSZWxhdGl2ZVRpbWVGb3JtYXQ7XG59KCk7XG4vKipcclxuICogUmV0dXJucyBhbiBhcnJheSBjb250YWluaW5nIHRob3NlIG9mIHRoZSBwcm92aWRlZCBsb2NhbGVzXHJcbiAqIHRoYXQgYXJlIHN1cHBvcnRlZCBpbiBjb2xsYXRpb24gd2l0aG91dCBoYXZpbmcgdG8gZmFsbCBiYWNrXHJcbiAqIHRvIHRoZSBydW50aW1lJ3MgZGVmYXVsdCBsb2NhbGUuXHJcbiAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGxvY2FsZSAtIEEgc3RyaW5nIHdpdGggYSBCQ1AgNDcgbGFuZ3VhZ2UgdGFnLCBvciBhbiBhcnJheSBvZiBzdWNoIHN0cmluZ3MuIEZvciB0aGUgZ2VuZXJhbCBmb3JtIG9mIHRoZSBsb2NhbGVzIGFyZ3VtZW50LCBzZWUgdGhlIEludGwgcGFnZS5cclxuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIEFuIG9iamVjdCB0aGF0IG1heSBoYXZlIHRoZSBmb2xsb3dpbmcgcHJvcGVydHk6XHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBbb3B0aW9ucy5sb2NhbGVNYXRjaGVyPVwibG9va3VwXCJdIC0gVGhlIGxvY2FsZSBtYXRjaGluZyBhbGdvcml0aG0gdG8gdXNlLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFwibG9va3VwXCIgYW5kIFwiYmVzdCBmaXRcIi4gQ3VycmVudGx5IG9ubHkgXCJsb29rdXBcIiBpcyBzdXBwb3J0ZWQuXHJcbiAqIEByZXR1cm4ge3N0cmluZ1tdfSBBbiBhcnJheSBvZiBzdHJpbmdzIHJlcHJlc2VudGluZyBhIHN1YnNldCBvZiB0aGUgZ2l2ZW4gbG9jYWxlIHRhZ3MgdGhhdCBhcmUgc3VwcG9ydGVkIGluIGNvbGxhdGlvbiB3aXRob3V0IGhhdmluZyB0byBmYWxsIGJhY2sgdG8gdGhlIHJ1bnRpbWUncyBkZWZhdWx0IGxvY2FsZS5cclxuICogQGV4YW1wbGVcclxuICogdmFyIGxvY2FsZXMgPSBbJ2JhbicsICdpZC11LWNvLXBpbnlpbicsICdlcy1QWSddXHJcbiAqIHZhciBvcHRpb25zID0geyBsb2NhbGVNYXRjaGVyOiAnbG9va3VwJyB9XHJcbiAqIC8vIFJldHVybnMgW1wiaWRcIiwgXCJlcy1QWVwiXVxyXG4gKiBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC5zdXBwb3J0ZWRMb2NhbGVzT2YobG9jYWxlcywgb3B0aW9ucylcclxuICovXG5cblxuZXhwb3J0IHsgUmVsYXRpdmVUaW1lRm9ybWF0IGFzIGRlZmF1bHQgfTtcblxuUmVsYXRpdmVUaW1lRm9ybWF0LnN1cHBvcnRlZExvY2FsZXNPZiA9IGZ1bmN0aW9uIChsb2NhbGVzKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB7fTtcblxuICAvLyBDb252ZXJ0IGBsb2NhbGVzYCB0byBhbiBhcnJheS5cbiAgaWYgKHR5cGVvZiBsb2NhbGVzID09PSAnc3RyaW5nJykge1xuICAgIGxvY2FsZXMgPSBbbG9jYWxlc107XG4gIH0gZWxzZSBpZiAoIUFycmF5LmlzQXJyYXkobG9jYWxlcykpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbnZhbGlkIFwibG9jYWxlc1wiIGFyZ3VtZW50Jyk7XG4gIH1cblxuICByZXR1cm4gbG9jYWxlcy5maWx0ZXIoZnVuY3Rpb24gKGxvY2FsZSkge1xuICAgIHJldHVybiByZXNvbHZlTG9jYWxlKGxvY2FsZSwgb3B0aW9ucyk7XG4gIH0pO1xufTtcbi8qKlxyXG4gKiBBZGRzIGxvY2FsZSBkYXRhIGZvciBhIHNwZWNpZmljIGxvY2FsZS5cclxuICogQHBhcmFtIHtPYmplY3R9IGxvY2FsZURhdGFcclxuICovXG5cblxuUmVsYXRpdmVUaW1lRm9ybWF0LmFkZExvY2FsZSA9IGFkZExvY2FsZURhdGE7XG4vKipcclxuICogU2V0cyBkZWZhdWx0IGxvY2FsZS5cclxuICogQHBhcmFtICB7c3RyaW5nfSBsb2NhbGVcclxuICovXG5cblJlbGF0aXZlVGltZUZvcm1hdC5zZXREZWZhdWx0TG9jYWxlID0gc2V0RGVmYXVsdExvY2FsZTtcbi8qKlxyXG4gKiBHZXRzIGRlZmF1bHQgbG9jYWxlLlxyXG4gKiBAcmV0dXJuICB7c3RyaW5nfSBsb2NhbGVcclxuICovXG5cblJlbGF0aXZlVGltZUZvcm1hdC5nZXREZWZhdWx0TG9jYWxlID0gZ2V0RGVmYXVsdExvY2FsZTtcbi8qKlxyXG4gKiBFeHBvcnQgYEludGwuUGx1cmFsUnVsZXNgIGp1c3QgaW4gY2FzZSBpdCdzIHVzZWQgc29tZXdoZXJlIGVsc2UuXHJcbiAqL1xuXG5SZWxhdGl2ZVRpbWVGb3JtYXQuUGx1cmFsUnVsZXMgPSBQbHVyYWxSdWxlczsgLy8gVGhlIHNwZWNpZmljYXRpb24gYWxsb3dzIHVuaXRzIHRvIGJlIGluIHBsdXJhbCBmb3JtLlxuLy8gQ29udmVydCBwbHVyYWwgdG8gc2luZ3VsYXIuXG4vLyBFeGFtcGxlOiBcInNlY29uZHNcIiAtPiBcInNlY29uZFwiLlxuXG52YXIgVU5JVF9FUlJPUiA9ICdJbnZhbGlkIFwidW5pdFwiIGFyZ3VtZW50JztcblxuZnVuY3Rpb24gcGFyc2VVbml0KHVuaXQpIHtcbiAgaWYgKF90eXBlb2YodW5pdCkgPT09ICdzeW1ib2wnKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihVTklUX0VSUk9SKTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdW5pdCAhPT0gJ3N0cmluZycpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihcIlwiLmNvbmNhdChVTklUX0VSUk9SLCBcIjogXCIpLmNvbmNhdCh1bml0KSk7XG4gIH1cblxuICBpZiAodW5pdFt1bml0Lmxlbmd0aCAtIDFdID09PSAncycpIHtcbiAgICB1bml0ID0gdW5pdC5zbGljZSgwLCB1bml0Lmxlbmd0aCAtIDEpO1xuICB9XG5cbiAgaWYgKFVOSVRTLmluZGV4T2YodW5pdCkgPCAwKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoXCJcIi5jb25jYXQoVU5JVF9FUlJPUiwgXCI6IFwiKS5jb25jYXQodW5pdCkpO1xuICB9XG5cbiAgcmV0dXJuIHVuaXQ7XG59IC8vIENvbnZlcnRzIGB2YWx1ZWAgdG8gYSBgTnVtYmVyYC5cbi8vIFRoZSBzcGVjaWZpY2F0aW9uIGFsbG93cyB2YWx1ZSB0byBiZSBhIG5vbi1udW1iZXIuXG4vLyBGb3IgZXhhbXBsZSwgXCItMFwiIGlzIHN1cHBvc2VkIHRvIGJlIHRyZWF0ZWQgYXMgYC0wYC5cbi8vIEFsc28gY2hlY2tzIGlmIGB2YWx1ZWAgaXMgYSBmaW5pdGUgbnVtYmVyLlxuXG5cbnZhciBOVU1CRVJfRVJST1IgPSAnSW52YWxpZCBcIm51bWJlclwiIGFyZ3VtZW50JztcblxuZnVuY3Rpb24gcGFyc2VOdW1iZXIodmFsdWUpIHtcbiAgdmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuXG4gIGlmIChOdW1iZXIuaXNGaW5pdGUpIHtcbiAgICBpZiAoIU51bWJlci5pc0Zpbml0ZSh2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKFwiXCIuY29uY2F0KE5VTUJFUl9FUlJPUiwgXCI6IFwiKS5jb25jYXQodmFsdWUpKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdmFsdWU7XG59XG4vKipcclxuICogVGVsbHMgYDBgIGZyb20gYC0wYC5cclxuICogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNzIyMzM1OS9hcmUtMC1hbmQtMC10aGUtc2FtZVxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG51bWJlclxyXG4gKiBAcmV0dXJuIHtCb29sZWFufVxyXG4gKiBAZXhhbXBsZVxyXG4gKiBpc05lZ2F0aXZlWmVybygwKTsgLy8gZmFsc2VcclxuICogaXNOZWdhdGl2ZVplcm8oLTApOyAvLyB0cnVlXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGlzTmVnYXRpdmVaZXJvKG51bWJlcikge1xuICByZXR1cm4gMSAvIG51bWJlciA9PT0gLUluZmluaXR5O1xufVxuXG5mdW5jdGlvbiBpc05lZ2F0aXZlKG51bWJlcikge1xuICByZXR1cm4gbnVtYmVyIDwgMCB8fCBudW1iZXIgPT09IDAgJiYgaXNOZWdhdGl2ZVplcm8obnVtYmVyKTtcbn1cblxuZnVuY3Rpb24gcGFyc2VGb3JtYXRBcmdzKGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgMikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJcXFwidW5pdFxcXCIgYXJndW1lbnQgaXMgcmVxdWlyZWRcIik7XG4gIH1cblxuICByZXR1cm4gW3BhcnNlTnVtYmVyKGFyZ3NbMF0pLCBwYXJzZVVuaXQoYXJnc1sxXSldO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9UmVsYXRpdmVUaW1lRm9ybWF0LmpzLm1hcCIsImZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAob2JqKSB7IHJldHVybiB0eXBlb2Ygb2JqOyB9IDogZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9LCBfdHlwZW9mKG9iaik7IH1cblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfVxuXG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShDb25zdHJ1Y3RvciwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogZmFsc2UgfSk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfVxuXG4vKipcclxuICogQSBiYXNpYyBpbi1tZW1vcnkgY2FjaGUuXHJcbiAqXHJcbiAqIGltcG9ydCBDYWNoZSBmcm9tICdqYXZhc2NyaXB0LXRpbWUtYWdvL0NhY2hlJ1xyXG4gKiBjb25zdCBjYWNoZSA9IG5ldyBDYWNoZSgpXHJcbiAqIGNvbnN0IG9iamVjdCA9IGNhY2hlLmdldCgna2V5MScsICdrZXkyJywgLi4uKSB8fCBjYWNoZS5wdXQoJ2tleTEnLCAna2V5MicsIC4uLiwgY3JlYXRlT2JqZWN0KCkpXHJcbiAqL1xudmFyIENhY2hlID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gQ2FjaGUoKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIENhY2hlKTtcblxuICAgIHRoaXMuY2FjaGUgPSB7fTtcbiAgfVxuXG4gIF9jcmVhdGVDbGFzcyhDYWNoZSwgW3tcbiAgICBrZXk6IFwiZ2V0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgIHZhciBjYWNoZSA9IHRoaXMuY2FjaGU7XG5cbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBrZXlzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBrZXlzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBfaSA9IDAsIF9rZXlzID0ga2V5czsgX2kgPCBfa2V5cy5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9rZXlzW19pXTtcblxuICAgICAgICBpZiAoX3R5cGVvZihjYWNoZSkgIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY2FjaGUgPSBjYWNoZVtrZXldO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY2FjaGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInB1dFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwdXQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuMiA9IGFyZ3VtZW50cy5sZW5ndGgsIGtleXMgPSBuZXcgQXJyYXkoX2xlbjIpLCBfa2V5MiA9IDA7IF9rZXkyIDwgX2xlbjI7IF9rZXkyKyspIHtcbiAgICAgICAga2V5c1tfa2V5Ml0gPSBhcmd1bWVudHNbX2tleTJdO1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWUgPSBrZXlzLnBvcCgpO1xuICAgICAgdmFyIGxhc3RLZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgdmFyIGNhY2hlID0gdGhpcy5jYWNoZTtcblxuICAgICAgZm9yICh2YXIgX2kyID0gMCwgX2tleXMyID0ga2V5czsgX2kyIDwgX2tleXMyLmxlbmd0aDsgX2kyKyspIHtcbiAgICAgICAgdmFyIGtleSA9IF9rZXlzMltfaTJdO1xuXG4gICAgICAgIGlmIChfdHlwZW9mKGNhY2hlW2tleV0pICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIGNhY2hlW2tleV0gPSB7fTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNhY2hlID0gY2FjaGVba2V5XTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNhY2hlW2xhc3RLZXldID0gdmFsdWU7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIENhY2hlO1xufSgpO1xuXG5leHBvcnQgeyBDYWNoZSBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1jYWNoZS5qcy5tYXAiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG4vKipcclxuICogQ2hvb3NlcyB0aGUgbW9zdCBhcHByb3ByaWF0ZSBsb2NhbGVcclxuICogKG9uZSBvZiB0aGUgcmVnaXN0ZXJlZCBvbmVzKVxyXG4gKiBiYXNlZCBvbiB0aGUgbGlzdCBvZiBwcmVmZXJyZWQgYGxvY2FsZXNgIHN1cHBsaWVkIGJ5IHRoZSB1c2VyLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBsb2NhbGVzIC0gdGhlIGxpc3Qgb2YgcHJlZmVyYWJsZSBsb2NhbGVzIChpbiBbSUVURiBmb3JtYXRdKGh0dHBzOi8vZW4ud2lraXBlZGlhLm9yZy93aWtpL0lFVEZfbGFuZ3VhZ2VfdGFnKSkuXHJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGlzTG9jYWxlRGF0YUF2YWlsYWJsZSAtIHRlc3RzIGlmIGEgbG9jYWxlIGlzIGF2YWlsYWJsZS5cclxuICpcclxuICogQHJldHVybnMge3N0cmluZ30gVGhlIG1vc3Qgc3VpdGFibGUgbG9jYWxlLlxyXG4gKlxyXG4gKiBAZXhhbXBsZVxyXG4gKiAvLyBSZXR1cm5zICdlbidcclxuICogY2hvb3NlTG9jYWxlKFsnZW4tVVMnXSwgdW5kZWZpbmVkLCAobG9jYWxlKSA9PiBsb2NhbGUgPT09ICdydScgfHwgbG9jYWxlID09PSAnZW4nKVxyXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNob29zZUxvY2FsZShsb2NhbGVzLCBpc0xvY2FsZURhdGFBdmFpbGFibGUpIHtcbiAgLy8gVGhpcyBpcyBub3QgYW4gaW50ZWxsaWdlbnQgYWxnb3JpdGhtLFxuICAvLyBidXQgaXQgd2lsbCBkbyBmb3IgdGhpcyBsaWJyYXJ5J3MgY2FzZS5cbiAgLy8gYHNyLUN5cmwtQkFgIC0+IGBzci1DeXJsYCAtPiBgc3JgLlxuICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGxvY2FsZXMpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgIHZhciBsb2NhbGUgPSBfc3RlcC52YWx1ZTtcblxuICAgIGlmIChpc0xvY2FsZURhdGFBdmFpbGFibGUobG9jYWxlKSkge1xuICAgICAgcmV0dXJuIGxvY2FsZTtcbiAgICB9XG5cbiAgICB2YXIgcGFydHMgPSBsb2NhbGUuc3BsaXQoJy0nKTtcblxuICAgIHdoaWxlIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICBwYXJ0cy5wb3AoKTtcbiAgICAgIGxvY2FsZSA9IHBhcnRzLmpvaW4oJy0nKTtcblxuICAgICAgaWYgKGlzTG9jYWxlRGF0YUF2YWlsYWJsZShsb2NhbGUpKSB7XG4gICAgICAgIHJldHVybiBsb2NhbGU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbG9jYWxlIGRhdGEgaGFzIGJlZW4gcmVnaXN0ZXJlZCBmb3IgYW55IG9mIHRoZSBsb2NhbGVzOiBcIi5jb25jYXQobG9jYWxlcy5qb2luKCcsICcpKSk7XG59XG4vKipcclxuICogV2hldGhlciBjYW4gdXNlIGBJbnRsLkRhdGVUaW1lRm9ybWF0YCBmb3IgdGhlc2UgYGxvY2FsZXNgLlxyXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBzdWl0YWJsZSBvbmUuXHJcbiAqIEBwYXJhbSAgeyhzdHJpbmd8c3RyaW5nW10pfSBsb2NhbGVzXHJcbiAqIEByZXR1cm4gez9zdHJpbmd9IFRoZSBmaXJzdCBsb2NhbGUgdGhhdCBjYW4gYmUgdXNlZC5cclxuICovXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRsRGF0ZVRpbWVGb3JtYXRTdXBwb3J0ZWRMb2NhbGUobG9jYWxlcykge1xuICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuICBpZiAoaW50bERhdGVUaW1lRm9ybWF0U3VwcG9ydGVkKCkpIHtcbiAgICByZXR1cm4gSW50bC5EYXRlVGltZUZvcm1hdC5zdXBwb3J0ZWRMb2NhbGVzT2YobG9jYWxlcylbMF07XG4gIH1cbn1cbi8qKlxyXG4gKiBXaGV0aGVyIGNhbiB1c2UgYEludGwuRGF0ZVRpbWVGb3JtYXRgLlxyXG4gKiBAcmV0dXJuIHtib29sZWFufVxyXG4gKi9cblxuZXhwb3J0IGZ1bmN0aW9uIGludGxEYXRlVGltZUZvcm1hdFN1cHBvcnRlZCgpIHtcbiAgLy8gQmFiZWwgdHJhbnNmb3JtcyBgdHlwZW9mYCBpbnRvIHNvbWUgXCJicmFuY2hlc1wiXG4gIC8vIHNvIGlzdGFuYnVsIHdpbGwgc2hvdyB0aGlzIGFzIFwiYnJhbmNoIG5vdCBjb3ZlcmVkXCIuXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgdmFyIGlzSW50bEF2YWlsYWJsZSA9ICh0eXBlb2YgSW50bCA9PT0gXCJ1bmRlZmluZWRcIiA/IFwidW5kZWZpbmVkXCIgOiBfdHlwZW9mKEludGwpKSA9PT0gJ29iamVjdCc7XG4gIHJldHVybiBpc0ludGxBdmFpbGFibGUgJiYgdHlwZW9mIEludGwuRGF0ZVRpbWVGb3JtYXQgPT09ICdmdW5jdGlvbic7XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1sb2NhbGUuanMubWFwIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1N0eWxlT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gaXNPYmplY3Qob2JqZWN0KSAmJiAoQXJyYXkuaXNBcnJheShvYmplY3Quc3RlcHMpIHx8IC8vIGBncmFkYXRpb25gIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQ6IGl0IGhhcyBiZWVuIHJlbmFtZWQgdG8gYHN0ZXBzYC5cbiAgQXJyYXkuaXNBcnJheShvYmplY3QuZ3JhZGF0aW9uKSB8fCAvLyBgZmxhdm91cmAgcHJvcGVydHkgaXMgZGVwcmVjYXRlZDogaXQgaGFzIGJlZW4gcmVuYW1lZCB0byBgbGFiZWxzYC5cbiAgQXJyYXkuaXNBcnJheShvYmplY3QuZmxhdm91cikgfHwgdHlwZW9mIG9iamVjdC5mbGF2b3VyID09PSAnc3RyaW5nJyB8fCBBcnJheS5pc0FycmF5KG9iamVjdC5sYWJlbHMpIHx8IHR5cGVvZiBvYmplY3QubGFiZWxzID09PSAnc3RyaW5nJyB8fCAvLyBgdW5pdHNgIHByb3BlcnR5IGlzIGRlcHJlY2F0ZWQuXG4gIEFycmF5LmlzQXJyYXkob2JqZWN0LnVuaXRzKSB8fCAvLyBgY3VzdG9tYCBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLlxuICB0eXBlb2Ygb2JqZWN0LmN1c3RvbSA9PT0gJ2Z1bmN0aW9uJyk7XG59XG52YXIgT0JKRUNUX0NPTlNUUlVDVE9SID0ge30uY29uc3RydWN0b3I7XG5cbmZ1bmN0aW9uIGlzT2JqZWN0KG9iamVjdCkge1xuICByZXR1cm4gX3R5cGVvZihvYmplY3QpICE9PSB1bmRlZmluZWQgJiYgb2JqZWN0ICE9PSBudWxsICYmIG9iamVjdC5jb25zdHJ1Y3RvciA9PT0gT0JKRUNUX0NPTlNUUlVDVE9SO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aXNTdHlsZU9iamVjdC5qcy5tYXAiLCJleHBvcnQgdmFyIG1pbnV0ZSA9IDYwOyAvLyBpbiBzZWNvbmRzXG5cbmV4cG9ydCB2YXIgaG91ciA9IDYwICogbWludXRlOyAvLyBpbiBzZWNvbmRzXG5cbmV4cG9ydCB2YXIgZGF5ID0gMjQgKiBob3VyOyAvLyBpbiBzZWNvbmRzXG5cbmV4cG9ydCB2YXIgd2VlayA9IDcgKiBkYXk7IC8vIGluIHNlY29uZHNcbi8vIGh0dHBzOi8vd3d3LnF1b3JhLmNvbS9XaGF0LWlzLXRoZS1hdmVyYWdlLW51bWJlci1vZi1kYXlzLWluLWEtbW9udGhcblxuZXhwb3J0IHZhciBtb250aCA9IDMwLjQ0ICogZGF5OyAvLyBpbiBzZWNvbmRzXG4vLyBcIjQwMCB5ZWFycyBoYXZlIDE0NjA5NyBkYXlzICh0YWtpbmcgaW50byBhY2NvdW50IGxlYXAgeWVhciBydWxlcylcIlxuXG5leHBvcnQgdmFyIHllYXIgPSAxNDYwOTcgLyA0MDAgKiBkYXk7IC8vIGluIHNlY29uZHNcblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlY29uZHNJblVuaXQodW5pdCkge1xuICBzd2l0Y2ggKHVuaXQpIHtcbiAgICBjYXNlICdzZWNvbmQnOlxuICAgICAgcmV0dXJuIDE7XG5cbiAgICBjYXNlICdtaW51dGUnOlxuICAgICAgcmV0dXJuIG1pbnV0ZTtcblxuICAgIGNhc2UgJ2hvdXInOlxuICAgICAgcmV0dXJuIGhvdXI7XG5cbiAgICBjYXNlICdkYXknOlxuICAgICAgcmV0dXJuIGRheTtcblxuICAgIGNhc2UgJ3dlZWsnOlxuICAgICAgcmV0dXJuIHdlZWs7XG5cbiAgICBjYXNlICdtb250aCc6XG4gICAgICByZXR1cm4gbW9udGg7XG5cbiAgICBjYXNlICd5ZWFyJzpcbiAgICAgIHJldHVybiB5ZWFyO1xuICB9XG59IC8vIGV4cG9ydCBmdW5jdGlvbiBnZXRQcmV2aW91c1VuaXRGb3IodW5pdCkge1xuLy8gXHRzd2l0Y2ggKHVuaXQpIHtcbi8vIFx0XHRjYXNlICdzZWNvbmQnOlxuLy8gXHRcdFx0cmV0dXJuICdub3cnXG4vLyBcdFx0Y2FzZSAnbWludXRlJzpcbi8vIFx0XHRcdHJldHVybiAnc2Vjb25kJ1xuLy8gXHRcdGNhc2UgJ2hvdXInOlxuLy8gXHRcdFx0cmV0dXJuICdtaW51dGUnXG4vLyBcdFx0Y2FzZSAnZGF5Jzpcbi8vIFx0XHRcdHJldHVybiAnaG91cidcbi8vIFx0XHRjYXNlICd3ZWVrJzpcbi8vIFx0XHRcdHJldHVybiAnZGF5J1xuLy8gXHRcdGNhc2UgJ21vbnRoJzpcbi8vIFx0XHRcdHJldHVybiAnd2Vlaydcbi8vIFx0XHRjYXNlICd5ZWFyJzpcbi8vIFx0XHRcdHJldHVybiAnbW9udGgnXG4vLyBcdH1cbi8vIH1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXVuaXRzLmpzLm1hcCIsImltcG9ydCB7IGdldFNlY29uZHNJblVuaXQgfSBmcm9tICcuL3VuaXRzLmpzJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0ZXBEZW5vbWluYXRvcihzdGVwKSB7XG4gIC8vIGBmYWN0b3JgIGlzIGEgbGVnYWN5IHByb3BlcnR5LlxuICBpZiAoc3RlcC5mYWN0b3IgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzdGVwLmZhY3RvcjtcbiAgfSAvLyBcInVuaXRcIiBpcyBub3cgY2FsbGVkIFwiZm9ybWF0QXNcIi5cblxuXG4gIHJldHVybiBnZXRTZWNvbmRzSW5Vbml0KHN0ZXAudW5pdCB8fCBzdGVwLmZvcm1hdEFzKSB8fCAxO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0U3RlcERlbm9taW5hdG9yLmpzLm1hcCIsImV4cG9ydCBmdW5jdGlvbiBnZXRSb3VuZEZ1bmN0aW9uKHJvdW5kKSB7XG4gIHN3aXRjaCAocm91bmQpIHtcbiAgICBjYXNlICdmbG9vcic6XG4gICAgICByZXR1cm4gTWF0aC5mbG9vcjtcblxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gTWF0aC5yb3VuZDtcbiAgfVxufSAvLyBGb3Igbm9uLW5lZ2F0aXZlIG51bWJlcnMuXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXREaWZmUmF0aW9Ub05leHRSb3VuZGVkTnVtYmVyKHJvdW5kKSB7XG4gIHN3aXRjaCAocm91bmQpIHtcbiAgICBjYXNlICdmbG9vcic6XG4gICAgICAvLyBNYXRoLmZsb29yKHgpID0geFxuICAgICAgLy8gTWF0aC5mbG9vcih4ICsgMSkgPSB4ICsgMVxuICAgICAgcmV0dXJuIDE7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gTWF0aC5yb3VuZCh4KSA9IHhcbiAgICAgIC8vIE1hdGgucm91bmQoeCArIDAuNSkgPSB4ICsgMVxuICAgICAgcmV0dXJuIDAuNTtcbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cm91bmQuanMubWFwIiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgb2JqLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgb2JqICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvYmo7IH0sIF90eXBlb2Yob2JqKTsgfVxuXG5pbXBvcnQgeyBnZXRTZWNvbmRzSW5Vbml0IH0gZnJvbSAnLi91bml0cy5qcyc7XG5pbXBvcnQgeyBnZXREaWZmUmF0aW9Ub05leHRSb3VuZGVkTnVtYmVyIH0gZnJvbSAnLi4vcm91bmQuanMnO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2V0U3RlcE1pblRpbWUoc3RlcCwgX3JlZikge1xuICB2YXIgcHJldlN0ZXAgPSBfcmVmLnByZXZTdGVwLFxuICAgICAgdGltZXN0YW1wID0gX3JlZi50aW1lc3RhbXAsXG4gICAgICBub3cgPSBfcmVmLm5vdyxcbiAgICAgIGZ1dHVyZSA9IF9yZWYuZnV0dXJlLFxuICAgICAgcm91bmQgPSBfcmVmLnJvdW5kO1xuICB2YXIgbWluVGltZTsgLy8gXCJ0aHJlc2hvbGRfZm9yX3h4eFwiIGlzIGEgbGVnYWN5IHByb3BlcnR5LlxuXG4gIGlmIChwcmV2U3RlcCkge1xuICAgIGlmIChwcmV2U3RlcC5pZCB8fCBwcmV2U3RlcC51bml0KSB7XG4gICAgICBtaW5UaW1lID0gc3RlcFtcInRocmVzaG9sZF9mb3JfXCIuY29uY2F0KHByZXZTdGVwLmlkIHx8IHByZXZTdGVwLnVuaXQpXTtcbiAgICB9XG4gIH1cblxuICBpZiAobWluVGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gXCJ0aHJlc2hvbGRcIiBpcyBhIGxlZ2FjeSBwcm9wZXJ0eS5cbiAgICBpZiAoc3RlcC50aHJlc2hvbGQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gXCJ0aHJlc2hvbGRcIiBpcyBhIGxlZ2FjeSBuYW1lIGZvciBcIm1pblRpbWVcIi5cbiAgICAgIG1pblRpbWUgPSBzdGVwLnRocmVzaG9sZDsgLy8gXCJ0aHJlc2hvbGRcIiBmdW5jdGlvbiBpcyBkZXByZWNhdGVkLlxuXG4gICAgICBpZiAodHlwZW9mIG1pblRpbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgbWluVGltZSA9IG1pblRpbWUobm93LCBmdXR1cmUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5UaW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBtaW5UaW1lID0gc3RlcC5taW5UaW1lO1xuICB9IC8vIEEgZGVwcmVjYXRlZCB3YXkgb2Ygc3BlY2lmeWluZyBhIGRpZmZlcmVudCB0aHJlc2hvbGRcbiAgLy8gZGVwZW5kaW5nIG9uIHRoZSBwcmV2aW91cyBzdGVwJ3MgdW5pdC5cblxuXG4gIGlmIChfdHlwZW9mKG1pblRpbWUpID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChwcmV2U3RlcCAmJiBwcmV2U3RlcC5pZCAmJiBtaW5UaW1lW3ByZXZTdGVwLmlkXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBtaW5UaW1lID0gbWluVGltZVtwcmV2U3RlcC5pZF07XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pblRpbWUgPSBtaW5UaW1lW1wiZGVmYXVsdFwiXTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIG1pblRpbWUgPT09ICdmdW5jdGlvbicpIHtcbiAgICBtaW5UaW1lID0gbWluVGltZSh0aW1lc3RhbXAsIHtcbiAgICAgIGZ1dHVyZTogZnV0dXJlLFxuICAgICAgZ2V0TWluVGltZUZvclVuaXQ6IGZ1bmN0aW9uIGdldE1pblRpbWVGb3JVbml0KHRvVW5pdCwgZnJvbVVuaXQpIHtcbiAgICAgICAgcmV0dXJuIF9nZXRNaW5UaW1lRm9yVW5pdCh0b1VuaXQsIGZyb21Vbml0IHx8IHByZXZTdGVwICYmIHByZXZTdGVwLmZvcm1hdEFzLCB7XG4gICAgICAgICAgcm91bmQ6IHJvdW5kXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0pO1xuICB9IC8vIEV2YWx1YXRlIHRoZSBgdGVzdCgpYCBmdW5jdGlvbi5cbiAgLy8gYHRlc3QoKWAgZnVuY3Rpb24gaXMgZGVwcmVjYXRlZC5cblxuXG4gIGlmIChtaW5UaW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoc3RlcC50ZXN0KSB7XG4gICAgICBpZiAoc3RlcC50ZXN0KHRpbWVzdGFtcCwge1xuICAgICAgICBub3c6IG5vdyxcbiAgICAgICAgZnV0dXJlOiBmdXR1cmVcbiAgICAgIH0pKSB7XG4gICAgICAgIC8vIGAwYCB0aHJlc2hvbGQgYWx3YXlzIHBhc3Nlcy5cbiAgICAgICAgbWluVGltZSA9IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBgTUFYX1NBRkVfSU5URUdFUmAgdGhyZXNob2xkIHdvbid0IGV2ZXIgcGFzcyBpbiByZWFsIGxpZmUuXG4gICAgICAgIG1pblRpbWUgPSA5MDA3MTk5MjU0NzQwOTkxOyAvLyBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGlmIChtaW5UaW1lID09PSB1bmRlZmluZWQpIHtcbiAgICBpZiAocHJldlN0ZXApIHtcbiAgICAgIGlmIChzdGVwLmZvcm1hdEFzICYmIHByZXZTdGVwLmZvcm1hdEFzKSB7XG4gICAgICAgIG1pblRpbWUgPSBfZ2V0TWluVGltZUZvclVuaXQoc3RlcC5mb3JtYXRBcywgcHJldlN0ZXAuZm9ybWF0QXMsIHtcbiAgICAgICAgICByb3VuZDogcm91bmRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRoZSBmaXJzdCBzdGVwJ3MgYG1pblRpbWVgIGlzIGAwYCBieSBkZWZhdWx0LlxuICAgICAgbWluVGltZSA9IDA7XG4gICAgfVxuICB9IC8vIFdhcm4gaWYgbm8gYG1pblRpbWVgIHdhcyBkZWZpbmVkIG9yIGNvdWxkIGJlIGRlZHVjZWQuXG5cblxuICBpZiAobWluVGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29uc29sZS53YXJuKCdbamF2YXNjcmlwdC10aW1lLWFnb10gQSBzdGVwIHNob3VsZCBzcGVjaWZ5IGBtaW5UaW1lYDpcXG4nICsgSlNPTi5zdHJpbmdpZnkoc3RlcCwgbnVsbCwgMikpO1xuICB9XG5cbiAgcmV0dXJuIG1pblRpbWU7XG59XG5cbmZ1bmN0aW9uIF9nZXRNaW5UaW1lRm9yVW5pdCh0b1VuaXQsIGZyb21Vbml0LCBfcmVmMikge1xuICB2YXIgcm91bmQgPSBfcmVmMi5yb3VuZDtcbiAgdmFyIHRvVW5pdEFtb3VudCA9IGdldFNlY29uZHNJblVuaXQodG9Vbml0KTsgLy8gaWYgKCFmcm9tVW5pdCkge1xuICAvLyBcdHJldHVybiB0b1VuaXRBbW91bnQ7XG4gIC8vIH1cbiAgLy8gaWYgKCFmcm9tVW5pdCkge1xuICAvLyBcdGZyb21Vbml0ID0gZ2V0UHJldmlvdXNVbml0Rm9yKHRvVW5pdClcbiAgLy8gfVxuXG4gIHZhciBmcm9tVW5pdEFtb3VudDtcblxuICBpZiAoZnJvbVVuaXQgPT09ICdub3cnKSB7XG4gICAgZnJvbVVuaXRBbW91bnQgPSBnZXRTZWNvbmRzSW5Vbml0KHRvVW5pdCk7XG4gIH0gZWxzZSB7XG4gICAgZnJvbVVuaXRBbW91bnQgPSBnZXRTZWNvbmRzSW5Vbml0KGZyb21Vbml0KTtcbiAgfVxuXG4gIGlmICh0b1VuaXRBbW91bnQgIT09IHVuZGVmaW5lZCAmJiBmcm9tVW5pdEFtb3VudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHRvVW5pdEFtb3VudCAtIGZyb21Vbml0QW1vdW50ICogKDEgLSBnZXREaWZmUmF0aW9Ub05leHRSb3VuZGVkTnVtYmVyKHJvdW5kKSk7XG4gIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldFN0ZXBNaW5UaW1lLmpzLm1hcCIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCBnZXRTdGVwRGVub21pbmF0b3IgZnJvbSAnLi9nZXRTdGVwRGVub21pbmF0b3IuanMnO1xuaW1wb3J0IGdldFN0ZXBNaW5UaW1lIGZyb20gJy4vZ2V0U3RlcE1pblRpbWUuanMnO1xuaW1wb3J0IHsgZ2V0Um91bmRGdW5jdGlvbiB9IGZyb20gJy4uL3JvdW5kLmpzJztcbi8qKlxyXG4gKiBGaW5kcyBhbiBhcHByb3ByaWF0ZSBgc3RlcGAgb2YgYHN0ZXBzYCBmb3IgdGhlIHRpbWUgaW50ZXJ2YWwgKGluIHNlY29uZHMpLlxyXG4gKlxyXG4gKiBAcGFyYW0ge09iamVjdFtdfSBzdGVwcyAtIFRpbWUgZm9ybWF0dGluZyBzdGVwcy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IHNlY29uZHNQYXNzZWQgLSBUaW1lIGludGVydmFsIChpbiBzZWNvbmRzKS5cclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBgPCAwYCBmb3IgcGFzdCBkYXRlcyBhbmQgYD4gMGAgZm9yIGZ1dHVyZSBkYXRlcy5cclxuICpcclxuICogQHBhcmFtIHtudW1iZXJ9IG9wdGlvbnMubm93IC0gQ3VycmVudCB0aW1lc3RhbXAuXHJcbiAqXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW29wdGlvbnMuZnV0dXJlXSAtIFdoZXRoZXIgdGhlIGRhdGUgc2hvdWxkIGJlIGZvcm1hdHRlZCBhcyBhIGZ1dHVyZSBvbmVcclxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGVhZCBvZiBhIHBhc3Qgb25lLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW29wdGlvbnMucm91bmRdIC0gKHVuZG9jdW1lbnRlZCkgUm91bmRpbmcgbWVjaGFuaXNtLlxyXG4gKlxyXG4gKiBAcGFyYW0ge3N0cmluZ1tdfSBbb3B0aW9ucy51bml0c10gLSBBIGxpc3Qgb2YgYWxsb3dlZCB0aW1lIHVuaXRzLlxyXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoRXhhbXBsZTogWydzZWNvbmQnLCAnbWludXRlJywgJ2hvdXInLCDigKZdKVxyXG4gKlxyXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtvcHRpb25zLmdldE5leHRTdGVwXSAtIFBhc3MgdHJ1ZSB0byByZXR1cm4gYFtzdGVwLCBuZXh0U3RlcF1gIGluc3RlYWQgb2YganVzdCBgc3RlcGAuXHJcbiAqXHJcbiAqIEByZXR1cm4ge09iamVjdHxPYmplY3RbXX0gW3N0ZXBdIOKAlCBFaXRoZXIgYSBgc3RlcGAgb3IgYFtwcmV2U3RlcCwgc3RlcCwgbmV4dFN0ZXBdYC5cclxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFN0ZXAoc3RlcHMsIHNlY29uZHNQYXNzZWQsIF9yZWYpIHtcbiAgdmFyIG5vdyA9IF9yZWYubm93LFxuICAgICAgZnV0dXJlID0gX3JlZi5mdXR1cmUsXG4gICAgICByb3VuZCA9IF9yZWYucm91bmQsXG4gICAgICB1bml0cyA9IF9yZWYudW5pdHMsXG4gICAgICBnZXROZXh0U3RlcCA9IF9yZWYuZ2V0TmV4dFN0ZXA7XG4gIC8vIElnbm9yZSBzdGVwcyBoYXZpbmcgbm90LXN1cHBvcnRlZCB0aW1lIHVuaXRzIGluIGBmb3JtYXRBc2AuXG4gIHN0ZXBzID0gZmlsdGVyU3RlcHNCeVVuaXRzKHN0ZXBzLCB1bml0cyk7XG5cbiAgdmFyIHN0ZXAgPSBfZ2V0U3RlcChzdGVwcywgc2Vjb25kc1Bhc3NlZCwge1xuICAgIG5vdzogbm93LFxuICAgIGZ1dHVyZTogZnV0dXJlLFxuICAgIHJvdW5kOiByb3VuZFxuICB9KTtcblxuICBpZiAoZ2V0TmV4dFN0ZXApIHtcbiAgICBpZiAoc3RlcCkge1xuICAgICAgdmFyIHByZXZTdGVwID0gc3RlcHNbc3RlcHMuaW5kZXhPZihzdGVwKSAtIDFdO1xuICAgICAgdmFyIG5leHRTdGVwID0gc3RlcHNbc3RlcHMuaW5kZXhPZihzdGVwKSArIDFdO1xuICAgICAgcmV0dXJuIFtwcmV2U3RlcCwgc3RlcCwgbmV4dFN0ZXBdO1xuICAgIH1cblxuICAgIHJldHVybiBbdW5kZWZpbmVkLCB1bmRlZmluZWQsIHN0ZXBzWzBdXTtcbiAgfVxuXG4gIHJldHVybiBzdGVwO1xufVxuXG5mdW5jdGlvbiBfZ2V0U3RlcChzdGVwcywgc2Vjb25kc1Bhc3NlZCwgX3JlZjIpIHtcbiAgdmFyIG5vdyA9IF9yZWYyLm5vdyxcbiAgICAgIGZ1dHVyZSA9IF9yZWYyLmZ1dHVyZSxcbiAgICAgIHJvdW5kID0gX3JlZjIucm91bmQ7XG5cbiAgLy8gSWYgbm8gc3RlcHMgZml0IHRoZSBjb25kaXRpb25zIHRoZW4gcmV0dXJuIG5vdGhpbmcuXG4gIGlmIChzdGVwcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm47XG4gIH0gLy8gRmluZCB0aGUgbW9zdCBhcHByb3ByaWF0ZSBzdGVwLlxuXG5cbiAgdmFyIGkgPSBnZXRTdGVwSW5kZXgoc3RlcHMsIHNlY29uZHNQYXNzZWQsIHtcbiAgICBub3c6IG5vdyxcbiAgICBmdXR1cmU6IGZ1dHVyZSB8fCBzZWNvbmRzUGFzc2VkIDwgMCxcbiAgICByb3VuZDogcm91bmRcbiAgfSk7IC8vIElmIG5vIHN0ZXAgaXMgYXBwbGljYWJsZSB0aGUgcmV0dXJuIG5vdGhpbmcuXG5cbiAgaWYgKGkgPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIHN0ZXAgPSBzdGVwc1tpXTsgLy8gQXBwbHkgZ3JhbnVsYXJpdHkgdG8gdGhlIHRpbWUgYW1vdW50XG4gIC8vIChhbmQgZmFsbCBiYWNrIHRvIHRoZSBwcmV2aW91cyBzdGVwXG4gIC8vICBpZiB0aGUgZmlyc3QgbGV2ZWwgb2YgZ3JhbnVsYXJpdHlcbiAgLy8gIGlzbid0IG1ldCBieSB0aGlzIGFtb3VudClcblxuICBpZiAoc3RlcC5ncmFudWxhcml0eSkge1xuICAgIC8vIFJlY2FsY3VsYXRlIHRoZSBhbW91bnQgb2Ygc2Vjb25kcyBwYXNzZWQgYmFzZWQgb24gYGdyYW51bGFyaXR5YC5cbiAgICB2YXIgc2Vjb25kc1Bhc3NlZEdyYW51bGFyID0gZ2V0Um91bmRGdW5jdGlvbihyb3VuZCkoTWF0aC5hYnMoc2Vjb25kc1Bhc3NlZCkgLyBnZXRTdGVwRGVub21pbmF0b3Ioc3RlcCkgLyBzdGVwLmdyYW51bGFyaXR5KSAqIHN0ZXAuZ3JhbnVsYXJpdHk7IC8vIElmIHRoZSBncmFudWxhcml0eSBmb3IgdGhpcyBzdGVwIGlzIHRvbyBoaWdoLFxuICAgIC8vIHRoZW4gZmFsbCBiYWNrIHRvIHRoZSBwcmV2aW91cyBzdGVwLlxuICAgIC8vIChpZiB0aGVyZSBpcyBhbnkgcHJldmlvdXMgc3RlcClcblxuICAgIGlmIChzZWNvbmRzUGFzc2VkR3JhbnVsYXIgPT09IDAgJiYgaSA+IDApIHtcbiAgICAgIHJldHVybiBzdGVwc1tpIC0gMV07XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHN0ZXA7XG59XG4vKipcclxuICogSXRlcmF0ZXMgdGhyb3VnaCBzdGVwcyB1bnRpbCBpdCBmaW5kcyB0aGUgbWF4aW11bSBvbmUgc2F0aXNmeWluZyB0aGUgYG1pblRpbWVgIHRocmVzaG9sZC5cclxuICogQHBhcmFtICB7T2JqZWN0fSBzdGVwcyAtIFN0ZXBzLlxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IHNlY29uZHNQYXNzZWQgLSBIb3cgbXVjaCBzZWNvbmRzIGhhdmUgcGFzc2VkIHNpbmNlIHRoZSBkYXRlIHRpbGwgYG5vd2AuXHJcbiAqIEBwYXJhbSAge251bWJlcn0gb3B0aW9ucy5ub3cgLSBDdXJyZW50IHRpbWVzdGFtcC5cclxuICogQHBhcmFtICB7Ym9vbGVhbn0gb3B0aW9ucy5mdXR1cmUgLSBXaGV0aGVyIHRoZSB0aW1lIGludGVydmFsIHNob3VsZCBiZSBmb3JtYXR0ZWQgYXMgYSBmdXR1cmUgb25lLlxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IFtpXSAtIEdyYWRhdGlvbiBzdGVwIGN1cnJlbnRseSBiZWluZyB0ZXN0ZWQuXHJcbiAqIEByZXR1cm4ge251bWJlcn0gR3JhZGF0aW9uIHN0ZXAgaW5kZXguXHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGdldFN0ZXBJbmRleChzdGVwcywgc2Vjb25kc1Bhc3NlZCwgb3B0aW9ucykge1xuICB2YXIgaSA9IGFyZ3VtZW50cy5sZW5ndGggPiAzICYmIGFyZ3VtZW50c1szXSAhPT0gdW5kZWZpbmVkID8gYXJndW1lbnRzWzNdIDogMDtcbiAgdmFyIG1pblRpbWUgPSBnZXRTdGVwTWluVGltZShzdGVwc1tpXSwgX29iamVjdFNwcmVhZCh7XG4gICAgcHJldlN0ZXA6IHN0ZXBzW2kgLSAxXSxcbiAgICB0aW1lc3RhbXA6IG9wdGlvbnMubm93IC0gc2Vjb25kc1Bhc3NlZCAqIDEwMDBcbiAgfSwgb3B0aW9ucykpOyAvLyBJZiBgbWluVGltZWAgaXNuJ3QgZGVmaW5lZCBvciBkZWR1Y2VhYmxlIGZvciB0aGlzIHN0ZXAsIHRoZW4gc3RvcC5cblxuICBpZiAobWluVGltZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGkgLSAxO1xuICB9IC8vIElmIHRoZSBgbWluVGltZWAgdGhyZXNob2xkIGZvciBtb3ZpbmcgZnJvbSBwcmV2aW91cyBzdGVwXG4gIC8vIHRvIHRoaXMgc3RlcCBpcyB0b28gaGlnaCB0aGVuIHJldHVybiB0aGUgcHJldmlvdXMgc3RlcC5cblxuXG4gIGlmIChNYXRoLmFicyhzZWNvbmRzUGFzc2VkKSA8IG1pblRpbWUpIHtcbiAgICByZXR1cm4gaSAtIDE7XG4gIH0gLy8gSWYgaXQncyB0aGUgbGFzdCBzdGVwIHRoZW4gcmV0dXJuIGl0LlxuXG5cbiAgaWYgKGkgPT09IHN0ZXBzLmxlbmd0aCAtIDEpIHtcbiAgICByZXR1cm4gaTtcbiAgfSAvLyBNb3ZlIHRvIHRoZSBuZXh0IHN0ZXAuXG5cblxuICByZXR1cm4gZ2V0U3RlcEluZGV4KHN0ZXBzLCBzZWNvbmRzUGFzc2VkLCBvcHRpb25zLCBpICsgMSk7XG59XG4vKipcclxuICogTGVhdmVzIG9ubHkgYWxsb3dlZCBzdGVwcy5cclxuICogQHBhcmFtICB7T2JqZWN0W119IHN0ZXBzXHJcbiAqIEBwYXJhbSAge3N0cmluZ1tdfSB1bml0cyAtIEFsbG93ZWQgdGltZSB1bml0cy5cclxuICogQHJldHVybiB7T2JqZWN0W119XHJcbiAqL1xuXG5cbmZ1bmN0aW9uIGZpbHRlclN0ZXBzQnlVbml0cyhzdGVwcywgdW5pdHMpIHtcbiAgcmV0dXJuIHN0ZXBzLmZpbHRlcihmdW5jdGlvbiAoX3JlZjMpIHtcbiAgICB2YXIgdW5pdCA9IF9yZWYzLnVuaXQsXG4gICAgICAgIGZvcm1hdEFzID0gX3JlZjMuZm9ybWF0QXM7XG4gICAgLy8gXCJ1bml0XCIgaXMgbm93IGNhbGxlZCBcImZvcm1hdEFzXCIuXG4gICAgdW5pdCA9IHVuaXQgfHwgZm9ybWF0QXM7IC8vIElmIHRoaXMgc3RlcCBoYXMgYSBgdW5pdGAgZGVmaW5lZFxuICAgIC8vIHRoZW4gdGhpcyBgdW5pdGAgbXVzdCBiZSBpbiB0aGUgbGlzdCBvZiBhbGxvd2VkIGB1bml0c2AuXG5cbiAgICBpZiAodW5pdCkge1xuICAgICAgcmV0dXJuIHVuaXRzLmluZGV4T2YodW5pdCkgPj0gMDtcbiAgICB9IC8vIEEgc3RlcCBpcyBub3QgcmVxdWlyZWQgdG8gc3BlY2lmeSBhIGB1bml0YDpcbiAgICAvLyBhbHRlcm5hdGl2ZWx5LCBpdCBjb3VsZCBzcGVjaWZ5IGBmb3JtYXQoKWAuXG4gICAgLy8gKHNlZSBcInR3aXR0ZXJcIiBzdHlsZSBmb3IgYW4gZXhhbXBsZSlcblxuXG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0U3RlcC5qcy5tYXAiLCJpbXBvcnQgeyBnZXRTZWNvbmRzSW5Vbml0IH0gZnJvbSAnLi91bml0cy5qcyc7XG5pbXBvcnQgeyBnZXRSb3VuZEZ1bmN0aW9uLCBnZXREaWZmUmF0aW9Ub05leHRSb3VuZGVkTnVtYmVyIH0gZnJvbSAnLi4vcm91bmQuanMnO1xuLyoqXHJcbiAqIEdldHMgdGhlIHRpbWUgdG8gbmV4dCB1cGRhdGUgZm9yIGEgc3RlcCB3aXRoIGEgdGltZSB1bml0IGRlZmluZWQuXHJcbiAqIEBwYXJhbSAge3N0cmluZ30gdW5pdFxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRhdGUg4oCUIFRoZSBkYXRlIHBhc3NlZCB0byBgLmZvcm1hdCgpYCwgY29udmVydGVkIHRvIGEgdGltZXN0YW1wLlxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IG9wdGlvbnMubm93XHJcbiAqIEBwYXJhbSAge3N0cmluZ30gW29wdGlvbnMucm91bmRdIOKAlCAodW5kb2N1bWVudGVkKSBSb3VuZGluZyBtZWNoYW5pc20uXHJcbiAqIEByZXR1cm4ge251bWJlcn0gW3RpbWVUb05leHRVcGRhdGVdXHJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lVG9OZXh0VXBkYXRlRm9yVW5pdCh1bml0LCB0aW1lc3RhbXAsIF9yZWYpIHtcbiAgdmFyIG5vdyA9IF9yZWYubm93LFxuICAgICAgcm91bmQgPSBfcmVmLnJvdW5kO1xuXG4gIC8vIEZvciBzb21lIHVuaXRzLCBsaWtlIFwibm93XCIsIHRoZXJlJ3Mgbm8gZGVmaW5lZCBhbW91bnQgb2Ygc2Vjb25kcyBpbiB0aGVtLlxuICBpZiAoIWdldFNlY29uZHNJblVuaXQodW5pdCkpIHtcbiAgICAvLyBJZiB0aGVyZSdzIG5vIGFtb3VudCBvZiBzZWNvbmRzIGRlZmluZWQgZm9yIHRoaXMgdW5pdFxuICAgIC8vIHRoZW4gdGhlIHVwZGF0ZSBpbnRlcnZhbCBjYW4ndCBiZSBkZXRlcm1pbmVkIHJlbGlhYmx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB1bml0RGVub21pbmF0b3IgPSBnZXRTZWNvbmRzSW5Vbml0KHVuaXQpICogMTAwMDtcbiAgdmFyIGZ1dHVyZSA9IHRpbWVzdGFtcCA+IG5vdztcbiAgdmFyIHByZWNpc2VBbW91bnQgPSBNYXRoLmFicyh0aW1lc3RhbXAgLSBub3cpO1xuICB2YXIgcm91bmRlZEFtb3VudCA9IGdldFJvdW5kRnVuY3Rpb24ocm91bmQpKHByZWNpc2VBbW91bnQgLyB1bml0RGVub21pbmF0b3IpICogdW5pdERlbm9taW5hdG9yO1xuXG4gIGlmIChmdXR1cmUpIHtcbiAgICBpZiAocm91bmRlZEFtb3VudCA+IDApIHtcbiAgICAgIC8vIEFtb3VudCBkZWNyZWFzZXMgd2l0aCB0aW1lLlxuICAgICAgcmV0dXJuIHByZWNpc2VBbW91bnQgLSByb3VuZGVkQW1vdW50ICsgZ2V0RGlmZlRvUHJldmlvdXNSb3VuZGVkTnVtYmVyKHJvdW5kLCB1bml0RGVub21pbmF0b3IpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSZWZyZXNoIHJpZ2h0IGFmdGVyIHRoZSB6ZXJvIHBvaW50LFxuICAgICAgLy8gd2hlbiBcImZ1dHVyZVwiIGNoYW5nZXMgdG8gXCJwYXN0XCIuXG4gICAgICByZXR1cm4gcHJlY2lzZUFtb3VudCAtIHJvdW5kZWRBbW91bnQgKyAxO1xuICAgIH1cbiAgfSAvLyBBbW91bnQgaW5jcmVhc2VzIHdpdGggdGltZS5cblxuXG4gIHJldHVybiAtKHByZWNpc2VBbW91bnQgLSByb3VuZGVkQW1vdW50KSArIGdldERpZmZUb05leHRSb3VuZGVkTnVtYmVyKHJvdW5kLCB1bml0RGVub21pbmF0b3IpO1xufVxuXG5mdW5jdGlvbiBnZXREaWZmVG9OZXh0Um91bmRlZE51bWJlcihyb3VuZCwgdW5pdERlbm9taW5hdG9yKSB7XG4gIHJldHVybiBnZXREaWZmUmF0aW9Ub05leHRSb3VuZGVkTnVtYmVyKHJvdW5kKSAqIHVuaXREZW5vbWluYXRvcjtcbn1cblxuZnVuY3Rpb24gZ2V0RGlmZlRvUHJldmlvdXNSb3VuZGVkTnVtYmVyKHJvdW5kLCB1bml0RGVub21pbmF0b3IpIHtcbiAgcmV0dXJuICgxIC0gZ2V0RGlmZlJhdGlvVG9OZXh0Um91bmRlZE51bWJlcihyb3VuZCkpICogdW5pdERlbm9taW5hdG9yICsgMTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWdldFRpbWVUb05leHRVcGRhdGVGb3JVbml0LmpzLm1hcCIsImltcG9ydCBfZ2V0VGltZVRvTmV4dFVwZGF0ZUZvclVuaXQgZnJvbSAnLi9nZXRUaW1lVG9OZXh0VXBkYXRlRm9yVW5pdC5qcyc7XG5pbXBvcnQgZ2V0U3RlcE1pblRpbWUgZnJvbSAnLi9nZXRTdGVwTWluVGltZS5qcyc7XG5pbXBvcnQgeyBnZXRSb3VuZEZ1bmN0aW9uIH0gZnJvbSAnLi4vcm91bmQuanMnOyAvLyBBIHRob3VzYW5kIHllYXJzIGlzIHByYWN0aWNhbGx5IGEgbWV0YXBob3IgZm9yIFwiaW5maW5pdHlcIi5cblxudmFyIFlFQVIgPSAzNjUgKiAyNCAqIDYwICogNjAgKiAxMDAwO1xuZXhwb3J0IHZhciBJTkZJTklUWSA9IDEwMDAgKiBZRUFSO1xuLyoqXHJcbiAqIEdldHMgdGhlIHRpbWUgdG8gbmV4dCB1cGRhdGUgZm9yIGEgZGF0ZSBhbmQgYSBzdGVwLlxyXG4gKiBAcGFyYW0gIHtudW1iZXJ9IGRhdGUg4oCUIFRoZSBkYXRlIHBhc3NlZCB0byBgLmZvcm1hdCgpYCwgY29udmVydGVkIHRvIGEgdGltZXN0YW1wLlxyXG4gKiBAcGFyYW0gIHtvYmplY3R9IHN0ZXBcclxuICogQHBhcmFtICB7b2JqZWN0fSBbb3B0aW9ucy5wcmV2aW91c1N0ZXBdXHJcbiAqIEBwYXJhbSAge29iamVjdH0gW29wdGlvbnMubmV4dFN0ZXBdXHJcbiAqIEBwYXJhbSAge251bWJlcn0gb3B0aW9ucy5ub3dcclxuICogQHBhcmFtICB7Ym9vbGVhbn0gb3B0aW9ucy5mdXR1cmVcclxuICogQHBhcmFtICB7c3RyaW5nfSBbb3B0aW9ucy5yb3VuZF0gLSAodW5kb2N1bWVudGVkKSBSb3VuZGluZyBtZWNoYW5pc20uXHJcbiAqIEByZXR1cm4ge251bWJlcn0gW3RpbWVUb05leHRVcGRhdGVdXHJcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRUaW1lVG9OZXh0VXBkYXRlKGRhdGUsIHN0ZXAsIF9yZWYpIHtcbiAgdmFyIHByZXZTdGVwID0gX3JlZi5wcmV2U3RlcCxcbiAgICAgIG5leHRTdGVwID0gX3JlZi5uZXh0U3RlcCxcbiAgICAgIG5vdyA9IF9yZWYubm93LFxuICAgICAgZnV0dXJlID0gX3JlZi5mdXR1cmUsXG4gICAgICByb3VuZCA9IF9yZWYucm91bmQ7XG4gIHZhciB0aW1lc3RhbXAgPSBkYXRlLmdldFRpbWUgPyBkYXRlLmdldFRpbWUoKSA6IGRhdGU7XG5cbiAgdmFyIGdldFRpbWVUb05leHRVcGRhdGVGb3JVbml0ID0gZnVuY3Rpb24gZ2V0VGltZVRvTmV4dFVwZGF0ZUZvclVuaXQodW5pdCkge1xuICAgIHJldHVybiBfZ2V0VGltZVRvTmV4dFVwZGF0ZUZvclVuaXQodW5pdCwgdGltZXN0YW1wLCB7XG4gICAgICBub3c6IG5vdyxcbiAgICAgIHJvdW5kOiByb3VuZFxuICAgIH0pO1xuICB9OyAvLyBGb3IgZnV0dXJlIGRhdGVzLCBzdGVwcyBtb3ZlIGZyb20gdGhlIGxhc3Qgb25lIHRvIHRoZSBmaXJzdCBvbmUsXG4gIC8vIHdoaWxlIGZvciBwYXN0IGRhdGVzLCBzdGVwcyBtb3ZlIGZyb20gdGhlIGZpcnN0IG9uZSB0byB0aGUgbGFzdCBvbmUsXG4gIC8vIGR1ZSB0byB0aGUgZmFjdCB0aGF0IHRpbWUgZmxvd3MgaW4gb25lIGRpcmVjdGlvbixcbiAgLy8gYW5kIGZ1dHVyZSBkYXRlcycgaW50ZXJ2YWwgbmF0dXJhbGx5IGJlY29tZXMgc21hbGxlclxuICAvLyB3aGlsZSBwYXN0IGRhdGVzJyBpbnRlcnZhbCBuYXR1cmFsbHkgZ3Jvd3MgbGFyZ2VyLlxuICAvL1xuICAvLyBGb3IgZnV0dXJlIGRhdGVzLCBpdCdzIHRoZSB0cmFuc2l0aW9uXG4gIC8vIGZyb20gdGhlIGN1cnJlbnQgc3RlcCB0byB0aGUgcHJldmlvdXMgc3RlcCxcbiAgLy8gdGhlcmVmb3JlIGNoZWNrIHRoZSBgbWluVGltZWAgb2YgdGhlIGN1cnJlbnQgc3RlcC5cbiAgLy9cbiAgLy8gRm9yIHBhc3QgZGF0ZXMsIGl0J3MgdGhlIHRyYW5zaXRpb25cbiAgLy8gZnJvbSB0aGUgY3VycmVudCBzdGVwIHRvIHRoZSBuZXh0IHN0ZXAsXG4gIC8vIHRoZXJlZm9yZSBjaGVjayB0aGUgYG1pblRpbWVgIG9mIHRoZSBuZXh0IHN0ZXAuXG4gIC8vXG5cblxuICB2YXIgdGltZVRvU3RlcENoYW5nZSA9IGdldFRpbWVUb1N0ZXBDaGFuZ2UoZnV0dXJlID8gc3RlcCA6IG5leHRTdGVwLCB0aW1lc3RhbXAsIHtcbiAgICBmdXR1cmU6IGZ1dHVyZSxcbiAgICBub3c6IG5vdyxcbiAgICByb3VuZDogcm91bmQsXG4gICAgcHJldlN0ZXA6IGZ1dHVyZSA/IHByZXZTdGVwIDogc3RlcCAvLyBpc0ZpcnN0U3RlcDogZnV0dXJlICYmIGlzRmlyc3RTdGVwXG5cbiAgfSk7XG5cbiAgaWYgKHRpbWVUb1N0ZXBDaGFuZ2UgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIENhbid0IHJlbGlhYmx5IGRldGVybWluZSBcInRpbWUgdG8gbmV4dCB1cGRhdGVcIlxuICAgIC8vIGlmIG5vdCBhbGwgb2YgdGhlIHN0ZXBzIHByb3ZpZGUgYG1pblRpbWVgLlxuICAgIHJldHVybjtcbiAgfVxuXG4gIHZhciB0aW1lVG9OZXh0VXBkYXRlO1xuXG4gIGlmIChzdGVwKSB7XG4gICAgaWYgKHN0ZXAuZ2V0VGltZVRvTmV4dFVwZGF0ZSkge1xuICAgICAgdGltZVRvTmV4dFVwZGF0ZSA9IHN0ZXAuZ2V0VGltZVRvTmV4dFVwZGF0ZSh0aW1lc3RhbXAsIHtcbiAgICAgICAgZ2V0VGltZVRvTmV4dFVwZGF0ZUZvclVuaXQ6IGdldFRpbWVUb05leHRVcGRhdGVGb3JVbml0LFxuICAgICAgICBnZXRSb3VuZEZ1bmN0aW9uOiBnZXRSb3VuZEZ1bmN0aW9uLFxuICAgICAgICBub3c6IG5vdyxcbiAgICAgICAgZnV0dXJlOiBmdXR1cmUsXG4gICAgICAgIHJvdW5kOiByb3VuZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRpbWVUb05leHRVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gXCJ1bml0XCIgaXMgbm93IGNhbGxlZCBcImZvcm1hdEFzXCIuXG4gICAgICB2YXIgdW5pdCA9IHN0ZXAudW5pdCB8fCBzdGVwLmZvcm1hdEFzO1xuXG4gICAgICBpZiAodW5pdCkge1xuICAgICAgICAvLyBGb3Igc29tZSB1bml0cywgbGlrZSBcIm5vd1wiLCB0aGVyZSdzIG5vIGRlZmluZWQgYW1vdW50IG9mIHNlY29uZHMgaW4gdGhlbS5cbiAgICAgICAgLy8gSW4gc3VjaCBjYXNlcywgYGdldFRpbWVUb05leHRVcGRhdGVGb3JVbml0KClgIHJldHVybnMgYHVuZGVmaW5lZGAsXG4gICAgICAgIC8vIGFuZCB0aGUgbmV4dCBzdGVwJ3MgYG1pblRpbWVgIGNvdWxkIGJlIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSB1cGRhdGUgaW50ZXJ2YWw6XG4gICAgICAgIC8vIGl0IHdpbGwganVzdCBhc3N1bWUgdGhhdCB0aGUgbGFiZWwgbmV2ZXIgY2hhbmdlcyBmb3IgdGhpcyBzdGVwLlxuICAgICAgICB0aW1lVG9OZXh0VXBkYXRlID0gZ2V0VGltZVRvTmV4dFVwZGF0ZUZvclVuaXQodW5pdCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgaWYgKHRpbWVUb05leHRVcGRhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0aW1lVG9TdGVwQ2hhbmdlO1xuICB9XG5cbiAgcmV0dXJuIE1hdGgubWluKHRpbWVUb05leHRVcGRhdGUsIHRpbWVUb1N0ZXBDaGFuZ2UpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldFN0ZXBDaGFuZ2VzQXQoY3VycmVudE9yTmV4dFN0ZXAsIHRpbWVzdGFtcCwgX3JlZjIpIHtcbiAgdmFyIG5vdyA9IF9yZWYyLm5vdyxcbiAgICAgIGZ1dHVyZSA9IF9yZWYyLmZ1dHVyZSxcbiAgICAgIHJvdW5kID0gX3JlZjIucm91bmQsXG4gICAgICBwcmV2U3RlcCA9IF9yZWYyLnByZXZTdGVwO1xuICAvLyBUaGUgZmlyc3Qgc3RlcCdzIGBtaW5UaW1lYCBpcyBgMGAgYnkgZGVmYXVsdC5cbiAgLy8gSXQgZG9lc24ndCBcImNoYW5nZVwiIHN0ZXBzIGF0IHplcm8gcG9pbnRcbiAgLy8gYnV0IGl0IGRvZXMgY2hhbmdlIHRoZSB3b3JkaW5nIHdoZW4gc3dpdGNoaW5nXG4gIC8vIGZyb20gXCJmdXR1cmVcIiB0byBcInBhc3RcIjogXCJpbiAuLi5cIiAtPiBcIi4uLiBhZ29cIi5cbiAgLy8gVGhlcmVmb3JlLCB0aGUgbGFiZWwgc2hvdWxkIGJlIHVwZGF0ZWQgYXQgemVyby1wb2ludCB0b28uXG4gIHZhciBtaW5UaW1lID0gZ2V0U3RlcE1pblRpbWUoY3VycmVudE9yTmV4dFN0ZXAsIHtcbiAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcCxcbiAgICBub3c6IG5vdyxcbiAgICBmdXR1cmU6IGZ1dHVyZSxcbiAgICByb3VuZDogcm91bmQsXG4gICAgcHJldlN0ZXA6IHByZXZTdGVwXG4gIH0pO1xuXG4gIGlmIChtaW5UaW1lID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAoZnV0dXJlKSB7XG4gICAgLy8gVGhlIHN0ZXAgY2hhbmdlcyB0byB0aGUgcHJldmlvdXMgc3RlcFxuICAgIC8vIGFzIHNvb24gYXMgYHRpbWVzdGFtcCAtIG5vd2AgYmVjb21lc1xuICAgIC8vIGxlc3MgdGhhbiB0aGUgYG1pblRpbWVgIG9mIHRoZSBjdXJyZW50IHN0ZXA6XG4gICAgLy8gYHRpbWVzdGFtcCAtIG5vdyA9PT0gbWluVGltZSAtIDFgXG4gICAgLy8gPT4gYG5vdyA9PT0gdGltZXN0YW1wIC0gbWluVGltZSArIDFgLlxuICAgIHJldHVybiB0aW1lc3RhbXAgLSBtaW5UaW1lICogMTAwMCArIDE7XG4gIH0gZWxzZSB7XG4gICAgLy8gVGhlIHN0ZXAgY2hhbmdlcyB0byB0aGUgbmV4dCBzdGVwXG4gICAgLy8gYXMgc29vbiBhcyBgbm93IC0gdGltZXN0YW1wYCBiZWNvbWVzXG4gICAgLy8gZXF1YWwgdG8gYG1pblRpbWVgIG9mIHRoZSBuZXh0IHN0ZXA6XG4gICAgLy8gYG5vdyAtIHRpbWVzdGFtcCA9PT0gbWluVGltZWBcbiAgICAvLyA9PiBgbm93ID09PSB0aW1lc3RhbXAgKyBtaW5UaW1lYC5cbiAgICAvLyBUaGlzIGlzIGEgc3BlY2lhbCBjYXNlIHdoZW4gZG91YmxlLXVwZGF0ZSBjb3VsZCBiZSBza2lwcGVkLlxuICAgIGlmIChtaW5UaW1lID09PSAwICYmIHRpbWVzdGFtcCA9PT0gbm93KSB7XG4gICAgICByZXR1cm4gSU5GSU5JVFk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbWVzdGFtcCArIG1pblRpbWUgKiAxMDAwO1xuICB9XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0VGltZVRvU3RlcENoYW5nZShzdGVwLCB0aW1lc3RhbXAsIF9yZWYzKSB7XG4gIHZhciBub3cgPSBfcmVmMy5ub3csXG4gICAgICBmdXR1cmUgPSBfcmVmMy5mdXR1cmUsXG4gICAgICByb3VuZCA9IF9yZWYzLnJvdW5kLFxuICAgICAgcHJldlN0ZXAgPSBfcmVmMy5wcmV2U3RlcDtcblxuICBpZiAoc3RlcCkge1xuICAgIHZhciBzdGVwQ2hhbmdlc0F0ID0gZ2V0U3RlcENoYW5nZXNBdChzdGVwLCB0aW1lc3RhbXAsIHtcbiAgICAgIG5vdzogbm93LFxuICAgICAgZnV0dXJlOiBmdXR1cmUsXG4gICAgICByb3VuZDogcm91bmQsXG4gICAgICBwcmV2U3RlcDogcHJldlN0ZXBcbiAgICB9KTtcblxuICAgIGlmIChzdGVwQ2hhbmdlc0F0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXR1cm4gc3RlcENoYW5nZXNBdCAtIG5vdztcbiAgfSBlbHNlIHtcbiAgICBpZiAoZnV0dXJlKSB7XG4gICAgICAvLyBObyBzdGVwLlxuICAgICAgLy8gVXBkYXRlIHJpZ2h0IGFmdGVyIHplcm8gcG9pbnQsIHdoZW4gaXQgY2hhbmdlcyBmcm9tIFwiZnV0dXJlXCIgdG8gXCJwYXN0XCIuXG4gICAgICByZXR1cm4gdGltZXN0YW1wIC0gbm93ICsgMTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVGhlIGxhc3Qgc3RlcCBkb2Vzbid0IGV2ZXIgY2hhbmdlIHdoZW4gYGRhdGVgIGlzIGluIHRoZSBwYXN0LlxuICAgICAgcmV0dXJuIElORklOSVRZO1xuICAgIH1cbiAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Z2V0VGltZVRvTmV4dFVwZGF0ZS5qcy5tYXAiLCIvLyBGb3IgYWxsIGxvY2FsZXMgYWRkZWRcbi8vIHRoZWlyIHJlbGF0aXZlIHRpbWUgZm9ybWF0dGVyIG1lc3NhZ2VzIHdpbGwgYmUgc3RvcmVkIGhlcmUuXG52YXIgbG9jYWxlc0RhdGEgPSB7fTtcbmV4cG9ydCBmdW5jdGlvbiBnZXRMb2NhbGVEYXRhKGxvY2FsZSkge1xuICByZXR1cm4gbG9jYWxlc0RhdGFbbG9jYWxlXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBhZGRMb2NhbGVEYXRhKGxvY2FsZURhdGEpIHtcbiAgaWYgKCFsb2NhbGVEYXRhKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdbamF2YXNjcmlwdC10aW1lLWFnb10gTm8gbG9jYWxlIGRhdGEgcGFzc2VkLicpO1xuICB9IC8vIFRoaXMgbG9jYWxlIGRhdGEgaXMgc3RvcmVkIGluIGEgZ2xvYmFsIHZhcmlhYmxlXG4gIC8vIGFuZCBsYXRlciB1c2VkIHdoZW4gY2FsbGluZyBgLmZvcm1hdCh0aW1lKWAuXG5cblxuICBsb2NhbGVzRGF0YVtsb2NhbGVEYXRhLmxvY2FsZV0gPSBsb2NhbGVEYXRhO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TG9jYWxlRGF0YVN0b3JlLmpzLm1hcCIsIi8vIGp1c3Qgbm93XG4vLyAxIHNlY29uZCBhZ29cbi8vIDIgc2Vjb25kcyBhZ29cbi8vIOKAplxuLy8gNTkgc2Vjb25kcyBhZ29cbi8vIDEgbWludXRlIGFnb1xuLy8gMiBtaW51dGVzIGFnb1xuLy8g4oCmXG4vLyA1OSBtaW51dGVzIGFnb1xuLy8gMSBob3VyIGFnb1xuLy8gMiBob3VycyBhZ29cbi8vIOKAplxuLy8gMjQgaG91cnMgYWdvXG4vLyAxIGRheSBhZ29cbi8vIDIgZGF5cyBhZ29cbi8vIOKAplxuLy8gNiBkYXlzIGFnb1xuLy8gMSB3ZWVrIGFnb1xuLy8gMiB3ZWVrcyBhZ29cbi8vIOKAplxuLy8gMyB3ZWVrcyBhZ29cbi8vIDEgbW9udGggYWdvXG4vLyAyIG1vbnRocyBhZ29cbi8vIOKAplxuLy8gMTEgbW9udGhzIGFnb1xuLy8gMSB5ZWFyIGFnb1xuLy8gMiB5ZWFycyBhZ29cbi8vIOKAplxuZXhwb3J0IGRlZmF1bHQgW3tcbiAgZm9ybWF0QXM6ICdub3cnXG59LCB7XG4gIGZvcm1hdEFzOiAnc2Vjb25kJ1xufSwge1xuICBmb3JtYXRBczogJ21pbnV0ZSdcbn0sIHtcbiAgZm9ybWF0QXM6ICdob3VyJ1xufSwge1xuICBmb3JtYXRBczogJ2RheSdcbn0sIHtcbiAgZm9ybWF0QXM6ICd3ZWVrJ1xufSwge1xuICBmb3JtYXRBczogJ21vbnRoJ1xufSwge1xuICBmb3JtYXRBczogJ3llYXInXG59XTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdW5kLmpzLm1hcCIsImltcG9ydCByb3VuZCBmcm9tICcuLi9zdGVwcy9yb3VuZC5qcyc7IC8vIGp1c3Qgbm93XG4vLyAxIHNlY29uZCBhZ29cbi8vIDIgc2Vjb25kcyBhZ29cbi8vIOKAplxuLy8gNTkgc2Vjb25kcyBhZ29cbi8vIDEgbWludXRlIGFnb1xuLy8gMiBtaW51dGVzIGFnb1xuLy8g4oCmXG4vLyA1OSBtaW51dGVzIGFnb1xuLy8gMSBtaW51dGUgYWdvXG4vLyAyIG1pbnV0ZXMgYWdvXG4vLyDigKZcbi8vIDU5IG1pbnV0ZXMgYWdvXG4vLyAxIGhvdXIgYWdvXG4vLyAyIGhvdXJzIGFnb1xuLy8g4oCmXG4vLyAyNCBob3VycyBhZ29cbi8vIDEgZGF5IGFnb1xuLy8gMiBkYXlzIGFnb1xuLy8g4oCmXG4vLyA2IGRheXMgYWdvXG4vLyAxIHdlZWsgYWdvXG4vLyAyIHdlZWtzIGFnb1xuLy8gMyB3ZWVrcyBhZ29cbi8vIDQgd2Vla3MgYWdvXG4vLyAxIG1vbnRoIGFnb1xuLy8gMiBtb250aHMgYWdvXG4vLyDigKZcbi8vIDExIG1vbnRocyBhZ29cbi8vIDEgeWVhciBhZ29cbi8vIDIgeWVhcnMgYWdvXG4vLyDigKZcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgc3RlcHM6IHJvdW5kLFxuICBsYWJlbHM6ICdsb25nJ1xufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXJvdW5kLmpzLm1hcCIsImZ1bmN0aW9uIG93bktleXMob2JqZWN0LCBlbnVtZXJhYmxlT25seSkgeyB2YXIga2V5cyA9IE9iamVjdC5rZXlzKG9iamVjdCk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBzeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhvYmplY3QpOyBlbnVtZXJhYmxlT25seSAmJiAoc3ltYm9scyA9IHN5bWJvbHMuZmlsdGVyKGZ1bmN0aW9uIChzeW0pIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqZWN0LCBzeW0pLmVudW1lcmFibGU7IH0pKSwga2V5cy5wdXNoLmFwcGx5KGtleXMsIHN5bWJvbHMpOyB9IHJldHVybiBrZXlzOyB9XG5cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBudWxsICE9IGFyZ3VtZW50c1tpXSA/IGFyZ3VtZW50c1tpXSA6IHt9OyBpICUgMiA/IG93bktleXMoT2JqZWN0KHNvdXJjZSksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgX2RlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBzb3VyY2Vba2V5XSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHNvdXJjZSkpIDogb3duS2V5cyhPYmplY3Qoc291cmNlKSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihzb3VyY2UsIGtleSkpOyB9KTsgfSByZXR1cm4gdGFyZ2V0OyB9XG5cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHsgaWYgKGtleSBpbiBvYmopIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7IHZhbHVlOiB2YWx1ZSwgZW51bWVyYWJsZTogdHJ1ZSwgY29uZmlndXJhYmxlOiB0cnVlLCB3cml0YWJsZTogdHJ1ZSB9KTsgfSBlbHNlIHsgb2JqW2tleV0gPSB2YWx1ZTsgfSByZXR1cm4gb2JqOyB9XG5cbmltcG9ydCByb3VuZCBmcm9tICcuL3JvdW5kLmpzJzsgLy8ganVzdCBub3dcbi8vIDEgbWludXRlIGFnb1xuLy8gMiBtaW51dGVzIGFnb1xuLy8g4oCmXG4vLyA1OSBtaW51dGVzIGFnb1xuLy8gMSBtaW51dGUgYWdvXG4vLyAyIG1pbnV0ZXMgYWdvXG4vLyDigKZcbi8vIDU5IG1pbnV0ZXMgYWdvXG4vLyAxIGhvdXIgYWdvXG4vLyAyIGhvdXJzIGFnb1xuLy8g4oCmXG4vLyAyNCBob3VycyBhZ29cbi8vIDEgZGF5IGFnb1xuLy8gMiBkYXlzIGFnb1xuLy8g4oCmXG4vLyA2IGRheXMgYWdvXG4vLyAxIHdlZWsgYWdvXG4vLyAyIHdlZWtzIGFnb1xuLy8gMyB3ZWVrcyBhZ29cbi8vIDQgd2Vla3MgYWdvXG4vLyAxIG1vbnRoIGFnb1xuLy8gMiBtb250aHMgYWdvXG4vLyDigKZcbi8vIDExIG1vbnRocyBhZ29cbi8vIDEgeWVhciBhZ29cbi8vIDIgeWVhcnMgYWdvXG4vLyDigKZcbi8vXG5cbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgcm91bmQpLCB7fSwge1xuICAvLyBTa2lwIFwic2Vjb25kc1wiLlxuICBzdGVwczogcm91bmQuc3RlcHMuZmlsdGVyKGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXAuZm9ybWF0QXMgIT09ICdzZWNvbmQnO1xuICB9KVxufSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1yb3VuZE1pbnV0ZS5qcy5tYXAiLCJpbXBvcnQgeyBtaW51dGUsIGhvdXIsIGRheSwgd2VlaywgbW9udGgsIHllYXIgfSBmcm9tICcuL3VuaXRzLmpzJzsgLy8gXCJmYWN0b3JcIiBpcyBhIGxlZ2FjeSBwcm9wZXJ0eS5cbi8vIERldmVsb3BlcnMgc2hvdWxkbid0IG5lZWQgdG8gdXNlIGl0IGluIHRoZWlyIGN1c3RvbSBzdGVwcy5cbi8vIFwidGhyZXNob2xkXCIgaXMgYSBsZWdhY3kgbmFtZSBvZiBcIm1pblwiLlxuLy8gRGV2ZWxvcGVycyBzaG91bGQgdXNlIFwibWluXCIgcHJvcGVydHkgbmFtZSBpbnN0ZWFkIG9mIFwidGhyZXNob2xkXCIuXG4vLyBcInRocmVzaG9sZF9mb3JfaWRPclVuaXQ6IHZhbHVlXCIgaXMgYSBsZWdhY3kgd2F5IG9mIHNwZWNpZnlpbmcgXCJtaW46IHsgaWQ6IHZhbHVlIH1cIi5cbi8vIERldmVsb3BlcnMgc2hvdWxkIHVzZSBcIm1pblwiIHByb3BlcnR5IGluc3RlYWQgb2YgXCJ0aHJlc2hvbGRcIi5cbi8vIGp1c3Qgbm93XG4vLyAxIG1pbnV0ZSBhZ29cbi8vIDIgbWludXRlcyBhZ29cbi8vIDUgbWludXRlcyBhZ29cbi8vIDEwIG1pbnV0ZXMgYWdvXG4vLyAxNSBtaW51dGVzIGFnb1xuLy8gMjAgbWludXRlcyBhZ29cbi8vIOKAplxuLy8gNTAgbWludXRlcyBhZ29cbi8vIGFuIGhvdXIgYWdvXG4vLyAyIGhvdXJzIGFnb1xuLy8g4oCmXG4vLyAyMCBob3VycyBhZ29cbi8vIGEgZGF5IGFnb1xuLy8gMiBkYXlzIGFnb1xuLy8gNSBkYXlzIGFnb1xuLy8gYSB3ZWVrIGFnb1xuLy8gMiB3ZWVrcyBhZ29cbi8vIDMgd2Vla3MgYWdvXG4vLyBhIG1vbnRoIGFnb1xuLy8gMiBtb250aHMgYWdvXG4vLyA0IG1vbnRocyBhZ29cbi8vIGEgeWVhciBhZ29cbi8vIDIgeWVhcnMgYWdvXG4vLyDigKZcblxuZXhwb3J0IGRlZmF1bHQgW3tcbiAgLy8gVGhpcyBzdGVwIHJldHVybnMgdGhlIGFtb3VudCBvZiBzZWNvbmRzXG4gIC8vIGJ5IGRpdmlkaW5nIHRoZSBhbW91bnQgb2Ygc2Vjb25kcyBieSBgMWAuXG4gIGZhY3RvcjogMSxcbiAgLy8gXCJub3dcIiBsYWJlbHMgYXJlIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIG91dHB1dC5cbiAgdW5pdDogJ25vdydcbn0sIHtcbiAgLy8gV2hlbiB0aGUgbGFuZ3VhZ2UgZG9lc24ndCBzdXBwb3J0IGBub3dgIHVuaXQsXG4gIC8vIHRoZSBmaXJzdCBzdGVwIGlzIGlnbm9yZWQsIGFuZCBpdCB1c2VzIHRoaXMgYHNlY29uZGAgdW5pdC5cbiAgdGhyZXNob2xkOiAxLFxuICAvLyBgdGhyZXNob2xkX2Zvcl9ub3dgIHNob3VsZCBiZSB0aGUgc2FtZSBhcyBgdGhyZXNob2xkYCBvbiBtaW51dGVzLlxuICB0aHJlc2hvbGRfZm9yX25vdzogNDUuNSxcbiAgLy8gVGhpcyBzdGVwIHJldHVybnMgdGhlIGFtb3VudCBvZiBzZWNvbmRzXG4gIC8vIGJ5IGRpdmlkaW5nIHRoZSBhbW91bnQgb2Ygc2Vjb25kcyBieSBgMWAuXG4gIGZhY3RvcjogMSxcbiAgLy8gXCJzZWNvbmRcIiBsYWJlbHMgYXJlIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIG91dHB1dC5cbiAgdW5pdDogJ3NlY29uZCdcbn0sIHtcbiAgLy8gYHRocmVzaG9sZGAgc2hvdWxkIGJlIHRoZSBzYW1lIGFzIGB0aHJlc2hvbGRfZm9yX25vd2Agb24gc2Vjb25kcy5cbiAgdGhyZXNob2xkOiA0NS41LFxuICAvLyBSZXR1cm4gdGhlIGFtb3VudCBvZiBtaW51dGVzIGJ5IGRpdmlkaW5nIHRoZSBhbW91bnRcbiAgLy8gb2Ygc2Vjb25kcyBieSB0aGUgYW1vdW50IG9mIHNlY29uZHMgaW4gYSBtaW51dGUuXG4gIGZhY3RvcjogbWludXRlLFxuICAvLyBcIm1pbnV0ZVwiIGxhYmVscyBhcmUgdXNlZCBmb3IgZm9ybWF0dGluZyB0aGUgb3V0cHV0LlxuICB1bml0OiAnbWludXRlJ1xufSwge1xuICAvLyBUaGlzIHN0ZXAgaXMgZWZmZWN0aXZlIHN0YXJ0aW5nIGZyb20gMi41IG1pbnV0ZXMuXG4gIHRocmVzaG9sZDogMi41ICogbWludXRlLFxuICAvLyBBbGxvdyBvbmx5IDUtbWludXRlIGluY3JlbWVudHMgb2YgbWludXRlcyBzdGFydGluZyBmcm9tIDIuNSBtaW51dGVzLlxuICAvLyBgZ3JhbnVsYXJpdHlgIOKAlCAoYWR2YW5jZWQpIFRpbWUgaW50ZXJ2YWwgdmFsdWUgXCJncmFudWxhcml0eVwiLlxuICAvLyBGb3IgZXhhbXBsZSwgaXQgY291bGQgYmUgc2V0IHRvIGA1YCBmb3IgbWludXRlcyB0byBhbGxvdyBvbmx5IDUtbWludXRlIGluY3JlbWVudHNcbiAgLy8gd2hlbiBmb3JtYXR0aW5nIHRpbWUgaW50ZXJ2YWxzOiBgMCBtaW51dGVzYCwgYDUgbWludXRlc2AsIGAxMCBtaW51dGVzYCwgZXRjLlxuICAvLyBQZXJoYXBzIHRoaXMgZmVhdHVyZSB3aWxsIGJlIHJlbW92ZWQgYmVjYXVzZSB0aGVyZSBzZWVtIHRvIGJlIG5vIHVzZSBjYXNlc1xuICAvLyBvZiBpdCBpbiB0aGUgcmVhbCB3b3JsZC5cbiAgZ3JhbnVsYXJpdHk6IDUsXG4gIC8vIFJldHVybiB0aGUgYW1vdW50IG9mIG1pbnV0ZXMgYnkgZGl2aWRpbmcgdGhlIGFtb3VudFxuICAvLyBvZiBzZWNvbmRzIGJ5IHRoZSBhbW91bnQgb2Ygc2Vjb25kcyBpbiBhIG1pbnV0ZS5cbiAgZmFjdG9yOiBtaW51dGUsXG4gIC8vIFwibWludXRlXCIgbGFiZWxzIGFyZSB1c2VkIGZvciBmb3JtYXR0aW5nIHRoZSBvdXRwdXQuXG4gIHVuaXQ6ICdtaW51dGUnXG59LCB7XG4gIC8vIFRoaXMgc3RlcCBpcyBlZmZlY3RpdmUgc3RhcnRpbmcgZnJvbSAyMi41IG1pbnV0ZXMuXG4gIHRocmVzaG9sZDogMjIuNSAqIG1pbnV0ZSxcbiAgLy8gUmV0dXJuIHRoZSBhbW91bnQgb2YgbWludXRlcyBieSBkaXZpZGluZyB0aGUgYW1vdW50XG4gIC8vIG9mIHNlY29uZHMgYnkgdGhlIGFtb3VudCBvZiBzZWNvbmRzIGluICBoYWxmLWFuLWhvdXIuXG4gIGZhY3RvcjogMC41ICogaG91cixcbiAgLy8gXCJoYWxmLWhvdXJcIiBsYWJlbHMgYXJlIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIG91dHB1dC5cbiAgLy8gKGlmIGF2YWlsYWJsZSwgd2hpY2ggaXMgbm8gbG9uZ2VyIHRoZSBjYXNlKVxuICB1bml0OiAnaGFsZi1ob3VyJ1xufSwge1xuICAvLyBUaGlzIHN0ZXAgaXMgZWZmZWN0aXZlIHN0YXJ0aW5nIGZyb20gNDIuNSBtaW51dGVzLlxuICB0aHJlc2hvbGQ6IDQyLjUgKiBtaW51dGUsXG4gIHRocmVzaG9sZF9mb3JfbWludXRlOiA1Mi41ICogbWludXRlLFxuICAvLyBSZXR1cm4gdGhlIGFtb3VudCBvZiBtaW51dGVzIGJ5IGRpdmlkaW5nIHRoZSBhbW91bnRcbiAgLy8gb2Ygc2Vjb25kcyBieSB0aGUgYW1vdW50IG9mIHNlY29uZHMgaW4gYW4gaG91ci5cbiAgZmFjdG9yOiBob3VyLFxuICAvLyBcImhvdXJcIiBsYWJlbHMgYXJlIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIG91dHB1dC5cbiAgdW5pdDogJ2hvdXInXG59LCB7XG4gIC8vIFRoaXMgc3RlcCBpcyBlZmZlY3RpdmUgc3RhcnRpbmcgZnJvbSAyMC41IGhvdXJzLlxuICB0aHJlc2hvbGQ6IDIwLjUgLyAyNCAqIGRheSxcbiAgLy8gUmV0dXJuIHRoZSBhbW91bnQgb2YgbWludXRlcyBieSBkaXZpZGluZyB0aGUgYW1vdW50XG4gIC8vIG9mIHNlY29uZHMgYnkgdGhlIGFtb3VudCBvZiBzZWNvbmRzIGluIGEgZGF5LlxuICBmYWN0b3I6IGRheSxcbiAgLy8gXCJkYXlcIiBsYWJlbHMgYXJlIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIG91dHB1dC5cbiAgdW5pdDogJ2RheSdcbn0sIHtcbiAgLy8gVGhpcyBzdGVwIGlzIGVmZmVjdGl2ZSBzdGFydGluZyBmcm9tIDUuNSBkYXlzLlxuICB0aHJlc2hvbGQ6IDUuNSAqIGRheSxcbiAgLy8gUmV0dXJuIHRoZSBhbW91bnQgb2YgbWludXRlcyBieSBkaXZpZGluZyB0aGUgYW1vdW50XG4gIC8vIG9mIHNlY29uZHMgYnkgdGhlIGFtb3VudCBvZiBzZWNvbmRzIGluIGEgd2Vlay5cbiAgZmFjdG9yOiB3ZWVrLFxuICAvLyBcIndlZWtcIiBsYWJlbHMgYXJlIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIG91dHB1dC5cbiAgdW5pdDogJ3dlZWsnXG59LCB7XG4gIC8vIFRoaXMgc3RlcCBpcyBlZmZlY3RpdmUgc3RhcnRpbmcgZnJvbSAzLjUgd2Vla3MuXG4gIHRocmVzaG9sZDogMy41ICogd2VlayxcbiAgLy8gUmV0dXJuIHRoZSBhbW91bnQgb2YgbWludXRlcyBieSBkaXZpZGluZyB0aGUgYW1vdW50XG4gIC8vIG9mIHNlY29uZHMgYnkgdGhlIGFtb3VudCBvZiBzZWNvbmRzIGluIGEgbW9udGguXG4gIGZhY3RvcjogbW9udGgsXG4gIC8vIFwibW9udGhcIiBsYWJlbHMgYXJlIHVzZWQgZm9yIGZvcm1hdHRpbmcgdGhlIG91dHB1dC5cbiAgdW5pdDogJ21vbnRoJ1xufSwge1xuICAvLyBUaGlzIHN0ZXAgaXMgZWZmZWN0aXZlIHN0YXJ0aW5nIGZyb20gMTAuNSBtb250aHMuXG4gIHRocmVzaG9sZDogMTAuNSAqIG1vbnRoLFxuICAvLyBSZXR1cm4gdGhlIGFtb3VudCBvZiBtaW51dGVzIGJ5IGRpdmlkaW5nIHRoZSBhbW91bnRcbiAgLy8gb2Ygc2Vjb25kcyBieSB0aGUgYW1vdW50IG9mIHNlY29uZHMgaW4gYSB5ZWFyLlxuICBmYWN0b3I6IHllYXIsXG4gIC8vIFwieWVhclwiIGxhYmVscyBhcmUgdXNlZCBmb3IgZm9ybWF0dGluZyB0aGUgb3V0cHV0LlxuICB1bml0OiAneWVhcidcbn1dO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwcm94aW1hdGUuanMubWFwIiwiaW1wb3J0IGFwcHJveGltYXRlIGZyb20gJy4uL3N0ZXBzL2FwcHJveGltYXRlLmpzJzsgLy8gXCJncmFkYXRpb25cIiBpcyBhIGxlZ2FjeSBuYW1lIGZvciBcInN0ZXBzXCIuXG4vLyBJdCdzIGhlcmUganVzdCBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHkuXG4vLyBVc2UgXCJzdGVwc1wiIG5hbWUgaW5zdGVhZC5cbi8vIFwiZmxhdm91clwiIGlzIGEgbGVnYWN5IG5hbWUgZm9yIFwibGFiZWxzXCIuXG4vLyBJdCdzIGhlcmUganVzdCBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHkuXG4vLyBVc2UgXCJsYWJlbHNcIiBuYW1lIGluc3RlYWQuXG4vLyBcInVuaXRzXCIgaXMgYSBsZWdhY3kgcHJvcGVydHkuXG4vLyBJdCdzIGhlcmUganVzdCBmb3IgbGVnYWN5IGNvbXBhdGliaWxpdHkuXG4vLyBEZXZlbG9wZXJzIHNob3VsZG4ndCBuZWVkIHRvIHVzZSBpdCBpbiB0aGVpciBjdXN0b20gc3R5bGVzLlxuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdyYWRhdGlvbjogYXBwcm94aW1hdGUsXG4gIGZsYXZvdXI6ICdsb25nJyxcbiAgdW5pdHM6IFsnbm93JywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ3llYXInXVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcHJveGltYXRlLmpzLm1hcCIsImltcG9ydCBhcHByb3hpbWF0ZSBmcm9tICcuLi9zdGVwcy9hcHByb3hpbWF0ZS5qcyc7IC8vIFwiZ3JhZGF0aW9uXCIgaXMgYSBsZWdhY3kgbmFtZSBmb3IgXCJzdGVwc1wiLlxuLy8gSXQncyBoZXJlIGp1c3QgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5LlxuLy8gVXNlIFwic3RlcHNcIiBuYW1lIGluc3RlYWQuXG4vLyBcImZsYXZvdXJcIiBpcyBhIGxlZ2FjeSBuYW1lIGZvciBcImxhYmVsc1wiLlxuLy8gSXQncyBoZXJlIGp1c3QgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5LlxuLy8gVXNlIFwibGFiZWxzXCIgbmFtZSBpbnN0ZWFkLlxuLy8gXCJ1bml0c1wiIGlzIGEgbGVnYWN5IHByb3BlcnR5LlxuLy8gSXQncyBoZXJlIGp1c3QgZm9yIGxlZ2FjeSBjb21wYXRpYmlsaXR5LlxuLy8gRGV2ZWxvcGVycyBzaG91bGRuJ3QgbmVlZCB0byB1c2UgaXQgaW4gdGhlaXIgY3VzdG9tIHN0eWxlcy5cbi8vIFNpbWlsYXIgdG8gdGhlIGRlZmF1bHQgc3R5bGUgYnV0IHdpdGggXCJhZ29cIiBvbWl0dGVkLlxuLy9cbi8vIGp1c3Qgbm93XG4vLyA1IG1pbnV0ZXNcbi8vIDEwIG1pbnV0ZXNcbi8vIDE1IG1pbnV0ZXNcbi8vIDIwIG1pbnV0ZXNcbi8vIGFuIGhvdXJcbi8vIDIgaG91cnNcbi8vIOKAplxuLy8gMjAgaG91cnNcbi8vIDEgZGF5XG4vLyAyIGRheXNcbi8vIGEgd2Vla1xuLy8gMiB3ZWVrc1xuLy8gMyB3ZWVrc1xuLy8gYSBtb250aFxuLy8gMiBtb250aHNcbi8vIDMgbW9udGhzXG4vLyA0IG1vbnRoc1xuLy8gYSB5ZWFyXG4vLyAyIHllYXJzXG4vL1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIGdyYWRhdGlvbjogYXBwcm94aW1hdGUsXG4gIGZsYXZvdXI6ICdsb25nLXRpbWUnLFxuICB1bml0czogWydub3cnLCAnbWludXRlJywgJ2hvdXInLCAnZGF5JywgJ3dlZWsnLCAnbW9udGgnLCAneWVhciddXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwcm94aW1hdGVUaW1lLmpzLm1hcCIsIi8vIExvb2tzIGxpa2UgdGhpcyBvbmUncyBkZXByZWNhdGVkLlxuLy8gLyoqXG4vLyAgKiBSZXR1cm5zIGEgc3RlcCBjb3JyZXNwb25kaW5nIHRvIHRoZSB1bml0LlxuLy8gICogQHBhcmFtICB7T2JqZWN0W119IHN0ZXBzXG4vLyAgKiBAcGFyYW0gIHtzdHJpbmd9IHVuaXRcbi8vICAqIEByZXR1cm4gez9PYmplY3R9XG4vLyAgKi9cbi8vIGV4cG9ydCBmdW5jdGlvbiBnZXRTdGVwRm9yVW5pdChzdGVwcywgdW5pdCkge1xuLy8gXHRmb3IgKGNvbnN0IHN0ZXAgb2Ygc3RlcHMpIHtcbi8vIFx0XHRpZiAoc3RlcC51bml0ID09PSB1bml0KSB7XG4vLyBcdFx0XHRyZXR1cm4gc3RlcFxuLy8gXHRcdH1cbi8vIFx0fVxuLy8gfVxuLy8gTG9va3MgbGlrZSB0aGlzIG9uZSB3b24ndCBiZSB1c2VkIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG5cbi8qKlxyXG4gKiBDb252ZXJ0cyB2YWx1ZSB0byBhIGBEYXRlYFxyXG4gKiBAcGFyYW0geyhudW1iZXJ8RGF0ZSl9IHZhbHVlXHJcbiAqIEByZXR1cm4ge0RhdGV9XHJcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldERhdGUodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgRGF0ZSA/IHZhbHVlIDogbmV3IERhdGUodmFsdWUpO1xufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aGVscGVycy5qcy5tYXAiLCJpbXBvcnQgeyBkYXksIGdldERhdGUgfSBmcm9tICcuLi9zdGVwcy9pbmRleC5qcyc7XG5pbXBvcnQgeyBpbnRsRGF0ZVRpbWVGb3JtYXRTdXBwb3J0ZWQgfSBmcm9tICcuLi9sb2NhbGUuanMnOyAvLyBGb3IgY29tcGF0aWJpbGl0eSB3aXRoIHRoZSBvbGQgdmVyc2lvbnMgb2YgdGhpcyBsaWJyYXJ5LlxuXG5pbXBvcnQgcmVuYW1lTGVnYWN5UHJvcGVydGllcyBmcm9tICcuL3JlbmFtZUxlZ2FjeVByb3BlcnRpZXMuanMnOyAvLyBUd2l0dGVyLXN0eWxlIHJlbGF0aXZlIGRhdGUvdGltZSBmb3JtYXR0aW5nLlxuLy8gKFwiMW1cIiwgXCIyaFwiLCBcIk1hciAzXCIsIFwiQXByIDQsIDIwMTJcIikuXG4vL1xuLy8gU2Vjb25kcywgbWludXRlcyBvciBob3VycyBhcmUgc2hvd24gZm9yIHNob3J0ZXIgaW50ZXJ2YWxzLFxuLy8gYW5kIGxvbmdlciBpbnRlcnZhbHMgYXJlIGZvcm1hdHRlZCB1c2luZyBmdWxsIGRhdGUgZm9ybWF0LlxuXG52YXIgc3RlcHMgPSBbe1xuICBmb3JtYXRBczogJ3NlY29uZCdcbn0sIHtcbiAgZm9ybWF0QXM6ICdtaW51dGUnXG59LCB7XG4gIGZvcm1hdEFzOiAnaG91cidcbn1dOyAvLyBBIGNhY2hlIGZvciBgSW50bC5EYXRlVGltZUZvcm1hdGAgZm9ybWF0dGVyc1xuLy8gZm9yIHZhcmlvdXMgbG9jYWxlcyAoaXMgYSBnbG9iYWwgdmFyaWFibGUpLlxuXG52YXIgZm9ybWF0dGVycyA9IHt9OyAvLyBTdGFydGluZyBmcm9tIGRheSBpbnRlcnZhbHMsIG91dHB1dCBtb250aCBhbmQgZGF5LlxuXG52YXIgbW9udGhBbmREYXkgPSB7XG4gIG1pblRpbWU6IGZ1bmN0aW9uIG1pblRpbWUodGltZXN0YW1wLCBfcmVmKSB7XG4gICAgdmFyIGZ1dHVyZSA9IF9yZWYuZnV0dXJlLFxuICAgICAgICBnZXRNaW5UaW1lRm9yVW5pdCA9IF9yZWYuZ2V0TWluVGltZUZvclVuaXQ7XG4gICAgLy8gUmV0dXJucyBgMjMuNSAqIDYwICogNjBgIHdoZW4gYHJvdW5kYCBpcyBcInJvdW5kXCIsXG4gICAgLy8gYW5kIGAyNCAqIDYwICogNjBgIHdoZW4gYHJvdW5kYCBpcyBcImZsb29yXCIuXG4gICAgcmV0dXJuIGdldE1pblRpbWVGb3JVbml0KCdkYXknKTtcbiAgfSxcbiAgZm9ybWF0OiBmdW5jdGlvbiBmb3JtYXQodmFsdWUsIGxvY2FsZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFmb3JtYXR0ZXJzW2xvY2FsZV0pIHtcbiAgICAgIGZvcm1hdHRlcnNbbG9jYWxlXSA9IHt9O1xuICAgIH1cbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgZWxzZSAqL1xuXG5cbiAgICBpZiAoIWZvcm1hdHRlcnNbbG9jYWxlXS5kYXlNb250aCkge1xuICAgICAgLy8gXCJBcHIgMTFcIiAoTU1NZClcbiAgICAgIGZvcm1hdHRlcnNbbG9jYWxlXS5kYXlNb250aCA9IG5ldyBJbnRsLkRhdGVUaW1lRm9ybWF0KGxvY2FsZSwge1xuICAgICAgICBtb250aDogJ3Nob3J0JyxcbiAgICAgICAgZGF5OiAnbnVtZXJpYydcbiAgICAgIH0pO1xuICAgIH0gLy8gT3V0cHV0IG1vbnRoIGFuZCBkYXkuXG5cblxuICAgIHJldHVybiBmb3JtYXR0ZXJzW2xvY2FsZV0uZGF5TW9udGguZm9ybWF0KGdldERhdGUodmFsdWUpKTtcbiAgfVxufTsgLy8gSWYgdGhlIGBkYXRlYCBoYXBwZW5lZC9oYXBwZW5zIG91dHNpZGUgb2YgY3VycmVudCB5ZWFyLFxuLy8gdGhlbiBvdXRwdXQgZGF5LCBtb250aCBhbmQgeWVhci5cbi8vIFRoZSBpbnRlcnZhbCBzaG91bGQgYmUgc3VjaCB0aGF0IHRoZSBgZGF0ZWAgbGllcyBvdXRzaWRlIG9mIHRoZSBjdXJyZW50IHllYXIuXG5cbnZhciB5ZWFyTW9udGhBbmREYXkgPSB7XG4gIG1pblRpbWU6IGZ1bmN0aW9uIG1pblRpbWUodGltZXN0YW1wLCBfcmVmMikge1xuICAgIHZhciBmdXR1cmUgPSBfcmVmMi5mdXR1cmU7XG5cbiAgICBpZiAoZnV0dXJlKSB7XG4gICAgICAvLyBKYW51YXJ5IDEsIDAwOjAwLCBvZiB0aGUgYGRhdGVgJ3MgeWVhciBpcyByaWdodCBhZnRlclxuICAgICAgLy8gdGhlIG1heGltdW0gYG5vd2AgZm9yIGZvcm1hdHRpbmcgYSBmdXR1cmUgZGF0ZTpcbiAgICAgIC8vIFdoZW4gYG5vd2AgaXMgYmVmb3JlIHRoYXQgZGF0ZSwgdGhlIGBkYXRlYCBpcyBmb3JtYXR0ZWQgYXMgXCJkYXkvbW9udGgveWVhclwiICh0aGlzIHN0ZXApLFxuICAgICAgLy8gV2hlbiBgbm93YCBpcyBlcXVhbCB0byBvciBhZnRlciB0aGF0IGRhdGUsIHRoZSBgZGF0ZWAgaXMgZm9ybWF0dGVkIGFzIFwiZGF5L21vbnRoXCIgKGFub3RoZXIgc3RlcCkuXG4gICAgICAvLyBBZnRlciB0aGF0LCBpdCdzIGhvdXJzLCBtaW51dGVzLCBzZWNvbmRzLCBhbmQgYWZ0ZXIgdGhhdCBpdCdzIG5vIGxvbmdlciBgZnV0dXJlYC5cbiAgICAgIC8vIFRoZSBkYXRlIGlzIHJpZ2h0IGFmdGVyIHRoZSBtYXhpbXVtIGBub3dgIGZvciBmb3JtYXR0aW5nIGEgZnV0dXJlIGRhdGUsXG4gICAgICAvLyBzbyBzdWJ0cmFjdCAxIG1pbGxpc2Vjb25kIGZyb20gaXQuXG4gICAgICB2YXIgbWF4Rml0dGluZ05vdyA9IG5ldyBEYXRlKG5ldyBEYXRlKHRpbWVzdGFtcCkuZ2V0RnVsbFllYXIoKSwgMCkuZ2V0VGltZSgpIC0gMTsgLy8gUmV0dXJuIGBtaW5UaW1lYCAoaW4gc2Vjb25kcykuXG5cbiAgICAgIHJldHVybiAodGltZXN0YW1wIC0gbWF4Rml0dGluZ05vdykgLyAxMDAwO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBKYW51YXJ5IDEsIDAwOjAwLCBvZiB0aGUgeWVhciBmb2xsb3dpbmcgdGhlIGBkYXRlYCdzIHllYXJcbiAgICAgIC8vIGlzIHRoZSBtaW5pbXVtIGBub3dgIGZvciBmb3JtYXR0aW5nIGEgcGFzdCBkYXRlOlxuICAgICAgLy8gV2hlbiBgbm93YCBpcyBiZWZvcmUgdGhhdCBkYXRlLCB0aGUgYGRhdGVgIGlzIGZvcm1hdHRlZCBhcyBcImRheS9tb250aFwiIChhbm90aGVyIHN0ZXApLFxuICAgICAgLy8gV2hlbiBgbm93YCBpcyBlcXVhbCB0byBvciBhZnRlciB0aGF0IGRhdGUsIHRoZSBgZGF0ZWAgaXMgZm9ybWF0dGVkIGFzIFwiZGF5L21vbnRoL3llYXJcIiAodGhpcyBzdGVwKS5cbiAgICAgIC8vIEFmdGVyIHRoYXQsIGl0J3MgaG91cnMsIG1pbnV0ZXMsIHNlY29uZHMsIGFuZCBhZnRlciB0aGF0IGl0J3Mgbm8gbG9uZ2VyIGBmdXR1cmVgLlxuICAgICAgdmFyIG1pbkZpdHRpbmdOb3cgPSBuZXcgRGF0ZShuZXcgRGF0ZSh0aW1lc3RhbXApLmdldEZ1bGxZZWFyKCkgKyAxLCAwKS5nZXRUaW1lKCk7IC8vIFJldHVybiBgbWluVGltZWAgKGluIHNlY29uZHMpLlxuXG4gICAgICByZXR1cm4gKG1pbkZpdHRpbmdOb3cgLSB0aW1lc3RhbXApIC8gMTAwMDtcbiAgICB9XG4gIH0sXG4gIGZvcm1hdDogZnVuY3Rpb24gZm9ybWF0KHZhbHVlLCBsb2NhbGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoIWZvcm1hdHRlcnNbbG9jYWxlXSkge1xuICAgICAgZm9ybWF0dGVyc1tsb2NhbGVdID0ge307XG4gICAgfVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cblxuICAgIGlmICghZm9ybWF0dGVyc1tsb2NhbGVdLmRheU1vbnRoWWVhcikge1xuICAgICAgLy8gXCJBcHIgMTEsIDIwMTdcIiAoeU1NTWQpXG4gICAgICBmb3JtYXR0ZXJzW2xvY2FsZV0uZGF5TW9udGhZZWFyID0gbmV3IEludGwuRGF0ZVRpbWVGb3JtYXQobG9jYWxlLCB7XG4gICAgICAgIHllYXI6ICdudW1lcmljJyxcbiAgICAgICAgbW9udGg6ICdzaG9ydCcsXG4gICAgICAgIGRheTogJ251bWVyaWMnXG4gICAgICB9KTtcbiAgICB9IC8vIE91dHB1dCBkYXksIG1vbnRoIGFuZCB5ZWFyLlxuXG5cbiAgICByZXR1cm4gZm9ybWF0dGVyc1tsb2NhbGVdLmRheU1vbnRoWWVhci5mb3JtYXQoZ2V0RGF0ZSh2YWx1ZSkpO1xuICB9XG59OyAvLyBJZiBgSW50bC5EYXRlVGltZUZvcm1hdGAgaXMgc3VwcG9ydGVkLFxuLy8gdGhlbiBsb25nZXIgdGltZSBpbnRlcnZhbHMgd2lsbCBiZSBmb3JtYXR0ZWQgYXMgZGF0ZXMuXG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG5cbmlmIChpbnRsRGF0ZVRpbWVGb3JtYXRTdXBwb3J0ZWQoKSkge1xuICBzdGVwcy5wdXNoKG1vbnRoQW5kRGF5LCB5ZWFyTW9udGhBbmREYXkpO1xufSAvLyBPdGhlcndpc2UsIGlmIGBJbnRsLkRhdGVUaW1lRm9ybWF0YCBpcyBub3Qgc3VwcG9ydGVkLFxuLy8gd2hpY2ggY291bGQgYmUgdGhlIGNhc2Ugd2hlbiB1c2luZyBJbnRlcm5ldCBFeHBsb3Jlcixcbi8vIHRoZW4gc2ltcGx5IG1pbWljayBcInJvdW5kXCIgc3RlcHMuXG5lbHNlIHtcbiAgc3RlcHMucHVzaCh7XG4gICAgZm9ybWF0QXM6ICdkYXknXG4gIH0sIHtcbiAgICBmb3JtYXRBczogJ3dlZWsnXG4gIH0sIHtcbiAgICBmb3JtYXRBczogJ21vbnRoJ1xuICB9LCB7XG4gICAgZm9ybWF0QXM6ICd5ZWFyJ1xuICB9KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQge1xuICBzdGVwczogc3RlcHMsXG4gIGxhYmVsczogWy8vIFwibWluaVwiIGxhYmVscyBhcmUgb25seSBkZWZpbmVkIGZvciBhIGZldyBsYW5ndWFnZXMuXG4gICdtaW5pJywgLy8gXCJzaG9ydC10aW1lXCIgbGFiZWxzIGFyZSBvbmx5IGRlZmluZWQgZm9yIGEgZmV3IGxhbmd1YWdlcy5cbiAgJ3Nob3J0LXRpbWUnLCAvLyBcIm5hcnJvd1wiIGFuZCBcInNob3J0XCIgbGFiZWxzIGFyZSBkZWZpbmVkIGZvciBhbGwgbGFuZ3VhZ2VzLlxuICAvLyBcIm5hcnJvd1wiIGxhYmVscyBjYW4gc29tZXRpbWVzIGJlIHdlaXJkIChsaWtlIFwiKzVkLlwiKSxcbiAgLy8gYnV0IFwic2hvcnRcIiBsYWJlbHMgaGF2ZSB0aGUgXCIgYWdvXCIgcGFydCwgc28gXCJuYXJyb3dcIiBzZWVtXG4gIC8vIG1vcmUgYXBwcm9wcmlhdGUuXG4gIC8vIFwic2hvcnRcIiBsYWJlbHMgd291bGQgaGF2ZSBiZWVuIG1vcmUgYXBwcm9wcmlhdGUgaWYgdGhleVxuICAvLyBkaWRuJ3QgaGF2ZSB0aGUgXCIgYWdvXCIgcGFydCwgaGVuY2UgdGhlIFwic2hvcnQtdGltZVwiIGFib3ZlLlxuICAnbmFycm93JywgLy8gU2luY2UgXCJuYXJyb3dcIiBsYWJlbHMgYXJlIGFsd2F5cyBwcmVzZW50LCBcInNob3J0XCIgZWxlbWVudFxuICAvLyBvZiB0aGlzIGFycmF5IGNhbiBiZSByZW1vdmVkLlxuICAnc2hvcnQnXVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR3aXR0ZXIuanMubWFwIiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnLi90d2l0dGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdHdpdHRlciksIHt9LCB7XG4gIC8vIEFkZCBcIm5vd1wiLlxuICBzdGVwczogW3tcbiAgICBmb3JtYXRBczogJ25vdydcbiAgfV0uY29uY2F0KHR3aXR0ZXIuc3RlcHMpXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXR3aXR0ZXJOb3cuanMubWFwIiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IHR3aXR0ZXIgZnJvbSAnLi90d2l0dGVyLmpzJztcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgdHdpdHRlciksIHt9LCB7XG4gIC8vIFNraXAgXCJzZWNvbmRzXCIuXG4gIHN0ZXBzOiB0d2l0dGVyLnN0ZXBzLmZpbHRlcihmdW5jdGlvbiAoc3RlcCkge1xuICAgIHJldHVybiBzdGVwLmZvcm1hdEFzICE9PSAnc2Vjb25kJztcbiAgfSlcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHdpdHRlck1pbnV0ZS5qcy5tYXAiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgdHdpdHRlck1pbnV0ZSBmcm9tICcuL3R3aXR0ZXJNaW51dGUuanMnO1xuZXhwb3J0IGRlZmF1bHQgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0d2l0dGVyTWludXRlKSwge30sIHtcbiAgLy8gQWRkIFwibm93XCIuXG4gIHN0ZXBzOiBbe1xuICAgIGZvcm1hdEFzOiAnbm93J1xuICB9XS5jb25jYXQodHdpdHRlck1pbnV0ZS5zdGVwcylcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHdpdHRlck1pbnV0ZU5vdy5qcy5tYXAiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgeyBtaW51dGUgfSBmcm9tICcuLi9zdGVwcy91bml0cy5qcyc7XG5pbXBvcnQgdHdpdHRlciBmcm9tICcuL3R3aXR0ZXIuanMnO1xuZXhwb3J0IGRlZmF1bHQgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCB0d2l0dGVyKSwge30sIHtcbiAgLy8gU2tpcCBcInNlY29uZHNcIi5cbiAgc3RlcHM6IHR3aXR0ZXIuc3RlcHMuZmlsdGVyKGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXAuZm9ybWF0QXMgIT09ICdzZWNvbmQnO1xuICB9KSAvLyBTdGFydCBzaG93aW5nIGAxbWAgZnJvbSB0aGUgZmlyc3QgbWludXRlLlxuICAubWFwKGZ1bmN0aW9uIChzdGVwKSB7XG4gICAgcmV0dXJuIHN0ZXAuZm9ybWF0QXMgPT09ICdtaW51dGUnID8gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBzdGVwKSwge30sIHtcbiAgICAgIG1pblRpbWU6IG1pbnV0ZVxuICAgIH0pIDogc3RlcDtcbiAgfSlcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9dHdpdHRlckZpcnN0TWludXRlLmpzLm1hcCIsImV4cG9ydCBkZWZhdWx0IHtcbiAgc3RlcHM6IFt7XG4gICAgZm9ybWF0QXM6ICdzZWNvbmQnXG4gIH0sIHtcbiAgICBmb3JtYXRBczogJ21pbnV0ZSdcbiAgfSwge1xuICAgIGZvcm1hdEFzOiAnaG91cidcbiAgfSwge1xuICAgIGZvcm1hdEFzOiAnZGF5J1xuICB9LCB7XG4gICAgZm9ybWF0QXM6ICdtb250aCdcbiAgfSwge1xuICAgIGZvcm1hdEFzOiAneWVhcidcbiAgfV0sXG4gIGxhYmVsczogWy8vIFwibWluaVwiIGxhYmVscyBhcmUgb25seSBkZWZpbmVkIGZvciBhIGZldyBsYW5ndWFnZXMuXG4gICdtaW5pJywgLy8gXCJzaG9ydC10aW1lXCIgbGFiZWxzIGFyZSBvbmx5IGRlZmluZWQgZm9yIGEgZmV3IGxhbmd1YWdlcy5cbiAgJ3Nob3J0LXRpbWUnLCAvLyBcIm5hcnJvd1wiIGFuZCBcInNob3J0XCIgbGFiZWxzIGFyZSBkZWZpbmVkIGZvciBhbGwgbGFuZ3VhZ2VzLlxuICAvLyBcIm5hcnJvd1wiIGxhYmVscyBjYW4gc29tZXRpbWVzIGJlIHdlaXJkIChsaWtlIFwiKzVkLlwiKSxcbiAgLy8gYnV0IFwic2hvcnRcIiBsYWJlbHMgaGF2ZSB0aGUgXCIgYWdvXCIgcGFydCwgc28gXCJuYXJyb3dcIiBzZWVtXG4gIC8vIG1vcmUgYXBwcm9wcmlhdGUuXG4gIC8vIFwic2hvcnRcIiBsYWJlbHMgd291bGQgaGF2ZSBiZWVuIG1vcmUgYXBwcm9wcmlhdGUgaWYgdGhleVxuICAvLyBkaWRuJ3QgaGF2ZSB0aGUgXCIgYWdvXCIgcGFydCwgaGVuY2UgdGhlIFwic2hvcnQtdGltZVwiIGFib3ZlLlxuICAnbmFycm93JywgLy8gU2luY2UgXCJuYXJyb3dcIiBsYWJlbHMgYXJlIGFsd2F5cyBwcmVzZW50LCBcInNob3J0XCIgZWxlbWVudFxuICAvLyBvZiB0aGlzIGFycmF5IGNhbiBiZSByZW1vdmVkLlxuICAnc2hvcnQnXVxufTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pbmkuanMubWFwIiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IG1pbmkgZnJvbSAnLi9taW5pLmpzJztcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWluaSksIHt9LCB7XG4gIC8vIEFkZCBcIm5vd1wiLlxuICBzdGVwczogW3tcbiAgICBmb3JtYXRBczogJ25vdydcbiAgfV0uY29uY2F0KG1pbmkuc3RlcHMpXG59KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW1pbmlOb3cuanMubWFwIiwiZnVuY3Rpb24gb3duS2V5cyhvYmplY3QsIGVudW1lcmFibGVPbmx5KSB7IHZhciBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIHN5bWJvbHMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKG9iamVjdCk7IGVudW1lcmFibGVPbmx5ICYmIChzeW1ib2xzID0gc3ltYm9scy5maWx0ZXIoZnVuY3Rpb24gKHN5bSkgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmplY3QsIHN5bSkuZW51bWVyYWJsZTsgfSkpLCBrZXlzLnB1c2guYXBwbHkoa2V5cywgc3ltYm9scyk7IH0gcmV0dXJuIGtleXM7IH1cblxuZnVuY3Rpb24gX29iamVjdFNwcmVhZCh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IG51bGwgIT0gYXJndW1lbnRzW2ldID8gYXJndW1lbnRzW2ldIDoge307IGkgJSAyID8gb3duS2V5cyhPYmplY3Qoc291cmNlKSwgITApLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBfZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHNvdXJjZVtrZXldKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMoc291cmNlKSkgOiBvd25LZXlzKE9iamVjdChzb3VyY2UpKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHNvdXJjZSwga2V5KSk7IH0pOyB9IHJldHVybiB0YXJnZXQ7IH1cblxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KG9iaiwga2V5LCB2YWx1ZSkgeyBpZiAoa2V5IGluIG9iaikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHsgdmFsdWU6IHZhbHVlLCBlbnVtZXJhYmxlOiB0cnVlLCBjb25maWd1cmFibGU6IHRydWUsIHdyaXRhYmxlOiB0cnVlIH0pOyB9IGVsc2UgeyBvYmpba2V5XSA9IHZhbHVlOyB9IHJldHVybiBvYmo7IH1cblxuaW1wb3J0IG1pbmkgZnJvbSAnLi9taW5pLmpzJztcbmV4cG9ydCBkZWZhdWx0IF9vYmplY3RTcHJlYWQoX29iamVjdFNwcmVhZCh7fSwgbWluaSksIHt9LCB7XG4gIC8vIFNraXAgXCJzZWNvbmRzXCIuXG4gIHN0ZXBzOiBtaW5pLnN0ZXBzLmZpbHRlcihmdW5jdGlvbiAoc3RlcCkge1xuICAgIHJldHVybiBzdGVwLmZvcm1hdEFzICE9PSAnc2Vjb25kJztcbiAgfSlcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWluaU1pbnV0ZS5qcy5tYXAiLCJmdW5jdGlvbiBvd25LZXlzKG9iamVjdCwgZW51bWVyYWJsZU9ubHkpIHsgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmplY3QpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgc3ltYm9scyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMob2JqZWN0KTsgZW51bWVyYWJsZU9ubHkgJiYgKHN5bWJvbHMgPSBzeW1ib2xzLmZpbHRlcihmdW5jdGlvbiAoc3ltKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG9iamVjdCwgc3ltKS5lbnVtZXJhYmxlOyB9KSksIGtleXMucHVzaC5hcHBseShrZXlzLCBzeW1ib2xzKTsgfSByZXR1cm4ga2V5czsgfVxuXG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gbnVsbCAhPSBhcmd1bWVudHNbaV0gPyBhcmd1bWVudHNbaV0gOiB7fTsgaSAlIDIgPyBvd25LZXlzKE9iamVjdChzb3VyY2UpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7IF9kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgc291cmNlW2tleV0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhzb3VyY2UpKSA6IG93bktleXMoT2JqZWN0KHNvdXJjZSkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ioc291cmNlLCBrZXkpKTsgfSk7IH0gcmV0dXJuIHRhcmdldDsgfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7IGlmIChrZXkgaW4gb2JqKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgeyB2YWx1ZTogdmFsdWUsIGVudW1lcmFibGU6IHRydWUsIGNvbmZpZ3VyYWJsZTogdHJ1ZSwgd3JpdGFibGU6IHRydWUgfSk7IH0gZWxzZSB7IG9ialtrZXldID0gdmFsdWU7IH0gcmV0dXJuIG9iajsgfVxuXG5pbXBvcnQgbWluaU1pbnV0ZSBmcm9tICcuL21pbmlNaW51dGUuanMnO1xuZXhwb3J0IGRlZmF1bHQgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtaW5pTWludXRlKSwge30sIHtcbiAgLy8gQWRkIFwibm93XCIuXG4gIHN0ZXBzOiBbe1xuICAgIGZvcm1hdEFzOiAnbm93J1xuICB9XS5jb25jYXQobWluaU1pbnV0ZS5zdGVwcylcbn0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bWluaU1pbnV0ZU5vdy5qcy5tYXAiLCJpbXBvcnQgcm91bmQgZnJvbSAnLi9yb3VuZC5qcyc7XG5pbXBvcnQgcm91bmRNaW51dGUgZnJvbSAnLi9yb3VuZE1pbnV0ZS5qcyc7IC8vIGBhcHByb3hpbWF0ZWAgc3R5bGUgaXMgZGVwcmVjYXRlZC5cblxuaW1wb3J0IGFwcHJveGltYXRlIGZyb20gJy4vYXBwcm94aW1hdGUuanMnOyAvLyBgYXBwcm94aW1hdGVUaW1lYCBzdHlsZSBpcyBkZXByZWNhdGVkLlxuXG5pbXBvcnQgYXBwcm94aW1hdGVUaW1lIGZyb20gJy4vYXBwcm94aW1hdGVUaW1lLmpzJztcbmltcG9ydCB0d2l0dGVyIGZyb20gJy4vdHdpdHRlci5qcyc7XG5pbXBvcnQgdHdpdHRlck5vdyBmcm9tICcuL3R3aXR0ZXJOb3cuanMnO1xuaW1wb3J0IHR3aXR0ZXJNaW51dGUgZnJvbSAnLi90d2l0dGVyTWludXRlLmpzJztcbmltcG9ydCB0d2l0dGVyTWludXRlTm93IGZyb20gJy4vdHdpdHRlck1pbnV0ZU5vdy5qcyc7XG5pbXBvcnQgdHdpdHRlckZpcnN0TWludXRlIGZyb20gJy4vdHdpdHRlckZpcnN0TWludXRlLmpzJztcbmltcG9ydCBtaW5pIGZyb20gJy4vbWluaS5qcyc7XG5pbXBvcnQgbWluaU5vdyBmcm9tICcuL21pbmlOb3cuanMnO1xuaW1wb3J0IG1pbmlNaW51dGUgZnJvbSAnLi9taW5pTWludXRlLmpzJztcbmltcG9ydCBtaW5pTWludXRlTm93IGZyb20gJy4vbWluaU1pbnV0ZU5vdy5qcyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRTdHlsZUJ5TmFtZShzdHlsZSkge1xuICBzd2l0Y2ggKHN0eWxlKSB7XG4gICAgLy8gXCJkZWZhdWx0XCIgc3R5bGUgbmFtZSBpcyBkZXByZWNhdGVkLlxuICAgIGNhc2UgJ2RlZmF1bHQnOlxuICAgIGNhc2UgJ3JvdW5kJzpcbiAgICAgIHJldHVybiByb3VuZDtcblxuICAgIGNhc2UgJ3JvdW5kLW1pbnV0ZSc6XG4gICAgICByZXR1cm4gcm91bmRNaW51dGU7XG5cbiAgICBjYXNlICdhcHByb3hpbWF0ZSc6XG4gICAgICByZXR1cm4gYXBwcm94aW1hdGU7XG4gICAgLy8gXCJ0aW1lXCIgc3R5bGUgbmFtZSBpcyBkZXByZWNhdGVkLlxuXG4gICAgY2FzZSAndGltZSc6XG4gICAgY2FzZSAnYXBwcm94aW1hdGUtdGltZSc6XG4gICAgICByZXR1cm4gYXBwcm94aW1hdGVUaW1lO1xuXG4gICAgY2FzZSAnbWluaSc6XG4gICAgICByZXR1cm4gbWluaTtcblxuICAgIGNhc2UgJ21pbmktbm93JzpcbiAgICAgIHJldHVybiBtaW5pTm93O1xuXG4gICAgY2FzZSAnbWluaS1taW51dGUnOlxuICAgICAgcmV0dXJuIG1pbmlNaW51dGU7XG5cbiAgICBjYXNlICdtaW5pLW1pbnV0ZS1ub3cnOlxuICAgICAgcmV0dXJuIG1pbmlNaW51dGVOb3c7XG5cbiAgICBjYXNlICd0d2l0dGVyJzpcbiAgICAgIHJldHVybiB0d2l0dGVyO1xuXG4gICAgY2FzZSAndHdpdHRlci1ub3cnOlxuICAgICAgcmV0dXJuIHR3aXR0ZXJOb3c7XG5cbiAgICBjYXNlICd0d2l0dGVyLW1pbnV0ZSc6XG4gICAgICByZXR1cm4gdHdpdHRlck1pbnV0ZTtcblxuICAgIGNhc2UgJ3R3aXR0ZXItbWludXRlLW5vdyc6XG4gICAgICByZXR1cm4gdHdpdHRlck1pbnV0ZU5vdztcblxuICAgIGNhc2UgJ3R3aXR0ZXItZmlyc3QtbWludXRlJzpcbiAgICAgIHJldHVybiB0d2l0dGVyRmlyc3RNaW51dGU7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgLy8gRm9yIGhpc3RvcmljYWwgcmVhc29ucywgdGhlIGRlZmF1bHQgc3R5bGUgaXMgXCJhcHByb3hpbWF0ZVwiLlxuICAgICAgcmV0dXJuIGFwcHJveGltYXRlO1xuICB9XG59XG4vLyMgc291cmNlTWFwcGluZ1VSTD1nZXRTdHlsZUJ5TmFtZS5qcy5tYXAiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG9iaikgeyByZXR1cm4gdHlwZW9mIG9iajsgfSA6IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIG9iaiAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajsgfSwgX3R5cGVvZihvYmopOyB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyTG9vc2UobywgYWxsb3dBcnJheUxpa2UpIHsgdmFyIGl0ID0gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0gfHwgb1tcIkBAaXRlcmF0b3JcIl07IGlmIChpdCkgcmV0dXJuIChpdCA9IGl0LmNhbGwobykpLm5leHQuYmluZChpdCk7IGlmIChBcnJheS5pc0FycmF5KG8pIHx8IChpdCA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvKSkgfHwgYWxsb3dBcnJheUxpa2UgJiYgbyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHsgaWYgKGl0KSBvID0gaXQ7IHZhciBpID0gMDsgcmV0dXJuIGZ1bmN0aW9uICgpIHsgaWYgKGkgPj0gby5sZW5ndGgpIHJldHVybiB7IGRvbmU6IHRydWUgfTsgcmV0dXJuIHsgZG9uZTogZmFsc2UsIHZhbHVlOiBvW2krK10gfTsgfTsgfSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGl0ZXJhdGUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KENvbnN0cnVjdG9yLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiBmYWxzZSB9KTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9XG5cbmltcG9ydCBSZWxhdGl2ZVRpbWVGb3JtYXRQb2x5ZmlsbCBmcm9tICdyZWxhdGl2ZS10aW1lLWZvcm1hdCc7XG5pbXBvcnQgQ2FjaGUgZnJvbSAnLi9jYWNoZS5qcyc7XG5pbXBvcnQgY2hvb3NlTG9jYWxlIGZyb20gJy4vbG9jYWxlLmpzJztcbmltcG9ydCBpc1N0eWxlT2JqZWN0IGZyb20gJy4vaXNTdHlsZU9iamVjdC5qcyc7XG5pbXBvcnQgZ2V0U3RlcCBmcm9tICcuL3N0ZXBzL2dldFN0ZXAuanMnO1xuaW1wb3J0IGdldFN0ZXBEZW5vbWluYXRvciBmcm9tICcuL3N0ZXBzL2dldFN0ZXBEZW5vbWluYXRvci5qcyc7XG5pbXBvcnQgZ2V0VGltZVRvTmV4dFVwZGF0ZSBmcm9tICcuL3N0ZXBzL2dldFRpbWVUb05leHRVcGRhdGUuanMnO1xuaW1wb3J0IHsgYWRkTG9jYWxlRGF0YSwgZ2V0TG9jYWxlRGF0YSB9IGZyb20gJy4vTG9jYWxlRGF0YVN0b3JlLmpzJztcbmltcG9ydCBkZWZhdWx0U3R5bGUgZnJvbSAnLi9zdHlsZS9yb3VuZE1pbnV0ZS5qcyc7XG5pbXBvcnQgZ2V0U3R5bGVCeU5hbWUgZnJvbSAnLi9zdHlsZS9nZXRTdHlsZUJ5TmFtZS5qcyc7XG5pbXBvcnQgeyBnZXRSb3VuZEZ1bmN0aW9uIH0gZnJvbSAnLi9yb3VuZC5qcyc7IC8vIFZhbGlkIHRpbWUgdW5pdHMuXG5cbnZhciBVTklUUyA9IFsnbm93JywgLy8gVGhlIHJlc3QgYXJlIHRoZSBzYW1lIGFzIGluIGBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdGAuXG4nc2Vjb25kJywgJ21pbnV0ZScsICdob3VyJywgJ2RheScsICd3ZWVrJywgJ21vbnRoJywgJ3F1YXJ0ZXInLCAneWVhciddO1xuXG52YXIgVGltZUFnbyA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxyXG4gICAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGxvY2FsZXM9W10gLSBQcmVmZXJyZWQgbG9jYWxlcyAob3IgbG9jYWxlKS5cclxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IFtwb2x5ZmlsbF0g4oCUIFBhc3MgYGZhbHNlYCB0byB1c2UgbmF0aXZlIGBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdGAgYW5kIGBJbnRsLlBsdXJhbFJ1bGVzYCBpbnN0ZWFkIG9mIHRoZSBwb2x5ZmlsbHMuXHJcbiAgICovXG4gIGZ1bmN0aW9uIFRpbWVBZ28oKSB7XG4gICAgdmFyIGxvY2FsZXMgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuXG4gICAgdmFyIF9yZWYgPSBhcmd1bWVudHMubGVuZ3RoID4gMSAmJiBhcmd1bWVudHNbMV0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1sxXSA6IHt9LFxuICAgICAgICBwb2x5ZmlsbCA9IF9yZWYucG9seWZpbGw7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgVGltZUFnbyk7XG5cbiAgICAvLyBDb252ZXJ0IGBsb2NhbGVzYCB0byBhbiBhcnJheS5cbiAgICBpZiAodHlwZW9mIGxvY2FsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBsb2NhbGVzID0gW2xvY2FsZXNdO1xuICAgIH0gLy8gQ2hvb3NlIHRoZSBtb3N0IGFwcHJvcHJpYXRlIGxvY2FsZVxuICAgIC8vIGZyb20gdGhlIGxpc3Qgb2YgYGxvY2FsZXNgIGFkZGVkIGJ5IHRoZSB1c2VyLlxuICAgIC8vIEZvciBleGFtcGxlLCBuZXcgVGltZUFnbyhcImVuLVVTXCIpIC0+IFwiZW5cIi5cblxuXG4gICAgdGhpcy5sb2NhbGUgPSBjaG9vc2VMb2NhbGUobG9jYWxlcy5jb25jYXQoVGltZUFnby5nZXREZWZhdWx0TG9jYWxlKCkpLCBnZXRMb2NhbGVEYXRhKTtcblxuICAgIGlmICh0eXBlb2YgSW50bCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFVzZSBgSW50bC5OdW1iZXJGb3JtYXRgIGZvciBmb3JtYXR0aW5nIG51bWJlcnMgKHdoZW4gYXZhaWxhYmxlKS5cbiAgICAgIGlmIChJbnRsLk51bWJlckZvcm1hdCkge1xuICAgICAgICB0aGlzLm51bWJlckZvcm1hdCA9IG5ldyBJbnRsLk51bWJlckZvcm1hdCh0aGlzLmxvY2FsZSk7XG4gICAgICB9XG4gICAgfSAvLyBTb21lIHBlb3BsZSBoYXZlIHJlcXVlc3RlZCB0aGUgYWJpbGl0eSB0byB1c2UgbmF0aXZlXG4gICAgLy8gYEludGwuUmVsYXRpdmVUaW1lRm9ybWF0YCBhbmQgYEludGwuUGx1cmFsUnVsZXNgXG4gICAgLy8gaW5zdGVhZCBvZiB0aGUgcG9seWZpbGxzLlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXRhbXBoZXRhbWluZS9qYXZhc2NyaXB0LXRpbWUtYWdvL2lzc3Vlcy8yMVxuXG5cbiAgICBpZiAocG9seWZpbGwgPT09IGZhbHNlKSB7XG4gICAgICB0aGlzLkludGxSZWxhdGl2ZVRpbWVGb3JtYXQgPSBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdDtcbiAgICAgIHRoaXMuSW50bFBsdXJhbFJ1bGVzID0gSW50bC5QbHVyYWxSdWxlcztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5JbnRsUmVsYXRpdmVUaW1lRm9ybWF0ID0gUmVsYXRpdmVUaW1lRm9ybWF0UG9seWZpbGw7XG4gICAgICB0aGlzLkludGxQbHVyYWxSdWxlcyA9IFJlbGF0aXZlVGltZUZvcm1hdFBvbHlmaWxsLlBsdXJhbFJ1bGVzO1xuICAgIH0gLy8gQ2FjaGUgYEludGwuUmVsYXRpdmVUaW1lRm9ybWF0YCBpbnN0YW5jZS5cblxuXG4gICAgdGhpcy5yZWxhdGl2ZVRpbWVGb3JtYXRDYWNoZSA9IG5ldyBDYWNoZSgpOyAvLyBDYWNoZSBgSW50bC5QbHVyYWxSdWxlc2AgaW5zdGFuY2UuXG5cbiAgICB0aGlzLnBsdXJhbFJ1bGVzQ2FjaGUgPSBuZXcgQ2FjaGUoKTtcbiAgfVxuICAvKipcclxuICAgKiBGb3JtYXRzIHJlbGF0aXZlIGRhdGUvdGltZS5cclxuICAgKlxyXG4gICAqIEBwYXJhbSB7KG51bWJlcnxEYXRlKX0gaW5wdXQg4oCUIEEgYERhdGVgIG9yIGEgamF2YXNjcmlwdCB0aW1lc3RhbXAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0geyhzdHJpbmd8b2JqZWN0KX0gc3R5bGUg4oCUIERhdGUvdGltZSBmb3JtYXR0aW5nIHN0eWxlLiBFaXRoZXIgb25lIG9mIHRoZSBidWlsdC1pbiBzdHlsZSBuYW1lcyBvciBhIFwiY3VzdG9tXCIgc3R5bGUgZGVmaW5pdGlvbiBvYmplY3QgaGF2aW5nIGBzdGVwczogb2JqZWN0W11gIGFuZCBgbGFiZWxzOiBzdHJpbmdbXWAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0ge251bWJlcn0gW29wdGlvbnMubm93XSAtIFNldHMgdGhlIGN1cnJlbnQgZGF0ZSB0aW1lc3RhbXAuXHJcbiAgICpcclxuICAgKiBAcGFyYW0gIHtib29sZWFufSBbb3B0aW9ucy5mdXR1cmVdIOKAlCBUZWxscyBob3cgdG8gZm9ybWF0IHZhbHVlIGAwYDpcclxuICAgKiAgICAgICAgIGFzIFwiZnV0dXJlXCIgKGB0cnVlYCkgb3IgXCJwYXN0XCIgKGBmYWxzZWApLlxyXG4gICAqICAgICAgICAgSXMgYGZhbHNlYCBieSBkZWZhdWx0LCBidXQgc2hvdWxkIGhhdmUgYmVlbiBgdHJ1ZWAgYWN0dWFsbHksXHJcbiAgICogICAgICAgICBpbiBvcmRlciB0byBjb3JyZXNwb25kIHRvIGBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdGBcclxuICAgKiAgICAgICAgIHRoYXQgdXNlcyBgZnV0dXJlYCBmb3JtYXR0aW5nIGZvciBgMGAgdW5sZXNzIGAtMGAgaXMgcGFzc2VkLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtvcHRpb25zLnJvdW5kXSDigJQgUm91bmRpbmcgbWV0aG9kLiBPdmVycmlkZXMgdGhlIHN0eWxlJ3Mgb25lLlxyXG4gICAqXHJcbiAgICogQHBhcmFtIHtib29sZWFufSBbb3B0aW9ucy5nZXRUaW1lVG9OZXh0VXBkYXRlXSDigJQgUGFzcyBgdHJ1ZWAgdG8gcmV0dXJuIGBbZm9ybWF0dGVkRGF0ZSwgdGltZVRvTmV4dFVwZGF0ZV1gIGluc3RlYWQgb2YganVzdCBgZm9ybWF0dGVkRGF0ZWAuXHJcbiAgICpcclxuICAgKiBAcmV0dXJuIHtzdHJpbmd9IFRoZSBmb3JtYXR0ZWQgcmVsYXRpdmUgZGF0ZS90aW1lLiBJZiBubyBlbGlnaWJsZSBgc3RlcGAgaXMgZm91bmQsIHRoZW4gYW4gZW1wdHkgc3RyaW5nIGlzIHJldHVybmVkLlxyXG4gICAqL1xuXG5cbiAgX2NyZWF0ZUNsYXNzKFRpbWVBZ28sIFt7XG4gICAga2V5OiBcImZvcm1hdFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXQoaW5wdXQsIHN0eWxlLCBvcHRpb25zKSB7XG4gICAgICBpZiAoIW9wdGlvbnMpIHtcbiAgICAgICAgaWYgKHN0eWxlICYmICFpc1N0eWxlKHN0eWxlKSkge1xuICAgICAgICAgIG9wdGlvbnMgPSBzdHlsZTtcbiAgICAgICAgICBzdHlsZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKCFzdHlsZSkge1xuICAgICAgICBzdHlsZSA9IGRlZmF1bHRTdHlsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBzdHlsZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgc3R5bGUgPSBnZXRTdHlsZUJ5TmFtZShzdHlsZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciB0aW1lc3RhbXAgPSBnZXRUaW1lc3RhbXAoaW5wdXQpOyAvLyBHZXQgbG9jYWxlIG1lc3NhZ2VzIGZvciB0aGlzIHR5cGUgb2YgbGFiZWxzLlxuICAgICAgLy8gXCJmbGF2b3VyXCIgaXMgYSBsZWdhY3kgbmFtZSBmb3IgXCJsYWJlbHNcIi5cblxuICAgICAgdmFyIF90aGlzJGdldExhYmVscyA9IHRoaXMuZ2V0TGFiZWxzKHN0eWxlLmZsYXZvdXIgfHwgc3R5bGUubGFiZWxzKSxcbiAgICAgICAgICBsYWJlbHMgPSBfdGhpcyRnZXRMYWJlbHMubGFiZWxzLFxuICAgICAgICAgIGxhYmVsc1R5cGUgPSBfdGhpcyRnZXRMYWJlbHMubGFiZWxzVHlwZTtcblxuICAgICAgdmFyIG5vdzsgLy8gQ2FuIHBhc3MgYSBjdXN0b20gYG5vd2AsIGUuZy4gZm9yIHRlc3RpbmcgcHVycG9zZXMuXG4gICAgICAvL1xuICAgICAgLy8gTGVnYWN5IHdheSB3YXMgcGFzc2luZyBgbm93YCBpbiBgc3R5bGVgLlxuICAgICAgLy8gVGhhdCB3YXkgaXMgZGVwcmVjYXRlZC5cblxuICAgICAgaWYgKHN0eWxlLm5vdyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG5vdyA9IHN0eWxlLm5vdztcbiAgICAgIH0gLy8gVGhlIG5ldyB3YXkgaXMgcGFzc2luZyBgbm93YCBvcHRpb24gdG8gYC5mb3JtYXQoKWAuXG5cblxuICAgICAgaWYgKG5vdyA9PT0gdW5kZWZpbmVkICYmIG9wdGlvbnMubm93ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgbm93ID0gb3B0aW9ucy5ub3c7XG4gICAgICB9XG5cbiAgICAgIGlmIChub3cgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICBub3cgPSBEYXRlLm5vdygpO1xuICAgICAgfSAvLyBob3cgbXVjaCB0aW1lIGhhcyBwYXNzZWQgKGluIHNlY29uZHMpXG5cblxuICAgICAgdmFyIHNlY29uZHNQYXNzZWQgPSAobm93IC0gdGltZXN0YW1wKSAvIDEwMDA7IC8vIGluIHNlY29uZHNcblxuICAgICAgdmFyIGZ1dHVyZSA9IG9wdGlvbnMuZnV0dXJlIHx8IHNlY29uZHNQYXNzZWQgPCAwO1xuICAgICAgdmFyIG5vd0xhYmVsID0gZ2V0Tm93TGFiZWwobGFiZWxzLCBnZXRMb2NhbGVEYXRhKHRoaXMubG9jYWxlKS5ub3csIGdldExvY2FsZURhdGEodGhpcy5sb2NhbGUpW1wibG9uZ1wiXSwgZnV0dXJlKTsgLy8gYGN1c3RvbWAg4oCTIEEgZnVuY3Rpb24gb2YgYHsgZWxhcHNlZCwgdGltZSwgZGF0ZSwgbm93LCBsb2NhbGUgfWAuXG4gICAgICAvL1xuICAgICAgLy8gTG9va3MgbGlrZSBgY3VzdG9tYCBmdW5jdGlvbiBpcyBkZXByZWNhdGVkIGFuZCB3aWxsIGJlIHJlbW92ZWRcbiAgICAgIC8vIGluIHRoZSBuZXh0IG1ham9yIHZlcnNpb24uXG4gICAgICAvL1xuICAgICAgLy8gSWYgdGhpcyBmdW5jdGlvbiByZXR1cm5zIGEgdmFsdWUsIHRoZW4gdGhlIGAuZm9ybWF0KClgIGNhbGwgd2lsbCByZXR1cm4gdGhhdCB2YWx1ZS5cbiAgICAgIC8vIE90aGVyd2lzZSB0aGUgcmVsYXRpdmUgZGF0ZS90aW1lIGlzIGZvcm1hdHRlZCBhcyB1c3VhbC5cbiAgICAgIC8vIFRoaXMgZmVhdHVyZSBpcyBjdXJyZW50bHkgbm90IHVzZWQgYW55d2hlcmUgYW5kIGlzIGhlcmVcbiAgICAgIC8vIGp1c3QgZm9yIHByb3ZpZGluZyB0aGUgdWx0aW1hdGUgY3VzdG9taXphdGlvbiBwb2ludFxuICAgICAgLy8gaW4gY2FzZSBhbnlvbmUgd291bGQgZXZlciBuZWVkIHRoYXQuIFByZWZlciB1c2luZ1xuICAgICAgLy8gYHN0ZXBzW3N0ZXBdLmZvcm1hdCh2YWx1ZSwgbG9jYWxlKWAgaW5zdGVhZC5cbiAgICAgIC8vXG5cbiAgICAgIGlmIChzdHlsZS5jdXN0b20pIHtcbiAgICAgICAgdmFyIGN1c3RvbSA9IHN0eWxlLmN1c3RvbSh7XG4gICAgICAgICAgbm93OiBub3csXG4gICAgICAgICAgZGF0ZTogbmV3IERhdGUodGltZXN0YW1wKSxcbiAgICAgICAgICB0aW1lOiB0aW1lc3RhbXAsXG4gICAgICAgICAgZWxhcHNlZDogc2Vjb25kc1Bhc3NlZCxcbiAgICAgICAgICBsb2NhbGU6IHRoaXMubG9jYWxlXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChjdXN0b20gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vIFdvbid0IHJldHVybiBgdGltZVRvTmV4dFVwZGF0ZWAgaGVyZVxuICAgICAgICAgIC8vIGJlY2F1c2UgYGN1c3RvbSgpYCBzZWVtcyBkZXByZWNhdGVkLlxuICAgICAgICAgIHJldHVybiBjdXN0b207XG4gICAgICAgIH1cbiAgICAgIH0gLy8gR2V0IHRoZSBsaXN0IG9mIGF2YWlsYWJsZSB0aW1lIGludGVydmFsIHVuaXRzLlxuXG5cbiAgICAgIHZhciB1bml0cyA9IGdldFRpbWVJbnRlcnZhbE1lYXN1cmVtZW50VW5pdHMoIC8vIENvbnRyb2xsaW5nIGBzdHlsZS5zdGVwc2AgdGhyb3VnaCBgc3R5bGUudW5pdHNgIHNlZW1zIHRvIGJlIGRlcHJlY2F0ZWQ6XG4gICAgICAvLyBjcmVhdGUgYSBuZXcgY3VzdG9tIGBzdHlsZWAgaW5zdGVhZC5cbiAgICAgIHN0eWxlLnVuaXRzLCBsYWJlbHMsIG5vd0xhYmVsKTsgLy8gLy8gSWYgbm8gYXZhaWxhYmxlIHRpbWUgdW5pdCBpcyBzdWl0YWJsZSwganVzdCBvdXRwdXQgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAgLy8gaWYgKHVuaXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gXHRjb25zb2xlLmVycm9yKGBOb25lIG9mIHRoZSBcIiR7dW5pdHMuam9pbignLCAnKX1cIiB0aW1lIHVuaXRzIGhhdmUgYmVlbiBmb3VuZCBpbiBcIiR7bGFiZWxzVHlwZX1cIiBsYWJlbHMgZm9yIFwiJHt0aGlzLmxvY2FsZX1cIiBsb2NhbGUuYClcbiAgICAgIC8vIFx0cmV0dXJuICcnXG4gICAgICAvLyB9XG5cbiAgICAgIHZhciByb3VuZCA9IG9wdGlvbnMucm91bmQgfHwgc3R5bGUucm91bmQ7IC8vIENob29zZSB0aGUgYXBwcm9wcmlhdGUgdGltZSBtZWFzdXJlbWVudCB1bml0XG4gICAgICAvLyBhbmQgZ2V0IHRoZSBjb3JyZXNwb25kaW5nIHJvdW5kZWQgdGltZSBhbW91bnQuXG5cbiAgICAgIHZhciBfZ2V0U3RlcCA9IGdldFN0ZXAoIC8vIFwiZ3JhZGF0aW9uXCIgaXMgYSBsZWdhY3kgbmFtZSBmb3IgXCJzdGVwc1wiLlxuICAgICAgLy8gRm9yIGhpc3RvcmljYWwgcmVhc29ucywgXCJhcHByb3hpbWF0ZVwiIHN0ZXBzIGFyZSB1c2VkIGJ5IGRlZmF1bHQuXG4gICAgICAvLyBJbiB0aGUgbmV4dCBtYWpvciB2ZXJzaW9uLCB0aGVyZSdsbCBiZSBubyBkZWZhdWx0IGZvciBgc3RlcHNgLlxuICAgICAgc3R5bGUuZ3JhZGF0aW9uIHx8IHN0eWxlLnN0ZXBzIHx8IGRlZmF1bHRTdHlsZS5zdGVwcywgc2Vjb25kc1Bhc3NlZCwge1xuICAgICAgICBub3c6IG5vdyxcbiAgICAgICAgdW5pdHM6IHVuaXRzLFxuICAgICAgICByb3VuZDogcm91bmQsXG4gICAgICAgIGZ1dHVyZTogZnV0dXJlLFxuICAgICAgICBnZXROZXh0U3RlcDogdHJ1ZVxuICAgICAgfSksXG4gICAgICAgICAgX2dldFN0ZXAyID0gX3NsaWNlZFRvQXJyYXkoX2dldFN0ZXAsIDMpLFxuICAgICAgICAgIHByZXZTdGVwID0gX2dldFN0ZXAyWzBdLFxuICAgICAgICAgIHN0ZXAgPSBfZ2V0U3RlcDJbMV0sXG4gICAgICAgICAgbmV4dFN0ZXAgPSBfZ2V0U3RlcDJbMl07XG5cbiAgICAgIHZhciBmb3JtYXR0ZWREYXRlID0gdGhpcy5mb3JtYXREYXRlRm9yU3RlcCh0aW1lc3RhbXAsIHN0ZXAsIHNlY29uZHNQYXNzZWQsIHtcbiAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgIGxhYmVsc1R5cGU6IGxhYmVsc1R5cGUsXG4gICAgICAgIG5vd0xhYmVsOiBub3dMYWJlbCxcbiAgICAgICAgbm93OiBub3csXG4gICAgICAgIGZ1dHVyZTogZnV0dXJlLFxuICAgICAgICByb3VuZDogcm91bmRcbiAgICAgIH0pIHx8ICcnO1xuXG4gICAgICBpZiAob3B0aW9ucy5nZXRUaW1lVG9OZXh0VXBkYXRlKSB7XG4gICAgICAgIHZhciB0aW1lVG9OZXh0VXBkYXRlID0gZ2V0VGltZVRvTmV4dFVwZGF0ZSh0aW1lc3RhbXAsIHN0ZXAsIHtcbiAgICAgICAgICBuZXh0U3RlcDogbmV4dFN0ZXAsXG4gICAgICAgICAgcHJldlN0ZXA6IHByZXZTdGVwLFxuICAgICAgICAgIG5vdzogbm93LFxuICAgICAgICAgIGZ1dHVyZTogZnV0dXJlLFxuICAgICAgICAgIHJvdW5kOiByb3VuZFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIFtmb3JtYXR0ZWREYXRlLCB0aW1lVG9OZXh0VXBkYXRlXTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZvcm1hdHRlZERhdGU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdERhdGVGb3JTdGVwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdERhdGVGb3JTdGVwKHRpbWVzdGFtcCwgc3RlcCwgc2Vjb25kc1Bhc3NlZCwgX3JlZjIpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIHZhciBsYWJlbHMgPSBfcmVmMi5sYWJlbHMsXG4gICAgICAgICAgbGFiZWxzVHlwZSA9IF9yZWYyLmxhYmVsc1R5cGUsXG4gICAgICAgICAgbm93TGFiZWwgPSBfcmVmMi5ub3dMYWJlbCxcbiAgICAgICAgICBub3cgPSBfcmVmMi5ub3csXG4gICAgICAgICAgZnV0dXJlID0gX3JlZjIuZnV0dXJlLFxuICAgICAgICAgIHJvdW5kID0gX3JlZjIucm91bmQ7XG5cbiAgICAgIC8vIElmIG5vIHN0ZXAgbWF0Y2hlcywgdGhlbiBvdXRwdXQgYW4gZW1wdHkgc3RyaW5nLlxuICAgICAgaWYgKCFzdGVwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0ZXAuZm9ybWF0KSB7XG4gICAgICAgIHJldHVybiBzdGVwLmZvcm1hdCh0aW1lc3RhbXAsIHRoaXMubG9jYWxlLCB7XG4gICAgICAgICAgZm9ybWF0QXM6IGZ1bmN0aW9uIGZvcm1hdEFzKHVuaXQsIHZhbHVlKSB7XG4gICAgICAgICAgICAvLyBNaW1pY2tzIGBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdC5mb3JtYXQoKWAuXG4gICAgICAgICAgICByZXR1cm4gX3RoaXMuZm9ybWF0VmFsdWUodmFsdWUsIHVuaXQsIHtcbiAgICAgICAgICAgICAgbGFiZWxzOiBsYWJlbHMsXG4gICAgICAgICAgICAgIGZ1dHVyZTogZnV0dXJlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIG5vdzogbm93LFxuICAgICAgICAgIGZ1dHVyZTogZnV0dXJlXG4gICAgICAgIH0pO1xuICAgICAgfSAvLyBcInVuaXRcIiBpcyBub3cgY2FsbGVkIFwiZm9ybWF0QXNcIi5cblxuXG4gICAgICB2YXIgdW5pdCA9IHN0ZXAudW5pdCB8fCBzdGVwLmZvcm1hdEFzO1xuXG4gICAgICBpZiAoIXVuaXQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiW2phdmFzY3JpcHQtdGltZS1hZ29dIEVhY2ggc3RlcCBtdXN0IGRlZmluZSBlaXRoZXIgYGZvcm1hdEFzYCBvciBgZm9ybWF0KClgLiBTdGVwOiBcIi5jb25jYXQoSlNPTi5zdHJpbmdpZnkoc3RlcCkpKTtcbiAgICAgIH0gLy8gYEludGwuUmVsYXRpdmVUaW1lRm9ybWF0YCBkb2Vzbid0IG9wZXJhdGUgaW4gXCJub3dcIiB1bml0cy5cbiAgICAgIC8vIFRoZXJlZm9yZSwgdGhyZWF0IFwibm93XCIgYXMgYSBzcGVjaWFsIGNhc2UuXG5cblxuICAgICAgaWYgKHVuaXQgPT09ICdub3cnKSB7XG4gICAgICAgIHJldHVybiBub3dMYWJlbDtcbiAgICAgIH0gLy8gQW1vdW50IGluIHVuaXRzLlxuXG5cbiAgICAgIHZhciBhbW91bnQgPSBNYXRoLmFicyhzZWNvbmRzUGFzc2VkKSAvIGdldFN0ZXBEZW5vbWluYXRvcihzdGVwKTsgLy8gQXBwbHkgZ3JhbnVsYXJpdHkgdG8gdGhlIHRpbWUgYW1vdW50XG4gICAgICAvLyAoYW5kIGZhbGxiYWNrIHRvIHRoZSBwcmV2aW91cyBzdGVwXG4gICAgICAvLyAgaWYgdGhlIGZpcnN0IGxldmVsIG9mIGdyYW51bGFyaXR5XG4gICAgICAvLyAgaXNuJ3QgbWV0IGJ5IHRoaXMgYW1vdW50KVxuICAgICAgLy9cbiAgICAgIC8vIGBncmFudWxhcml0eWAg4oCUIChhZHZhbmNlZCkgVGltZSBpbnRlcnZhbCB2YWx1ZSBcImdyYW51bGFyaXR5XCIuXG4gICAgICAvLyBGb3IgZXhhbXBsZSwgaXQgY291bGQgYmUgc2V0IHRvIGA1YCBmb3IgbWludXRlcyB0byBhbGxvdyBvbmx5IDUtbWludXRlIGluY3JlbWVudHNcbiAgICAgIC8vIHdoZW4gZm9ybWF0dGluZyB0aW1lIGludGVydmFsczogYDAgbWludXRlc2AsIGA1IG1pbnV0ZXNgLCBgMTAgbWludXRlc2AsIGV0Yy5cbiAgICAgIC8vIFBlcmhhcHMgdGhpcyBmZWF0dXJlIHdpbGwgYmUgcmVtb3ZlZCBiZWNhdXNlIHRoZXJlIHNlZW0gdG8gYmUgbm8gdXNlIGNhc2VzXG4gICAgICAvLyBvZiBpdCBpbiB0aGUgcmVhbCB3b3JsZC5cbiAgICAgIC8vXG5cbiAgICAgIGlmIChzdGVwLmdyYW51bGFyaXR5KSB7XG4gICAgICAgIC8vIFJlY2FsY3VsYXRlIHRoZSBhbW91bnQgb2Ygc2Vjb25kcyBwYXNzZWQgYmFzZWQgb24gZ3JhbnVsYXJpdHlcbiAgICAgICAgYW1vdW50ID0gZ2V0Um91bmRGdW5jdGlvbihyb3VuZCkoYW1vdW50IC8gc3RlcC5ncmFudWxhcml0eSkgKiBzdGVwLmdyYW51bGFyaXR5O1xuICAgICAgfVxuXG4gICAgICB2YXIgdmFsdWVGb3JGb3JtYXR0aW5nID0gLTEgKiBNYXRoLnNpZ24oc2Vjb25kc1Bhc3NlZCkgKiBnZXRSb3VuZEZ1bmN0aW9uKHJvdW5kKShhbW91bnQpOyAvLyBCeSBkZWZhdWx0LCB0aGlzIGxpYnJhcnkgZm9ybWF0cyBhIGAwYCBpbiBcInBhc3RcIiBtb2RlLFxuICAgICAgLy8gdW5sZXNzIGBmdXR1cmU6IHRydWVgIG9wdGlvbiBpcyBwYXNzZWQuXG4gICAgICAvLyBUaGlzIGlzIGRpZmZlcmVudCB0byBgcmVsYXRpdmUtdGltZS1mb3JtYXRgJ3MgYmVoYXZpb3JcbiAgICAgIC8vIHdoaWNoIGZvcm1hdHMgYSBgMGAgaW4gXCJmdXR1cmVcIiBtb2RlIGJ5IGRlZmF1bHQsIHVubGVzcyBpdCdzIGEgYC0wYC5cbiAgICAgIC8vIFNvLCBjb252ZXJ0IGAwYCB0byBgLTBgIGlmIGBmdXR1cmU6IHRydWVgIG9wdGlvbiB3YXNuJ3QgcGFzc2VkLlxuICAgICAgLy8gYD09PSAwYCBtYXRjaGVzIGJvdGggYDBgIGFuZCBgLTBgLlxuXG4gICAgICBpZiAodmFsdWVGb3JGb3JtYXR0aW5nID09PSAwKSB7XG4gICAgICAgIGlmIChmdXR1cmUpIHtcbiAgICAgICAgICB2YWx1ZUZvckZvcm1hdHRpbmcgPSAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHZhbHVlRm9yRm9ybWF0dGluZyA9IC0wO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHN3aXRjaCAobGFiZWxzVHlwZSkge1xuICAgICAgICBjYXNlICdsb25nJzpcbiAgICAgICAgY2FzZSAnc2hvcnQnOlxuICAgICAgICBjYXNlICduYXJyb3cnOlxuICAgICAgICAgIC8vIEZvcm1hdCB0aGUgYW1vdW50IHVzaW5nIGBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdGAuXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0Rm9ybWF0dGVyKGxhYmVsc1R5cGUpLmZvcm1hdCh2YWx1ZUZvckZvcm1hdHRpbmcsIHVuaXQpO1xuXG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgLy8gRm9ybWF0IHRoZSBhbW91bnQuXG4gICAgICAgICAgLy8gKG1pbWlja3MgYEludGwuUmVsYXRpdmVUaW1lRm9ybWF0YCBiZWhhdmlvciBmb3Igb3RoZXIgdGltZSBsYWJlbCBzdHlsZXMpXG4gICAgICAgICAgcmV0dXJuIHRoaXMuZm9ybWF0VmFsdWUodmFsdWVGb3JGb3JtYXR0aW5nLCB1bml0LCB7XG4gICAgICAgICAgICBsYWJlbHM6IGxhYmVscyxcbiAgICAgICAgICAgIGZ1dHVyZTogZnV0dXJlXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogTWltaWNrcyB3aGF0IGBJbnRsLlJlbGF0aXZlVGltZUZvcm1hdGAgZG9lcyBmb3IgYWRkaXRpb25hbCBsb2NhbGUgc3R5bGVzLlxyXG4gICAgICogQHBhcmFtICB7bnVtYmVyfSB2YWx1ZVxyXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSB1bml0XHJcbiAgICAgKiBAcGFyYW0gIHtvYmplY3R9IG9wdGlvbnMubGFiZWxzIOKAlCBSZWxhdGl2ZSB0aW1lIGxhYmVscy5cclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IFtvcHRpb25zLmZ1dHVyZV0g4oCUIFRlbGxzIGhvdyB0byBmb3JtYXQgdmFsdWUgYDBgOiBhcyBcImZ1dHVyZVwiIChgdHJ1ZWApIG9yIFwicGFzdFwiIChgZmFsc2VgKS4gSXMgYGZhbHNlYCBieSBkZWZhdWx0LCBidXQgc2hvdWxkIGhhdmUgYmVlbiBgdHJ1ZWAgYWN0dWFsbHkuXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdFZhbHVlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGZvcm1hdFZhbHVlKHZhbHVlLCB1bml0LCBfcmVmMykge1xuICAgICAgdmFyIGxhYmVscyA9IF9yZWYzLmxhYmVscyxcbiAgICAgICAgICBmdXR1cmUgPSBfcmVmMy5mdXR1cmU7XG4gICAgICByZXR1cm4gdGhpcy5nZXRGb3JtYXR0aW5nUnVsZShsYWJlbHMsIHVuaXQsIHZhbHVlLCB7XG4gICAgICAgIGZ1dHVyZTogZnV0dXJlXG4gICAgICB9KS5yZXBsYWNlKCd7MH0nLCB0aGlzLmZvcm1hdE51bWJlcihNYXRoLmFicyh2YWx1ZSkpKTtcbiAgICB9XG4gICAgLyoqXHJcbiAgICAgKiBSZXR1cm5zIGZvcm1hdHRpbmcgcnVsZSBmb3IgYHZhbHVlYCBpbiBgdW5pdHNgIChlaXRoZXIgaW4gcGFzdCBvciBpbiBmdXR1cmUpLlxyXG4gICAgICogQHBhcmFtIHtvYmplY3R9IGZvcm1hdHRpbmdSdWxlcyDigJQgUmVsYXRpdmUgdGltZSBsYWJlbHMgZm9yIGRpZmZlcmVudCB1bml0cy5cclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSB1bml0IC0gVGltZSBpbnRlcnZhbCBtZWFzdXJlbWVudCB1bml0LlxyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlIC0gVGltZSBpbnRlcnZhbCB2YWx1ZS5cclxuICAgICAqIEBwYXJhbSAge2Jvb2xlYW59IFtvcHRpb25zLmZ1dHVyZV0g4oCUIFRlbGxzIGhvdyB0byBmb3JtYXQgdmFsdWUgYDBgOiBhcyBcImZ1dHVyZVwiIChgdHJ1ZWApIG9yIFwicGFzdFwiIChgZmFsc2VgKS4gSXMgYGZhbHNlYCBieSBkZWZhdWx0LlxyXG4gICAgICogQHJldHVybiB7c3RyaW5nfVxyXG4gICAgICogQGV4YW1wbGVcclxuICAgICAqIC8vIFJldHVybnMgXCJ7MH0gZGF5cyBhZ29cIlxyXG4gICAgICogZ2V0Rm9ybWF0dGluZ1J1bGUoZW4ubG9uZywgXCJkYXlcIiwgLTIsICdlbicpXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEZvcm1hdHRpbmdSdWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZvcm1hdHRpbmdSdWxlKGZvcm1hdHRpbmdSdWxlcywgdW5pdCwgdmFsdWUsIF9yZWY0KSB7XG4gICAgICB2YXIgZnV0dXJlID0gX3JlZjQuZnV0dXJlO1xuICAgICAgLy8gUGFzc2luZyB0aGUgbGFuZ3VhZ2UgaXMgcmVxdWlyZWQgaW4gb3JkZXIgdG9cbiAgICAgIC8vIGJlIGFibGUgdG8gY29ycmVjdGx5IGNsYXNzaWZ5IHRoZSBgdmFsdWVgIGFzIGEgbnVtYmVyLlxuICAgICAgdmFyIGxvY2FsZSA9IHRoaXMubG9jYWxlO1xuICAgICAgZm9ybWF0dGluZ1J1bGVzID0gZm9ybWF0dGluZ1J1bGVzW3VuaXRdOyAvLyBDaGVjayBmb3IgYSBzcGVjaWFsIFwiY29tcGFjdGVkXCIgcnVsZXMgY2FzZTpcbiAgICAgIC8vIGlmIGZvcm1hdHRpbmcgcnVsZXMgYXJlIHRoZSBzYW1lIGZvciBcInBhc3RcIiBhbmQgXCJmdXR1cmVcIixcbiAgICAgIC8vIGFuZCBhbHNvIGZvciBhbGwgcG9zc2libGUgYHZhbHVlYHMsIHRoZW4gdGhvc2UgcnVsZXMgYXJlXG4gICAgICAvLyBzdG9yZWQgYXMgYSBzaW5nbGUgc3RyaW5nLlxuXG4gICAgICBpZiAodHlwZW9mIGZvcm1hdHRpbmdSdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIGZvcm1hdHRpbmdSdWxlcztcbiAgICAgIH0gLy8gQ2hvb3NlIGVpdGhlciBcInBhc3RcIiBvciBcImZ1dHVyZVwiIGJhc2VkIG9uIHRpbWUgYHZhbHVlYCBzaWduLlxuICAgICAgLy8gSWYgXCJwYXN0XCIgaXMgc2FtZSBhcyBcImZ1dHVyZVwiIHRoZW4gdGhleSdyZSBzdG9yZWQgYXMgXCJvdGhlclwiLlxuICAgICAgLy8gSWYgdGhlcmUncyBvbmx5IFwib3RoZXJcIiB0aGVuIGl0J3MgYmVpbmcgY29sbGFwc2VkLlxuXG5cbiAgICAgIHZhciBwYXN0T3JGdXR1cmUgPSB2YWx1ZSA9PT0gMCA/IGZ1dHVyZSA/ICdmdXR1cmUnIDogJ3Bhc3QnIDogdmFsdWUgPCAwID8gJ3Bhc3QnIDogJ2Z1dHVyZSc7XG4gICAgICB2YXIgcXVhbnRpZmllclJ1bGVzID0gZm9ybWF0dGluZ1J1bGVzW3Bhc3RPckZ1dHVyZV0gfHwgZm9ybWF0dGluZ1J1bGVzOyAvLyBCdW5kbGUgc2l6ZSBvcHRpbWl6YXRpb24gdGVjaG5pcXVlLlxuXG4gICAgICBpZiAodHlwZW9mIHF1YW50aWZpZXJSdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHF1YW50aWZpZXJSdWxlcztcbiAgICAgIH0gLy8gUXVhbnRpZnkgYHZhbHVlYC5cblxuXG4gICAgICB2YXIgcXVhbnRpZmllciA9IHRoaXMuZ2V0UGx1cmFsUnVsZXMoKS5zZWxlY3QoTWF0aC5hYnModmFsdWUpKTsgLy8gXCJvdGhlclwiIHJ1bGUgaXMgc3VwcG9zZWQgdG8gYWx3YXlzIGJlIHByZXNlbnQuXG4gICAgICAvLyBJZiBvbmx5IFwib3RoZXJcIiBydWxlIGlzIHByZXNlbnQgdGhlbiBcInJ1bGVzXCIgaXMgbm90IGFuIG9iamVjdCBhbmQgaXMgYSBzdHJpbmcuXG5cbiAgICAgIHJldHVybiBxdWFudGlmaWVyUnVsZXNbcXVhbnRpZmllcl0gfHwgcXVhbnRpZmllclJ1bGVzLm90aGVyO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIEZvcm1hdHMgYSBudW1iZXIgaW50byBhIHN0cmluZy5cclxuICAgICAqIFVzZXMgYEludGwuTnVtYmVyRm9ybWF0YCB3aGVuIGF2YWlsYWJsZS5cclxuICAgICAqIEBwYXJhbSAge251bWJlcn0gbnVtYmVyXHJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9XHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImZvcm1hdE51bWJlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmb3JtYXROdW1iZXIobnVtYmVyKSB7XG4gICAgICByZXR1cm4gdGhpcy5udW1iZXJGb3JtYXQgPyB0aGlzLm51bWJlckZvcm1hdC5mb3JtYXQobnVtYmVyKSA6IFN0cmluZyhudW1iZXIpO1xuICAgIH1cbiAgICAvKipcclxuICAgICAqIFJldHVybnMgYW4gYEludGwuUmVsYXRpdmVUaW1lRm9ybWF0YCBmb3IgYSBnaXZlbiBgbGFiZWxzVHlwZWAuXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbGFiZWxzVHlwZVxyXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBgSW50bC5SZWxhdGl2ZVRpbWVGb3JtYXRgIGluc3RhbmNlXHJcbiAgICAgKi9cblxuICB9LCB7XG4gICAga2V5OiBcImdldEZvcm1hdHRlclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGb3JtYXR0ZXIobGFiZWxzVHlwZSkge1xuICAgICAgLy8gYEludGwuUmVsYXRpdmVUaW1lRm9ybWF0YCBpbnN0YW5jZSBjcmVhdGlvbiBpcyAoaHlwb3RoZXRpY2FsbHkpIGFzc3VtZWRcbiAgICAgIC8vIGEgbGVuZ3RoeSBvcGVyYXRpb24gc28gdGhlIGluc3RhbmNlcyBhcmUgY2FjaGVkIGFuZCByZXVzZWQuXG4gICAgICByZXR1cm4gdGhpcy5yZWxhdGl2ZVRpbWVGb3JtYXRDYWNoZS5nZXQodGhpcy5sb2NhbGUsIGxhYmVsc1R5cGUpIHx8IHRoaXMucmVsYXRpdmVUaW1lRm9ybWF0Q2FjaGUucHV0KHRoaXMubG9jYWxlLCBsYWJlbHNUeXBlLCBuZXcgdGhpcy5JbnRsUmVsYXRpdmVUaW1lRm9ybWF0KHRoaXMubG9jYWxlLCB7XG4gICAgICAgIHN0eWxlOiBsYWJlbHNUeXBlXG4gICAgICB9KSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogUmV0dXJucyBhbiBgSW50bC5QbHVyYWxSdWxlc2AgaW5zdGFuY2UuXHJcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IGBJbnRsLlBsdXJhbFJ1bGVzYCBpbnN0YW5jZVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRQbHVyYWxSdWxlc1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRQbHVyYWxSdWxlcygpIHtcbiAgICAgIC8vIGBJbnRsLlBsdXJhbFJ1bGVzYCBpbnN0YW5jZSBjcmVhdGlvbiBpcyAoaHlwb3RoZXRpY2FsbHkpIGFzc3VtZWRcbiAgICAgIC8vIGEgbGVuZ3RoeSBvcGVyYXRpb24gc28gdGhlIGluc3RhbmNlcyBhcmUgY2FjaGVkIGFuZCByZXVzZWQuXG4gICAgICByZXR1cm4gdGhpcy5wbHVyYWxSdWxlc0NhY2hlLmdldCh0aGlzLmxvY2FsZSkgfHwgdGhpcy5wbHVyYWxSdWxlc0NhY2hlLnB1dCh0aGlzLmxvY2FsZSwgbmV3IHRoaXMuSW50bFBsdXJhbFJ1bGVzKHRoaXMubG9jYWxlKSk7XG4gICAgfVxuICAgIC8qKlxyXG4gICAgICogR2V0cyBsb2NhbGl6ZWQgbGFiZWxzIGZvciB0aGlzIHR5cGUgb2YgbGFiZWxzLlxyXG4gICAgICpcclxuICAgICAqIEBwYXJhbSB7KHN0cmluZ3xzdHJpbmdbXSl9IGxhYmVsc1R5cGUgLSBSZWxhdGl2ZSBkYXRlL3RpbWUgbGFiZWxzIHR5cGUuXHJcbiAgICAgKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBJZiBpdCdzIGFuIGFycmF5IHRoZW4gYWxsIGxhYmVsIHR5cGVzIGFyZSB0cmllZFxyXG4gICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW50aWwgYSBzdWl0YWJsZSBvbmUgaXMgZm91bmQuXHJcbiAgICAgKlxyXG4gICAgICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBhbiBvYmplY3Qgb2Ygc2hhcGUgeyBsYWJlbHNUeXBlLCBsYWJlbHMgfVxyXG4gICAgICovXG5cbiAgfSwge1xuICAgIGtleTogXCJnZXRMYWJlbHNcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0TGFiZWxzKCkge1xuICAgICAgdmFyIGxhYmVsc1R5cGUgPSBhcmd1bWVudHMubGVuZ3RoID4gMCAmJiBhcmd1bWVudHNbMF0gIT09IHVuZGVmaW5lZCA/IGFyZ3VtZW50c1swXSA6IFtdO1xuXG4gICAgICAvLyBDb252ZXJ0IGBsYWJlbHNgIHRvIGFuIGFycmF5LlxuICAgICAgaWYgKHR5cGVvZiBsYWJlbHNUeXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICBsYWJlbHNUeXBlID0gW2xhYmVsc1R5cGVdO1xuICAgICAgfSAvLyBTdXBwb3J0cyBsZWdhY3kgXCJ0aW55XCIgYW5kIFwibWluaS10aW1lXCIgbGFiZWwgc3R5bGVzLlxuXG5cbiAgICAgIGxhYmVsc1R5cGUgPSBsYWJlbHNUeXBlLm1hcChmdW5jdGlvbiAobGFiZWxzVHlwZSkge1xuICAgICAgICBzd2l0Y2ggKGxhYmVsc1R5cGUpIHtcbiAgICAgICAgICBjYXNlICd0aW55JzpcbiAgICAgICAgICBjYXNlICdtaW5pLXRpbWUnOlxuICAgICAgICAgICAgcmV0dXJuICdtaW5pJztcblxuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbGFiZWxzVHlwZTtcbiAgICAgICAgfVxuICAgICAgfSk7IC8vIFwibG9uZ1wiIGxhYmVscyB0eXBlIGlzIHRoZSBkZWZhdWx0IG9uZS5cbiAgICAgIC8vIChpdCdzIGFsd2F5cyBwcmVzZW50IGZvciBhbGwgbGFuZ3VhZ2VzKVxuXG4gICAgICBsYWJlbHNUeXBlID0gbGFiZWxzVHlwZS5jb25jYXQoJ2xvbmcnKTsgLy8gRmluZCBhIHN1aXRhYmxlIGxhYmVscyB0eXBlLlxuXG4gICAgICB2YXIgbG9jYWxlRGF0YSA9IGdldExvY2FsZURhdGEodGhpcy5sb2NhbGUpO1xuXG4gICAgICBmb3IgKHZhciBfaXRlcmF0b3IgPSBfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlKGxhYmVsc1R5cGUpLCBfc3RlcDsgIShfc3RlcCA9IF9pdGVyYXRvcigpKS5kb25lOykge1xuICAgICAgICB2YXIgX2xhYmVsc1R5cGUgPSBfc3RlcC52YWx1ZTtcblxuICAgICAgICBpZiAobG9jYWxlRGF0YVtfbGFiZWxzVHlwZV0pIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGFiZWxzVHlwZTogX2xhYmVsc1R5cGUsXG4gICAgICAgICAgICBsYWJlbHM6IGxvY2FsZURhdGFbX2xhYmVsc1R5cGVdXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBUaW1lQWdvO1xufSgpO1xuLyoqXHJcbiAqIERlZmF1bHQgbG9jYWxlIGdsb2JhbCB2YXJpYWJsZS5cclxuICovXG5cblxuZXhwb3J0IHsgVGltZUFnbyBhcyBkZWZhdWx0IH07XG52YXIgZGVmYXVsdExvY2FsZSA9ICdlbic7XG4vKipcclxuICogR2V0cyBkZWZhdWx0IGxvY2FsZS5cclxuICogQHJldHVybiAge3N0cmluZ30gbG9jYWxlXHJcbiAqL1xuXG5UaW1lQWdvLmdldERlZmF1bHRMb2NhbGUgPSBmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBkZWZhdWx0TG9jYWxlO1xufTtcbi8qKlxyXG4gKiBTZXRzIGRlZmF1bHQgbG9jYWxlLlxyXG4gKiBAcGFyYW0gIHtzdHJpbmd9IGxvY2FsZVxyXG4gKi9cblxuXG5UaW1lQWdvLnNldERlZmF1bHRMb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlKSB7XG4gIHJldHVybiBkZWZhdWx0TG9jYWxlID0gbG9jYWxlO1xufTtcbi8qKlxyXG4gKiBBZGRzIGxvY2FsZSBkYXRhIGZvciBhIHNwZWNpZmljIGxvY2FsZSBhbmQgbWFya3MgdGhlIGxvY2FsZSBhcyBkZWZhdWx0LlxyXG4gKiBAcGFyYW0ge09iamVjdH0gbG9jYWxlRGF0YVxyXG4gKi9cblxuXG5UaW1lQWdvLmFkZERlZmF1bHRMb2NhbGUgPSBmdW5jdGlvbiAobG9jYWxlRGF0YSkge1xuICBpZiAoZGVmYXVsdExvY2FsZUhhc0JlZW5TcGVjaWZpZWQpIHtcbiAgICByZXR1cm4gY29uc29sZS5lcnJvcignW2phdmFzY3JpcHQtdGltZS1hZ29dIGBUaW1lQWdvLmFkZERlZmF1bHRMb2NhbGUoKWAgY2FuIG9ubHkgYmUgY2FsbGVkIG9uY2UuIFRvIGFkZCBvdGhlciBsb2NhbGVzLCB1c2UgYFRpbWVBZ28uYWRkTG9jYWxlKClgLicpO1xuICB9XG5cbiAgZGVmYXVsdExvY2FsZUhhc0JlZW5TcGVjaWZpZWQgPSB0cnVlO1xuICBUaW1lQWdvLnNldERlZmF1bHRMb2NhbGUobG9jYWxlRGF0YS5sb2NhbGUpO1xuICBUaW1lQWdvLmFkZExvY2FsZShsb2NhbGVEYXRhKTtcbn07XG5cbnZhciBkZWZhdWx0TG9jYWxlSGFzQmVlblNwZWNpZmllZDtcbi8qKlxyXG4gKiBBZGRzIGxvY2FsZSBkYXRhIGZvciBhIHNwZWNpZmljIGxvY2FsZS5cclxuICogQHBhcmFtIHtPYmplY3R9IGxvY2FsZURhdGFcclxuICovXG5cblRpbWVBZ28uYWRkTG9jYWxlID0gZnVuY3Rpb24gKGxvY2FsZURhdGEpIHtcbiAgYWRkTG9jYWxlRGF0YShsb2NhbGVEYXRhKTtcbiAgUmVsYXRpdmVUaW1lRm9ybWF0UG9seWZpbGwuYWRkTG9jYWxlKGxvY2FsZURhdGEpO1xufTtcbi8qKlxyXG4gKiAobGVnYWN5IGFsaWFzKVxyXG4gKiBBZGRzIGxvY2FsZSBkYXRhIGZvciBhIHNwZWNpZmljIGxvY2FsZS5cclxuICogQHBhcmFtIHtPYmplY3R9IGxvY2FsZURhdGFcclxuICogQGRlcHJlY2F0ZWRcclxuICovXG5cblxuVGltZUFnby5sb2NhbGUgPSBUaW1lQWdvLmFkZExvY2FsZTtcbi8qKlxyXG4gKiBBZGRzIGN1c3RvbSBsYWJlbHMgdG8gbG9jYWxlIGRhdGEuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBsb2NhbGVcclxuICogQHBhcmFtIHtzdHJpbmd9IG5hbWVcclxuICogQHBhcmFtIHtvYmplY3R9IGxhYmVsc1xyXG4gKi9cblxuVGltZUFnby5hZGRMYWJlbHMgPSBmdW5jdGlvbiAobG9jYWxlLCBuYW1lLCBsYWJlbHMpIHtcbiAgdmFyIGxvY2FsZURhdGEgPSBnZXRMb2NhbGVEYXRhKGxvY2FsZSk7XG5cbiAgaWYgKCFsb2NhbGVEYXRhKSB7XG4gICAgYWRkTG9jYWxlRGF0YSh7XG4gICAgICBsb2NhbGU6IGxvY2FsZVxuICAgIH0pO1xuICAgIGxvY2FsZURhdGEgPSBnZXRMb2NhbGVEYXRhKGxvY2FsZSk7IC8vIHRocm93IG5ldyBFcnJvcihgW2phdmFzY3JpcHQtdGltZS1hZ29dIE5vIGRhdGEgZm9yIGxvY2FsZSBcIiR7bG9jYWxlfVwiYClcbiAgfVxuXG4gIGxvY2FsZURhdGFbbmFtZV0gPSBsYWJlbHM7XG59OyAvLyBOb3JtYWxpemVzIGAuZm9ybWF0KClgIGB0aW1lYCBhcmd1bWVudC5cblxuXG5mdW5jdGlvbiBnZXRUaW1lc3RhbXAoaW5wdXQpIHtcbiAgaWYgKGlucHV0LmNvbnN0cnVjdG9yID09PSBEYXRlIHx8IGlzTW9ja2VkRGF0ZShpbnB1dCkpIHtcbiAgICByZXR1cm4gaW5wdXQuZ2V0VGltZSgpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiBpbnB1dCA9PT0gJ251bWJlcicpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH0gLy8gRm9yIHNvbWUgd2VpcmQgcmVhc29uIGlzdGFuYnVsIGRvZXNuJ3Qgc2VlIHRoaXMgYHRocm93YCBjb3ZlcmVkLlxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG5cblxuICB0aHJvdyBuZXcgRXJyb3IoXCJVbnN1cHBvcnRlZCByZWxhdGl2ZSB0aW1lIGZvcm1hdHRlciBpbnB1dDogXCIuY29uY2F0KF90eXBlb2YoaW5wdXQpLCBcIiwgXCIpLmNvbmNhdChpbnB1dCkpO1xufSAvLyBEdXJpbmcgdGVzdGluZyB2aWEgc29tZSB0ZXN0aW5nIGxpYnJhcmllcyBgRGF0ZWBzIGFyZW4ndCBhY3R1YWxseSBgRGF0ZWBzLlxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2NhdGFtcGhldGFtaW5lL2phdmFzY3JpcHQtdGltZS1hZ28vaXNzdWVzLzIyXG5cblxuZnVuY3Rpb24gaXNNb2NrZWREYXRlKG9iamVjdCkge1xuICByZXR1cm4gX3R5cGVvZihvYmplY3QpID09PSAnb2JqZWN0JyAmJiB0eXBlb2Ygb2JqZWN0LmdldFRpbWUgPT09ICdmdW5jdGlvbic7XG59IC8vIEdldCBhdmFpbGFibGUgdGltZSBpbnRlcnZhbCBtZWFzdXJlbWVudCB1bml0cy5cblxuXG5mdW5jdGlvbiBnZXRUaW1lSW50ZXJ2YWxNZWFzdXJlbWVudFVuaXRzKGFsbG93ZWRVbml0cywgbGFiZWxzLCBub3dMYWJlbCkge1xuICAvLyBHZXQgYWxsIHRpbWUgaW50ZXJ2YWwgbWVhc3VyZW1lbnQgdW5pdHMgdGhhdCdyZSBhdmFpbGFibGVcbiAgLy8gaW4gbG9jYWxlIGRhdGEgZm9yIGEgZ2l2ZW4gdGltZSBsYWJlbHMgc3R5bGUuXG4gIHZhciB1bml0cyA9IE9iamVjdC5rZXlzKGxhYmVscyk7IC8vIGBub3dgIHVuaXQgaXMgaGFuZGxlZCBzZXBhcmF0ZWx5IGFuZCBpcyBzaGlwcGVkIGluIGl0cyBvd24gYG5vdy5qc29uYCBmaWxlLlxuICAvLyBgbm93Lmpzb25gIGlzbid0IHByZXNlbnQgZm9yIGFsbCBsb2NhbGVzLCBzbyBpdCBjb3VsZCBiZSBzdWJzdGl0dXRlZCB3aXRoXG4gIC8vIFwiLnNlY29uZC5jdXJyZW50XCIuXG4gIC8vIEFkZCBgbm93YCB1bml0IGlmIGl0J3MgYXZhaWxhYmxlIGluIGxvY2FsZSBkYXRhLlxuXG4gIGlmIChub3dMYWJlbCkge1xuICAgIHVuaXRzLnB1c2goJ25vdycpO1xuICB9IC8vIElmIG9ubHkgYSBzcGVjaWZpYyBzZXQgb2YgYXZhaWxhYmxlIHRpbWUgbWVhc3VyZW1lbnQgdW5pdHMgY2FuIGJlIHVzZWRcbiAgLy8gdGhlbiBvbmx5IHRob3NlIHVuaXRzIGFyZSBhbGxvd2VkIChpZiB0aGV5J3JlIHByZXNlbnQgaW4gbG9jYWxlIGRhdGEpLlxuXG5cbiAgaWYgKGFsbG93ZWRVbml0cykge1xuICAgIHVuaXRzID0gYWxsb3dlZFVuaXRzLmZpbHRlcihmdW5jdGlvbiAodW5pdCkge1xuICAgICAgcmV0dXJuIHVuaXQgPT09ICdub3cnIHx8IHVuaXRzLmluZGV4T2YodW5pdCkgPj0gMDtcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB1bml0cztcbn1cblxuZnVuY3Rpb24gZ2V0Tm93TGFiZWwobGFiZWxzLCBub3dMYWJlbHMsIGxvbmdMYWJlbHMsIGZ1dHVyZSkge1xuICB2YXIgbm93TGFiZWwgPSBsYWJlbHMubm93IHx8IG5vd0xhYmVscyAmJiBub3dMYWJlbHMubm93OyAvLyBTcGVjaWZpYyBcIm5vd1wiIG1lc3NhZ2UgZm9ybSBleHRlbmRlZCBsb2NhbGUgZGF0YSAoaWYgcHJlc2VudCkuXG5cbiAgaWYgKG5vd0xhYmVsKSB7XG4gICAgLy8gQnVuZGxlIHNpemUgb3B0aW1pemF0aW9uIHRlY2huaXF1ZS5cbiAgICBpZiAodHlwZW9mIG5vd0xhYmVsID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5vd0xhYmVsO1xuICAgIH0gLy8gTm90IGhhbmRsaW5nIGB2YWx1ZSA9PT0gMGAgYXMgYGxvY2FsZURhdGEubm93LmN1cnJlbnRgIGhlcmVcbiAgICAvLyBiZWNhdXNlIGl0IHdvdWxkbid0IG1ha2Ugc2Vuc2U6IFwibm93XCIgaXMgYSBtb21lbnQsXG4gICAgLy8gc28gb25lIGNhbid0IHBvc3NpYmx5IGRpZmZlcmVudGlhdGUgYmV0d2VlbiBhXG4gICAgLy8gXCJwcmV2aW91c1wiIG1vbWVudCwgYSBcImN1cnJlbnRcIiBtb21lbnQgYW5kIGEgXCJuZXh0IG1vbWVudFwiLlxuICAgIC8vIEl0IGNhbiBvbmx5IGJlIGRpZmZlcmVudGlhdGVkIGJldHdlZW4gXCJwYXN0XCIgYW5kIFwiZnV0dXJlXCIuXG5cblxuICAgIGlmIChmdXR1cmUpIHtcbiAgICAgIHJldHVybiBub3dMYWJlbC5mdXR1cmU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBub3dMYWJlbC5wYXN0O1xuICAgIH1cbiAgfSAvLyBVc2UgXCIuc2Vjb25kLmN1cnJlbnRcIiBhcyBcIm5vd1wiIG1lc3NhZ2UuXG5cblxuICBpZiAobG9uZ0xhYmVscyAmJiBsb25nTGFiZWxzLnNlY29uZCAmJiBsb25nTGFiZWxzLnNlY29uZC5jdXJyZW50KSB7XG4gICAgcmV0dXJuIGxvbmdMYWJlbHMuc2Vjb25kLmN1cnJlbnQ7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTdHlsZSh2YXJpYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHZhcmlhYmxlID09PSAnc3RyaW5nJyB8fCBpc1N0eWxlT2JqZWN0KHZhcmlhYmxlKTtcbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPVRpbWVBZ28uanMubWFwIiwiZXhwb3J0IGRlZmF1bHQge1xuXHRcImxvY2FsZVwiOiBcImVuXCIsXG5cdFwibG9uZ1wiOiB7XG5cdFx0XCJ5ZWFyXCI6IHtcblx0XHRcdFwicHJldmlvdXNcIjogXCJsYXN0IHllYXJcIixcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgeWVhclwiLFxuXHRcdFx0XCJuZXh0XCI6IFwibmV4dCB5ZWFyXCIsXG5cdFx0XHRcInBhc3RcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcInswfSB5ZWFyIGFnb1wiLFxuXHRcdFx0XHRcIm90aGVyXCI6IFwiezB9IHllYXJzIGFnb1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJmdXR1cmVcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcImluIHswfSB5ZWFyXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJpbiB7MH0geWVhcnNcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJxdWFydGVyXCI6IHtcblx0XHRcdFwicHJldmlvdXNcIjogXCJsYXN0IHF1YXJ0ZXJcIixcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgcXVhcnRlclwiLFxuXHRcdFx0XCJuZXh0XCI6IFwibmV4dCBxdWFydGVyXCIsXG5cdFx0XHRcInBhc3RcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcInswfSBxdWFydGVyIGFnb1wiLFxuXHRcdFx0XHRcIm90aGVyXCI6IFwiezB9IHF1YXJ0ZXJzIGFnb1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJmdXR1cmVcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcImluIHswfSBxdWFydGVyXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJpbiB7MH0gcXVhcnRlcnNcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJtb250aFwiOiB7XG5cdFx0XHRcInByZXZpb3VzXCI6IFwibGFzdCBtb250aFwiLFxuXHRcdFx0XCJjdXJyZW50XCI6IFwidGhpcyBtb250aFwiLFxuXHRcdFx0XCJuZXh0XCI6IFwibmV4dCBtb250aFwiLFxuXHRcdFx0XCJwYXN0XCI6IHtcblx0XHRcdFx0XCJvbmVcIjogXCJ7MH0gbW9udGggYWdvXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJ7MH0gbW9udGhzIGFnb1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJmdXR1cmVcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcImluIHswfSBtb250aFwiLFxuXHRcdFx0XHRcIm90aGVyXCI6IFwiaW4gezB9IG1vbnRoc1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIndlZWtcIjoge1xuXHRcdFx0XCJwcmV2aW91c1wiOiBcImxhc3Qgd2Vla1wiLFxuXHRcdFx0XCJjdXJyZW50XCI6IFwidGhpcyB3ZWVrXCIsXG5cdFx0XHRcIm5leHRcIjogXCJuZXh0IHdlZWtcIixcblx0XHRcdFwicGFzdFwiOiB7XG5cdFx0XHRcdFwib25lXCI6IFwiezB9IHdlZWsgYWdvXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJ7MH0gd2Vla3MgYWdvXCJcblx0XHRcdH0sXG5cdFx0XHRcImZ1dHVyZVwiOiB7XG5cdFx0XHRcdFwib25lXCI6IFwiaW4gezB9IHdlZWtcIixcblx0XHRcdFx0XCJvdGhlclwiOiBcImluIHswfSB3ZWVrc1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcImRheVwiOiB7XG5cdFx0XHRcInByZXZpb3VzXCI6IFwieWVzdGVyZGF5XCIsXG5cdFx0XHRcImN1cnJlbnRcIjogXCJ0b2RheVwiLFxuXHRcdFx0XCJuZXh0XCI6IFwidG9tb3Jyb3dcIixcblx0XHRcdFwicGFzdFwiOiB7XG5cdFx0XHRcdFwib25lXCI6IFwiezB9IGRheSBhZ29cIixcblx0XHRcdFx0XCJvdGhlclwiOiBcInswfSBkYXlzIGFnb1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJmdXR1cmVcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcImluIHswfSBkYXlcIixcblx0XHRcdFx0XCJvdGhlclwiOiBcImluIHswfSBkYXlzXCJcblx0XHRcdH1cblx0XHR9LFxuXHRcdFwiaG91clwiOiB7XG5cdFx0XHRcImN1cnJlbnRcIjogXCJ0aGlzIGhvdXJcIixcblx0XHRcdFwicGFzdFwiOiB7XG5cdFx0XHRcdFwib25lXCI6IFwiezB9IGhvdXIgYWdvXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJ7MH0gaG91cnMgYWdvXCJcblx0XHRcdH0sXG5cdFx0XHRcImZ1dHVyZVwiOiB7XG5cdFx0XHRcdFwib25lXCI6IFwiaW4gezB9IGhvdXJcIixcblx0XHRcdFx0XCJvdGhlclwiOiBcImluIHswfSBob3Vyc1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcIm1pbnV0ZVwiOiB7XG5cdFx0XHRcImN1cnJlbnRcIjogXCJ0aGlzIG1pbnV0ZVwiLFxuXHRcdFx0XCJwYXN0XCI6IHtcblx0XHRcdFx0XCJvbmVcIjogXCJ7MH0gbWludXRlIGFnb1wiLFxuXHRcdFx0XHRcIm90aGVyXCI6IFwiezB9IG1pbnV0ZXMgYWdvXCJcblx0XHRcdH0sXG5cdFx0XHRcImZ1dHVyZVwiOiB7XG5cdFx0XHRcdFwib25lXCI6IFwiaW4gezB9IG1pbnV0ZVwiLFxuXHRcdFx0XHRcIm90aGVyXCI6IFwiaW4gezB9IG1pbnV0ZXNcIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJzZWNvbmRcIjoge1xuXHRcdFx0XCJjdXJyZW50XCI6IFwibm93XCIsXG5cdFx0XHRcInBhc3RcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcInswfSBzZWNvbmQgYWdvXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJ7MH0gc2Vjb25kcyBhZ29cIlxuXHRcdFx0fSxcblx0XHRcdFwiZnV0dXJlXCI6IHtcblx0XHRcdFx0XCJvbmVcIjogXCJpbiB7MH0gc2Vjb25kXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJpbiB7MH0gc2Vjb25kc1wiXG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRcInNob3J0XCI6IHtcblx0XHRcInllYXJcIjoge1xuXHRcdFx0XCJwcmV2aW91c1wiOiBcImxhc3QgeXIuXCIsXG5cdFx0XHRcImN1cnJlbnRcIjogXCJ0aGlzIHlyLlwiLFxuXHRcdFx0XCJuZXh0XCI6IFwibmV4dCB5ci5cIixcblx0XHRcdFwicGFzdFwiOiBcInswfSB5ci4gYWdvXCIsXG5cdFx0XHRcImZ1dHVyZVwiOiBcImluIHswfSB5ci5cIlxuXHRcdH0sXG5cdFx0XCJxdWFydGVyXCI6IHtcblx0XHRcdFwicHJldmlvdXNcIjogXCJsYXN0IHF0ci5cIixcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgcXRyLlwiLFxuXHRcdFx0XCJuZXh0XCI6IFwibmV4dCBxdHIuXCIsXG5cdFx0XHRcInBhc3RcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcInswfSBxdHIuIGFnb1wiLFxuXHRcdFx0XHRcIm90aGVyXCI6IFwiezB9IHF0cnMuIGFnb1wiXG5cdFx0XHR9LFxuXHRcdFx0XCJmdXR1cmVcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcImluIHswfSBxdHIuXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJpbiB7MH0gcXRycy5cIlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0XCJtb250aFwiOiB7XG5cdFx0XHRcInByZXZpb3VzXCI6IFwibGFzdCBtby5cIixcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgbW8uXCIsXG5cdFx0XHRcIm5leHRcIjogXCJuZXh0IG1vLlwiLFxuXHRcdFx0XCJwYXN0XCI6IFwiezB9IG1vLiBhZ29cIixcblx0XHRcdFwiZnV0dXJlXCI6IFwiaW4gezB9IG1vLlwiXG5cdFx0fSxcblx0XHRcIndlZWtcIjoge1xuXHRcdFx0XCJwcmV2aW91c1wiOiBcImxhc3Qgd2suXCIsXG5cdFx0XHRcImN1cnJlbnRcIjogXCJ0aGlzIHdrLlwiLFxuXHRcdFx0XCJuZXh0XCI6IFwibmV4dCB3ay5cIixcblx0XHRcdFwicGFzdFwiOiBcInswfSB3ay4gYWdvXCIsXG5cdFx0XHRcImZ1dHVyZVwiOiBcImluIHswfSB3ay5cIlxuXHRcdH0sXG5cdFx0XCJkYXlcIjoge1xuXHRcdFx0XCJwcmV2aW91c1wiOiBcInllc3RlcmRheVwiLFxuXHRcdFx0XCJjdXJyZW50XCI6IFwidG9kYXlcIixcblx0XHRcdFwibmV4dFwiOiBcInRvbW9ycm93XCIsXG5cdFx0XHRcInBhc3RcIjoge1xuXHRcdFx0XHRcIm9uZVwiOiBcInswfSBkYXkgYWdvXCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJ7MH0gZGF5cyBhZ29cIlxuXHRcdFx0fSxcblx0XHRcdFwiZnV0dXJlXCI6IHtcblx0XHRcdFx0XCJvbmVcIjogXCJpbiB7MH0gZGF5XCIsXG5cdFx0XHRcdFwib3RoZXJcIjogXCJpbiB7MH0gZGF5c1wiXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRcImhvdXJcIjoge1xuXHRcdFx0XCJjdXJyZW50XCI6IFwidGhpcyBob3VyXCIsXG5cdFx0XHRcInBhc3RcIjogXCJ7MH0gaHIuIGFnb1wiLFxuXHRcdFx0XCJmdXR1cmVcIjogXCJpbiB7MH0gaHIuXCJcblx0XHR9LFxuXHRcdFwibWludXRlXCI6IHtcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgbWludXRlXCIsXG5cdFx0XHRcInBhc3RcIjogXCJ7MH0gbWluLiBhZ29cIixcblx0XHRcdFwiZnV0dXJlXCI6IFwiaW4gezB9IG1pbi5cIlxuXHRcdH0sXG5cdFx0XCJzZWNvbmRcIjoge1xuXHRcdFx0XCJjdXJyZW50XCI6IFwibm93XCIsXG5cdFx0XHRcInBhc3RcIjogXCJ7MH0gc2VjLiBhZ29cIixcblx0XHRcdFwiZnV0dXJlXCI6IFwiaW4gezB9IHNlYy5cIlxuXHRcdH1cblx0fSxcblx0XCJuYXJyb3dcIjoge1xuXHRcdFwieWVhclwiOiB7XG5cdFx0XHRcInByZXZpb3VzXCI6IFwibGFzdCB5ci5cIixcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgeXIuXCIsXG5cdFx0XHRcIm5leHRcIjogXCJuZXh0IHlyLlwiLFxuXHRcdFx0XCJwYXN0XCI6IFwiezB9eSBhZ29cIixcblx0XHRcdFwiZnV0dXJlXCI6IFwiaW4gezB9eVwiXG5cdFx0fSxcblx0XHRcInF1YXJ0ZXJcIjoge1xuXHRcdFx0XCJwcmV2aW91c1wiOiBcImxhc3QgcXRyLlwiLFxuXHRcdFx0XCJjdXJyZW50XCI6IFwidGhpcyBxdHIuXCIsXG5cdFx0XHRcIm5leHRcIjogXCJuZXh0IHF0ci5cIixcblx0XHRcdFwicGFzdFwiOiBcInswfXEgYWdvXCIsXG5cdFx0XHRcImZ1dHVyZVwiOiBcImluIHswfXFcIlxuXHRcdH0sXG5cdFx0XCJtb250aFwiOiB7XG5cdFx0XHRcInByZXZpb3VzXCI6IFwibGFzdCBtby5cIixcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgbW8uXCIsXG5cdFx0XHRcIm5leHRcIjogXCJuZXh0IG1vLlwiLFxuXHRcdFx0XCJwYXN0XCI6IFwiezB9bW8gYWdvXCIsXG5cdFx0XHRcImZ1dHVyZVwiOiBcImluIHswfW1vXCJcblx0XHR9LFxuXHRcdFwid2Vla1wiOiB7XG5cdFx0XHRcInByZXZpb3VzXCI6IFwibGFzdCB3ay5cIixcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgd2suXCIsXG5cdFx0XHRcIm5leHRcIjogXCJuZXh0IHdrLlwiLFxuXHRcdFx0XCJwYXN0XCI6IFwiezB9dyBhZ29cIixcblx0XHRcdFwiZnV0dXJlXCI6IFwiaW4gezB9d1wiXG5cdFx0fSxcblx0XHRcImRheVwiOiB7XG5cdFx0XHRcInByZXZpb3VzXCI6IFwieWVzdGVyZGF5XCIsXG5cdFx0XHRcImN1cnJlbnRcIjogXCJ0b2RheVwiLFxuXHRcdFx0XCJuZXh0XCI6IFwidG9tb3Jyb3dcIixcblx0XHRcdFwicGFzdFwiOiBcInswfWQgYWdvXCIsXG5cdFx0XHRcImZ1dHVyZVwiOiBcImluIHswfWRcIlxuXHRcdH0sXG5cdFx0XCJob3VyXCI6IHtcblx0XHRcdFwiY3VycmVudFwiOiBcInRoaXMgaG91clwiLFxuXHRcdFx0XCJwYXN0XCI6IFwiezB9aCBhZ29cIixcblx0XHRcdFwiZnV0dXJlXCI6IFwiaW4gezB9aFwiXG5cdFx0fSxcblx0XHRcIm1pbnV0ZVwiOiB7XG5cdFx0XHRcImN1cnJlbnRcIjogXCJ0aGlzIG1pbnV0ZVwiLFxuXHRcdFx0XCJwYXN0XCI6IFwiezB9bSBhZ29cIixcblx0XHRcdFwiZnV0dXJlXCI6IFwiaW4gezB9bVwiXG5cdFx0fSxcblx0XHRcInNlY29uZFwiOiB7XG5cdFx0XHRcImN1cnJlbnRcIjogXCJub3dcIixcblx0XHRcdFwicGFzdFwiOiBcInswfXMgYWdvXCIsXG5cdFx0XHRcImZ1dHVyZVwiOiBcImluIHswfXNcIlxuXHRcdH1cblx0fSxcblx0XCJub3dcIjoge1xuXHRcdFwibm93XCI6IHtcblx0XHRcdFwiY3VycmVudFwiOiBcIm5vd1wiLFxuXHRcdFx0XCJmdXR1cmVcIjogXCJpbiBhIG1vbWVudFwiLFxuXHRcdFx0XCJwYXN0XCI6IFwianVzdCBub3dcIlxuXHRcdH1cblx0fSxcblx0XCJtaW5pXCI6IHtcblx0XHRcInllYXJcIjogXCJ7MH15clwiLFxuXHRcdFwibW9udGhcIjogXCJ7MH1tb1wiLFxuXHRcdFwid2Vla1wiOiBcInswfXdrXCIsXG5cdFx0XCJkYXlcIjogXCJ7MH1kXCIsXG5cdFx0XCJob3VyXCI6IFwiezB9aFwiLFxuXHRcdFwibWludXRlXCI6IFwiezB9bVwiLFxuXHRcdFwic2Vjb25kXCI6IFwiezB9c1wiLFxuXHRcdFwibm93XCI6IFwibm93XCJcblx0fSxcblx0XCJzaG9ydC10aW1lXCI6IHtcblx0XHRcInllYXJcIjogXCJ7MH0geXIuXCIsXG5cdFx0XCJtb250aFwiOiBcInswfSBtby5cIixcblx0XHRcIndlZWtcIjogXCJ7MH0gd2suXCIsXG5cdFx0XCJkYXlcIjoge1xuXHRcdFx0XCJvbmVcIjogXCJ7MH0gZGF5XCIsXG5cdFx0XHRcIm90aGVyXCI6IFwiezB9IGRheXNcIlxuXHRcdH0sXG5cdFx0XCJob3VyXCI6IFwiezB9IGhyLlwiLFxuXHRcdFwibWludXRlXCI6IFwiezB9IG1pbi5cIixcblx0XHRcInNlY29uZFwiOiBcInswfSBzZWMuXCJcblx0fSxcblx0XCJsb25nLXRpbWVcIjoge1xuXHRcdFwieWVhclwiOiB7XG5cdFx0XHRcIm9uZVwiOiBcInswfSB5ZWFyXCIsXG5cdFx0XHRcIm90aGVyXCI6IFwiezB9IHllYXJzXCJcblx0XHR9LFxuXHRcdFwibW9udGhcIjoge1xuXHRcdFx0XCJvbmVcIjogXCJ7MH0gbW9udGhcIixcblx0XHRcdFwib3RoZXJcIjogXCJ7MH0gbW9udGhzXCJcblx0XHR9LFxuXHRcdFwid2Vla1wiOiB7XG5cdFx0XHRcIm9uZVwiOiBcInswfSB3ZWVrXCIsXG5cdFx0XHRcIm90aGVyXCI6IFwiezB9IHdlZWtzXCJcblx0XHR9LFxuXHRcdFwiZGF5XCI6IHtcblx0XHRcdFwib25lXCI6IFwiezB9IGRheVwiLFxuXHRcdFx0XCJvdGhlclwiOiBcInswfSBkYXlzXCJcblx0XHR9LFxuXHRcdFwiaG91clwiOiB7XG5cdFx0XHRcIm9uZVwiOiBcInswfSBob3VyXCIsXG5cdFx0XHRcIm90aGVyXCI6IFwiezB9IGhvdXJzXCJcblx0XHR9LFxuXHRcdFwibWludXRlXCI6IHtcblx0XHRcdFwib25lXCI6IFwiezB9IG1pbnV0ZVwiLFxuXHRcdFx0XCJvdGhlclwiOiBcInswfSBtaW51dGVzXCJcblx0XHR9LFxuXHRcdFwic2Vjb25kXCI6IHtcblx0XHRcdFwib25lXCI6IFwiezB9IHNlY29uZFwiLFxuXHRcdFx0XCJvdGhlclwiOiBcInswfSBzZWNvbmRzXCJcblx0XHR9XG5cdH1cbn0iXSwibmFtZXMiOlsidGhpcyIsInF1YXJ0ZXJPZlllYXIiLCJQQVRURVJOIiwiREFURV9HUk9VUCIsIkRBVEVfVE9fR1JPVVAiLCJNT05USF9OQU1FX0dST1VQIiwiWUVBUl9HUk9VUCIsIlBSRUZJWF9HUk9VUCIsIllFQVJfTlVNQkVSX0dST1VQIiwiTU9OVEhfTlVNQkVSX0dST1VQIiwiREFURV9OVU1CRVJfR1JPVVAiLCJTVFJJQ1RfUEFUVEVSTiIsInJlZmVyZW5jZXMubm93IiwicmVmZXJlbmNlcy50b2RheSIsInJlZmVyZW5jZXMueWVzdGVyZGF5IiwicmVmZXJlbmNlcy50b21vcnJvdyIsInJlZmVyZW5jZXMudG9uaWdodCIsImNhc3VhbFJlZmVyZW5jZXMuYWZ0ZXJub29uIiwiY2FzdWFsUmVmZXJlbmNlcy5ldmVuaW5nIiwiY2FzdWFsUmVmZXJlbmNlcy5taWRuaWdodCIsImNhc3VhbFJlZmVyZW5jZXMubW9ybmluZyIsImNhc3VhbFJlZmVyZW5jZXMubm9vbiIsImNhc3VhbCIsImVuLmNhc3VhbCIsImRlZmF1bHRMb2NhbGUiLCJsb2NhbGVzRGF0YSIsImdldExvY2FsZURhdGEiLCJhZGRMb2NhbGVEYXRhIiwicmVzb2x2ZUxvY2FsZSIsInJlc29sdmVMb2NhbGVGb3JEYXRhIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2RlZmluZVByb3BlcnRpZXMiLCJfY3JlYXRlQ2xhc3MiLCJQbHVyYWxSdWxlRnVuY3Rpb25zIiwiX3R5cGVvZiIsIm93bktleXMiLCJfb2JqZWN0U3ByZWFkIiwiX2RlZmluZVByb3BlcnR5IiwiX3NsaWNlZFRvQXJyYXkiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwiX2FycmF5TGlrZVRvQXJyYXkiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlckxvb3NlIiwiZ2V0VGltZVRvTmV4dFVwZGF0ZUZvclVuaXQiLCJfZ2V0VGltZVRvTmV4dFVwZGF0ZUZvclVuaXQiLCJyb3VuZCIsImFwcHJveGltYXRlIiwicm91bmRNaW51dGUiLCJSZWxhdGl2ZVRpbWVGb3JtYXRQb2x5ZmlsbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsQ0FBQSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFzRCxlQUFlLENBQUMsR0FBdUksQ0FBQyxDQUFDQSxhQUFJLEVBQUUsVUFBVSxDQUFjLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTs7Ozs7Ozs7Ozs7Q0NBbndCLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQXNELGVBQWUsQ0FBQyxHQUFrSCxDQUFDLENBQUNBLFNBQUksRUFBRSxVQUFVLENBQWMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLDRGQUE0RixDQUFDLENBQUMsQ0FBQyxxRkFBcUYsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQywwREFBMEQsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTSxDQUFDLHVGQUF1RixDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLE9BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLFVBQVUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxHQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLGVBQWUsR0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFNLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRSxDQUFDLEtBQUssQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsRUFBRSxLQUFJLElBQUksQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEtBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsS0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUksTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQyxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFJLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLEtBQUksR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBRSxDQUFDLENBQUMsS0FBSSxHQUFHLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSSxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxHQUFHLENBQUMsT0FBTyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEtBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSSxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLFFBQVEsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxPQUFPLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFBOzs7Ozs7QUNBaC9OLElBQUksUUFBUTtBQUNuQixDQUFDLFVBQVUsUUFBUSxFQUFFO0FBQ3JCLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJO0FBQ3ZDLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJO0FBQ3ZDLENBQUMsRUFBRSxRQUFRLEtBQUssUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3hCLElBQUksT0FBTztBQUNsQixDQUFDLFVBQVUsT0FBTyxFQUFFO0FBQ3BCLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRO0FBQzdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRO0FBQzdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTO0FBQy9DLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXO0FBQ25ELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVO0FBQ2pELElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRO0FBQzdDLElBQUksT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVO0FBQ2pELENBQUMsRUFBRSxPQUFPLEtBQUssT0FBTyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQ3RCLElBQUksS0FBSztBQUNoQixDQUFDLFVBQVUsS0FBSyxFQUFFO0FBQ2xCLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTO0FBQzNDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxVQUFVO0FBQzdDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPO0FBQ3ZDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxPQUFPO0FBQ3ZDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLO0FBQ25DLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNO0FBQ3JDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxNQUFNO0FBQ3JDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxRQUFRO0FBQ3pDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxXQUFXO0FBQy9DLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxTQUFTO0FBQzVDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxVQUFVO0FBQzlDLElBQUksS0FBSyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsR0FBRyxVQUFVO0FBQzlDLENBQUMsRUFBRSxLQUFLLEtBQUssS0FBSyxHQUFHLEVBQUUsQ0FBQyxDQUFDOztBQ3ZCbEIsU0FBUyxlQUFlLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRTtBQUN4RCxJQUFJLFdBQVcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUMs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SSxHQUFHLEVBQUUsSUFBSTtBQUNiLElBQUksR0FBRyxFQUFFLElBQUk7QUFDYixJQUFJLEdBQUcsRUFBRSxJQUFJO0FBQ2IsSUFBSSxHQUFHLEVBQUUsSUFBSTtBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxLQUFLLEVBQUUsR0FBRztBQUNkLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksS0FBSyxFQUFFLEdBQUc7QUFDZCxJQUFJLElBQUksRUFBRSxHQUFHO0FBQ2IsSUFBSSxJQUFJLEVBQUUsSUFBSTtBQUNkLElBQUksSUFBSSxFQUFFLEdBQUc7QUFDYixJQUFJLEdBQUcsRUFBRSxJQUFJO0FBQ2IsSUFBSSxJQUFJLEVBQUUsR0FBRztBQUNiLElBQUksR0FBRyxFQUFFLEVBQUU7QUFDWCxJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsR0FBRztBQUNaLElBQUksR0FBRyxFQUFFLEdBQUc7QUFDWixJQUFJLEdBQUcsRUFBRSxHQUFHO0FBQ1osSUFBSSxHQUFHLEVBQUUsSUFBSTtBQUNiLElBQUksRUFBRSxFQUFFO0FBQ1IsUUFBUSx1QkFBdUIsRUFBRSxFQUFFLEdBQUcsRUFBRTtB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LEVBQUUsR0FBRyxDQUFDO0FBQ2hELFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2hELFlBQVksVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLENBQUMsQ0FBQztBQUN2RCxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNqRDtBQUNBLGFBQWEsSUFBSSxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxFQUFFO0FBQzNDLFlBQVksSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsQ0FBQztBQUNsRCxZQUFZLFVBQVUsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNoRCxZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNsRCxZQUFZLFVBQVUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDeEQ7QUFDQSxhQUFhLElBQUksUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUMxQyxZQUFZLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUM7QUFDbEQsWUFBWSxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsRUFBRSxPQUFPLENBQUM7QUFDbkQsWUFBWSxVQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDaEQsWUFBWSxVQUFVLENBQUMsS0FBSyxD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Qzs7QUNRbkUsTUFBTSxNQUFNLEdBQUdDLFFBQVM7QUFDeEIsU0FBUyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUU7QUFDekMsSUFBSSxPQUFPLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUM7QUFDMUM7Ozs7Ozs7Q0NwQkEsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBc0QsTUFBQSxDQUFBLE9BQUEsQ0FBZSxDQUFDLEdBQTZILENBQUMsQ0FBQ3ZCLEdBQUksRUFBRSxVQUFVLENBQWMsSUFBSSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDLENBQUMsY0FBYyxDQUFDLE9BQU8sU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxPQUFPLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBRSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsS0FBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxrQkFBa0IsR0FBRSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxRQUFRLEVBQUUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsT0FBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsd0JBQXdCLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQyxDQUFDLE9BQU8sSUFBSSxDQUFDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsT0FBTSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsVUFBVSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsT0FBTyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFNLEdBQUcsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQTs7Ozs7Ozs7Ozs7Q0NBNXNFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQXNELE1BQUEsQ0FBQSxPQUFBLENBQWUsQ0FBQyxHQUFrSSxDQUFDLENBQUNBLFFBQUksRUFBRSxVQUFVLENBQWMsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFNLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU0sR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLElBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU0sY0FBYyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsT0FBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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LENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsUUFBUSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ25DLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsT0FBTztBQUM1SSxHQUFHO0FBQ0gsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsT0FBTztBQUN6QyxHQUFHO0FBQ0gsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsUUFBUSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLE9BQU87QUFDNUwsR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hDLFFBQVEsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDO0FBQzlCLFFBQVEsR0FBRyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNsQyxRQUFRLElBQUksR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDbkMsUUFBUSxRQUFRLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3ZDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxNQUFNLElBQUksR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxRQUFRLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxPQUFPO0FBQ3RULEdBQUc7QUFDSCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNoQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0FBQ3RCLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUN6QixRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUMxQixRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUN6QixRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUMxQixJQUFJLE9BQU8sRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssSUFBSSxHQUFHLEVBQUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPO0FBQ3hNLEdBQUc7QUFDSCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNoQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixRQUFRLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLE9BQU87QUFDbEYsR0FBRztBQUNILEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUN2QixJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDdEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3pCLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3pCLElBQUksT0FBTyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDcEosR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxHQUFHLE9BQU87QUFDekYsR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsT0FBTztBQUN6RyxHQUFHO0FBQ0gsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTztBQUNoRSxHQUFHO0FBQ0gsRUFBRSxHQUFHLEVBQUUsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ3ZCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUN0QixRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDMUIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDMUIsSUFBSSxPQUFPLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDbkssR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLE9BQU8sT0FBTztBQUNsQixHQUFHO0FBQ0gsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixRQUFRLEVBQUUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDbEIsUUFBUSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDOUIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLE9BQU87QUFDNUUsR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxPQUFPO0FBQzVDLEdBQUc7QUFDSCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNoQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixRQUFRLFFBQVEsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLE1BQU0sR0FBRyxPQUFPO0FBQ3JGLEdBQUc7QUFDSCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNoQyxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxNQUFNLEdBQUcsT0FBTztBQUN4SCxHQUFHO0FBQ0gsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDeEksR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsT0FBTztBQUNqRixHQUFHO0FBQ0gsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNoQixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUM7QUFDM0MsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsUUFBUSxHQUFHLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDekIsUUFBUSxJQUFJLEdBQUcsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDMUIsSUFBSSxPQUFPLEVBQUUsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxFQUFFLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDekYsR0FBRztBQUNILEVBQUUsR0FBRyxFQUFFLFNBQVMsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUN2QixJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsT0FBTztBQUNyRCxHQUFHO0FBQ0gsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDdEIsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsUUFBUSxHQUFHLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ2xDLFFBQVEsSUFBSSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUNuQyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLE1BQU0sR0FBRyxPQUFPO0FBQzlJLEdBQUc7QUFDSCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDckIsSUFBSSxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQztBQUNoQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRTtBQUN0QixRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsTUFBTTtBQUNwQixRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztBQUM5QixRQUFRLEdBQUcsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUM7QUFDbEMsUUFBUSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ25DLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFCLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3pCLElBQUksT0FBTyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxFQUFFLEdBQUcsTUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDek0sR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDdEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFCLFFBQVEsR0FBRyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ3pCLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFCLElBQUksT0FBTyxFQUFFLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsT0FBTztBQUNuRixHQUFHO0FBQ0gsRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLENBQUMsQ0FBQyxFQUFFO0FBQ3JCLElBQUksSUFBSSxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUM7QUFDaEMsUUFBUSxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDOUIsUUFBUSxJQUFJLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQ25DLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLE1BQU0sR0FBRyxPQUFPO0FBQ3BJLEdBQUc7QUFDSCxFQUFF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QUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2hCLFFBQVEsRUFBRSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztBQUNsQixRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUN6QixRQUFRLElBQUksR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQztBQUMxQixJQUFJLE9BQU8sRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxJQUFJLEVBQUUsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLEdBQUcsRUFBRSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLEVBQUUsSUFBSSxJQUFJLElBQUksRUFBRSxHQUFHLE1BQU0sR0FBRyxPQUFPO0FBQ3BOLEdBQUc7QUFDSCxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEVBQUU7QUFDckIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDcEQsR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUU7QUFDdEIsSUFBSSxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLE9BQU87QUFDakUsR0FBRztBQUNILEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxDQUFDLENBQUMsRUFBRTtBQUNyQixJQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDO0FBQ2hDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7QUFDaEIsUUFBUSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2xCLFFBQVEsSUFBSSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDO0FBQzFCLElBQUksT0FBTyxFQUFFLElBQUksSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLEdBQUcsRUFBRSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsS0FBSyxHQUFHLEVBQUUsS0FBSyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxLQUFLLEdBQUcsT0FBTztBQUN0SDtBQUNBLENBQUM7QUFDRCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1osQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRztBQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRztBQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUc7QUFDWixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUc7QUFDWixDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQ2IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQ1osQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRztBQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQ2IsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQ1osQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1osQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQ1osQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUc7QUFDWixDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHO0FBQ1osQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRztBQUNaLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFBRTtBQUNYLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEVBQUU7QUFDWCxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxFQUFFO0FBQ1gsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsRUFB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QUFDLENBQUMsQ0FBQyxFQUFFLE9BQU9BLG1CQUFpQixDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsQ0FBQzs7QUFFOVosU0FBU0EsbUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUM7O0FBRXJMLFNBQVNILHVCQUFxQixDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxHQUFHLElBQUksSUFBSSxHQUFHLElBQUksR0FBRyxPQUFPLE1BQU0sS0FBSyxXQUFXLElBQUksR0FBRyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUUsT0FBTyxDQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDLElBQUksRUFBRSxHQUFHLEtBQUssQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsRUFBRSxFQUFFLEdBQUcsSUFBSSxFQUFFLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FB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QUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLEdBQUdILDZCQUEyQixDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksY0FBbUQsRUFBRSxFQUFFLElBQUksRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxPQUFPLFlBQVksRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsTUFBTSxFQUFFLE9BQU8sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sSUFBSSxTQUFTLENBQUMsdUlBQXVJLENBQUMsQ0FBQzs7QUFFMWxCLFNBQVNBLDZCQUEyQixDQUFDLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLE9BQU8sQ0FBQyxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsRUFBRSxPQUFPRSxtQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxD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QVNELFNBQU8sQ0FBQyxNQUFNLEVBQUUsY0FBYyxFQUFFLEVBQUUsSUFBSSxJQUFJLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxDQUFDLHFCQUFxQixFQUFFLEVBQUUsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLHFCQUFxQixDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsY0FBYyxLQUFLLE9BQU8sR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUUsT0FBTyxNQUFNLENBQUMsd0JBQXdCLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUM7O0FBRW5WLFNBQVNDLGVBQWEsQ0FBQyxNQUFNLEVBQUUsRUFBRSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksTUFBTSxHQUFHLElBQUksSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUdELFNBQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsSUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQVUsR0FBRyxFQUFFLEVBQUVFLGlCQUFlLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMseUJBQXlCLEdBQUcsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMseUJBQXlCLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBR0YsU0FBTyxDQUFDLE1B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aUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLEtBQUssS0FBSyxFQUFFLE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFdBQVcsSUFBSSwwQ0FBMEMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsT0FBTyxpQkFBaUIsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUM7O0FBRTlaLFNBQVMsaUJBQWlCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLElBQUksR0FBRyxJQUFJLElBQUksSUFBSSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxHQUFHLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksR0FBRyxJQUFJLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxJQUFJLENBQUM7O0FBRXJMLFNBQVMscUJBQXFCLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLElBQUksRUFBRSxHQUFHLEdBQUcsSUFBSSxJQUFJLEdBQUcsSUFBSSxHQUFHLE9BQU8sTUFBTSxLQUFLLFdBQVcsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLElBQUksRUFBRSxPQUFPLENBQUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxFQUFFLEdBQUcsS0FBSyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxFQUFFLEtBQUssRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxFQUFFLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLElBQUksRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsR0FBRyxJQUFJLEVBQUUsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFLE1BQU0sRUFBRSxFQUFFLENBQUMsT0FBTyxHQUFHLEVBQUUsRUFBRSxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUMsRUFBRSxHQUFHLEdBQUcsQ0FBQyxFQUFFLFNBQVMsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksSUFBSSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxFQUFFLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLE9BQU8sSUFBSSxDQUFDOztBQUUvZixTQUFTLGVBQWUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsT0FBTyxHQUFHLENBQUM7O0FBRW5FLFNBQVMsZUFBZSxDQUFDLFFBQVEsRUFBRSxXQUFXLEVBQUUsRUFBRSxJQUFJLEVBQUUsUUFBUSxZQUFZLFdBQVcsQ0FBQyxFQUFFLEVBQUUsTUFBTSxJ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LEVBQUUsTUFBTTtBQUNsQixFQUFFLEtBQUssRUFBRTtBQUNULEVBQUU7QUFDRixDQUFDLFlBQVksRUFBRTtBQUNmLEVBQUUsTUFBTSxFQUFFLFNBQVM7QUFDbkIsRUFBRSxPQUFPLEVBQUUsU0FBUztBQUNwQixFQUFFLE1BQU0sRUFBRSxTQUFTO0FBQ25CLEVBQUUsS0FBSyxFQUFFO0FBQ1QsR0FBRyxLQUFLLEVBQUUsU0FBUztBQUNuQixHQUFHLE9BQU8sRUFBRTtBQUNaLEdBQUc7QUFDSCxFQUFFLE1BQU0sRUFBRSxTQUFTO0FBQ25CLEVBQUUsUUFBUSxFQUFFLFVBQVU7QUFDdEIsRUFBRSxRQUFRLEVBQUU7QUFDWixFQUFFO0FBQ0YsQ0FBQyxXQUFXLEVBQUU7QUFDZCxFQUFFLE1BQU0sRUFBRTtBQUNWLEdBQUcsS0FBSyxFQUFFLFVBQVU7QUFDcEIsR0FBRyxPQUFPLEVBQUU7QUFDWixHQUFHO0FBQ0gsRUFBRSxPQUFPLEVBQUU7QUFDWCxHQUFHLEtBQUssRUFBRSxXQUFXO0FBQ3JCLEdBQUcsT0FBTyxFQUFFO0FBQ1osR0FBRztBQUNILEVBQUUsTUFBTSxFQUFFO0FBQ1YsR0FBRyxLQUFLLEVBQUUsVUFBVTtBQUNwQixHQUFHLE9BQU8sRUFBRTtBQUNaLEdBQUc7QUFDSCxFQUFFLEtBQUssRUFBRTtBQUNULEdBQUcsS0FBSyxFQUFFLFNBQVM7QUFDbkIsR0FBRyxPQUFPLEVBQUU7QUFDWixHQUFHO0FBQ0gsRUFBRSxNQUFNLEVBQUU7QUFDVixHQUFHLEtBQUssRUFBRSxVQUFVO0FBQ3BCLEdBQUcsT0FBTyxFQUFFO0FBQ1osR0FBRztBQUNILEVBQUUsUUFBUSxFQUFFO0FBQ1osR0FBRyxLQUFLLEVBQUUsWUFBWTtBQUN0QixHQUFHLE9BQU8sRUFBRTtBQUNaLEdBQUc7QUFDSCxFQUFFLFFBQVEsRUFBRTtBQUNaLEdBQUcsS0FBSyxFQUFFLFlBQVk7QUFDdEIsR0FBRyxPQUFPLEVBQUU7QUFDWjtBQUNBO0FBQ0E7Ozs7IiwieF9nb29nbGVfaWdub3JlTGlzdCI6WzAsMSwyLDMsNCw1LDYsNyw4LDksMTAsMTEsMTIsMTMsMTQsMTUsMTYsMTcsMTgsMTksMjAsMjEsMjIsMjMsMjQsMjUsMjYsMjcsMjgsMjksMzAsMzEsMzIsMzMsMzQsMzUsMzYsMzcsMzgsMzksNDAsNDEsNDIsNDMsNDQsNDUsNDYsNDcsNDgsNDksNTAsNTEsNTIsNTMsNTQsNTUsNTYsNTcsNTgsNTksNjAsNjEsNjIsNjMsNjQsNjUsNjYsNjcsNjgsNjksNzAsNzEsNzIsNzMsNzQsNzUsNzYsNzcsNzgsNzksODAsODEsODIsODMsODQsODUsODYsODcsODhdfQ==
