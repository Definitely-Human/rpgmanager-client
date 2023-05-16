import FormRow from "./FormRow";
import { useState } from "react";

const initialState = {
    name: "",
    description: "",
    subcategory_of: null,
};

const AddCategoryModal = ({ toggleIsOpen }) => {
    const [values, setValues] = useState(initialState);
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-slate-800 bg-opacity-70 z-10 flex item-center justify-center">
            <div className="bg-gray-blue-700 p-4 h-min my-auto rounded-xl border-x-2 border-x-slate-900">
                <h3 className="text-3xl text-center text-primary mb-2">
                    Add Category
                </h3>
                <FormRow
                    name="name"
                    type="text"
                    handleChange={setValues}
                    value={values.name}
                />
                <FormRow
                    name="description"
                    type="text"
                    handleChange={setValues}
                    value={values.description}
                />
                <div className="mt-4 flex justify-between">
                    <button
                        onClick={toggleIsOpen}
                        className="py-2 px-3 bg-secondary rounded-md "
                    >
                        Add
                    </button>
                    <button
                        onClick={toggleIsOpen}
                        className="py-2 px-3 bg-error rounded-md"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};
export default AddCategoryModal;
