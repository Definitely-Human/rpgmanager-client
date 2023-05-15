import { useState, useEffect } from "react";
import { Logo, FormRow } from "../components";

const initialState = {
    username: "",
    email: "",
    password: "",
    isMember: true,
};

const Register = () => {
    const [values, setValues] = useState(initialState);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { username, email, password, isMember } = values;
        if (!email || !password || (!isMember && !username)) {
            console.log("Please fill out all fields.");
        }
    };

    const toggleMember = () => {
        setValues({ ...values, isMember: !values.isMember });
    };

    return (
        <main className="font-semibold h-screen grid items-center dark:bg-gray-blue-900 text-slate-100 min-h-[600px]">
            <form
                onSubmit={handleSubmit}
                className="w-[400px] dark:bg-gray-blue-700 border-gray-900 border-x-2 mx-auto p-8 rounded-xl flex flex-col gap-3 drop-shadow-xl"
            >
                <div className=" place-self-center ">
                    <Logo />
                </div>
                <h3 className="place-self-center text-3xl text-secondary-400 mt-3">
                    {values.isMember ? "Login" : "Register"}
                </h3>
                {/* Email field */}
                {!values.isMember && (
                    <FormRow
                        type="text"
                        name="username"
                        value={values.username}
                        handleChange={handleChange}
                    />
                )}
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
                <p className="place-self-center mt-2">
                    {values.isMember
                        ? "Not a member yet?"
                        : "Already a member?"}
                    <button
                        type="button"
                        onClick={toggleMember}
                        className="text-primary pl-3"
                    >
                        {values.isMember ? "Register" : "Login"}
                    </button>
                </p>
            </form>
        </main>
    );
};
export default Register;
