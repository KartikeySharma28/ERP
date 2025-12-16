import { useState } from "react";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ username, password });
    if (username && password) {
      localStorage.setItem("isLoggedIn", "true");
      navigate("/home");
    } else {
      alert("Please enter username and password");
    }
  }

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to -white-500 h-screen flex flex-col justify-center items-center ">
        <div className=" rounded-xl bg-white h-[40vh] w-[25vw] flex flex-col justify-center items-center">
          <span className="text-3xl font-bold">Welcome Back</span>
          <form onSubmit={handleSubmit} className="flex flex-col items-center">
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
              className=" border border-gray-300 m-4 rounded-md"
            />

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              className="border border-gray-300 m-4 rounded-md"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-4 py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
