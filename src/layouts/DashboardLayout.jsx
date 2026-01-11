import { NavLink, Outlet, useNavigate } from "react-router-dom"

const DashboardLayout = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    console.log("Executing logout functions...")
    localStorage.removeItem("isLoggedIn")
    console.log("Success. Redirecting to login page...")
    navigate("/")
  }
  return (
    <div>
      <aside>
        <h2>DevAcademy</h2>
        <nav>
          <NavLink to="/dashboard">Overview</NavLink>
          <NavLink to="/dashboard/courses">My Courses</NavLink>
          <button onClick={handleLogout}>
            Logout
          </button>
        </nav>
      </aside>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default DashboardLayout