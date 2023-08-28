// @/utils/generatePythonScript.ts
export const generatePythonScript = (string1: string, string2: string, file: string, removeStrings: boolean) => {
    let script = `
  import os
  
  def search_and_replace(directory, string1, string2, exclude_file=None):
    for foldername, subfolders, filenames in os.walk(directory):
      for filename in filenames:
        if exclude_file and filename == exclude_file:
          continue
        file_path = os.path.join(foldername, filename)
        with open(file_path, 'r') as file:
          filedata = file.read()
        newdata = filedata
        if not removeStrings:
          newdata = filedata.replace(string1, string2)
        else:
          newdata = filedata.replace(string1, '')
          if string2:
            newdata = newdata.replace(string2, '')
        with open(file_path, 'w') as file:
          file.write(newdata)
  
  search_and_replace('.', '${string1}', '${string2}', '${file}' if '${file}' else None)
  `;
  
    if (removeStrings) {
      script = script.replace("if not removeStrings:\n        newdata = filedata.replace(string1, string2)\n      else:", "");
    }
  
    return script;
  };
  