import { jsxs, jsx } from 'react/jsx-runtime';
import { useState, useMemo } from 'react';
import { List, ActionPanel, Action } from '@project-gauntlet/api/components';
import { Clipboard, showHud } from '@project-gauntlet/api/helpers';
import { d as dayjs, u as utc, t as timezone, T as TimeAgo, e as en, p as parse } from './vendor.js';

dayjs.extend(utc);
dayjs.extend(timezone);
const DEFAULT_DATE_FORMAT = "dddd, MMMM D, YYYY hh:mm:ss";
const LOCAL_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;
TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");
const DATE_FORMATS = [
    {
        id: "human",
        title: "Human Date",
        format: (date, tz) => dayjs(date).tz(tz).format(DEFAULT_DATE_FORMAT),
    },
    {
        id: "unix-ms",
        title: "Unix Timestamp (ms)",
        format: (date, tz) => dayjs(date).tz(tz).valueOf().toString(),
    },
    {
        id: "unix-s",
        title: "Unix Timestamp (seconds)",
        format: (date, tz) => dayjs(date).tz(tz).unix().toString(),
    },
    {
        id: "iso",
        title: "ISO Date",
        format: (date, tz) => dayjs(date).tz(tz).toISOString(),
    },
];
function parseMachineReadableDate(query) {
    const parsedDate = new Date(query);
    const isIso = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(query);
    if (!isNaN(parsedDate.getTime()) && isIso) {
        return {
            date: parsedDate,
            label: "ISO Date",
        };
    }
    let timestamp = parseInt(query);
    if (!isNaN(timestamp) && timestamp > 1000000) {
        let seconds = false;
        if (timestamp <= 2 ** 31) {
            seconds = true;
            timestamp *= 1000;
        }
        const date = new Date(timestamp);
        if (!isNaN(date.getTime())) {
            return {
                date,
                label: seconds ? "Unix Timestamp (seconds)" : "Unix Timestamp (ms)",
            };
        }
    }
}
function getResults(query) {
    if (!query) {
        return [
            {
                label: "Now",
                date: new Date(),
            },
            {
                label: "Today",
                date: new Date().setHours(0, 0, 0, 0),
            },
            {
                label: "Tomorrow",
                date: new Date().setHours(0, 0, 0, 0) + 24 * 60 * 60 * 1000,
            },
            {
                label: "Yesterday",
                date: new Date().setHours(0, 0, 0, 0) - 24 * 60 * 60 * 1000,
            },
        ].map((x) => ({
            label: x.label,
            date: new Date(x.date),
        }));
    }
    query = query.trim();
    const machine = parseMachineReadableDate(query);
    const human = parse(query)
        .map((x) => ({ date: x.date(), label: x.text }));
    return [machine, ...human].filter((x) => x !== undefined);
}
function ConvertDate() {
    const [inputDate, setInputDate] = useState("");
    const [tz, setTz] = useState(LOCAL_TIMEZONE);
    const results = useMemo(() => getResults(inputDate || ""), [inputDate]);
    return (jsxs(List, { isLoading: false, actions: jsx(ActionPanel, { children: DATE_FORMATS.map((format) => (jsx(Action, { label: format.title, onAction: (id) => {
                    const date = results.find((r) => r.date.toISOString() === id)?.date;
                    if (date) {
                        const formattedDate = format.format(date, tz);
                        Clipboard.writeText(formattedDate);
                        showHud(`${format.title} copied to clipboard`);
                    }
                    return { close: true };
                } }, format.id))) }), children: [jsx(List.SearchBar, { placeholder: "Enter any kind of date", value: inputDate, onChange: setInputDate }), results.map(({ date, label }) => (jsx(List.Section.Item, { title: dayjs(date).tz(tz).format(DEFAULT_DATE_FORMAT), subtitle: `${label} - ${timeAgo.format(date)}`, id: date.toISOString() }, date.toISOString())))] }));
}

export { ConvertDate as default };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udmVydC1kYXRlLmpzIiwic291cmNlcyI6W10sInNvdXJjZXNDb250ZW50IjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==
