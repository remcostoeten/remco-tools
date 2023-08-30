#!/bin/bash

# Create test directory structure
mkdir -p test_directory/subdir1
mkdir -p test_directory/subdir2

# Create test .scss files with content
echo "This is a tstringone test file." > test_directory/file1.scss
echo "Another tstringone example." > test_directory/subdir1/file2.scss
echo "Here's some tstringone content." > test_directory/subdir2/file3.scss

echo "Test files and folders created."

