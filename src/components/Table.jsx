import styled from "styled-components";

function Table() {
  const TableLayout = styled.div`
    background-color: #f1cbcb;
    grid-column: 1/-1;

    th,
    td {
      border: 1px solid black;
      padding: 8px;
      text-align: center;
    }
  `;

  return (
    <TableLayout>
      <table>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
            <th>Column 4</th>
            <th>Column 5</th>
            <th>Column 6</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, </td>
            <td>Row 1, </td>
            <td>Row 1, </td>
            <td>Row 1, </td>
            <td>Row 1, </td>
            <td>Row 1, </td>
          </tr>
          <tr>
            <td>Row 2, </td>
            <td>Row 2, </td>
            <td>Row 2, </td>
            <td>Row 2, </td>
            <td>Row 2, </td>
            <td>Row 2, </td>
          </tr>
          <tr>
            <td>Row 3, </td>
            <td>Row 3, </td>
            <td>Row 3, </td>
            <td>Row 3, </td>
            <td>Row 3, </td>
            <td>Row 3, </td>
          </tr>
          <tr>
            <td>Row 4, </td>
            <td>Row 4, </td>
            <td>Row 4, </td>
            <td>Row 4, </td>
            <td>Row 4, </td>
            <td>Row 4, </td>
          </tr>
          <tr>
            <td>Row 5, </td>
            <td>Row 5, </td>
            <td>Row 5, </td>
            <td>Row 5, </td>
            <td>Row 5, </td>
            <td>Row 5, </td>
          </tr>
        </tbody>
      </table>
    </TableLayout>
  );
}

export default Table;
