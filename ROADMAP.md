# Propel Website Roadmap

Development roadmap for propel.im - our digital and AI studio website.

---

## 🎯 Vision

Transform propel.im from a static portfolio site into an interactive showcase of AI capabilities, creative technology, and digital innovation. The site should demonstrate what we build while being a powerful lead generation tool.

---

## Phase 1: Foundation ✅ (Current)

### Theming System
- [x] Install next-themes for dark/light/system modes
- [x] Create 3 brand color themes (Cyan, Violet, Orange)
- [x] CSS custom properties for dynamic colors
- [x] ThemeProvider and ThemeSwitcher components
- [x] Theme persistence in localStorage
- [ ] Smooth transition animations between themes
- [ ] Add more color themes (gradient options?)

### Favicon & Branding
- [x] Create arrow favicon from logo triangle
- [x] SVG favicon for modern browsers
- [x] Update site.webmanifest
- [ ] Generate PNG favicons for legacy browsers
- [ ] Create OG image variants for each theme

### Core Component Updates
- [x] Navigation with ThemeSwitcher
- [x] Hero component with dynamic colors
- [x] Button component with theme support
- [x] AnimatedLogo with theme colors
- [ ] Update remaining components (CookieBanner, Footer, etc.)
- [ ] Update all page-specific color references

---

## Phase 2: Playground Foundation 🚧 (In Progress)

### Structure
- [x] Create /playground route and layout
- [x] Experiment cards with status badges
- [x] Responsive grid layout
- [ ] Experiment filtering and search
- [ ] Favorites/bookmarks for experiments

### Chat Agent (Live)
- [x] Chat interface UI
- [x] Message history
- [x] Server-side API route
- [x] Azure OpenAI integration (demo mode ready)
- [ ] Streaming responses
- [ ] Code syntax highlighting in responses
- [ ] Export conversation feature
- [ ] Model selection (GPT-4, GPT-4 Turbo)

### Coming Soon Experiments
- [ ] RAG Demo - Document search with embeddings
- [ ] Document Processor - PDF/document analysis
- [ ] Creative AI - Image generation with DALL-E
- [ ] Automation Builder - Visual workflow designer
- [ ] Data Explorer - Natural language SQL

---

## Phase 3: AI Experiments 📋 (Planned)

### RAG Search Demo
- [ ] Document upload interface
- [ ] Vector embedding with Azure OpenAI
- [ ] Semantic search UI
- [ ] Source citation display
- [ ] Pre-loaded demo documents

### Document Processor
- [ ] PDF upload and parsing
- [ ] OCR for scanned documents
- [ ] AI summarization
- [ ] Key information extraction
- [ ] Export to structured formats

### Creative AI Studio
- [ ] DALL-E 3 integration
- [ ] Prompt suggestions
- [ ] Image variations
- [ ] Style presets
- [ ] Download/share functionality

### Industry-Specific Demos
- [ ] Legal document analyzer
- [ ] Corporate services automation
- [ ] Financial report generator
- [ ] Contract review assistant

---

## Phase 4: 3D & Animation Layer 🎨 (Future)

### React Three Fiber Integration
- [ ] Install @react-three/fiber and @react-three/drei
- [ ] Animated background scenes
- [ ] Interactive 3D elements
- [ ] Performance optimization (lazy loading)
- [ ] Mobile fallbacks

### Possible 3D Features
- [ ] Floating geometric shapes background
- [ ] Interactive particle systems
- [ ] 3D logo animation
- [ ] Data visualization in 3D
- [ ] WebGL shaders for effects

### Animation Enhancements
- [ ] GSAP for complex animations
- [ ] Lottie for micro-interactions
- [ ] Scroll-triggered animations
- [ ] Page transition effects
- [ ] Loading state animations

---

## Phase 5: Advanced Features 🚀 (Future)

### Performance
- [ ] Image optimization pipeline
- [ ] Edge caching for API routes
- [ ] Rate limiting for AI endpoints
- [ ] Usage analytics dashboard

### Personalization
- [ ] User accounts (optional)
- [ ] Saved experiments/conversations
- [ ] Custom themes creator
- [ ] API access for developers

### Content
- [ ] Blog/insights section
- [ ] Case studies
- [ ] Technical documentation
- [ ] Video tutorials

---

## Technical Debt & Improvements

### Code Quality
- [ ] TypeScript migration
- [ ] Component testing with Jest/Testing Library
- [ ] E2E tests with Playwright
- [ ] Storybook for component documentation
- [ ] ESLint/Prettier configuration

### Accessibility
- [ ] WCAG 2.1 AA compliance audit
- [ ] Keyboard navigation improvements
- [ ] Screen reader testing
- [ ] Color contrast verification for all themes

### SEO & Analytics
- [ ] Enhanced structured data
- [ ] Performance monitoring
- [ ] Error tracking (Sentry)
- [ ] User behavior analytics

---

## Inspiration Sources

- [Google Labs](https://labs.google/) - AI experiments showcase
- [Experiments with Google](https://experiments.withgoogle.com/) - Creative technology
- [Three.js Examples](https://threejs.org/examples/) - 3D web graphics
- [Awwwards](https://www.awwwards.com/websites/experimental/) - Experimental web design
- [Codrops](https://tympanus.net/codrops/) - Creative coding tutorials

---

## Environment Variables Reference

```bash
# Required
RESEND_API_KEY=                    # Email service

# AI Services
AZURE_OPENAI_API_KEY=              # Azure OpenAI
AZURE_OPENAI_ENDPOINT=             # https://your-resource.openai.azure.com
AZURE_OPENAI_DEPLOYMENT=gpt-4      # Model deployment name

# Optional - Additional AI providers
GOOGLE_AI_API_KEY=                 # Google AI/Gemini
ANTHROPIC_API_KEY=                 # Claude

# Analytics
NEXT_PUBLIC_GOOGLE_VERIFICATION=   # Google Search Console
```

---

## Contributing

This is a proprietary project. For internal team members:
1. Create feature branches from `main`
2. Follow the coding standards in `.eslintrc`
3. Test locally before pushing
4. Create PRs for review

---

*Last updated: December 2024*
