import { Outlet, Navigate } from "react-router-dom"

const ProtectedRoute = () => {
  const isAuth = localStorage.getItem("isLoggedIn")
  return isAuth ? <Outlet /> : <Navigate to="/login" replace />
}
export default ProtectedRoute