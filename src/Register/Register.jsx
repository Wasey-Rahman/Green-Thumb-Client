import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';

import {  getAuth, updateProfile } from 'firebase/auth';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [photoURL, setPhotoURL] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const { createUser,user } = useContext(AuthContext);

  const handleRegister = () => {
    // Implement registration logic here
    // Validate name, email, password, and photoURL
    if (name === '') {
      setErrorMessage('Please enter your name.');
    } else if (email === '') {
      setErrorMessage('Please enter your email.');
    } else if (password === '') {
      setErrorMessage('Please enter your password.');
    } else if (photoURL === '') {
      setErrorMessage('Please enter your photo URL.');
    } else {
      // Perform registration action
      // ...
      createUser(email, password, photoURL)
        .then(() => {
          if (name && photoURL) {
            const auth = getAuth();
            updateProfile(auth.currentUser, {
              displayName: name,
              photoURL: photoURL,
            })
              .then(() => {
                console.log('Profile updated!');
                // ... Perform additional actions after updating the profile
              })
              .catch((error) => {
                console.log('An error occurred while updating the profile:', error);
                // ... Handle the error
              });
          }
        })
        .catch((error) => {
          console.log('An error occurred while creating the user:', error);
          // ... Handle the error
        });
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="card-four flex-shrink-0 w-full max-w-sm shadow-2xl bg-green-100 mt-1">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Name</span>
              </label>
              <input
                type="text"
                placeholder="name"
                className="input input-bordered"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
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
                <span className="label-text font-bold text-xl">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-bold text-xl">Photo URL</span>
              </label>
              <input
                type="url"
                placeholder="photo URL"
                className="input input-bordered"
                value={photoURL} onChange={(e) => setPhotoURL(e.target.value)}
                />
              </div>
              {errorMessage && <p className="text-error mt-2">{errorMessage}</p>}
              <div className="form-control mt-6">
                <button className="btn btn-neutral" onClick={handleRegister}>
                  Register
                </button>
              </div>
              <div className="form-control mt-4">
                <p>
                  Already have an account?{' '}
                  <Link to="/Login" className="text-primary">
                    Log In
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Register;