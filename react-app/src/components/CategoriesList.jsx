import { useEffect, useState } from "react";
import { AddCategoryModal, CategoryItem } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../features/allCategories/allCategoriesSlice";

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
    }, []);

    if (isLoading) {
        return <h3 className="text-xl">Loading...</h3>;
    }

    return (
        <>
            {isOpen && <AddCategoryModal toggleIsOpen={toggleIsOpen} />}
            <h3 className="text-3xl text-center mb-3">Categories</h3>
            <button
                className="text-2xl px-3 py-1 bg-secondary-600 rounded-lg "
                onClick={toggleIsOpen}
            >
                Add
            </button>
            {categories.length === 0 ? (
                <h3 className="text-xl">No categories...</h3>
            ) : (
                <ul className="text-xl mt-2">
                    {categories.map((category) => {
                        return (
                            <CategoryItem
                                key={category.id}
                                itemValue={category.name}
                            ></CategoryItem>
                        );
                    })}
                </ul>
            )}
        </>
    );
};
export default CategoriesList;
