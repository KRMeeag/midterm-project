import { useEffect } from "react";
import { useModal } from "../contexts/ModalContext";
import { Navigate } from "react-router";

export default function CatchLogin({ to }) {
    const { setIsLogInActive } = useModal();

    // Enables the log-in modal
    useEffect(() => {
        setIsLogInActive(true);
    }, []);

    // Sends user back to homepage
    return <Navigate to={to} replace />

}