export const linkVariants = {
    hover: {
        scale: 1.1,
        transition: {
            duration: 0.2,
        },
    },
    initial: {
        opacity: 0,
        y: 202,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            delay: 0.5,
        },
    },
};

export const containerVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            delay: 0.5,
            staggerChildren: 0.1,
        },
    },
};

export const leftSlideIn = {
    hidden: {
        opacity: 0,
        x: -100,
        pathLength: 0,
    },
    visible: {
        opacity: 1,
        x: 0,
        pathLength: 1,
        transition: {
            duration: 2.75,
            type: 'spring',
            stiffness: 500,
            damping: 50,
            ease: 'tween',
        },
    },
};
