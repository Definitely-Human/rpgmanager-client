const ItemListRow = ({ item }) => {
    const dateOptions = {
        weekday: "short",
        month: "short",
        day: "numeric",
    };
    const dateTime = new Date(item.due_to.substring(0, item.due_to.length - 1));
    return (
        <tr className="border-2 border-gray-900">
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
export default ItemListRow;
