import HomePage from "./pages/HomePage.tsx";
import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import './App.css';
import Layout from "./layout/Layout.tsx";
import ContactPage from "./pages/ContactPage.tsx";

function App() {
    return (
        <Router>
            <Routes>
                {/* Main layout wraps all routes */}
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="/home" />} />
                    {/* Nested routes will render inside the <Outlet /> of Layout */}
                    <Route path="home" element={<HomePage />} /> {/* Default home page */}
                    {/* <Route path="projects" element={<ProjectsPage />} /> */}
                    <Route path="contact" element={<ContactPage />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;