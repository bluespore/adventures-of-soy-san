export default function Footer() {
  return (
    <footer className="border-t border-charcoal bg-ink">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-4 py-8 text-center text-sm text-silver sm:flex-row sm:justify-between sm:text-left">
        <p>
          <span className="neon display text-base">CLUB BENTO</span>{" "}
          <span className="text-fog">· 52nd &amp; Broadway · Nightly at 9</span>
        </p>
        <p>
          No fish were harmed. Several pianists were mildly inconvenienced.
        </p>
      </div>
    </footer>
  );
}
