import {
  Camera,
  Target,
  TrendingUp,
  Megaphone,
  ShieldCheck,
  CircleCheckBig,
  Users,
  Phone,
  ArrowRight,
  Mail,
} from "lucide-react";

const PHONE = "0659521497";
const TEL_HREF = "tel:+27659521497";

const services = [
  {
    icon: Target,
    title: "Sales",
    description:
      "We connect your product to the right buyers through strategic outreach, closing deals that drive real revenue growth.",
  },
  {
    icon: TrendingUp,
    title: "Marketing",
    description:
      "Data-driven campaigns that amplify your brand presence and generate qualified leads across all channels.",
  },
  {
    icon: Megaphone,
    title: "Advertising",
    description:
      "Bold, attention-grabbing ads that cut through the noise and put your brand in the spotlight where it belongs.",
  },
];

const trustPoints = [
  {
    icon: CircleCheckBig,
    title: "Proven Results",
    description:
      "We deliver measurable outcomes that drive your business forward. Our track record speaks for itself.",
  },
  {
    icon: ShieldCheck,
    title: "Money-Back Guarantee",
    description:
      "We stand behind our work with a full money-back guarantee. No results, no charge — that's our promise.",
  },
  {
    icon: Users,
    title: "Dedicated Sales Agents",
    description:
      "Your brand gets a dedicated team of experienced agents focused solely on growing your sales pipeline.",
  },
];

export default function Home() {
  return (
    <>
      <header>
        <HeroSection />
      </header>
      <main>
        <ServicesSection />
        <GuaranteeBanner />
        <WhyChooseUsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-bg-primary"
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full opacity-25 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, #E8650A 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div
        className="absolute top-10 left-10 w-20 h-20 rotate-45 rounded-sm opacity-[0.08] bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute top-16 right-20 w-14 h-14 rotate-[30deg] rounded-sm opacity-[0.06] bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-20 left-24 w-16 h-16 rotate-45 rounded-sm opacity-[0.07] bg-accent"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-16 right-16 w-7 h-7 rotate-45 rounded-sm opacity-[0.09] bg-accent"
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-6 px-6 text-center max-w-3xl mx-auto">
        <Camera className="w-12 h-12 text-text-primary" strokeWidth={1.5} />

        <div className="flex flex-col items-center gap-1">
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-text-primary tracking-tight">
            BankZ Design™
          </h1>
          <p className="font-body text-xl italic text-accent">Perfection</p>
        </div>

        <div className="flex flex-col items-center gap-2 mt-4">
          <h2 className="font-heading text-3xl md:text-[46px] md:leading-tight font-bold text-text-primary">
            If You Need Something
          </h2>
          <span className="font-heading text-3xl md:text-[46px] md:leading-tight font-bold text-accent">
            Sold, Marketed &amp; Advertised
          </span>
        </div>

        <p className="font-body text-lg md:text-xl text-text-secondary">
          BankZ Design is Your Go-To Sales Agent
        </p>

        <a
          href={TEL_HREF}
          className="inline-flex items-center gap-3 bg-accent hover:bg-accent-dark transition-colors text-text-primary font-body font-bold text-lg px-12 py-4 rounded-xl shadow-[0_6px_24px_var(--accent-glow)] mt-2"
        >
          Get a Free Quote → {PHONE}
        </a>
      </div>
    </section>
  );
}

function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-bg-primary py-24 md:py-28 px-6 md:px-28"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4 text-center">
          <h2
            id="services-heading"
            className="font-heading text-4xl md:text-[42px] font-bold text-text-primary"
          >
            Our Services
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
          <p className="font-body text-base text-text-secondary max-w-lg">
            We bring your brand to the market with precision and power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {services.map((service) => (
            <article
              key={service.title}
              className="flex flex-col items-center gap-6 bg-bg-card border border-border-subtle rounded-xl p-10 md:p-12 shadow-[0_4px_16px_rgba(0,0,0,0.08)] text-center"
            >
              <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center shrink-0">
                <service.icon className="w-8 h-8 text-text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                {service.title}
              </h3>
              <p className="font-body text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function GuaranteeBanner() {
  return (
    <section
      id="guarantee"
      className="bg-accent py-16 md:py-20 px-6 md:px-28"
      aria-labelledby="guarantee-heading"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
        <div className="w-28 h-[3px] bg-white/25 rounded-full" />

        <div className="flex flex-col items-center gap-5 border-2 border-white/20 rounded-sm py-8 px-8 md:px-16">
          <div className="flex items-center gap-4">
            <ShieldCheck className="w-9 h-9 text-text-primary" />
            <span className="font-body text-sm font-bold text-text-primary tracking-[3px] uppercase">
              Our Guarantee
            </span>
          </div>
          <h2
            id="guarantee-heading"
            className="font-heading text-2xl md:text-[38px] md:leading-snug font-bold text-text-primary text-center max-w-2xl"
          >
            If We Can&apos;t Sell It — We Give You Your Money Back.
          </h2>
          <p className="font-body text-base text-white/80">
            That&apos;s our promise. No risk, no hassle.
          </p>
        </div>

        <div className="w-28 h-[3px] bg-white/25 rounded-full" />
      </div>
    </section>
  );
}

function WhyChooseUsSection() {
  return (
    <section
      id="why-us"
      className="bg-bg-primary py-24 md:py-28 px-6 md:px-28"
      aria-labelledby="why-heading"
    >
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2
            id="why-heading"
            className="font-heading text-4xl md:text-[42px] font-bold text-text-primary"
          >
            Why Choose Us
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {trustPoints.map((point) => (
            <article
              key={point.title}
              className="flex flex-col gap-5 bg-bg-card border border-border-subtle rounded-xl p-10 shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
            >
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shrink-0">
                <point.icon className="w-7 h-7 text-text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-text-primary">
                {point.title}
              </h3>
              <p className="font-body text-[15px] leading-relaxed text-text-secondary">
                {point.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section
      id="contact"
      className="bg-bg-card py-24 md:py-28 px-6 md:px-28"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-xl mx-auto flex flex-col items-center gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2
            id="contact-heading"
            className="font-heading text-4xl md:text-[42px] font-bold text-text-primary"
          >
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-accent rounded-full" />
        </div>

        <a
          href={TEL_HREF}
          className="flex items-center gap-5 bg-bg-primary border-2 border-accent rounded-2xl px-12 py-6 hover:border-accent-dark transition-colors"
        >
          <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center shrink-0">
            <Phone className="w-6 h-6 text-text-primary" />
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-body text-base text-text-secondary">
              Call us for a quote today
            </span>
            <span className="font-heading text-3xl md:text-4xl font-bold text-text-primary">
              {PHONE}
            </span>
          </div>
        </a>

        <form
          className="w-full flex flex-col gap-6 bg-bg-primary border border-border-subtle rounded-2xl p-10 md:p-12 shadow-[0_8px_32px_rgba(0,0,0,0.12)]"
          action={`mailto:info@bankzdesign.co.za`}
          method="POST"
          encType="text/plain"
        >
          {[
            {
              label: "Your Name",
              name: "name",
              type: "text",
              placeholder: "Enter your name",
            },
            {
              label: "Your Email",
              name: "email",
              type: "email",
              placeholder: "Enter your email",
            },
          ].map((field) => (
            <div key={field.name} className="flex flex-col gap-2">
              <label
                htmlFor={field.name}
                className="font-body text-[13px] font-medium text-text-secondary tracking-wide"
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
                required
                className="w-full h-12 bg-bg-input border border-border-subtle rounded-lg px-4 font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors"
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="font-body text-[13px] font-medium text-text-secondary tracking-wide"
            >
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="Type your message here..."
              required
              className="w-full bg-bg-input border border-border-subtle rounded-lg px-4 py-3 font-body text-sm text-text-primary placeholder:text-text-muted focus:outline-none focus:border-accent transition-colors resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full h-13 bg-accent hover:bg-accent-dark transition-colors rounded-lg flex items-center justify-center gap-2 font-body text-base font-semibold text-text-primary shadow-[0_4px_16px_var(--accent-glow)] cursor-pointer"
          >
            Send Message
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-bg-primary px-6 md:px-28 py-10">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="w-full h-px bg-border-subtle" />

        <div className="flex flex-col items-center gap-6 py-6">
          <div className="flex items-center gap-3">
            <Camera className="w-7 h-7 text-text-primary" strokeWidth={1.5} />
            <span className="font-heading text-[22px] font-bold text-text-primary">
              BankZ Design™
            </span>
          </div>

          <div className="flex items-center gap-8 flex-wrap justify-center">
            <a
              href={TEL_HREF}
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4 text-accent" />
              <span className="font-body text-sm font-medium text-text-secondary">
                {PHONE}
              </span>
            </a>
            <a
              href="mailto:info@bankzdesign.co.za"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4 text-accent" />
              <span className="font-body text-sm font-medium text-text-secondary">
                info@bankzdesign.co.za
              </span>
            </a>
          </div>

          <div className="w-48 h-px bg-border-subtle" />

          <p className="font-body text-[13px] text-text-muted">
            © 2026 BankZ Design™. All Rights Reserved.
          </p>
          <p className="font-body text-xs italic text-text-muted">
            Perfection in every campaign.
          </p>
        </div>
      </div>
    </footer>
  );
}
