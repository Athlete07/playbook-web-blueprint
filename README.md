# Global Trade Academy - Educational Playbook Template

A comprehensive, modular web template designed for educational content delivery in international trade and economics. This template provides a professional, accessible, and interactive learning platform that can be easily customized for different topics and content.

## 🎯 Purpose

This template serves as a foundation for creating educational playbooks on international trade, economics, and policy. It's designed to be:

- **Modular**: Easy to replicate for different topics
- **Accessible**: WCAG 2.2 compliant
- **Interactive**: Includes quizzes, glossaries, and downloadable resources
- **Professional**: Modern design suitable for business and educational use
- **SEO-Optimized**: Built-in structured data and metadata

## 🚀 Features

### Core Components

- **Responsive Header** with navigation and mobile menu
- **Hero Section** with customizable content and call-to-action buttons
- **Table of Contents** with scroll-based highlighting
- **Modular Content Sections** for easy content management
- **Interactive Quiz Widget** with scoring and explanations
- **Glossary Widget** with alphabetical navigation
- **Download Section** for resources and materials
- **Related Content** recommendations
- **Professional Footer** with newsletter signup

### Design Features

- Modern gradient hero sections
- Card-based layouts for content organization
- Smooth animations and transitions
- Consistent typography using Inter and Playfair Display fonts
- Blue/green color scheme appropriate for business content
- Mobile-first responsive design

### Accessibility Features

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Skip-to-content links
- High contrast ratios
- Screen reader friendly

## 🛠️ Technical Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Lucide React** for icons
- **Shadcn/ui** component library
- **Vite** for build tooling

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/                  # Shadcn UI components
│   ├── Header.tsx           # Site navigation
│   ├── HeroSection.tsx      # Hero banner component
│   ├── TableOfContents.tsx  # Sidebar navigation
│   ├── ContentSection.tsx   # Reusable content wrapper
│   ├── GlossaryWidget.tsx   # Interactive glossary
│   ├── QuizWidget.tsx       # Knowledge testing
│   ├── DownloadSection.tsx  # Resource downloads
│   ├── RelatedPlaybooks.tsx # Content recommendations
│   └── Footer.tsx           # Site footer
├── pages/
│   └── Index.tsx            # Main template page
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
└── index.css               # Global styles and design system
```

## 🎨 Customization Guide

### Content Customization

1. **Playbook Data**: Update the `playbookData` object in `Index.tsx`:
   ```typescript
   const playbookData = {
     title: "Your Playbook Title",
     subtitle: "Your subtitle",
     description: "Your description",
     // ... other properties
   };
   ```

2. **Content Sections**: Modify the content within each `ContentSection` component to match your topic.

3. **Quiz Questions**: Update the `questions` array in `QuizWidget.tsx`:
   ```typescript
   const questions = [
     {
       question: "Your question?",
       options: ["Option 1", "Option 2", "Option 3", "Option 4"],
       correct: 1, // Index of correct answer
       explanation: "Explanation of the correct answer"
     }
   ];
   ```

4. **Glossary Terms**: Modify the `glossaryTerms` object in `GlossaryWidget.tsx`.

5. **Related Content**: Update the `playbooks` array in `RelatedPlaybooks.tsx`.

### Visual Customization

1. **Colors**: Modify the color palette in `tailwind.config.ts` and `src/index.css`
2. **Fonts**: Change font imports in `index.html` and update font families in `tailwind.config.ts`
3. **Images**: Replace placeholder images with your own content
4. **Branding**: Update logo and brand name in `Header.tsx` and `Footer.tsx`

### SEO and Metadata

Update the structured data and meta tags in `index.html`:

```html
<title>{{PAGE_TITLE}} | Global Trade Playbook Academy</title>
<meta name="description" content="{{PAGE_DESCRIPTION}}" />
<meta name="keywords" content="your, relevant, keywords" />
```

## 🔧 Development Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start Development Server**:
   ```bash
   npm run dev
   ```

3. **Build for Production**:
   ```bash
   npm run build
   ```

## 📋 Content Template Guidelines

### Writing Style
- Use clear, professional language
- Break content into digestible sections
- Include practical examples and case studies
- Provide actionable takeaways

### Content Structure
1. **Introduction**: Overview and learning objectives
2. **Core Concepts**: Fundamental principles
3. **How It Works**: Practical implementation
4. **Real-World Impact**: Benefits and examples
5. **Legal Frameworks**: Regulations and compliance
6. **Interactive Elements**: Quiz and exercises
7. **Resources**: Downloads and additional materials

### Image Guidelines
- Use high-quality, relevant images
- Ensure proper alt text for accessibility
- Optimize for web performance
- Consider cultural sensitivity for international audience

## 🌐 Multi-Language Support

To add multi-language support:

1. Use a translation library like `react-i18next`
2. Extract all text strings to translation files
3. Update meta tags for different languages
4. Consider RTL layout support for Arabic/Hebrew

## 📱 Mobile Optimization

The template is mobile-first and includes:
- Collapsible navigation
- Touch-friendly interactions
- Optimized typography for small screens
- Accessible form controls

## 🔍 SEO Best Practices

- Update page titles and descriptions for each playbook
- Use proper heading hierarchy (H1 > H2 > H3)
- Include relevant internal and external links
- Optimize images with proper alt text
- Implement structured data for rich snippets

## 🎯 Analytics Integration

To add analytics:

1. Google Analytics 4:
   ```html
   <!-- Add to index.html head -->
   <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
   ```

2. Track quiz completions and downloads as custom events
3. Monitor scroll depth and engagement metrics

## 🚀 Deployment

The template works with any static hosting service:

- **Vercel**: Connect GitHub repository for automatic deployments
- **Netlify**: Drag and drop build folder or connect Git
- **AWS S3 + CloudFront**: For enterprise hosting
- **GitHub Pages**: For open source projects

## 🤝 Contributing

When creating new playbooks:

1. Follow the established component structure
2. Maintain consistent styling and interactions
3. Test accessibility with screen readers
4. Validate HTML and check performance
5. Update this README with any new patterns

## 📄 License

This template is designed for educational use. Customize and adapt as needed for your specific requirements.

---

## Sample Playbook Topics

This template can be adapted for various trade-related topics:

- **Beginner Level**:
  - Why Trade? The Global Economic Engine ✅ (Current)
  - Understanding Import/Export Basics
  - Introduction to Trade Documentation

- **Intermediate Level**:
  - How to Identify Exportable Products
  - Trade Finance Fundamentals
  - Digital Trade and E-commerce

- **Advanced Level**:
  - Understanding Incoterms
  - Customs Procedures and Compliance
  - Trade Agreement Analysis

Each playbook should follow the same structure while adapting content depth and complexity to the target audience level.
