import { useSelector } from "react-redux";
import TaskEditWindow from "./TaskEditWindow";

const EditorSelector = () => {
    const { selectedItemType } = useSelector((store) => store.itemList);
    if (selectedItemType == "task") return <TaskEditWindow />;
};
export default EditorSelector;
