/**
 * LeadStatusTable Component
 * =========================
 * Renders a sortable table of AI-qualified leads with
 * intent status badges and interaction timestamps.
 *
 * Author: José Neto @zNeto.AI
 */

import React, { useState } from 'react';

const STATUS_CONFIG = {
  HOT:    { label: 'HOT',    color: '#16a34a', bg: '#dcfce7' },
  WARM:   { label: 'WARM',   color: '#d97706', bg: '#fef3c7' },
  COLD:   { label: 'COLD',   color: '#2563eb', bg: '#dbeafe' },
  URGENT: { label: 'URGENT', color: '#dc2626', bg: '#fee2e2' },
};

const styles = {
  wrapper: {
    width: '100%',
    overflowX: 'auto',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  table: {
    width: '100%',
    borderCollapse: 'collapse',
    fontSize: '14px',
  },
  th: {
    textAlign: 'left',
    padding: '12px 16px',
    fontSize: '12px',
    fontWeight: '600',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    borderBottom: '2px solid #e5e7eb',
    cursor: 'pointer',
    userSelect: 'none',
    whiteSpace: 'nowrap',
  },
  td: {
    padding: '14px 16px',
    borderBottom: '1px solid #f3f4f6',
    color: '#111827',
  },
  row: {
    transition: 'background 0.15s',
  },
  badge: {
    display: 'inline-block',
    padding: '3px 10px',
    borderRadius: '999px',
    fontSize: '11px',
    fontWeight: '700',
    letterSpacing: '0.05em',
  },
  score: {
    fontWeight: '600',
    color: '#374151',
  },
  source: {
    color: '#6b7280',
    fontSize: '13px',
  },
  timestamp: {
    color: '#9ca3af',
    fontSize: '12px',
    fontFamily: 'monospace',
  },
};

function formatDate(iso) {
  if (!iso) return '—';
  const d = new Date(iso);
  return d.toLocaleString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

const COLUMNS = [
  { key: 'name',            label: 'Name' },
  { key: 'status',          label: 'Status' },
  { key: 'score',           label: 'Score' },
  { key: 'source',          label: 'Source' },
  { key: 'lastInteraction', label: 'Last Interaction' },
];

function LeadStatusTable({ leads = [], onRowClick, sortable = true }) {
  const [sortKey, setSortKey]   = useState('lastInteraction');
  const [sortDir, setSortDir]   = useState('desc');

  function handleSort(key) {
    if (!sortable) return;
    if (sortKey === key) {
      setSortDir(d => (d === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortKey(key);
      setSortDir('asc');
    }
  }

  const sorted = [...leads].sort((a, b) => {
    const aVal = a[sortKey] ?? '';
    const bVal = b[sortKey] ?? '';
    if (aVal < bVal) return sortDir === 'asc' ? -1 : 1;
    if (aVal > bVal) return sortDir === 'asc' ? 1 : -1;
    return 0;
  });

  return (
    <div style={styles.wrapper}>
      <table style={styles.table}>
        <thead>
          <tr>
            {COLUMNS.map(col => (
              <th
                key={col.key}
                style={styles.th}
                onClick={() => handleSort(col.key)}
              >
                {col.label}
                {sortable && sortKey === col.key
                  ? sortDir === 'asc' ? ' ↑' : ' ↓'
                  : ''}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sorted.length === 0 ? (
            <tr>
              <td colSpan={5} style={{ ...styles.td, color: '#9ca3af', textAlign: 'center' }}>
                No leads to display.
              </td>
            </tr>
          ) : (
            sorted.map(lead => {
              const cfg = STATUS_CONFIG[lead.status] || STATUS_CONFIG.COLD;
              return (
                <tr
                  key={lead.id}
                  style={styles.row}
                  onClick={() => onRowClick && onRowClick(lead)}
                  onMouseEnter={e => e.currentTarget.style.background = '#f9fafb'}
                  onMouseLeave={e => e.currentTarget.style.background = ''}
                >
                  <td style={styles.td}>{lead.name}</td>
                  <td style={styles.td}>
                    <span style={{
                      ...styles.badge,
                      color: cfg.color,
                      backgroundColor: cfg.bg,
                    }}>
                      {cfg.label}
                    </span>
                  </td>
                  <td style={styles.td}>
                    <span style={styles.score}>{lead.score}/10</span>
                  </td>
                  <td style={styles.td}>
                    <span style={styles.source}>{lead.source}</span>
                  </td>
                  <td style={styles.td}>
                    <span style={styles.timestamp}>
                      {formatDate(lead.lastInteraction)}
                    </span>
                  </td>
                </tr>
              );
            })
          )}
        </tbody>
      </table>
    </div>
  );
}

export default LeadStatusTable;
