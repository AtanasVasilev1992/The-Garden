import { Link } from 'react-router-dom';
import './Register.css';

export default function Register() {
    return (
        <>
            <div className="container-fluid py-5">
                <div className="container">
                    <div className="mx-auto text-left mb-5" style={{ maxWidth: '500px' }}>
                        <h1 className="display-5">Register</h1>
                    </div>
                    <div className="row g-0">
                        <div className="col-lg-7">
                            <div className="bg-primary h-100 p-5">
                                <form>
                                    <div className="row g-3">
                                        
                                        <div className="col-12">
                                        <label htmlFor="email">Email:</label>
                                            <input type="email" name="email" className="form-control bg-light border-0 px-4" placeholder="email@example.com" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-12">
                                        <label  htmlFor="password">Password:</label>
                                            <input type="password" name="password" className="form-control bg-light border-0 px-4" placeholder="******" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-12">
                                        <label  htmlFor="rePassword">Repeat Password:</label>
                                            <input type="password" name="rePassword" className="form-control bg-light border-0 px-4" placeholder="******" style={{ height: '55px' }} />
                                        </div>
                                        <div className="col-3">
                                            <button className="btn btn-secondary w-100 py-3" type="submit">Register</button>
                                        </div>
                                        <p className="field">
                                           <span>If you already have a profile click <Link className='tag' to="/login">here</Link> !</span>
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}