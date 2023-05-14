import CategoriesWindow from "../components/CategoriesWindow";
import TopBar from "../components/TopBar";

const Play = () => {
    return (
        <div className="grid grid-rows-[60px_minmax(300px,_1fr)] h-screen dark:text-slate-100">
            <TopBar />

            <div className="grid grid-cols-[1fr_3fr_1fr]">
                <div className="bg-gray-blue-800 border-r-2 border-gray-900">
                    <CategoriesWindow />
                </div>
                <div className="bg-gray-blue-900"></div>
                <div className="bg-gray-blue-800 border-l-2 border-gray-900"></div>
            </div>
        </div>
    );
};
export default Play;
