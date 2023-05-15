// import { useState, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Home, Play, Profile } from "./pages";

function App() {
    // const token = "00d96b8d7c2a19530b776efe546c55c11eb4cbde";
    // const title = "react";
    // useEffect(() => {
    //     axios
    //         .get("http://localhost:8000/api/manager/tasks", {
    //             headers: { Authorization: `Token ${token}` },
    //         })
    //         .then((res) => {
    //             console.log(res);
    //         });
    // }, []);
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />
                    <Route path="play" element={<Play />} />
                    <Route path="profile" element={<Profile />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
