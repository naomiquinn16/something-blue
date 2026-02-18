import Image from "next/image";
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
          <a href="#" className="flex items-center gap-2">
            <Image
              src="/logo-ring.png"
              alt="Something Blue"
              width={36}
              height={36}
              className="h-9 w-9"
            />
            <span className="font-display text-xl font-semibold tracking-wide text-stone-800">
              Something Blue
            </span>
          </a>
          <div className="flex gap-8">
            <a href="#services" className="text-sm text-stone-600 transition-colors hover:text-[var(--accent)]">
              Services
            </a>
            <a href="#portfolio" className="text-sm text-stone-600 transition-colors hover:text-[var(--accent)]">
              Portfolio
            </a>
            <a href="#pricing" className="text-sm text-stone-600 transition-colors hover:text-[var(--accent)]">
              Pricing
            </a>
            <a href="#testimonials" className="text-sm text-stone-600 transition-colors hover:text-[var(--accent)]">
              Testimonials
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

      {/* Portfolio */}
      <section id="portfolio" className="border-t border-stone-200 bg-[var(--cream)]/30 px-6 py-24" aria-labelledby="portfolio-heading">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 id="portfolio-heading" className="font-display text-3xl font-medium text-stone-800 sm:text-4xl">
              Our work
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              A glimpse at some of the wedding websites we&apos;ve created for couples.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Sarah & James", style: "Classic garden wedding", image: "/portfolio-1.jpg" },
              { title: "Emma & Michael", style: "Beach destination", image: "/portfolio-2.jpg" },
              { title: "Sophie & David", style: "Rustic barn celebration", image: "/portfolio-3.jpg" },
            ].map((project) => (
              <a
                key={project.title}
                href="#contact"
                className="group overflow-hidden rounded-xl border border-stone-200 bg-white shadow-sm transition-all hover:shadow-lg"
              >
                <div className="aspect-[4/3] bg-stone-200">
                  <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-stone-100 to-stone-200 text-stone-400">
                    <span className="font-display text-sm">{project.title}</span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-display font-medium text-stone-800 group-hover:text-[var(--accent)]">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-stone-500">{project.style}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-stone-200 bg-white px-6 py-24" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 id="pricing-heading" className="font-display text-3xl font-medium text-stone-800 sm:text-4xl">
              Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              Transparent pricing for every budget. We&apos;ll tailor the perfect package for your wedding.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                name: "Essential",
                price: "€199",
                description: "Perfect for intimate weddings",
                features: [
                  "Custom design",
                  "RSVP & guest list",
                  "Registry links",
                  "1 year hosting",
                  "Email support",
                ],
                featured: false,
              },
              {
                name: "Premium",
                price: "€299",
                description: "Our most popular choice",
                features: [
                  "Everything in Essential",
                  "Photo gallery",
                  "Timeline & story",
                  "2 years hosting",
                  "Priority support",
                ],
                featured: true,
              },
              {
                name: "Bespoke",
                price: "From €499",
                description: "Fully custom experience",
                features: [
                  "Everything in Premium",
                  "Custom features",
                  "Guest photo uploads",
                  "Lifetime hosting",
                  "Dedicated support",
                ],
                featured: false,
              },
            ].map((plan) => (
              <div
                key={plan.name}
                className={`relative flex flex-col rounded-xl border p-8 ${
                  plan.featured
                    ? "border-[var(--accent)] bg-[var(--cream)]/50 shadow-lg"
                    : "border-stone-200 bg-white"
                }`}
              >
                {plan.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-medium text-white">
                    Most popular
                  </span>
                )}
                <h3 className="font-display text-xl font-medium text-stone-800">{plan.name}</h3>
                <p className="mt-3 text-sm text-stone-500">{plan.description}</p>
                <p className="mt-3 font-display text-3xl font-medium text-stone-800">{plan.price}</p>
                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-stone-600">
                      <span className="text-[var(--accent)]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`mt-8 block rounded-lg px-4 py-3 text-center font-medium transition-colors ${
                    plan.featured
                      ? "bg-[var(--accent)] text-white hover:bg-[#7a6349]"
                      : "border border-stone-300 text-stone-700 hover:border-[var(--accent)] hover:text-[var(--accent)]"
                  }`}
                >
                  Get started
                </a>
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
          {/* <p className="mt-6 text-center text-sm text-stone-500">
            Or email us directly at{" "}
            <a
              href="mailto:naomiquinn16@gmail.com"
              className="text-[var(--accent)] hover:underline"
            >
              naomiquinn16@gmail.com
            </a>
          </p> */}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-t border-stone-200 bg-white px-6 py-24" aria-labelledby="testimonials-heading">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 id="testimonials-heading" className="font-display text-3xl font-medium text-stone-800 sm:text-4xl">
              Kind words
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-stone-600">
              What couples are saying about their Something Blue experience.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                quote: "Our wedding website was absolutely stunning. Every guest commented on how beautiful and easy to use it was. Couldn't have asked for more!",
                name: "Sarah & James",
                wedding: "Garden wedding, Cotswolds",
              },
              {
                quote: "From start to finish, the process was seamless. The team understood our vision and brought it to life. Highly recommend to any couple planning their big day.",
                name: "Emma & Michael",
                wedding: "Beach wedding, Cornwall",
              },
              {
                quote: "We loved our bespoke website so much we're still using it to share our honeymoon photos. Worth every penny.",
                name: "Sophie & David",
                wedding: "Barn wedding, Yorkshire",
              },
            ].map((testimonial) => (
              <blockquote
                key={testimonial.name}
                className="flex flex-col rounded-xl border border-stone-200 bg-[var(--cream)]/50 p-8 transition-shadow hover:shadow-lg"
              >
                <p className="flex-1 text-stone-600">&ldquo;{testimonial.quote}&rdquo;</p>
                <footer className="mt-6">
                  <cite className="not-italic font-display font-medium text-stone-800">
                    {testimonial.name}
                  </cite>
                  <p className="mt-1 text-sm text-stone-500">{testimonial.wedding}</p>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 bg-stone-100/50 px-6 py-12">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-2 text-center">
          <Image
            src="/logo-ring.png"
            alt="Something Blue"
            width={32}
            height={32}
            className="h-8 w-8"
          />
          <p className="font-display text-lg font-medium text-stone-800">Something Blue</p>
          <p className="text-sm text-stone-500">Bespoke wedding websites, crafted with care</p>
        </div>
      </footer>
    </div>
  );
}
