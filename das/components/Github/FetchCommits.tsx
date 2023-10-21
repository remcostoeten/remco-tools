'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';

const FetchCommits: React.FC = () => {
  const [commits, setCommits] = useState([]);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await axios.get(
          'https://api.github.com/repos/remcostoeten/remcostoeten/commits?per_page=20'
        );
        setCommits(response.data);
      } catch (error) {
        console.error('Error fetching commits:', error);
      }
    };

    fetchCommits();
  }, []);

  // Group by date and count commits
  const countCommitsByDate = () => {
    const counts = {};

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
    <div>
      <div id="chart">
        <ReactApexChart options={options} series={series} type="area" />
      </div>
      <h1>Last 20 Commits</h1>
      <ul>
        {commits.map((commit: any, index: number) => (
          <li key={index}>
            {commit.sha}: {commit.commit.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchCommits;
