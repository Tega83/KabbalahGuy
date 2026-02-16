export default function JourneyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        The Kabbalah Journey
      </h1>

      <p className="text-lg mb-8">
        Explore timeless spiritual principles and apply them in daily life.
      </p>

      <ul className="space-y-4">
        <li>
          <a href="/journey/pause-and-create-space" className="text-blue-600 underline">
            Pause and Create Space
          </a>
        </li>
        <li>
          <a href="/journey/transform-reaction-into-response" className="text-blue-600 underline">
            Transform Reaction into Response
          </a>
        </li>
      </ul>
    </main>
  );
}