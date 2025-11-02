# Holding Page - How to Switch

## 🔄 Switching to Holding Page

### Option 1: Temporary Redirect (Recommended)
Create or update `app/page.js` to redirect to the holding page:

```javascript
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('/holding');
}
```

### Option 2: Replace Content
Backup your current `app/page.js` and replace it with the holding page content.

---

## 🔄 Switching Back to Main Site

### Option 1: Remove Redirect
Restore the original `app/page.js` content.

### Option 2: Delete Redirect
If you used Option 1, simply remove the redirect code and restore your main page.

---

## 📝 Quick Commands

**Enable Holding Page:**
```bash
# Backup current page
cp app/page.js app/page.backup.js

# Replace with redirect (see Option 1 above)
# Or copy holding page content to app/page.js
```

**Disable Holding Page:**
```bash
# Restore main page
cp app/page.backup.js app/page.js

# Or remove redirect from app/page.js
```

---

## ✅ Current Status

- ✅ Holding page created at: `/app/holding/page.js`
- ✅ Accessible at: `https://www.ocoiom.com/holding`
- ⚠️ Main site still active at: `https://www.ocoiom.com/`

**To activate holding page, see Option 1 or 2 above.**

