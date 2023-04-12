import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { signIn } from 'next-auth/react';

function Login() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { password, email } = formData;
  function changeHandler(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const query = router.query; // login?redirect=/shipping
  const redirect = query.redirect ? query.redirect : '/';
  //

  async function loginHandler(e) {
    e.preventDefault();

    const res = await signIn('credentials', {
      redirect: false,
      email,
      password,
    });

    console.log(res);

    // if (res.ok) router.push(res.url);
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
                name='password'
                value={password}
                minLength='8'
                onChange={changeHandler}
              />
            </div>
            <div className='form__group'>
              <button className='btn btn--green'>Login</button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
}

export default Login;
