import React, { useEffect, useState } from "react";
import "./Header.css";
import { IoMdSunny } from "react-icons/io";
import { IoMdMoon } from "react-icons/io";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [theme, setTheme] = useState(
    localStorage.getItem("currentMode") ?? "light"
  );

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("dark");
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
      document.body.classList.add("dark");
    }
  }, [theme]);

  const ShowDiv = () => {
    if (!show) {
      setShow(true);
    }
  };
  const HideDiv = () => {
    if (show) {
      setShow(false);
    }
  };
  console.log(show);

  return (
    <header className="d-flex align-items-center justify-content-between">
      <button className="icon-menu fs-5 menu" onClick={() => ShowDiv()} />

      <div />
      <nav className="navbar mt-2  ">
        <ul className="nav_list ">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
          <li>
            <a href="#contact">contact</a>
          </li>
        </ul>
      </nav>
      <button
        onClick={() => {
          localStorage.setItem(
            "currentMode",
            theme === "dark" ? "light" : "dark"
          );
          setTheme(localStorage.getItem("currentMode"));
        }}
        className="mt-2 fs-5"
      >
        {theme === "dark" ? (
          <span className="icon-moon-o">{/* <IoMdMoon /> */}</span>
        ) : (
          <span className="light_mood">
            <IoMdSunny />
          </span>
        )}
      </button>
      {show && (
        <div className="nav_smal">
          <ul className=" model m-4 mt-5 p-3 ">
            <li className="btn_hide">
              <button onClick={() => HideDiv()} className="icon-close" />
            </li>
            <li className="pb-2">
              <a href="#home">Home</a>
            </li>
            <li className="pb-2 pt-2">
              <a href="#about">About</a>
            </li>
            <li className="pb-2 pt-2">
              <a href="#skills">Skills</a>
            </li>
            <li className="pb-2 pt-2">
              <a href="#project">Projects</a>
            </li>
            <li className="pb-2 pt-2">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
