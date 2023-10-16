'use';
import { useState, useEffect, Ref } from 'react';

interface Options extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

function useInView(options: Options): [Ref<any>, boolean] {
    const [ref, setRef] = useState<Element | null>(null);
    const [isVisible, setIsVisible] = useState<boolean>(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            // If the element is in view
            if (entry.isIntersecting) {
                setIsVisible(true);
                // If we should freeze the observer once the element is visible
                if (options.freezeOnceVisible) {
                    observer.unobserve(entry.target);
                }
            } else {
                setIsVisible(false);
            }
        }, options);

        if (ref) {
            observer.observe(ref);
        }

        return () => {
            if (ref) {
                observer.unobserve(ref);
            }
        };
    }, [ref, options]);

    return [setRef, isVisible];
}

export default useInView;
