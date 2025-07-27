# Deployment Guide

This guide provides step-by-step instructions for deploying your portfolio website to various hosting platforms.

## Quick Start

Your portfolio is a static website that can be deployed to any static hosting service. The main file is `index.html` which contains all the necessary code.

## Deployment Options

### 1. Netlify (Recommended - Free)

**Method 1: Drag & Drop**
1. Go to [netlify.com](https://netlify.com)
2. Sign up for a free account
3. Drag your entire project folder to the deploy area
4. Your site will be live in seconds!

**Method 2: Git Integration**
1. Push your code to GitHub
2. Connect your GitHub account to Netlify
3. Select your repository
4. Deploy automatically on every push

**Custom Domain:**
- Go to Site settings > Domain management
- Add your custom domain
- Follow DNS configuration instructions

### 2. Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Sign up with GitHub
3. Import your project
4. Deploy with one click

**Custom Domain:**
- Go to Project settings > Domains
- Add your domain and configure DNS

### 3. GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload all your files
3. Go to Settings > Pages
4. Select source branch (main)
5. Your site will be at `https://yourusername.github.io/repository-name`

### 4. Firebase Hosting (Free)

1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Initialize: `firebase init hosting`
4. Deploy: `firebase deploy`

### 5. Surge.sh (Free)

1. Install Surge: `npm install -g surge`
2. Run `surge` in your project directory
3. Follow the prompts

## Pre-Deployment Checklist

- [ ] Replace placeholder content with your information
- [ ] Update `resume.pdf` with your actual resume
- [ ] Test all links and downloads
- [ ] Verify responsive design on mobile
- [ ] Check that all images load correctly
- [ ] Test contact form (should log to console)
- [ ] Validate HTML and check for errors

## Post-Deployment

1. **Test your live site** on different devices
2. **Set up analytics** (Google Analytics, etc.)
3. **Submit to search engines** (Google Search Console)
4. **Share your portfolio** on social media and job applications

## Custom Domain Setup

### Netlify
1. Purchase domain from any registrar
2. In Netlify: Site settings > Domain management > Add custom domain
3. Update DNS records at your registrar:
   - Type: CNAME
   - Name: www
   - Value: your-site.netlify.app

### Vercel
1. In Vercel: Project > Settings > Domains
2. Add your domain
3. Configure DNS as instructed

## SSL Certificate

All recommended platforms provide free SSL certificates automatically. Your site will be served over HTTPS.

## Performance Optimization

- **Enable compression** (most platforms do this automatically)
- **Use CDN** (included with most platforms)
- **Optimize images** before uploading
- **Minimize HTTP requests**

## Troubleshooting

### Site Not Loading
- Check that `index.html` is in the root directory
- Verify all CDN links are working
- Check browser console for errors

### Resume Download Not Working
- Ensure `resume.pdf` is in the `public` folder
- Check file permissions
- Test the direct link to the PDF

### Mobile Issues
- Test on actual devices, not just browser dev tools
- Check that Tailwind CSS is loading correctly
- Verify touch interactions work

## Updating Your Site

### Netlify
- Drag and drop new files to redeploy
- Or push to connected Git repository

### Vercel
- Push to connected Git repository
- Or use Vercel CLI: `vercel --prod`

### GitHub Pages
- Push changes to your repository
- Site updates automatically

## Monitoring

Set up monitoring to track:
- **Uptime** (UptimeRobot, Pingdom)
- **Analytics** (Google Analytics)
- **Performance** (Google PageSpeed Insights)

## Cost Considerations

All recommended platforms offer generous free tiers:
- **Netlify**: 100GB bandwidth/month
- **Vercel**: 100GB bandwidth/month  
- **GitHub Pages**: 1GB storage, 100GB bandwidth/month
- **Firebase**: 10GB storage, 360MB/day transfer

## Security

- All platforms provide HTTPS by default
- No server-side code means minimal security concerns
- Keep dependencies (CDN links) up to date

---

**Need help?** Check the platform-specific documentation or contact their support teams.