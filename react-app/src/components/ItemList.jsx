import { useDispatch, useSelector } from "react-redux";
import { getAllTasks } from "../features/allTasks/allTasksSlice";
import { useEffect } from "react";
import { emptyNewTask } from "../features/task/taskSlice";
import ItemListRow from "./ItemListRow";
import { setSelectedItem } from "../features/itemList/itemListSlice";

const ItemList = () => {
    const { isLoading, tasks } = useSelector((store) => store.allTasks);
    const { selectedCategory } = useSelector((store) => store.allCategories);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllTasks());
    }, [dispatch]);
    if (isLoading) {
        return <h3 className="text-3xl text-center">Loading...</h3>;
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
                    {selectedCategory
                        ? tasks
                              .filter((task) => {
                                  return task.category === selectedCategory;
                              })
                              .map((task) => {
                                  return (
                                      <ItemListRow key={task.id} item={task} />
                                  );
                              })
                        : tasks.map((task) => {
                              return <ItemListRow key={task.id} item={task} />;
                          })}
                </tbody>
            </table>
            <button
                type="button"
                className="py-2 px-10 border-secondary border-4 rounded-md mt-3 hover:bg-gray-blue-800"
                onClick={() => {
                    dispatch(emptyNewTask());
                    dispatch(setSelectedItem({ id: 0, type: "task" }));
                }}
            >
                Add Task
            </button>
        </div>
    );
};
export default ItemList;
