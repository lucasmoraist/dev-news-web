import { useLocation } from "react-router-dom"

export function AuthForm() {
    const location = useLocation();
    return (
        <>
            {location.pathname === "/auth/signup" ? (
                <div></div>
            ) : (
                <div></div>
            )}
        </>
    )
}