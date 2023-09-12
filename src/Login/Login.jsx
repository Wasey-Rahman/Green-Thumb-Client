import React, { useContext, useState } from 'react';

import { Link, useLocation, useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, getAuth, signInWithPopup, updateProfile } from 'firebase/auth';

import { AuthContext } from '../AuthProvider/AuthProvider';
import { app } from '../Firebase/firebase.config';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const {signIn,user} = useContext(AuthContext);
  const navigate=useNavigate();
  const auth=getAuth(app);
  const provider =new GoogleAuthProvider();
  const location =useLocation();
  console.log('login page came',location)
  const from=location.state?.from?.pathname ||'/'




  const handleLogin = () => {
   
    // Implement login logic here
    // Validate email and password
    if (email === '') {
      setErrorMessage('Please enter your email.');
    } else if (password === '') {
      setErrorMessage('Please enter your password.');
    } else {
      // Perform login action
      // ...
    }
    console.log(name,email,password)

    signIn(email,password)
    .then(result=>{
      const user=result.user;
      console.log(user);
      
  

      const auth = getAuth();
    updateProfile(auth.currentUser, {
      displayName: user.displayName,
      photoURL: user.photoURL,
    })
      .then(() => {
        console.log('Profile updated!');
        // ... Perform additional actions after updating the profile
      })
      .catch((error) => {
        console.log('An error occurred while updating the profile:', error);
        // ... Handle the error
      });


      navigate(from,{replace:true})

      
    })
   
    
    .catch(error=>console.log(error))
  };

  const handleGoogleSignIn = () => {
    signInWithPopup(auth,provider)
    .then(result=>{
      const user=result.user;
      console.log(user);
      navigate(from,{replace:true})
    })
    .catch(error=>{
      console.log('error',error.message)
    })
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card-three flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-300 mt-1">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className=" label-text font-bold text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {errorMessage && <p className="text-error mt-2">{errorMessage}</p>}
            <div className="form-control mt-6">
              <button className="btn btn-outline" onClick={handleLogin}>
                Login
              </button>
            </div>
            <div className="form-control mt-4">
              <button className="btn btn-outline" onClick={handleGoogleSignIn}>
                Google Sign-in
              </button>
            </div>
            <div className="form-control mt-4">
              <p>
                Don't have an account?{' '}
                <Link to="/Register" className="text-primary">
                  Register
                </Link>
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;