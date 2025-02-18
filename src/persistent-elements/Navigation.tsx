import {Link} from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul className="fixed flex space-x-4 px-4 py-2 text-xl">
        <li className={"hover:scale-120 hover:delay-50"}><Link to="/home">Home</Link></li>
        <li className={"hover:scale-120 hover:delay-50"}><Link to="/projects">Projects</Link></li>
        <li className={"hover:scale-120 hover:delay-50"}><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;