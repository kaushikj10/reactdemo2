import { NavLink } from "react-router-dom"
export default function Navbar(){
    return(<><header>
            <nav className="navcontainer">
                <ul>
                    <li> <NavLink to={"/"}>Home</NavLink></li>
                    <li> <NavLink to={"/movies"}>Movies</NavLink></li>
                
                </ul>

            </nav>
        </header>
    </>)
}