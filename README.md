# Nipong Allah Social Group Website

A modern, responsive website for Nipong Allah Social Group - a socio-cultural organization from the Pinyin Clan in Cameroon.

![Nipong Allah](https://img.shields.io/badge/Status-Ready-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Overview

This website showcases the mission, programs, and activities of Nipong Allah Social Group. Built with vanilla HTML, CSS, and JavaScript (no frameworks), it features a modern, premium design with cultural elements representing the Pinyin Clan heritage.

**Motto:** Unity · Progress · Development

## ✨ Features

- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI/UX** - Premium design with smooth animations and transitions
- **Gallery with Lightbox** - Interactive photo gallery with keyboard navigation
- **Donate Section** - Bank details with copy-to-clipboard functionality
- **Contact Form** - Easy communication via email
- **Smooth Scrolling** - Enhanced navigation experience
- **Mobile Menu** - Hamburger menu for mobile devices
- **Accessibility** - Semantic HTML and ARIA labels
- **Performance** - Lazy loading images and optimized assets

## 📂 Project Structure

```
nipongallah/
├── index.html              # Main HTML file
├── css/
│   └── style.css          # Comprehensive stylesheet
├── js/
│   └── script.js          # JavaScript functionality
├── images/
│   ├── logo.png           # Organization logo (to be added)
│   ├── hero-bg.jpg        # Hero background (to be added)
│   └── gallery/           # Gallery images
│       ├── event1.jpg
│       ├── event2.jpg
│       └── ...
├── README.md              # This file
└── extracted_rules.txt    # Organization rules (reference)
```

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for customization
- Optional: A local web server for testing

### Installation

1. **Clone or download** the website files to your local machine

2. **Open the website:**
   - Simply double-click `index.html` to open in your browser
   - OR use a local server (recommended):
     ```bash
     # Using Python 3
     python3 -m http.server 8000
     
     # Using Node.js
     npx http-server
     
     # Using PHP
     php -S localhost:8000
     ```

3. **View in browser:**
   - Navigate to `http://localhost:8000` (if using local server)
   - Or open `index.html` directly in your browser

## 🎨 Customization

### Update Bank Details

Edit the `index.html` file and update the bank information in the Donate section:

```html
<!-- Line ~450+ in index.html -->
<span class="bank-value" id="bankName">
    Your Bank Name Here
    <button class="copy-btn" data-copy="bankName">...</button>
</span>
```

Update these fields:
- Bank Name
- Account Number
- Swift Code
- MTN Mobile Money
- Orange Money

### Add Real Images

Replace placeholder images in the `images/` directory:

1. **Logo:** Add `images/logo.png` (recommended: 200x200px)
2. **Hero Background:** Add `images/hero-bg.jpg` (recommended: 1920x1080px)
3. **Gallery Photos:** Add images to `images/gallery/` folder

Then update image sources in `index.html`:

```html
<img src="images/gallery/your-photo.jpg" alt="Description">
```

### Modify Colors

The color scheme is defined in CSS variables at the top of `css/style.css`:

```css
:root {
    --primary-color: #1a472a;      /* Dark Green */
    --secondary-color: #d4af37;    /* Gold */
    --accent-color: #c41e3a;       /* Dark Red */
    /* ... */
}
```

Modify these values to match your preferred color palette.

### Update Contact Information

Edit the contact section in `index.html`:

```html
<!-- Line ~650+ -->
<p><i class="fas fa-envelope"></i> your-email@example.com</p>
<p><i class="fas fa-phone"></i> +237 XXX XXX XXX</p>
```

## 🌐 Deployment

### GitHub Pages (Free)

1. Create a GitHub repository
2. Push your files to the repository
3. Go to Settings → Pages
4. Select main branch as source
5. Your site will be live at `https://yourusername.github.io/repository-name`

### Netlify (Free)

1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop your folder to Netlify
3. Your site will be live instantly
4. Optional: Add custom domain

### Vercel (Free)

1. Create account at [vercel.com](https://vercel.com)
2. Import your GitHub repository
3. Deploy with one click
4. Automatic deployments on every push

### Traditional Web Hosting

1. Purchase hosting (e.g., HostGator, Bluehost)
2. Upload files via FTP or cPanel file manager
3. Point your domain to the hosting

## 🤖 AI Model Recommendations

### For Website Enhancement

#### 1. **Image Generation** (Recommended)
- **Models:** DALL-E 3, Midjourney, Stable Diffusion XL
- **Use Case:** Generate culturally relevant images, event visuals, graphics
- **Why:** Creates professional imagery when photos are unavailable
- **How to Use:**
  - Prompt: "African community meeting, Cameroon cultural event, warm colors, professional photography style"
  - Generate hero backgrounds, placeholder images for gallery
  - Create cultural pattern overlays

#### 2. **Content Enhancement**
- **Models:** GPT-4, Claude 3.5 Sonnet
- **Use Case:** Write engaging descriptions, blog posts, testimonials
- **Why:** Maintains professional, consistent tone
- **How to Use:**
  - Improve program descriptions
  - Generate member testimonials
  - Create blog content for events

#### 3. **Chatbot Integration** (Future)
- **Models:** GPT-3.5 Turbo, Claude 3 Haiku
- **Use Case:** Answer visitor questions about membership, programs
- **Why:** 24/7 automated support, improves user engagement
- **Implementation:** Use services like Chatbase, Botpress, or custom integration

#### 4. **Translation**
- **Models:** Google Translate API, DeepL
- **Use Case:** Translate to French or local languages
- **Why:** Reach broader audience in multilingual Cameroon

#### 5. **Image Enhancement**
- **Models:** Topaz Photo AI, Let's Enhance
- **Use Case:** Upscale and enhance existing photos
- **Why:** Improve quality of older event photos for gallery

## 📱 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### Images not loading?
- Check file paths are correct
- Ensure images are in the correct folder
- Verify image file extensions match the HTML

### Styles not applying?
- Clear browser cache (Ctrl/Cmd + Shift + R)
- Check CSS file path in index.html
- Verify no CSS syntax errors in browser console

### JavaScript features not working?
- Open browser console (F12) to check for errors
- Ensure script.js is loading correctly
- Verify JavaScript is enabled in browser

## 📄 License

This website is created for Nipong Allah Social Group. All rights reserved.

## 👥 Support

For questions or support:
- **Email:** info@nipongallah.org
- **Location:** Mezam, North West Region, Cameroon
- **Meetings:** Every first Sunday of the month

## 🙏 Acknowledgments

- Built with ❤️ for the Pinyin Clan community
- Established under Law No 90/055 of 19/12/90
- Constitution revised June 12, 2021

---

**Nipong Allah Social Group** | Unity · Progress · Development
# nipongallah
