import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userRole, setUserRole] = useState("employee");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userRole", userRole);
      console.log("Login successful",userRole);
      navigate("/home");
    } else {
      alert("Please enter username and password");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-blue-100">
      <div className="bg-white/95 backdrop-blur rounded-3xl shadow-2xl px-12 py-10 w-full max-w-xl">
        <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8 tracking-tight">
          Welcome Back
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="block w-full px-4 py-3 rounded-xl border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-900 placeholder:text-gray-400"
            />
          </div>

          <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50 px-5 py-4">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Login as:
            </p>
            <div className="flex items-center gap-8">
              <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                <input
                  type="radio"
                  name="userRole"
                  value="employee"
                  checked={userRole === "employee"}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-sm font-medium">Employee</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer text-gray-800">
                <input
                  type="radio"
                  name="userRole"
                  value="admin"
                  checked={userRole === "admin"}
                  onChange={(e) => setUserRole(e.target.value)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                />
                <span className="text-sm font-medium">Admin</span>
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 w-full py-3.5 rounded-2xl bg-blue-600 text-white font-semibold text-lg shadow-lg hover:bg-blue-700 hover:shadow-xl active:bg-blue-800 transition-all duration-150"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
