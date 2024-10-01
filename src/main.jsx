import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from '../pages/App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import About from './components/About/About.jsx';
import Home from './components/Home/Home.jsx';
import Projects from './components/Projects/Projects.jsx';
import ProjectDetails from './components/Projects/ProjectDetails.jsx';
import Contact from './components/Contact/Contact.jsx';
import Error404 from './components/Error404.jsx';
import { ProjectData } from './data/projectsData';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: '/sobre', element: <About /> },
      { path: '/projetos', element: <Projects projects={ProjectData.ProjectHeader} projectImages={ProjectData.ProjectImages} /> }, // Passagem dos Props
      { path: '/projetos/:projectId', element: <ProjectDetails /> },
      { path: '/contato', element: <Contact /> },
      { path: '*', element: <Error404 /> },
      { path: '/erro404', element: <Error404 /> }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
