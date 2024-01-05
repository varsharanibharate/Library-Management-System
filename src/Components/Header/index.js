import {Link} from 'react-router-dom'
import "./index.css"
import { Component } from 'react'

class Header extends Component {
  render() {
    return(
      <div className="header-conteiner">
        <div className="upper-header-container">
          <div className="left-header">
            <Link to='/home' className='link-item'><img src="https://drive.google.com/uc?id=16dKa2Lrf6BVPQgzL4mE0lUommvZhlNnH" 
              alt="logo" className="logo"/>
            </Link>
            <Link to='/home' className='link-item'><h1 className="logo-heading">Digital Library</h1></Link>
          </div>
          <div className="right-header">
            <Link to='/home' className='link-item'><p className="right-header-text">Home</p></Link>
            <Link to='/books' className='link-item'><p className="right-header-text">Books</p></Link>
            <Link to='/openingHours' className='link-item'><p className="right-header-text">Opening Hours</p></Link>
            <Link to='/myPage' className='link-item'><p className="right-header-text">My Page</p></Link>
            <Link to='/' className='link-item'><button className='button'>Logout</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Header