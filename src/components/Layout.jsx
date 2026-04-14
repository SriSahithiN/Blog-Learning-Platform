import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

import { motion } from "framer-motion";

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <main className="flex-1 p-4 sm:p-6 md:p-10">
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="flex-1 p-4 sm:p-6 md:p-10"
          >
            <div className="max-w-4xl mx-auto">{children}</div>
          </motion.main>
        </main>
      </div>
    </div>
  );
};

export default Layout;
