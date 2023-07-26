import React from 'react'

const Header = () => {
  return (
    <div className='bg-dark'>
      <div className='container'>
        <nav className="navbar navbar-expand navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand">Start Bootstrap</a>
            <form className="d-flex" >
              <ul className="navbar-nav">
                <li className='nav-item'>
                  <a className='nav-link active' href="#">Home</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="#">About</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href="#">Contact</a>
                </li>
              </ul>
            </form>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header