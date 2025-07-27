# Customization Guide

This guide helps you personalize your portfolio website with your own content, styling, and branding.

## Quick Customization Checklist

- [ ] Update personal information (name, title, bio)
- [ ] Replace resume PDF
- [ ] Add your projects
- [ ] Update skills section
- [ ] Change contact information
- [ ] Customize colors and styling
- [ ] Add your own images

## Personal Information

### Name and Title
In `index.html`, find and update:
```javascript
<h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">Your Name</h1>
<p className="text-xl md:text-2xl text-gray-600 mb-8">Your Title | Your Specialty</p>
```

### Bio Section
Update the About component content:
```javascript
<p className="text-lg text-gray-600 mb-6">
    Your personal bio here...
</p>
```

### Contact Information
Update email and social links:
```javascript
<span className="text-gray-600">your.email@example.com</span>
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourusername">github.com/yourusername</a>
```

## Skills Section

### Adding Skills
Update the skills array:
```javascript
const skills = [
    { name: 'React', icon: 'fab fa-react', color: 'text-blue-500' },
    { name: 'Python', icon: 'fab fa-python', color: 'text-blue-600' },
    // Add your skills here
];
```

### Available Icons
Use Font Awesome icons:
- `fab fa-html5` - HTML5
- `fab fa-css3-alt` - CSS3
- `fab fa-js-square` - JavaScript
- `fab fa-react` - React
- `fab fa-node-js` - Node.js
- `fab fa-python` - Python
- `fab fa-java` - Java
- `fab fa-php` - PHP
- `fab fa-laravel` - Laravel
- `fab fa-vue` - Vue.js
- `fab fa-angular` - Angular
- `fab fa-bootstrap` - Bootstrap
- `fab fa-sass` - Sass
- `fab fa-git-alt` - Git
- `fab fa-github` - GitHub
- `fab fa-docker` - Docker
- `fab fa-aws` - AWS

### Custom Colors
Available Tailwind colors:
- `text-red-500`, `text-blue-500`, `text-green-500`
- `text-yellow-500`, `text-purple-500`, `text-pink-500`
- `text-indigo-500`, `text-gray-500`, `text-orange-500`

## Projects Section

### Adding Projects
Update the projects array:
```javascript
const projects = [
    {
        title: 'Your Project Name',
        description: 'Brief description of your project',
        technologies: ['React', 'Node.js', 'MongoDB'],
        link: 'https://github.com/yourusername/project',
        demo: 'https://your-project-demo.com'
    },
    // Add more projects
];
```

### Adding Project Images
Replace placeholder with actual images:
```javascript
// Replace this:
<div className="w-full h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
    <i className="fas fa-image text-4xl text-gray-500"></i>
</div>

// With this:
<img 
    src="./public/images/project1.jpg" 
    alt="Project Name" 
    className="w-full h-48 object-cover rounded-lg mb-4" 
/>
```

## Resume Replacement

1. **Replace the PDF file**:
   - Delete `public/resume.pdf`
   - Add your resume as `public/resume.pdf`

2. **Different filename** (optional):
   - Update download links in Hero and Contact sections:
   ```javascript
   <a href="./public/your-resume-name.pdf" download>
   ```

## Color Scheme Customization

### Primary Color
Replace all instances of `blue` with your preferred color:
- `bg-blue-600` → `bg-green-600`
- `text-blue-600` → `text-green-600`
- `hover:bg-blue-700` → `hover:bg-green-700`

### Available Colors
- `red`, `orange`, `yellow`, `green`, `teal`, `blue`, `indigo`, `purple`, `pink`

### Custom CSS
Add custom styles in the `<style>` section:
```css
.custom-gradient {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

## Typography

### Font Changes
Add Google Fonts:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Update Tailwind config:
```javascript
tailwind.config = {
    theme: {
        extend: {
            fontFamily: {
                'sans': ['Inter', 'sans-serif'],
            }
        }
    }
}
```

## Layout Modifications

### Adding New Sections
1. Create the section component
2. Add to main App component
3. Update navigation menu

Example new section:
```javascript
const Experience = () => {
    return (
        <section id="experience" className="py-20 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Experience</h2>
                {/* Your content here */}
            </div>
        </section>
    );
};
```

### Removing Sections
1. Remove component from App
2. Remove navigation link
3. Update any internal links

## Advanced Customizations

### Animations
Add custom animations:
```css
@keyframes slideIn {
    from { transform: translateX(-100%); }
    to { transform: translateX(0); }
}

.slide-in {
    animation: slideIn 0.5s ease-out;
}
```

### Dark Mode
Add dark mode toggle:
```javascript
const [darkMode, setDarkMode] = useState(false);

// Toggle classes based on darkMode state
className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'}`}
```

### Custom Components
Create reusable components:
```javascript
const Button = ({ children, variant = 'primary', ...props }) => {
    const baseClasses = 'px-6 py-3 rounded-lg transition font-medium';
    const variants = {
        primary: 'bg-blue-600 text-white hover:bg-blue-700',
        secondary: 'bg-gray-600 text-white hover:bg-gray-700'
    };
    
    return (
        <button className={`${baseClasses} ${variants[variant]}`} {...props}>
            {children}
        </button>
    );
};
```

## SEO Optimization

### Meta Tags
Update in `<head>` section:
```html
<title>Your Name - Your Title</title>
<meta name="description" content="Your professional description">
<meta name="keywords" content="your, relevant, keywords">
<meta property="og:title" content="Your Name - Portfolio">
<meta property="og:description" content="Your description">
<meta property="og:image" content="./public/og-image.jpg">
```

### Structured Data
Add JSON-LD for better SEO:
```html
<script type="application/ld+json">
{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Your Name",
    "jobTitle": "Your Job Title",
    "url": "https://yourwebsite.com"
}
</script>
```

## Testing Your Changes

1. **Open in browser** - Test locally first
2. **Mobile testing** - Use browser dev tools
3. **Cross-browser** - Test in Chrome, Firefox, Safari
4. **Performance** - Check loading speed
5. **Accessibility** - Use browser accessibility tools

## Common Issues

### Images Not Loading
- Check file paths are correct
- Ensure images are in `public` folder
- Use relative paths: `./public/image.jpg`

### Styling Not Applied
- Check Tailwind CSS is loading
- Verify class names are correct
- Clear browser cache

### JavaScript Errors
- Check browser console
- Ensure all CDN links are working
- Validate JSX syntax

---

**Pro Tip**: Make small changes and test frequently to avoid breaking your site!