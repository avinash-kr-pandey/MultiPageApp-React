import { Route, Routes } from "react-router-dom";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Project from "../components/Project";
import Skills from "../components/Skills";
import Testimonial from "../components/Testimonial";

const MultiPateAppRoutes = ()=>{
    return(
      <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="home" element={<Home/>} />
          <Route path="contact" element={<Contact/>} />
          <Route path="projects" element={<Project/>} />
          <Route path="skills" element={<Skills/>} />
          <Route path="testimonial" element={<Testimonial/>} />
      </Routes>
    );
}
export default MultiPateAppRoutes;