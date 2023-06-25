import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ThemeContext from "./context/ThemeContext";
import { Route, Routes, Link } from "react-router-dom";
import SavedStocks from "./pages/SavedStocks";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
              <Dashboard />
            </ThemeContext.Provider>
          }
        />
        <Route path="/saved" element={<SavedStocks />} />
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
