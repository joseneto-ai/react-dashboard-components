/**
 * MetricsCard Component
 * =====================
 * Displays a single business KPI with label, value,
 * trend indicator, and optional period comparison.
 *
 * Author: José Neto @zNeto.AI
 */

import React from 'react';

const TREND_SYMBOLS = {
  up: '↑',
  down: '↓',
  neutral: '→',
};

const TREND_COLORS = {
  up: '#16a34a',
  down: '#dc2626',
  neutral: '#6b7280',
};

const styles = {
  card: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
    borderLeft: '4px solid #4f46e5',
    minWidth: '200px',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  title: {
    fontSize: '13px',
    fontWeight: '500',
    color: '#6b7280',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    marginBottom: '12px',
  },
  valueRow: {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    gap: '12px',
  },
  value: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#111827',
    lineHeight: 1,
  },
  trendBlock: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: '2px',
  },
  trendBadge: {
    fontSize: '14px',
    fontWeight: '600',
  },
  comparison: {
    fontSize: '11px',
    color: '#9ca3af',
  },
};

function MetricsCard({
  title,
  value,
  trend = 'neutral',
  delta = null,
  comparison = null,
  color = '#4f46e5',
}) {
  const trendSymbol = TREND_SYMBOLS[trend] || '→';
  const trendColor = TREND_COLORS[trend] || '#6b7280';

  return (
    <div style={{ ...styles.card, borderLeftColor: color }}>
      <div style={styles.title}>{title}</div>
      <div style={styles.valueRow}>
        <div style={styles.value}>{value}</div>
        {delta && (
          <div style={styles.trendBlock}>
            <span style={{ ...styles.trendBadge, color: trendColor }}>
              {trendSymbol} {delta}
            </span>
            {comparison && (
              <span style={styles.comparison}>{comparison}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default MetricsCard;
```
