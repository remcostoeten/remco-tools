import os

def process_scss_file(file_path):
    with open(file_path, 'r') as f:
        content = f.read()
    
    modified_content = content.replace("tstringone", "")
    
    with open(file_path, 'w') as f:
        f.write(modified_content)

def search_and_process(directory):
    for root, _, files in os.walk(directory):
        for file_name in files:
            if file_name.endswith('.scss'):
                file_path = os.path.join(root, file_name)
                process_scss_file(file_path)

def main():
    current_directory = os.getcwd()
    search_and_process(current_directory)
    print("Search and removal complete.")
if __name__ == "__main__":
    main()
