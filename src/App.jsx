import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import ThemeContext from "./context/ThemeContext";
import { Route, Routes, Link } from "react-router-dom";
import SavedStocks from "./pages/SavedStocks";
import { ToastContainer } from "react-toastify";
import StockContext from "./context/StockContext";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [stockSymbol, setStockSymbol] = useState("");
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
              <StockContext.Provider value={{stockSymbol, setStockSymbol}}>
                <Dashboard />
              </StockContext.Provider>
            </ThemeContext.Provider>
          }
        />
        <Route path="/saved" element={<SavedStocks />} />
      </Routes>
      <ToastContainer
        position='bottom-left' 
        autoClose={2700}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover 
      />
    </>
  );
}

export default App;
