import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthProviderContext } from './AuthContext';

const Registration = () => {
   const navigate = useNavigate();
    const { createUser } = useContext(AuthProviderContext)

    const handleRegistration = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then((result) => {
                console.log(result.user);
                e.target.reset();
                navigate('/');
            })
            .catch((error) => {
                console.log('Error' , error.message);
            });
    }
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <h1 className="text-3xl font-bold">Registration now!</h1>
                    <form onSubmit={handleRegistration} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" placeholder="name" name='name' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" name='password' className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Registration</button>
                        </div>
                    </form>

                    <h2>You have an account? <Link to='/login'>Login Now</Link></h2>
                </div>
            </div>
        </div>
    );
};

export default Registration;