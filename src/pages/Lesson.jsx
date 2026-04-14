import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import CodeBlock from "../components/CodeBlock";
import Section from "../components/Section";
import PracticeBox from "../components/PracticeBox";
import LiveEditor from "../components/LiveEditor";
import courses from "../data/courses";
import Hints from "../components/Hints";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { LearningContext } from "../context/LearningContext";
import { Code, Lightbulb, Play } from "lucide-react";

const Lesson = () => {
  const { markComplete } = useContext(LearningContext);
  const { course, lessonId } = useParams();

  const selectedCourse = courses[course];

  const lessons = selectedCourse?.lessons || [];

  const currentIndex = lessons.findIndex((l) => l.id === lessonId);

  const selectedLesson = lessons[currentIndex];

  const prevLesson = lessons[currentIndex - 1];
  const nextLesson = lessons[currentIndex + 1];

  if (!selectedLesson) {
    return (
      <Layout>
        <h2>Lesson not Found</h2>
      </Layout>
    );
  }

  if (!selectedCourse) {
    return <p>Course not found</p>;
  }

  console.log("COURSE:", course);
  console.log("LESSON ID:", lessonId);
  console.log("SELECTED COURSE:", selectedCourse);
  console.log("LESSONS:", lessons);

  return (
    <Layout>
      <motion.div
        className="bg-white dark:bg-gray-800
        p-6 rounded-xl shadow hover:shadow-xl
        transition duration-200
        space-y-8 animate-fadeIn"
      >
        {/* Title */}
        <div>
          <h1 className="text-2xl sm:text-2xl md:text-3xl font-bold">
            {selectedLesson.title}
          </h1>

          <p className="text-gray-600 dark:text-gray-300">
            {selectedLesson.description}
          </p>
        </div>

        {/* Code Example */}
        <div
          className="bg-white dark:bg-gray-800
          p-5 rounded-xl shadow hover:shadow-xl
          transition duration-200
          border dark:border-gray-700"
        >
          <h2 className="flex items-center gap-2 text-lg font-semibold mb-3">
            <Code size={18} /> Example
          </h2>
          <CodeBlock code={selectedLesson.code} />
        </div>

        {/* Live Editor */}
        <div
          className="bg-white dark:bg-gray-800
          p-5 rounded-xl shadow hover:shadow-xl
          transition duration-200
          border dark:border-gray-700"
        >
          <h2 className="text-lg font-semibold mb-3">
            {" "}
            <Play size={18} /> Try it Yourself
          </h2>
          <LiveEditor
            initialCode={selectedLesson.code}
            expectedOutput={selectedLesson.expectedOutput}
            testCases={selectedLesson.testCases}
            course={course}
            lessonId={lessonId}
          />
        </div>

        {/* Explanation */}
        <div
          className="bg-white dark:bg-gray-800
          p-5 rounded-xl shadow hover:shadow-xl
          transition duration-200
          border dark:border-gray-700"
        >
          <h2 className="text-lg font-semibold mb-3">
            <Lightbulb size={18} /> Explanation
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            {selectedLesson.explanation}
          </p>
        </div>

        {/* Practice */}
        <div className="bg-green-50 p-5 rounded-xl border-l-4 border-green-500">
          <h2 className="text-lg font-semibold mb-2">🧪 Practice</h2>
          <p>{selectedLesson.task}</p>
        </div>

        {selectedLesson?.hints && <Hints hints={selectedLesson.hints} />}

        <button
          onClick={() => markComplete(`${course}-${lessonId}`)}
          className="flex items-center gap-2 px-4 py-2 rounded-lg 
          bg-blue-600 text-white 
          hover:bg-blue-700 
          transition transform hover:scale-105 active:sccale-95"
        >
          ✅ Mark as Completed
        </button>

        <div className="flex flex-col sm:flex-row justify-between gap-3 mt-10">
          {/* Previous */}
          {prevLesson ? (
            <Link
              to={`/${course}/${prevLesson.id}`}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border 
             bg-white hover:bg-gray-100 
             dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              ⬅️ {prevLesson.title}
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {nextLesson ? (
            <Link
              to={`/${course}/${nextLesson.id}`}
              onClick={() => markComplete(`${course}-${lessonId}`)}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border
              bg-black text-white hover:opacity-80"
            >
              {nextLesson.title} ➡️
            </Link>
          ) : (
            <div />
          )}
        </div>
      </motion.div>
    </Layout>
  );
};

export default Lesson;
