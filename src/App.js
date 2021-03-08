import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Content from "./components/layout/Content";
import Home from "./components/layout/Home";
const App = () => {
  const [isSidebarToggled, setIsSidebarToggled] = useState(true);
  const backToMainPage = useHistory();

  const toggleSidebar = () => {
    if (isSidebarToggled) {
      backToMainPage.push("/");
    }
    setIsSidebarToggled(!isSidebarToggled);
  };

  return (
    <div className="app grid">
      <Home>
        <Header toggleSidebar={toggleSidebar} />
        <Content isSidebarToggled={isSidebarToggled} />
        <Footer />
      </Home>
    </div>
  );
};

export default App;
