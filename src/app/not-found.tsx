import { LinkButton } from "@/components/ui/Button";
import { Section } from "@/components/ui/Section";

export default function NotFound() {
  return (
    <Section>
      <div className="surface-card mx-auto max-w-2xl rounded-[1.5rem] p-8 text-center">
        <p className="label-text">404</p>
        <h1 className="mt-4 font-serif text-5xl font-semibold text-ink">Page not found</h1>
        <p className="mt-4 text-muted">
          The page you are looking for is not available. Use the navigation to continue exploring
          the professional portfolio.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <LinkButton href="/">Go Home</LinkButton>
          <a className="inline-flex items-center justify-center font-semibold text-accent hover:underline" href="/contact">
            Contact
          </a>
        </div>
      </div>
    </Section>
  );
}
