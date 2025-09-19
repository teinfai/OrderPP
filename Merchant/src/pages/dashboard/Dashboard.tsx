import React, { useState } from "react";

export default function Dashboard() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [submitting, setSubmitting] = useState(false);
//   const [error, setError] = useState<string | null>(null);

//   function handleSubmit(e: React.FormEvent) {
//     e.preventDefault();
//     setError(null);

//     // ✅ Basic validation
//     if (!email.includes("@")) {
//       setError("Please enter a valid email address.");
//       return;
//     }
//     if (password.length < 6) {
//       setError("Password must be at least 6 characters long.");
//       return;
//     }

//     setSubmitting(true);

//     // ✅ Simulate async login (replace with API call)
//     console.log("LOGIN_FORM_SUBMIT", { email, password });
//     setTimeout(() => {
//       setSubmitting(false);
//       // Example: navigate("/dashboard") after success
//     }, 600);
//   }

  return (
    <div className="max-w-sm mx-auto mt-24 p-6 border border-gray-200 rounded-lg shadow-sm bg-white">
    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sign in</h2>


  </div>
  );
}
