import { ContactForm } from "./components/ContactForm";
import { Hero } from "./components/Hero";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://somethingblue.com";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Something Blue",
  description:
    "Custom wedding websites crafted with care. We create beautiful, personalized wedding websites that tell your unique love story.",
  url: siteUrl,
  email: "naomiquinn16@gmail.com",
  serviceType: "Wedding Website Design",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Wedding Website Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Custom Wedding Website Design" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "RSVP & Guest Management" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Registry & Gift List Integration" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Photo Galleries & Timeline" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Travel & Accommodation Information" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Ongoing Support & Updates" },
      },
    ],
  },
};

const services = [
  {
    title: "Custom Design",
    description:
      "Every website is uniquely designed to reflect your love story. From color palettes to typography, we craft a look that feels authentically you.",
  },
  {
    title: "RSVP & Guest Management",
    description:
      "Streamlined RSVP forms, dietary preferences, and guest list management—all in one beautiful, easy-to-use interface for you and your guests.",
  },
  {
    title: "Registry & Gift Lists",
    description:
      "Seamlessly integrate your registry links, honeymoon fund, or custom gift lists so guests can find everything in one place.",
  },
  {
    title: "Photo Galleries & Timeline",
    description:
      "Showcase your engagement photos, share your story with a custom timeline, and create a space for guests to upload their wedding day photos.",
  },
  {
    title: "Travel & Accommodation",
    description:
      "Help out-of-town guests with venue details, accommodation recommendations, and travel information—all beautifully presented.",
  },
  {
    title: "Ongoing Support",
    description:
      "We're with you from start to finish. Updates, tweaks, and support throughout your planning journey and beyond the big day.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-stone-200/80 bg-[var(--ivory)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <a href="#" className="font-display text-xl font-semibold tracking-wide text-stone-800">
            Something Blue
          </a>
          <div className="flex gap-8">
            <a href="#services" className="text-sm text-stone-600 transition-colors hover:text-[var(--accent)]">
              Services
            </a>
            <a href="#contact" className="text-sm text-stone-600 transition-colors hover:text-[var(--accent)]">
              Get in touch
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <main>
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20" aria-label="Introduction">
        <Hero />
      </section>

      {/* Services */}
      <section id="services" className="border-t border-stone-200 bg-white px-6 py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 id="services-heading" className="font-display text-3xl font-medium text-stone-800 sm:text-4xl">
              What we offer
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              From design to deployment, we handle every detail so you can focus on what matters most.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-xl border border-stone-200 bg-[var(--cream)]/50 p-8 transition-shadow hover:shadow-lg"
              >
                <h3 className="font-display text-xl font-medium text-stone-800">{service.title}</h3>
                <p className="mt-3 leading-relaxed text-stone-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="border-t border-stone-200 px-6 py-24" aria-labelledby="contact-heading">
        <div className="mx-auto max-w-2xl">
          <div className="mb-12 text-center">
            <h2 id="contact-heading" className="font-display text-3xl font-medium text-stone-800 sm:text-4xl">
              Get in touch
            </h2>
            <p className="mt-4 text-stone-600">
              Ready to create your perfect wedding website? We&apos;d love to hear from you.
            </p>
          </div>
          <div className="rounded-2xl border border-stone-200 bg-white p-8 shadow-sm">
            <ContactForm />
          </div>
          <p className="mt-6 text-center text-sm text-stone-500">
            Or email us directly at{" "}
            <a
              href="mailto:naomiquinn16@gmail.com"
              className="text-[var(--accent)] hover:underline"
            >
              naomiquinn16@gmail.com
            </a>
          </p>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-100/50 px-6 py-12">
        <div className="mx-auto max-w-5xl text-center">
          <p className="font-display text-lg font-medium text-stone-800">Something Blue</p>
          <p className="mt-1 text-sm text-stone-500">Bespoke wedding websites, crafted with care</p>
        </div>
      </footer>
    </div>
  );
}
