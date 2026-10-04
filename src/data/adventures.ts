export type Adventure = {
  slug: string;
  date: string;
  venue: string;
  neighborhood: string;
  title: string;
  blurb: string;
  image: { src: string; alt: string };
  attendance: string;
  highlight: string;
};

export const adventures: Adventure[] = [
  {
    slug: "club-bento-opening-night",
    date: "March 14, 1953",
    venue: "Club Bento",
    neighborhood: "Midtown",
    title: "Opening Night at Club Bento",
    blurb:
      "Soy-San's first headline booking. The marquee read THE STAR: SOY-SAN! and the audience read the marquee, which is really all a marquee can ask for. He shook 212 hands, signed 40 cocktail napkins, and accidentally signed one actual cocktail.",
    image: {
      src: "/images/hero-club-bento.png",
      alt: "Soy-San on stage under a spotlight at Club Bento, greeting a cheering cartoon crowd while a drummer and pianist play.",
    },
    attendance: "212 hands shaken",
    highlight: "The pianist played 'Fly Me to the Moon' nine times. Nobody asked him to.",
  },
  {
    slug: "rice-palace-crossing",
    date: "April 2, 1953",
    venue: "The Rice Palace",
    neighborhood: "Times Square",
    title: "The Great Crosswalk Incident",
    blurb:
      "En route to a matinee meet and greet at The Rice Palace, Soy-San tipped his hat to a passing Packard. The Packard did not tip back. Traffic stopped for eleven minutes while three cats, a wolf in a suit, and a traffic cop queued up for autographs in the middle of Broadway.",
    image: {
      src: "/images/rice-palace-crossing.png",
      alt: "Soy-San tipping his hat while crossing a busy 1950s Broadway intersection in front of The Rice Palace theater.",
    },
    attendance: "1 Packard, 3 cats, 1 cop",
    highlight: "The chop suey place next door sold out of chop suey. Correlation is not causation.",
  },
  {
    slug: "bento-junction-express",
    date: "May 19, 1953",
    venue: "The 7:15 to Bento Junction",
    neighborhood: "Grand Central",
    title: "Meet & Greet on the Morning Express",
    blurb:
      "Soy-San booked a seat on the commuter line to 'meet the real New York.' The real New York was asleep. He read the Daily Noodle (headline: FISH HITS BIG!) aloud to two bulls, an owl, and a conductor who punched his ticket four times out of sheer admiration.",
    image: {
      src: "/images/bento-junction-train.png",
      alt: "Soy-San reading a newspaper headlined 'Fish Hits Big!' on a train car as a conductor checks tickets. Sign reads 'Next stop: Bento Junction'.",
    },
    attendance: "2 bulls, 1 owl, 1 conductor",
    highlight: "Missed his stop. Did a second meet and greet on the way back.",
  },
  {
    slug: "bento-bros-fitting",
    date: "June 6, 1953",
    venue: "Bento & Bros. Haberdashery",
    neighborhood: "Fifth Avenue",
    title: "A Hat for Every Occasion",
    blurb:
      "Invited by Bento & Bros. (est. 1928) to try on their new 'Mr. Fish's Finery' line. Soy-San tried on 31 hats, bought one top hat, and signed the mirror. The mirror is now in the window, and the store has stopped answering questions about it.",
    image: {
      src: "/images/bento-bros-hats.png",
      alt: "Soy-San in a top hat and bow tie inside the Bento & Bros. hat shop, admired by a dapper dog shopkeeper.",
    },
    attendance: "31 hats, 1 very happy dog",
    highlight: "Returned the next morning to greet the hats individually.",
  },
];
