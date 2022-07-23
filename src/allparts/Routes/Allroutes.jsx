import Homepage from "../Homepage";
import LogIn from "../LogIn";
import SignUp from "../SignUp";
import { Routes, Route } from "react-router-dom";
function AllRoutes(){
    return (
        <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    )
}

export default AllRoutes;