import type { Metadata } from "next";
import Image from "next/image";
import TrackList from "@/components/TrackList";
import { tracks } from "@/data/downloads";

export const metadata: Metadata = {
  title: "Downloads",
  description: "Soy-San's greatest hits. Stream them here or take them home.",
};

export default function DownloadsPage() {
  return (
    <>
      <section className="spotlight">
        <div className="mx-auto max-w-6xl px-4 py-14 text-center">
          <p className="neon display mb-3 text-sm tracking-[0.4em]">NOW ON WAX</p>
          <h1 className="text-5xl leading-none text-paper sm:text-6xl">
            Soy-San Sings
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-fog">
            Recorded live-ish at Club Bento. Gerald on piano. Press play to
            stream, or download for your gramophone.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-10 px-4 pb-20 md:grid-cols-[1fr_1.4fr]">
        <figure className="grain relative h-fit overflow-hidden rounded-xl border-4 border-cream shadow-[8px_8px_0_0_var(--orange)]">
          <Image
            src="/images/bento-junction-train.png"
            alt="Soy-San reading the Daily Noodle on a train, headline 'Fish Hits Big!'"
            width={896}
            height={506}
            sizes="(min-width: 768px) 40vw, 100vw"
            className="h-auto w-full"
          />
          <figcaption className="absolute bottom-0 left-0 right-0 bg-ink/80 px-4 py-2 text-xs text-fog">
            The Daily Noodle: &ldquo;FISH HITS BIG!&rdquo;
          </figcaption>
        </figure>

        <TrackList tracks={tracks} />
      </section>
    </>
  );
}
