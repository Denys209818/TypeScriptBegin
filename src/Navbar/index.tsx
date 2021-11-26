import React from "react";

const Navbar:React.FC = () => 
{
    return (<>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <a className="navbar-brand">TypeScript</a>
                <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbar">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="/" className="nav-link active">Головна сторінка</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>);
}

export default Navbar;