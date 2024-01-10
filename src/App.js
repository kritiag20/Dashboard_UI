import "./App.css";
import "./assets/style/header.css";
import "./assets/style/layout.css";
import "./assets/main.css";
import Main from "./components/layout/Main";
import Header from "./components/layout/Header";
import Sidebar from "./components/layout/Sidebar";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CommonPage from "./components/pages/CommonPage";

function App() {
  return (
    <React.Fragment>
      {/* <Main /> */}

      <div className="App">
        <Router>
          <Header />
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route exact path="/payments" element={<Main />} />
            <Route exact path="/*" element={<CommonPage />} />
          </Routes>
        </Router>
      </div>
    </React.Fragment>
  );
}

export default App;
