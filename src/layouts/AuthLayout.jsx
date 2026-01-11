import { Outlet } from "react-router-dom";

const AuthLayout = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md p-8 border rounded-2xl">
        <Outlet />
      </div>
    </div>
  );
};
export default AuthLayout;
