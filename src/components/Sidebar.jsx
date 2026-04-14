import { NavLink, useParams } from "react-router-dom";
import courses from "../data/courses";
import { useContext } from "react";
import { LearningContext } from "../context/LearningContext";
import { BookOpen, CheckCircle } from "lucide-react";

const Sidebar = () => {
  const { course } = useParams();
  const selectedCourse = courses[course];

  const { completedLessons } = useContext(LearningContext);

  if (!selectedCourse) return null;

  const totalLessons = selectedCourse.lessons.length;

  const completedCount = selectedCourse.lessons.filter((lesson) =>
    completedLessons.includes(`${course}-${lesson.id}`),
  ).length;

  const progress = Math.round((completedCount / totalLessons) * 100);

  return (
    <div
      className="hidden lg:block w-64 bg-white dark:bg-gray-800
      border-r dark:border-gray-700 p-5"
    >
      {/* Course Title */}
      <h3 className="text-lg font-semibold mb-4">{selectedCourse.title}</h3>

      {/* Progress */}
      <div className="mb-4">
        <p className="text-sm mb-1">Progress: {progress}%</p>

        <div className="w-full bg-gray-200 dark:bg-gray-700 h-2 rounded">
          <div
            className="bg-green-500 h-2 rounded"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      {/* Lessons */}
      <ul className="space-y-2">
        {selectedCourse.lessons.map((lesson) => {
          const isDone = completedLessons.includes(`${course}-${lesson.id}`);

          return (
            <li key={lesson.id}>
              <NavLink
                to={`/${course}/${lesson.id}`}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-sm trabsition transform ${
                    isActive
                      ? "bg-black text-white dark:bg-white dark:text-black scale-105"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700 hover:scale-105"
                  }`
                }
              >
                <span className="flex items-center gap-2">
                  <BookOpen size={16} />
                  {lesson.title}
                </span>

                {isDone && <CheckCircle size={16} className="text-green-500" />}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
