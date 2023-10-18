'use client';
import * as Recharts from 'recharts';
import { Avatar, IconButton, Icon } from '@mui/material';
import { useEffect, useState } from 'react';
import firebase from '@/utils/firebase';
import Bar from '../Bar';

export const CustomTooltip = () => (
    <div className="rounded-xl overflow-hidden tooltip-head">
        <div className="flex items-center justify-between p-2">
            <div className="">Revenue</div>
            <Icon path="res-react-dash-options" className="w-2 h-2" />
        </div>
        <div className="tooltip-body text-center p-3">
            <div className="text-white font-bold">$1300.50</div>
            <div className="">Revenue from 230 sales</div>
        </div>
    </div>
);

export default function Graph() {
    const [graphData, setGraphData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const snapshot = await db.collection('income').get();
            const data = snapshot.docs.map((doc) => doc.data());
            const transformedData = data.map((item) => ({
                name: item.date,
                revenue: item.amount,
                expectedRevenue: item.expectedAmount,
                sales: item.sales,
            }));
            setGraphData(transformedData);
        };

        fetchData();
    }, []);

    return (
        <div className="flex p-4 h-full flex-col gap-4">
            <div className="flex items-center">
                <div className="font-bold text-white">Your Work Summary</div>
                <div className="flex-grow" />
                <Icon path="res-react-dash-graph-range" className="w-4 h-4" />
            </div>
            <div className="flex-grow">
                <Bar />
            </div>
        </div>
    );
}