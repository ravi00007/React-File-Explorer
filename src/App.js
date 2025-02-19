import logo from "./logo.svg";
import "./App.css";
import json from "./data.json";
import React, { Component, useState } from "react";





function List({ data , addNodeToList , deleteNodeToList}) {
  const [isExpanded, setisExpanded] = useState({});

  return (
    <div className="container">
      {data.map((node) => (
        <div key={node.id}>
          {node.children && (
            <span
              onClick={() =>
                setisExpanded((prev) => ({
                  ...prev,
                  [node.name]: !prev[node.name],
                }))
              }
            >
              {" "}
              {isExpanded[node.name] ? "-" : "+"}{" "}
            </span>
          )}
          <span>{node.name}</span>
          {node.isFolder && (
            <span onClick={() => addNodeToList(node.id)}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfMt43f5llkF5OgPwtIozkZk38jQu2r-3XCg&s"
                alt="icon"
                className="icon"
              ></img>{" "}
            </span>
          )}
          <span  onClick={() => deleteNodeToList(node.id)}>
             <img src="data:image/png;base64,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"
              alt="icon"
              className="icon"
             ></img>
          </span>
          {isExpanded?.[node.name] && node.children && (
            <List data={node.children} addNodeToList={addNodeToList} deleteNodeToList={deleteNodeToList}  />
          )}
          {/* {node.children && <List data={node.children} />} */}
        </div>
      ))}
    </div>
  );
}

function App() {
  const [data,setData] = useState(json);
  const addNodeToList = (parentId) => {
      const name = prompt("Enter Folder Name");
     const updatedData = (list)=>{
        return list.map((node)=>{
          if(node.id===parentId){
            return{
              ...node,
              children:[...node.children,{id:Math.random(),name:name,isFolder:true,children:[]}]
            }
          }if(node.children){
              return{
                ...node,
                children:updatedData(node.children)
              }
            }
            return node;
        })
      }

    setData(prev=>updatedData(prev));

  }
  const deleteNodeToList = (id) => {
    const updateTree = (list)=>{
      return  list.filter((node)=>node.id !== id).map(
        (node)=>{
          if(node.children){
            return{
              ...node,
              children:updateTree(node.children)
            }
          }
          return node;
        }
      );
    }
    setData((prev)=>updateTree(prev));
  }
  return (
    <div className="App">
      <h2>File/Folder Explorer</h2>
      <header className="App-header">
        <List data={data} addNodeToList={addNodeToList} deleteNodeToList={deleteNodeToList} />
      </header>
    </div>
  );
}

export default App;
