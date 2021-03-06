!(function (e, a) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = a(require('moment'), require('fullcalendar')))
        : 'function' == typeof define && define.amd
        ? define(['moment', 'fullcalendar'], a)
        : 'object' == typeof exports
        ? a(require('moment'), require('fullcalendar'))
        : a(e.moment, e.FullCalendar);
})('undefined' != typeof self ? self : this, function (e, a) {
    return (function (e) {
        function a(n) {
            if (t[n]) return t[n].exports;
            var r = (t[n] = { i: n, l: !1, exports: {} });
            return e[n].call(r.exports, r, r.exports, a), (r.l = !0), r.exports;
        }
        var t = {};
        return (
            (a.m = e),
            (a.c = t),
            (a.d = function (e, t, n) {
                a.o(e, t) ||
                    Object.defineProperty(e, t, {
                        configurable: !1,
                        enumerable: !0,
                        get: n,
                    });
            }),
            (a.n = function (e) {
                var t =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return a.d(t, 'a', t), t;
            }),
            (a.o = function (e, a) {
                return Object.prototype.hasOwnProperty.call(e, a);
            }),
            (a.p = ''),
            a((a.s = 205))
        );
    })({
        0: function (a, t) {
            a.exports = e;
        },
        1: function (e, t) {
            e.exports = a;
        },
        205: function (e, a, t) {
            Object.defineProperty(a, '__esModule', { value: !0 }), t(206);
            var n = t(1);
            n.datepickerLocale('tr', 'tr', {
                closeText: 'kapat',
                prevText: '&#x3C;geri',
                nextText: 'ileri&#x3e',
                currentText: 'bug??n',
                monthNames: [
                    'Ocak',
                    '??ubat',
                    'Mart',
                    'Nisan',
                    'May??s',
                    'Haziran',
                    'Temmuz',
                    'A??ustos',
                    'Eyl??l',
                    'Ekim',
                    'Kas??m',
                    'Aral??k',
                ],
                monthNamesShort: [
                    'Oca',
                    '??ub',
                    'Mar',
                    'Nis',
                    'May',
                    'Haz',
                    'Tem',
                    'A??u',
                    'Eyl',
                    'Eki',
                    'Kas',
                    'Ara',
                ],
                dayNames: [
                    'Pazar',
                    'Pazartesi',
                    'Sal??',
                    '??ar??amba',
                    'Per??embe',
                    'Cuma',
                    'Cumartesi',
                ],
                dayNamesShort: ['Pz', 'Pt', 'Sa', '??a', 'Pe', 'Cu', 'Ct'],
                dayNamesMin: ['Pz', 'Pt', 'Sa', '??a', 'Pe', 'Cu', 'Ct'],
                weekHeader: 'Hf',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: '',
            }),
                n.locale('tr', {
                    buttonText: {
                        next: 'ileri',
                        month: 'Ay',
                        week: 'Hafta',
                        day: 'G??n',
                        list: 'Ajanda',
                    },
                    allDayText: 'T??m g??n',
                    eventLimitText: 'daha fazla',
                    noEventsMessage: 'G??sterilecek etkinlik yok',
                });
        },
        206: function (e, a, t) {
            !(function (e, a) {
                a(t(0));
            })(0, function (e) {
                var a = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'??nc??",
                    4: "'??nc??",
                    100: "'??nc??",
                    6: "'nc??",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    60: "'??nc??",
                    90: "'??nc??",
                };
                return e.defineLocale('tr', {
                    months: 'Ocak_??ubat_Mart_Nisan_May??s_Haziran_Temmuz_A??ustos_Eyl??l_Ekim_Kas??m_Aral??k'.split(
                        '_',
                    ),
                    monthsShort: 'Oca_??ub_Mar_Nis_May_Haz_Tem_A??u_Eyl_Eki_Kas_Ara'.split(
                        '_',
                    ),
                    weekdays: 'Pazar_Pazartesi_Sal??_??ar??amba_Per??embe_Cuma_Cumartesi'.split(
                        '_',
                    ),
                    weekdaysShort: 'Paz_Pts_Sal_??ar_Per_Cum_Cts'.split('_'),
                    weekdaysMin: 'Pz_Pt_Sa_??a_Pe_Cu_Ct'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        LTS: 'HH:mm:ss',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY HH:mm',
                        LLLL: 'dddd, D MMMM YYYY HH:mm',
                    },
                    calendar: {
                        sameDay: '[bug??n saat] LT',
                        nextDay: '[yar??n saat] LT',
                        nextWeek: '[gelecek] dddd [saat] LT',
                        lastDay: '[d??n] LT',
                        lastWeek: '[ge??en] dddd [saat] LT',
                        sameElse: 'L',
                    },
                    relativeTime: {
                        future: '%s sonra',
                        past: '%s ??nce',
                        s: 'birka?? saniye',
                        ss: '%d saniye',
                        m: 'bir dakika',
                        mm: '%d dakika',
                        h: 'bir saat',
                        hh: '%d saat',
                        d: 'bir g??n',
                        dd: '%d g??n',
                        M: 'bir ay',
                        MM: '%d ay',
                        y: 'bir y??l',
                        yy: '%d y??l',
                    },
                    ordinal: function (e, t) {
                        switch (t) {
                            case 'd':
                            case 'D':
                            case 'Do':
                            case 'DD':
                                return e;
                            default:
                                if (0 === e) return e + "'??nc??";
                                var n = e % 10,
                                    r = (e % 100) - n,
                                    i = e >= 100 ? 100 : null;
                                return e + (a[n] || a[r] || a[i]);
                        }
                    },
                    week: { dow: 1, doy: 7 },
                });
            });
        },
    });
});
