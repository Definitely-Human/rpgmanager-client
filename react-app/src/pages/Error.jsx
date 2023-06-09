import { Link } from "react-router-dom";
import { Logo } from "../components";

const Error = () => {
    return (
        <div className="dark:bg-gray-blue-800 h-screen dark:text-slate-100 font-semibold">
            <header className="h-20 p-4 border-b-2 border-gray-900 flex justify-between items-center  dark:bg-gray-blue-900">
                <Link to="/">
                    <Logo />
                </Link>
            </header>
            <main className="p-4">
                <h2 className="block text-center text-3xl">
                    Error <span className="text-primary">404</span>
                </h2>
                <h3 className="block text-center text-2xl">Page not found</h3>
                <h3 className="block text-center text-2xl text-secondary hover:text-secondary-600">
                    <Link to="/">Return to home</Link>
                </h3>
            </main>
        </div>
    );
};
export default Error;
