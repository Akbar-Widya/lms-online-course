import { Link, useSearchParams } from "react-router-dom";

const MyCourses = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("search") || "";
  const courses = [
    { id: "react-101", title: "React Router Mastery" },
    { id: "tailwind-202", title: "Tailwind CSS Layouting" },
  ];
  const filtered = courses.filter((c) =>
    c.title.toLowerCase().includes(query.toLowerCase())
  );
  return (
    <div>
      <div className="flex justify-between">
        <h2 className="font-bold">My Courses</h2>
        <input
          placeholder="Filter courses..."
          value={query}
          onChange={(e) => setSearchParams({ search: e.target.value })}
          className="w-64 p-3 border"
        />
      </div>
      <div className="grid gap-4">
        {filtered.map((course) => (
          <Link to={`/dashboard/courses/${course.id}`} key={course.id} className="p-5 border flex justify-between items-center hover:border-indigo-400 transition">
            <span>{course.title}</span>
            <span>Open Module →</span>
          </Link>
        ))}
      </div>
    </div>
  );
};
export default MyCourses;
