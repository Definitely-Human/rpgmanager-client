import { useEffect, useState } from "react";
import { BsFolder2, BsPencil } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { setSelectedCategory } from "../features/allCategories/allCategoriesSlice";

const CategoryItem = ({ item }) => {
    const { name, id } = item;
    const { categories, selectedCategory } = useSelector(
        (store) => store.allCategories
    );
    const [subCategories, setSubCategories] = useState([]);
    const dispatch = useDispatch();
    useEffect(() => {
        const newSubcategories = categories.filter((category) => {
            return category.subcategory_of === id;
        });
        setSubCategories(newSubcategories);
    }, [categories, id]);
    return (
        <li className="capitalize font-normal  grid  grid-rows-[40px_1fr]">
            <div
                onClick={() => dispatch(setSelectedCategory({ id }))}
                className={`grid grid-cols-[30px_1fr_30px_30px] border-b-2 hover:bg-gray-blue-700
                 border-gray-blue-900 group cursor-pointer p-1 items-center ${
                     id === selectedCategory ? "text-primary" : ""
                 }`}
            >
                <BsFolder2 />
                <span className={`overflow-x-hidden `}>{name}</span>
                <div className="hidden group-hover:block text-gray-200 hover:text-primary">
                    <BsPencil />
                </div>
                <div className="hidden group-hover:block text-gray-200 hover:text-error">
                    <RiDeleteBin7Line />
                </div>
            </div>
            {subCategories.length > 0 ? (
                <div className="  pl-5 ">
                    <ul>
                        {subCategories.map((category) => {
                            return (
                                <CategoryItem
                                    key={category.id}
                                    item={category}
                                />
                            );
                        })}
                    </ul>
                </div>
            ) : (
                <></>
            )}
        </li>
    );
};

CategoryItem.propTypes = {
    item: PropTypes.object,
};

export default CategoryItem;
