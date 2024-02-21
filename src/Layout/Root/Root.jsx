import { Outlet } from "react-router-dom";
import Header from "../../Pages/Shared/Header/Header";

const Root = () => {
    return (
        <div className="mx-auto max-w-7xl px-4">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
    );
};

export default Root;