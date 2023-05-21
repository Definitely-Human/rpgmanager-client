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
        dispatch(saveTask({ id: selectedItemId, task: { title, content } }));
    };
    const toggleFavorite = () => {
        dispatch(handleChange({ name: "is_favorite", value: !is_favorite }));
        dispatch(saveTask({ id: selectedItemId, task: { is_favorite } }));
    };
    if (isLoading) return <h2 className="text-2xl">Loading...</h2>;
    return (
        <div className="p-3">
            <form onSubmit={handleSave}>
                <div className="flex content-around">
                    <input
                        type="text"
                        name="title"
                        value={title}
                        onChange={handleInput}
                        className="h-10 bg-transparent w-full text-primary px-3 text-2xl focus:outline-none"
                        maxLength="255"
                    />
                    <div className="flex content-around w-20 text-2xl">
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
                    className="w-full min-h-[100px] bg-transparent focus:outline-none px-3"
                    maxLength="4096"
                    rows="10"
                ></textarea>
                <button
                    type="submit"
                    className="py-2 px-3 bg-secondary rounded-md mt-3"
                >
                    Save
                </button>
            </form>
        </div>
    );
};
export default TaskEditWindow;
