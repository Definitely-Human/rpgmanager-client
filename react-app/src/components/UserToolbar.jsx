import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser, logoutUser } from "../features/user/userSlice";
import charIcon from "../assets/icons/swordsman.png";
import { FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const UserToolbar = () => {
    const { isLoading, user } = useSelector((store) => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        dispatch(getUser());
    }, [dispatch]);
    if (isLoading) return <h2 className="text-2xl">Loading...</h2>;
    return (
        <div className="flex items-center">
            <h5>Hello, {user?.username}</h5>
            <img
                src={charIcon}
                className="w-12 rounded-full border-2 border-gray-900 mx-2 "
                alt="profile image"
            />
            <nav
                data-test="user-toolbar-menu"
                className="text-3xl relative inline-block group"
            >
                <FiChevronDown />
                <menu
                    role="menu"
                    className="hidden hover:block group-hover:block w-48 bg-transparent pt-14 absolute z-10 right-0 top-[-10px]  text-xl"
                >
                    <li className="bg-gray-blue-900 hover:bg-gray-blue-950">
                        <button
                            type="button"
                            onClick={() => {
                                navigate("/profile");
                            }}
                            className="w-full  py-2 px-3"
                        >
                            Account
                        </button>
                    </li>
                    <li className="bg-error hover:bg-error-600">
                        <button
                            type="button"
                            onClick={() => {
                                dispatch(logoutUser());
                                navigate("/");
                            }}
                            className="w-full  py-2 px-3"
                        >
                            Logout
                        </button>
                    </li>
                </menu>
            </nav>
        </div>
    );
};
export default UserToolbar;
