//dependencies
import React from "react";


//components
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/skills" element={<Skills/>} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/resume" element={<Resume/>} />
        </Routes>
        <Footer />
      </div>
    </Router>
    
  );
}

// export default App;
// function App () {
//   const [currentPage, setCurrentPage] = useState('Home');

//   const renderPage = () => {
//     if (currentPage === 'Home') {
//       return <Home />;
//     }
//     if (currentPage === 'About') {
//       return <About />;
//     }
//     if (currentPage === 'Skills') {
//       return <Skills />;
//     }
//     if (currentPage === 'Projects') {
//       return <Projects />;
//     }
//     if (currentPage === 'Resume') {
//       return <Resume />;
//     }
//   };

//   const handlePageChange = (page) => setCurrentPage(page);


//   return (
//     <div>
//       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }

export default App;