import React, { useState } from 'react';

function EditableTable({ data } :{data: any}) {
  const [editableData, setEditableData] = useState(data);

  const handleEdit = (rowIndex: number, colIndex: number, newValue: any) => {
    const updatedData = [...editableData];
    updatedData[rowIndex][colIndex] = newValue;
    setEditableData(updatedData);
  };

  const handleDelete = (rowIndex: number) => {
    const updatedData = [...editableData];
    updatedData.splice(rowIndex, 1);
    setEditableData(updatedData);
  };

  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          {Object.keys(data[0]).map((colName, colIndex) => (
            <th
              key={colIndex}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {colName}
            </th>
          ))}
          <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Действия
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {editableData.map((row: any, rowIndex: any) => (
          <tr key={rowIndex}>
            {Object.values(row).map((cellValue: any, colIndex) => (
              <td key={colIndex} className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  {colIndex === 0 ? (
                    <input
                      type="text"
                      className="border border-gray-300 rounded-md p-1 w-24"
                      value={cellValue}
                      onChange={(e) => handleEdit(rowIndex, colIndex, e.target.value)}
                    />
                  ) : (
                    <span className="text-sm text-gray-900">{cellValue}</span>
                  )}
                </div>
              </td>
            ))}
            <td className="px-6 py-4 whitespace-nowrap">
              <button
                onClick={() => handleDelete(rowIndex)}
                className="text-indigo-600 hover:text-indigo-900"
              >
                Удалить
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EditableTable;
