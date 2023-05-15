import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";

const initialState = {
    name: "",
    email: "",
    password: "",
    isMember: true,
};

const Register = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target);
    };
    return (
        <main className="h-screen grid items-center dark:bg-gray-blue-900 text-slate-100">
            <form
                onSubmit={handleSubmit}
                className="w-[400px] dark:bg-gray-blue-700 border-gray-900 border-x-2 mx-auto p-8 rounded-xl flex flex-col gap-3"
            >
                <div className=" place-self-center ">
                    <Logo />
                </div>
                {/* Email field */}
                <FormRow
                    type="text"
                    name="name"
                    value={values.name}
                    handleChange={handleChange}
                />
                {/* Email field */}
                <FormRow
                    type="email"
                    name="email"
                    value={values.email}
                    handleChange={handleChange}
                />
                {/* Password field */}
                <FormRow
                    type="password"
                    name="password"
                    value={values.password}
                    handleChange={handleChange}
                />
                <button
                    type="submit"
                    className="bg-secondary rounded py-2 px-8 mt-6 place-self-center hover:bg-secondary-600 border-green-900 border-x-2"
                >
                    Submit
                </button>
            </form>
        </main>
    );
};
export default Register;
