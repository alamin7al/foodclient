import React from 'react';
import { Navbar, Container, Nav, Card } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useAuth from '../LoginPage/useAuth';
import './Nav.css'
import logo from '../download.png'
const Navigation = () => {

  const { user, logOut } = useAuth()
  return (
    <div className=''>

      <Navbar

        className='ms-5 ' expand="lg">

        <Navbar.Toggle aria-controls="basic-navbar-nav bg-dark " />
        <Navbar.Collapse id="basic-navbar-nav bg-dark ">
          <Card.Img className='text-center' style={{ width: '120px', height: '60px', borderRadius: '15px', }} src={logo} />

          <Navbar.Collapse className="justify-content-center">
            <NavLink
              className=' text-decoration-none me-2 fs-5 '
              to="/home"
              style={isActive => ({
                color: isActive ? "green" : "blue"
              })}
            >
              Home
            </NavLink>
            <NavLink
              className=' text-decoration-none me-2  fs-5'
              to="/crud"
              style={isActive => ({
                color: isActive ? "green" : "blue"
              })}
            >
              CRUD
            </NavLink>

            <NavLink
              className=' text-decoration-none me-2  fs-5'
              to="/tour"
              style={isActive => ({
                color: isActive ? "green" : "blue"
              })}
            >
              tour
            </NavLink>
            <NavLink
              className='
              text-decoration-none me-2  fs-5' to='/menu'
              style={isActive => ({
                color: isActive ? "green" : "blue"
              })}
            >
              Food
            </NavLink>



            {/* <Link to='/home' className='    text-dark text-decoration-none me-2    fs-5  '>Home</Link> */}
          </Navbar.Collapse>
          <div className='me-5'>
            <Navbar.Text className=''>
              <div className=" ">

                {
                  user?.email ?

                    <button className='button-30' onClick={logOut}>


                      LogOut</button>


                    : <div className='d-flex'>
                      <NavLink

                        className='
                        button-23 me-2 ' to='/register'
                        style={isActive => ({
                          color: isActive ? "green" : "blue"
                        })}
                      >
                        SignUp
                      </NavLink>
                      <NavLink
                        className='
                        button-30 px-4' to='/login'
                        style={isActive => ({
                          color: isActive ? "green" : "blue"
                        })}
                      >
                        Login
                      </NavLink>

                    </div>
                }
                {
                  user?.displayName && <Link to='/profile'>
                    <a className='text-uppercase font-monospace text-dark ms-4 fs-5'>
                      {user?.displayName} Deshbord
                    </a>
                  </Link>
                }



              </div>
            </Navbar.Text>
          </div>
        </Navbar.Collapse>

      </Navbar>
      {/* <hr /> */}

    </div>
  );
};


export default Navigation;