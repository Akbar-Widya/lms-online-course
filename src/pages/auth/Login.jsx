import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const handleLogin = () => {
    console.log("Executing login functions...");
    localStorage.setItem("isLoggedIn", "true");
    console.log("Success. Redirecting to dashboard...");
    navigate("/dashboard");
  };
  return (
    <div>
      <h2>Login to DevAcademy</h2>
      <div>
        <input type="email" placeholder="Email" className="w-full p-3 border" />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 border"
        />
        <button
          onClick={handleLogin}
          className="active:scale-95 transition duration-300 border w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};
export default Login;
