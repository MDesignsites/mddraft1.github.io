import Logo from "../assets/logoRevised1.png"
import { Link } from "react-router-dom"

const Navbar = ()=> {
    return (
        <div className="flex justify-around px-10 py-4 bg-deep-navy-blue gap-20">
            <img src={Logo} alt="Logo"  className="w-3/12 drop-shadow-3xl"/>
            <ul className="flex">
                <Link to ="/"><li className="p-5 text-white font-Oswald uppercase">Home</li></Link>
                <Link to ="/about"><li className="p-5 text-white font-Oswald uppercase">About</li></Link>
                <Link to = "/products"><li className="p-5 text-white font-Oswald uppercase">Products</li></Link>
                <Link to = "/videos"><li className="p-5 text-white font-Oswald uppercase">Videos</li></Link>
                <Link to = "/contact"><li className="p-5 text-white font-Oswald uppercase">Contact</li></Link>
            </ul>
        </div>
    )
}

export default Navbar