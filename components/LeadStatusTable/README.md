# 📋 LeadStatusTable

Renders a sortable table of leads with intent classification badges,
lead scores, source channels, and last-interaction timestamps.

Built specifically for displaying output from AI lead qualification
pipelines — where each lead has been scored and classified by an
LLM before reaching the table.

---

## Preview
```
┌──────────────┬────────────┬───────┬──────────────┬─────────────────────┐
│ Name         │ Status     │ Score │ Source       │ Last Interaction     │
├──────────────┼────────────┼───────┼──────────────┼─────────────────────┤
│ Ana Lima     │ 🟢 HOT     │ 9/10  │ WhatsApp     │ 2024-11-14 22:13    │
│ Carlos Melo  │ 🟡 WARM    │ 6/10  │ Web Form     │ 2024-11-14 19:45    │
│ Beatriz Rocha│ 🔴 COLD    │ 2/10  │ Landing Page │ 2024-11-13 11:20    │
└──────────────┴────────────┴───────┴──────────────┴─────────────────────┘
```

---

## Props

| Prop | Type | Required | Description |
|---|---|---|---|
| `leads` | array | ✅ | Array of lead objects (see schema below) |
| `onRowClick` | function | ❌ | Callback fired when a row is clicked, receives lead object |
| `sortable` | boolean | ❌ | Enables column header click-to-sort (default: `true`) |

### Lead Object Schema
```js
{
  id: string,
  name: string,
  status: 'HOT' | 'WARM' | 'COLD' | 'URGENT',
  score: number,        // 1–10
  source: string,       // e.g. 'WhatsApp', 'Web Form'
  lastInteraction: string  // ISO date string
}
```

---

## Usage
```jsx
import LeadStatusTable from './LeadStatusTable';

const leads = [
  {
    id: '001',
    name: 'Ana Lima',
    status: 'HOT',
    score: 9,
    source: 'WhatsApp',
    lastInteraction: '2024-11-14T22:13:00Z',
  },
];

<LeadStatusTable
  leads={leads}
  sortable={true}
  onRowClick={(lead) => console.log('Selected:', lead)}
/>
```

---

## Files

- `README.md` — This documentation
- `LeadStatusTable.jsx` — Component source code
```
