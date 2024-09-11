import { Link, Route, Routes } from "react-router-dom"
import Home from "./components/Home/Home"
import MusicKits from "./components/MusicKits/MusicKits"
import Collections from "./components/Collections/Collections"
import ItemList from "./components/Collections/ItemList"

const App = () => {
  return (
    <>
    <div id='wrapper'>
      <ItemList />
      <Link to='/'>Home</Link>
      <Link to='/musickits'>Music Kits</Link>
      <Link to='/collections'>Collections</Link>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/musickits' element={<MusicKits />}></Route>
        <Route path='/collections' element={<Collections />}></Route>
      </Routes>
    </div>
    </>
  )
}

export default App
