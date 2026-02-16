import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-gray-50 to-white py-20 sm:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6">
            Kabbalah Guy
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Practical Kabbalah for daily life. Learn timeless spiritual principles and apply them today.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/journey"
              className="inline-block px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition"
            >
              Start the Journey
            </Link>
            <Link
              href="/subscribe"
              className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
            >
              Get Daily Kabbalah Life Tip
            </Link>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Practical</h3>
            <p className="text-gray-600">
              Not abstract philosophy—actionable lessons you can apply today.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Grounded</h3>
            <p className="text-gray-600">
              Timeless wisdom adapted for modern life and real challenges.
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">Growing</h3>
            <p className="text-gray-600">
              A journey of stages, each building on the last.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-900 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Today</h2>
          <p className="text-lg text-gray-300 mb-8">
            Join our community and receive a Daily Kabbalah Life Tip straight to your inbox.
          </p>
          <Link
            href="/subscribe"
            className="inline-block px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition"
          >
            Get the Daily Tip
          </Link>
        </div>
      </section>
    </div>
  );
}
