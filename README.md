# Developer Portfolio and Blog

A modern, responsive developer portfolio and blog application built using Next.js, TypeScript, and Tailwind CSS. This project showcases developer skills, projects, and technical articles through a clean and user-friendly interface.

## Features

- **Home Page:** Introduction, developer bio, skills, and navigation.
- **About Page:** Information about the developer.
- **Projects Page:** Displays projects with images, descriptions, technologies, and features.
- **Project Details:** Individual dynamic pages for each project.
- **Blog Page:** Displays technical articles with search functionality.
- **Blog Details:** Individual pages for blog articles.
- **Dark and Light Mode:** Theme switching with saved user preference.
- **Responsive Design:** Layout adapts to different screen sizes.
- **Navigation Highlighting:** Highlights the currently active navigation section.
- **Custom 404 Page:** Displays a custom page for unavailable routes.
- **Loading and Error States:** Provides feedback while blog content loads or when an error occurs.

## Technologies Used

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Zod
- Vitest
- ESLint

## Project Structure

```text
my-nextjs-project/
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   │   ├── [slug]/
│   │   │   │   ├── error.tsx
│   │   │   │   └── loading.tsx
│   │   │   ├── projects/
│   │   │   │   └── [slug]/
│   │   │   ├── layout.tsx
│   │   │   ├── page.tsx
│   │   │   └── not-found.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── NavLink.tsx
│   │   └── ThemeToggle.tsx
│   ├── content/
│   │   ├── projects.ts
│   │   └── posts.ts
│   ├── lib/
│   │   └── content.ts
│   └── __tests__/
│       ├── content.test.ts
│       └── server-only-mock.ts
├── next.config.ts
├── vitest.config.ts
├── package.json
└── README.md
```

## Getting Started

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project folder

```bash
cd my-nextjs-project
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Commands

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates a production build |
| `npm run start` | Starts the production server |
| `npm run lint` | Checks code quality |
| `npm test` | Runs automated tests |
| `npx tsc --noEmit` | Checks TypeScript errors |

## Main Routes

| Route | Description |
|---|---|
| `/` | Home page |
| `/about` | About page |
| `/projects` | Projects listing |
| `/projects/farmer-market` | Farmer Market project details |
| `/projects/developer-portfolio` | Portfolio project details |
| `/blog` | Blog listing and search |
| `/blog/nextjs-routing` | Next.js Routing article |
| `/blog/typescript-basics` | TypeScript Basics article |
| `/blog/react-server-components` | React Server Components article |

## Testing

The project uses Vitest for automated testing.

Current tests cover:

- Finding a project using its slug.
- Handling an unknown project slug.
- Finding a blog post using its slug.
- Validating project data using Zod.

Run the tests using:

```bash
npm test
```

## Code Quality

The project is checked using:

```bash
npx tsc --noEmit
npm run lint
npm run build
```

## Future Improvements

- Add more projects and technical articles.
- Improve SEO and metadata.
- Add additional automated tests.
- Deploy the application online.

## Author

Developer Portfolio and Blog project created as part of a web development internship project.