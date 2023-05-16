import FormRow from "./FormRow";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import FormRowSelect from "./FormRowSelect";
import {
    handleChange,
    clearValues,
    createCategory,
} from "../features/category/categorySlice";

const AddCategoryModal = ({ toggleIsOpen }) => {
    const { isLoading, categoryId, isEditing, name, subcategory_of } =
        useSelector((store) => store.category);
    const dispatch = useDispatch();
    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        dispatch(handleChange({ name, value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name) {
            toast.error("Please fill out name.");
            return;
        }
        dispatch(createCategory({ name, subcategory_of }));
    };
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-800 bg-opacity-70 z-10 flex item-center justify-center">
            <form className="bg-gray-blue-700 p-4 h-min my-auto rounded-xl border-x-2 border-x-slate-900">
                <h3 className="text-3xl text-center text-primary mb-2">
                    Add Category
                </h3>
                <FormRow
                    name="name"
                    type="text"
                    handleChange={handleInput}
                    value={name}
                />
                <FormRowSelect
                    name="subcategory_of"
                    value={subcategory_of}
                    handleChange={handleInput}
                    list={[]}
                />
                <div className="mt-4 flex justify-between">
                    <button
                        type="submit"
                        onClick={handleSubmit}
                        className="py-2 px-3 bg-secondary rounded-md "
                    >
                        Add
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            dispatch(clearValues());
                            toggleIsOpen();
                        }}
                        value={subcategory_of}
                        className="py-2 px-3 bg-error rounded-md"
                    >
                        Close
                    </button>
                </div>
            </form>
        </div>
    );
};
export default AddCategoryModal;
