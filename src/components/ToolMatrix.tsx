import React from 'react';

export type ToolMatrixColumn = {
  id: string;
  label: string;
  tier: 'primary' | 'secondary';
};

export type ToolMatrixCell =
  | { kind: 'text'; value: string }
  | { kind: 'code'; value: string }
  | { kind: 'link'; value: string; href: string }
  | { kind: 'status'; value: 'yes' | 'no' | 'partial' | 'na' };

export type ToolMatrixRow = {
  label: string;
  group?: string;
  cells: Record<string, ToolMatrixCell>;
};

export type ToolMatrixProps = {
  columns: ToolMatrixColumn[];
  rows: ToolMatrixRow[];
  density?: 'normal' | 'compact';
  footnote?: React.ReactNode;
};

const statusLabels: Record<ToolMatrixCell & { kind: 'status' } extends never ? never : string, string> = {
  yes: 'Yes',
  no: 'No',
  partial: 'Partial',
  na: '—',
};

const statusStyles: Record<string, string> = {
  yes: 'text-green-700 bg-green-50',
  no: 'text-gray-500 bg-gray-50',
  partial: 'text-amber-700 bg-amber-50',
  na: 'text-gray-400 bg-gray-50',
};

function renderCell(cell: ToolMatrixCell | undefined) {
  if (!cell) {
    return <span className="text-gray-400">—</span>;
  }

  switch (cell.kind) {
    case 'text':
      return <span className="text-gray-700">{cell.value}</span>;
    case 'code':
      return (
        <code className="text-xs sm:text-sm font-mono bg-gray-100 text-gray-800 px-1.5 py-0.5 rounded break-all">
          {cell.value}
        </code>
      );
    case 'link':
      return (
        <a
          href={cell.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline break-all"
        >
          {cell.value}
        </a>
      );
    case 'status':
      return (
        <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${statusStyles[cell.value]}`}>
          {statusLabels[cell.value] ?? cell.value}
        </span>
      );
    default:
      return null;
  }
}

function CellContent({ cell }: { cell: ToolMatrixCell | undefined }) {
  return <div className="text-sm leading-snug">{renderCell(cell)}</div>;
}

export function ToolMatrix({ columns, rows, density = 'normal', footnote }: ToolMatrixProps) {
  const primaryColumns = columns.filter((c) => c.tier === 'primary');
  const secondaryColumns = columns.filter((c) => c.tier === 'secondary');
  const cellPadding = density === 'compact' ? 'px-2 py-2' : 'px-3 py-2.5';

  return (
    <div className="w-full max-w-4xl mx-auto space-y-4">
      {/* Mobile: row-as-card */}
      <div className="md:hidden space-y-3">
        {rows.map((row) => (
          <div key={row.label} className="bg-white rounded-lg shadow border border-gray-200 overflow-hidden">
            <div className="bg-gray-100 px-3 py-2 border-b border-gray-200">
              <h4 className="font-semibold text-gray-900 text-sm">{row.label}</h4>
              {row.group && <p className="text-xs text-gray-500 mt-0.5">{row.group}</p>}
            </div>
            <div className="divide-y divide-gray-100">
              {primaryColumns.map((col) => (
                <div key={col.id} className="px-3 py-2">
                  <div className="text-xs font-medium text-gray-500 mb-1">{col.label}</div>
                  <CellContent cell={row.cells[col.id]} />
                </div>
              ))}
              {secondaryColumns.length > 0 && (
                <>
                  <div className="px-3 py-1.5 bg-gray-50">
                    <span className="text-xs text-gray-500 font-medium">Also</span>
                  </div>
                  {secondaryColumns.map((col) => (
                    <div key={col.id} className="px-3 py-2 bg-gray-50/50">
                      <div className="text-xs font-medium text-gray-400 mb-1">{col.label}</div>
                      <CellContent cell={row.cells[col.id]} />
                    </div>
                  ))}
                </>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: semantic table with scroll affordance */}
      <div className="hidden md:block relative">
        <div className="overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
          <table className="w-full min-w-[640px] border-collapse text-sm">
            <thead>
              <tr className="bg-gray-100">
                <th
                  className={`sticky left-0 z-10 bg-gray-100 text-left font-semibold text-gray-900 border-b border-gray-200 ${cellPadding} min-w-[140px]`}
                >
                  Capability
                </th>
                {columns.map((col) => (
                  <th
                    key={col.id}
                    className={`text-left font-semibold border-b border-gray-200 ${cellPadding} min-w-[120px] ${
                      col.tier === 'secondary'
                        ? 'text-gray-500 bg-gray-50/80'
                        : 'text-gray-900 bg-gray-100'
                    }`}
                  >
                    {col.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={row.label} className={idx % 2 === 0 ? 'bg-white' : 'bg-gray-50/30'}>
                  <td
                    className={`sticky left-0 z-10 font-medium text-gray-900 border-b border-gray-100 ${cellPadding} ${
                      idx % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                    }`}
                  >
                    {row.label}
                    {row.group && (
                      <div className="text-xs font-normal text-gray-500 mt-0.5">{row.group}</div>
                    )}
                  </td>
                  {columns.map((col) => (
                    <td
                      key={col.id}
                      className={`border-b border-gray-100 align-top ${cellPadding} ${
                        col.tier === 'secondary' ? 'bg-gray-50/50 text-gray-600' : ''
                      }`}
                    >
                      <CellContent cell={row.cells[col.id]} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div
          className="pointer-events-none absolute top-0 right-0 bottom-0 w-8 bg-gradient-to-l from-gray-100/90 to-transparent rounded-r-lg"
          aria-hidden="true"
        />
      </div>

      {footnote && (
        <div className="bg-gray-100 p-3 rounded-lg text-sm text-gray-600">{footnote}</div>
      )}
    </div>
  );
}

/** Standard primary + secondary tool columns for capability matrices */
export const STANDARD_TOOL_COLUMNS: ToolMatrixColumn[] = [
  { id: 'cursor', label: 'Cursor', tier: 'primary' },
  { id: 'claude', label: 'Claude Code', tier: 'primary' },
  { id: 'copilot', label: 'GitHub Copilot', tier: 'primary' },
  { id: 'codex', label: 'Codex', tier: 'secondary' },
  { id: 'devin', label: 'Devin Desktop', tier: 'secondary' },
];
