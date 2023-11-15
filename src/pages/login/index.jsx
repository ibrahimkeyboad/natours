'use client';

import { useCallback, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';
import { toast } from 'react-hot-toast';

function Login() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { password, email } = formData;
  const changeHandler = useCallback((e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }, []);

  const query = router.query; // login?redirect=/shipping
  const redirect = query.redirect ? query.redirect : '/';
  //

  async function loginHandler(e) {
    e.preventDefault();
    setIsLoading(true);

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    if (res?.ok) {
      setIsLoading(false);
      toast.success('logged in');
      router.push(redirect);
    } else {
      toast.error(res.error);
    }
  }

  return (
    <>
      <main className='main'>
        <div className='login-form'>
          <h2 className='heading-secondary ma-bt-lg'>Log into your account</h2>
          <form className='form.form--login' onSubmit={loginHandler}>
            <div className='form__group'>
              <label htmlFor='email' className='form__label'>
                Email address
              </label>
              <input
                id='email'
                className='form__input'
                type='email'
                placeholder='you@example.com'
                required
                disabled={isLoading}
                name='email'
                value={email}
                onChange={changeHandler}
              />
            </div>
            <div className='form__group ma-bt-md' />
            <div className='form__group'>
              <label htmlFor='password' className='form__label'>
                Passwrord
              </label>
              <input
                id='password'
                className='form__input'
                type='password'
                placeholder='••••••••'
                required
                disabled={isLoading}
                name='password'
                value={password}
                minLength='8'
                onChange={changeHandler}
              />
            </div>
            <div className='form__group'>
              <button disabled={isLoading} className='btn btn--green'>
                Login
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
