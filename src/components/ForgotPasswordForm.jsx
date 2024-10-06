import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

export default function ForgotPasswordForm() {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card p-4 shadow">
                        <h2 className="text-center mb-4">Forgot Password</h2>

                        <form>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                            </div>

                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Send Reset Link</button>
                            </div>
                        </form>

                        <p className="text-center mt-3">
                            <a href="/login">Back to Login</a> {/* Back to Login Link */}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}



