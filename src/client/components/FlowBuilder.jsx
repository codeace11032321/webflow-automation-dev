import React, { useState, useCallback } from 'react';
import ReactFlow, {
  addEdge,
  Background,
  Controls,
  MiniMap,
} from 'react-flow-renderer';
import { useDrop } from 'react-dnd';

const FlowBuilder = () => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);

  const [, drop] = useDrop(() => ({
    accept: 'module',
    drop: (item, monitor) => {
      const position = monitor.getClientOffset();
      const dropPosition = {
        x: position.x - 250,
        y: position.y - 80,
      };
      
      addNode(item, dropPosition);
    },
  }));

  const addNode = (module, position) => {
    const newNode = {
      id: `${module.id}-${Date.now()}`,
      type: 'default',
      position,
      data: { label: module.name },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div ref={drop} className="flow-container">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onConnect={onConnect}
        fitView
      >
        <Background />
        <Controls />
        <MiniMap />
      </ReactFlow>
    </div>
  );
};

export default FlowBuilder;