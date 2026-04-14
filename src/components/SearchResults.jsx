import { Link } from "react-router-dom";
import courses from "../data/courses";

import { motion } from "framer-motion";

const SearchResults = ({ query, setQuery }) => {
  if (!query) return null;

  const results = [];

  Object.values(courses).forEach((course) => {
    course.lessons.forEach((lesson) => {
      if (
        lesson.title.toLowerCase().includes(query.toLowerCase()) ||
        course.title.toLowerCase().includes(query.toLowerCase())
      ) {
        results.push({
          courseId: course.id,
          lessonId: lesson.id,
          title: lesson.title,
        });
      }
    });
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className="absolute top-12 right-0 
                w-full sm:w-72 
                bg-white dark:bg-gray-800 
                border dark:border-gray-700 
                rounded-lg shadow-lg"
    >
      {results.length === 0 ? (
        <p className="p-3 text-gray-500 text-sm">No results found</p>
      ) : (
        results.map((item, index) => (
          <Link
            key={index}
            to={`/${item.courseId}/${item.lessonId}`}
            onClick={() => setQuery("")}
            className="block px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            {item.title}
          </Link>
        ))
      )}
    </motion.div>
  );
};

export default SearchResults;
