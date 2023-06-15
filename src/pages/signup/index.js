import React from 'react';
import { useForm } from 'react-hook-form';

function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  });

  async function onSubmit(data) {
    setIsLoading(true);
    try {
      const res = await axios.post('/api/auth/register', data);

      if ((res.status = 200)) {
        setIsLoading(false);
        registerModal.onClose();
      }
    } catch (error) {
      setIsLoading(false);
      toast.error(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} class='main'>
      <div class='login-form'>
        <h2 class='heading-secondary ma-bt-lg'>Create a new Account</h2>
        <form class='form'>
          <div class='form__group'>
            <label class='form__label' for='name'>
              Your Name
            </label>
            <input
              id='name'
              class='form__input'
              type='text'
              placeholder='Enter full name'
              // {...register(id, { required })}
            />
          </div>
          <div class='form__group'>
            <label class='form__label' for='email'>
              Email address
            </label>
            <input
              id='email'
              class='form__input'
              type='email'
              placeholder='you@example.com'
              // {...register(id, { required })}
            />
          </div>
          <div class='form__group ma-bt-md'>
            <label class='form__label' for='password'>
              Password
            </label>
            <input
              id='password'
              class='form__input'
              type='password'
              placeholder='••••••••'
              // {...register(id, { required })}
              minlength='8'
            />
          </div>
          <div class='form__group'>
            <button class='btn btn--green'>Login</button>
          </div>
        </form>
      </div>
    </form>
  );
}

export default SignupPage;
