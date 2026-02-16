import type { Metadata } from "next";
import EmailSignup from "@/app/components/EmailSignup";

export const metadata: Metadata = {
  title: "Subscribe | Kabbalah Guy",
  description: "Get the Daily Kabbalah Life Tip delivered to your inbox.",
};

export default function SubscribePage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8 sm:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            Daily Kabbalah Life Tip
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Receive practical Kabbalah wisdom in your inbox every morning.
          </p>

          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
            <h2 className="font-semibold text-gray-900 mb-3">What You'll Get:</h2>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>A short, actionable Kabbalah principle</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>Real-world application for your day</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>A simple practice to try today</span>
              </li>
              <li className="flex items-start">
                <span className="mr-3">✓</span>
                <span>A reflection question for deep thinking</span>
              </li>
            </ul>
          </div>

          <EmailSignup />
        </div>
      </div>
    </div>
  );
}
