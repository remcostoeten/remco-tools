'use client';
import { useEffect, useMemo, useState } from "react";

export function useCurrentPath() {
    const [pageName, setPageName] = useState("");

    useEffect(() => {
        const updatePageName = () => {
            const path = window.location.pathname;
            const pathParts = path.split("/");
            setPageName(pathParts[pathParts.length - 1]);
        };

        updatePageName();

        window.addEventListener("popstate", updatePageName);

        return () => {
            window.removeEventListener("popstate", updatePageName);
        };
    }, [pageName, setPageName, useCurrentPath]);

    return pageName;
}
