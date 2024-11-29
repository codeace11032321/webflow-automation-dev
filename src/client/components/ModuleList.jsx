import React from 'react';
import { useDrag } from 'react-dnd';

const moduleTypes = {
  TRIGGER: 'Trigger',
  ACTION: 'Action',
  FILTER: 'Filter',
};

const modules = [
  { id: 'webflow-trigger', type: moduleTypes.TRIGGER, name: 'Webflow Trigger', description: 'Triggers when Webflow event occurs' },
  { id: 'collection-filter', type: moduleTypes.FILTER, name: 'Collection Filter', description: 'Filter collection items' },
  { id: 'update-item', type: moduleTypes.ACTION, name: 'Update Item', description: 'Update a collection item' },
  { id: 'create-item', type: moduleTypes.ACTION, name: 'Create Item', description: 'Create a new collection item' },
];

const ModuleItem = ({ module }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: 'module',
    item: { ...module },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`module-item ${isDragging ? 'opacity-50' : ''}`}
    >
      <h3 className="font-semibold">{module.name}</h3>
      <p className="text-sm text-gray-600">{module.description}</p>
      <span className="inline-block mt-2 text-xs px-2 py-1 bg-gray-100 rounded">
        {module.type}
      </span>
    </div>
  );
};

const ModuleList = () => {
  return (
    <div className="module-list">
      <h2 className="text-xl font-bold mb-4">Modules</h2>
      {modules.map((module) => (
        <ModuleItem key={module.id} module={module} />
      ))}
    </div>
  );
};

export default ModuleList;