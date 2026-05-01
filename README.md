# ArthTracker UI Design

This project is a React + Vite dashboard prototype for managing FD and insurance maturity data.

## Step-by-step UI Design

### 1. Dashboard Screen

- Header
  - App title: `ArthTracker`
  - User greeting
  - Notification icon
  - Profile icon
- Summary cards
  - Active FDs
  - Active Insurance
  - Matured Items
  - Renewals This Month
- Maturity alerts
  - Maturing Soon list
  - Already Matured list
  - Renew button for each item
- Quick actions
  - Add New FD
  - Add New Insurance
  - Search Records
  - View History
- Recent activity
  - Recently added records
  - Recently renewed items
  - Recent searches

### 2. Add Record Screen

- Choose instrument type: `FD` or `Insurance`
- Display a clear form with fields specific to the selected type
- Buttons:
  - `Save`
  - `Cancel`
- After submit:
  - show confirmation
  - offer `View details` or `Add another`

### 3. Search & Filter Screen

- Search bar for product number, bank, insurer, or policy number
- Filters:
  - Type: `FD` / `Insurance`
  - Status: `Active`, `Matured`, `Renewed`
  - Maturity date range
  - Amount range
- Results list showing:
  - product number
  - type
  - bank / insurer
  - maturity date
  - status
  - quick `View` action

### 4. Item Detail Screen

- Top summary panel
  - Product number
  - Type
  - Status badge
  - Bank / insurer
  - Start date
  - Maturity date
  - Amounts
- Detail sections
  - Terms
  - Notes
  - Renewal history
- Actions
  - `Renew`
  - `Edit`
  - `Back to Dashboard`

### 5. Renew Item Screen

- Show selected item summary
- Renewal form fields
  - New FD / policy number
  - New start date
  - New maturity date
  - New terms or premium
  - Notes
- Keep old record intact as history
- Create a new record with a new number
- Show success and next steps

### 6. History Screen

- Search or select a record
- Display the renewal chain as a timeline
- Show each previous version
  - old number
  - new number
  - renewal date
  - terms changed
  - status at that time
- Allow opening historical versions

## Component Structure

- `src/components/Dashboard.jsx`
- `src/components/Header.jsx`
- `src/components/SummaryCards.jsx`
- `src/components/MaturityAlerts.jsx`
- `src/components/QuickActions.jsx`
- `src/components/RecentActivity.jsx`

## Design Notes

- The dashboard should be responsive and use a full-width layout.
- Keep history immutable: do not overwrite matured records when renewing.
- Focus the UI on maturity visibility and quick renewal actions.
- Use modern card-based layout and clear spacing for readability.

## How to Run

```bash
npm install
npm run dev
```

Open the app at the local Vite URL shown in the terminal.
