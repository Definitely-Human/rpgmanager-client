import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteTask,
    getTask,
    handleChange,
    saveTask,
} from "../features/task/taskSlice";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTrashFill } from "react-icons/bs";
import {
    convertFromAPIStringToDate,
    shortDateOptions,
} from "../utils/dateTime";
import FormRowSelect from "./FormRowSelect";

const TaskEditWindow = () => {
    const { selectedItemId } = useSelector((store) => {
        return store.itemList;
    });
    const {
        isLoading,
        title,
        content,
        is_complete,
        is_favorite,
        due_to,
        updated_at,
        tags,
        category,
        completion_time,
    } = useSelector((store) => store.task);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTask(selectedItemId));
    }, [selectedItemId, dispatch]);
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
    };
    const handleSave = (e) => {
        e.preventDefault();
        if (!title) {
            toast.error("Title cannot be empty.");
            return;
        }
        dispatch(
            saveTask({ id: selectedItemId, task: { title, content, category } })
        );
    };
    const toggleFavorite = () => {
        dispatch(
            saveTask({
                id: selectedItemId,
                task: { is_favorite: !is_favorite },
            })
        );
    };
    const dateTime = convertFromAPIStringToDate(updated_at);
    const { categories } = useSelector((store) => store.allCategories);
    if (isLoading) return <h2 className="text-2xl">Loading...</h2>;
    return (
        <div className="p-3">
            <form onSubmit={handleSave}>
                <div className="flex justify-between">
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleInput}
                        className="h-10 bg-transparent w-full text-primary px-3 text-2xl focus:outline-none"
                        maxLength="255"
                    />
                    <div className="flex justify-between w-20 text-2xl">
                        <button
                            type="button"
                            className="w-full hover:text-secondary"
                            onClick={toggleFavorite}
                        >
                            {is_favorite ? <AiFillStar /> : <AiOutlineStar />}
                        </button>
                        <button
                            type="button"
                            className="w-full hover:text-error"
                            onClick={() => dispatch(deleteTask(selectedItemId))}
                        >
                            <BsTrashFill />
                        </button>
                    </div>
                </div>
                <textarea
                    placeholder="Content of the task..."
                    value={content}
                    name="content"
                    onChange={handleInput}
                    className="w-full min-h-[100px] bg-transparent focus:outline-none px-3 border-b-2 border-gray-blue-950 resize-none"
                    maxLength="4096"
                    rows="7"
                ></textarea>
                <div className="flex justify-between">
                    <span>
                        Tags:{" "}
                        {tags.map((tag) => (
                            <span key={tag.id} className="hover:underline">
                                {tag.name + ", "}
                            </span>
                        ))}
                    </span>
                    <select
                        name="category"
                        value={category || ""}
                        onChange={handleInput}
                        className="w-48 text-gray-400 bg-gray-blue-700 p-2  rounded-md"
                    >
                        {categories.length ? (
                            categories.map((itemValue, index) => {
                                return (
                                    <option key={index} value={itemValue.id}>
                                        {itemValue.name}
                                    </option>
                                );
                            })
                        ) : (
                            <option value="none">none</option>
                        )}
                    </select>
                </div>
                <div className="flex justify-between items-center">
                    <button
                        type="submit"
                        className="py-2 px-10 border-secondary border-4 rounded-md mt-3"
                    >
                        Save
                    </button>
                    <button className="py-2 px-16 border-primary border-4 rounded-md mt-3">
                        Complete
                    </button>
                    <span className="text-gray-400 font-normal">
                        Last updated: <br />
                        {" " +
                            dateTime.toLocaleDateString(
                                "en-gb",
                                shortDateOptions
                            ) +
                            " " +
                            dateTime.toLocaleTimeString("en-gb", {
                                hour: "2-digit",
                                minute: "2-digit",
                            })}
                    </span>
                </div>
            </form>
        </div>
    );
};
export default TaskEditWindow;
