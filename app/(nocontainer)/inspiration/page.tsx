'use client';
import React, { useEffect, useState } from 'react';
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

    return (
        <div className='bg-theme'>
            <div className={` ${isLoading ? 'bg-theme blur' : 'mb-4'}`}>
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
                {suggestions.length > 0 && (
                    <ul className='suggestions bg-theme hidden rounded-md border p-2 shadow-md'>
                        {suggestions.map((suggestion) => (
                            <li
                                key={suggestion}
                                onClick={() => setFilter(suggestion)}
                                className='cursor-pointer hover:bg-gray-100'
                            >
                                {suggestion}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div
                className={` ${
                    isLoading
                        ? 'bg-theme flex-end mb-4 flex gap-1 align-top blur'
                        : 'bg-theme flex-end mb-4 flex gap-1 align-top blur'
                }`}
            >
                <Button
                    variant='ghost'
                    onClick={clearFilters}
                    className='border px-4 py-2'
                >
                    Clear Filters
                </Button>
                <Button
                    variant='ghost'
                    onClick={applyFilters}
                    className='ml-2 border px-4 py-2'
                >
                    Apply Filters
                </Button>
                <div className='flex flex-col gap-1'>
                    <Select
                        id='sort'
                        value={sortColumn}
                        onChange={(e) => setSortColumn(e.target.value)}
                        className='border px-2 py-1'
                    >
                        <SelectContent>
                            <SelectItem value='projectType'>
                                Project Type
                            </SelectItem>
                            <SelectItem value='name'>Name</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button
                        onClick={toggleSortDirection}
                        className='ml-2 border px-2 py-1'
                    >
                        {sortDirection === 'asc' ? 'Ascending' : 'Descending'}
                    </Button>
                </div>
            </div>

            <div
                className={` ${
                    isLoading
                        ? 'bg-theme flex-end mb-4 flex gap-1 align-top blur'
                        : 'bg-theme flex-end mb-4 flex gap-1 align-top blur'
                }`}
            >
                <span className='mr-2'>
                    Page {currentPage} of {totalPages}
                </span>
                <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className='border px-4 py-2'
                >
                    Previous
                </Button>
                <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className='ml-2 border px-4 py-2'
                >
                    Next
                </Button>
            </div>

            <div
                className={` ${
                    isLoading
                        ? 'bg-theme flex-end mb-4 flex gap-1 align-top blur'
                        : 'bg-theme flex-end mb-4 flex gap-1 align-top blur'
                }`}
            >
                <Label className='mr-2'>Column Visibility:</Label>
                <div className='flex'>
                    {Object.keys(columnVisibility).map((columnName) => (
                        <div key={columnName} className='mr-2'>
                            <Label
                                htmlFor={columnName}
                                className='flex items-center'
                            >
                                <input
                                    type='checkbox'
                                    id={columnName}
                                    checked={columnVisibility[columnName]}
                                    onChange={() =>
                                        toggleColumnVisibility(columnName)
                                    }
                                    className='mr-1'
                                />
                                {columnName}
                            </Label>
                        </div>
                    ))}
                </div>
            </div>
           <table className={` ${isLoading ? 'inspiration-table bg-theme min-w-full border' : 'inspiration-table bg-theme min-w-full border'}`}">
                            <thead>
                    <tr>
                        {columnVisibility.projectType && <th>Project Type</th>}
                        {columnVisibility.name && <th>Name</th>}
                        {/* Add other columns here */}
                    </tr>
                </thead>
                <tbody>
                    {applyFilters().map((provider) =>
                        provider.projects.map((project, index) => (
                            <tr key={index}>
                                {columnVisibility.projectType && (
                                    <td>{project.projectType}</td>
                                )}
                                {columnVisibility.name && (
                                    <td>{project.name}</td>
                                )}
                                <td>{project.name}</td>
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
                                                return new URL(project.url)
                                                    .hostname;
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
                                        onClick={() =>
                                            toggleFavorite(project.name)
                                        }
                                        className={`border px-2 py-1 ${
                                            isFavorite(project.name)
                                                ? 'favorite'
                                                : ''
                                        }`}
                                    >
                                        {isFavorite(project.name)
                                            ? 'Remove'
                                            : 'Add'}
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default InspirationTable;
