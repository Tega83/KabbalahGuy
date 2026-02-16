"use client";

export default function EmailSignup() {
  const embedHtml = process.env.NEXT_PUBLIC_EMAIL_EMBED_HTML;

  if (embedHtml) {
    return (
      <div
        className="email-signup-embed"
        dangerouslySetInnerHTML={{ __html: embedHtml }}
      />
    );
  }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          placeholder="you@example.com"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          required
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          First Name (optional)
        </label>
        <input
          type="text"
          id="name"
          placeholder="Your name"
          className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition"
      >
        Get Daily Kabbalah Life Tip
      </button>
      <p className="text-xs text-gray-600 text-center">
        We respect your privacy. Unsubscribe anytime.
      </p>
    </form>
  );
}
