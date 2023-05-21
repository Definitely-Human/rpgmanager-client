import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Error, Home, Play, Profile, Register, ProtectedRoute } from "./pages";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Home />} />

                    <Route
                        path="play"
                        element={
                            <ProtectedRoute>
                                <Play />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="auth" element={<Register />} />
                    <Route path="*" element={<Error />} />
                </Route>
            </Routes>
            <ToastContainer position="top-center" />
        </BrowserRouter>
    );
}

export default App;
