'use client';
import React, { useEffect, useState } from 'react';

const PercentageLoader: React.FC<{ percentage: number }> = ({ percentage }) => {
    const [loaderWidth, setLoaderWidth] = useState(0);

    useEffect(() => {
        setLoaderWidth(percentage);
    }, [percentage]);

    return (
        <div className="relative w-full h-4 bg-gray-200 rounded">
            <div
                className="absolute top-0 left-0 h-full bg-blue-500 rounded"
                style={{ width: `${loaderWidth}%` }}
            ></div>
        </div>
    );
};

export default PercentageLoader;
