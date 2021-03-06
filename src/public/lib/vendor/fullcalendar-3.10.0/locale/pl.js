!(function (e, t) {
    'object' == typeof exports && 'object' == typeof module
        ? (module.exports = t(require('moment'), require('fullcalendar')))
        : 'function' == typeof define && define.amd
        ? define(['moment', 'fullcalendar'], t)
        : 'object' == typeof exports
        ? t(require('moment'), require('fullcalendar'))
        : t(e.moment, e.FullCalendar);
})('undefined' != typeof self ? self : this, function (e, t) {
    return (function (e) {
        function t(n) {
            if (r[n]) return r[n].exports;
            var i = (r[n] = { i: n, l: !1, exports: {} });
            return e[n].call(i.exports, i, i.exports, t), (i.l = !0), i.exports;
        }
        var r = {};
        return (
            (t.m = e),
            (t.c = r),
            (t.d = function (e, r, n) {
                t.o(e, r) ||
                    Object.defineProperty(e, r, {
                        configurable: !1,
                        enumerable: !0,
                        get: n,
                    });
            }),
            (t.n = function (e) {
                var r =
                    e && e.__esModule
                        ? function () {
                              return e.default;
                          }
                        : function () {
                              return e;
                          };
                return t.d(r, 'a', r), r;
            }),
            (t.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (t.p = ''),
            t((t.s = 181))
        );
    })({
        0: function (t, r) {
            t.exports = e;
        },
        1: function (e, r) {
            e.exports = t;
        },
        181: function (e, t, r) {
            Object.defineProperty(t, '__esModule', { value: !0 }), r(182);
            var n = r(1);
            n.datepickerLocale('pl', 'pl', {
                closeText: 'Zamknij',
                prevText: '&#x3C;Poprzedni',
                nextText: 'Nast??pny&#x3E;',
                currentText: 'Dzi??',
                monthNames: [
                    'Stycze??',
                    'Luty',
                    'Marzec',
                    'Kwiecie??',
                    'Maj',
                    'Czerwiec',
                    'Lipiec',
                    'Sierpie??',
                    'Wrzesie??',
                    'Pa??dziernik',
                    'Listopad',
                    'Grudzie??',
                ],
                monthNamesShort: [
                    'Sty',
                    'Lu',
                    'Mar',
                    'Kw',
                    'Maj',
                    'Cze',
                    'Lip',
                    'Sie',
                    'Wrz',
                    'Pa',
                    'Lis',
                    'Gru',
                ],
                dayNames: [
                    'Niedziela',
                    'Poniedzia??ek',
                    'Wtorek',
                    '??roda',
                    'Czwartek',
                    'Pi??tek',
                    'Sobota',
                ],
                dayNamesShort: ['Nie', 'Pn', 'Wt', '??r', 'Czw', 'Pt', 'So'],
                dayNamesMin: ['N', 'Pn', 'Wt', '??r', 'Cz', 'Pt', 'So'],
                weekHeader: 'Tydz',
                dateFormat: 'dd.mm.yy',
                firstDay: 1,
                isRTL: !1,
                showMonthAfterYear: !1,
                yearSuffix: '',
            }),
                n.locale('pl', {
                    buttonText: {
                        month: 'Miesi??c',
                        week: 'Tydzie??',
                        day: 'Dzie??',
                        list: 'Plan dnia',
                    },
                    allDayText: 'Ca??y dzie??',
                    eventLimitText: 'wi??cej',
                    noEventsMessage: 'Brak wydarze?? do wy??wietlenia',
                });
        },
        182: function (e, t, r) {
            !(function (e, t) {
                t(r(0));
            })(0, function (e) {
                function t(e) {
                    return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1;
                }
                function r(e, r, n) {
                    var i = e + ' ';
                    switch (n) {
                        case 'ss':
                            return i + (t(e) ? 'sekundy' : 'sekund');
                        case 'm':
                            return r ? 'minuta' : 'minut??';
                        case 'mm':
                            return i + (t(e) ? 'minuty' : 'minut');
                        case 'h':
                            return r ? 'godzina' : 'godzin??';
                        case 'hh':
                            return i + (t(e) ? 'godziny' : 'godzin');
                        case 'MM':
                            return i + (t(e) ? 'miesi??ce' : 'miesi??cy');
                        case 'yy':
                            return i + (t(e) ? 'lata' : 'lat');
                    }
                }
                var n = 'stycze??_luty_marzec_kwiecie??_maj_czerwiec_lipiec_sierpie??_wrzesie??_pa??dziernik_listopad_grudzie??'.split(
                        '_',
                    ),
                    i = 'stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze??nia_pa??dziernika_listopada_grudnia'.split(
                        '_',
                    );
                return e.defineLocale('pl', {
                    months: function (e, t) {
                        return e
                            ? '' === t
                                ? '(' + i[e.month()] + '|' + n[e.month()] + ')'
                                : /D MMMM/.test(t)
                                ? i[e.month()]
                                : n[e.month()]
                            : n;
                    },
                    monthsShort: 'sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa??_lis_gru'.split(
                        '_',
                    ),
                    weekdays: 'niedziela_poniedzia??ek_wtorek_??roda_czwartek_pi??tek_sobota'.split(
                        '_',
                    ),
                    weekdaysShort: 'ndz_pon_wt_??r_czw_pt_sob'.split('_'),
                    weekdaysMin: 'Nd_Pn_Wt_??r_Cz_Pt_So'.split('_'),
                    longDateFormat: {
                        LT: 'HH:mm',
                        LTS: 'HH:mm:ss',
                        L: 'DD.MM.YYYY',
                        LL: 'D MMMM YYYY',
                        LLL: 'D MMMM YYYY HH:mm',
                        LLLL: 'dddd, D MMMM YYYY HH:mm',
                    },
                    calendar: {
                        sameDay: '[Dzi?? o] LT',
                        nextDay: '[Jutro o] LT',
                        nextWeek: function () {
                            switch (this.day()) {
                                case 0:
                                    return '[W niedziel?? o] LT';
                                case 2:
                                    return '[We wtorek o] LT';
                                case 3:
                                    return '[W ??rod?? o] LT';
                                case 6:
                                    return '[W sobot?? o] LT';
                                default:
                                    return '[W] dddd [o] LT';
                            }
                        },
                        lastDay: '[Wczoraj o] LT',
                        lastWeek: function () {
                            switch (this.day()) {
                                case 0:
                                    return '[W zesz???? niedziel?? o] LT';
                                case 3:
                                    return '[W zesz???? ??rod?? o] LT';
                                case 6:
                                    return '[W zesz???? sobot?? o] LT';
                                default:
                                    return '[W zesz??y] dddd [o] LT';
                            }
                        },
                        sameElse: 'L',
                    },
                    relativeTime: {
                        future: 'za %s',
                        past: '%s temu',
                        s: 'kilka sekund',
                        ss: r,
                        m: r,
                        mm: r,
                        h: r,
                        hh: r,
                        d: '1 dzie??',
                        dd: '%d dni',
                        M: 'miesi??c',
                        MM: r,
                        y: 'rok',
                        yy: r,
                    },
                    dayOfMonthOrdinalParse: /\d{1,2}\./,
                    ordinal: '%d.',
                    week: { dow: 1, doy: 4 },
                });
            });
        },
    });
});
