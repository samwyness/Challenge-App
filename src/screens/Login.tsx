import React, { FormEvent, useRef, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import { useAuth } from '../hooks/useAuth';

const Login: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
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

        if (location.search) {
          return history.push(location.search);
        }

        return history.push('/');
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

export default Login;
