import GlobalSearch from "./GlobalSearch";
import Logo from "./Logo";
import UserToolbar from "./UserToolbar";

const TopBar = () => {
    return (
        <header className="flex justify-around items-center bg-gray-blue-700">
            <Logo />
            <GlobalSearch />
            <UserToolbar />
        </header>
    );
};
export default TopBar;
