'use client';

import React from "react";
import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "../../../../data-tables/data-table-column-header";

type Project = {
    projectType: string;
    colors: string[] | string;
    colorScheme: string | null;
    style: string[] | string;
    url: string;
    preview: string | null;
    hasMobileDevice: boolean | null;
    animations: boolean | null;
    componentInspiration: string | null;
};

export const displayInspiration: ColumnDef<Project>[] = [
    {
        accessorKey: "projectType",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Project Type" />
        ),
        cell: ({ row }) => <div>{row.original.projectType}</div>,
    },
    {
        accessorKey: "colors",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Colors" />
        ),
        cell: ({ row }) => <div>{Array.isArray(row.original.colors) ? row.original.colors.join(', ') : row.original.colors}</div>,
    },
    {
        accessorKey: "colorScheme",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Color Scheme" />
        ),
        cell: ({ row }) => <div>{row.original.colorScheme}</div>,
    },
    {
        accessorKey: "style",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Style" />
        ),
        cell: ({ row }) => <div>{Array.isArray(row.original.style) ? row.original.style.join(', ') : row.original.style}</div>,
    },
    {
        accessorKey: "url",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="URL" />
        ),
        cell: ({ row }) => <a href={row.original.url} target="_blank" rel="noopener noreferrer">{row.original.url}</a>,
    },
    {
        accessorKey: "preview",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Preview" />
        ),
        cell: ({ row }) => <div>{row.original.preview}</div>,
    },
    {
        accessorKey: "hasMobileDevice",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Has Mobile Device" />
        ),
        cell: ({ row }) => <div>{row.original.hasMobileDevice ? "Yes" : "No"}</div>,
    },
    {
        accessorKey: "animations",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Animations" />
        ),
        cell: ({ row }) => <div>{row.original.animations ? "Yes" : "No"}</div>,
    },
    {
        accessorKey: "componentInspiration",
        header: ({ column }) => (
            <DataTableColumnHeader column={column} title="Component Inspiration" />
        ),
        cell: ({ row }) => <div>{row.original.componentInspiration}</div>,
    },
];
