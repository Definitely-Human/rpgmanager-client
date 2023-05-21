import PropTypes from "prop-types";

const FormRowSelect = ({ labelText, name, value, handleChange, list }) => {
    return (
        <div className="form-row">
            <label
                htmlFor={name}
                className="cursor-pointer block mb-2 text-xl capitalize"
            >
                {labelText || name}
            </label>
            <select
                name={name}
                id={name}
                value={value}
                onChange={handleChange}
                className="w-full text-gray-900 p-2 bg-slate-200 text-lg rounded-md"
            >
                {list.length ? (
                    list.map((itemValue, index) => {
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
    );
};

FormRowSelect.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    labelText: PropTypes.string,
    list: PropTypes.array,
};

export default FormRowSelect;
