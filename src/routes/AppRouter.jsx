import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../components/Home";
import Upload from "../components/Upload";
import SecureUpload from "../components/SecureUpload";


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/secure-upload" element={<SecureUpload />} />
      </Routes>
    </Router>
  )
}

export default AppRouter
