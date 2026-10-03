# Sunny Yadav — Personal Developer Portfolio

A deployment-ready React + Vite portfolio based on Sunny Bholanath Yadav's supplied resume and career story.

## Run locally

```bash
npm install
npm run dev
```

Open the local Vite URL shown in the terminal.

## Production build

```bash
npm run build
npm run preview
```

## Netlify

This project is a static Vite site and can be deployed directly from GitHub.

- Build command: `npm run build`
- Publish directory: `dist`
- No server or environment variables are required.

### GitHub

1. Create a new GitHub repository.
2. Upload the project files.
3. Push to `main`.
4. In Netlify, choose **Add new project → Import an existing project → GitHub**.
5. Use the build settings above.

## Resume

The supplied resume is already included at:

`public/Sunny-Bholanath-Yadav-Resume.pdf`

The site downloads it through `/Sunny-Bholanath-Yadav-Resume.pdf`.

## Personal details to update

Edit the `profile` object in `src/main.jsx` if your phone/email/LinkedIn URL changes.

## Content note

The portfolio intentionally keeps enterprise project descriptions high-level and avoids adding confidential implementation details that were not present in the resume.
