import { useState, useReducer, Children } from "react";
import { v4 as uuid4 } from "uuid";

interface Folder {
  id: string;
  name: string;
  children: (Folder | File)[];
}

interface File {
  id: string;
  filename: string;
}

const initialData: Folder = {
  id: "root",
  name: "Root",
  children: [],
};
type Action =
  | { type: "ADD"; parentId: string }
  | { type: "DELETE"; nodeId: string };
const treeReducer = (state: Folder, action: Action): Folder => {
  switch (action.type) {
    case "ADD":
      return addFolder(state, action.parentId);
    case "DELETE":
      return deleteNode(state, action.nodeId);
    default:
      return state;
  }
};
const addFolder = (state: Folder, parentId: string): Folder => {
  console.log("State", state);
  console.log("parentId", parentId);
  if (state.id === parentId) {
    const newFolder: Folder = { id: uuid4(), name: "New Folder", children: [] };
    return { ...state, children: [...state.children, newFolder] };
  }
  return {
    ...state,
    children: state.children.map((child) =>
      addFolder(child as Folder, parentId)
    ),
  };
};

const deleteNode = (state: Folder, nodeId: string): Folder => {
  if (state.id === nodeId) {
    return state; // root cannot be deleted
  }
  return {
    ...state,
    children: state.children
      .filter((child) => child.id !== nodeId)
      .map((child) =>
        "children" in child ? deleteNode(child as Folder, nodeId) : child
      ),
  };
};

export function TreeFolder() {
  const [state, dispatch] = useReducer(treeReducer, initialData);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());

  const expandFolder = (folderId: string) => {
    setExpanded((prev) => {
      console.log("prev", prev);
      const newExpanded = new Set(prev);
      if (newExpanded.has(folderId)) {
        newExpanded.delete(folderId);
      } else {
        newExpanded.add(folderId);
      }
      console.log("expanded", newExpanded);
      return newExpanded;
    });
  };

  const renderTree = (folder: Folder) => {
    return (
      <div key={folder.id} style={{ marginLeft: "20px" }}>
        <div>
          <strong
            onClick={() => expandFolder(folder.id)}
            style={{ cursor: "pointer" }}
          >
            {"[+]"} {folder.name}
          </strong>
          <div>
            <button
              onClick={() => dispatch({ type: "ADD", parentId: folder.id })}
            >
              Add button
            </button>
            <button
              onClick={() => dispatch({ type: "DELETE", nodeId: folder.id })}
              style={{ marginLeft: "8px", color: "red" }}
            >
              🗑️ Delete
            </button>
          </div>
        </div>
        {expanded.has(folder.id) && (
          <div>
            {folder.children.map((child) =>
              "children" in child ? renderTree(child as Folder) : null
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <div>
      <p> Tree structure</p>
      {renderTree(state)}
    </div>
  );
}

export default TreeFolder;
