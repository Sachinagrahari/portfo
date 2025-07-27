# Portfolio Website

A modern, responsive single-page portfolio website built with React and Tailwind CSS.

## Features

- **Single-Page Application**: Smooth navigation between sections
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Modern UI**: Clean design with Tailwind CSS
- **Downloadable Resume**: PDF resume download functionality
- **Contact Form**: Interactive contact form (logs to console in demo mode)
- **Accessibility**: ARIA labels, keyboard navigation, and proper color contrast
- **SEO Optimized**: Meta tags for search engines

## Project Structure

```
portfo/
├── index.html          # Main HTML file with embedded React
├── src/                # React components (for reference)
│   ├── Header.js       # Navigation header
│   ├── Hero.js         # Hero section
│   ├── About.js        # About section
│   ├── Skills.js       # Skills section
│   ├── Projects.js     # Projects showcase
│   ├── Contact.js      # Contact form
│   └── Footer.js       # Footer
├── public/             # Static assets
│   └── resume.pdf      # Resume PDF file
└── README.md           # This file
```

## Getting Started

### 1. Open the Website

Simply open `index.html` in your web browser. The website uses CDN links for React and Tailwind CSS, so no build process is required.

### 2. Customize Your Content

#### Personal Information
Edit the following in `index.html`:

- **Name**: Change "John Doe" to your name
- **Title**: Update "Full-Stack Developer | Problem Solver"
- **Bio**: Modify the About section content
- **Contact Info**: Update email, LinkedIn, GitHub links

#### Skills
Update the skills array in the Skills component:
```javascript
const skills = [
    { name: 'Your Skill', icon: 'fab fa-icon', color: 'text-color' },
    // Add or remove skills as needed
];
```

#### Projects
Modify the projects array in the Projects component:
```javascript
const projects = [
    {
        title: 'Your Project',
        description: 'Project description',
        technologies: ['Tech1', 'Tech2'],
        link: 'https://github.com/yourusername/project',
        demo: 'https://your-demo-link.com'
    },
    // Add your projects
];
```

### 3. Replace the Resume

1. Replace `public/resume.pdf` with your actual resume PDF
2. Keep the same filename or update the links in the Hero and Contact sections

### 4. Add Project Images

Replace the placeholder image icons in the Projects section:
```html
<!-- Replace this placeholder -->
<div className="w-full h-48 bg-gray-300 rounded-lg mb-4 flex items-center justify-center">
    <i className="fas fa-image text-4xl text-gray-500"></i>
</div>

<!-- With actual images -->
<img src="./public/project-image.jpg" alt="Project Name" className="w-full h-48 object-cover rounded-lg mb-4" />
```

## Customization Guide

### Colors
The website uses a blue color scheme. To change colors, update the Tailwind CSS classes:
- Primary: `bg-blue-600`, `text-blue-600`, `hover:bg-blue-700`
- Replace `blue` with your preferred color (e.g., `green`, `purple`, `red`)

### Fonts
The website uses system fonts. To add custom fonts:
1. Add Google Fonts link to the `<head>` section
2. Update Tailwind config or add custom CSS

### Sections
To add new sections:
1. Create a new component
2. Add it to the main App component
3. Update the navigation menu

## Deployment

### Netlify (Recommended)

1. **Prepare for deployment**:
   - Ensure all files are in the project root
   - Test the website locally

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop your project folder
   - Your site will be live instantly

3. **Custom domain** (optional):
   - Go to Site settings > Domain management
   - Add your custom domain

### Vercel

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   - Go to [vercel.com](https://vercel.com)
   - Import your project from GitHub or upload directly
   - Follow the deployment steps

### GitHub Pages

1. **Create a repository** on GitHub
2. **Upload your files** to the repository
3. **Enable GitHub Pages**:
   - Go to Settings > Pages
   - Select source branch (usually `main`)
   - Your site will be available at `https://yourusername.github.io/repository-name`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Technologies Used

- **React 18**: JavaScript library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework
- **Font Awesome**: Icons
- **Babel**: JavaScript compiler for JSX

## Performance Tips

- **Optimize images**: Compress project images before adding them
- **Minimize content**: Keep text concise and relevant
- **Test on mobile**: Ensure good performance on mobile devices

## Troubleshooting

### Resume Download Not Working
- Ensure `resume.pdf` is in the `public` folder
- Check that the file path in the download links is correct
- Test in different browsers

### Mobile Menu Not Working
- Check that Font Awesome is loading correctly
- Ensure JavaScript is enabled in the browser

### Styling Issues
- Verify Tailwind CSS is loading from the CDN
- Check for any custom CSS conflicts

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you need help customizing your portfolio:
1. Check this README for common solutions
2. Review the code comments in `index.html`
3. Test changes in small increments

---

**Happy coding!** 🚀