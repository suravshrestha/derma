const SignupForm = () => {
  return (
    <div>
      <div className="container">
        <div className="box columns is-mobile is-centered has-text-centered">
          <div className="column is-7">
            <figure className="image">
              <img src="./home.jpg" alt="" />
            </figure>
          </div>

          <div className="column is-5">
            <div className="is-size-3 has-text-weight-medium mt-6">
              DERMA
            </div>

            <div className="py-2 is-size-5 has-text-weight-normal">
              Create your account
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input className="input" type="email" placeholder="Username" />
                <span className="icon is-left">
                  <i className="fas fa-user"></i>
                </span>
              </p>
            </div>

            <div className="field">
              <p className="control has-icons-left">
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                />
                <span className="icon is-left">
                  <i className="fas fa-lock"></i>
                </span>
              </p>
            </div>

            <label class="checkbox">
              <input type="checkbox" />
              Show password
            </label>

            <div className="field">
              <p className="control">
                <button className="button is-success is-normal is-fullwidth">
                  Sign up
                </button>
              </p>
            </div>

            <div className="is-size-6 is-size-7-mobile">
              Already have an account? Log in
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
