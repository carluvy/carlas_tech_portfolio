import { Navigate, useLocation } from "react-router-dom"
import App from "../App";
import Home from "./Home";
import HomePage from "./Home";

const Index: React.FC = () => {
    const location = useLocation();

    const renderContent = () => {
        if (location.pathname === '/') {
            return <Navigate to= "/home" replace/>;
    }

    const renderPage = () => {
        if (location.pathname === '/home') {
            return <HomePage/>;
        }
        // if (location.pathname ==='/about') {
        //     return <HomePage/>;
        // }

        // if (location.pathname === '/skills') {
        //     return <Skills/>;
        // }

        // if (location.pathname === '/projects') {
        //     return <Projects/>;
        // }

        return <Home/>;
    };

    return (
        <div className="flex h-screen">
            <div className="flex-1 overflow-auto">
                {renderPage()}
            </div>
        </div>
    )
};
return renderContent();

return (
    <App>
        
    </App>
)

};
export default Index;