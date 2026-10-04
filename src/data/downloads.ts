export type Track = {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  mood: string;
  /** Path under /public. */
  file: string;
};

export const tracks: Track[] = [
  {
    id: "traveling-man",
    title: "Soy-San, the Traveling Man",
    subtitle:
      "The road song. Every borough, every handshake, one fedora. Staten Island gets a verse twice, by accident.",
    duration: "2:17",
    mood: "Travelling swing",
    file: "/downloads/soy-san-the-traveling-man.mp3",
  },
  {
    id: "master-plan",
    title: "Soy-San's Master Plan",
    subtitle:
      "Step one: arrive in a bucket. Step two: greet everyone. Step three: there is no step three.",
    duration: "2:54",
    mood: "Big band scheme",
    file: "/downloads/soy-sans-master-plan.mp3",
  },
];
