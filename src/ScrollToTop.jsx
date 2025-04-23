import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/") return;

        if ("scrollRestoration" in window.history) {
            window.history.scrollRestoration = "manual";
        }

        requestAnimationFrame(() => {
            window.scrollTo(0, 0);
        });

    }, [pathname]);

    return null;
}
