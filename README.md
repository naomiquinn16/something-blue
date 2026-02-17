# Something Blue — Bespoke Wedding Websites

A single-page business website for custom wedding website design services.

## SEO

The site is configured for search engines with:

- **Metadata**: Title, description, keywords, Open Graph, and Twitter cards
- **robots.txt**: Allows all crawlers, references sitemap
- **sitemap.xml**: Auto-generated at `/sitemap.xml`
- **Structured data**: JSON-LD LocalBusiness schema for rich results

Set `NEXT_PUBLIC_SITE_URL` in `.env.local` to your live domain (e.g. `https://yoursite.com`) for correct canonical URLs and sitemap. Add an `opengraph-image.png` (1200×630px) to the `app` folder for better social sharing previews.

## Contact Form Setup

To enable the "Get in touch" form to send emails to naomiquinn16@gmail.com:

1. Create a free account at [Formspree](https://formspree.io)
2. Create a new form and set the recipient email to **naomiquinn16@gmail.com**
3. Copy your form endpoint URL (e.g. `https://formspree.io/f/xxxxxxxx`)
4. Create a `.env.local` file in the project root and add:
   ```
   NEXT_PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/your-form-id
   ```
5. Restart the dev server

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
