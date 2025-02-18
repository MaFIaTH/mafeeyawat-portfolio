import { Outlet } from 'react-router-dom';
import Navigation from "../persistent-elements/Navigation.tsx";
import Footer from "../persistent-elements/Footer.tsx";

function Layout() {
    return (
        <div>
            {/* Navigation bar that persists across all routes */}
            <Navigation />
            <main>
                {/* Current page content is rendered here */}
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default Layout;