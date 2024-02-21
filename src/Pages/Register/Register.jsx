import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
const Register = () => {
  return (
    <div>
      {/* email, password authentication */}
      <div className="hero">
        <div className="hero-content flex-col w-full">
          <div className="p-8 rounded-lg shrink-0 w-full lg:w-5/12  shadow-2xl">
            <h2 className="font-kode font-bold text-3xl text-center mb-4 border-b border-green-600  w-fit mx-auto pb-3">
              Register Now
            </h2>
            <form className="">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">First Name</span>
                </label>
                <input
                  type="text"
                  name="fname"
                  placeholder="your first name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Last Name</span>
                </label>
                <input
                  type="text"
                  name="lname"
                  placeholder="your last name"
                  className="input input-bordered"
                  required
                />
              </div>
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
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-purple-600 hover:bg-purple-400 hover:text-black text-white">
                  Register Now
                </button>
              </div>
              <p className="mt-4">
                Already have an account please 
                <Link
                  to="/login"
                  className="font-kode font-bold text-lg text-green-600 ml-2">
                 Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      {/* google login */}
      <div className="p-8 mx-auto rounded-lg shrink-0 w-full lg:w-5/12">
        <h3 className="mx-auto text-center font-semibold text-2xl border-b pb-2 w-fit">Register with other ....</h3>
        <button className="mt-4 text-center items-center justify-center w-full border flex font-bold py-3 px-5 rounded-lg bg-lime-200"><FcGoogle className="mr-4 text-3xl "></FcGoogle>Register with google</button>
      </div>

    </div>
  );
};

export default Register;
