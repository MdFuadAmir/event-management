import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";


const Login = () => {
    const handleLogin = e =>{
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email = form.get('email');
        const password = form.get('password');
        console.log(email,password);
    }
  return (
    <div>
      {/* email, password authentication */}
      <div className="hero">
        <div className="hero-content flex-col w-full">
          <div className="p-8 rounded-lg shrink-0 w-full lg:w-5/12  shadow-2xl bg-base-100">
            <h2 className="font-kode font-bold text-3xl text-center mb-4 border-b w-fit mx-auto pb-3 border-green-600">
              Login Now
            </h2>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 hover:bg-purple-400 hover:text-black text-white">
                  Login Now
                </button>
              </div>
              <p className="mt-4">
                New to this site please
                <Link
                  to="/register"
                  className="ml-2 font-kode font-bold text-lg text-red-600"
                >
                  Register
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* google authentication */}
      <div className="p-8 mx-auto rounded-lg shrink-0 w-full lg:w-5/12">
        <h3 className="mx-auto text-center font-semibold text-2xl border-b pb-2 w-fit">login with other ....</h3>
        <button className="mt-4 text-center items-center justify-center w-full border flex font-bold py-3 px-5 rounded-lg bg-lime-200"><FcGoogle className="mr-4 text-3xl "></FcGoogle>login with google</button>
      </div>
    </div>
  );
};

export default Login;
