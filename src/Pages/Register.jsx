import { Link } from "react-router-dom";
import app from './../Firebase/firebase.config';
import { useContext } from 'react';
import { AuthContext } from './../Provider/AuthProvider';



const Register = () => {
      
      const { createUser,} = useContext(AuthContext);

      const handleRegister = (e)=>{
            e.preventDefault();
            const form = e.target;
            const email = form.email.value;
            const password = form.password.value;
            //  create user
            createUser(email, password)
            .then(result =>{
                  const regUser = result.user;
                  console.log('create', regUser);
                  form.reset();
            })
            .catch(error =>{
                  console.log(error.message)
            })
      }

      return (
            <>
                  <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-primary">Register</button>
              </div>
              <p className="text-center font-bold py-3">Already have an account <Link className="text-primary" to='/login'>Login</Link></p>
            </form>
          </div>
        </div>
      </div>
            </>
      );
};

export default Register;