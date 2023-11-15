import ProfileLayout from '@/components/Profile/ProfileLayout';

function ProfilePage() {
  return (
    <ProfileLayout>
      <div className='user-view__content'>
        <div className='user-view__form-container'>
          <h2 className='heading-secondary ma-bt-md'>Your account settings</h2>
          <form className='form form-user-data'>
            <div className='form__group'>
              <label htmlFor='name' className='form__label'>
                Name
              </label>
              <input type='text' id='name' className='form__input' required />
            </div>
            <div className='form__group ma-bt-md'>
              <label htmlFor='email' className='form__label'>
                Email address
              </label>
              <input type='text' id='email' className='form__input' required />
            </div>
            <div className='form__group form__photo-upload'>
              {/* <img src="" alt="" className="form__user-photo" /> */}
              <button className='btn-text'>Choose new photo</button>
            </div>
            <div className='form__group right'>
              <button className='btn btn--small btn--green'>
                Save settings
              </button>
            </div>
            <div className='line' />
          </form>
          <div className='user-view__form-container'>
            <h2 className='heading-secondary ma-bt-md'>Password change</h2>
            <form className='form form-user-settings'>
              <div className='form__group'>
                <label htmlFor='current-password' className='form__label'>
                  Current password
                </label>
                <input
                  type='password'
                  id='current-password'
                  className='form__input'
                  placeholder='••••••••'
                  required
                />
              </div>
              <div className='form__group ma-bt-lg'>
                <label htmlFor='password' className='form__label'>
                  Current password
                </label>
                <input
                  type='password'
                  id='password'
                  className='form__input'
                  placeholder='••••••••'
                  required
                />
              </div>
              <div className='form__group right'>
                <button className='btn btn--small btn--green'>
                  Save password
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </ProfileLayout>
  );
}

export default ProfilePage;

/*

  

    .user-view__content
      .user-view__form-container
        h2.heading-secondary.ma-bt-md Your account settings
        form.form.form-user-data
          .form__group
            label.form__label(for='name') Name
            input#name.form__input(type='text', value='Jonas Schmedtmann', required)
          .form__group.ma-bt-md
            label.form__label(for='email') Email address
            input#email.form__input(type='email', value='admin@natours.io', required)
          .form__group.form__photo-upload
            img.form__user-photo(src='img/user.jpg', alt='User photo')
            a.btn-text(href='') Choose new photo
          .form__group.right
            button.btn.btn--small.btn--green Save settings
      .line &nbsp;
      .user-view__form-container
        h2.heading-secondary.ma-bt-md Password change
        form.form.form-user-settings
          .form__group
            label.form__label(for='password-current') Current password
            input#password-current.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group
            label.form__label(for='password') New password
            input#password.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group.ma-bt-lg
            label.form__label(for='password-confirm') Confirm password
            input#password-confirm.form__input(type='password', placeholder='••••••••', required, minlength='8')
          .form__group.right
            button.btn.btn--small.btn--green Save password


            */
