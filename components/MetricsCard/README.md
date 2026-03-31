# 📊 MetricsCard

Displays a single business KPI with label, current value,
trend direction, and optional delta comparison to a previous period.

Built for dashboards that surface the output of AI automation
workflows — lead counts, response rates, conversion percentages,
and operational metrics.

---

## Preview
```
┌─────────────────────────────┐
│  Total Leads This Week      │
│                             │
│  84          ↑ +12%         │
│              vs last week   │
└─────────────────────────────┘
```

---

## Props

| Prop | Type | Required | Description |
|---|---|---|---|
| `title` | string | ✅ | Label displayed above the metric |
| `value` | string \| number | ✅ | The primary metric value |
| `trend` | `"up"` \| `"down"` \| `"neutral"` | ❌ | Trend direction indicator |
| `delta` | string | ❌ | Delta label, e.g. `"+12%"` or `"-3 leads"` |
| `comparison` | string | ❌ | Comparison period label, e.g. `"vs last week"` |
| `color` | string | ❌ | Accent color for the card border (hex or CSS color) |

---

## Usage
```jsx
import MetricsCard from './MetricsCard';


```

---

## Use Cases

- AI automation dashboards showing lead volume
- WhatsApp agent performance monitoring
- Sales pipeline KPI display
- Operational efficiency reporting

---

## Files

- `README.md` — This documentation
- `MetricsCard.jsx` — Component source code
