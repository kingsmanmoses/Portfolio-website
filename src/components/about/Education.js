import React from 'react';
import './education.css';

const Education = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Degree</th>
          <th>Department</th>
          <th>Institute</th>
          <th>Year</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Advanced Diploma</td>
          <td>Software Engineering</td>
          <td>APTECH</td>
          <td>2020 - 2022</td>
        </tr>
      </tbody>
    </table>
  );
};

export default Education;
