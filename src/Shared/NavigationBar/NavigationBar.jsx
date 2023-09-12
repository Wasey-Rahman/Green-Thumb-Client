import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const NavigationBar = () => {
  const { user,logOut } = useContext(AuthContext);
    return (
        <div>
            <div className="navbar bg-green-500">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-200 rounded-box w-52">
        <li><Link to="/">Home</Link></li>
        <li>
          <Link to="/Care">Care</Link>
          {/* <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul> */}
        </li>
        <li><Link to="/Blog">Blog</Link></li>
      </ul>
    </div>
    <a className=" font-extrabold text-3xl">Green-Thumb</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><Link to="/"className='font-semibold'>Home</Link></li>
      <li tabIndex={0}>
        <Link to="/Care"><summary className='font-semibold'>Care</summary></Link>
          </li>
      <li><Link to="/Blog" className='font-semibold'>Blog</Link></li>
    </ul>
    
  </div>
  <div className="navbar-end">
  {user ? (
            <div className="flex items-center">
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-10 h-10 rounded-full mr-2"
              />
              <span className="mr-4 font-bold"> {user.displayName}</span>
              <button  className="btn btn-outline" onClick={logOut}>
                Logout
              </button>
            </div>
          ) : (
            <Link to="/Login" className="btn btn-outline">
              LogIn
            </Link>
          )}
          </div>
</div>
        </div>
    );
};

export default NavigationBar;

