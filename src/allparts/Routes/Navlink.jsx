import { NavLink } from "react-router-dom";

function Navlink(){
    return (
        <>
        <NavLink to="/home" key="/home" />
        <NavLink to="/login" key="/login" />
        <NavLink to="/signup" key="/signup" />
        </>
    )
}