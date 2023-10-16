import { useMemo } from "react";

export function useCurrentPath() {
    const pageName = useMemo(() => {
        const path = window.location.pathname;
        const pathParts = path.split('/');
        return pathParts[pathParts.length - 1];
    }, []);

    return pageName;
}