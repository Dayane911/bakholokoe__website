
"use client";

import { FormEvent, useState } from "react";

export default function AdminRegisterPage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    // Save the form reference before the asynchronous request
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
    const role = form.get("role");

    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("/api/admin/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setMessage(data.message || "Registration failed.");
        return;
      }

      setMessage("Administrator created successfully.");

      // Reset using the saved form reference
      formElement.reset();
    } catch (error) {
      console.error(error);
      setMessage("Unable to connect to the server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-stone-100 px-6 py-16">
      <div className="mx-auto max-w-md">
        {/* Header */}
        <div className="mb-8 text-center">
          <p className="text-sm font-semibold tracking-[0.3em] text-yellow-600">
            BAKHOLOKOE HERITAGE
          </p>

          <h1 className="mt-4 text-4xl font-bold text-green-950">
            Create Administrator
          </h1>

          <p className="mt-3 text-gray-600">
            Add an authorized administrator to the Heritage Archive.
          </p>
        </div>

        {/* Form */}
        <div className="rounded-3xl bg-white p-8 shadow-xl md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-green-950"
              >
                Full Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Enter administrator name"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-950 focus:ring-2 focus:ring-green-950/20"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-green-950"
              >
                Email Address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="admin@example.com"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-950 focus:ring-2 focus:ring-green-950/20"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-green-950"
              >
                Password
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={8}
                placeholder="Minimum 8 characters"
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-950 focus:ring-2 focus:ring-green-950/20"
              />

              <p className="mt-2 text-xs text-gray-500">
                Password must contain at least 8 characters.
              </p>
            </div>

            {/* Role */}
            <div>
              <label
                htmlFor="role"
                className="mb-2 block text-sm font-semibold text-green-950"
              >
                Administrator Role
              </label>

              <select
                id="role"
                name="role"
                defaultValue="EDITOR"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-green-950 focus:ring-2 focus:ring-green-950/20"
              >
                <option value="EDITOR">Editor</option>
                <option value="SUPER_ADMIN">
                  Super Administrator
                </option>
              </select>
            </div>

            {/* Message */}
            {message && (
              <div
                role="status"
                className="rounded-xl bg-stone-100 p-4 text-sm text-gray-700"
              >
                {message}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-green-950 px-6 py-3 font-semibold text-white transition hover:bg-green-900 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading
                ? "Creating Administrator..."
                : "Create Administrator"}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-xs text-gray-500">
          Authorized administrators only.
        </p>
      </div>
    </main>
  );
}
