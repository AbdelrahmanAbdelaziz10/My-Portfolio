import { useEffect, useState } from "react";
import Home from "./Pages/Home";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [scrollbtn, setScrollbtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        setScrollbtn(true);
      } else {
        setScrollbtn(false);
      }
    });
  }, []);
  return (
    <div id="up" className="App ">
      <Home />
      <a href="#up" 
      style={{ transition: ".6s", opacity: scrollbtn ? 1 : 0 }}>
        <button className="scroll_btn">
          <FaArrowUp />
        </button>
      </a>
    </div>
  );
}

export default App;
