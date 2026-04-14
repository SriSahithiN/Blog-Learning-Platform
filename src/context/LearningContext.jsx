import { createContext, useEffect, useState } from "react";

export const LearningContext = createContext();

export const LearningProvider = ({ children }) => {
  const [completedLessons, setCompletedLessons] = useState([]);

  // Load from Storage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("completedLessons")) || [];
    setCompletedLessons(saved);
  }, []);

  //  Save to Storage
  useEffect(() => {
    localStorage.setItem("completedLessons", JSON.stringify(completedLessons));
  }, [completedLessons]);

  //  Mark Complete
  const markComplete = (lessonKey) => {
    if (!completedLessons.includes(lessonKey)) {
      setCompletedLessons([...completedLessons, lessonKey]);
    }
  };

  return (
    <LearningContext.Provider value={{ completedLessons, markComplete }}>
      {children}
    </LearningContext.Provider>
  );
};
