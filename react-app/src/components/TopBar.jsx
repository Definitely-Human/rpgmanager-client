import GlobalSearch from "./GlobalSearch";
import UserToolbar from "./UserToolbar";

const TopBar = () => {
    return (
        <header className="flex justify-around items-center bg-gray-blue-700">
            <h1 className="text-4xl text-slate-100 mb-2">
                <span className="text-primary">RPG</span> Manager
            </h1>
            <GlobalSearch />
            <UserToolbar />
        </header>
    );
};
export default TopBar;
