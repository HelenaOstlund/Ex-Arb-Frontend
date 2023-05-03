import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectetRoute({ children }) {
    const checkJwt = localStorage.getItem("token")

    if (!checkJwt) {
        return <Navigate to="/" />
    }
    return children

}