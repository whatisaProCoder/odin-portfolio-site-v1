# Portfolio Website

A modern, responsive personal portfolio website built with React and Tailwind CSS to showcase projects, technical skills, and contact information.

**🌐 Live:** [Checkout the site!](https://pritamdebnath.vercel.app/)

![Portfolio Showcase](./public/showcase.png)

## 🚀 Features

- **Responsive Design** - Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Hero Section** - Eye-catching introduction with avatar and personal information
- **Project Showcase** - Displays projects with images, descriptions, tech stacks, and links to live demos and repositories
- **Tech Stack Section** - Highlight technical skills and technologies I work with
- **Contact Footer** - Easy-to-find contact information and social links
- **Component Lab** - Isolated environment for testing and developing individual components

## 🛠️ Tech Stack

- **React 19** - UI library for building the interface
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework for styling
- **react-responsive** - Responsive breakpoint management
- **ESLint** - Code linting and quality assurance

## 🏗️ Project Structure

```
src/
├── components/               # Reusable UI components
│   ├── common/               # Shared components (ColoredText, IconContainer, SectionHeader)
│   ├── HeroSection/          # Introduction section with avatar and bio
│   ├── WorkSection/          # Projects showcase section
│   ├── TechStackSection/     # Skills and tech stack display
│   ├── Footer/               # Contact information and links
│   └── ComponentLab/         # Component testing environment
├── pages/                    # Page components
│   ├── MainPage.jsx          # Main landing page
│   └── ComponentLabPage.jsx  # Component testing page
├── data/                     # Data files
│   ├── projects.js           # Project information
│   └── techStack.js          # Technology stack data
├── constants/                # Constant values
│   └── logoSet.js            # Technology logos and icons
└── assets/                   # Static assets (fonts, icons, images)
```

## 🤝 Acknowledgments

This project was developed as part of _[The Odin Project](https://www.theodinproject.com)_ curriculum. Special thanks to the **TOP community** for their invaluable resources, guidance, and support throughout the learning journey.

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.
