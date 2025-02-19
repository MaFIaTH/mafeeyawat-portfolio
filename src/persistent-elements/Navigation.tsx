import {Link} from "react-router-dom";

function Navigation() {
    const navStyle = "hover:scale-120 hover:delay-50 transition ease-in-out";
  return (
    <nav className="flex justify-center min-w-screen z-50" style={{position: "sticky", top: 0}}>
        <div className="fixed flex justify-left max-sm:justify-center items-center min-w-screen bg-black text-center p-5">
            <ul className="fixed flex w-fit space-x-4 px-4 py-2 text-xl max-sm:text-lg">
                <li className={navStyle}><Link to="/home">Home</Link></li>
                <li className={navStyle}><Link to="/resume">Resume</Link></li>
                <li className={navStyle}><Link to="/projects">Projects</Link></li>
                <li className={navStyle}><Link to="/contact">Contact</Link></li>
            </ul>
            {/*<p className="fixed w-full px-10 text-right text-xl">Sometimes, simple is better</p>*/}
        </div>
    </nav>
  );
}

export default Navigation;