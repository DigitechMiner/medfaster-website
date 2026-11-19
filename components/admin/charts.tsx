import type { DayPoint, Row } from "@/lib/analytics/types";

// Small, dependency-free charts for the admin Analytics page. Single series,
// one validated hue per theme (--kr-viz in custom.scss). Hover or focus a column
// to see its value; each chart also has a table for screen readers.

const nf = new Intl.NumberFormat("en-CA");
export const formatNumber = (value: number) => nf.format(value);

function dayLabel(date: string, withYear = false) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-CA", { month: "short", day: "numeric", ...(withYear ? { year: "numeric" } : {}), timeZone: "UTC" });
}

// A round top value for the y-axis whose half is a whole number (4, 6, 8, 10, 12, 150, 1200 …)
function niceMax(value: number) {
  if (value <= 4) return 4;
  const power = 10 ** Math.floor(Math.log10(value));
  const step = [1, 1.2, 1.5, 2, 2.5, 3, 4, 5, 6, 8, 10].find((s) => s * power >= value && Number.isInteger((s * power) / 2)) ?? 10;
  return step * power;
}

// Every Nth day plus the last one, skipping a label that would crowd the last
function showXLabel(index: number, count: number, every: number) {
  const last = count - 1;
  if (index === last) return true;
  return index % every === 0 && last - index >= Math.ceil(every / 2);
}

export function DailyColumns({ points, unit, label }: { points: DayPoint[]; unit: string; label: string }) {
  const max = niceMax(Math.max(0, ...points.map((p) => p.value)));
  const ticks = [max, max / 2, 0];
  const labelEvery = points.length > 31 ? 15 : points.length > 7 ? 7 : 1;
  return (
    <figure className="kr-viz-columns" aria-label={label}>
      <div className="kr-viz-columns__plot">
        <div className="kr-viz-columns__grid" aria-hidden="true">
          {ticks.map((tick) => (
            <div key={tick} className="kr-viz-columns__tick">
              <span>{formatNumber(Math.round(tick))}</span>
            </div>
          ))}
        </div>
        <div className="kr-viz-columns__bars" style={{ "--kr-cols": points.length } as React.CSSProperties}>
          {points.map((point, index) => (
            <div key={point.date} className="kr-viz-columns__col" tabIndex={0} aria-label={`${dayLabel(point.date, true)}: ${formatNumber(point.value)} ${unit}`}>
              <span className="kr-viz-columns__bar" style={{ height: `${max ? (point.value / max) * 100 : 0}%` }} />
              <span className="kr-viz-tip" role="tooltip">
                <strong>{formatNumber(point.value)}</strong> {unit}
                <span>{dayLabel(point.date, true)}</span>
              </span>
              {showXLabel(index, points.length, labelEvery) ? (
                <span className="kr-viz-columns__x" aria-hidden="true">{dayLabel(point.date)}</span>
              ) : null}
            </div>
          ))}
        </div>
      </div>
      <table className="kr-sr-only">
        <caption>{label}</caption>
        <thead>
          <tr><th scope="col">Day</th><th scope="col">{unit}</th></tr>
        </thead>
        <tbody>
          {points.map((point) => (
            <tr key={point.date}><td>{dayLabel(point.date, true)}</td><td>{point.value}</td></tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}

export function RankList({ title, rows, unit, empty = "No data for this period yet." }: { title: string; rows: Row[]; unit: string; empty?: string }) {
  const max = Math.max(0, ...rows.map((row) => row.value));
  return (
    <section className="kr-rank" aria-label={title}>
      <div className="kr-rank__head">
        <h3>{title}</h3>
        <span className="kr-muted kr-small">{unit}</span>
      </div>
      {rows.length === 0 ? (
        <p className="kr-muted kr-small">{empty}</p>
      ) : (
        <ol className="kr-rank__list">
          {rows.map((row) => (
            <li key={row.label} className="kr-rank__row" title={`${row.label}: ${formatNumber(row.value)} ${unit.toLowerCase()}`}>
              <span className="kr-rank__bar" style={{ width: `${max ? Math.max(2, (row.value / max) * 100) : 0}%` }} aria-hidden="true" />
              <span className="kr-rank__label">{row.label}</span>
              <span className="kr-rank__value">{formatNumber(row.value)}</span>
            </li>
          ))}
        </ol>
      )}
    </section>
  );
}
