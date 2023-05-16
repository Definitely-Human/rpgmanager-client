import PropTypes from "prop-types";

const FormRow = ({ type, name, value, handleChange, labelText }) => {
    return (
        <div>
            <label
                htmlFor={name}
                className="cursor-pointer block mb-2 text-xl capitalize"
            >
                {labelText || name}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                id={name}
                onChange={handleChange}
                className="h-9 rounded bg-slate-200 w-full text-gray-900 px-3 text-lg focus:outline-none focus:ring focus:ring-secondary-600"
            />
        </div>
    );
};

FormRow.propTypes = {
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func,
    labelText: PropTypes.string,
};

export default FormRow;
