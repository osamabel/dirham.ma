import Image from "next/image";
import { OfferForm } from "@/components/OfferForm";
import { site } from "@/lib/config";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.domain,
      description: site.description,
      inLanguage: "en",
    },
    {
      "@type": "WebPage",
      "@id": `${site.url}/#webpage`,
      url: site.url,
      name: `${site.domain} — Domain for sale`,
      description: site.description,
      isPartOf: { "@id": `${site.url}/#website` },
      about: {
        "@type": "Product",
        name: site.domain,
        description: site.description,
        category: "Domain name",
        brand: {
          "@type": "Brand",
          name: site.domain,
        },
        offers: {
          "@type": "Offer",
          url: `${site.url}/#offer`,
          priceCurrency: "USD",
          availability: "https://schema.org/InStock",
          itemCondition: "https://schema.org/NewCondition",
          seller: {
            "@type": "Person",
            name: "Oussama Belkhadir",
            email: site.email,
          },
        },
      },
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${site.url}/hero.webp`,
      },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex min-h-full flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden">
        <Image
          src="/hero.webp"
          alt="dirham.ma — Moroccan dirham coins and banknotes, premium .ma domain for sale"
          fill
          priority
          sizes="100vw"
          className="animate-kenburns object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-ink via-ink/55 to-ink/25"
          aria-hidden
        />

        <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-16 pt-28 sm:px-10 sm:pb-20">
          <p className="animate-rise font-display text-[clamp(2.75rem,12vw,7.5rem)] font-extrabold leading-[0.9] tracking-tight text-chalk">
            {site.domain}
          </p>
          <h1 className="animate-rise-delay-1 mt-6 max-w-xl font-display text-2xl font-semibold tracking-tight text-chalk sm:text-3xl">
            {site.tagline}
          </h1>
          <p className="animate-rise-delay-2 mt-4 max-w-md text-base leading-relaxed text-chalk/80 sm:text-lg">
            {site.description}
          </p>
          <div className="animate-rise-delay-3 mt-10">
            <a
              href="#offer"
              className="inline-flex h-12 items-center justify-center bg-signal px-7 text-sm font-semibold tracking-wide text-chalk transition hover:bg-signal-deep"
            >
              Make an offer
            </a>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="scroll-mt-8 border-b border-line bg-surface px-6 py-20 sm:px-10 sm:py-24"
      >
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
            Why {site.domain}?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Dirham is Morocco&apos;s currency — a word people already know and
            trust. Paired with the official{" "}
            <strong className="font-semibold text-ink">.ma</strong> extension,
            this domain is a clear, memorable brand for finance, payments, and
            digital money products in Morocco and beyond.
          </p>

          <ul className="mt-12 grid gap-10 sm:grid-cols-3">
            <li>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                Short & brandable
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                One word, easy to say, easy to type — built for logos, apps, and
                word-of-mouth.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                Fintech-ready
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                Ideal for wallets, remittances, banking, crypto, or any
                Morocco-focused money brand.
              </p>
            </li>
            <li>
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                Local authority
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted sm:text-base">
                The .ma TLD signals Morocco instantly — trust for customers and
                partners in the market.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <section
        id="offer"
        className="scroll-mt-8 bg-chalk px-6 py-20 sm:px-10 sm:py-28"
      >
        <div className="mx-auto grid max-w-6xl gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <div>
            <h2 className="font-display text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Buy {site.domain}
            </h2>
            <p className="mt-4 max-w-sm text-base leading-relaxed text-muted">
              Interested in purchasing this domain? Send your details and offer
              below, or email me directly. Serious inquiries welcome.
            </p>
            <a
              href={`mailto:${site.email}?subject=Offer%20for%20${site.domain}`}
              className="mt-8 inline-block text-base font-medium text-ink underline decoration-signal/60 underline-offset-4 transition hover:decoration-signal"
            >
              {site.email}
            </a>
          </div>

          <OfferForm />
        </div>
      </section>

      <footer className="border-t border-line bg-surface px-6 py-8 sm:px-10">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display font-semibold tracking-tight text-ink">
            {site.domain}
          </span>
          <span>
            {site.domain} domain for sale · Serious inquiries welcome
          </span>
        </div>
      </footer>
    </main>
  );
}
