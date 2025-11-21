# Lighthouse Performance Fixes

## Common Lighthouse Issues & Fixes

Based on typical Lighthouse reports, here are the most important performance optimizations:

---

## 🔴 Critical Fixes (High Impact)

### 1. Image Optimization

**Issue**: Images without proper loading strategy, missing dimensions, or not optimized

**Fixes Needed**:

#### Hero Images (Above the fold)
- Add `priority` prop to hero images
- Ensure width/height are set

#### Below-the-fold Images
- Add `loading="lazy"` (default in Next.js Image)
- Ensure all images use Next.js Image component

**Files to Update**:
- `components/Hero.jsx` - Hero images
- `app/about/page.js` - Gary's photo
- `components/Footer.jsx` - Badge images

### 2. Font Loading Optimization

**Issue**: Render-blocking fonts or missing font-display

**Current**: Using system fonts (good!)
**Fix**: Add font-display if using custom fonts

### 3. Preload Critical Resources

**Issue**: Critical resources not preloaded

**Fix**: Add preload for:
- Critical CSS
- Hero images
- Fonts (if custom)

### 4. JavaScript Bundle Size

**Issue**: Large JavaScript bundles blocking render

**Fix**: 
- Code splitting (Next.js does this automatically)
- Dynamic imports for heavy components
- Remove unused dependencies

### 5. Third-Party Scripts

**Issue**: Analytics blocking render

**Current**: Vercel Analytics (should be async)
**Fix**: Ensure all scripts are async/defer

---

## 🟡 Important Fixes (Medium Impact)

### 6. CSS Optimization

**Issue**: Unused CSS or render-blocking CSS

**Current**: Tailwind CSS (good - purges unused)
**Fix**: Ensure Tailwind purging is working

### 7. Caching Headers

**Issue**: Missing cache headers for static assets

**Fix**: Vercel handles this, but verify

### 8. Reduce Initial Server Response Time

**Issue**: Slow TTFB (Time to First Byte)

**Fix**: 
- Ensure Vercel edge caching
- Optimize API routes
- Use static generation where possible

---

## 🟢 Nice-to-Have Fixes (Low Impact)

### 9. Minimize Main-Thread Work

**Issue**: Long tasks blocking main thread

**Fix**: 
- Code splitting
- Lazy load non-critical components
- Optimize animations

### 10. Reduce Unused JavaScript

**Issue**: Unused code in bundles

**Fix**: 
- Tree shaking (Next.js does this)
- Remove unused imports
- Use dynamic imports

---

## Implementation Priority

1. **Image optimization** (Hero images with priority)
2. **Preload critical resources**
3. **Verify analytics is async**
4. **Check bundle sizes**
5. **Optimize below-fold images**

---

## Quick Wins Checklist

- [ ] Add `priority` to hero images
- [ ] Ensure all images have width/height
- [ ] Add preload for critical resources
- [ ] Verify Vercel Analytics is async
- [ ] Check bundle sizes in build output
- [ ] Run Lighthouse again after fixes

