import { Link, Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div>
      <div>
        <h2>DevAcademy</h2>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/dashboard" className="py-2 rounded-lg shadow-md transition active:scale-95 duration-300">
            Dashboard
          </Link>
        </nav>
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  )
}
export default MainLayout