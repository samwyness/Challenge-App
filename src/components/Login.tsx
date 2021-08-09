import React, { FormEvent, useRef, useState } from 'react';

import { useAuth } from '../hooks/useAuth';

export const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { currentUser, login } = useAuth();
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  console.log(currentUser);

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();

    try {
      setError('');
      setLoading(true);

      if (emailRef.current && passwordRef.current) {
        await login(emailRef.current.value, passwordRef.current.value);
      }
    } catch {
      setError('Failed to log in');
    }

    setLoading(false);
  }
  return (
    <form onSubmit={handleSubmit}>
      <input name="email" type="email" placeholder="Email.." ref={emailRef} required />
      <input name="pass" type="password" placeholder="Password.." ref={passwordRef} required />
      <button type="submit">Submit</button>
    </form>
  );
};
