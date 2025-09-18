import React, { JSX, useState } from 'react';

export default function Dashboard(): JSX.Element {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [submitting, setSubmitting] = useState(false);
  // const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    // e.preventDefault();
    // setError(null);
    // setSubmitting(true);
    // // UI-only placeholder: emit values; replace with authService later
    // console.log('LOGIN_FORM_SUBMIT', { email, password });
    // setTimeout(() => setSubmitting(false), 600);
  }

  return (
    <h2>Dashboard</h2>
  );
}