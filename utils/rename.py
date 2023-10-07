#!/usr/bin/env python

import os

directory = "."  # Use "." to represent the current directory

for root, dirs, files in os.walk(directory):
    for filename in files:
        if filename.endswith(".scss") and filename != "styles.scss":
            new_filename = "_" + filename
            os.rename(os.path.join(root, filename), os.path.join(root, new_filename))