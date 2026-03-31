# ⚛️ React Dashboard Components — zNeto.AI

Reusable, production-ready React components built for business
intelligence dashboards. Designed to visualize the output of
AI automation workflows — leads, conversions, activity, and
operational metrics — in a clean, functional interface.

Each component is self-contained, prop-driven, and built to
integrate directly into any React application without friction.

---

## 🧩 Available Components

### 1. 📊 MetricsCard
Displays a single KPI or metric with label, value, trend
indicator, and optional comparison to previous period.

→ [`/components/MetricsCard`](./components/MetricsCard/README.md)

---

### 2. 📋 LeadStatusTable
Renders a sortable, filterable table of leads with status
badges, intent scores, and action timestamps — built for
AI-qualified lead pipelines.

→ [`/components/LeadStatusTable`](./components/LeadStatusTable/README.md)

---

### 3. 📡 ActivityFeed
Real-time style activity feed that renders a chronological
list of automation events, lead interactions, or system
notifications with timestamps and status tags.

→ [`/components/ActivityFeed`](./components/ActivityFeed/README.md)

---

## 🚀 Quick Start
```bash
# Clone the repository
git clone https://github.com/joseneto-ai/react-dashboard-components

# Navigate into the project
cd react-dashboard-components

# Install dependencies
npm install react react-dom

# Open the demo
open demo/index.html
```

---

## ⚙️ Requirements

- React 18+
- Node.js 18+
- No external UI library required — pure React + CSS

---

## 🗂️ Repository Structure
```
react-dashboard-components/
├── README.md                        # This file
├── components/
│   ├── MetricsCard/
│   │   ├── MetricsCard.jsx          # Component source
│   │   └── README.md                # Props, usage, examples
│   ├── LeadStatusTable/
│   │   ├── LeadStatusTable.jsx
│   │   └── README.md
│   └── ActivityFeed/
│       ├── ActivityFeed.jsx
│       └── README.md
└── demo/
    └── index.html                   # Live preview (no build required)
```

---

## 💡 Design Decisions

- **No CSS framework dependency** — components use scoped inline
  styles and className patterns, keeping them portable across projects
- **Prop-driven architecture** — all data passed via props, no
  internal API calls, making components trivially testable
- **Business-context naming** — components are named after what
  they represent in a business workflow, not generic UI patterns

---

## 👤 Author

**José Neto** — AI Automation Engineer & Founder @zNeto.AI

[![LinkedIn](https://img.shields.io/badge/LinkedIn-José%20Neto-0077B5?style=flat&logo=linkedin)](https://www.linkedin.com/in/jos%C3%A9-neto-b88558398)
[![GitHub](https://img.shields.io/badge/GitHub-joseneto--ai-181717?style=flat&logo=github)](https://github.com/joseneto-ai)
