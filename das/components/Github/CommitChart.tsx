import React from 'react';
import ReactApexChart from 'react-apexcharts';

interface Props {
    commits: any[];
}

const CommitChart: React.FC<Props> = ({ commits }) => {
    // Group by date and count commits
    const countCommitsByDate = () => {
        const counts: {[key: string]: number} = {};

        commits.forEach((commit: any) => {
            const date = new Date(commit.commit.author.date).toISOString().split('T')[0];
            counts[date] = (counts[date] || 0) + 1;
        });

        return counts;
    };

    const commitCounts = countCommitsByDate();
    const dates = Object.keys(commitCounts);
    const counts = Object.values(commitCounts);

    const options = {
        xaxis: {
            categories: dates
        }
    };

    const series = [
        {
            name: "Commits",
            data: counts
        }
    ];

    return (
        <div id="chart">
            <ReactApexChart options={options} series={series} type="area" />
        </div>
    );
};

export default CommitChart;