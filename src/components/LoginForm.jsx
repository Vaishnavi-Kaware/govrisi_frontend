import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function LoginForm() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow">
                        <h2 className="text-center mb-4">Login</h2>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">Password</label>
                                <input type="password" className="form-control" id="password" placeholder="Enter your password" />
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>

                        <p className="text-center mt-3">
                            <Link to="/forgot-password">Forgot Password?</Link> {/* Forgot Password Link */}
                        </p>

                        <p className="text-center">Don't have an account? <Link to="/signup">Sign up here</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}



