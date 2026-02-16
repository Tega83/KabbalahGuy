import Link from "next/link";

const JOURNEY = [
  {
    slug: "pause-and-create-space",
    title: "Pause and Create Space",
    summary: "Create a gap between stimulus and response. That gap is freedom.",
  },
  {
    slug: "transform-reaction-into-response",
    title: "Transform Reaction into Response",
    summary: "Shift from automatic reaction to conscious choice.",
  },
];

export default function JourneyPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-3">The Kabbalah Journey</h1>
      <p className="text-lg mb-8">
        A practical path—one principle at a time.
      </p>

      <div className="grid gap-4">
        {JOURNEY.map((item) => (
          <Link
            key={item.slug}
            href={`/journey/${item.slug}`}
            className="block rounded-xl border p-5 hover:shadow-sm"
          >
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-sm mt-2 opacity-80">{item.summary}</p>
          </Link>
        ))}
      </div>
    </main>
  );
}


