import React from "react";
import { Link } from "react-router-dom";
import GuviBlogLogo from '../assets/GuviBlogLogo.png'

export default function Navigation() {

    return (
  <nav className="navbar text-center navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
  <img width="121" height="53" src={GuviBlogLogo} alt="Guvi-blog-logo"/>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto justify-content-center">
        <li className="nav-item me-3">
          <Link className="nav-link active" aria-current="page" href="#">COURSES</Link>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            LIVE CLASSES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">Zen Class Live<br/>LIVE Online Intensive Program + 100% Placement Support</Link></li>
            <li><Link className="dropdown-item" href="#">Fullstack Development Program(FSD)<br/>Learn Javascript, HTML, CSS, Java, Data Structure, MongoDB & more</Link></li>
            <li><Link className="dropdown-item" href="#">IIT-M Advanced Programming & Data Science Program<br/>Learn Python, Machine Learning, NLP, Tableau, PowerBI & more</Link></li>
            <li><Link className="dropdown-item" href="#">Autmation & Testing Program<br/>Learn Selenium, Python, Java, Jenkins, Jmeter, API Testing & more</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            PRACTICE
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">CodeKata<br/>Sharpen your coding skills, prepare for interviews</Link></li>
            <li><Link className="dropdown-item" href="#">Webkata<br/>Build basic Frontend & Backend development skills</Link></li>
            <li><Link className="dropdown-item" href="#">IDE-Online Compiler<br/>Run & test your code in any Programming language</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           RESOURCES
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">REWARDS</Link></li>
            <li><Link className="dropdown-item" href="#">REFERAL</Link></li>
            <li><Link className="dropdown-item" href="#">FORUM SUPPORT</Link></li>
            <li><Link className="dropdown-item" href="#">BLOGS</Link></li>
          </ul>
        </li>
        <li className="nav-item dropdown me-3">
          <Link className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OUR PRODUCTS
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" href="#">HackerKid<br/> Coding classes platform for k-12 children</Link></li>
            <li><Link className="dropdown-item" href="#">GUVI for corporates <br/> Meet your hiring needs at ease</Link></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}