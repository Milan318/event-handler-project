import React, { useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {

  const btnChange = useRef()
  const textChange = useRef()

  const handleClick = ()=>{
    btnChange.current.innerText = "Thank you for Visiting"
    btnChange.current.classList.remove('btn-warning')
    btnChange.current.classList.add('btn-success')
  }

  const handleTextHover = () =>{
    textChange.current.classList.add('text-warning')
    textChange.current.classList.remove('text-white')
  }

  const handleTextUnhover = () =>{
    textChange.current.classList.remove('text-warning')
    textChange.current.classList.add('text-white')
  }

  return (
    <>
      <header>
        <nav className="navbar navbar-expand-lg bg-warning fixed-top">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              VRAJ FURNITURE
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" href="#">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Link
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link disabled" aria-disabled="true">
                    Disabled
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <section className="hero-section">
        <div className="card">
          <img
            src="https://i.etsystatic.com/30373584/r/il/d65d5e/5061496090/il_fullxfull.5061496090_ylyo.jpg"
            className="img-fluid w-100 vh-100"
            alt="furniture"
          />
          <div className="card-img-overlay">
            <div className="h-100 d-flex justify-content-center align-items-center">
              <div className="hero-content text-center">
                <h1 
                className="text-white display-2 fw-semibold"
                onMouseOver={handleTextHover}
                onMouseLeave={handleTextUnhover}
                ref={textChange}
                >
                  Welcome To Vraj Furniture
                </h1>
                <button 
                className="btn btn-warning text-white fs-5 fw-semibold mt-3"
                onClick={handleClick}
                ref={btnChange}
                >Welcome</button>
              </div>
            </div>
          </div>
        </div>
        </section>
    </>
  );
};

export default App;