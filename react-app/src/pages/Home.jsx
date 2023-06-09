import { Link } from "react-router-dom";
import { Logo } from "../components";

const Home = () => {
    return (
        <div className="dark:bg-gray-blue-800 h-screen dark:text-slate-100 font-semibold">
            <header className="h-20 p-4 border-b-2 border-gray-900 flex justify-between items-center  dark:bg-gray-blue-900">
                <Logo />
                <span className="hover:text-primary text-2xl">
                    <Link to="/auth">Login/Register</Link>
                </span>
            </header>
            <main className="p-4">Please login in order to use this app.</main>
        </div>
    );
};
export default Home;
