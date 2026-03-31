# 📡 ActivityFeed

Renders a chronological list of automation events, lead
interactions, or system notifications — each with a timestamp,
status tag, and descriptive message.

Designed to give operations teams a real-time view of what
an AI automation pipeline is doing: which leads were qualified,
which escalations were triggered, which appointments were scheduled.

---

## Preview
```
● [22:13] HOT lead detected — Ana Lima via WhatsApp
○ [21:45] Appointment scheduled — Carlos Melo, Nov 18
● [19:30] URGENT escalation — Beatriz Rocha routed to staff
○ [17:12] Nurture sequence started — 12 WARM leads enrolled
```

---

## Props

| Prop | Type | Required | Description |
|---|---|---|---|
| `events` | array | ✅ | Array of event objects (see schema below) |
| `maxItems` | number | ❌ | Max events to display before truncating (default: `20`) |
| `showTimestamp` | boolean | ❌ | Show or hide timestamps (default: `true`) |

### Event Object Schema
```js
{
  id: string,
  timestamp: string,   // ISO date string
  type: 'success' | 'warning' | 'error' | 'info',
  message: string
}
```

---

## Usage
```jsx
import ActivityFeed from './ActivityFeed';

const events = [
  {
    id: 'evt_001',
    timestamp: '2024-11-14T22:13:00Z',
    type: 'success',
    message: 'HOT lead detected — Ana Lima via WhatsApp',
  },
  {
    id: 'evt_002',
    timestamp: '2024-11-14T21:45:00Z',
    type: 'info',
    message: 'Appointment scheduled — Carlos Melo, Nov 18',
  },
];


```

---

## Files

- `README.md` — This documentation
- `ActivityFeed.jsx` — Component source code
