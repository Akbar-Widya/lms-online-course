import { Link, useParams } from "react-router-dom"

const CourseDetail = () => {
  const {courseId} = useParams()
  return (
    <div>
      <Link to="/dashboard/courses" className="text-sm underline text-indigo-400">← Back to List</Link>
      <div className="p-10 border">
        <h1 className="text-4xl">{courseId.replace("-", " ")}</h1>
        <div className="aspect-video bg-slate-900 text-slate-500 flex items-center justify-center">Video Player Placeholder</div>
      </div>
    </div>
  )
}
export default CourseDetail