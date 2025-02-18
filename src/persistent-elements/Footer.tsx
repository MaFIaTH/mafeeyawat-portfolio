import {fullName} from "../pages/HomePage.tsx";


function Footer() {
    return (
        <footer className="bg-black/50 text-white text-center p-5">
            <p>© {new Date().getFullYear()} {fullName}. All rights reserved.</p>
        </footer>
    );
}

export default Footer;