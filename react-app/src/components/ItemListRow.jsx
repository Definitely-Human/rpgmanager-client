import PropTypes from "prop-types";
import { setSelectedItem } from "../features/itemList/itemListSlice";
import { useDispatch } from "react-redux";
import { convertAPIDateToString } from "../utils/dateTime";

const ItemListRow = ({ item }) => {
    const dispatch = useDispatch();
    return (
        <tr
            className="border-2 border-gray-900 cursor-pointer hover:bg-gray-blue-800"
            onClick={() =>
                dispatch(setSelectedItem({ id: item.id, type: "task" }))
            }
        >
            <td className="py-1">{item.title}</td>
            <td>
                {item.due_to ? convertAPIDateToString(item.due_to) : "Not set"}
            </td>
            <td>
                {item.is_complete ? (
                    <span className="text-secondary">Yes</span>
                ) : (
                    "No"
                )}
            </td>
            <td>{item.is_favorite ? "Yes" : "No"}</td>
            <td>{item.tags.map((tag) => tag.name + ", ")}</td>
        </tr>
    );
};

ItemListRow.propTypes = {
    item: PropTypes.object,
};

export default ItemListRow;
