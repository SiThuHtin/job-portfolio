[![CI](https://github.com/SiThuHtin/job-portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/SiThuHtin/job-portfolio/actions/workflows/ci.yml)

# Sithu Htin - Professional Portfolio Website 🚀

This is the repository for my personal professional portfolio, designed to showcase my journey as an IT System Administrator, Developer, and Technology Enthusiast. It highlights my skills, professional experience, certifications, featured projects, and latest blog posts/documentation.

You can visit the live website here: [www.sithuhtin.com](https://www.sithuhtin.com)

## 🛠️ Technology Stack

This project is built using modern web development technologies to ensure high performance, scalability, and excellent user experience:

### Frontend
*   **[Next.js 14+](https://nextjs.org/)** (App Router): React framework for server-side rendering and static site generation.
*   **[React](https://reactjs.org/)**: JavaScript library for building user interfaces.
*   **[Tailwind CSS](https://tailwindcss.com/)**: Utility-first CSS framework for rapid and responsive UI styling.
*   **[Framer Motion](https://www.framer.com/motion/)**: For smooth, declarative UI animations and scroll effects.
*   **[Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)**: Comprehensive and beautiful icon libraries.
*   **[React Markdown](https://github.com/remarkjs/react-markdown)** & **[React Syntax Highlighter](https://github.com/react-syntax-highlighter/react-syntax-highlighter)**: Parsing and styling technical blog posts and documentation.

### Backend & Database
*   **Next.js API Routes**: Serverless functions handling backend logic (e.g., fetching projects, submitting contact forms).
*   **[MongoDB](https://www.mongodb.com/) & [Mongoose](https://mongoosejs.com/)**: NoSQL database and ODM for storing and querying dynamic content like Projects and Blog Posts.
*   **[EmailJS](https://www.emailjs.com/)**: Client-side email sending integration for the Contact Form.

### Analytics & Performance
*   **[Vercel Analytics](https://vercel.com/analytics)**: Tracking website visitors and page views.
*   **[Vercel Speed Insights](https://vercel.com/docs/speed-insights)**: Real-time core web vitals and performance monitoring.

## ✨ Key Features

*   **Responsive Modern Design**: Built with an immersive "dark-mode-first" aesthetic using premium glassmorphism effects and Tailwind CSS.
*   **Dynamic Animations**: Powered by `framer-motion`, elements gracefully animate into view as users scroll through the page.
*   **Centralized API Architecture**: Projects and Posts data are delivered via custom Next.js backend API routes connecting to MongoDB.
*   **Interactive Contact Form**: Fully functional setup using EmailJS to allow recruiters and clients to send me messages directly.
*   **SEO Optimized**: Fully integrated with Google Schema.org structured data, dynamic metadata, and OpenGraph tags to guarantee great search visibility.
*   **CV Download**: Easy-access download functionality for my professional resume.

## 🚀 How to Run Locally

To get a local copy up and running, follow these simple steps.

### Prerequisites
*   Node.js (v18.0.0 or higher) installed on your machine.
*   npm, yarn, or bun installed.
*   A MongoDB connection URI (if you want to fetch dynamic database content).
*   EmailJS Account Credentials (for testing the contact form).

### Installation Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SiThuHtin/job-portfolio.git
   cd job-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or yarn install
   # or pnpm install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your credentials:
   ```env
   # Required for Database connection
   MONGODB_URI=your_mongodb_connection_string

   # Required for Contact Form (EmailJS)
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_emailjs_template_id=your_template_id
   NEXT_PUBLIC_emailjs_public_key=your_public_key
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   # or yarn dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application running locally!

## 📁 Project Structure highlights

*   `/app`: Contains Next.js App Router pages, layout, globals.css, and API routes (`/api`).
*   `/app/components`: Core, reusable layout pieces (e.g., HeroSection, Skills, Experience, FeaturedProjects).
*   `/app/components2`: Reusable utility components like Navbar and Footer.
*   `/public`: Static assets like images, PDFs (`cv.pdf`), and icons.

## 📄 License & Contact

*   **Name**: Sithu Htin
*   **LinkedIn**: [SiMinThu](https://www.linkedin.com/in/see-min-thu)
*   **GitHub**: [@SiThuHtin](https://github.com/SiThuHtin)
*   **Email**: sithuhtin7@gmail.com

---
*Developed with Next.js, initialized using `create-next-app`.*
