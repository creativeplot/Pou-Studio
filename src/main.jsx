

// currently in this project to complete it i need to animate the icon which is like a star and then animate the headlines and the images every time the page reloads or giving the impression that they are appearing on the screen

import { createBrowserRouter, RouterProvider, ScrollRestoration} from "react-router-dom";

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './tailwind-output.css';

import ProfilePage from './pages/ProfilePage.jsx';
import ContactPage from "./pages/ContactPage.jsx";
import Layout from "./Layouts/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (<div className="h-svh">
      <Layout />
      <ScrollRestoration />
    </div>),
    children: [

      {
        path: "/",
        element: <App />,
      },
      {
        path: "/profile",
        element: <ProfilePage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
