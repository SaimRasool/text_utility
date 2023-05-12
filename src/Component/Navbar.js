import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'
const Navbar = (props) => {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
     <Link className="navbar-brand" to="/">{props.Title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
           <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
           <Link className="nav-link"to="About">About</Link>
          </li>
        </ul>
        {props.SearchBar? <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>:""}
      <div className='d-flex'>
        <div className='bg-primary rounded mx-2' onClick={(e) =>props.toggleMode("primary",e)} style={{height:'30px',width:'30px', cursor:'pointer'}}>
        </div>
      </div>
      <div className='d-flex'>
        <div className='bg-success rounded mx-2' onClick={(e) =>props.toggleMode("success",e)} style={{height:'30px',width:'30px', cursor:'pointer'}}>
        </div>
      </div>
   <div className='d-flex'>
        <div className='bg-warning rounded mx-2' onClick={(e) =>props.toggleMode("warning",e)} style={{height:'30px',width:'30px', cursor:'pointer'}}>
        </div>
      </div>
       <div className='d-flex'>
        <div className='bg-danger rounded mx-2' onClick={(e) =>props.toggleMode("danger",e)} style={{height:'30px',width:'30px', cursor:'pointer'}}>
        </div>
      </div>
         <div className={`form-check form-switch text-${props.mode==="dark"?"light":"dark"}`}>
              <input className="form-check-input" type="checkbox" onClick={(e) =>props.toggleMode("#212529",e)} role="switch" id="darkCheck"/>
             <label className="form-check-label" htmlFor="darkCheck">Enable Dark Mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}
Navbar.defaultProps={
    Title:"Your Title Here"
  }
  Navbar.propTypes={
  Title:PropTypes.string,
  SearchBar:PropTypes.bool.isRequired
  }
export default Navbar
