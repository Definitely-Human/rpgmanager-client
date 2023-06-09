import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    deleteTask,
    getTask,
    handleChange,
    saveTask,
    createTask,
} from "../features/task/taskSlice";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { BsTrashFill, BsCheckAll, BsArrowRepeat } from "react-icons/bs";
import { convertAPIDateToString } from "../utils/dateTime";
import RewardWindow from "./RewardWindow";

const TaskEditWindow = () => {
    const { selectedItemId } = useSelector((store) => {
        return store.itemList;
    });
    const {
        isLoading,
        isEditing,
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
        if (isEditing) dispatch(getTask(selectedItemId));
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
        if (!isEditing) {
            dispatch(
                createTask({ task: { title, content, category, is_favorite } })
            );
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
    const toggleComplete = () => {
        dispatch(
            saveTask({
                id: selectedItemId,
                task: { is_complete: !is_complete },
            })
        );
    };
    const { categories } = useSelector((store) => store.allCategories);
    if (is_complete)
        return (
            <div className="p-3 overflow-auto min-h-0 ">
                <div className="flex justify-between">
                    <h3 className="text-primary text-3xl ">{title}</h3>
                    <button
                        type="button"
                        className="  hover:text-error text-2xl"
                        onClick={() => dispatch(deleteTask(selectedItemId))}
                    >
                        <BsTrashFill />
                    </button>
                </div>
                <p className="w-full my-2 whitespace-pre-wrap font-normal">
                    {content}
                </p>
                <div>
                    <span className="text-primary">Completed at: </span>
                    {completion_time}
                </div>
                <button
                    onClick={toggleComplete}
                    className="py-2 px-16 mx-auto block border-error border-4 rounded-md mt-3  hover:bg-gray-blue-800"
                >
                    Not complete
                </button>
            </div>
        );
    return (
        <div className="px-3 pt-3  overflow-auto min-h-0 ">
            <form onSubmit={handleSave}>
                <div className="flex justify-between">
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleInput}
                        placeholder="Title..."
                        className="h-10 bg-transparent w-full text-primary px-3 text-2xl focus:outline-none"
                        maxLength="99"
                    />
                    <div className="flex justify-between w-24 text-2xl">
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
                        <button
                            type="button"
                            className="w-full text-secondary-600"
                        >
                            {isLoading ? <BsArrowRepeat /> : <BsCheckAll />}
                        </button>
                    </div>
                </div>
                <textarea
                    placeholder="Content of the task..."
                    value={content}
                    name="content"
                    onChange={handleInput}
                    className="w-full min-h-[100px] font-normal bg-transparent focus:outline-none px-3 border-b-2 border-gray-blue-950 resize-none"
                    maxLength="4096"
                    rows="7"
                ></textarea>
                <div className="flex justify-between">
                    <span>
                        Tags:{" "}
                        {tags.map((tag) => {
                            return (
                                <span key={tag.id}>
                                    <span className="hover:underline">
                                        {tag.name}
                                    </span>
                                    <span>, </span>
                                </span>
                            );
                        })}
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
                <RewardWindow />
                <div className="flex justify-between items-center">
                    <button
                        type="submit"
                        className="py-2 px-10 border-secondary border-4 rounded-md mt-3  hover:bg-gray-blue-800"
                    >
                        Save
                    </button>
                    {isEditing && (
                        <>
                            <button
                                onClick={toggleComplete}
                                className="py-2 px-16 border-primary border-4 rounded-md mt-3  hover:bg-gray-blue-800"
                            >
                                Complete
                            </button>
                            <span className="text-gray-400 font-normal">
                                Last updated: <br />
                                {convertAPIDateToString(updated_at)}
                            </span>
                        </>
                    )}
                </div>
            </form>
        </div>
    );
};
export default TaskEditWindow;
