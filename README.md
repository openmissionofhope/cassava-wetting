# Cassava Wetting Method Educational Site

A Next.js static site explaining Howard Bradbury's wetting method for safely processing cassava to prevent cyanide poisoning and konzo disease.

**Live site:** [https://cassava.live/](https://cassava.live/)

## Project Overview

This educational site provides information about:
- Why raw cassava can be dangerous (cyanide content and konzo risk)
- How the wetting method makes cassava safe for consumption
- Links to primary research articles and instructional videos

## Technologies Used

- Next.js 16 (with Pages Router)
- React 19
- Tailwind CSS
- Static site export via GitHub Pages

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Run the development server:
   ```
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Building for Production

To create a static build:

```
npm run build
```

The static site will be generated in the `out` directory, ready for deployment to any static hosting service.

## Deployment

This site automatically deploys to GitHub Pages on push to `main` via GitHub Actions.

## License

Licensed under the [Christian Open Source License (COSL) v1.0](LICENSE.md).