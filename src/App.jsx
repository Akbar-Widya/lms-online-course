import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import About from "./pages/About";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./pages/auth/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import DashboardLayout from "./layouts/DashboardLayout";
import Overview from "./pages/dashboard/Overview";
import NotFound from "./pages/NotFound";
import MyCourses from "./pages/dashboard/MyCourses";
import CourseDetail from "./pages/dashboard/CourseDetail";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
      </Route>
      <Route element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<ProtectedRoute />}>
        <Route path="dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="courses" element={<MyCourses />} />
          <Route path="courses/:courseId" element={<CourseDetail />} />
        </Route>
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};
export default App;
