
import './Navbar.css'
import { Link } from 'react-scroll'



const Navbar = () => {
  return (

    <nav className="aware-navbar">
      <div className="aware-navbar-container">
        <Link className="aware-navbar-name" to="#" >
          <img src="/aware.svg" alt="" width="30" height="30" class="navbar-image" />
          Aware
        </Link>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
{/* 
        <div className="collapse navbar-collapse" id="navbarSupportedContent">


          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="information">Info</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="features">Features</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Commands</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">About Team</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="#">Links</Link>
            </li>

          </ul>
        </div> */}


      </div>
    </nav>


  )
}

export default Navbar;
