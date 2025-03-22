import { ReactElement, useState, useMemo } from "react";
import { ActionPanel, Action, List } from "@project-gauntlet/api/components";
import { Clipboard, showHud } from "@project-gauntlet/api/helpers";
import * as chrono from "chrono-node";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import TimeAgo from "javascript-time-ago";
import en from "javascript-time-ago/locale/en";

dayjs.extend(utc);
dayjs.extend(timezone);

const DEFAULT_DATE_FORMAT = "dddd, MMMM D, YYYY hh:mm:ss";
const LOCAL_TIMEZONE = Intl.DateTimeFormat().resolvedOptions().timeZone;

TimeAgo.addDefaultLocale(en);
const timeAgo = new TimeAgo("en-US");

interface LabeledDate {
  label?: string;
  date: Date;
}

interface DateFormatter {
  id: string;
  title: string;
  format: (date: Date, tz: string) => string;
}

const DATE_FORMATS: DateFormatter[] = [
  {
    id: "human",
    title: "Human Date",
    format: (date: Date, tz: string) =>
      dayjs(date).tz(tz).format(DEFAULT_DATE_FORMAT),
  },
  {
    id: "unix-ms",
    title: "Unix Timestamp (ms)",
    format: (date: Date, tz: string) => dayjs(date).tz(tz).valueOf().toString(),
  },
  {
    id: "unix-s",
    title: "Unix Timestamp (seconds)",
    format: (date: Date, tz: string) => dayjs(date).tz(tz).unix().toString(),
  },
  {
    id: "iso",
    title: "ISO Date",
    format: (date: Date, tz: string) => dayjs(date).tz(tz).toISOString(),
  },
];

function parseMachineReadableDate(query: string): LabeledDate | undefined {
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

function getResults(query: string): LabeledDate[] {
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
  const human = chrono
    .parse(query)
    .map((x) => ({ date: x.date(), label: x.text }));

  return [machine, ...human].filter((x): x is LabeledDate => x !== undefined);
}

export default function ConvertDate(): ReactElement {
  const [inputDate, setInputDate] = useState<string | undefined>("");
  const [tz, setTz] = useState(LOCAL_TIMEZONE);
  const [selectedDate, setSelectedDate] = useState<string | undefined>();

  const results = useMemo(() => getResults(inputDate || ""), [inputDate]);

  return (
    <List
      isLoading={false}
      onItemFocusChange={setSelectedDate}
      actions={
        <ActionPanel>
          {DATE_FORMATS.map((format) => (
            <Action
              key={format.id}
              label={format.title}
              onAction={() => {
                const date = results.find(
                  (r) => r.date.toISOString() === selectedDate,
                )?.date;
                if (date) {
                  const formattedDate = format.format(date, tz);
                  Clipboard.writeText(formattedDate);
                  showHud("Date copied to clipboard");
                }
                return { close: true };
              }}
            />
          ))}
        </ActionPanel>
      }
    >
      <List.SearchBar
        placeholder="Enter any kind of date"
        value={inputDate}
        onChange={setInputDate}
      />
      {results.map(({ date, label }) => (
        <List.Section.Item
          key={date.toISOString()}
          title={dayjs(date).tz(tz).format(DEFAULT_DATE_FORMAT)}
          subtitle={`${label} - ${timeAgo.format(date)}`}
          id={date.toISOString()}
        />
      ))}
    </List>
  );
}
