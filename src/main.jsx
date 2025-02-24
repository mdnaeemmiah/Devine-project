import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Blogs from './Pages/Blogs.jsx'
import Bookmarks from './Pages/Bookmarks.jsx';
import Mainlayout from './Layout/Mainlayout.jsx';
import Home from './Pages/Home.jsx';
import Blog from './Pages/Blog.jsx';
import Content from './Components/Content.jsx';
import Author from './Components/Author.jsx';
import { Toaster } from 'react-hot-toast';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Mainlayout></Mainlayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/blogs',
        element:<Blogs></Blogs>,
        loader:()=> fetch('https://dev.to/api/articles?per_page=19&top=7'),
      },
      {
        path:'/blog/:id',
        element:<Blog></Blog>,
        loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
        children:[
          {
            path:'',
            element:<Content></Content>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          },
          {
            path:'author',
            element:<Author></Author>,
            loader:({params})=>fetch(`https://dev.to/api/articles/${params.id}`),
          },
        ]
      },
      {
        path:'/bookmarks',
        element:<Bookmarks></Bookmarks>,
      },
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
     <Toaster></Toaster>
  </React.StrictMode>,
)
