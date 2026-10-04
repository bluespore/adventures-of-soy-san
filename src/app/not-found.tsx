import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="display text-7xl text-orange">404</p>
      <h1 className="mt-2 text-3xl text-paper">Wrong stop.</h1>
      <p className="mt-3 text-fog">
        Soy-San missed this one too. Next stop: Bento Junction.
      </p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-full bg-orange px-6 py-3 text-sm font-black uppercase tracking-wider text-ink hover:bg-orange-deep"
      >
        Back to the club
      </Link>
    </section>
  );
}
