import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../features/allTasks/allTasksSlice";
import { useEffect } from "react";
import ItemListRow from "./ItemListRow";

const ItemList = () => {
    const { isLoading, tasks } = useSelector((store) => store.allTasks);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks());
    }, []);
    if (isLoading) {
        return <h3 className="text-xl">Loading...</h3>;
    }

    return (
        <div>
            <h2 className="text-4xl text-center mb-3">Results</h2>
            <table className="w-full border-gray-900 border-2 text-xl table-fixed">
                <thead className="text-primary">
                    <tr>
                        <th className="p-2 w-1/5 border-r-4 border-primary">
                            Name
                        </th>
                        <th className="p-2 w-1/5  border-r-4 border-primary">
                            Due To
                        </th>
                        <th className="p-2 w-[15%]  border-r-4 border-primary">
                            Complete
                        </th>
                        <th className="p-2 w-[15%]  border-r-4 border-primary">
                            Favorite
                        </th>
                        <th>Tags</th>
                    </tr>
                </thead>
                <tbody className="text-center font-normal">
                    {tasks.map((task) => {
                        return <ItemListRow key={task.id} item={task} />;
                    })}
                </tbody>
            </table>
        </div>
    );
};
export default ItemList;
