import Image from "next/image";
import type { Adventure } from "@/data/adventures";

export default function AdventureCard({
  adventure,
  flip = false,
  priority = false,
}: {
  adventure: Adventure;
  flip?: boolean;
  priority?: boolean;
}) {
  const { date, venue, neighborhood, title, blurb, image, attendance, highlight } =
    adventure;

  return (
    <article
      className={`grid items-center gap-6 md:grid-cols-2 md:gap-10 ${
        flip ? "md:[&>*:first-child]:order-2" : ""
      }`}
    >
      <div className="grain relative overflow-hidden rounded-xl border-4 border-cream shadow-[8px_8px_0_0_var(--orange)]">
        <Image
          src={image.src}
          alt={image.alt}
          width={1024}
          height={572}
          priority={priority}
          sizes="(min-width: 768px) 50vw, 100vw"
          className="h-auto w-full"
        />
      </div>

      <div>
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.25em] text-orange">
          {date} · {neighborhood}
        </p>
        <h3 className="text-3xl leading-tight text-paper sm:text-4xl">{title}</h3>
        <p className="mt-1 text-sm font-bold uppercase tracking-wider text-silver">
          {venue}
        </p>
        <p className="mt-4 leading-relaxed text-fog">{blurb}</p>

        <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
          <div className="rounded-lg border border-charcoal bg-charcoal/50 p-3">
            <dt className="text-xs uppercase tracking-wider text-silver">Turnout</dt>
            <dd className="mt-1 font-bold text-cream">{attendance}</dd>
          </div>
          <div className="rounded-lg border border-orange/40 bg-orange/10 p-3">
            <dt className="text-xs uppercase tracking-wider text-orange">Highlight</dt>
            <dd className="mt-1 font-bold text-cream">{highlight}</dd>
          </div>
        </dl>
      </div>
    </article>
  );
}
