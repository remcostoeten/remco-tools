import React from "react";

export default function Bar({ gotdata }: { gotdata: (data: any) => void }) {
    function handleData(data: any) {
        const records = data.val();
        const keys = Object.keys(records);
        const chartdata: number[] = [];
        const chartlabels: string[] = [];
        console.log(keys);
        for (let i = 0; i < keys.length; i++) {
            const k = keys[i];
            const sys = records[k].systolicpressure;
            const dia = records[k].diastolicpressure;
            const time = records[k].time;
            chartdata.push(sys);
            chartlabels.push(time);
            console.log(sys, dia, time);
        }

        const ctx = document.getElementById("myChart") as HTMLCanvasElement;
        const mychart = new Chart(ctx, {
            type: "line",
            data: {
                labels: chartlabels,
                datasets: [
                    {
                        label: "blood pressure graph",
                        data: chartdata,
                    },
                ],
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            ticks: {
                                beginAtZero: true,
                            },
                        },
                    ],
                    xAxes: [
                        {
                            time: {
                                unit: "hour",
                            },
                        },
                    ],
                },
            },
        });
    }

    return (
        <></>
    )
}
