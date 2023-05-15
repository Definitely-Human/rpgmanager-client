const FormRow = ({ type, name, value, handleChange, labeText }) => {
    return (
        <div>
            <label htmlFor={name} className="cursor-pointer block mb-2 text-lg">
                {name}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                id={name}
                onChange={handleChange}
                className="h-9 rounded bg-slate-200 w-full"
            />
        </div>
    );
};
export default FormRow;
