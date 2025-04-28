import { Link , useNavigate } from "react-router-dom";
import '../App.css'

function Login() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-white flex flex-col">
        {/* Header with Logo */}
        <header className="p-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <img height={45} width={45} src="/log.png" alt="Logo" />
          <span className="text-xl font-medium">Sky Bayan HRMS</span>
        </div>
      </header>

      <main className=" flex items-center justify-center px-4">
        <div className="w-full max-w-5xl flex items-center justify-center gap-10 p-10 rounded-lg">
          {/* Sign In Form */}
          <div className="w-full max-w-md space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <h1 className="text-2xl mb-4 font-serif italic text-black text-center">Welcome Back!</h1>
            <p className="text-gray-600 text-center mb-8 text-sm">
              "Empowering Workforces, Elevating Businesses"
            </p>

            <div className="space-y-4">
              <input
                type="text"
                placeholder="Username or Email"
                className="w-full text-black border-b-2 border-black h-12 px-4 rounded-md focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full text-black border-b-2 border-black h-12 px-4 rounded-md focus:outline-none"
              />

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" id="remember" className="border-gray-500" />
                  <label htmlFor="remember" className="text-sm text-gray-500">
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-sm text-blue-500 hover:underline">Forgot your password?</a>
              </div>

              <button  onClick={() => navigate("/dashboard")} className="w-full shadow-lg bg-yellow-400 hover:bg-yellow-500 rounded-full h-12 text-white font-semibold transition duration-200">
                Sign In
              </button>

              {/* Link to Signup Page */}
              <div className="text-center text-sm text-gray-500 mt-4">
                Don't have an account?
                <button
            className="text-blue-500 font-semibold hover:underline ml-1"
            onClick={() => navigate("/SignUp")}
          >
            Sign Up
          </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">Or sign in with</div>

              <button className="w-full h-12 rounded-full border border-gray-700 text-gray-900 hover:bg-gray-200 flex items-center justify-center gap-2 transition duration-200">
                <img src="google.png" alt="Google" className="w-6 h-6" />
                Sign in with Google
              </button>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="w-full max-w-md hidden md:block">
            <img src="/officePeople.jpg" alt="Office People" className="w-full rounded-lg shadow-lg" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
