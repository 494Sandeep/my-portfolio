import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Qualification from "./components/Qualification";
import Footer from "./components/Footer";
import ContactMe from "./components/ContactMe";
import ProjectInMind from "./components/ProjectInMind";

const App = () => {
  const [data, setData] = useState(null);
  const getData = () => {
    fetch("data/my-data.json")
      .then((res) => {
        console.log("Data loaded");
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.log("error: " + error);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (data !== null)
    return (
      <div className="App">
        <Header />
        <main className="main">
          <Home data={data.banner} />
          <About data={data.aboutMe} />
          <Skills data={data.skills} />
          <Qualification data={data.qualification} />
          <ProjectInMind data={data.projectInMind} />
          <ContactMe data={data.contactMe} />
        </main>
        <Footer data={data.footer} />
        <a href="#home" className="scrollup" id="scroll-top">
          <i className="uil uil-arrow-up scrollup__icon"></i>
        </a>
      </div>
    );
  else return <div>Loading...</div>;
};

export default App;
