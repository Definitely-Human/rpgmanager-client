import { useEffect, useState } from "react";
import { AddCategoryModal, CategoryItem } from "../components";
import { useDispatch, useSelector } from "react-redux";
import {
    getAllCategories,
    setSelectedCategory,
} from "../features/allCategories/allCategoriesSlice";
import { HiOutlineFolderPlus } from "react-icons/hi2";
import { SlRefresh } from "react-icons/sl";
import { TiSortAlphabetically } from "react-icons/ti";

const CategoriesList = () => {
    const { categories, isLoading } = useSelector(
        (store) => store.allCategories
    );
    const [isOpen, setIsOpen] = useState(false);
    const dispatch = useDispatch();
    const toggleIsOpen = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        dispatch(getAllCategories());
    }, [dispatch]);

    if (isLoading) {
        return <h3 className="text-xl">Loading...</h3>;
    }

    return (
        <>
            {isOpen && <AddCategoryModal toggleIsOpen={toggleIsOpen} />}
            <div className="flex justify-end">
                <button
                    className="text-2xl px-3 py-1 bg-gray-blue-900 border-2 border-gray-900 rounded-lg "
                    onClick={() => dispatch(setSelectedCategory({ id: null }))}
                >
                    <TiSortAlphabetically />
                </button>
                <button
                    className="text-2xl px-3 py-1 bg-gray-blue-900 border-2 border-gray-900 rounded-lg "
                    onClick={toggleIsOpen}
                >
                    <HiOutlineFolderPlus />
                </button>
                <button
                    className="text-2xl px-3 py-1 bg-gray-blue-900 border-2 border-gray-900 rounded-lg "
                    onClick={() => {
                        dispatch(getAllCategories());
                    }}
                >
                    <SlRefresh />
                </button>
            </div>
            {categories.length === 0 ? (
                <h3 className="text-xl">No categories...</h3>
            ) : (
                <ul className="text-xl mt-2">
                    {categories
                        .filter((category) => category.subcategory_of === null)
                        .map((category) => {
                            return (
                                <CategoryItem
                                    key={category.id}
                                    item={category}
                                ></CategoryItem>
                            );
                        })}
                </ul>
            )}
        </>
    );
};
export default CategoriesList;
