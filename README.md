# File/Folder Explorer

This is a simple React application that allows users to explore a hierarchical structure of files and folders. Users can add new folders and delete existing nodes (files or folders) from the tree structure.

## Features

- **Expand/Collapse Folders**: Click on the `+` or `-` icons to expand or collapse folders.
- **Add New Folders**: Click on the folder icon next to a folder name to add a new subfolder.
- **Delete Nodes**: Click on the trash icon next to a node to delete it from the tree.

## How to Run the Project

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/ravi00007/React-File-Explorer.git
   cd file-folder-explorer

2. Install Dependencies:
   npm install 

3. Run the Application:
   npm start

4. Open the Application:
   Open your browser and navigate to http://localhost:3000 to view the application.   


Data Structure
    The application uses a JSON-based data structure to represent the file/folder hierarchy. Each node in the tree has the following properties:

    id: A unique identifier for the node.

    name: The name of the file or folder.

    isFolder: A boolean indicating whether the node is a folder.

    children: An array of child nodes (only applicable for folders).