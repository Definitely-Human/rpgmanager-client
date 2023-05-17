import { BsFolder2, BsPencil } from "react-icons/bs";

const CategoryItem = ({ itemValue }) => {
    return (
        <li className="capitalize font-normal border-b-2 border-gray-blue-900 pb-1 grid grid-cols-[30px_1fr_30px] items-center group cursor-pointer">
            {" "}
            <BsFolder2 />
            {itemValue}
            <div className="hidden group-hover:block ">
                <BsPencil />
            </div>
        </li>
    );
};
export default CategoryItem;
