// import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppLayout } from "./layouts/AppLayout";
import AboutPage from "./pages/About";
import ProjectsPage from "./pages/Projects";
import ProjectDetailPage from "./pages/ProjectsDetail";
import HomePage from "./pages/Home";

function App() {

  return (
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          {/* Nested routes rendered in <Outlet> */}
          <Route index element={<HomePage />} />
          {/* <Route path="about" element={<AboutPage />} /> */}
          <Route path="projects" element={<ProjectsPage />} />
          // <Route path="projects/:slug" element={<ProjectDetailPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
