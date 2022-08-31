import { Routes, Route } from "react-router-dom"
//Pages
import Blog from "../pages/Blog"
import Home from "../pages/Home"
import Person from "../pages/Person"
import Profile from "../pages/Profile"
import Search from "../pages/Search"


const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="blog" element={ <Blog /> }></Route>
            <Route path="/" element={ <Home /> }></Route>
            <Route path="profile" element={ <Profile /> }></Route>
            <Route path="search" element={ <Search /> }></Route>
            <Route path="person/:personId" element={ <Person /> }></Route>
        </Routes>
    </>
  )
}

export default AppRouter