import { Link, Navigate, Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import AboutPage from "../pages/AboutPage"
import UserPage from "../pages/UserPage"


export const Navigation = () => {
  return (
    <>
      <h2>Lazy Navigation</h2>
      <ul>
        <li><Link to="/lazy-load/lazy-home">Home</Link></li>
        <li><Link to="/lazy-load/lazy-user">User</Link></li>
        <li><Link to="/lazy-load/lazy-about">About</Link></li>
      </ul>
      <Routes>
        <Route path="lazy-home" element={<HomePage />} />
        <Route path="lazy-user" element={<UserPage />} />
        <Route path="lazy-about" element={<AboutPage />} />
        <Route path="*" element={<Navigate to="/lazy-home" />} />
      </Routes>
    </>
  )
}
