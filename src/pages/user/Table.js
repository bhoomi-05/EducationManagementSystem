import React from 'react';

const Table = ({ data }) => {
  return (
    <table className="table bg-blue-100 px-2 py">
      <thead>
        <tr>
          <th className="border px-12 py-2">id</th>
          <th className="border px-10 py-2">name</th>
          <th className="border px-16 py-2">username</th>
          <th className="border px-16 py-2">email</th>

        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td className="border px-2 py-2">{item.id}</td>
            <td className="border px-2 py-2">{item.name}</td>
            <td className="border px-2 py-2">{item.username}</td>
            <td className="border px-2 py-2">{item.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
