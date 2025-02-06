Project Overview

Hekta Furniture is a fully functional E-Commerce Marketplace built with Next.js 14.2.2, integrated with Sanity CMS for content management, Stripe for payments, Clerk Auth for authentication, and Tailwind CSS for styling.

Features

✅ Product Listing & Filtering - Fetches and displays products from Sanity CMS with category-based filtering.✅ Shopping Cart & Checkout - Implements Jotai for global state management and integrates Stripe for secure payments.✅ Authentication - Clerk authentication for login and protected routes.✅ Performance Optimizations - Uses Next.js image optimization, lazy loading, and caching.✅ SEO Friendly - Lighthouse-tested for optimized performance and accessibility.✅ Admin Panel (WIP) - Custom admin panel for managing products in Sanity CMS.

Tech Stack

Frontend: Next.js 14.2.2, React, Tailwind CSS, ShadCN UI

Backend: Sanity CMS, Clerk Authentication, Prisma, PostgreSQL

Deployment: Vercel

Payments: Stripe API


1. Clone the Repository
    git clone [your-repo-url]
    cd hekta-furniture

2. Install Dependencies
    npm install

3. Set Up Environment Variables

    Create a .env.local file and add:
        NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
        NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_key

4. Run the Development Server
    npm run dev

5. Deployment
    The project is deployed on Vercel. For production builds:
        npm run build
        npm start

Project Folder Structure

    /
    ├── /src           # Main Application Code
    ├── /public        # Static Assets
    ├── /docs          # Documentation
    ├── /testing-reports  # Test Reports
    ├── .env.local     # Environment Variables (Not Committed)
    ├── README.md      # Project Documentation
    └── package.json   # Dependencies

License

    This project is open-source and available under the MIT License.


Thank you for choosing this GIT! Happy Coding.