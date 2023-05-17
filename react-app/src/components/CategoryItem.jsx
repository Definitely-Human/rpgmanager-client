import { useEffect, useState } from "react";
import { BsFolder2, BsPencil } from "react-icons/bs";
import { RiDeleteBin7Line } from "react-icons/ri";
import { useSelector } from "react-redux";

const CategoryItem = ({ item }) => {
    const { name, subcategory_of, id } = item;
    const { categories } = useSelector((store) => store.allCategories);
    const [subCategories, setSubCategories] = useState([]);
    useEffect(() => {
        const newSubcategories = categories.filter((category) => {
            return category.subcategory_of === id;
        });
        setSubCategories(newSubcategories);
    }, [categories]);
    return (
        <li className="capitalize font-normal  grid  grid-rows-[40px_1fr]  ">
            <div className="grid grid-cols-[30px_1fr_30px_30px] border-b-2 hover:bg-gray-blue-700 border-gray-blue-900 group cursor-pointer p-1 items-center">
                <BsFolder2 />
                <span className="overflow-x-hidden">{name}</span>
                <div className="hidden group-hover:block hover:bg-gray-blue-900">
                    <BsPencil />
                </div>
                <div className="hidden group-hover:block hover:bg-gray-blue-900 ">
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
export default CategoryItem;
