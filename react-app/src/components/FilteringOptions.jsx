import { ImCheckboxUnchecked, ImCheckboxChecked } from "react-icons/im";

const FilteringOptions = () => {
    return (
        <div className="grid grid-cols-2 grid-rows-4">
            <button className="flex items-center ">
                <ImCheckboxChecked />
                <span className="ml-2"></span>Tasks
            </button>
            <button className="flex items-center ">
                <ImCheckboxUnchecked />
                <span className="ml-2"></span>Lists
            </button>
            <button className="flex items-center ">
                <ImCheckboxUnchecked />
                <span className="ml-2"></span>Routines
            </button>
            <button className="flex items-center ">
                <ImCheckboxUnchecked />
                <span className="ml-2"></span>Notes
            </button>
        </div>
    );
};
export default FilteringOptions;
