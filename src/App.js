import "./styles.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";
import Footer from "./components/footer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <h1>Hello! Amul Sharma</h1> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}
