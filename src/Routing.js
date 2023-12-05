import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
// Import your page components
import HomePage from './Work/Dashboard';
import AboutPage from './Work/Signup';
import ContactPage from './Work/Login';
function App() {
 return (
 <Router>
 <div>
 {/* Navigation links */}
 <nav>
 <ul>
 <li>
 <Link to="/">Home</Link>
 </li>
 <li>
 <Link to="/about">About</Link>
 </li>
 <li>
 <Link to="/contact">Contact</Link>
 </li>
 </ul>
 </nav>
 {/* Route configuration */}
 <Routes>
 <Route path="/" element={<HomePage />} />
 <Route path="/about" element={<AboutPage />} />
 <Route path="/contact" element={<ContactPage />} />
 {/* You can also set up dynamic routes using parameters */}
 </Routes>
 </div>
 </Router>
 );
}
export default App;