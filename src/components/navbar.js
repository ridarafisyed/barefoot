import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../images/logo3.svg"
import "../styling/navbar-styling.css"

export default function NavBar() {
  const [animate, setAnimate] = useState({
    menuBtnOpen: "false",
    css: "btn-hambuger",
  })
  const [state, setState] = useState({
    navbarOpen: "false",
    css: "collapse navbar-collapse",
    links: [
      {
        id: 1,
        path: "/",
        text: "home",
      },
      {
        id: 2,
        path: "/products",
        text: "products",
      },
      {
        id: 3,
        path: "/about",
        text: "about",
      },
      {
        id: 4,
        path: "/contact",
        text: "contact",
      },
    ],
  })
  //event handler
  const navbarHandler = e => {
    state.navbarOpen
      ? setState({
          navbarOpen: false,
          css: "collapse navbar-collapse ",
          links: state.links,
        })
      : setState({
          navbarOpen: true,
          css: "collapse navbar-collapse show",
          links: state.links,
        })
    animate.menuBtnOpen
      ? setAnimate({
          menuBtnOpen: false,
          css: "btn-hambuger",
        })
      : setAnimate({
          menuBtnOpen: true,
          css: "btn-hambuger open",
        })
  }

  return (
    <nav className="navbar navbar-expand-sm ">
      <Link to="/" className="navbar-brand">
        <img src={logo} width="170" height="55" alt="logo" loading="lazy" />
      </Link>
      <a
        className="navbar-toggler hamburger"
        type="button"
        onClick={navbarHandler}
      >
        <i className="fas fa-bars"></i>
      </a>
      <div className={state.css}>
        <ul className="navbar-nav">
          {state.links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ">
            <Link className="nav-link cart-icon">
              <i class="fa fa-shopping-bag"></i>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
