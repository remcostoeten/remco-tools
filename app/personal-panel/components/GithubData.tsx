import React, { useState, useEffect } from 'react';
import ProjectionsChart from './ProjectionsChart'; // Assuming this is the path to your component

function GithubDataContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        // Replace with your username and repository name
        const username = 'YOUR_GITHUB_USERNAME';
        const repo = 'YOUR_REPOSITORY_NAME';

        fetch(`https://api.github.com/repos/${username}/${repo}/stats/commit_activity`)
            .then(response => response.json())
            .then(data => {
                const formattedData = data.map(week => ({
                    date: new Date(week.week * 1000).toISOString().split('T')[0], // convert UNIX timestamp to YYYY-MM-DD format
                    commits: week.total
                }));
                setData(formattedData);
            });
    }, []);

    return <ProjectionsChart githubData={data} />;
}

export default GithubDataContainer;
