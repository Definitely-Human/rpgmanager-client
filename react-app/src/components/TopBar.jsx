import GlobalSearch from "./GlobalSearch";
import Logo from "./Logo";
import UserToolbar from "./UserToolbar";

const TopBar = () => {
    return (
        <header className="flex justify-between items-center bg-gray-blue-700 px-12">
            <Logo />
            <GlobalSearch />
            <UserToolbar />
        </header>
    );
};
export default TopBar;
