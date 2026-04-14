import Layout from "../components/Layout";
import { Link } from "react-router-dom";
import courses from "../data/courses";

import { motion } from "framer-motion";

const Home = () => {
  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Courses</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(courses).map(([key, course]) => {
            const lessons = course?.lessons || [];
            const firstLesson = course?.lessons?.[0];

            console.log(course.id, firstLesson);
            return (
              <motion.div
                key={course.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 
                          p-5 rounded-xl shadow 
                          hover:shadow-xl transition 
                          duration-200"
              >
                <h2 className="text-lg font-semibold mb-2">{course.title}</h2>

                <p className="text-sm text-gray-500 mb-4">
                  {lessons.length} lessons
                </p>

                {firstLesson ? (
                  <Link
                    to={`/${course.id}/${firstLesson.id}`}
                    className="text-blue-500 hover:underline"
                  >
                    Start Learning →
                  </Link>
                ) : (
                  <p>No lessons Available</p>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};
export default Home;
