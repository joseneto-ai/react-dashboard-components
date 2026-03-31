/**
 * ActivityFeed Component
 * ======================
 * Renders a chronological feed of automation events
 * with type-based styling and timestamps.
 *
 * Author: José Neto @zNeto.AI
 */

import React from 'react';

const TYPE_CONFIG = {
  success: { color: '#16a34a', dot: '#16a34a', label: 'SUCCESS' },
  warning: { color: '#d97706', dot: '#d97706', label: 'WARNING' },
  error:   { color: '#dc2626', dot: '#dc2626', label: 'ERROR'   },
  info:    { color: '#2563eb', dot: '#9ca3af', label: 'INFO'    },
};

const styles = {
  feed: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0',
    fontFamily: 'system-ui, -apple-system, sans-serif',
  },
  item: {
    display: 'flex',
    gap: '14px',
    alignItems: 'flex-start',
    padding: '12px 0',
    borderBottom: '1px solid #f3f4f6',
  },
  dotWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: '4px',
    minWidth: '12px',
  },
  dot: {
    width: '10px',
    height: '10px',
    borderRadius: '50%',
    flexShrink: 0,
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '2px',
  },
  message: {
    fontSize: '14px',
    color: '#111827',
    lineHeight: 1.4,
  },
  meta: {
    display: 'flex',
    gap: '8px',
    alignItems: 'center',
  },
  timestamp: {
    fontSize: '11px',
    color: '#9ca3af',
    fontFamily: 'monospace',
  },
  typeBadge: {
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '0.06em',
    padding: '1px 6px',
    borderRadius: '4px',
  },
  empty: {
    padding: '24px 0',
    textAlign: 'center',
    color: '#9ca3af',
    fontSize: '14px',
  },
};

function formatTime(iso) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleTimeString('en-GB', {
    hour: '2-digit',
    minute: '2-digit',
  });
}

function ActivityFeed({ events = [], maxItems = 20, showTimestamp = true }) {
  const visible = events.slice(0, maxItems);

  if (visible.length === 0) {
    return (
      <div style={styles.feed}>
        <div style={styles.empty}>No activity to display.</div>
      </div>
    );
  }

  return (
    <div style={styles.feed}>
      {visible.map(event => {
        const cfg = TYPE_CONFIG[event.type] || TYPE_CONFIG.info;
        return (
          <div key={event.id} style={styles.item}>
            <div style={styles.dotWrapper}>
              <div style={{ ...styles.dot, backgroundColor: cfg.dot }} />
            </div>
            <div style={styles.content}>
              <span style={styles.message}>{event.message}</span>
              <div style={styles.meta}>
                {showTimestamp && (
                  <span style={styles.timestamp}>
                    {formatTime(event.timestamp)}
                  </span>
                )}
                <span style={{
                  ...styles.typeBadge,
                  color: cfg.color,
                  backgroundColor: cfg.color + '18',
                }}>
                  {cfg.label}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ActivityFeed;
