import { useState } from "react";
import { AddCategoryModal } from "../components";

const CategoriesList = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };
    return (
        <>
            {isOpen && <AddCategoryModal toggleIsOpen={toggleIsOpen} />}
            <h3 className="text-3xl text-center mb-3">Categories</h3>
            <button
                className="text-2xl px-3 py-1 bg-secondary-600 rounded-lg"
                onClick={toggleIsOpen}
            >
                Add
            </button>
            <ul className="text-xl ">
                <li>default 1</li>
                <li>default 2</li>
                <li>default 3</li>
            </ul>
        </>
    );
};
export default CategoriesList;
