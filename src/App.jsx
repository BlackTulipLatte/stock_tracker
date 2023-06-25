import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ThemeContext from "./context/ThemeContext";
import { Route, Routes, Link } from "react-router-dom"
import SavedStocks from "./pages/SavedStocks";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <Routes>
      <Route path="/" element={
         <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
          <Dashboard />
         </ThemeContext.Provider>
      } />
      <Route path="/saved" element={<SavedStocks />} />
    </Routes>
  );
}

export default App;
