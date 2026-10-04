"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/downloads", label: "Downloads" },
] as const;

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-charcoal bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="display text-2xl text-orange sm:text-3xl">
            SOY-SAN
          </span>
          <span className="hidden text-xs uppercase tracking-[0.3em] text-silver sm:inline">
            est. 1953
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex items-center gap-1 sm:gap-2">
            {links.map(({ href, label }) => {
              const active = pathname === href;
              return (
                <li key={href}>
                  <Link
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={`rounded-full px-3 py-1.5 text-sm font-bold uppercase tracking-wider transition sm:px-4 ${
                      active
                        ? "bg-orange text-ink"
                        : "text-cream hover:bg-charcoal hover:text-orange"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="stripe h-1.5" aria-hidden="true" />
    </header>
  );
}
