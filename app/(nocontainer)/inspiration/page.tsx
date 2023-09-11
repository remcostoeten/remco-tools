'use client';
import React, { useState, useEffect } from 'react';
import data from '@/config/inspiration.json';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

const InspirationTable: React.FC = () => {
    const [filter, setFilter] = useState('');
    const [sortDirection, setSortDirection] = useState<'asc' | 'desc' | null>(
        null
    );
    const [sortColumn, setSortColumn] = useState('projectType');
    const [appliedFilters, setAppliedFilters] = useState<{
        projectType: string;
    }>({ projectType: '' });
    const [columnVisibility, setColumnVisibility] = useState<{
        projectType: boolean;
        name: boolean;
        // Add other columns here
    }>({
        projectType: true,
        name: true,
        // Set initial visibility for other columns
    });
    const itemsPerPage = 10; // Number of items to display per page
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(true); // Loading indicator state
    const [suggestions, setSuggestions] = useState<string[]>([]); // Search suggestions

    // Simulated favorite projects
    const [favorites, setFavorites] = useState<string[]>([]);

    // Simulate an API call to fetch data
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false); // Simulated data loading completed
        }, 2000); // Simulated 2 seconds of loading time
    }, []);

    useEffect(() => {
        // Simulated search suggestions based on project types in the data
        const projectTypes = (data as any[])
            .flatMap((provider) =>
                provider.projects.map((project) => project.projectType)
            )
            .filter((projectType) =>
                projectType.toLowerCase().includes(filter.toLowerCase())
            )
            .slice(0, 5); // Show up to 5 suggestions
        setSuggestions(projectTypes);
    }, [filter]);

    const toggleSortDirection = () => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    };

    const toggleColumnVisibility = (columnName: string) => {
        setColumnVisibility({
            ...columnVisibility,
            [columnName]: !columnVisibility[columnName],
        });
    };

    const isDataArray = Array.isArray(data);

    const sortedData = (isDataArray ? data : []).map((provider) => {
        return {
            ...provider,
            projects: [...provider.projects].sort((a, b) => {
                let compareValueA = a[sortColumn];
                let compareValueB = b[sortColumn];

                if (
                    typeof compareValueA === 'string' &&
                    typeof compareValueB === 'string'
                ) {
                    return sortDirection === 'asc'
                        ? compareValueA.localeCompare(compareValueB)
                        : compareValueB.localeCompare(compareValueA);
                }

                return 0;
            }),
        };
    });

    const applyFilters = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const filteredData = sortedData.filter((provider) =>
            provider.projects.some((project) =>
                project.projectType
                    .toLowerCase()
                    .includes(appliedFilters.projectType.toLowerCase())
            )
        );

        return filteredData.slice(startIndex, endIndex);
    };

    const clearFilters = () => {
        setAppliedFilters({ projectType: '' });
        setFilter('');
    };

    const toggleFavorite = (projectName: string) => {
        if (favorites.includes(projectName)) {
            setFavorites(
                favorites.filter((favorite) => favorite !== projectName)
            );
        } else {
            setFavorites([...favorites, projectName]);
        }
    };

    const isFavorite = (projectName: string) => {
        return favorites.includes(projectName);
    };

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const exportDataToCSV = () => {
        const filteredAndSortedData = applyFilters(); // Apply filters and sorting to the data
        const csvData = Papa.unparse(filteredAndSortedData, {
            header: true, // Include headers
        });

        const blob = new Blob([csvData], { type: 'text/csv' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'exported_data.csv';
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div>
            {isLoading ? ( // Loading indicator
                <p>Loading...</p>
            ) : (
                <>
                    <div className='mb-4'>
                        <Label className='mr-2' htmlFor='filter'>
                            Filter by project type:
                        </Label>
                        <Input
                            id='filter'
                            value={filter}
                            onChange={(e) => setFilter(e.target.value)}
                            placeholder='Enter project type...'
                            className='border px-2 py-1'
                        />
                        {suggestions.length > 0 && ( // Search suggestions
                            <ul className='suggestions'>
                                {suggestions.map((suggestion) => (
                                    <li
                                        key={suggestion}
                                        onClick={() => setFilter(suggestion)}
                                    >
                                        {suggestion}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
    
                    <div className='mb-4'>
                        <Label className='mr-2' htmlFor='sort'>
                            Sort by:
                        </Label>
                        <Select
                            id='sort'
                            value={sortColumn}
                            onChange={(e) => setSortColumn(e.target.value)}
                            className='border px-2 py-1'
                        >
                            <SelectContent>
                                <SelectItem value='projectType'>Project Type</SelectItem>
                                <SelectItem value='name'>Name</SelectItem>
                                {/* Add other options as needed */}
                            </SelectContent>
                        </Select>
                        <Button
                            onClick={toggleSortDirection}
                            className='ml-2 border px-2 py-1'
                        >
                            {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
                        </Button>
                    </div>
    
                    <div className='mb-4'>
                        <Button onClick={clearFilters} className='border px-2 py-1'>
                            Clear Filters
                        </Button>
                        <Button onClick={applyFilters} className='ml-2 border px-2 py-1'>
                            Apply Filters
                        </Button>
                        <Button onClick={exportDataToCSV} className='ml-2 border px-2 py-1'>
                            Export CSV
                        </Button>
                    </div>
    
                    <div className='mb-4'>
                        <span className='mr-2'>Page {currentPage} of {totalPages}</span>
                        <Button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className='border px-2 py-1'
                        >
                            Previous
                        </Button>
                        <Button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className='ml-2 border px-2 py-1'
                        >
                            Next
                        </Button>
                    </div>
    
                    <div className='mb-4'>
                        <Label className='mr-2'>Column Visibility:</Label>
                        <div className='flex'>
                            {Object.keys(columnVisibility).map((columnName) => (
                                <div key={columnName} className='mr-2'>
                                    <Label htmlFor={columnName}>
                                        <input
                                            type='checkbox'
                                            id={columnName}
                                            checked={columnVisibility[columnName]}
                                            onChange={() => toggleColumnVisibility(columnName)}
                                        />
                                        {columnName}
                                    </Label>
                                </div>
                            ))}
                        </div>
                    </div>
    
                    <table className='inspiration-table bg-theme min-w-full border'>
                        <thead>
                            <tr>
                                {columnVisibility.projectType && (
                                    <th>Project Type</th>
                                )}
                                {columnVisibility.name && <th>Name</th>}
                                <th>Colors</th>
                                <th>Color Scheme</th>
                                <th>Style</th>
                                <th>URL</th>
                                <th>Preview</th>
                                <th>Mobile</th>
                                <th>Animations</th>
                                <th>Component Inspiration</th>
                                <th>Favorite</th> {/* Favorite column */}
                            </tr>
                        </thead>
                        <tbody>
                            {applyFilters().map((provider) =>
                                provider.projects.map((project, index) => (
                                    <tr key={index}>
                                        {columnVisibility.projectType && (
                                            <td>{project.projectType}</td>
                                        )}
                                        {columnVisibility.name && <td>{project.name}</td>}
                                        <td>
                                            {Array.isArray(project.colors)
                                                ? project.colors.join(', ')
                                                : project.colors}
                                        </td>
                                        <td>{project.colorScheme}</td>
                                        <td>
                                            {Array.isArray(project.style)
                                                ? project.style.join(', ')
                                                : project.style}
                                        </td>
                                        <td>
                                            <a
                                                href={project.url}
                                                target='_blank'
                                                rel='noopener noreferrer'
                                            >
                                                {(() => {
                                                    try {
                                                        return new URL(project.url).hostname;
                                                    } catch (e) {
                                                        return project.url; // Fallback to showing the full URL or some other default
                                                    }
                                                })()}
                                            </a>
                                        </td>
                                        <td>{project.preview}</td>
                                        <td>{project.hasMobileDevice}</td>
                                        <td>{project.animations}</td>
                                        <td>{project.componentInspiration}</td>
                                        <td>
                                            <Button
                                                onClick={() => toggleFavorite(project.name)}
                                                className={`border px-2 py-1 ${
                                                    isFavorite(project.name) ? 'favorite' : ''
                                                }`}
                                            >
                                                {isFavorite(project.name) ? 'Remove' : 'Add'}
                                            </Button>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </>
            )}
        </div>
    );
    
};

export default InspirationTable;
