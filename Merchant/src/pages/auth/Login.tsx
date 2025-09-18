import React, { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    console.log("LOGIN_FORM_SUBMIT", { email, password });
    setTimeout(() => setSubmitting(false), 600);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-sm p-6 border border-gray-200 rounded-lg shadow-md bg-white">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">
          Sign in
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
          {/* Email */}
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder-gray-400 
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>

          {/* Password */}
          <label className="block">
            <span className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full rounded-md border border-gray-300 px-3 py-2 text-sm shadow-sm placeholder-gray-400 
                         focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
            />
          </label>

          {/* Error */}
          {error && <div className="text-red-600 text-sm">{error}</div>}

          {/* Button */}
          <button
            type="submit"
            disabled={submitting}
            className="w-full rounded-md bg-blue-600 text-white px-4 py-2 font-medium 
                       hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 
                       disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? "Signing in…" : "Sign in"}
          </button>
        </form>
      </div>
    </div>
  );
}

