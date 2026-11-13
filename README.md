Taskora – Smart Project Management Platform

Taskora is a modern, responsive SaaS landing page for a smart project and productivity management platform. It is designed to help teams organize tasks, collaborate efficiently, track progress, and manage projects from one workspace.

🌐 Live Demo

"Visit Taskora" (https://taskora-three-mu.vercel.app/)

✨ Features

- Modern Navigation: Smooth navigation between different sections of the landing page.
- Hero Section: Clear introduction to the Taskora platform with call-to-action buttons.
- Features Section: Highlights smart task management, team collaboration, real-time analytics, and deadline tracking.
- About Section: Explains how the platform works through a simple workflow.
- Pricing Section: Displays Starter and Professional plans.
- Contact Section: Includes a contact form with input validation and a success message.
- Responsive Design: Optimized layouts for desktop, tablet, and mobile screens.
- Footer: Includes product links, company links, contact information, and social links.

🛠️ Technologies Used

- React.js
- Vite
- JavaScript (ES6+)
- HTML5
- CSS3
- Lucide React (Icons)

📂 Project Structure

taskora/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── Features.jsx
│   │   ├── About.jsx
│   │   ├── Pricing.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── App.css
│   └── index.css
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js

⚙️ Installation and Setup

Follow these steps to run Taskora locally.

1. Clone the repository

git clone https://github.com/kashiiiissh/taskora

2. Navigate to the project directory

cd taskora

3. Install dependencies

npm install

4. Start the development server

npm run dev

5. Open the application

Visit the local URL shown in your terminal, usually:

http://localhost:5173/

🏗️ Build for Production

To create a production build:

npm run build

To preview the production build locally:

npm run preview

📱 Responsive Design

Taskora is designed to provide a consistent user experience across different screen sizes, including desktop, tablet, and mobile devices.

📝 Note

Taskora is a frontend demonstration project. The contact form currently uses client-side validation and displays a success message. It is not connected to a backend or email service.

The pricing plans and product information are illustrative.

🚀 Deployment

The project is deployed using Vercel.

Live Website: https://taskora-three-mu.vercel.app/

👩‍💻 Author

Kashish Kashyap

BSc Information Technology | React Developer

---

Built with React and Vite.



Design Approach

Taskora is a modern SaaS productivity platform designed to help users manage tasks, projects, and team collaboration.

- Used a clean purple and white colour palette for a modern SaaS appearance.
- Created reusable React components for Navbar, Hero, Features, About, Pricing, Contact, and Footer.
- Used CSS Grid and Flexbox to structure the page layouts.
- Implemented responsive CSS media queries for desktop, tablet, and mobile screens.
- Used Lucide React icons to improve the user interface.

Challenges Faced

One of the main challenges was making the website responsive across different screen sizes. I addressed this using CSS Grid, Flexbox, and media queries.

I also implemented client-side form validation and a success message using React state. Another challenge was organising the website into reusable components to keep the code readable and maintainable.

Screenshots

The screenshots of the desktop and mobile layouts are available in the "screenshots" folder.

Live Demo

https://taskora-three-mu.vercel.app/

Technologies Used

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- Lucide React