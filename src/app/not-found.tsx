import { Eyebrow } from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-navy bg-dotgrid px-5 py-24 text-center text-white">
      <div className="max-w-lg">
        <div className="flex justify-center">
          <Eyebrow dark>404</Eyebrow>
        </div>
        <h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-sm text-white/70">
          The page you&apos;re looking for doesn&apos;t exist, or has moved.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <Button href="/" variant="gold" size="lg">
            Back to Home
          </Button>
          <Button
            href="/orientation"
            variant="ghost"
            size="lg"
            className="border-white/25 text-white hover:bg-white/10"
          >
            Apply Now
          </Button>
        </div>
      </div>
    </section>
  );
}
