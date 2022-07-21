import React from 'react'
import About from "../pages/About";
import Posts from "../pages/Posts";
import ErrorPage from "../pages/ErrorPage";
import { Routes, Route} from "react-router-dom";


const AppRouter = () => {
  return (
    <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  )
}

export default AppRouter