import { Outlet } from "react-router-dom";

export default function Navbar() {
    return( 
        <>
            <header>
                <h1><a href="/">Navbar</a></h1>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item"><a className="nav-link" href="/">Login</a></li>
                        <li className="nav-item"><a className="nav-link" href="/dashboard">Dashboard</a></li>
                    </ul>
                </nav>
            </header>
            <Outlet />
        </>
    )
}