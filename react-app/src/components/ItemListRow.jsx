import PropTypes from "prop-types";
import { setSelectedItem } from "../features/itemList/itemListSlice";
import { useDispatch } from "react-redux";

const ItemListRow = ({ item }) => {
    const dispatch = useDispatch();
    const dateOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
    };
    const dateTime = new Date(item.due_to.substring(0, item.due_to.length - 1));
    return (
        <tr
            className="border-2 border-gray-900 cursor-pointer"
            onClick={() =>
                dispatch(setSelectedItem({ id: item.id, type: "task" }))
            }
        >
            <td className="py-1">{item.title}</td>
            <td>
                {dateTime.toLocaleDateString("en-gb", dateOptions) +
                    " " +
                    dateTime.toLocaleTimeString("en-gb", {
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
            </td>
            <td>{item.is_complete ? "Yes" : "No"}</td>
            <td>{item.is_favorite ? "Yes" : "No"}</td>
            <td>{item.tags.map((tag) => tag.name + ", ")}</td>
        </tr>
    );
};

ItemListRow.propTypes = {
    item: PropTypes.object,
};

export default ItemListRow;
