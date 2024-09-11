import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import MusicKits from "./components/MusicKits/MusicKits"
import Collections from "./components/Collections/Collections"

const App = () => {
  return (
    <>
    <Link to='/'>Home</Link>
    <Link to='/musickits'>Music Kits</Link>
    <Link to='/collections'>Collections</Link>
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/musickits' element={<MusicKits />}></Route>
      <Route path='/collections' element={<Collections />}></Route>
    </Routes>
    </>
  )
}

export default App
