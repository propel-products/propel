# Home Page Preview Mode

## 🎯 Overview

The home page redirect to the holding page can be bypassed using a query parameter, allowing you to preview the actual home page while keeping the redirect active for regular visitors.

## 🔍 How to Use

### View Home Page (Bypass Redirect)

Add `?preview=true` to the URL:

```
https://www.ocoiom.com/?preview=true
```

or for local development:

```
http://localhost:3000/?preview=true
```

### Normal Behavior (Redirect Active)

Without the preview parameter, visitors are automatically redirected:

```
https://www.ocoiom.com/ → redirects to → /holding
```

## ✅ Benefits

1. **Test Changes**: Preview home page updates without disabling the redirect
2. **Staging Review**: Review the actual home page before going live
3. **No Code Changes**: Switch between redirect and preview via URL
4. **Public Redirect**: Regular visitors still see the holding page

## 📝 Technical Details

- The redirect logic checks for `searchParams?.preview`
- If `preview=true` is present, the actual home page content is rendered
- Without the parameter, the redirect to `/holding` executes
- Both pages are served dynamically for this to work

## 🚀 Going Live

When ready to restore the home page permanently:

1. Copy contents from `app/page.backup.js` to `app/page.js`
2. OR remove the redirect logic from `app/page.js`
3. Remove the preview parameter check
4. Deploy the changes

---

**Current Status**: Redirect active, preview mode available via `?preview=true`

