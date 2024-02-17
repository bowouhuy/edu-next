import { authClientMiddleware } from "@/utils/auth";
import { useEffect } from "react"

const ClientMiddleware = ({ children }: { children: React.ReactNode }) => {
    useEffect(() => {
        authClientMiddleware()
    });

    return (
        <>
            {children}
        </>
    )
}

export default ClientMiddleware;