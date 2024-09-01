import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from './component/ScrollToTop'
import Home from './component/home/Home'

function App() {

  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
